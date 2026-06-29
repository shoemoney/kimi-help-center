#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadDotenv } from "dotenv";
import yaml from "js-yaml";

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
  seoLocaleInfo,
} from "./seo-locales.js";

const MARKDOWN_EXT = ".md";
const ROOT_CONFIG_FILE_NAME = "_config.json";
const CATEGORY_CONFIG_FILE_NAME = "_category.json";
const DEFAULT_BASE_URL = "https://openai.app.msh.team/v1";
const DEFAULT_TRANSLATION_MODEL = "gpt-5.5";
const DEFAULT_TRANSLATION_TEMPERATURE = 0.6;
const DEFAULT_TRANSLATION_THINKING = "none";
const DEFAULT_TRANSLATION_CONCURRENCY = 4;
const DEFAULT_TRANSLATION_MAX_RETRIES = 2;
const DEFAULT_TRANSLATION_TIMEOUT_MS = 300000;
const MAX_GLOSSARY_TERMS = 220;
const CATEGORY_IMAGE_NAMES = [
  "_category.png",
  "_category.jpg",
  "_category.jpeg",
  "_category.webp",
];
const markdownImageRefRegex = /!\[[^\]]*\]\(([^)\s]+)\)/g;
const mdxSrcRefRegex = /\bsrc=["']([^"']+)["']/g;
const videoListTagRegex = /<VideoList\b[\s\S]*?\/>/g;
const videoListMediaRefRegex = /\b(?:url|poster)\s*:\s*["']([^"']+)["']/g;

const MACHINE_FRONT_MATTER_FIELDS = new Set([
  "slug",
  "order",
  "extract_headings",
  "preview",
]);

const JSON_LOCKED_KEYS = new Set([
  "slug",
  "icon",
  "type",
  "pageUrl",
  "url",
  "src",
  "href",
  "path",
  "order",
]);

loadDotenv({ path: ".env.local", override: false });
loadDotenv({ path: ".env", override: false });

export async function translateDocs(options = {}) {
  const docsRoot = path.resolve(options.docsRoot || ".");
  const sourceLocale = normalizeSeoLocale(options.sourceLocale || SOURCE_LOCALE);
  const targetLocales = normalizeTargetLocales(options.targetLocales || [], sourceLocale);
  const articleFilters = normalizeArticleFilters(options.articles || [], sourceLocale);
  const glossary = await loadGlossary(docsRoot);
  const sourceRoot = path.join(docsRoot, sourceLocale);

  await assertDirectory(sourceRoot, `source locale ${sourceLocale}`);

  const plan = await buildTranslationPlan(sourceRoot, sourceLocale, articleFilters);
  const concurrency = normalizePositiveInteger(
    options.concurrency || process.env.TRANSLATION_CONCURRENCY,
    DEFAULT_TRANSLATION_CONCURRENCY,
  );
  const provider = options.dryRun
    ? null
    : options.mock
      ? new MockTranslationProvider()
      : new OpenAICompatibleTranslationProvider(options);

  const summary = {
    docsRoot,
    sourceLocale,
    targetLocales,
    dryRun: Boolean(options.dryRun),
    translated: 0,
    skipped: 0,
    failed: 0,
    copiedAssets: 0,
    concurrency,
    failures: [],
    planned: [],
  };

  for (const targetLocale of targetLocales) {
    const targetRoot = path.join(docsRoot, targetLocale);
    if (!options.dryRun) {
      await fs.mkdir(targetRoot, { recursive: true });
    }

    const pending = [];
    let localeSkipped = 0;
    for (const item of plan.items) {
      const targetPath = path.join(targetRoot, item.relativePath);
      const exists = await isFile(targetPath);
      if (exists && !options.overwrite) {
        summary.skipped += 1;
        localeSkipped += 1;
        summary.planned.push({ targetLocale, path: targetPath, action: "skip-existing" });
        continue;
      }
      const equivalentPath = !exists && !options.overwrite && item.kind === "article"
        ? await findExistingArticleBySlug(targetRoot, item)
        : null;
      if (equivalentPath) {
        summary.skipped += 1;
        localeSkipped += 1;
        summary.planned.push({
          targetLocale,
          path: targetPath,
          action: "skip-existing-route",
          existingPath: equivalentPath,
        });
        continue;
      }

      summary.planned.push({
        targetLocale,
        path: targetPath,
        action: options.dryRun ? "dry-run" : exists ? "overwrite" : "create",
      });
      if (options.dryRun) {
        continue;
      }

      pending.push({ item, targetPath, targetLocale });
    }

    if (!options.dryRun && pending.length > 0) {
      let localeCompleted = 0;
      let localeFailed = 0;
      console.error(
        `[translate-docs] locale=${targetLocale} pending=${pending.length} skipped=${localeSkipped}`,
      );
      await runLimited(pending, concurrency, async (task) => {
        try {
          await translatePlannedItem({ ...task, provider, glossary });
          summary.translated += 1;
          localeCompleted += 1;
          console.error(
            `[translate-docs] ok locale=${targetLocale} progress=${localeCompleted + localeFailed}/${pending.length} path=${path.relative(docsRoot, task.targetPath)}`,
          );
        } catch (error) {
          summary.failed += 1;
          localeFailed += 1;
          summary.failures.push({
            targetLocale: task.targetLocale,
            path: task.targetPath,
            error: error.message,
          });
          console.error(
            `[translate-docs] failed locale=${targetLocale} progress=${localeCompleted + localeFailed}/${pending.length} path=${path.relative(docsRoot, task.targetPath)} error=${error.message}`,
          );
        }
      });
      console.error(
        `[translate-docs] locale=${targetLocale} completed translated=${localeCompleted} failed=${localeFailed}`,
      );
    }

    if (!options.dryRun) {
      console.error(`[translate-docs] copy-assets locale=${targetLocale}`);
      summary.copiedAssets += await copyReferencedAssets(sourceRoot, targetRoot, plan.assetPaths);
    }
  }

  if (summary.failed > 0) {
    const error = new Error(`translation completed with ${summary.failed} failed file(s)`);
    error.summary = summary;
    throw error;
  }
  return summary;
}

