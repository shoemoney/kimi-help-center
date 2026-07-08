# Localization Review — `fr-FR` (French)

Source: machine-translated from `en-US/` (identical paths). 90 files reviewed.

## Counts summary

| # | Category | Defects | Notes |
|---|----------|--------:|-------|
| 1 | Leftover Chinese/CJK | 0 | 3 CJK matches all in asset paths / SeoMeta `截图30` — excluded/[source] |
| 2 | Untranslated words mid-sentence | ~25 | Dominated by English **"credits"** (no accent) instead of "crédits" (~22) + `Settings` UI labels (likely intentional) |
| 3 | Fullwidth / CJK punctuation | 10 | 8× fullwidth `？` in `##` headings, 1× `｜` in SeoMeta title, 1× `（URL）` breaking a link — all [source] but still defects |
| 4 | Broken anchor links | 2 | `#prerequisites` and `#bug-feedback-guidelines` broke when headings were translated |
| 5 | Bilingual annotations `English (中文)` | 0 | none found |
| 6 | Register (tu vs vous) | 0 | All "tu/ton/tes/toi/ta" hits are either the noun "ton" (=tone) or inside example prompts in « » — no reader-facing informal register |
| 7 | Reversed semantics (top 3.2%) | 0 | `deep-research/overview.md:28` reads correctly ("ne retient que les 3,2 % de contenus de la plus haute qualité") |
| 8 | Naturalness / grammar | ~20 | Systematic "le crédits" singular-agreement error + a few garbled calques |

**Verdict:** The translation is broadly fluent and the register is consistently formal, but it has one pervasive, brand-critical defect: **"crédit(s)" handling is broken across the corpus** — the English word "credits" is left untranslated in ~22 places, and where translated it is repeatedly treated as singular ("le crédits est déduit") in ~20 more. Combined with one broken translated link slug (`/agent/crédits-and-billing`) and two broken anchors, the credits/membership articles need a focused fix pass. Punctuation/CJK issues are all inherited from the English source.

---

## 1. Leftover Chinese / CJK characters

No body-text defects. All matches are excluded:
- `agent/use-skills-in-agent-en.md:30` — `src="./images/skills/加号-en.png"` — asset path, excluded.
- `kimi-webbridge/kimi-webbridge.md:23` — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, excluded.
- `kimi-claw/concepts.md:11` — `description="Image: 截图30"` — [source], known source-inherited SeoMeta.

## 2. Untranslated words mid-sentence

English **"credits"** (missing accent — should be French "crédits"). The file mixes both spellings:
- `kimi-code/benefits.md:24,26,28,30,32,34` — "les credits bonus", "Renouvellement des credits", "Les credits se renouvellent"… — use "crédits".
- `membership/overview.md:12,33,36,42,43,52,53` — "le système de credit", "Les credits mensuels", "plafond de credits", "Règles des credits"… — use "crédits".
- `membership/pricing.md:32,43,44,45` — "Les credits mensuels", "Répartition des credits", "deux réserves de credits" — use "crédits".
- `membership/upgrade-downgrade.md:24,25` — "dotation en credit", "Les credits déjà consommés" — use "crédits".
- `deep-research/overview.md:114` — "Remboursement des credits" — use "crédits".
- `deep-research/wrong-direction.md:20` — "les credits liés à cette tâche" — use "crédits".
- `slides/stuck.md:54` — "nous vous dédommagerons avec les credits correspondants" — use "crédits".

English UI labels left in English (match en-US; likely intentional literal UI strings — verify against actual product UI; [source] if UI is English):
- `kimi-code/third-party-agents.md:68` — "accédez à la page **Settings**" — [source] — if the Roo Code UI is localized, use "Paramètres".
- `kimi-claw/concepts.md:35` — "via **Settings → Terminal**" — [source] — same caveat.

## 3. Fullwidth / CJK punctuation

Fullwidth question mark `？` in headings (French uses a space + ASCII `?`; the space is present but the mark is fullwidth) — all [source] (en-US headings also use `？`):
- `kimi-api/business-cooperation.md:21` — "## Comment contacter l'équipe commerciale ？" — replace `？` with `?` — [source]
- `kimi-api/rate-limits.md:22` — "## Comment vérifier vos limites actuelles ？" — `?` — [source]
- `deep-research/stuck.md:20` — "## Que pouvez-vous faire ？" — `?` — [source]
- `deep-research/quota-deducted.md:23` — "## Comment consulter les crédits restants ？" — `?` — [source]
- `others/account-ban.md:29` — "## Comment faire un recours ？" — `?` — [source]
- `agent/swarm.md:40` — "## Comment l'utiliser ？" — `?` — [source]
- `agent/overview.md:41` — "## Comment ça marche ？" — `?` — [source]
- `websites/overview.md:35` — "## Comment utiliser Kimi Websites ？" — `?` — [source]

Other fullwidth punctuation:
- `getting-started/search.md:10` — SeoMeta `title="…réponses｜Centre d'aide Kimi"` — fullwidth `｜` — replace with ASCII `|` (with spaces: ` | `) — [source] (en-US title also uses `｜`).
- `deep-research/use-cases.md:63` — `[Voir le résultat]（https://…replay/…）` — fullwidth `（ ）` break the markdown link (URL not clickable) — replace with ASCII `( )` — [source] (en-US line 63 has the identical defect).

