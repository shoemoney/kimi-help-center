# Localization Review — `ru-RU` (Russian)

Source: machine-translated from `en-US/` (identical paths). Files reviewed: 90 `*.md`.

## Counts

| Category | Defects | Notes |
|---|---|---|
| 1. Leftover Chinese/CJK | 1 | only the known source-inherited SeoMeta `截图30`; 2 other CJK hits are asset paths (excluded) |
| 2. Untranslated words mid-sentence | 0 | Latin runs are app names / UI labels / code / borrowed tech terms — all acceptable |
| 3. Fullwidth / CJK punctuation | 5 | `｜` in SeoMeta title, fullwidth `（）` breaking a link, 2× `？` in `##` headings, 2× `：` in bold labels |
| 4. Broken anchor links | 2 | both `](#anchor)` point at English slugs whose headings were translated |
| 5. Bilingual annotations `English (中文)` | 0 | gloss patterns like `FAQ (Частые вопросы)` are intentional/acceptable |
| 6. Register (reader-facing informal "ты") | 0 | all informal forms are inside example prompts (quotes/Callout) → ignored per rule |
| 7. Reversed semantics (top 3.2%) | 0 | correct: "отбирает лучшие 3,2%" = selects the best 3.2% |
| 8. Naturalness / consistency | 2 | SeoMeta brand name inconsistent (24 vs 64 files); minor repeated gloss |

**Verdict:** The ru-RU localization is in good shape — fluent, consistently formal ("вы"), with no untranslated body text and correct semantics. The only real defects are a small cluster of fullwidth-punctuation artifacts (one of which breaks a markdown link), two anchor links broken by heading translation, and a brand-name inconsistency in SeoMeta titles. None are content/meaning errors.

---

## 1. Leftover Chinese/CJK

- `kimi-claw/concepts.md:11` — `description="Изображение: 截图30"` — leftover `截图30`. **[source]** (known source-inherited; English source has the same `截图30`). Suggest: replace with `Скриншот 30` or drop.

Excluded (not defects):
- `agent/use-skills-in-agent-en.md:30` — `src="./images/skills/加号-en.png"` — asset path.
- `kimi-webbridge/kimi-webbridge.md:23` — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path. **[source]** (filename inherited).

## 2. Untranslated words mid-sentence

None. Latin runs found are legitimate: product/UI names kept verbatim ("Web search", "Visible to members only", "Deploy on my computer" — these are quoted English UI labels, **[source]**), app package IDs/bank names in `kimi-claw/kimi-claw-android-guide.md`, code samples, and accepted borrowed tech terms ("diff кода", "concurrency", "token", "rate limit", "quota") which are commonly used untranslated in Russian IT docs.

## 3. Fullwidth / CJK punctuation

- `getting-started/search.md:10` — SeoMeta `title="Agentic Search: руководства и ответы｜Справочный центр Kimi"` — fullwidth `｜`. Convention across all other SeoMeta titles is ` — ` (em dash). Fix: `... ответы — Справочный центр Kimi`.
- `deep-research/use-cases.md:63` — `[Посмотреть результат]（https://...replay/19b36b81-...）` — fullwidth `（` `）` break the markdown link (it will not render as a link). Fix: use ASCII `(` `)`.
- `deep-research/wrong-direction.md:22` — `## Как снизить риск ухода в сторону？` — fullwidth `？` in `##` heading. Fix: ASCII `?` (also fixes its GitHub anchor).
- `agent/overview.md:41` — `## Как это работает？` — fullwidth `？` in `##` heading. Fix: ASCII `?`.
- `kimi-claw/memory-loss.md:28` — `**Что сделать：**` — fullwidth `：` in bold label. Fix: ASCII `:`.
- `kimi-claw/conversation-limits.md:18` — `**Как исправить：**` — fullwidth `：` in bold label. Fix: ASCII `:`.

## 4. Broken anchor links

Both break because the target heading was translated, changing its auto-generated kebab anchor, while the link still references the English slug.

- `kimi-code/cli-ides.md:102` — `[Предварительные требования](#prerequisites)` — heading is `## Предварительные требования` (anchor would be `#предварительные-требования`), so `#prerequisites` has no match. **[source]** (English link slug inherited). Fix: point to the actual translated-heading anchor (or keep heading English).
- `slides/stuck.md:51` — `[инструкции по сообщениям об ошибках](#bug-feedback-guidelines)` — heading is `## Инструкция по сообщениям об ошибках`, so `#bug-feedback-guidelines` has no match. **[source]**. Fix: update anchor to the translated heading's slug.

## 5. Bilingual annotations `English (中文)`

None. The `Word (перевод)` patterns present (e.g. `FAQ (Частые вопросы)`, `Thinking (ход рассуждений)`, `Clarification (Уточнение намерения)`) are intentional glosses of product terms and are appropriate.

## 6. Register consistency (formal "вы")

No reader-facing informal forms. Body text, headings, SeoMeta and preview_content are consistently formal ("вы/ваш", "Дайте", "попросите его", "считайте, что вы"). All informal "ты/твой/тебя" occurrences are inside example prompts and therefore correctly ignored:

- `getting-started/memory-space.md:89` — `«Что ты сейчас помнишь обо мне?»` — quoted example prompt (ignore).
- `getting-started/memory-tips.md:96-114` (prompt table), `:118-119` (quoted examples) — example prompt content the user types to Kimi (ignore).
- `kimi-claw/usage-tips.md:24,30,32,47,49` — quoted example prompts inside table/Callout (ignore).

## 7. Reversed semantics (deep-research/overview.md "top 3.2%")

Correct — no defect.
- `deep-research/overview.md:28` — `...находит 206 URL и отбирает лучшие 3,2% материалов по качеству` — "отбирает лучшие 3,2%" correctly means *selects/keeps the best 3.2%*, matching EN "filters to top 3.2% highest-quality content".

## 8. Naturalness / consistency

Skimmed ~10 articles (getting-started/overview, agent/overview, deep-research/wrong-direction, kimi-claw/conversation-limits, kimi-claw/usage-tips, getting-started/memory-tips, deep-research/overview, getting-started/search, membership/overview, kimi-code/vscode-getting-started). Prose is fluent and idiomatic — no machine-translation artifacts in body text.

- SeoMeta brand-name inconsistency — 24 files render Help Center as **"Центр помощи Kimi"** while 64 use **"Справочный центр Kimi"**. Glossary (`glossary/terms.yaml`) does not pin a Russian form, so both are valid translations, but the locale should pick one. Affected (Центр помощи) files include: `kimi-claw/conversation-limits.md:10`, `kimi-code/cli-customization.md`, `kimi-business/faq.md`, `agent/features-and-limits.md`, `others/account-ban.md`, `membership/payment-issues.md`, etc. (24 total). Suggest: normalize all to the majority "Справочный центр Kimi".
- `deep-research/wrong-direction.md:29,30,33` — `Clarification (Уточнение намерения)` repeated 3× within a few lines. Acceptable, but slightly heavy; could gloss once then use the Russian term. Minor.