async function translatePlannedItem({ item, targetPath, targetLocale, provider, glossary }) {
  await fs.mkdir(path.dirname(targetPath), { recursive: true });
  if (item.kind === "article") {
    const translated = await translateArticleFile({
      sourcePath: item.sourcePath,
      relativePath: item.relativePath,
      targetLocale,
      provider,
      glossary,
    });
    await fs.writeFile(targetPath, translated, "utf8");
    return;
  }

  const translated = await translateJSONFile({
    sourcePath: item.sourcePath,
    relativePath: item.relativePath,
    targetLocale,
    provider,
    glossary,
  });
  await fs.writeFile(targetPath, translated, "utf8");
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

function normalizeTargetLocales(input, sourceLocale) {
  const requested = input.length > 0 ? input : machineTranslationTargetLocaleCodes();
  const seen = new Set();
  const out = [];
  for (const raw of requested) {
    const locale = normalizeSeoLocale(raw);
    if (locale === sourceLocale || seen.has(locale)) {
      continue;
    }
    if (isHumanMaintainedLocale(locale)) {
      throw new Error(`${locale} is human-maintained and is excluded from machine translation`);
    }
    seen.add(locale);
    out.push(locale);
  }
  if (out.length === 0) {
    throw new Error("at least one target locale is required");
  }
  return out;
}

function normalizeArticleFilters(filters, sourceLocale) {
  return filters
    .map((filter) => String(filter || "").trim())
    .filter(Boolean)
    .map((filter) => {
      const withoutLeading = filter.replace(/^\.?\//, "");
      if (withoutLeading.startsWith(`${sourceLocale}/`)) {
        return withoutLeading.slice(sourceLocale.length + 1);
      }
      return withoutLeading;
    });
}

async function buildTranslationPlan(sourceRoot, sourceLocale, articleFilters) {
  const items = [];
  const assetPaths = new Set();
  const hasArticleFilter = articleFilters.length > 0;

  const rootConfig = path.join(sourceRoot, ROOT_CONFIG_FILE_NAME);
  if (await isFile(rootConfig)) {
    items.push({
      kind: "json",
      sourcePath: rootConfig,
      relativePath: ROOT_CONFIG_FILE_NAME,
    });
  }

  const categories = await listDirectories(sourceRoot);
  for (const category of categories) {
    const categoryRoot = path.join(sourceRoot, category);
    const categoryConfig = path.join(categoryRoot, CATEGORY_CONFIG_FILE_NAME);
    const selectedArticles = [];

    for (const articlePath of await listMarkdownFiles(categoryRoot)) {
      const relativePath = path.relative(sourceRoot, articlePath);
      if (hasArticleFilter && !articleFilters.includes(relativePath)) {
        continue;
      }
      selectedArticles.push({ articlePath, relativePath });
    }

    const includeCategory = !hasArticleFilter || selectedArticles.length > 0;
    if (includeCategory) {
      await addCategoryImageAssets(sourceRoot, category, assetPaths);
    }

    if (includeCategory && (await isFile(categoryConfig))) {
      items.push({
        kind: "json",
        sourcePath: categoryConfig,
        relativePath: path.join(category, CATEGORY_CONFIG_FILE_NAME),
      });
    }

    for (const { articlePath, relativePath } of selectedArticles) {
      items.push({
        kind: "article",
        sourcePath: articlePath,
        relativePath,
      });
      await addArticleAssets(sourceRoot, categoryRoot, articlePath, assetPaths);
    }
  }

  items.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
  if (hasArticleFilter) {
    const found = new Set(items.map((item) => item.relativePath));
    const missing = articleFilters.filter((filter) => !found.has(filter));
    if (missing.length > 0) {
      throw new Error(
        `source article not found under ${sourceLocale}: ${missing.join(", ")}`,
      );
    }
  }

  return { items, assetPaths: [...assetPaths].sort() };
}

async function addCategoryImageAssets(sourceRoot, category, assetPaths) {
  for (const imageName of CATEGORY_IMAGE_NAMES) {
    const relativePath = path.join(category, imageName);
    if (await isFile(path.join(sourceRoot, relativePath))) {
      assetPaths.add(relativePath);
    }
  }
}

async function addArticleAssets(sourceRoot, categoryRoot, articlePath, assetPaths) {
  const source = await fs.readFile(articlePath, "utf8");
  const { content } = parseFrontMatter(source);
  for (const ref of collectLocalMediaRefs(content)) {
    const resolvedPath = resolveArticleAssetPath(ref, articlePath, categoryRoot);
    if (!(await isFile(resolvedPath))) {
      throw new Error(
        `local media asset not found for ${path.relative(sourceRoot, articlePath)}: ${ref}`,
      );
    }
    assetPaths.add(path.relative(sourceRoot, resolvedPath));
  }
}

function collectLocalMediaRefs(content) {
  const refs = [];
  const seen = new Set();

  for (const regex of [markdownImageRefRegex, mdxSrcRefRegex]) {
    regex.lastIndex = 0;
    for (const match of content.matchAll(regex)) {
      const ref = String(match[1] || "").trim();
      if (!isLocalAssetRef(ref) || seen.has(ref)) {
        continue;
      }
      seen.add(ref);
      refs.push(ref);
    }
  }

  videoListTagRegex.lastIndex = 0;
  for (const tag of content.matchAll(videoListTagRegex)) {
    videoListMediaRefRegex.lastIndex = 0;
    for (const match of tag[0].matchAll(videoListMediaRefRegex)) {
      const ref = String(match[1] || "").trim();
      if (!isLocalAssetRef(ref) || seen.has(ref)) {
        continue;
      }
      seen.add(ref);
      refs.push(ref);
    }
  }

  return refs;
}

function resolveArticleAssetPath(ref, articlePath, categoryRoot) {
  const resolvedPath = path.resolve(path.dirname(articlePath), ref);
  if (!isPathWithinBase(resolvedPath, path.resolve(categoryRoot))) {
    throw new Error(`local media ref resolves outside its category: ${ref}`);
  }
  return resolvedPath;
}

function isPathWithinBase(candidate, base) {
  const relative = path.relative(base, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function isLocalAssetRef(ref) {
  const trimmed = ref.trim();
  if (!trimmed) {
    return false;
  }
  const lowerRef = trimmed.toLowerCase();
  if (
    trimmed.startsWith("/") ||
    lowerRef.startsWith("http://") ||
    lowerRef.startsWith("https://") ||
    lowerRef.startsWith("data:") ||
    lowerRef.startsWith("#")
  ) {
    return false;
  }
  const withoutQuery = lowerRef.split("?")[0];
  return [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
    ".svg",
    ".mp4",
    ".webm",
    ".mov",
  ].includes(path.extname(withoutQuery));
}

async function translateArticleFile({
  sourcePath,
  relativePath,
  targetLocale,
  provider,
  glossary,
}) {
  const source = await fs.readFile(sourcePath, "utf8");
  const { frontMatter, content } = parseFrontMatter(source);
  const payload = {
    frontMatter: translatableFrontMatter(frontMatter),
    content,
  };
  const translated = await provider.translateArticle({
    targetLocale,
    targetLanguage: seoLocaleInfo(targetLocale).name,
    relativePath,
    glossary,
    payload,
  });

  const nextFrontMatter = {
    ...frontMatter,
    ...sanitizeFrontMatterTranslation(frontMatter, translated.frontMatter || {}),
  };
  const nextContent = String(translated.content || "").trimEnd() + "\n";
  validateSupportedMDXComponents(nextContent, `${targetLocale}/${relativePath}`);
  return renderArticle(nextFrontMatter, nextContent);
}

function translatableFrontMatter(frontMatter) {
  const out = {};
  for (const [key, value] of Object.entries(frontMatter)) {
    if (MACHINE_FRONT_MATTER_FIELDS.has(key)) {
      continue;
    }
    if (typeof value === "string" || key === "seo") {
      out[key] = value;
    }
  }
  return out;
}

function sanitizeFrontMatterTranslation(source, translated) {
  const out = {};
  for (const [key, value] of Object.entries(translated)) {
    if (MACHINE_FRONT_MATTER_FIELDS.has(key) || !(key in source)) {
      continue;
    }
    if (typeof source[key] === "string" && typeof value === "string") {
      out[key] = value;
      continue;
    }
    if (key === "seo" && source.seo && typeof value === "object" && value) {
      out.seo = {
        ...source.seo,
        ...pickStringFields(value, ["title", "description"]),
      };
    }
  }
  return out;
}

function pickStringFields(value, fields) {
  const out = {};
  for (const field of fields) {
    if (typeof value[field] === "string") {
      out[field] = value[field];
    }
  }
  return out;
}

function renderArticle(frontMatter, content) {
  const frontMatterText = yaml.dump(frontMatter, {
    lineWidth: -1,
    noRefs: true,
    quotingType: "\"",
    forceQuotes: true,
  });
  return `---\n${frontMatterText}---\n\n${content}`;
}

async function translateJSONFile({ sourcePath, relativePath, targetLocale, provider, glossary }) {
  const source = JSON.parse(await fs.readFile(sourcePath, "utf8"));
  const translated = await provider.translateJSON({
    targetLocale,
    targetLanguage: seoLocaleInfo(targetLocale).name,
    relativePath,
    glossary,
    payload: source,
  });
  return `${JSON.stringify(mergeTranslatedJSON(source, translated), null, 2)}\n`;
}

function mergeTranslatedJSON(source, translated, parentKey = "") {
  if (Array.isArray(source)) {
    return source.map((value, index) => mergeTranslatedJSON(value, translated?.[index], parentKey));
  }
  if (source && typeof source === "object") {
    const out = {};
    for (const [key, value] of Object.entries(source)) {
      out[key] = mergeTranslatedJSON(value, translated?.[key], key);
    }
    return out;
  }
  if (typeof source === "string") {
    if (JSON_LOCKED_KEYS.has(parentKey)) {
      return source;
    }
    return typeof translated === "string" && translated.trim() ? translated : source;
  }
  return source;
}

class OpenAICompatibleTranslationProvider {
  constructor(options = {}) {
    this.baseUrl = String(
      options.baseUrl ||
        process.env.TRANSLATION_BASE_URL ||
        process.env.OPENAI_BASE_URL ||
        DEFAULT_BASE_URL,
    ).replace(/\/+$/, "");
    this.apiKey =
      options.apiKey ||
      process.env.TRANSLATION_API_KEY ||
      process.env.OPENAI_API_KEY ||
      process.env.QIANXUN_API_KEY ||
      process.env.KIMI_API_KEY ||
      "";
    this.model =
      options.model ||
      process.env.TRANSLATION_MODEL ||
      process.env.OPENAI_MODEL ||
      DEFAULT_TRANSLATION_MODEL;
    this.temperature = normalizeOptionalNumber(
      options.temperature ||
        process.env.TRANSLATION_TEMPERATURE ||
        DEFAULT_TRANSLATION_TEMPERATURE,
    );
    this.thinking =
      options.thinking ||
      process.env.TRANSLATION_THINKING ||
      DEFAULT_TRANSLATION_THINKING;
    this.maxRetries = normalizeNonNegativeInteger(
      options.maxRetries ?? process.env.TRANSLATION_MAX_RETRIES,
      DEFAULT_TRANSLATION_MAX_RETRIES,
    );
    this.timeoutMs = normalizePositiveInteger(
      options.timeoutMs || process.env.TRANSLATION_TIMEOUT_MS,
      DEFAULT_TRANSLATION_TIMEOUT_MS,
    );
    if (!this.apiKey) {
      throw new Error(
        "translation API key is required; set TRANSLATION_API_KEY, OPENAI_API_KEY, QIANXUN_API_KEY, or use --mock",
      );
    }
  }

  async translateArticle(request) {
    return parseJSONResponse(
      await this.callChat(articleMessages(request)),
      "article translation",
    );
  }

  async translateJSON(request) {
    return parseJSONResponse(
      await this.callChat(jsonMessages(request)),
      "JSON translation",
    );
  }

  async callChat(messages) {
    const requestBody = {
      model: this.model,
      response_format: { type: "json_object" },
      messages,
    };
    if (shouldSendTemperature(this.model, this.temperature)) {
      requestBody.temperature = this.temperature;
    }
    if (this.thinking && this.thinking !== "none") {
      requestBody.thinking = this.thinking;
    }
    let lastError = null;
    for (let attempt = 0; attempt <= this.maxRetries; attempt += 1) {
      try {
        const response = await fetch(`${this.baseUrl}/chat/completions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.apiKey}`,
          },
          signal: timeoutSignal(this.timeoutMs),
          body: JSON.stringify(requestBody),
        });
        const responseBody = await response.text();
        if (!response.ok) {
          const error = new Error(`translation API failed: HTTP ${response.status} ${responseBody}`);
          error.retryable = response.status === 429 || response.status >= 500;
          throw error;
        }
        const parsed = JSON.parse(responseBody);
        const content = parsed?.choices?.[0]?.message?.content;
        if (!content) {
          throw new Error("translation API returned no message content");
        }
        return content;
      } catch (error) {
        lastError = error;
        if (attempt >= this.maxRetries || error.retryable === false) {
          throw error;
        }
        await sleep(1000 * (attempt + 1) ** 2);
      }
    }
    throw lastError;
  }
}

class MockTranslationProvider {
  async translateArticle(request) {
    return {
      frontMatter: mockTranslateValue(request.payload.frontMatter, request.targetLocale),
      content: request.payload.content,
    };
  }

  async translateJSON(request) {
    return mockTranslateValue(request.payload, request.targetLocale);
  }
}

function mockTranslateValue(value, targetLocale, parentKey = "") {
  if (Array.isArray(value)) {
    return value.map((item) => mockTranslateValue(item, targetLocale, parentKey));
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, item] of Object.entries(value)) {
      out[key] = mockTranslateValue(item, targetLocale, key);
    }
    return out;
  }
  if (typeof value === "string" && !JSON_LOCKED_KEYS.has(parentKey)) {
    return `[${targetLocale}] ${value}`;
  }
  return value;
}

