import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import {
  formatValidationErrorForTest,
  loadLocales,
  normalizeChatComponentSrcQueries,
  parseFrontMatter,
  parseSecondLevelHeadings,
  rewriteMarkdownCodeFencesToCodePreview,
  validateSupportedMDXComponents,
} from "./setup-docs.js";

test("parseFrontMatter extracts metadata and content", () => {
  const { frontMatter, content } = parseFrontMatter(`---
title: "Kimi API"
slug: "api-overview"
order: 1
extract_headings: true
preview: true
preview_content: "API overview preview"
---

First paragraph.
`);

  assert.equal(frontMatter.title, "Kimi API");
  assert.equal(frontMatter.slug, "api-overview");
  assert.equal(frontMatter.order, 1);
  assert.equal(frontMatter.extract_headings, true);
  assert.equal(frontMatter.preview, true);
  assert.equal(frontMatter.preview_content, "API overview preview");
  assert.equal(content, "First paragraph.\n");
});

test("rewriteMarkdownCodeFencesToCodePreview handles basic and nested fences", () => {
  const content = [
    "Before",
    "",
    "```bash",
    "kimi --continue",
    "```",
    "",
    "1. Configure:",
    "   ```json",
    "   {",
    "     \"model\": \"kimi\"",
    "   }",
    "   ```",
    "",
    "> ```bash",
    "> kimi --help",
    "> ```",
    "",
  ].join("\n");

  const got = rewriteMarkdownCodeFencesToCodePreview(content);

  assert.equal(got.includes("```"), false);
  assert.match(got, /name: "command\.sh"/);
  assert.match(got, /language: "bash"/);
  assert.match(got, /content: "kimi --continue"/);
  assert.match(got, /language: "json"/);
  assert.match(got, /content: "\{\\n  \\"model\\": \\"kimi\\"\\n\}"/);
  assert.match(got, /content: "kimi --help"/);
});

test("normalizeChatComponentSrcQueries adds required share query params first", () => {
  const got = normalizeChatComponentSrcQueries(
    [
      `<Chat title="Memory" src="https://www.kimi.com/share/abc123" />`,
      `<Chat title="Search" src="https://www.kimi.com/share/def456?foo=bar&hide_sidebar=0" />`,
      `<Chat title="External" src="https://example.com/share/demo" />`,
    ].join("\n"),
  );

  assert.match(
    got,
    /src="https:\/\/www\.kimi\.com\/share\/abc123\?hide_sidebar=1&disable_auto_preview=1"/,
  );
  assert.match(
    got,
    /src="https:\/\/www\.kimi\.com\/share\/def456\?hide_sidebar=1&disable_auto_preview=1&foo=bar"/,
  );
  assert.match(got, /src="https:\/\/example\.com\/share\/demo"/);
});

test("parseSecondLevelHeadings uses frontend-compatible IDs", () => {
  const headings = parseSecondLevelHeadings(`
## Agent 使用建议
### ignored
## 注意事项 {#notice}
## API Limits
`);

  assert.equal(headings.length, 3);
  assert.equal(headings[0].text, "Agent 使用建议");
  assert.equal(headings[0].id, "agent--mwmwt4");
  assert.equal(headings[1].id, "notice");
  assert.equal(headings[2].id, "api-limits");
});

test("loadLocales validates missing local media refs during dry parse", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-"));
  await fs.mkdir(path.join(root, "en-US", "agent"), { recursive: true });
  await fs.writeFile(path.join(root, "en-US", "_config.json"), `{"title":"Help Center"}`);
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      order: 1,
    }),
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Overview"
slug: "overview"
order: 1
extract_headings: false
---

<Frames
  src="./images/overview/missing.png"
  alt="Missing screenshot"
  width={1200}
  height={800}