## 4. Broken anchor links

- `kimi-code/cli-ides.md:102` — `[Prérequis](#prerequisites)` — heading was translated to "## Prérequis" (anchor `#prérequis`), but link still points to `#prerequisites`. Source matched (`Prerequisites`/`#prerequisites`); broke in translation. Fix: `](#prérequis)`.
- `slides/stuck.md:51` — `[Consignes de signalement de bugs](#bug-feedback-guidelines)` — heading is now "## Consignes de signalement de bugs" (anchor `#consignes-de-signalement-de-bugs`); link still points to English anchor. Fix: `](#consignes-de-signalement-de-bugs)`.

## 5. Bilingual annotations `English (中文)`

None found.

## 6. Register consistency (vous vs tu)

No defects. `grep` for `tu|ton|tes|toi|ta` flagged 6 files, but every reader-facing hit is the noun "ton"/"Ton" (= tone: `what-are-skills-en.md:51`, `prompt basics.md:26,40,78`, `group-claw.md:175`). All true second-person "tu/te/toi/tes" forms occur only inside example prompts in « » quotes (`memory-space.md:62,89`; `memory-tips.md:112,113,114,118,119`; `usage-tips.md:30,49`; `prompt basics.md:102`) — these are text the user sends to Kimi, correctly excluded. Body/headings/SeoMeta are consistently "vous".

## 7. Reversed semantics — deep-research "top 3.2%"

No defect. `deep-research/overview.md:28` reads "identifie 206 URL et ne retient que les 3,2 % de contenus de la plus haute qualité" — correctly means SELECT/keep the best 3.2%.

## 8. Naturalness / grammar

**Systematic agreement error — "crédits" treated as singular** ("le/du/votre crédits", "est déduit", "est épuisé"). "crédits" is plural; article, verb and adjectives must agree:
- `agent/quota-and-billing.md:11,17` — "le crédits étant déduit selon la consommation" → "les crédits étant déduits".
- `agent/quota-and-billing.md:23,24,27,30,31,33,38,47,50,51,52` — "le crédits est réinitialisé", "votre crédits est épuisé", "du crédits", "l'utilisation du crédits", "Le crédits est déduit"… → plural agreement throughout (~13 occurrences in this file).
- `agent/features-and-limits.md:57,94` — "sur le crédits selon le niveau d'abonnement", "Comment le crédits de l'Agent est-il calculé ?" → "sur les crédits…", "Comment les crédits… sont-ils calculés ?".
- `kimi-code/faq.md:79,91` — "inclut le crédits", "votre crédits actuel", "votre crédits est épuisé" → "les crédits", "vos crédits actuels", "vos crédits sont épuisés".
- `kimi-business/faq.md:26` — "l'intégralité du crédits de la période" → "de l'intégralité des crédits".
- `kimi-business/kimi-business.md:84,109` — "le crédits de l'entreprise", "crédits complet", "l'intégralité du crédits" → plural agreement.

**Broken/garbled translations:**
- `agent/features-and-limits.md:57` — link `](/agent/crédits-and-billing)` — the URL slug was translated (accented `crédits`), breaking the internal link; source is `/agent/credits-and-billing`. Fix: revert slug to `/agent/credits-and-billing`. (Critical — broken navigation.)
- `slides/overview.md:43` — "Un crédits mensuel de crédits gratuits vous permet…" — doubled "crédits" calque from awkward source ("A monthly free credits lets you…"). Fix: "Un quota mensuel de crédits gratuits vous permet…". (Source itself is awkward; [source]-adjacent.)
- `deep-research/overview.md:21` — "## Comment fonctionne Kimi-Research ?" — product name truncated; should be "Kimi-Researcher" (used correctly at lines 18, 23, 120). [source] — en-US:20 has the same truncation "How Kimi-Research works?". Fix: "Kimi-Researcher".

**Minor / stylistic (lower confidence):**
- `membership/overview.md:17,36` — "deux pools de credits", "plafond de credits" — "pool" is English and `quota-and-billing.md` uses "réserve de crédits"; align to "deux réserves de crédits".
- `slides/overview.md:19` — "pour un résultat qui colle au plus près de vos besoins" — over-literal; "pour un résultat au plus près de vos besoins" / "parfaitement adapté à vos besoins".
- `kimi-claw/overview.md:28` — "en créer une" referring to OpenClaw, vs masculine elsewhere — gender inconsistency; "en créer un".
- `agent/overview.md:73` — ColumnsContent `title: "crédits & facturation"` lowercased vs capitalized siblings — "Crédits & facturation".

Aside from the credits/grammar cluster, skimmed articles (`getting-started/overview.md`, `getting-started/search.md`, `prompt basics.md`, `kimi-code/cli-getting-started.md`, `agent/overview.md`) read clean and idiomatic; remaining English tokens there are intentional product/UI/brand names (Web Search, Deep Research, AGENTS.md, Base URL, etc.).