function articleMessages({ targetLocale, targetLanguage, relativePath, glossary, payload }) {
  return [
    {
      role: "system",
      content: directTranslationSystemPrompt({
        targetLanguage,
        contentKind: "Kimi Help Center MDX-compatible Markdown",
        outputContract: "Return strict JSON only with keys: frontMatter and content.",
        extraRules: [
          "Preserve MDX component names, JSX braces, prop names, quote style, local asset paths, and supported component syntax.",
          "Do not add imports or unsupported MDX components.",
          "For SeoMeta and other MDX string props, translate visible string values but keep MDX valid.",
          "Do not translate fenced code block contents.",
        ],
      }),
    },
    {
      role: "user",
      content: JSON.stringify(
        {
          target_locale: targetLocale,
          target_language: targetLanguage,
          article: relativePath,
          glossary: glossaryPromptSections(glossary, targetLocale),
          payload,
        },
        null,
        2,
      ),
    },
  ];
}

function jsonMessages({ targetLocale, targetLanguage, relativePath, glossary, payload }) {
  return [
    {
      role: "system",
      content: directTranslationSystemPrompt({
        targetLanguage,
        contentKind: "Kimi Help Center metadata JSON",
        outputContract: "Return strict JSON only with the same object shape as the input payload.",
        extraRules: [
          "Preserve object keys, arrays, numbers, booleans, route paths, URLs, slugs, icons, and type values.",
          "Translate only user-visible string values such as title, description, search placeholders, and SEO text.",
        ],
      }),
    },
    {
      role: "user",
      content: JSON.stringify(
        {
          target_locale: targetLocale,
          target_language: targetLanguage,
          file: relativePath,
          glossary: glossaryPromptSections(glossary, targetLocale),
          payload,
        },
        null,
        2,
      ),
    },
  ];
}

