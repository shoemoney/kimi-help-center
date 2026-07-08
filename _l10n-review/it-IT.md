# Localization Audit — `it-IT` (Italian)

Source: machine-translated from `en-US/`. Scope: all 90 `it-IT/**/*.md` files.

## Counts

| Category | Defects (it-IT-introduced) | Source-inherited |
| --- | --- | --- |
| 1. Leftover CJK | 0 | 1 (`kimi-claw/concepts.md:11`, known) |
| 2. Untranslated words mid-sentence (reader-facing) | 0 | 0 |
| 3. Fullwidth/CJK punctuation | 0 | 16 (`？` headings, `｜` title, `（）` link) |
| 4. Broken anchor links | 2 | 0 |
| 5. Bilingual annotations `English (中文)` | 0 | 0 |
| 6. Register inconsistency (Lei vs tu) | 0 | 0 |
| 7. "top 3.2%" reversed semantics | 0 (confirmed correct) | — |
| 8. Naturalness / glossary consistency | ~6 files (`credit`/`crediti` mixing) + 2 grammar | partly source |

## Verdict

The Italian translation is high quality and reads naturally; register is consistently informal (tu/tuo/puoi) with no stray formal "Lei", and CJK/punctuation/bilingual issues are all source-inherited rather than translation defects. The two genuinely actionable, translation-introduced problems are: **2 broken anchor links** (English slugs left pointing at now-Italian headings) and **inconsistent rendering of the glossary term `credit`** (mixed `credit`/`crediti` against the glossary's `keep_original` rule, including two outright grammar errors).

---

## 1. Leftover Chinese / CJK

No translation defects. Only matches:
- `it-IT/agent/use-skills-in-agent-en.md:30` — `src="./images/skills/加号-en.png"` — asset path, excluded.
- `it-IT/kimi-webbridge/kimi-webbridge.md:23` — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, excluded.
- `it-IT/kimi-claw/concepts.md:11` — `description="Image: 截图30"` — SeoMeta, [source], known/excluded.

## 2. Untranslated words mid-sentence

No reader-facing defects. All English text found is inside `content:` example prompts in CodePreview blocks (e.g. `docs-and-sheets/sheets-cases.md:36`, `docs-and-sheets/docs-cases.md:31`, `getting-started/prompt basics.md:56,69,149`), which match `en-US` and are deliberately kept in English as example data — not flaggable.

## 3. Fullwidth / CJK punctuation

All instances are present identically in `en-US` — **[source]**, no it-IT-introduced defect. Listed for completeness:
- `it-IT/deep-research/use-cases.md:63` — `[Visualizza il risultato]（https://…）` — fullwidth `（ ）` break the markdown link (won't render as a link). [source] — but high-impact; worth fixing to ASCII `( )` in both locales.
- `it-IT/getting-started/search.md:10` — SeoMeta `title="…｜Centro assistenza Kimi"` — fullwidth `｜`. [source].
- `？` in `##`/`###` headings (all [source]): `docs-and-sheets/overview.md:42,84`, `kimi-api/business-cooperation.md:21`, `kimi-api/rate-limits.md:22`, `deep-research/overview.md:76`, `deep-research/stuck.md:20`, `deep-research/wrong-direction.md:22`, `deep-research/quota-deducted.md:23`, `agent/overview.md:41`, `agent/quota-and-billing.md:38`, `getting-started/presets.md:24`, `kimi-claw/tailscale-issue.md:18,28`, `websites/overview.md:35`. Suggestion: replace fullwidth `？` with ASCII `?` (apply in `en-US` too).

## 4. Broken anchor links

Both introduced by translation: the heading text was translated to Italian but the in-page anchor still points at the original English slug, so it no longer resolves.
- `it-IT/kimi-code/cli-ides.md:102` — `[Prerequisiti](#prerequisites)` — heading is now `## Prerequisiti` (line 21), so slug is `#prerequisiti`. Fix: change link target to `#prerequisiti`.
- `it-IT/slides/stuck.md:51` — `[Linee guida per la segnalazione dei bug](#bug-feedback-guidelines)` — heading is now `## Linee guida per la segnalazione dei bug` (line 81), slug `#linee-guida-per-la-segnalazione-dei-bug`. Fix: update target accordingly.

## 5. Bilingual annotations `English (中文)`

None found.

## 6. Register consistency (Lei vs tu)

Consistent. Reader-facing body, headings, SeoMeta, and preview_content use informal address throughout (34 files with `puoi`, 71 with `tuo/tua/...`, 128 informal imperatives like `clicca`/`vai`/`apri`). Zero formal `Suo/Sua` and no reader-facing `Lei`. All `può`/`suo` hits checked (e.g. `kimi-api/api-troubleshooting.md:44`, `agent/features-and-limits.md:32`, `getting-started/agentic-chat.md:30`, `kimi-webbridge/FAQ.md:86`, `websites/overview.md:18`, `websites/why-not-working.md:26`) are "it can"/"its" with a non-reader subject (Agent/Kimi/file), not formal address. No defect.

## 7. "top 3.2%" semantics

- `it-IT/deep-research/overview.md:28` — `… individua 206 URL e seleziona il 3,2% dei contenuti di qualità più elevata` — **confirmed correct**: "selects the 3.2% highest-quality content" = keeps the best 3.2%. Reads correctly; no fix needed.

## 8. Naturalness / glossary consistency

Prose quality is strong (skimmed `getting-started/overview.md`, `membership/overview.md`, `kimi-claw/overview.md`, `deep-research/overview.md`, `agent/overview.md`, `slides/overview.md` — all fluent and idiomatic). Main issue is the glossary term **`credit`** (glossary id M2-002, `translation_strategy: keep_original_with_note`, "absolutely untranslatable") being inconsistently Italianized to `crediti`, frequently within a single sentence. Recommend standardizing on invariant `credit` per glossary.

Mixed `credit`/`crediti` files (representative lines):
- `it-IT/membership/overview.md:17` — `due pool di credit: … un pool di crediti separato … un unico pool di crediti` — pick one form (glossary → `credit`). Same mixing at `:41`; table label `:28` uses `crediti Kimi Code` while line `:17` uses `credit`.
- `it-IT/membership/pricing.md:32,45` — `I crediti mensili …` / `due pool di credit … un pool di crediti separato … pool di credit … crediti …` — mixed within `:45`.
- `it-IT/membership/update-rules.md:17,21,32` — `credit` and `crediti` alternate across the paragraph (e.g. `:17` "un unico pool di credit, e i credit" vs `:21` "pool di crediti").
- `it-IT/deep-research/quota-deducted.md:20` — `i credit vengono detratti … un pool di crediti separato`.
- `it-IT/kimi-code/benefits.md:23` — `consuma credit dal tuo pool di crediti esclusivo … quantità di credit differenti`.

Grammar errors (fix regardless of credit-form decision):
- `it-IT/slides/overview.md:43` — `Un crediti di credit gratuiti mensile ti permette…` — broken/redundant: "A credits of credit free monthly". Source `en-US/slides/overview.md:43` ("A monthly free credits…") is itself ungrammatical [source], but the IT is worse. Suggestion: `Un credit gratuito mensile ti permette di provare l'intero set di funzionalità senza alcun pagamento.`
- `it-IT/membership/update-rules.md:21` — `assegnare crediti separate a ciascuna funzionalità` — gender disagreement: `crediti` is masculine → `separate` must be `separati` (or, per glossary, `credit separati`).