/>
`,
  );

  await assert.rejects(async () => {
    try {
      await loadLocales(root, { dryRun: true });
    } catch (error) {
      const formatted = formatValidationErrorForTest(error);
      assert.match(formatted, /Validation failed: Missing local media asset/);
      assert.match(formatted, /Article: .*overview\.md/);
      assert.match(formatted, /Referenced path: \.\/images\/overview\/missing\.png/);
      assert.match(formatted, /Expected file: .*missing\.png/);
      assert.match(formatted, /Fix: update the MDX src\/path/);
      throw error;
    }
  }, /validation error/);
});

test("validateSupportedMDXComponents catches malformed CodePreview props", () => {
  assert.throws(() => {
    try {
      validateSupportedMDXComponents(
        `<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "bash",
      content: “---
name: your-skill-name
description: What it does
---"
    },
  ]}
/>`,
        "/tmp/what-are-skills.md",
      );
    } catch (error) {
      const formatted = formatValidationErrorForTest(error);
      assert.match(formatted, /Malformed MDX component/);
      assert.match(formatted, /Article: .*what-are-skills\.md:1/);
      assert.match(formatted, /Component: CodePreview/);
      assert.match(formatted, /Use straight quotes in JSX props/);
      assert.match(formatted, /Fix: simplify the component props/);
      throw error;
    }
  }, /validation error|Malformed MDX component/);
});

test("validateSupportedMDXComponents accepts VideoList props", () => {
  assert.doesNotThrow(() => {
    validateSupportedMDXComponents(
      `<VideoList
  column={2}
  list={[
    {
      url: "./videos/overview/demo.mp4",
      type: "video",
      poster: "./images/overview/video-poster.png",
      caption: "Workflow",
    },
  ]}
/>`,
      "/tmp/overview.md",
    );
  });
});

test("loadLocales validates VideoList local media refs during dry parse", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-"));
  await fs.mkdir(path.join(root, "en-US", "agent"), { recursive: true });
  await fs.writeFile(path.join(root, "en-US", "_config.json"), `{"title":"Help Center"}`);
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      order: 1,
    }),
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Overview"
slug: "overview"
order: 1
extract_headings: false
---

<VideoList
  column={1}
  list={[
    {
      url: "https://kimi-file.moonshot.cn/example.mp4",
      type: "video",
      poster: "./images/overview/missing-poster.png",
      caption: "Workflow",
    },
  ]}
/>
`,
  );

  await assert.rejects(async () => {
    try {
      await loadLocales(root, { dryRun: true });
    } catch (error) {
      const formatted = formatValidationErrorForTest(error);
      assert.match(formatted, /Validation failed: Missing local media asset/);
      assert.match(formatted, /Referenced path: \.\/images\/overview\/missing-poster\.png/);
      throw error;
    }
  }, /validation error/);
});

test("loadLocales rewrites VideoList local video refs to CDN URLs", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-"));
  await fs.mkdir(path.join(root, "en-US", "agent", "videos", "overview"), { recursive: true });
  await fs.mkdir(path.join(root, "en-US", "agent", "images", "overview"), { recursive: true });
  await fs.writeFile(path.join(root, "en-US", "_config.json"), `{"title":"Help Center"}`);
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      order: 1,
    }),
  );
  await fs.writeFile(path.join(root, "en-US", "agent", "videos", "overview", "demo.mp4"), "");
  await fs.writeFile(
    path.join(root, "en-US", "agent", "images", "overview", "demo-poster.png"),
    "",
  );
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Overview"
slug: "overview"
order: 1
extract_headings: false
---

<VideoList
  column={1}
  list={[
    {
      url: "./videos/overview/demo.mp4",
      type: "video",
      poster: "./images/overview/demo-poster.png",
      caption: "Workflow",
    },
  ]}
