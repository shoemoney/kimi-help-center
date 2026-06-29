#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  parseFrontMatter,
  validateSupportedMDXComponents,
} from "./setup-docs.js";
import {
  HUMAN_MAINTAINED_LOCALE_CODES,
  SOURCE_LOCALE,
  SEO_LOCALES,
  isHumanMaintainedLocale,
  machineTranslationTargetLocaleCodes,
  normalizeSeoLocale,
} from "./seo-locales.js";

const MARKDOWN_EXT = ".md";
const ROOT_CONFIG_FILE_NAME = "_config.json";
const CATEGORY_CONFIG_FILE_NAME = "_category.json";
const MACHINE_FRONT_MATTER_FIELDS = ["slug", "order", "extract_headings", "preview"];
const JSON_LOCKED_KEYS = new Set(["slug", "icon", "type", "pageUrl", "url", "src", "href", "path", "order"]);

export async function checkTranslations(options = {}) {
  const docsRoot = path.resolve(options.docsRoot || ".");
  const sourceLocale = normalizeSeoLocale(options.sourceLocale || SOURCE_LOCALE);
  const targetLocales = normalizeTargets(options.targetLocales || [], sourceLocale);
  const sourceRoot = path.join(docsRoot, sourceLocale);
  await assertDirectory(sourceRoot, `source locale ${sourceLocale}`);

  const plan = await buildExpectedFiles(sourceRoot);
  const report = {
    docsRoot,
    sourceLocale,
    targetLocales,
    expectedPerLocale: plan.length,
    checkedFiles: 0,
    missing: [],
    errors: [],
    warnings: [],
  };

  for (const targetLocale of targetLocales) {
    const targetRoot = path.join(docsRoot, targetLocale);
    for (const item of plan) {
      const targetPath = path.join(targetRoot, item.relativePath);
      if (!(await isFile(targetPath))) {
        const equivalentPath = item.kind === "article"
          ? await findExistingArticleBySlug(targetRoot, item)
          : null;
        if (equivalentPath) {
          report.checkedFiles += 1;
          await checkArticle({ item, targetPath: equivalentPath, targetLocale, report });
          report.warnings.push({
            targetLocale,
            path: equivalentPath,
            issue: `source article is covered by same-slug file instead of ${targetPath}`,
          });
          continue;
        }
        report.missing.push({ targetLocale, path: targetPath });
        continue;
      }
      report.checkedFiles += 1;
      if (item.kind === "article") {
        await checkArticle({ item, targetPath, targetLocale, report });
      } else {
        await checkJSON({ item, targetPath, targetLocale, report });
      }
    }
  }

  report.ok = report.missing.length === 0 && report.errors.length === 0;
  if (!report.ok && !options.noThrow) {
    const error = new Error(
      `translation check failed: missing=${report.missing.length} errors=${report.errors.length}`,
    );
    error.report = report;
    throw error;
  }
  return report;
}

function normalizeTargets(input, sourceLocale) {
  const requested = input.length > 0 ? input : machineTranslationTargetLocaleCodes();
  const out = [];
  for (const locale of [...new Set(requested.map(normalizeSeoLocale))]) {
    if (locale === sourceLocale) {
      continue;
    }
    if (isHumanMaintainedLocale(locale)) {
      throw new Error(`${locale} is human-maintained and is excluded from machine translation checks`);
    }
    out.push(locale);
  }
  return out;
}

