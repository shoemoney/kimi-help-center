# Kimi Help Center Docs Authoring Guide

This repo stores help center articles as MDX-compatible Markdown under locale
folders such as `en-US/` and `zh-CN/`.

For translating/localizing content across locales, see
[`TRANSLATION.md`](./TRANSLATION.md) (keep-English vs localize rules, glossary,
domains/URLs/emails, punctuation, and workflow).

## Scope

- Use this repo for checked-in help center content only.
- Keep article files MDX-compatible and simple.
- Do not add unsupported custom components, imports, helper functions, or
  complex expressions.

## Article Rules

- Keep each article under `<locale>/<category>/`.
- Keep local images under `<locale>/<category>/images/<article>/...`.
- Keep local videos under `<locale>/<category>/videos/<article>/...`.
- Do not add `import` statements in article files. The web app injects the
  supported MDX components.
- Wrap every custom MDX component with one empty line before it and one empty
  line after it.
- Prefer simple JSX props: strings, numbers, booleans, object literals, and
  array literals.
- If MDX gets too complex, simplify it instead of introducing new syntax.

## Front Matter

Every article should have:

```yaml
---
title: "Article title"
slug: "stable-article-slug"
order: 1
extract_headings: false
preview: false
---
```

Optional preview fields:

```yaml
preview: true
preview_content: "Short card/navigation preview text."
```

Guidance:

- Required front matter fields are `title`, `slug`, `order`,
  `extract_headings`.
- Use `extract_headings: true` for FAQ-style pages where `##` headings should
  be exposed in navigation.
- Use `extract_headings: false` for normal guides and overview pages.

## Supported MDX Components

Only use the registered components below.

### `SeoMeta`

Use a self-closing tag with direct string attributes only.

```mdx
<SeoMeta
  title="Page title - Kimi Help Center"
  description="Short page description."
  ogImage="https://example.com/cover.png"
  ogImageWidth="1200"
  ogImageHeight="630"
  ogType="article"
/>
```

Rules:

- Self-closing only.
- Use literal string props only.
- Do not pass `pageUrl`; it is no longer supported.
- Do not use variables or computed expressions.
- In MDX string props, prefer literal characters where valid. If the value
  contains embedded double quotes, escape them as HTML entities such as
  `&quot;` instead of JS-style escapes like `\"`. Do not use Unicode escape
  sequences such as `\u0026` for normal punctuation.

### `Callout`

Supported types: `info`, `tip`, `warning`, `exclamation`.

```mdx
<Callout type="info">
Important guidance goes here.
</Callout>
```

### `Frames`

Use `Frames` for screenshots and videos.

Static image:

```mdx
<Frames
  src="./images/article-name/screenshot-1.png"
  alt="Settings page"
  width={1920}
  height={1080}
/>
```

Video:

```mdx
<Frames
  type="video"
  src="./videos/article-name/screen-recording-1.mp4"
  alt="Screen recording"
  width={1920}
  height={1080}
/>
```

Rules:

- Optional prop: `caption`.
- Omit `type` for normal images.
- Use `type="video"` for videos.
- Local video files are uploaded to the CDN during import, the same as local
  image files.
- Prefer stable ASCII asset names such as `screenshot-23.png` or
  `agent-workflow.png`.

### `VideoList`

Use `VideoList` for a grid of playable videos.

```mdx
<VideoList
  column={2}
  list={[
    {
      url: "./videos/article-name/workflow-1.mp4",
      type: "video",
      poster: "./images/article-name/video-1-poster.png",
      caption: "First workflow",
    },
    {
      url: "./videos/article-name/workflow-2.mp4",
      type: "video",
      poster: "./images/article-name/video-2-poster.png",
      caption: "Second workflow",
    },
  ]}
/>
```

Rules:

- Use a self-closing tag.
- `list` is required and should be an array of objects.
- Each list item must include `url` and `type: "video"`.
- Optional item fields: `poster`, `caption`.
- Optional prop: `column`. Supported values are `1`, `2`, `3`, and `4`;
  omit it to use the default two-column layout.
- Keep local `url` video assets under the article `videos/` folder. They are
  uploaded to the CDN during import, the same as local `Frames` videos.
- Keep local `poster` image assets under the article `images/` folder.

### `Chat`

Use `Chat` for Kimi share/demo embeds.

```mdx
<Chat
  title="View result"
  src="https://www.kimi.com/share/<share-id>?hide_sidebar=1&disable_auto_preview=1"
/>
```

