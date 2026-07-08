# fr-FR Naturalness / MT-trace review

Locale: `fr-FR` (machine-translated from `en-US/`, same paths)
Scope: NATURALNESS and machine-translation traces only. Terminology, fullwidth punctuation, links and register (vous) are handled elsewhere and are NOT re-reported here.

## Overall fluency verdict: 4.5 / 5

The fr-FR localization reads like professionally written French, not machine output. Word order is idiomatic, register is consistent (vous), collocations are natural ("propulsé par", "faire appel à", "au fil de", "en toute sécurité", "de bout en bout", "à titre indicatif"), and English idioms are re-expressed rather than calqued (e.g. "The story behind" → "L'histoire derrière le projet"; "out of the box" → "disponibles d'emblée / prêt à l'emploi"; "seamlessly" → "sans accroc"). Very few genuine MT traces survive. The residual issues are a small number of grammatical-agreement slips and a couple of slightly stiff/literal renderings, none of which change meaning except one agreement error that makes a sentence briefly ungrammatical.

## Counts by severity

- High: 0
- Medium: 3
- Low: 6

The single most recurring pattern is minor **noun–determiner/adjective agreement errors clustering around the fixed term "crédits"** — the translator kept "crédits" (plural masculine) while surrounding words were left singular, producing "un crédits", "son crédits". This is the only systematic defect and it is low-frequency.

---

## Medium

- `fr-FR/kimi-api/api-troubleshooting.md:27` — "Contactez l'équipe commerciale si vous avez besoin d'un crédits plus élevé."
  - Why unnatural: outright grammatical error — singular determiner "un" with plural "crédits", and "crédit élevé" is the wrong collocation. en-US reads "if you need a higher quota."
  - Rewrite: "Contactez l'équipe commerciale si vous avez besoin d'un quota plus élevé." (or "de limites plus élevées").

- `fr-FR/kimi-business/kimi-business.md:59` — "Membre | Profiter des avantages de l'entreprise, consulter son crédits personnel"
  - Why unnatural: "son crédits personnel" — singular masculine determiner + adjective on plural "crédits"; ungrammatical.
  - Rewrite: "…consulter ses crédits personnels."

- `fr-FR/kimi-claw/kimi-claw-android-guide.md:111` — "Journal OpenClaw — Journal d'origine du fonctionnement d'OpenClaw"
  - Why unnatural: "Journal d'origine" is a literal rendering of "raw/original log"; in French this reads as "the original journal" rather than "raw logs". Awkward and slightly meaning-shifting.
  - Rewrite: "Journal OpenClaw — Journaux bruts de fonctionnement d'OpenClaw" (or "…d'exécution").

## Low

- `fr-FR/kimi-claw/kimi-claw-android-guide.md:160-161` — "Service d'accessibilité : surveiller les autorisations… / Autorisation d'exécution en arrière-plan : surveiller l'autorisation…"
  - Why: "surveiller" (to monitor/keep watch) is a slightly off calque of "monitor" here where the UI item lets you *check/manage* a permission. Repeated twice.
  - Rewrite: "Vérifier / gérer les autorisations…".

- `fr-FR/kimi-api/api-troubleshooting.md:44` — "son contenu est analysé en tokens et facturé comme tokens d'entrée."
  - Why: "analysé en tokens" is a literal echo of "parsed/counted into tokens"; French would say the content is *decomposed/converted* into tokens or its tokens are *counted*.
  - Rewrite: "son contenu est décompté en tokens et facturé comme tokens d'entrée."

- `fr-FR/getting-started/agentic-chat.md:44` — "une architecture nativement multimodale (et non un OCR rapporté)"
  - Why: "OCR rapporté" is a literal calque of "bolted-on / retrofitted OCR"; "rapporté" reads oddly in this tech context.
  - Rewrite: "(et non un OCR ajouté a posteriori)" or "(et non un OCR greffé)".

- `fr-FR/deep-research/overview.md:113` — "vous serez averti une fois terminée"
  - Why: dangling agreement — "terminée" has no visible feminine antecedent in the clause ("la tâche" is implied but distant); reads slightly incomplete.
  - Rewrite: "vous serez averti une fois la tâche terminée." (the parallel line at stuck.md:29 already does this correctly).

- `fr-FR/kimi-webbridge/kimi-webbridge.md:108` and `FAQ.md:100` — "Compatible avec Claude Code, Codex, Cursor, Kimi Code, Hermers Claw…"
  - Why: "Hermers Claw" reads as a typo/garble carried from source; not natural French, jars the reader. (Flagged as fluency artifact, not terminology.)
  - Rewrite: verify intended product name ("Hermit Claw"?) and correct.

- `fr-FR/kimi-webbridge/FAQ.md:57` — "la commande d'installation peut s'exécuter dans un environnement Linux"
  - Why: "peut s'exécuter" (is able to run) mistranslates the source intent (the Windows fix requires running it *in* a Linux-like/PowerShell env); as written it reads as a vague possibility and is slightly confusing.
  - Rewrite: reformulate to state the command must be run in the appropriate shell, e.g. "exécutez la commande d'installation dans un environnement compatible (PowerShell)."

- `fr-FR/agent/features-and-limits.md:28` — "Pour les tâches dont la durée est susceptible d'être longue"
  - Why: heavy, wordy relative clause ("whose duration is likely to be long") — natural French compresses this.
  - Rewrite: "Pour les tâches potentiellement longues" or "Pour les tâches susceptibles de durer longtemps".

---

## Articles read (18, all 13 categories)

1. deep-research/overview.md
2. deep-research/use-cases.md
3. deep-research/stuck.md
4. getting-started/prompt basics.md
5. getting-started/search.md
6. getting-started/agentic-chat.md
7. getting-started/memory-tips.md
8. kimi-claw/kimi-claw-android-guide.md (longest guide, 545 lines)
9. kimi-claw/concepts.md
10. kimi-code/faq.md
11. kimi-code/cli-getting-started.md (partial, longest code guide)
12. websites/overview.md
13. agent/swarm.md
14. agent/features-and-limits.md
15. kimi-api/api-troubleshooting.md
16. membership/overview.md
17. membership/update-rules.md
18. docs-and-sheets/overview.md
19. slides/stuck.md
20. kimi-business/kimi-business.md
21. kimi-business/faq.md
22. kimi-webbridge/kimi-webbridge.md
23. kimi-webbridge/FAQ.md
24. others/chat-issues.md

(en-US counterparts spot-checked at: agent/swarm.md, kimi-api/api-troubleshooting.md)
