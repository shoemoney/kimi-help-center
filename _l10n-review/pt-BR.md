# Localization Review — pt-BR (Brazilian Portuguese)

Source: machine-translated from `en-US/` (identical paths). Files reviewed: 90 `pt-BR/**/*.md`.

## Counts

| Category | Count | Severity |
|---|---|---|
| 1. Leftover Chinese/CJK | 0 real (3 in asset paths / known source) | none |
| 2. Untranslated words mid-sentence | 1 (+ many ignorable example-prompt cases) | low |
| 3. Fullwidth / CJK punctuation | 14 | medium |
| 4. Broken anchor links | 2 | medium |
| 5. Bilingual annotations `English (中文)` | 0 | none |
| 6. Register (tu/teu/tua) | 0 | none |
| 7. Reversed semantics (top 3.2%) | 0 (confirmed correct) | none |
| 8. Naturalness / grammar | ~26 ("a/da/sua créditos" gender error) + 1 garbled line | HIGH |

## Verdict

Translation register and overall fluency are good (consistent "você", natural phrasing). The localization is dominated by **one systematic grammatical defect**: `créditos` (masculine in Portuguese) is treated as feminine throughout (`a créditos`, `da créditos`, `sua créditos`), ~26 instances across 9 files — likely the MT engine confusing it with "cota/quota". Secondary issues: fullwidth `？`/`（）`/`｜`/`：` carried over from CJK source, a corrupted link slug where a path got translated (`/agent/créditos-and-billing`), two stale anchor links, and one untranslated SeoMeta description. None block comprehension but the "a créditos" error is pervasive and reader-facing.

---

## 1. Leftover Chinese/CJK

No real defects. All matches are inside asset paths or known source-inherited:
- pt-BR/agent/use-skills-in-agent-en.md:30 — `src="./images/skills/加号-en.png"` — asset filename, not user-facing text. [source]
- pt-BR/kimi-webbridge/kimi-webbridge.md:23 — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset filename. [source]
- pt-BR/kimi-claw/concepts.md:11 — `description="Image: 截图30"` — known source-inherited SeoMeta. [source]

## 2. Untranslated words mid-sentence

