# Localization Review — `zh-SG` (Simplified Chinese, overseas/Singapore)

Source: machine-translated from `en-US/` (identical paths). Reviewed all 90 `zh-SG/**/*.md` files.
Note: Simplified characters and fullwidth punctuation are expected/normal and are NOT flagged.

## Counts

| Category | Count | Notes |
|---|---|---|
| 1. Untranslated English prose/labels | 3 | term-consistency leftovers (`Agent Mode`, `Thinking mode`/`FAQ` headings) |
| 2. Traditional-Chinese characters | 0 | none found (checked truly-Traditional-only char set) |
| 3. `截图30` / garbage SeoMeta | 1 | `kimi-claw/concepts.md:11` [source] |
| 4. Broken markdown links (fullwidth `（URL）`) | 1 | `deep-research/use-cases.md:63` |
| 5. Broken anchor links `](#…)` | 2 | both [source] — heading translated, anchor slug not updated |
| 6. Mistranslation / reversed semantics | 1 | `kimi-claw/overview.md:18` ungrammatical 对话+宾语 |
| 7. Naturalness / awkward phrasing | 1 | `kimi-claw/overview.md:36` spacing |
| 8. Mixed EN/CN term inconsistency | 1 | `Thinking Mode` capitalization inconsistency |
| **Total actionable** | **~9** | (excluding [source] cosmetics counted above) |

**Verdict:** zh-SG is in good shape — the machine translation is largely fluent and accurate, with no Traditional-Chinese contamination and almost no untranslated prose. The only functional bugs are two broken anchor links (anchor slugs not re-pointed after headings were translated) and one fullwidth-parenthesis broken markdown link. Remaining items are minor term-consistency and spacing polish; one genuine ungrammatical sentence in `kimi-claw/overview.md`.

---

## 1. Untranslated English prose / labels

- `agent/use-skills-in-agent-en.md:19` — `在 Kimi Agent Mode 的输入框中` — "Kimi Agent Mode" left in English while the rest of this same file consistently uses `Agent 模式` (title, headings, line 113 context). Fix: `在 Kimi Agent 模式的输入框中`. [source-influenced]
- `agent/use-skills-in-agent-en.md:113` — `Agent Mode 和 Kimi Claw 均支持技能` — "Agent Mode" left in English; should match the file's `Agent 模式`. Fix: `Agent 模式和 Kimi Claw 均支持技能`. [source-influenced]
- `kimi-code/cli-interaction.md:18` — heading `## Thinking mode` untranslated. en-US is also `## Thinking mode` [source]. Acceptable as a kept feature label, but inconsistent with body which uses `Thinking Mode` (capital M) — see Category 8. If localizing, use `## 思考模式（Thinking Mode）`.

(Note: `kimi-code/cli-getting-started.md:296 ## FAQ`, `kimi-business/kimi-business.md:14 # Kimi Business`, `slides/overview.md:15 # Kimi Slides`, `getting-started/search.md:14 # Agentic Search` are English headings inherited verbatim from en-US [source] — these are product/feature names kept by design and are NOT flagged as defects.)

## 2. Traditional-Chinese characters

None. A scan for truly Traditional-only characters (後個們專屬顯閉壓縮檔產實驗應該選擇據觸發訊號變數網絡認證 etc.) returned zero hits. All `显/繁/适/会/应/选/个/们/后` etc. matches were Simplified forms used correctly.

## 3. Garbage / source-leftover SeoMeta

- `kimi-claw/concepts.md:11` — `description="图片：截图30"` — placeholder garbage. Inherited from en-US (`description="Image: 截图30"`). [source] Fix at source: write a real description, e.g. `description="了解 Kimi Claw 的核心概念与终端使用方式。"`

## 4. Broken markdown links (fullwidth parens)

- `deep-research/use-cases.md:63` — `[查看结果]（https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b）` — fullwidth `（ ）` around the URL breaks the markdown link (renders as literal text). Fix: use halfwidth `(` `)`: `[查看结果](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)`.

## 5. Broken anchor links

Heading text was translated to Chinese but the `](#english-slug)` anchor was left pointing at the old English slug — the link no longer resolves to any heading.

- `kimi-code/cli-ides.md:102` — `[前提条件](#prerequisites)` — heading is now `## 前提条件` (line 21), whose generated anchor is `#前提条件`, not `#prerequisites`. Broken. [source] Fix: `[前提条件](#前提条件)`.
- `slides/stuck.md:51` — `[Bug 反馈指南](#bug-feedback-guidelines)` — heading is now `## Bug 反馈指南` (line 81), anchor `#bug-反馈指南`, not `#bug-feedback-guidelines`. Broken. [source] Fix: `[Bug 反馈指南](#bug-反馈指南)`.

## 6. Mistranslation / reversed semantics

- `kimi-claw/overview.md:18` — `直接在 Kimi 中创建、部署并对话你自己的 OpenClaw 实例` — ungrammatical: 对话 cannot take a direct object (en: "chat with your own OpenClaw instance"). Fix: `直接在 Kimi 中创建、部署你自己的 OpenClaw 实例并与之对话`.
- `deep-research/overview.md:28` — `筛选出质量最高的前 3.2% 内容` — VERIFIED CORRECT (not reversed). Matches en-US "filters to top 3.2% highest-quality content" and zh-CN intent (keep the best 3.2%). No fix needed.

## 7. Naturalness / awkward phrasing

- `kimi-claw/overview.md:36` — `接入你的 Kimi Code额度` — missing space between Latin term and Chinese word "额度", reads as run-together. Fix: `接入你的 Kimi Code 额度`.
- (Spot-checked ~12 articles: deep-research/overview, wrong-direction, stuck; getting-started/overview, agentic-chat; kimi-claw/overview, troubleshooting; membership/overview, payment-issues; agent/overview; slides/overview; websites/overview — all otherwise read naturally. `membership/overview.md:36` "同一功能可使用全部额度上限" is awkward but faithfully mirrors equally-awkward en-US source "Use all credit limit for the same function" — [source], not a translation defect.)

## 8. Mixed English-Chinese / term inconsistency

- `kimi-code/cli-interaction.md:18 / 20 / 22 / 23 / 41` — heading uses `Thinking mode` (lowercase m), body uses `Thinking Mode` (capital M) 4 times. Internally inconsistent casing. Fix: standardize to `Thinking Mode` (matches en-US body usage) throughout, or localize to `思考模式`.
- `kimi-claw/overview.md:36` — `Kimi Code额度` spacing (also listed in Category 7).

---

### Methodology notes
- English-chunk grep across all prose lines: remaining ASCII-heavy lines were all code blocks (`content:`), image `src=`, URLs, and MDX attributes — legitimate, not untranslated prose.
- `getting-started/prompt basics.md` has a space in its filename, but the same filename exists in `en-US/` — inherited, not a zh-SG-specific issue.
- The `-en.md` filename suffix (e.g. `FAQ-en.md`, `use-skills-in-*-en.md`) is part of the source file naming; those files ARE translated into Chinese (suffix does not indicate untranslated content).
