#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { config as loadDotenv } from "dotenv";
import yaml from "js-yaml";
import pg from "pg";
import { TosClient } from "@volcengine/tos-sdk";
import { SEO_LOCALE_CODES } from "./seo-locales.js";

const ROOT_CONFIG_FILE_NAME = "_config.json";
const MARKDOWN_EXT = ".md";
const SUPPORTED_LOCALES = SEO_LOCALE_CODES;
const CATEGORY_IMAGE_NAMES = [
  "_category.png",
  "_category.jpg",
  "_category.jpeg",
  "_category.webp",
];

const NAVIGATION_NODE_TYPE_FOLDER = "folder";
const NAVIGATION_NODE_TYPE_DOCUMENT = "document";
const NAVIGATION_NODE_TYPE_ANCHOR = "anchor";

const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+\{#([\w-]+)\})?$/gm;
const markdownImageRefRegex = /!\[[^\]]*\]\(([^)\s]+)\)/g;
const mdxSrcRefRegex = /\bsrc=["']([^"']+)["']/g;
const mdxSrcAttrRegex = /\bsrc=(?:"([^"]+)"|'([^']+)')/;
const framesTagRegex = /<Frames\b[^>]*>/gs;
const chatTagRegex = /<Chat\b[^>]*>/gs;
const videoListTagRegex = /<VideoList\b[\s\S]*?\/>/g;
const videoListMediaRefRegex = /\b(?:url|poster)\s*:\s*["']([^"']+)["']/g;
const mdxTypeAttrRegex = /\btype=["'][^"']*["']/;
const codeFenceOpenRegex = /^(\s{0,3}(?:>\s*)?)(`{3,}|~{3,})(.*)$/;
const supportedComponentNames = new Set([
  "SeoMeta",
  "Callout",
  "Frames",
  "Chat",
  "CodePreview",
  "ComparisonBlock",
  "ColumnsContent",
  "VideoList",
]);
const componentNameRegex = /^<\/?([A-Z][A-Za-z0-9_]*)\b/;

loadDotenv({ path: ".env.local", override: false });
loadDotenv({ path: ".env", override: false });

class ValidationError extends Error {
  constructor(message, details = {}) {
    super(message);
    this.name = "ValidationError";
    this.details = details;
  }
}

class ValidationAggregateError extends Error {
  constructor(errors) {
    super(`${errors.length} validation error${errors.length === 1 ? "" : "s"}`);
    this.name = "ValidationAggregateError";
    this.errors = errors;
  }
}

export async function loadLocales(docsRoot, options = {}) {
  const root = path.resolve(docsRoot);
  const targetLocale = options.locale || "";
  const assetUrlPrefix = trimTrailingSlash(options.assetUrlPrefix || "");
  const assetUploader = createAssetUploader({
    docsRoot: root,
    dryRun: Boolean(options.dryRun),
    uploadAssets: Boolean(options.uploadAssets),
    cdnPublicBase: options.cdnPublicBase,
    cdnPathPrefix: options.cdnPathPrefix,
  });
  const sharedOptions = {
    assetUrlPrefix,
    assetUploader,
    docsRoot: root,
    uploadedMediaRefs: new Map(),
  };

  if (targetLocale) {
    const localeRoot = await resolveLocaleRoot(root, targetLocale);
    return [await loadLocale(localeRoot, targetLocale, sharedOptions)];
  }

  await assertDirectory(root, `docs root ${root}`);

  const locales = [];
  for (const locale of SUPPORTED_LOCALES) {
    const localeRoot = path.join(root, locale);
    if (!(await exists(localeRoot))) {
      continue;
    }
    await assertDirectory(localeRoot, `locale ${locale} under ${root}`);
    locales.push(await loadLocale(localeRoot, locale, sharedOptions));
  }

  locales.sort((a, b) => a.locale.localeCompare(b.locale));
  return locales;
}

export async function loadPaths(docsRoot, options = {}) {
  const locales = await loadLocales(docsRoot, options);
  const paths = {};
  for (const locale of locales) {
    const localePaths = [];
    for (const node of locale.nodes) {
      if (node.path) {
        localePaths.push(node.path);
      }
    }
    for (const doc of locale.docs) {
      localePaths.push(doc.path);
    }
    localePaths.sort();
    paths[locale.locale] = localePaths;
  }
  return paths;
}

export async function importDocs(docsRoot, options = {}) {
  const locales = await loadLocales(docsRoot, options);
  const summary = summarizeLocales(locales);

  if (options.dryRun) {
    return summary;
  }

  const dsn = options.dsn || process.env.DATABASE_URL;
  if (!dsn) {
    throw new Error(
      "postgres DSN not configured; pass --dsn, set DATABASE_URL, or use --dry-run",
    );
  }

  const client = new pg.Client({ connectionString: dsn });
  await client.connect();
  try {
    await client.query("BEGIN");
    if (options.locale) {
      await deleteLocaleData(client, options.locale);
    } else {
      await deleteMissingLocaleData(
        client,
        locales.map((locale) => locale.locale),
      );
    }

    for (const locale of locales) {
      if (!options.locale) {
        await deleteLocaleData(client, locale.locale);
      }
      for (const node of locale.nodes) {
        await insertNavigationNode(client, node);
      }
      for (const doc of locale.docs) {
        await insertDocument(client, doc);
      }
    }
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }

  return summary;
}

async function resolveLocaleRoot(docsRoot, targetLocale) {
  const localeRoot = path.join(docsRoot, targetLocale);
  if (!(await exists(localeRoot))) {
    throw new Error(`locale ${targetLocale} not found under ${docsRoot}`);
  }
  await assertDirectory(localeRoot, `locale ${targetLocale} under ${docsRoot}`);
  return localeRoot;
}

async function loadLocale(localeRoot, locale, options) {
  const entries = await fs.readdir(localeRoot, { withFileTypes: true });
  const categories = [];
  const validationErrors = [];
  const seenDocumentPaths = new Set();
  const seenNavigationPaths = new Set();

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      if (entry.name === ROOT_CONFIG_FILE_NAME) {
        continue;
      }
      continue;
    }

    try {
      categories.push(
        await loadCategory(
          path.join(localeRoot, entry.name),
          locale,
          entry.name,
          seenDocumentPaths,
          seenNavigationPaths,
          options,
        ),
      );
    } catch (error) {
      if (error instanceof ValidationError) {
        validationErrors.push(error);
        continue;
      }
      if (error instanceof ValidationAggregateError) {
        validationErrors.push(...error.errors);
        continue;
      }
      throw error;
    }
  }

  if (validationErrors.length > 0) {
    throw new ValidationAggregateError(validationErrors);
  }

  categories.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

  return {
    locale,
    nodes: categories.flatMap((category) => category.nodes),
    docs: categories.flatMap((category) => category.docs),
  };
}

async function loadCategory(
  categoryRoot,
  locale,
  categoryName,
  seenDocumentPaths,
  seenNavigationPaths,
  options,
) {
  const metadataPath = path.join(categoryRoot, "_category.json");
  const metadata = await readCategoryMetadata(metadataPath);
  const categoryID = newID();
  const categoryPath = `/${categoryName}`;
  ensureUniquePath(seenNavigationPaths, categoryPath);

  const imageURL = await categoryImageURL(categoryRoot, options);

  const entries = await fs.readdir(categoryRoot, { withFileTypes: true });
  const documents = [];
  const validationErrors = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      continue;
    }
    if (entry.name === "_category.json" || path.extname(entry.name) !== MARKDOWN_EXT) {
      continue;
    }
    try {
      documents.push(
        await readMarkdownDocumentWithImages(
          path.join(categoryRoot, entry.name),
          locale,
          categoryName,
          categoryID,
          seenDocumentPaths,
          seenNavigationPaths,
          categoryRoot,
          options,
        ),
      );
    } catch (error) {
      if (error instanceof ValidationError) {
        validationErrors.push(error);
        continue;
      }
      if (error instanceof ValidationAggregateError) {
        validationErrors.push(...error.errors);
        continue;
      }
      throw error;
    }
  }

  if (validationErrors.length > 0) {
    throw new ValidationAggregateError(validationErrors);
  }

  documents.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));

  const nodes = [
    {
      id: categoryID,
      path: categoryPath,
      anchor: "",
      type: NAVIGATION_NODE_TYPE_FOLDER,
      title: metadata.title,
      description: metadata.description || "",
      seo_title: defaultString(metadata.seo?.title, metadata.title),
      seo_description: defaultString(metadata.seo?.description, metadata.description || ""),
      image_url: imageURL,
      show_on_homepage: true,
      locale,
      parent_id: null,
      sort_order: Number(metadata.order || 0),
      published: true,
    },
  ];

  return {
    order: Number(metadata.order || 0),
    name: categoryName,
    nodes: nodes.concat(documents.flatMap((document) => document.nodes)),
    docs: documents.map((document) => document.doc),
  };
}

async function readCategoryMetadata(metadataPath) {
  const data = await fs.readFile(metadataPath, "utf8");
  let metadata;
  try {
    metadata = JSON.parse(data);
  } catch (error) {
    throw new Error(`parse category metadata ${metadataPath}: ${error.message}`);
  }
  if (!String(metadata.title || "").trim()) {
    throw new Error(`category metadata ${metadataPath} is missing title`);
  }
  return metadata;
}

async function categoryImageURL(categoryRoot, options) {
  const imagePath = await findCategoryImagePath(categoryRoot);
  if (!imagePath) {
    return "";
  }
  const relativePath = path.relative(options.docsRoot, imagePath);
  if (options.assetUploader) {
    return await options.assetUploader.upload(imagePath, relativePath);
  }
  if (!options.assetUrlPrefix) {
    return "";
  }
  return assetURL(options.assetUrlPrefix, relativePath);
}

async function findCategoryImagePath(categoryRoot) {
  const found = [];
  for (const name of CATEGORY_IMAGE_NAMES) {
    const candidate = path.join(categoryRoot, name);
    if (await isFile(candidate)) {
      found.push(candidate);
    }
  }
  if (found.length > 1) {
    throw new Error(`multiple category images found under ${categoryRoot}: ${found.join(", ")}`);
  }
  return found[0] || "";
}

async function readMarkdownDocumentWithImages(
  markdownPath,
  locale,
  categoryName,
  categoryID,
  seenDocumentPaths,
  seenNavigationPaths,
  categoryRoot,
  options,
) {
  const data = await fs.readFile(markdownPath, "utf8");
  const { frontMatter, content: originalContent } = parseFrontMatter(data);
  if (!String(frontMatter.title || "").trim()) {
    throw new Error(`markdown document ${markdownPath} is missing title`);
  }
  if (!String(frontMatter.slug || "").trim()) {
    throw new Error(`markdown document ${markdownPath} is missing slug`);
  }

  validateSupportedMDXComponents(originalContent, markdownPath);

  let content = await rewriteLocalMediaRefs(
    originalContent,
    markdownPath,
    categoryRoot,
    options.docsRoot,
    options.assetUrlPrefix,
    options.assetUploader,
    options.uploadedMediaRefs,
  );
  content = rewriteMarkdownCodeFencesToCodePreview(content);
  content = normalizeChatComponentSrcQueries(content);

  const documentPath = `/${categoryName}/${frontMatter.slug}`;
  ensureUniquePath(seenDocumentPaths, documentPath);
  ensureUniquePath(seenNavigationPaths, documentPath);

  const documentID = newID();
  const documentNodeID = newID();
  const documentNode = {
    id: documentNodeID,
    path: documentPath,
    anchor: "",
    type: NAVIGATION_NODE_TYPE_DOCUMENT,
    title: frontMatter.title,
    description: "",
    seo_title: defaultString(frontMatter.seo?.title, frontMatter.title),
    seo_description: String(frontMatter.seo?.description || "").trim(),
    image_url: "",
    show_on_homepage: false,
    locale,
    parent_id: categoryID,
    sort_order: Number(frontMatter.order || 0),
    published: true,
  };

  const headingNodes = frontMatter.extract_headings
    ? buildSectionNavigationNodes(content, locale, documentPath, documentNodeID)
    : [];

  return {
    order: Number(frontMatter.order || 0),
    name: path.basename(markdownPath),
    nodes: [documentNode].concat(headingNodes),
    doc: {
      id: documentID,
      path: documentPath,
      locale,
      title: frontMatter.title,
      content,
      search_content: buildSearchContent(content),
      preview: Boolean(frontMatter.preview),
      preview_content: String(frontMatter.preview_content || ""),
      published: true,
    },
  };
}

export function validateSupportedMDXComponents(content, markdownPath = "") {
  const errors = [];
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  let inFence = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*(```+|~{3,})/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      continue;
    }

    const tagStart = line.indexOf("<");
    if (tagStart < 0) {
      continue;
    }
    const match = line.slice(tagStart).match(componentNameRegex);
    if (!match || !supportedComponentNames.has(match[1])) {
      continue;
    }

    const { tag, endLine } = collectMDXTag(lines, index, tagStart);
    if (!tag.includes(">")) {
      errors.push(
        mdxSyntaxError(markdownPath, index + 1, match[1], "Component tag is not closed with `>`"),
      );
      continue;
    }

    for (const validationError of validateMDXTagSyntax(tag, markdownPath, index + 1, match[1])) {
      errors.push(validationError);
    }

    index = Math.max(index, endLine);
  }

  if (errors.length === 1) {
    throw errors[0];
  }
  if (errors.length > 1) {
    throw new ValidationAggregateError(errors);
  }
}