function directTranslationSystemPrompt({
  targetLanguage,
  contentKind,
  outputContract,
  extraRules = [],
}) {
  return [
    `You are an expert translator for Weaver CMS-style ${contentKind}.`,
    `Your job is to translate every user-visible value from English to ${targetLanguage}.`,
    outputContract,
    "Do not answer with explanations, markdown fences, or commentary.",
    "",
    "# TRANSLATION RULES",
    `- Translate every value unless it is code, URL, placeholder, spreadsheet formula, or another non-translatable literal.`,
    `- Be faithful to the source meaning, but render the text in fluent, idiomatic ${targetLanguage} with elegance appropriate to the context. The final text should read as if originally written by a native speaker of ${targetLanguage}, not as a literal translation from English. Avoid translationese: do not mechanically preserve English sentence structures, word order, passive voice patterns, or marketing clichés when they sound unnatural in ${targetLanguage}. Prefer natural idioms, active voice, and culturally appropriate expressions that convey the same intent and tone. For heading-like, label-like, or navigational strings that coordinate multiple concepts, apply the target language's native compression strategies rather than mirroring the source's syntactic conjunction structure. The output must conform to the brevity and register conventionally expected in the target locale's analogous technical or editorial contexts.`,
    "- Preserve Markdown syntax while translating visible text.",
    "- Preserve exactly: brand names, product names, URLs, paths, IDs, slugs, locale codes, hashes, inline code/backticks, HTML tags, table separators, list/heading markers, and code-like literals.",
    "- Preserve placeholders and template tokens exactly: `{{...}}`, `${...}`, `%{...}`, `__TOKEN__`.",
    "- Preserve spreadsheet formulas and literals exactly, including formulas starting with `=`, function names such as `SUM`, `XLOOKUP`, `VLOOKUP`, `HLOOKUP`, `INDEX`, `MATCH`, cell/range references such as `A1` or `A1:B10`, and error literals such as `#N/A`, `#VALUE!`, `#REF!`. Translate only the surrounding explanatory prose.",
    "- Preserve Markdown delimiter spacing; do not remove spaces after closing markers when they separate formatted text from following text.",
    "- For Markdown links/images, translate only the visible label or alt text; never alter the URL or title string.",
    ...extraRules.map((rule) => `- ${rule}`),
    "",
    "# GLOSSARY",
    "The user message includes glossary sections: preferred_translations, do_not_translate_terms, and contextual_translations.",
    `Glossary rules override natural phrasing. Use preferred translations exactly when their source terms appear, and keep protected terms byte-for-byte unchanged. For context-dependent terms, use the suggested translation when it reads naturally in ${targetLanguage}, but you may keep the source term when that is more idiomatic or conventional in the given context.`,
  ].join("\n");
}

