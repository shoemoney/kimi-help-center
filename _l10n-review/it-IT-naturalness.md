# it-IT Localization Naturalness Review

**Locale:** `it-IT` (machine-translated from `en-US/`)
**Scope:** Naturalness / machine-translation traces only. Terminology, fullwidth punctuation, and links are handled elsewhere and are NOT re-reported here.
**Reviewer role:** Native Italian editor.

## Overall fluency verdict: 4 / 5

The Italian is genuinely good. Register is consistent (informal "tu", imperative instructions), collocations are mostly idiomatic, tables and Callouts read naturally, and SeoMeta descriptions are fluent. There is very little robotic phrasing and almost no broken word order. What holds it back from a 5 is a **systematic over-retention of English technical vocabulary** where a natural, well-established Italian term exists, plus a handful of genuine calques/idiom leaks. These are polish issues, not comprehension breakers — a reader would understand everything, but a native occasionally notices "this was translated."

## Counts by severity

| Severity | Count |
|---|---|
| High (meaning-changing / clearly wrong) | 0 |
| Medium (unnatural, native would rephrase) | 8 |
| Low (minor anglicism / stylistic) | 9 |
| **Total** | **17** |

No meaning-changing mistranslations were found in the sample.

---

## Biggest recurring MT pattern

**Untranslated English nouns left inline where standard Italian exists** — especially `concurrency`, `task`, `retry`, `edge`, `workspace`, `Onboarding`. Italian technical writing routinely uses *concorrenza / richieste simultanee*, *attività*, *nuovo tentativo*, *vantaggio*, *area di lavoro*, *procedura iniziale/di avvio*. The MT kept the English token instead of using the natural Italian equivalent, and in the case of `concurrency` even inflected around it awkwardly ("richieste in concurrency", "la concurrency dell'API"). This is the single most frequent naturalness leak across the corpus.

---

## Findings — Medium severity

1. **kimi-api/api-troubleshooting.md:25** — "Controlla il numero di richieste in concurrency tramite un meccanismo di coda." → *in concurrency* is not Italian; "richieste in concurrency" is a raw anglicism. → **"Controlla il numero di richieste simultanee tramite un meccanismo di coda."**

2. **kimi-api/api-troubleshooting.md:70** — "C'è una relazione tra l'abbonamento Kimi e la concurrency dell'API?" → *la concurrency* reads as untranslated. → **"...e la concorrenza (richieste simultanee) dell'API?"** or **"...e il numero di richieste simultanee dell'API?"**

3. **membership/update-rules.md:51** — "limiti di concurrency di 5 ore e 7 giorni" → same anglicism; also the meaning "5-hour/7-day limits" is compressed awkwardly. → **"limiti sulle richieste simultanee su finestre di 5 ore e 7 giorni"** (or "...di concorrenza...").

4. **deep-research/use-cases.md:123** — "Voglio fare un viaggio on the road attraverso lo Xinjiang settentrionale." → *on the road* is an English idiom dropped in verbatim; unnatural in an Italian prompt. → **"Voglio fare un viaggio in auto attraverso lo Xinjiang settentrionale."** (or "un viaggio on the road" is borderline slang — "in macchina / on the road itinerante" better).

5. **deep-research/use-cases.md:58** — "edge tecnologico/di canale" → *edge* left in English; "edge tecnologico" is a calque of "technological edge". → **"vantaggio tecnologico/di canale"**.

6. **kimi-claw/kimi-claw-android-guide.md:208 & 488** — "nella procedura di Onboarding" / "che la procedura di Onboarding sia stata completata" → *Onboarding* capitalized and untranslated; Italian would use *procedura di configurazione iniziale* or *procedura di avvio*. Also inconsistent, since the same doc elsewhere uses "configurazione iniziale" (line 58). → **"nella procedura di configurazione iniziale"**.

7. **agentic-chat.md:31** — "nel ragionamento multi-step" → *multi-step* is an anglicism; Italian says *a più passaggi / in più fasi*. → **"nel ragionamento in più passaggi"** (the same doc even uses "in più passaggi" naturally elsewhere).

8. **kimi-claw/kimi-claw-android-guide.md:29** — table header "| Progetto | Requisito |" → *Progetto* ("Project") is a mistranslation of a table header that should read "Voce/Elemento" (Item). NOTE: this faithfully mirrors an error already present in en-US ("| Project | Requirement |"), so it is a propagated source bug rather than an it-IT-specific MT trace — flagged for completeness only. → **"| Voce | Requisito |"**.

---

## Findings — Low severity

9. **kimi-api/api-troubleshooting.md:24** — "Implementa una strategia di retry con backoff esponenziale" → *retry* and *backoff* both English. *backoff esponenziale* is accepted jargon, but *retry* → **"strategia di ripetizione/nuovi tentativi con backoff esponenziale"**.

10. **membership/update-rules.md:24,36,58,59** — "Task dell'Agent", "elaborati da un task", "Qualsiasi task già in corso", "I nuovi task" → *task* used throughout while the sibling article membership/overview.md correctly uses "Attività". Inconsistent; Italian prefers **"attività"**.

11. **deep-research/use-cases.md:58** — "background del fondatore" → *background* anglicism where **"profilo/esperienza del fondatore"** is more natural in Italian prose (though "background" is common in business speech — low).

12. **kimi-webbridge/FAQ.md:57** — "il comando di installazione può essere eseguito in un ambiente Linux" → odd claim for a Windows PowerShell snippet; reads like a mistranslation/garbled source ("...can be run in a Linux environment" under a Windows heading). Meaning is muddled but the code block clarifies; borderline. → verify against source; likely should reference PowerShell, not Linux.

13. **agent/overview.md:17 / overview.md multiple** — "oltre 20 strumenti", "oltre 5.000 skill" — fine; but **"skill"** left uninflected/English as a plural noun throughout (skills/skill). Acceptable product term, noted for consistency only.

14. **getting-started/prompt basics.md:49** — "dare a Kimi un esempio (few-shot)" → *few-shot* anglicism inline; acceptable technical term but unglossed. Low.

15. **kimi-claw/kimi-claw-android-guide.md:187** — "confezionandole in un file compresso" → *confezionando* ("packaging") is a slightly literal rendering of "packaging them"; **"comprimendole/racchiudendole in un file compresso"** flows better. Low.

16. **agent/swarm.md:25** — heading "La storia dietro tutto questo" → literal of "The story behind it all"; passable but slightly flat. → **"Come è nato"** / **"La genesi"** would read more naturally as a section title. Low.

17. **websites/overview.md:18 & throughout** — "Vibe Coding" left in English (product term, fine) but line 21 "traduce ciò che fornisci in codice frontend" — *frontend* anglicism (standard), noted only for the broader anglicism pattern. Low.

---

## Articles read (17, all 13 categories covered)

- getting-started/overview.md
- getting-started/prompt basics.md
- getting-started/agentic-chat.md
- agent/overview.md
- agent/swarm.md
- deep-research/overview.md
- deep-research/use-cases.md
- websites/overview.md
- slides/stuck.md
- docs-and-sheets/overview.md
- membership/overview.md
- membership/update-rules.md
- kimi-business/kimi-business.md
- kimi-code/faq.md
- kimi-api/api-troubleshooting.md
- kimi-webbridge/kimi-webbridge.md
- kimi-webbridge/FAQ.md
- kimi-claw/kimi-claw-android-guide.md (longest, 545 lines)
- kimi-claw/concepts.md
- others/chat-issues.md

Cross-checked against en-US at same path where phrasing was odd (membership/update-rules, kimi-claw-android-guide table header).