function collectMDXTag(lines, startLine, tagStart) {
  const collected = [];
  let curlyDepth = 0;
  let tagClosed = false;

  for (let index = startLine; index < lines.length; index += 1) {
    const segment = index === startLine ? lines[index].slice(tagStart) : lines[index];
    collected.push(segment);
    curlyDepth += countUnquotedChar(segment, "{") - countUnquotedChar(segment, "}");

    if (segment.includes(">") && curlyDepth <= 0) {
      tagClosed = true;
      return { tag: collected.join("\n"), endLine: index };
    }
  }

  return { tag: collected.join("\n"), endLine: lines.length - 1, tagClosed };
}

function validateMDXTagSyntax(tag, markdownPath, line, componentName) {
  const errors = [];
  const curlyQuote = findUnquotedCurlyQuote(tag);
  if (curlyQuote) {
    errors.push(
      mdxSyntaxError(
        markdownPath,
        line,
        componentName,
        `Use straight quotes in JSX props; found ${JSON.stringify(curlyQuote[0])}`,
      ),
    );
  }

  const openCurly = countUnquotedChar(tag, "{");
  const closeCurly = countUnquotedChar(tag, "}");
  if (openCurly !== closeCurly) {
    errors.push(
      mdxSyntaxError(
        markdownPath,
        line,
        componentName,
        `Unbalanced JSX expression braces: ${openCurly} "{" and ${closeCurly} "}"`,
      ),
    );
  }

  const openSquare = countUnquotedChar(tag, "[");
  const closeSquare = countUnquotedChar(tag, "]");
  if (openSquare !== closeSquare) {
    errors.push(
      mdxSyntaxError(
        markdownPath,
        line,
        componentName,
        `Unbalanced array brackets: ${openSquare} "[" and ${closeSquare} "]"`,
      ),
    );
  }

  return errors;
}