function parseJSONResponse(raw, label) {
  const trimmed = String(raw || "").trim();
  const withoutFence = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
    .trim();
  try {
    return JSON.parse(withoutFence);
  } catch (error) {
    throw new Error(`failed to parse ${label} response as JSON: ${error.message}`);
  }
}

async function loadGlossary(docsRoot) {
  const candidates = [
    path.join(docsRoot, "glossary", "terms.yaml"),
    path.join(docsRoot, "glossary", "terms.json"),
  ];
  for (const candidate of candidates) {
    if (!(await isFile(candidate))) {
      continue;
    }
    const data = await fs.readFile(candidate, "utf8");
    if (candidate.endsWith(".json")) {
      return JSON.parse(data);
    }
    return yaml.load(data);
  }
  return null;
}

function glossaryPromptSections(glossary, targetLocale) {
  const terms = Array.isArray(glossary?.terms) ? glossary.terms : [];
  const preferred = [];
  const protectedTerms = [];
  const contextual = [];
  for (const term of terms.slice(0, MAX_GLOSSARY_TERMS)) {
    const source = term.en_form || term.source || term.zh_form;
    const target = glossaryTargetValue(term, targetLocale);
    const strategy = term.translation_strategy || term.default || "";
    if (!source) {
      continue;
    }
    if (strategy === "keep_original") {
      protectedTerms.push(`- ${source}`);
      continue;
    }
    if (!target) {
      continue;
    }
    const line = `- ${source} => ${target}${strategy ? ` (${strategy})` : ""}`;
    if (strategy === "keep_original_with_note" || strategy === "contextual") {
      contextual.push(line);
    } else {
      preferred.push(line);
    }
  }
  return {
    preferred_translations: preferred.length > 0
      ? preferred.join("\n")
      : "No preferred glossary terms are provided.",
    do_not_translate_terms: protectedTerms.length > 0
      ? protectedTerms.join("\n")
      : "No protected glossary terms are provided.",
    contextual_translations: contextual.length > 0
      ? contextual.join("\n")
      : "No context-dependent glossary terms are provided.",
  };
}