async function buildExpectedFiles(sourceRoot) {
  const items = [];
  const rootConfig = path.join(sourceRoot, ROOT_CONFIG_FILE_NAME);
  if (await isFile(rootConfig)) {
    items.push({ kind: "json", sourcePath: rootConfig, relativePath: ROOT_CONFIG_FILE_NAME });
  }
  for (const category of await listDirectories(sourceRoot)) {
    const categoryRoot = path.join(sourceRoot, category);
    const categoryConfig = path.join(categoryRoot, CATEGORY_CONFIG_FILE_NAME);
    if (await isFile(categoryConfig)) {
      items.push({
        kind: "json",
        sourcePath: categoryConfig,
        relativePath: path.join(category, CATEGORY_CONFIG_FILE_NAME),
      });
    }
    for (const articlePath of await listMarkdownFiles(categoryRoot)) {
      items.push({
        kind: "article",
        sourcePath: articlePath,
        relativePath: path.relative(sourceRoot, articlePath),
      });
    }
  }
  return items.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

async function checkArticle({ item, targetPath, targetLocale, report }) {
  const source = await fs.readFile(item.sourcePath, "utf8");
  const target = await fs.readFile(targetPath, "utf8");
  const sourceParsed = parseFrontMatter(source);
  const targetParsed = parseFrontMatter(target);

  for (const field of MACHINE_FRONT_MATTER_FIELDS) {
    if (JSON.stringify(sourceParsed.frontMatter[field]) !== JSON.stringify(targetParsed.frontMatter[field])) {
      report.warnings.push({
        targetLocale,
        path: targetPath,
        issue: `front matter field '${field}' differs from source`,
      });
    }
  }

  try {
    validateSupportedMDXComponents(targetParsed.content, `${targetLocale}/${item.relativePath}`);
  } catch (error) {
    report.errors.push({ targetLocale, path: targetPath, issue: error.message });
  }

  if (normalizeText(sourceParsed.content) === normalizeText(targetParsed.content)) {
    report.warnings.push({
      targetLocale,
      path: targetPath,
      issue: "article body is text-identical to source",
    });
  }
}

async function checkJSON({ item, targetPath, targetLocale, report }) {
  const source = JSON.parse(await fs.readFile(item.sourcePath, "utf8"));
  const target = JSON.parse(await fs.readFile(targetPath, "utf8"));
  compareJSONShape(source, target, { targetLocale, targetPath, report });
}

async function findExistingArticleBySlug(targetRoot, item) {
  const source = await fs.readFile(item.sourcePath, "utf8");
  const sourceSlug = parseFrontMatter(source).frontMatter.slug;
  if (!sourceSlug) {
    return null;
  }
  const targetCategoryRoot = path.join(targetRoot, path.dirname(item.relativePath));
  if (!(await isDirectory(targetCategoryRoot))) {
    return null;
  }
  for (const articlePath of await listMarkdownFiles(targetCategoryRoot)) {
    try {
      const candidate = await fs.readFile(articlePath, "utf8");
      if (parseFrontMatter(candidate).frontMatter.slug === sourceSlug) {
        return articlePath;
      }
    } catch {
      // Ignore malformed existing files here; validation reports them later.
    }
  }
  return null;
}

function compareJSONShape(source, target, context, keyPath = "") {
  if (Array.isArray(source)) {
    if (!Array.isArray(target) || target.length !== source.length) {
      context.report.errors.push({
        targetLocale: context.targetLocale,
        path: context.targetPath,
        issue: `JSON array shape differs at ${keyPath || "<root>"}`,
      });
      return;
    }
    source.forEach((value, index) => compareJSONShape(value, target[index], context, `${keyPath}[${index}]`));
    return;
  }

  if (source && typeof source === "object") {
    if (!target || typeof target !== "object" || Array.isArray(target)) {
      context.report.errors.push({
        targetLocale: context.targetLocale,
        path: context.targetPath,
        issue: `JSON object shape differs at ${keyPath || "<root>"}`,
      });
      return;
    }
    for (const key of Object.keys(source)) {
      if (!(key in target)) {
        context.report.errors.push({
          targetLocale: context.targetLocale,
          path: context.targetPath,
          issue: `JSON key missing at ${appendPath(keyPath, key)}`,
        });
        continue;
      }
      compareJSONShape(source[key], target[key], context, appendPath(keyPath, key));
    }
    return;
  }

  const parentKey = keyPath.split(".").at(-1)?.replace(/\[\d+\]$/, "") || "";
  if (typeof source === "string" && JSON_LOCKED_KEYS.has(parentKey) && source !== target) {
    context.report.warnings.push({
      targetLocale: context.targetLocale,
      path: context.targetPath,
      issue: `locked JSON value differs at ${keyPath}`,
    });
  }
}

function appendPath(base, key) {
  return base ? `${base}.${key}` : key;
}

function normalizeText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

async function listDirectories(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function listMarkdownFiles(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && path.extname(entry.name) === MARKDOWN_EXT)
    .map((entry) => path.join(root, entry.name))
    .sort();
}

async function assertDirectory(candidate, label) {
  const stat = await fs.stat(candidate);
  if (!stat.isDirectory()) {
    throw new Error(`${label} is not a directory`);
  }
}

async function isFile(candidate) {
  try {
    const stat = await fs.stat(candidate);
    return stat.isFile();
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function isDirectory(candidate) {
  try {
    const stat = await fs.stat(candidate);
    return stat.isDirectory();
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

function parseArgs(argv) {
  const options = { docsRoot: ".", targetLocales: [], json: false };
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    switch (arg) {
      case "--":
        break;
      case "--source-locale":
        options.sourceLocale = requireValue(argv, ++index, arg);
        break;
      case "--target-locale":
      case "--target":
        options.targetLocales.push(...splitList(requireValue(argv, ++index, arg)));
        break;
      case "--all-seo-locales":
        options.targetLocales = machineTranslationTargetLocaleCodes();
        break;
      case "--json":
        options.json = true;
        break;
      case "-h":
      case "--help":
        options.help = true;
        break;
      default:
        if (arg.startsWith("-")) {
          throw new Error(`unknown option ${arg}`);
        }
        positional.push(arg);
    }
  }
  if (positional.length > 1) {
    throw new Error("pass at most one docs root");
  }
  if (positional[0]) {
    options.docsRoot = positional[0];
  }
  return options;
}

function splitList(value) {
  return String(value || "").split(",").map((item) => item.trim()).filter(Boolean);
}

function requireValue(argv, index, flag) {
  const value = argv[index];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function printHelp() {
  console.log(`Usage: node scripts/check-translations.js [options] [docs-root]

Options:
  --target-locale <locale>     Target locale, repeatable or comma-separated.
  --all-seo-locales            Check every machine-translation SEO locale.
  --source-locale <locale>     Source locale. Defaults to en-US.
  --json                       Print report as JSON.
  -h, --help                   Show this help.

Supported SEO locales:
${SEO_LOCALES.map((locale) => `  - ${locale.code} (${locale.name})`).join("\n")}

Human-maintained locales excluded from machine translation checks:
${HUMAN_MAINTAINED_LOCALE_CODES.map((locale) => `  - ${locale}`).join("\n")}
`);
}

function printReport(report, json) {
  if (json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }
  console.log(
    [
      "translation check completed",
      `source=${report.sourceLocale}`,
      `targets=${report.targetLocales.join(",")}`,
      `expected_per_locale=${report.expectedPerLocale}`,
      `checked=${report.checkedFiles}`,
      `missing=${report.missing.length}`,
      `errors=${report.errors.length}`,
      `warnings=${report.warnings.length}`,
      `ok=${report.ok}`,
    ].join(" "),
  );
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }
  const report = await checkTranslations({ ...options, noThrow: true });
  printReport(report, options.json);
  if (!report.ok) {
    process.exitCode = 1;
  }
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
