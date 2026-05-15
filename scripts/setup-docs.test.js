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