function glossaryTargetValue(term, targetLocale) {
  if (targetLocale === "zh-CN" || targetLocale === "zh-SG") {
    return term.zh_form || term.en_form || term.source;
  }
  if (targetLocale === "en-US") {
    return term.en_form || term.source || term.zh_form;
  }
  return term.en_form || term.source || term.zh_form;
}

async function copyReferencedAssets(sourceRoot, targetRoot, assetPaths) {
  let copied = 0;
  for (const relative of assetPaths) {
    if (path.basename(relative) === ".gitkeep") {
      continue;
    }
    const sourcePath = path.join(sourceRoot, relative);
    const targetPath = path.join(targetRoot, relative);
    if (!(await isFile(sourcePath))) {
      continue;
    }
    if (await exists(targetPath)) {
      continue;
    }
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.copyFile(sourcePath, targetPath);
    copied += 1;
  }
  return copied;
}

async function runLimited(items, concurrency, worker) {
  let nextIndex = 0;
  const workerCount = Math.min(concurrency, items.length);
  await Promise.all(Array.from({ length: workerCount }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      await worker(items[index], index);
    }
  }));
}

function normalizePositiveInteger(value, fallback) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }
  return Math.floor(parsed);
}

function normalizeNonNegativeInteger(value, fallback) {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallback;
  }
  return Math.floor(parsed);
}