Rules:

- `src` is required; `title` is optional.
- Kimi share URLs must include
  `?hide_sidebar=1&disable_auto_preview=1`.
- Keep those two query params first and in that order.

### `CodePreview`

Use `CodePreview` for code, shell, and prompt examples instead of raw fenced
code blocks.

```mdx
<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>
```

Prompt example:

```mdx
<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>
```

Rules:

- Use `files={[{ name, content, language? }]}`.
- Optional prop: `initialIndex`.
- Use `prompt.txt` with `language: "text"` for natural-language prompts.

### `ComparisonBlock`

Use `ComparisonBlock` for incorrect vs correct phrasing.

```mdx
<ComparisonBlock
  wrong={"vague prompt"}
  correct={"specific prompt"}
/>
```

### `ColumnsContent`

Use `ColumnsContent` for grouped navigation cards.

```mdx
<ColumnsContent
  columns={[
    {
      title: "Pricing Details",
      description: "Monthly and annual pricing",
      pageUrl: "/membership/membership-pricing",
      type: "setting",
    },
    {
      title: "Plan Changes",
      description: "Upgrade or downgrade your plan",
      pageUrl: "/membership/upgrade-downgrade",
      type: "document",
    },
  ]}
/>
```

Supported object fields:

- `title`
- `description`
- `pageUrl`
- `type`
- `ogImage`
- `icon`

Built-in `type` values:

- `browser`
- `code`
- `comment`
- `data`
- `document`
- `kimiclaw`
- `microscope`
- `music`
- `okcomputer`
- `ppt`
- `setting`

Common aliases:

- `microscope1`
- `microscope-1`
- `ok`
- `ok-computer`
- `power`
- `settings`
- `docs`
- `doc`
- `comments`
- `pptx`

Preferred mappings used in the docs:

- quota or credit rules -> `data`
- pricing or settings -> `setting`
- plan changes or docs -> `document`
- contact -> `comment`
- agent swarm -> `okcomputer`
- Kimi Claw -> `kimiclaw`

Rules:

- Prefer built-in `type` values over custom `icon`.
- Prefer stable internal article routes without the `/help` prefix in
  `pageUrl`, such as `/<category>/<slug>`.

## Link Rules

- Rewrite internal docs links to `/<category>/<slug>` without the `/help`
  prefix.
- Resolve relative article links to their actual `/<category>/<slug>` route.
- Preserve external URLs as-is.

## Setup Script

This repo includes a Node.js setup script at `scripts/setup-docs.js`.

Use pnpm:

```bash
pnpm install
pnpm validate:docs
```

Validation performs a dry run across all supported locales and checks:

- front matter and slug/path uniqueness
- local media references in Markdown images, MDX `src` props, and `VideoList`
  `url`/`poster` props
- supported MDX component syntax, including malformed props and unbalanced
  JSX braces or brackets
- `CodePreview` conversion for raw fenced code blocks
- Kimi `Chat` URL query normalization

For locale-scoped checks, run:

```bash
node scripts/setup-docs.js --dry-run --locale zh-CN .
```

For real import/deploy, configure credentials in `.env.local` or CI variables:

```bash
DATABASE_URL="postgres://user:pass@host:5432/helpcenter?sslmode=disable"
TOS_ACCESS_KEY_ID="..."
TOS_ACCESS_KEY_SECRET="..."
TOS_REGION="cn-beijing"
TOS_BUCKET="static-moonshot-cn"
CDN_PUBLIC_BASE="https://statics.moonshot.cn"
CDN_PATH_PREFIX="kimi-helpcenter-doc/"
```

Then run:

```bash
node scripts/setup-docs.js --upload-assets .
```

Do not commit `.env` or `.env.local`.

## Quick Review Checklist

- Front matter is present and complete.
- Every custom component has blank lines around it.
- `SeoMeta` uses literal string props only.
- `SeoMeta` does not include `pageUrl`.
- `SeoMeta` string props use correct MDX escaping for embedded quotes and
  punctuation.
- `Chat` Kimi share URLs include both required query params.
- `Frames` local asset paths exist under the category media tree.
- `VideoList` local `url` paths exist under `videos/`; local `poster` paths
  exist under `images/`.
- `ColumnsContent` uses built-in `type` values where possible.
- No unsupported custom components or imports were added.
- `pnpm validate:docs` passes before committing docs or setup changes.
