# ru-RU Naturalness / MT-Trace Review

Scope: Russian-language fluency and machine-translation traces only. Terminology (кредит),
fullwidth punctuation, links, and register (вы) are handled elsewhere and are **not** re-reported here.
Source of comparison: `en-US/` at the same paths.

## Overall fluency verdict: **4.5 / 5**

The ru-RU localization reads as genuinely native, professional Russian across every category.
Sentence structure is idiomatic, aspect/case usage is correct, participial chains are broken up
sensibly, and the register is consistent. This is well above typical raw-MT quality — it reads as
post-edited human translation. Defects are few, minor, and localized. There are **no**
meaning-changing mistranslations attributable to the Russian rendering (the one odd Windows/Linux
sentence in kimi-webbridge/FAQ.md faithfully mirrors an oddly-worded en-US source, so it is a
source issue, not an MT trace).

## Counts by severity

| Severity | Count |
|---|---|
| High (meaning-changing / grammatical error) | 2 |
| Medium (anglicism / calque, unnatural) | 4 |
| Low (minor stylistic) | 2 |
| **Total** | **8** |

---

## High severity

Both High findings are the **same recurring pattern**: a glossary term ("кредит/кредиты") was
substituted into a sentence whose original head noun was feminine-singular ("quota" / "credit"),
leaving broken adjective–noun agreement. The result is ungrammatical Russian.

- **ru-RU/kimi-api/api-troubleshooting.md:27** — "Если вам нужна **более высокая кредиты**, обратитесь в отдел продаж."
  - Why unnatural: "высокая" (fem. sg.) does not agree with "кредиты" (masc. pl.); ungrammatical. en-US = "if you need a higher **quota**". The feminine adjective is a leftover from a "квота"-shaped sentence.
  - Natural rewrite: "Если вам нужен более высокий лимит, обратитесь в отдел продаж." (or "…более высокая квота…")

- **ru-RU/kimi-code/faq.md:79** — "подписка Kimi **с включенной кредиты**" (table cell)
  - Why unnatural: "включенной" (fem. sg. instrumental) does not agree with "кредиты" (masc. pl.); ungrammatical. en-US = "Kimi subscription (**includes credits**)".
  - Natural rewrite: "подписка Kimi (**кредиты включены**)" or "подписка Kimi с включёнными кредитами".

---

## Medium severity

- **ru-RU/agent/features-and-limits.md:38** — "**Многораундовые** диалоги и корректировка задач"
  - Why unnatural: "раунд" is an anglicism ("round") for a conversational turn; not idiomatic for dialogue. The same corpus renders the identical concept naturally as "многоходовые диалоги" (kimi-api/overview.md:21), so this is also an internal inconsistency.
  - Natural rewrite: "**Многоходовые** диалоги…" (or "многошаговые диалоги").

- **ru-RU/agent/features-and-limits.md:39** — "После нескольких **раундов диалога** и правок Agent может «забыть»…"
  - Why unnatural: same "раунд" anglicism. en-US = "over multiple rounds of dialogue".
  - Natural rewrite: "После нескольких **обменов репликами** (or "ходов диалога") и правок Agent может «забыть»…"

- **ru-RU/kimi-code/benefits.md:46** — "Для **лучшего опыта** и полного охвата возможностей используйте…"
  - Why unnatural: calque of "for the best experience"; "опыт" here is the UX-sense anglicism, which reads oddly in Russian in this context.
  - Natural rewrite: "Чтобы всё работало корректно и были доступны все возможности, используйте…" (or "Для наилучшего результата…").

- **ru-RU/kimi-webbridge/FAQ.md:94** — "Для **лучшего опыта** рекомендуем использовать последнюю версию."
  - Why unnatural: same "for the best experience" calque.
  - Natural rewrite: "Для наилучшей работы рекомендуем использовать последнюю версию." (or "Рекомендуем использовать последнюю версию для стабильной работы.")

---

## Low severity

- **ru-RU/kimi-code/cli-getting-started.md:33** — "Для **наилучшего визуального опыта** запускайте его в терминале…"
  - Why: borderline "visual experience" calque; acceptable but slightly translationese in a Russian technical doc.
  - Natural rewrite: "Чтобы интерфейс отображался наилучшим образом, запускайте его в терминале…"

- **ru-RU/slides/overview.md:17** & **docs-and-sheets/overview.md:27** — "визуальный **сторителлинг**" / "визуальное повествование"
  - Why: "сторителлинг" is a trendy anglicism; docs-and-sheets uses the transliteration, slides uses the (better) native "визуальное повествование" — an internal inconsistency more than an error.
  - Natural rewrite: standardize on "визуальное повествование" / "визуальная подача материала" in both.

---

## Notes / non-findings

- **kimi-webbridge/FAQ.md:57** ("…поддерживает Windows, а команду установки можно выполнить в среде Linux" followed by a PowerShell command) looks wrong, but it is a faithful translation of an equally odd en-US source ("…can be run in a Linux environment"). Not an MT trace of the Russian rendering — flag upstream in en-US instead.
- "вайб-кодинг" (websites/overview.md:18) is an intentional trendy transliteration of "vibe coding"; left as-is since it is a deliberate marketing term, not a defect.

---

## Articles read (21, all 14 categories)

1. getting-started/overview.md
2. getting-started/search.md
3. getting-started/agentic-chat.md
4. getting-started/prompt basics.md
5. deep-research/overview.md
6. deep-research/use-cases.md
7. deep-research/stuck.md
8. agent/swarm.md
9. agent/features-and-limits.md
10. agent/use-skills-in-agent-en.md
11. kimi-api/overview.md
12. kimi-api/api-troubleshooting.md
13. kimi-code/cli-getting-started.md
14. kimi-code/faq.md
15. docs-and-sheets/overview.md
16. slides/overview.md
17. websites/overview.md
18. kimi-claw/kimi-claw-android-guide.md
19. kimi-claw/troubleshooting.md
20. kimi-webbridge/FAQ.md
21. others/chat-issues.md
22. others/account-ban.md
23. membership/overview.md
24. membership/upgrade-downgrade.md
25. kimi-business/faq.md

(Plus targeted grep scans across the full ru-RU tree for agreement, anglicism, and calque patterns.)