- pt-BR/agent/features-and-limits.md:13 — SeoMeta `description="Learn about Kimi Agent's capabilities, usage tips, limitations..."` left fully in English — translate to PT (source is English too, but other files' descriptions are translated). [source]
- (Ignored per checklist) English text inside `content:` example prompts / CodePreview in cli-goals.md, cli-sessions.md, cli-getting-started.md, docs-cases.md, sheets-cases.md, getting-started/prompt basics.md — these are example data and correctly left untranslated.
- (Acceptable) faq.md:68 quotes the UI string `"No models available for the selected platform"` then glosses it in PT — fine.

## 3. Fullwidth / CJK punctuation

Fullwidth `？` in `##` headings (should be ASCII `?`):
- pt-BR/kimi-api/business-cooperation.md:21 — `## Como entrar em contato com a equipe de vendas？` → `...vendas?`
- pt-BR/kimi-api/rate-limits.md:22 — `## Como verificar os limites atuais？` → `...atuais?`
- pt-BR/deep-research/overview.md:76 — `## Como usar o Deep Research？` → `...Research?`
- pt-BR/deep-research/stuck.md:20 — `## O que você pode fazer？` → `...fazer?`
- pt-BR/deep-research/quota-deducted.md:23 — `## Como verificar os créditos restantes？` → `...restantes?`
- pt-BR/agent/quota-and-billing.md:38 — `## Como verificar o uso da créditos？` → `...dos créditos?` (also fixes gender, see §8)
- pt-BR/agent/swarm.md:40 — `## Como usar？` → `...usar?`
- pt-BR/getting-started/presets.md:24 — `## Como adicionar uma predefinição？` → `...predefinição?`
- pt-BR/kimi-claw/slow-no-response.md:28 — `## Como resolver？` → `...resolver?`
- pt-BR/websites/overview.md:35 — `## Como usar o Kimi Websites？` → `...Websites?`
- pt-BR/membership/invoice.md:18 — `## Como obter uma fatura？` → `...fatura?`

Fullwidth `（）` breaking a markdown link:
- pt-BR/deep-research/use-cases.md:63 — `[Ver resultado]（https://www.kimi.com/replay/...）` — fullwidth parens prevent the link from rendering. Replace with ASCII `(...)`.

Fullwidth `｜` in SeoMeta title:
- pt-BR/getting-started/search.md:10 — `title="Busca agentiva para guias e respostas｜Central de Ajuda da Kimi"` — replace `｜` with ` - ` (or ASCII `|`) to match every other title's separator.

Fullwidth `：` in bold label:
- pt-BR/kimi-claw/conversation-limits.md:18 — `**Como resolver：**` → `**Como resolver:**`

## 4. Broken anchor links

Both are stale because headings were translated but the in-text anchor IDs were not updated (and the slugified PT headings differ from the English anchor):
- pt-BR/kimi-code/cli-ides.md:102 — `[Pré-requisitos](#prerequisites)` — heading is now `## Pré-requisitos` (slug `pré-requisitos`); `#prerequisites` no longer matches. Update anchor to the localized heading slug. [source] (same anchor used in en-US, but there the heading is "Prerequisites" so it works there)
- pt-BR/slides/stuck.md:51 — `[Diretrizes de feedback de bugs](#bug-feedback-guidelines)` — heading is now `## Diretrizes de feedback de bugs`; `#bug-feedback-guidelines` no longer matches. Update anchor accordingly. [source]

## 5. Bilingual annotations `English (中文)`

None found.

## 6. Register consistency (você vs tu/teu/tua)

Clean. No reader-facing `tu/teu/tua/ti/contigo` found; "você" used consistently.

## 7. Reversed semantics — deep-research "top 3.2%"

Confirmed CORRECT.
- pt-BR/deep-research/overview.md:28 — `...descobre 206 URLs e seleciona os 3,2% de conteúdo de maior qualidade` — correctly conveys "selects the best 3.2%". No fix needed.

## 8. Naturalness / grammar

### MAJOR: `créditos` gender (masculine) — pervasive feminine agreement error

`crédito(s)` is masculine in Portuguese → must be `o/os créditos`, `do/dos créditos`, `seu/seus créditos`. The MT consistently used feminine forms. ~26 instances:

- pt-BR/kimi-code/faq.md:91 — "verificar sua créditos atual", "Se sua créditos estiver esgotada" → `seus créditos atuais` / `seus créditos estiverem esgotados`.
- pt-BR/kimi-api/rate-limits.md:43 — "solicite uma créditos personalizada" → `solicite um crédito personalizado` (or rephrase to "cota/limite").
- pt-BR/kimi-api/api-troubleshooting.md:27 — "precise de uma créditos maior" → `de um crédito maior` (or "limite maior").
- pt-BR/kimi-business/kimi-business.md:59 — "consultar a créditos pessoal" → `os créditos pessoais`.
- pt-BR/kimi-business/kimi-business.md:84 — "usar a créditos empresarial" → `os créditos empresariais`.
- pt-BR/kimi-business/kimi-business.md:109 — "**créditos integral...** recebem a créditos integral" → `os créditos integrais ... recebem os créditos integrais`.
- pt-BR/kimi-business/faq.md:26 — "recebem a créditos completa" → `recebem os créditos completos`.
- pt-BR/agent/features-and-limits.md:94 — "Como a créditos do Agent é calculada?" → `Como os créditos do Agent são calculados?`
- pt-BR/agent/features-and-limits.md:96 — "Veja sua créditos e uso atuais" → `seus créditos e uso atuais`.
- pt-BR/agent/FAQ-en.md:21 — "a créditos da sua conta foi esgotada" → `os créditos da sua conta foram esgotados`.
- pt-BR/agent/FAQ-en.md:25 — "da créditos da sua assinatura" → `dos créditos da sua assinatura`.
- pt-BR/agent/FAQ-en.md:29 — "a créditos da assinatura é utilizada" → `os créditos da assinatura são utilizados`.
- pt-BR/agent/quota-and-billing.md:11 — (description) "com a créditos deduzida" → `com os créditos deduzidos`.
- pt-BR/agent/quota-and-billing.md:17 — "com a créditos deduzida" → `com os créditos deduzidos`.
- pt-BR/agent/quota-and-billing.md:23 — "a créditos é renovada" → `os créditos são renovados`.
- pt-BR/agent/quota-and-billing.md:24 — "a créditos bônus... é consumida... pela créditos do plano" → `os créditos bônus... são consumidos... pelos créditos do plano`.
- pt-BR/agent/quota-and-billing.md:27 — "cerca de 1–2% da créditos" → `dos créditos`.
- pt-BR/agent/quota-and-billing.md:30 — "## O que acontece quando a créditos acaba?" → `quando os créditos acabam?`
- pt-BR/agent/quota-and-billing.md:31 — "Quando sua créditos se esgota" → `Quando seus créditos se esgotam`.
- pt-BR/agent/quota-and-billing.md:35 — "renovação automática mensal da créditos" → `dos créditos`.
- pt-BR/agent/quota-and-billing.md:38 — "Como verificar o uso da créditos？" → `dos créditos?` (also fix fullwidth ?, see §3).
- pt-BR/agent/quota-and-billing.md:47 — "exibição real da créditos" → `dos créditos`.
- pt-BR/agent/quota-and-billing.md:51 — "A créditos é deduzida" → `Os créditos são deduzidos`.
- pt-BR/agent/quota-and-billing.md:52 — "a créditos correspondente será reembolsada" → `os créditos correspondentes serão reembolsados`.
- pt-BR/membership/pricing.md:45 — "o Kimi Code usa uma créditos separada; ... compartilham uma única créditos... maior" → `um crédito separado ... um único crédito` (or rephrase as "pool de créditos").

### Broken/garbled phrasing

- pt-BR/slides/overview.md:43 — "Uma créditos mensal de créditos gratuitos permite..." — garbled (double "créditos" + gender). Source en-US:43 is itself awkward ("A monthly free credits lets you..."). Suggest: `Um crédito mensal gratuito permite que você experimente...` or `Créditos gratuitos mensais permitem...`. [source — source is also ungrammatical]

### Corrupted link slug (path was machine-translated)

- pt-BR/agent/features-and-limits.md:57 — `consulte [Créditos e cobrança](/agent/créditos-and-billing)` — the URL slug got translated; the real route is `/agent/credits-and-billing`. Broken link → fix slug to `/agent/credits-and-billing`. (Compare en-US:57 `/agent/credits-and-billing`.)

### Minor / source-inherited

- pt-BR/deep-research/overview.md:21 — heading "Como o **Kimi-Research** funciona?" vs body "Kimi-Researcher" — name mismatch, but inherited from en-US:20 ("How Kimi-Research works?"). [source]
- SeoMeta title brand suffix varies ("Central de Ajuda Kimi" / "...da Kimi" / "...do Kimi") across files — cosmetic inconsistency mirroring source template variance; low priority. [source]