/>
`,
  );

  const locales = await loadLocales(root, {
    dryRun: true,
    assetUrlPrefix: "https://cdn.example.com/kimi-helpcenter-doc",
  });
  const content = locales[0].docs[0].content;

  assert.match(
    content,
    /url: "https:\/\/cdn\.example\.com\/kimi-helpcenter-doc\/en-US\/agent\/videos\/overview\/demo\.mp4"/,
  );
  assert.match(
    content,
    /poster: "https:\/\/cdn\.example\.com\/kimi-helpcenter-doc\/en-US\/agent\/images\/overview\/demo-poster\.png"/,
  );
});

test("loadLocales rewrites Frames local video refs to CDN URLs", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-"));
  await fs.mkdir(path.join(root, "en-US", "agent", "videos", "overview"), { recursive: true });
  await fs.writeFile(path.join(root, "en-US", "_config.json"), `{"title":"Help Center"}`);
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      order: 1,
    }),
  );
  await fs.writeFile(path.join(root, "en-US", "agent", "videos", "overview", "demo.mp4"), "");
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Overview"
slug: "overview"
order: 1
extract_headings: false
---

<Frames
  src="./videos/overview/demo.mp4"
  alt="Demo video"
/>
`,
  );

  const locales = await loadLocales(root, {
    dryRun: true,
    assetUrlPrefix: "https://cdn.example.com/kimi-helpcenter-doc",
  });
  const content = locales[0].docs[0].content;

  assert.match(content, /type="video"/);
  assert.match(
    content,
    /src="https:\/\/cdn\.example\.com\/kimi-helpcenter-doc\/en-US\/agent\/videos\/overview\/demo\.mp4"/,
  );
});

test("loadLocales rewrites local video refs through upload asset dry run", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "kimi-docs-"));
  await fs.mkdir(path.join(root, "en-US", "agent", "videos", "overview"), { recursive: true });
  await fs.writeFile(path.join(root, "en-US", "_config.json"), `{"title":"Help Center"}`);
  await fs.writeFile(
    path.join(root, "en-US", "agent", "_category.json"),
    JSON.stringify({
      title: "Agent",
      description: "Agent docs",
      order: 1,
    }),
  );
  await fs.writeFile(path.join(root, "en-US", "agent", "videos", "overview", "demo.mp4"), "");
  await fs.writeFile(
    path.join(root, "en-US", "agent", "overview.md"),
    `---
title: "Overview"
slug: "overview"
order: 1
extract_headings: false
---

<VideoList
  column={1}
  list={[
    {
      url: "./videos/overview/demo.mp4",
      type: "video",
      caption: "Workflow",
    },
  ]}
/>
`,
  );

  const previousEnv = {
    TOS_ACCESS_KEY_ID: process.env.TOS_ACCESS_KEY_ID,
    TOS_ACCESS_KEY_SECRET: process.env.TOS_ACCESS_KEY_SECRET,
    TOS_REGION: process.env.TOS_REGION,
    TOS_BUCKET: process.env.TOS_BUCKET,
  };
  process.env.TOS_ACCESS_KEY_ID = "test-access-key";
  process.env.TOS_ACCESS_KEY_SECRET = "test-access-secret";
  process.env.TOS_REGION = "cn-beijing";
  process.env.TOS_BUCKET = "test-bucket";

  try {
    const locales = await loadLocales(root, {
      dryRun: true,
      uploadAssets: true,
      cdnPublicBase: "https://statics.example.com",
      cdnPathPrefix: "kimi-helpcenter-doc/",
    });
    const content = locales[0].docs[0].content;

    assert.match(
      content,
      /url: "https:\/\/statics\.example\.com\/kimi-helpcenter-doc\/en-US\/agent\/videos\/overview\/demo\.mp4"/,
    );
  } finally {
    for (const [name, value] of Object.entries(previousEnv)) {
      if (value === undefined) {
        delete process.env[name];
      } else {
        process.env[name] = value;
      }
    }
  }
});

test("validateSupportedMDXComponents ignores component-like text in code fences", () => {
  assert.doesNotThrow(() => {
    validateSupportedMDXComponents([
      "```mdx",
      "<CodePreview",
      "  files={[",
      "```",
    ].join("\n"));
  });
});
