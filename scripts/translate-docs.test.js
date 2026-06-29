import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { parseFrontMatter } from "./setup-docs.js";
import {
  defaultSourceLocaleForTarget,
  machineTranslationTargetLocaleCodes,
  normalizeTranslationSourceLocale,
  normalizeSeoLocale,
} from "./seo-locales.js";
import { translateDocs } from "./translate-docs.js";

async function createFixture() {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-translate-"));
  await fs.mkdir(path.join(root, "en-US", "agent", "images", "overview"), {
    recursive: true,
  });
  await fs.writeFile(
    path.join(root, "en-US", "_config.json"),
    JSON.stringify({
      title: "Kimi Help Center",
      description: "Find product guides",
      hot_questions: ["Membership plans"],
      search_placeholder: "Search help",
    }),
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      icon: "okcomputer",
      order: 1,
      seo: {
        title: "Agent",
        description: "Agent docs",
      },
    }),
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "images", "overview", "screenshot.png"),
    "",
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "images", ".gitkeep"),
    "",
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "images", "unused.png"),
    "",
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Agent overview"
slug: "agent-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Learn how Agent works."
---

<SeoMeta
  title="Agent overview - Kimi Help Center"
  description="Learn how Agent works."
/>

# Agent overview

Use Agent to finish multi-step work.

<Frames
  src="./images/overview/screenshot.png"
  alt="Agent overview"
  width={1200}
  height={800}
/>
`,
  );
  await fs.mkdir(path.join(root, "zh-CN", "agent", "images", "overview"), {
    recursive: true,
  });
  await fs.writeFile(
    path.join(root, "zh-CN", "_config.json"),
    JSON.stringify({
      title: "Kimi 帮助中心",
      description: "查找产品指南",
      hot_questions: ["会员方案"],
      search_placeholder: "搜索帮助",
    }),
  );
  await fs.writeFile(
    path.join(root, "zh-CN", "agent", "_category.json"),
    JSON.stringify({
      title: "智能体",
      description: "智能体文档",
      icon: "okcomputer",
      order: 1,
      seo: {
        title: "智能体",
        description: "智能体文档",
      },
    }),
  );
  await fs.writeFile(
    path.join(root, "zh-CN", "agent", "images", "overview", "screenshot.png"),
    "",
  );
  await fs.writeFile(
    path.join(root, "zh-CN", "agent", "overview.md"),
    `---
title: "智能体概览"
slug: "agent-overview"
order: 1
extract_headings: false
preview: true
preview_content: "了解智能体如何工作。"
---

<SeoMeta
  title="智能体概览 - Kimi 帮助中心"
  description="了解智能体如何工作。"
/>

# 智能体概览

使用智能体完成多步骤任务。

<Frames
  src="./images/overview/screenshot.png"
  alt="智能体概览"
  width={1200}
  height={800}
