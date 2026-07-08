# ja-JP (Japanese) Localization Review

Source: machine-translated from `en-US/` (identical paths). Reviewed all ~90 `ja-JP/**/*.md` files.

## Counts

| Category | Count |
|---|---|
| 1. Untranslated English / Chinese leftovers | 4 (2 are [source]) |
| 2. Broken markdown links (fullwidth parens) | 1 |
| 3. Broken anchor links | 2 |
| 4. Bilingual annotation leftovers | 0 |
| 5. Keigo / politeness inconsistency | 0 |
| 6. Reversed semantics ("top 3.2%") | 0 (correct) |
| 7. Naturalness / mistranslation | 2 |
| (extra) SeoMeta separator/spacing inconsistency | 2 |
| **Total actionable** | **9** (2 source-inherited) |

## Verdict

Overall a high-quality, fluent Japanese translation: keigo (です・ます) is consistent throughout, no reader-facing plain-form (だ・である), and no simplified-Chinese leftovers in the body. The remaining issues are a small number of concrete, high-impact defects — one broken markdown link and two broken anchor links caused by translating headings without updating the `#anchor` targets — plus a couple of minor mistranslations and metadata inconsistencies. Brand/product names left in English (Deep Research, Kimi Slides, Feishu, etc.) match en-US and are correct, not defects.

---

## 1. Untranslated English / Chinese leftovers

- `ja-JP/kimi-claw/concepts.md:11` — SeoMeta `description="画像: 截图30"` — `截图30` is Chinese ("screenshot 30"). **[source]**: en-US/kimi-claw/concepts.md:10 also has `description="Image: 截图30"`, so the placeholder leaked from source. Fix at source; suggest `description="Kimi Claw のコアコンセプトとターミナルの概要"`.
- `ja-JP/kimi-api/rate-limits.md:2,10,14` — `title: "rate limit"` / SeoMeta `title="rate limit - ..."` / heading `# rate limit` left as lowercase English. en-US uses proper "Rate limits". The body also keeps "rate limit" untranslated repeatedly (lines 16, 18). Term retention is defensible, but at minimum the title/heading should not be lowercase English; suggest heading/title "レート制限（rate limit）" or "レート制限" for consistency with the rest of the doc set.
- `ja-JP/kimi-api/balance-and-usage.md:33` — heading `## Token Estimation API` left fully English. **[source-ish]**: it is an API name, but other API headings in the set are translated; suggest "Token 推定 API（Token Estimation API）" or keep as proper-noun API name if intentional.
- `ja-JP/kimi-code/cli-interaction.md:18` — heading `## Thinking mode` English (feature name, acceptable) but casing is inconsistent with body which uses "Thinking Mode" (lines 20, 22, 24). Pick one casing.

(Note: the `agent/*-en.md` and `kimi-webbridge/FAQ.md` filenames carry an `-en` suffix but their CONTENT is fully and correctly translated to Japanese — not an issue.)

## 2. Broken markdown links (fullwidth parens inside link syntax)

- `ja-JP/deep-research/use-cases.md:63` — `[結果を見る]（https://www.kimi.com/replay/19b36b81-...716b）` uses fullwidth `（ ）` as the link-URL delimiters, which breaks the Markdown link (renders as literal text). Fix: use halfwidth parens `[結果を見る](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)`.

## 3. Broken anchor links

- `ja-JP/kimi-code/cli-ides.md:102` — `[前提条件](#prerequisites)` points to `#prerequisites`, but the heading was translated to `## 前提条件` (line 21), whose generated slug is no longer `prerequisites`. Anchor is dead. Fix: update target to the translated heading's slug (e.g. `(#前提条件)`).
- `ja-JP/slides/stuck.md:51` — `[バグフィードバックガイドライン](#bug-feedback-guidelines)` points to `#bug-feedback-guidelines`, but the heading was translated to `## バグフィードバックガイドライン` (line 81). Anchor is dead. Fix: update target to the translated heading slug (e.g. `(#バグフィードバックガイドライン)`).

## 4. Bilingual annotation leftovers

- None problematic. Patterns like `Unauthorized（未認証）` (error-codes.md:25), `Forbidden（残高不足）` (error-codes.md:26), `rate limit（レート制限）` (account-and-auth.md:37), `TTS（テキスト読み上げ）` (model-capabilities.md:39) are legitimate Japanese glosses, not leftovers.

## 5. Keigo / politeness consistency

- No issues found. Reader-facing prose is consistently です・ます. No だ/である copula or imperative plain forms in body text. Plain-form endings detected were all inside CodePreview/`content:` example prompts (ignored per instructions).

## 6. Reversed semantics

- `ja-JP/deep-research/overview.md:28` — "品質が最も高い上位3.2%のコンテンツに絞り込みます" correctly means "filters down to the top 3.2% highest-quality content" (selects/keeps the best). Semantics are CORRECT, not reversed. No action.

## 7. Naturalness / mistranslation

- `ja-JP/deep-research/overview.md:31` — table row label "深度推論" translates en "Iterative reasoning" (overview.md:29 en). "深度推論" reads as "deep reasoning" and duplicates the earlier "深い推論" row (line 28, en "Deep reasoning"), losing the "iterative" meaning. Fix: "反復推論" or "繰り返し推論".
- Minor: `ja-JP/getting-started/search.md:31` heading `## Web Search設定` mixes English term + Japanese with no separator/space; reads slightly machine-like. Acceptable but "Web Search の設定" would be more natural. Low priority.

## Extra — SeoMeta title separator / spacing inconsistency

- `ja-JP/getting-started/search.md:10` — SeoMeta `title="...Agentic Search｜Kimiヘルプセンター"` uses fullwidth pipe `｜` as separator, whereas ~every other file uses `" - Kimi ヘルプセンター"` (hyphen). Inconsistent. Fix: standardize to ` - Kimi ヘルプセンター`.
- Spacing inconsistency across SeoMeta titles: most use `Kimi ヘルプセンター` (with space) but several use `Kimiヘルプセンター` (no space) — e.g. cli-interaction.md:10, deep-research/overview.md:11, search.md:10, docs-and-sheets/sheets-cases.md:10, kimi-business/faq.md, membership/invoice.md, agent/features-and-limits.md:12. Cosmetic; pick one and apply consistently.

## Notes on non-issues (verified, do NOT flag)

- English headings that are product/platform proper nouns and match en-US: `# Deep Research`, `# Kimi Slides`, `# Kimi Websites`, `# Kimi Business`, `# Agentic Search`, `## Kimi Docs`/`## Kimi Sheets`, android-guide `### Kimi/Feishu/WeChat/Telegram`, `#### ClawHub Skills`/`#### OpenClaw Workspace`, `### Web`, `## FAQ`. All intentional.
- No simplified-Chinese-only characters present anywhere in the body (only the source-leaked `截图30` in concepts.md SeoMeta).