function mdxSyntaxError(article, line, component, reason) {
  return new ValidationError("Malformed MDX component", {
    article,
    line,
    component,
    reason,
  });
}

function findUnquotedCurlyQuote(value) {
  let quote = "";
  let escaped = false;

  for (const char of value) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (quote && char === "\\") {
      escaped = true;
      continue;
    }
    if (quote) {
      if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === `"` || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (/[“”‘’]/.test(char)) {
      return char;
    }
  }

  return "";
}

function countUnquotedChar(value, target) {
  let count = 0;
  let quote = "";
  let escaped = false;

  for (const char of value) {
    if (escaped) {
      escaped = false;
      continue;
    }
    if (quote && char === "\\") {
      escaped = true;
      continue;
    }
    if (quote) {
      if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === `"` || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === target) {
      count += 1;
    }
  }

  return count;
}

export function parseFrontMatter(markdown) {
  const delimiter = "---";
  const normalized = markdown.replace(/\r\n/g, "\n");
  if (!normalized.startsWith(`${delimiter}\n`)) {
    throw new Error("missing YAML front matter");
  }

  const rest = normalized.slice(delimiter.length + 1);
  const frontMatterEnd = rest.indexOf(`\n${delimiter}`);
  if (frontMatterEnd < 0) {
    throw new Error("front matter closing delimiter not found");
  }

  const frontMatter = yaml.load(rest.slice(0, frontMatterEnd)) || {};
  const content = rest.slice(frontMatterEnd + `\n${delimiter}`.length).replace(/^\n+/, "");
  return { frontMatter, content };
}