/>
`,
  );
  return root;
}

test("translateDocs creates missing target article, metadata, and assets once", async () => {
  const root = await createFixture();

  const summary = await translateDocs({
    docsRoot: root,
    targetLocales: ["ja-JP"],
    mock: true,
  });

  assert.equal(summary.translated, 3);
  assert.equal(summary.skipped, 0);
  assert.equal(summary.copiedAssets, 1);

  const articlePath = path.join(root, "ja-JP", "agent", "overview.md");
  const article = await fs.readFile(articlePath, "utf8");
  const { frontMatter, content } = parseFrontMatter(article);
  assert.equal(frontMatter.slug, "agent-overview");
  assert.equal(frontMatter.order, 1);
  assert.equal(frontMatter.extract_headings, false);
  assert.equal(frontMatter.title, "[ja-JP] Agent overview");
  assert.equal(frontMatter.preview_content, "[ja-JP] Learn how Agent works.");
  assert.match(content, /<SeoMeta/);
  assert.match(content, /<Frames/);

  const category = JSON.parse(
    await fs.readFile(path.join(root, "ja-JP", "agent", "_category.json"), "utf8"),
  );
  assert.equal(category.title, "[ja-JP] Agent");
  assert.equal(category.icon, "okcomputer");
  assert.equal(category.order, 1);

  await fs.stat(path.join(root, "ja-JP", "agent", "images", "overview", "screenshot.png"));
  await assert.rejects(
    fs.stat(path.join(root, "ja-JP", "agent", "images", ".gitkeep")),
    /ENOENT/,
  );
  await assert.rejects(
    fs.stat(path.join(root, "ja-JP", "agent", "images", "unused.png")),
    /ENOENT/,
  );
});

test("translateDocs uses zh-CN as the default source for en-CN", async () => {
  const root = await createFixture();

  const summary = await translateDocs({
    docsRoot: root,
    targetLocales: ["en-cn"],
    mock: true,
  });

  assert.equal(summary.sourceLocale, "zh-CN");
  assert.deepEqual(summary.sourceLocales, ["zh-CN"]);
  assert.deepEqual(summary.targetSourceLocales, { "en-CN": "zh-CN" });
  assert.equal(summary.translated, 3);

  const articlePath = path.join(root, "en-CN", "agent", "overview.md");
  const article = await fs.readFile(articlePath, "utf8");
  const { frontMatter, content } = parseFrontMatter(article);
  assert.equal(frontMatter.slug, "agent-overview");
  assert.equal(frontMatter.title, "[en-CN] 智能体概览");
  assert.equal(frontMatter.preview_content, "[en-CN] 了解智能体如何工作。");
  assert.match(content, /# 智能体概览/);

  const category = JSON.parse(
    await fs.readFile(path.join(root, "en-CN", "agent", "_category.json"), "utf8"),
  );
  assert.equal(category.title, "[en-CN] 智能体");

  await fs.stat(path.join(root, "en-CN", "agent", "images", "overview", "screenshot.png"));
});

test("translateDocs skips existing target files unless overwrite is set", async () => {
  const root = await createFixture();
  await fs.mkdir(path.join(root, "ja-JP", "agent"), { recursive: true });
  const existingPath = path.join(root, "ja-JP", "agent", "overview.md");
  await fs.writeFile(existingPath, "manual translation\n");

  const summary = await translateDocs({
    docsRoot: root,
    targetLocales: ["ja-JP"],
    articles: ["agent/overview.md"],
    mock: true,
  });

  assert.equal(summary.translated, 2);
  assert.equal(summary.skipped, 1);
  assert.equal(await fs.readFile(existingPath, "utf8"), "manual translation\n");
  await fs.stat(path.join(root, "ja-JP", "_config.json"));
  await fs.stat(path.join(root, "ja-JP", "agent", "_category.json"));
});

test("translateDocs dry run does not create target files", async () => {
  const root = await createFixture();

  const summary = await translateDocs({
    docsRoot: root,
    targetLocales: ["ja-JP"],
    articles: ["en-US/agent/overview.md"],
    dryRun: true,
    apiKey: "",
  });

  assert.equal(summary.translated, 0);
  assert.equal(summary.skipped, 0);
  assert.equal(summary.planned.length, 3);
  await assert.rejects(
    fs.stat(path.join(root, "ja-JP", "agent", "overview.md")),
    /ENOENT/,
  );
});

test("translateDocs rejects human-maintained zh-CN targets", async () => {
  const root = await createFixture();

  await assert.rejects(
    translateDocs({
      docsRoot: root,
      targetLocales: ["zh-CN"],
      mock: true,
    }),
    /zh-CN is human-maintained/,
  );
});

test("translateDocs only accepts maintained source locales", async () => {
  const root = await createFixture();

  assert.equal(normalizeTranslationSourceLocale("en"), "en-US");
  assert.equal(normalizeTranslationSourceLocale("zh-cn"), "zh-CN");
  await assert.rejects(
    translateDocs({
      docsRoot: root,
      sourceLocale: "ja-JP",
      targetLocales: ["ko-KR"],
      mock: true,
    }),
    /unsupported translation source locale: ja-JP/,
  );
});

test("SEO locales include domestic English, overseas Simplified Chinese, and Russian as machine targets", () => {
  assert.equal(normalizeSeoLocale("en-cn"), "en-CN");
  assert.equal(normalizeSeoLocale("zh-sg"), "zh-SG");
  assert.equal(normalizeSeoLocale("ru-ru"), "ru-RU");
  assert.equal(defaultSourceLocaleForTarget("en-cn"), "zh-CN");
  assert.equal(defaultSourceLocaleForTarget("ja-JP"), "en-US");

  const targets = machineTranslationTargetLocaleCodes();
  assert.equal(targets.includes("zh-CN"), false);
  assert.equal(targets.includes("en-CN"), true);
  assert.equal(targets.includes("zh-SG"), true);
  assert.equal(targets.includes("ru-RU"), true);
});

test("translateDocs honors maxRetries 0", async () => {
  const root = await createFixture();
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response("server error", { status: 500 });
  };

  try {
    await assert.rejects(
      translateDocs({
        docsRoot: root,
        targetLocales: ["ja-JP"],
        apiKey: "test-key",
        baseUrl: "https://example.invalid/v1",
        maxRetries: 0,
        concurrency: 1,
      }),
      /translation completed with 3 failed file/,
    );
    assert.equal(fetchCalls, 3);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
