# Translation & Localization Principles

Rules for translating the help center across locales. Read together with
`AGENTS.md` (authoring) and `glossary/terms.yaml` (term table).

## Sources & Locales

- **Source of truth**: `zh-CN` (Chinese, hand-maintained) and `en-US`
  (source for the overseas SEO locales). `en-CN` is derived from `zh-CN`.
- **Locales**: `en-US`, `en-CN`, `zh-CN`, `zh-SG`, `zh-TW`, and 14 SEO
  targets (`de-DE es-419 fr-FR id-ID it-IT ja-JP ko-KR pt-BR ru-RU th-TH
  tr-TR vi-VN` … ). English content locales (`en-US`, `en-CN`) keep English.
- Translate faithfully to `en-US` for SEO locales; do not silently improve
  the source. Fix genuine source defects in `en-US`/`zh-CN` and propagate.

## Glossary

- `glossary/terms.yaml` and `glossary/terms.json` are **hand-maintained in
  parallel** — edit both and bump `meta.total_terms` / `meta.last_updated`.
- `translation_strategy`: `keep_original` | `keep_original_with_note` |
  `localize`.
- For `localize` terms, per-locale forms live in the `localized_forms`
  map (an extension field, e.g. P1-017 Memory Space, P1-025 Kimi Open
  Platform).

## Keep in English (proper nouns / technical terms)

- **Product / feature names**: Kimi Business, Kimi Code, Kimi Claw, Agent,
  Agent Swarm, Kimi Chat, Deep Research, Professional Database, Kimi Code
  CLI. `Kimi OpenPlatform Community` (the forum at forum.moonshot.ai) is a
  single product name — never split or partially translate it.
- **credit** (glossary M2-002 `keep_original`): keep `credit`/`credits`
  in English. The `quota` concept is deprecated — use `credit` (only the
  kimi-api rate/"Quota & Rate Limits" UI button and slugs keep `quota`).
- **rate limit** and **gateway**: proper-noun/model-returned terms — keep
  English in all locales. `rate limit` body stays English with a first-use
  local gloss, e.g. `rate limit（límite di frequenza）`; the rate-limits
  page title is also English (`Rate limit(s)`). `gateway` stays English
  (mind local article/gender/spacing, e.g. es `el gateway`, CJK adds a
  space). CJK katakana/hangul transliterations may be kept as-is.
- **Code / CLI**: bash and CLI commands, slash commands (`/goal`,
  `/login`, `/init`, `/goal next`), inline command arguments
  (`kimi -p "…"`), API endpoints, `curl | bash`, `irm | iex`, `SKILL.md`
  and YAML config, mermaid, and code identifiers (`src/utils`,
  `kebab-case`, `@paths`, `npm test`, `JSDoc`, `UserService`).
- **UI element / button names** in the Kimi Claw context (e.g. `Workspace`
  as a UI tab, `OpenClaw Workspace`) — pending alignment with the real
  localized product UI.
- **Product / UI / marketing terms**: few-shot, Dashboard, vibe coding;
  `concurrency` (並行/並發).
- **Resource filenames, WeChat/Weibo handles**, and proper nouns
  (Stanford CS336, Picasso, OK Computer, Xiaohongshu, X.com, Pop Mart, ⭐ …).
- **`(English & Chinese)`** parenthetical markers.

## Localize

- **Natural-language example prompts** (`name: "prompt.txt"` /
  `language: "text"` CodePreview content, and NL goal text after `/goal`)
  → translate; keep code identifiers, `@paths`, and command tokens English.
- **Descriptive placeholders** (`[article type]`, `[topic]`,
  `[target audience]`, `[Company Name]`, `[policy name/document]`, `[task]`,
  `[Fact-Check Protocol]`, `[High-Risk Topic Checklist]`, `[Project A/B]`,
  `[Unverified]` …): translate the inner text, keep the `[ ]` brackets and
  any letter/number (`A`, `1`). Keep `[xxx]` (numeric) and `[ ]` (checkbox)
  as-is.
- **UI-button / action-example placeholders** stay English
  (`[Download]`, `[Export]`, `[Upload …]`, `[Generate code review report]`);
  **code-literal placeholders** stay English (`["acp"]`, `[BEGIN]`,
  `[imported]`, `[Beta]`, `[^N^]`).
- **Kimi Open Platform** → localize per glossary P1-025 (URLs unchanged).
- **Memory Space** → localize per glossary P1-017; the standalone **Memory**
  feature → each locale's generic-memory word (pt `memória`, es `memoria`,
  ja `記憶`, ru `память` …).
- **Legal document names** → each locale's legal term, e.g.
  `User Service Agreement` (用户服务协议), `Privacy Policy` — unify one
  canonical name for the same URL.
- **SEO title suffix / separator** → one consistent style per locale.
- Art movements → each language's standard art-history names.

## Domains, URLs, Emails, Links

- `platform.kimi.ai` = **multilingual / international**;
  `platform.kimi.com` = **China domestic**. Both are live.
- Legacy `platform.moonshot.ai` (+`www.`) is migrated to
  `platform.kimi.ai` in multilingual docs (labels and targets;
  `…/docs/introduction` → `…/docs/models`).
- The **kimi-code Base URL config** (`platform.kimi.com` +
  `api.moonshot.cn/v1`) is the China config — leave the URLs unchanged
  (localize only the display name per the rules above).
- `kimi-web-img.moonshot.cn/webbridge/install.*` is the install-script
  download host — functional, keep as-is.
- **Support email**: overseas locales use `support@moonshot.ai`; China
  locales (`zh-CN`, `en-CN`) use `support@moonshot.cn`.
- Strip tracking query params (`?from=kfc_*`); keep functional params
  (`version`, `hide_sidebar`, `disable_auto_preview`, `showGallery`,
  `doc_id`) and any `#anchor`.
- **Internal links**: `/<category>/<slug>` without the `/help` prefix; no
  relative (`./`, `../`) article links. Anchors are GitHub-style
  (lowercase, spaces → hyphens, punctuation removed, Unicode kept), and
  must match a real heading in the **same-locale** target page.

## Punctuation & Formatting

- `&amp;` → `&`.
- **Quotes**: use each language's own convention — Western `"…"` (curly
  double), fr/ru `«…»`, zh `「…」`/`"…"`. Do not use straight single quotes
  as term delimiters. Inside a `{"…"}` JSX prop, use curly quotes (not
  straight `"`) to avoid clashing with the delimiter.
- CJK: full-width `？：` where natural; add a space between CJK and inline
  Latin words/URLs.
- **Markdown**: put a blank line before and after a bold intro label
  (`**Your options**:`) so it renders on its own line; render parallel
  facts (e.g. Free tier / Paid tier) as a bullet list, not a run-on
  paragraph.
- Preserve `\n` and JSON escaping inside component string props.

## Workflow

- Work on the `i18n` branch; one focused commit per fix; `git pull
  --rebase origin i18n` before pushing (the branch is shared — beware
  concurrent edits).
- Commit only locale directories and `glossary/`; exclude `_l10n-review/`
  and `scripts/`.
- Validate every change: `node scripts/setup-docs.js --dry-run [--locale X] .`
- When batch-editing non-ASCII with perl, use `-Mutf8 -CSD` (byte mode
  double-encodes multibyte content and corrupts full-width punctuation).