export function rewriteMarkdownCodeFencesToCodePreview(content) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const out = [];

  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(codeFenceOpenRegex);
    if (!match) {
      out.push(lines[index]);
      continue;
    }

    const [, prefix, fence, info] = match;
    const codeLines = [];
    let closeIndex = -1;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      if (isCodeFenceClose(lines[cursor], prefix, fence[0], fence.length)) {
        closeIndex = cursor;
        break;
      }
      codeLines.push(stripCodeFenceContentPrefix(lines[cursor], prefix));
    }

    if (closeIndex < 0) {
      out.push(lines[index]);
      continue;
    }

    appendCodePreviewLines(out, info, codeLines.join("\n"));
    index = closeIndex;
  }

  return out.join("\n");
}

export function normalizeChatComponentSrcQueries(content) {
  return content.replace(chatTagRegex, (tag) => {
    const match = tag.match(mdxSrcAttrRegex);
    if (!match) {
      return tag;
    }

    const quote = match[1] !== undefined ? `"` : `'`;
    const src = (match[1] || match[2] || "").trim();
    const { normalized, changed } = normalizeChatSrcURL(src);
    if (!changed) {
      return tag;
    }
    return tag.replace(mdxSrcAttrRegex, `src=${quote}${normalized}${quote}`);
  });
}

function normalizeChatSrcURL(raw) {
  let parsed;
  try {
    parsed = new URL(raw);
  } catch {
    return { normalized: raw, changed: false };
  }

  const host = parsed.host.toLowerCase();
  if (host !== "www.kimi.com" && host !== "kimi.com") {
    return { normalized: raw, changed: false };
  }
  if (!parsed.pathname.startsWith("/share/")) {
    return { normalized: raw, changed: false };
  }

  parsed.searchParams.delete("hide_sidebar");
  parsed.searchParams.delete("disable_auto_preview");
  const rest = parsed.searchParams.toString();
  parsed.search = `?hide_sidebar=1&disable_auto_preview=1${rest ? `&${rest}` : ""}`;
  const normalized = parsed.toString();
  return { normalized, changed: normalized !== raw };
}