function normalizeOptionalNumber(value) {
  if (String(value).toLowerCase() === "none") {
    return null;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function shouldSendTemperature(model, temperature) {
  if (temperature === null) {
    return false;
  }
  return model !== "claude-opus-4-8";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function timeoutSignal(ms) {
  if (typeof AbortSignal !== "undefined" && typeof AbortSignal.timeout === "function") {
    return AbortSignal.timeout(ms);
  }
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms).unref?.();
  return controller.signal;
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

async function exists(candidate) {
  try {
    await fs.stat(candidate);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
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

async function assertDirectory(candidate, label) {
  const stat = await fs.stat(candidate);
  if (!stat.isDirectory()) {
    throw new Error(`${label} is not a directory`);
  }
}

function parseArgs(argv) {
  const options = {
    docsRoot: ".",
    sourceLocale: SOURCE_LOCALE,
    targetLocales: [],
    articles: [],
    dryRun: false,
    mock: false,
    overwrite: false,
    json: false,
  };
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
      case "--article":
        options.articles.push(...splitList(requireValue(argv, ++index, arg)));
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--mock":
        options.mock = true;
        break;
      case "--overwrite":
        options.overwrite = true;
        break;
      case "--model":
        options.model = requireValue(argv, ++index, arg);
        break;
      case "--temperature":
        options.temperature = requireValue(argv, ++index, arg);
        break;
      case "--thinking":
        options.thinking = requireValue(argv, ++index, arg);
        break;
      case "--concurrency":
        options.concurrency = requireValue(argv, ++index, arg);
        break;
      case "--max-retries":
        options.maxRetries = requireValue(argv, ++index, arg);
        break;
      case "--timeout-ms":
        options.timeoutMs = requireValue(argv, ++index, arg);
        break;
      case "--base-url":
        options.baseUrl = requireValue(argv, ++index, arg);
        break;
      case "--api-key":
        options.apiKey = requireValue(argv, ++index, arg);
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
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function requireValue(argv, index, flag) {
  const value = argv[index];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function printHelp() {
  console.log(`Usage: node scripts/translate-docs.js [options] [docs-root]

Options:
  --target-locale <locale>     Target locale, repeatable or comma-separated.
  --all-seo-locales            Translate to every machine-translation SEO locale.
  --source-locale <locale>     Source locale. Defaults to en-US.
  --article <path>             Translate one source article, repeatable.
  --dry-run                    Show planned work without writing files or calling translation.
  --mock                       Use a deterministic local mock translator.
  --overwrite                  Overwrite existing target files.
  --model <model>              Translation model. Defaults to TRANSLATION_MODEL or ${DEFAULT_TRANSLATION_MODEL}.
  --temperature <number|none>  Translation temperature. Defaults to TRANSLATION_TEMPERATURE or ${DEFAULT_TRANSLATION_TEMPERATURE}; omitted for claude-opus-4-8.
  --thinking <value>           Thinking mode. Defaults to TRANSLATION_THINKING or ${DEFAULT_TRANSLATION_THINKING}; use "none" to omit.
  --concurrency <number>       Files to translate in parallel per locale. Defaults to TRANSLATION_CONCURRENCY or ${DEFAULT_TRANSLATION_CONCURRENCY}.
  --max-retries <number>       Retries per translation request; use 0 to disable. Defaults to TRANSLATION_MAX_RETRIES or ${DEFAULT_TRANSLATION_MAX_RETRIES}.
  --timeout-ms <number>        Timeout per translation request. Defaults to TRANSLATION_TIMEOUT_MS or ${DEFAULT_TRANSLATION_TIMEOUT_MS}.
  --base-url <url>             OpenAI-compatible base URL. Defaults to TRANSLATION_BASE_URL or ${DEFAULT_BASE_URL}.
  --api-key <key>              API key. Defaults to TRANSLATION_API_KEY, OPENAI_API_KEY, QIANXUN_API_KEY, or KIMI_API_KEY.
  --json                       Print summary as JSON.
  -h, --help                   Show this help.

Supported SEO locales:
${SEO_LOCALES.map((locale) => `  - ${locale.code} (${locale.name})`).join("\n")}

Human-maintained locales excluded from machine translation:
${HUMAN_MAINTAINED_LOCALE_CODES.map((locale) => `  - ${locale}`).join("\n")}
`);
}

function printSummary(summary, json) {
  if (json) {
    console.log(JSON.stringify(summary, null, 2));
    return;
  }
  console.log(
    [
      "help-center translation completed",
      `source=${summary.sourceLocale}`,
      `targets=${summary.targetLocales.join(",")}`,
      `translated=${summary.translated}`,
      `skipped=${summary.skipped}`,
      `failed=${summary.failed}`,
      `copied_assets=${summary.copiedAssets}`,
      `concurrency=${summary.concurrency}`,
      `dry_run=${summary.dryRun}`,
    ].join(" "),
  );
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }
  const summary = await translateDocs(options);
  printSummary(summary, options.json);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error) => {
    if (error.summary) {
      printSummary(error.summary, false);
    }
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