async function rewriteLocalMediaRefs(
  content,
  markdownPath,
  categoryRoot,
  docsRoot,
  assetUrlPrefix,
  assetUploader,
  uploadedMediaRefs,
) {
  const refs = collectLocalMediaRefs(content);
  if (refs.length === 0) {
    return content;
  }

  const resolvedRefs = [];
  for (const ref of refs) {
    const resolvedPath = resolveLocalMediaPath(ref, markdownPath, categoryRoot);
    if (!(await isFile(resolvedPath))) {
      throw new ValidationError("Missing local media asset", {
        article: markdownPath,
        ref,
        resolvedPath,
        categoryRoot,
      });
    }
    resolvedRefs.push({ ref, resolvedPath });
  }

  if (!assetUrlPrefix && !assetUploader) {
    return content;
  }

  const videoURLs = new Set();
  let rewritten = content;
  for (const { ref, resolvedPath } of resolvedRefs) {
    let media = uploadedMediaRefs.get(resolvedPath);
    if (!media) {
      const relativePath = path.relative(docsRoot, resolvedPath);
      const url = assetUploader
        ? await assetUploader.upload(resolvedPath, relativePath)
        : assetURL(assetUrlPrefix, relativePath);
      media = {
        url,
        mediaType: isVideoPath(resolvedPath) ? "video" : "image",
      };
      uploadedMediaRefs.set(resolvedPath, media);
    }

    rewritten = rewritten.replaceAll(`"${ref}"`, `"${media.url}"`);
    rewritten = rewritten.replaceAll(`'${ref}'`, `'${media.url}'`);
    rewritten = rewritten.replaceAll(`(${ref})`, `(${media.url})`);
    if (media.mediaType === "video") {
      videoURLs.add(media.url);
    }
  }

  return rewriteFrameVideoTypes(rewritten, videoURLs);
}

function createAssetUploader(options) {
  if (!options.uploadAssets) {
    return null;
  }

  const accessKeyId = process.env.TOS_ACCESS_KEY_ID;
  const accessKeySecret = process.env.TOS_ACCESS_KEY_SECRET;
  const region = process.env.TOS_REGION;
  const bucket = process.env.TOS_BUCKET;
  const endpoint = process.env.TOS_ENDPOINT || `tos-${region}.volces.com`;
  const cdnPathPrefix = normalizeCDNPathPrefix(
    options.cdnPathPrefix || process.env.CDN_PATH_PREFIX || "kimi-helpcenter-doc/",
  );
  const cdnPublicBase = trimTrailingSlash(
    options.cdnPublicBase || process.env.CDN_PUBLIC_BASE || process.env.ASSET_URL_PREFIX || "",
  );

  const missing = [];
  for (const [name, value] of [
    ["TOS_ACCESS_KEY_ID", accessKeyId],
    ["TOS_ACCESS_KEY_SECRET", accessKeySecret],
    ["TOS_REGION", region],
    ["TOS_BUCKET", bucket],
  ]) {
    if (!value) {
      missing.push(name);
    }
  }
  if (!cdnPublicBase) {
    missing.push("CDN_PUBLIC_BASE");
  }
  if (missing.length > 0) {
    throw new Error(`missing CDN upload config: ${missing.join(", ")}`);
  }

  const tosClient = new TosClient({
    accessKeyId,
    accessKeySecret,
    region,
    endpoint,
  });
  const uploaded = new Map();

  return {
    async upload(localPath, relativePath) {
      if (uploaded.has(localPath)) {
        return uploaded.get(localPath);
      }

      const body = await fs.readFile(localPath);
      const normalizedRelativePath = relativePath.split(path.sep).join("/");
      const versionedPath = versionedAssetPath(normalizedRelativePath, body);
      const key = `${cdnPathPrefix}${versionedPath}`;
      const publicURL = `${cdnPublicBase}/${key.split("/").map(encodeURIComponent).join("/")}`;
      if (options.dryRun) {
        uploaded.set(localPath, publicURL);
        return publicURL;
      }

      await tosClient.putObject({
        bucket,
        key,
        body,
        contentType: contentTypeForPath(localPath),
        cacheControl: cacheControlForPath(versionedPath),
      });
      uploaded.set(localPath, publicURL);
      return publicURL;
    },
  };
}

function versionedAssetPath(relativePath, body) {
  const extension = path.extname(relativePath);
  const basePath = extension ? relativePath.slice(0, -extension.length) : relativePath;
  const hash = crypto.createHash("sha256").update(body).digest("hex").slice(0, 12);
  return `${basePath}.${hash}${extension}`;
}

function normalizeCDNPathPrefix(value) {
  const trimmed = String(value || "").trim().replace(/^\/+/, "");
  if (!trimmed) {
    return "";
  }
  return trimmed.endsWith("/") ? trimmed : `${trimmed}/`;
}

function contentTypeForPath(candidate) {
  switch (path.extname(candidate).toLowerCase()) {
    case ".js":
    case ".mjs":
      return "application/javascript";
    case ".css":
      return "text/css";
    case ".html":
      return "text/html";
    case ".json":
      return "application/json";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".webp":
      return "image/webp";
    case ".mp4":
      return "video/mp4";
    case ".webm":
      return "video/webm";
    case ".mov":
      return "video/quicktime";
    case ".txt":
      return "text/plain";
    case ".xml":
      return "application/xml";
    default:
      return "application/octet-stream";
  }
}

function cacheControlForPath(candidate) {
  const filename = path.basename(candidate);
  if (filename.endsWith(".html") || filename === "index.html") {
    return "no-cache, no-store, must-revalidate";
  }
  if (
    /\.[A-Za-z0-9]{8,}\.(js|css|png|jpg|jpeg|gif|svg|webp|mp4|webm|mov|woff|woff2|ttf|eot)$/.test(
      filename,
    )
  ) {
    return "public, max-age=31536000, immutable";
  }
  return "public, max-age=3600";
}

function rewriteFrameVideoTypes(content, videoURLs) {
  if (videoURLs.size === 0) {
    return content;
  }

  return content.replace(framesTagRegex, (tag) => {
    const match = tag.match(/\bsrc=["']([^"']+)["']/);
    if (!match || !videoURLs.has(match[1].trim())) {
      return tag;
    }
    return ensureFrameVideoType(tag);
  });
}

function ensureFrameVideoType(tag) {
  if (mdxTypeAttrRegex.test(tag)) {
    return tag.replace(mdxTypeAttrRegex, `type="video"`);
  }
  if (tag.includes("\n")) {
    return tag.replace("<Frames", `<Frames\n  type="video"`);
  }
  return tag.replace("<Frames", `<Frames type="video"`);
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

function resolveLocalMediaPath(ref, markdownPath, categoryRoot) {
  const resolvedPath = path.resolve(path.dirname(markdownPath), ref);
  const categoryRootAbs = path.resolve(categoryRoot);
  if (!isPathWithinBase(resolvedPath, categoryRootAbs)) {
    throw new ValidationError("Local media ref resolves outside its category", {
      ref,
      resolvedPath,
      categoryRoot: categoryRootAbs,
    });
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

function isVideoPath(candidate) {
  return [".mp4", ".webm", ".mov"].includes(path.extname(candidate).toLowerCase());
}

function isCodeFenceClose(line, prefix, fenceMarker, minLength) {
  const candidate = stripCodeFenceContentPrefix(line, prefix).trim();
  if (!candidate) {
    return false;
  }
  let count = 0;
  while (count < candidate.length && candidate[count] === fenceMarker) {
    count += 1;
  }
  return count >= minLength && candidate.slice(count).trim() === "";
}

function stripCodeFenceContentPrefix(line, prefix) {
  if (prefix.includes(">")) {
    let trimmed = line.trimStart();
    if (trimmed.startsWith(">")) {
      trimmed = trimmed.slice(1);
      return trimmed.startsWith(" ") ? trimmed.slice(1) : trimmed;
    }
    return line;
  }

  if (prefix && line.startsWith(prefix)) {
    return line.slice(prefix.length);
  }
  return line;
}

function appendCodePreviewLines(out, info, content) {
  if (out.length > 0 && out[out.length - 1] !== "") {
    out.push("");
  }

  const language = normalizeCodePreviewLanguage(info);
  const name = codePreviewFileName(language);
  out.push(
    "<CodePreview",
    "  files={[",
    "    {",
    `      name: ${JSON.stringify(name)},`,
    `      language: ${JSON.stringify(language)},`,
    `      content: ${JSON.stringify(content)},`,
    "    },",
    "  ]}",
    "/>",
    "",
  );
}

function normalizeCodePreviewLanguage(info) {
  const fields = String(info || "").trim().split(/\s+/).filter(Boolean);
  const language = (fields[0] || "text").toLowerCase();
  switch (language) {
    case "sh":
    case "zsh":
      return "bash";
    case "md":
      return "markdown";
    case "txt":
      return "text";
    case "yml":
      return "yaml";
    case "js":
      return "javascript";
    case "ts":
      return "typescript";
    case "py":
      return "python";
    default:
      return language;
  }
}

function codePreviewFileName(language) {
  switch (language) {
    case "bash":
      return "command.sh";
    case "json":
      return "example.json";
    case "yaml":
      return "example.yaml";
    case "markdown":
      return "prompt.md";
    case "javascript":
      return "example.js";
    case "typescript":
      return "example.ts";
    case "tsx":
      return "example.tsx";
    case "jsx":
      return "example.jsx";
    case "python":
      return "example.py";
    case "go":
      return "example.go";
    case "html":
      return "example.html";
    case "css":
      return "example.css";
    default:
      return "prompt.txt";
  }
}

function buildSectionNavigationNodes(content, locale, documentPath, documentNodeID) {
  return parseSecondLevelHeadings(content).map((heading, index) => ({
    id: newID(),
    path: documentPath,
    anchor: heading.id,
    type: NAVIGATION_NODE_TYPE_ANCHOR,
    title: heading.text,
    description: "",
    seo_title: "",
    seo_description: "",
    image_url: "",
    show_on_homepage: false,
    locale,
    parent_id: documentNodeID,
    sort_order: index + 1,
    published: true,
  }));
}

export function parseSecondLevelHeadings(content) {
  const headings = [];
  headingRegex.lastIndex = 0;
  for (const match of content.matchAll(headingRegex)) {
    if (match[1].length !== 2) {
      continue;
    }
    const text = match[2].trim();
    if (!text) {
      continue;
    }
    headings.push({
      level: 2,
      text,
      id: (match[3] || "").trim() || generateHeadingID(text),
    });
  }
  return headings;
}

function generateHeadingID(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return "h-0";
  }

  let slug = "";
  let prevDash = false;
  for (const char of trimmed.toLowerCase()) {
    if (isASCIIWordChar(char)) {
      slug += char;
      prevDash = false;
    } else if ((char === " " || char === "-") && slug && !prevDash) {
      slug += "-";
      prevDash = true;
    }
    if (slug.length >= 50) {
      break;
    }
  }

  if (hasNonASCII(trimmed)) {
    const hashed = headingHashBase36(trimmed);
    return slug ? `${slug}-${hashed}` : `h-${hashed}`;
  }
  return slug || `h-${headingHashBase36(trimmed)}`;
}

function isASCIIWordChar(char) {
  return /[a-z0-9_]/.test(char);
}

function hasNonASCII(text) {
  return Array.from(text).some((char) => char.codePointAt(0) > 0x7f);
}

function headingHashBase36(text) {
  let hash = 0;
  for (const char of text) {
    hash = (Math.imul(hash, 31) + char.codePointAt(0)) | 0;
  }
  if (hash < 0) {
    hash = (-hash) | 0;
  }
  return hash.toString(36);
}

function buildSearchContent(mdx) {
  const lines = mdx.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let inFence = false;
  let opaqueComponent = null;
  let pendingComponent = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (/^\s*(```+|~{3,})/.test(trimmed)) {
      inFence = !inFence;
      continue;
    }
    if (inFence || /^\s*(import|export)\b/.test(trimmed) || /^\s*\[[^\]]+\]:\s+\S+.*$/.test(trimmed)) {
      continue;
    }

    const componentStart = trimmed.match(/^<\/?([A-Z][A-Za-z0-9_.]*)\b/);
    if (componentStart) {
      const componentName = componentStart[1];
      const isClosing = trimmed.startsWith("</");
      const selfClosing = /\/>\s*$/.test(trimmed);

      if (isClosing && opaqueComponent === componentName) {
        opaqueComponent = null;
        continue;
      }
      if (componentName !== "Callout" && !selfClosing && !isClosing) {
        opaqueComponent = componentName;
      }
      pendingComponent = !trimmed.includes(">") ? componentName : null;
      continue;
    }

    if (pendingComponent) {
      if (trimmed.includes(">")) {
        pendingComponent = null;
      }
      continue;
    }
    if (opaqueComponent) {
      continue;
    }

    const cleaned = cleanMarkdownLine(line);
    if (cleaned) {
      out.push(cleaned);
    }
  }

  return out.join("\n");
}

function cleanMarkdownLine(line) {
  return line
    .replace(/<!--.*?-->/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^[\s#>*+\-.0-9)]+/, "")
    .replace(/[*_~]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function summarizeLocales(locales) {
  const summary = {
    localeCount: locales.length,
    categoryNodeCount: 0,
    documentNodeCount: 0,
    documentRecordCount: 0,
    homepageGroupCount: 0,
  };

  for (const locale of locales) {
    summary.documentRecordCount += locale.docs.length;
    for (const node of locale.nodes) {
      if (node.parent_id === null) {
        summary.categoryNodeCount += 1;
        if (node.show_on_homepage) {
          summary.homepageGroupCount += 1;
        }
      } else {
        summary.documentNodeCount += 1;
      }
    }
  }
  return summary;
}

async function deleteMissingLocaleData(client, keepLocales) {
  if (keepLocales.length === 0) {
    await client.query("DELETE FROM documents");
    await client.query("DELETE FROM navigation_nodes");
    return;
  }

  await client.query("DELETE FROM documents WHERE locale <> ALL($1::text[])", [keepLocales]);
  await client.query("DELETE FROM navigation_nodes WHERE locale <> ALL($1::text[])", [keepLocales]);
}

async function deleteLocaleData(client, locale) {
  await client.query("DELETE FROM documents WHERE locale = $1", [locale]);
  await client.query("DELETE FROM navigation_nodes WHERE locale = $1", [locale]);
}

async function insertNavigationNode(client, node) {
  await client.query(
    `INSERT INTO navigation_nodes (
      id, path, anchor, type, title, description, seo_title, seo_description,
      image_url, show_on_homepage, locale, parent_id, sort_order, published,
      created_at, updated_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8,
      $9, $10, $11, $12, $13, $14,
      NOW(), NOW()
    )`,
    [
      node.id,
      node.path,
      node.anchor,
      node.type,
      node.title,
      node.description,
      node.seo_title,
      node.seo_description,
      node.image_url,
      node.show_on_homepage,
      node.locale,
      node.parent_id,
      node.sort_order,
      node.published,
    ],
  );
}

async function insertDocument(client, doc) {
  await client.query(
    `INSERT INTO documents (
      id, path, locale, title, content, search_content, preview,
      preview_content, published, created_at, updated_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7,
      $8, $9, NOW(), NOW()
    )`,
    [
      doc.id,
      doc.path,
      doc.locale,
      doc.title,
      doc.content,
      doc.search_content,
      doc.preview,
      doc.preview_content,
      doc.published,
    ],
  );
}

function parseArgs(argv) {
  const options = {
    docsRoot: ".",
    locale: "",
    dsn: "",
    dryRun: false,
    json: false,
    assetUrlPrefix: "",
    uploadAssets: false,
    cdnPublicBase: "",
    cdnPathPrefix: "",
  };
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    switch (arg) {
      case "--locale":
        options.locale = requireValue(argv, ++index, arg);
        break;
      case "--dsn":
        options.dsn = requireValue(argv, ++index, arg);
        break;
      case "--asset-url-prefix":
        options.assetUrlPrefix = requireValue(argv, ++index, arg);
        break;
      case "--upload-assets":
        options.uploadAssets = true;
        break;
      case "--cdn-public-base":
        options.cdnPublicBase = requireValue(argv, ++index, arg);
        break;
      case "--cdn-path-prefix":
        options.cdnPathPrefix = requireValue(argv, ++index, arg);
        break;
      case "--dry-run":
        options.dryRun = true;
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

function requireValue(argv, index, flag) {
  const value = argv[index];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function printHelp() {
  console.log(`Usage: node scripts/setup-docs.js [options] [docs-root]

Options:
  --dry-run                    Parse docs and print summary without touching Postgres.
  --locale <locale>            Import one locale, for example zh-CN.
  --dsn <postgres-dsn>         Postgres connection string. Defaults to DATABASE_URL.
  --asset-url-prefix <url>     Rewrite local media refs under this public URL prefix.
  --upload-assets              Upload local media to Volcengine TOS before importing.
  --cdn-public-base <url>      Public CDN origin/base URL used for rewritten media URLs.
  --cdn-path-prefix <path>     TOS object key prefix. Defaults to CDN_PATH_PREFIX or kimi-helpcenter-doc/.
  --json                       Print summary as JSON.
  -h, --help                   Show this help.
`);
}

function printSummary(summary, options) {
  if (options.json) {
    console.log(JSON.stringify(summary, null, 2));
    return;
  }

  const mode = options.dryRun ? "dry-run completed" : "import completed";
  console.log(
    [
      `help-center docs ${mode}`,
      `docs_root=${path.resolve(options.docsRoot)}`,
      `locale=${options.locale || "all"}`,
      `locales=${summary.localeCount}`,
      `category_nodes=${summary.categoryNodeCount}`,
      `document_nodes=${summary.documentNodeCount}`,
      `documents=${summary.documentRecordCount}`,
      `homepage_groups=${summary.homepageGroupCount}`,
    ].join(" "),
  );
}

function formatError(error) {
  if (error instanceof ValidationAggregateError) {
    return [
      `Validation failed: ${error.errors.length} issue${error.errors.length === 1 ? "" : "s"} found`,
      ...error.errors.map((validationError, index) => {
        return indentBlock(`${index + 1}. ${formatError(validationError)}`, "  ");
      }),
    ].join("\n\n");
  }
  if (error instanceof ValidationError) {
    const lines = [`Validation failed: ${error.message}`];
    const details = error.details || {};
    if (details.article) {
      const articlePath = path.relative(process.cwd(), details.article);
      lines.push(`  Article: ${details.line ? `${articlePath}:${details.line}` : articlePath}`);
    }
    if (details.component) {
      lines.push(`  Component: ${details.component}`);
    }
    if (details.reason) {
      lines.push(`  Reason: ${details.reason}`);
    }
    if (details.ref) {
      lines.push(`  Referenced path: ${details.ref}`);
    }
    if (details.resolvedPath) {
      lines.push(`  Expected file: ${path.relative(process.cwd(), details.resolvedPath)}`);
    }
    if (details.categoryRoot) {
      lines.push(`  Category root: ${path.relative(process.cwd(), details.categoryRoot)}`);
    }
    if (error.message === "Malformed MDX component") {
      lines.push("  Fix: simplify the component props and use valid JSX string/object/array syntax.");
    } else {
      lines.push("  Fix: update the MDX src/path or add the missing asset under the category images or videos directory.");
    }
    return lines.join("\n");
  }
  return error?.message || String(error);
}

function indentBlock(value, prefix) {
  return value
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

export function formatValidationErrorForTest(error) {
  return formatError(error);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }
  const summary = await importDocs(options.docsRoot, options);
  printSummary(summary, options);
}

function newID() {
  return crypto.randomUUID();
}

function ensureUniquePath(seen, candidate) {
  if (seen.has(candidate)) {
    throw new Error(`duplicate path detected: ${candidate}`);
  }
  seen.add(candidate);
}

function defaultString(value, fallback) {
  const trimmed = String(value || "").trim();
  return trimmed || fallback;
}

function trimTrailingSlash(value) {
  return String(value || "").replace(/\/+$/, "");
}

function assetURL(prefix, localPath) {
  const normalizedPath = localPath.split(path.sep).map(encodeURIComponent).join("/");
  return `${trimTrailingSlash(prefix)}/${normalizedPath}`;
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

async function assertDirectory(candidate, label) {
  const stat = await fs.stat(candidate);
  if (!stat.isDirectory()) {
    throw new Error(`${label} is not a directory`);
  }
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error) => {
    console.error(formatError(error));
    process.exitCode = 1;
  });
}
