# es-419 Naturalness / MT-trace Review

Reviewer: native Latin American Spanish editor
Scope: fluency & machine-translation traces only. Terminology (credit/quota), fullwidth punctuation, and links were already fixed and are NOT re-reported here.

## Overall fluency verdict: 4.3 / 5

The es-419 localization is generally strong and reads like competent, professional Latin American Spanish. Sentence structure is natural, idioms are mostly re-expressed rather than calqued, register is consistent (informal "tú", appropriate for a help center), and the longer marketing/overview prose (Slides, Websites, Docs & Sheets, prompt basics, memory-tips, Deep Research) is close to native quality. It does not read like raw MT.

Points deducted almost entirely for **one systematic pattern**: English technical/UI terms left untranslated inline (see below), plus a small number of grammatical-agreement slips that appear to be collateral damage from the credit/quota find-and-replace, and a couple of literal calques of English UI strings/idioms.

## Biggest recurring MT pattern

**Untranslated English terms embedded in Spanish sentences.** The most damaging instance is `concurrency` / `concurrencia`: the English word "concurrency" is used consistently across the API and code docs, and the Spanish "concurrencia" never appears once in the whole locale — so it is a systematic under-translation, not a deliberate term choice. Same for `rate limit` (used bare dozens of times where "límite de tasa/frecuencia" would read better, and the doc even mixes both: "límites de tasa ... a la concurrency"), and for UI labels left in English mid-sentence: `Privacy Policy`, `Dashboard`, `Bot`, `Onboarding`, `Memory Space`. Because these are woven into otherwise-Spanish sentences, they read as MT residue.

## Counts by severity

- High (changes meaning / very awkward): 3
- Medium: 8
- Low (minor polish): 9
- Total: 20

---

## HIGH

- `es-419/getting-started/agentic-chat.md:17` — "prueba a enviar un mensaje: salúdalo a Kimi" — ungrammatical clitic doubling: "salúdalo a Kimi" duplicates the object ("greet-him to Kimi"). Rewrite: "prueba a enviar un mensaje y saluda a Kimi" (or simply "salúdalo").
- `es-419/kimi-code/faq.md:89` — heading "Membresía vencida o créditos agotada" — gender/number disagreement: "créditos" (masc. pl.) with "agotada" (fem. sg.), a leftover from the quota→créditos replacement. Rewrite: "Membresía vencida o créditos agotados".
- `es-419/kimi-business/kimi-business.md:59` — table cell "ver su créditos personal" — number/gender disagreement and awkward possessive ("su créditos personal" = "his credit personal"). Rewrite: "ver sus créditos personales" (or "consultar su saldo de créditos personal").

## MEDIUM

- `es-419/deep-research/overview.md:109` and `es-419/deep-research/stuck.md:29` — 'No hagas clic en "Detener salida"' — "Detener salida" is a literal calque of the English UI string "Stop output" and does not read as a real button label in Spanish. Rewrite: 'No hagas clic en "Detener"' or 'No detengas la generación' (match the actual UI string).
- `es-419/deep-research/overview.md:82,96,102` — "Responde las preguntas de Clarification (Aclaración de intención)" — the English label "Clarification" is kept and glossed in parentheses repeatedly; awkward and redundant. Rewrite: use "Aclaración de intención" throughout and drop the English word.
- `es-419/kimi-api/rate-limits.md:16` — "aplica límites de tasa a la frecuencia de solicitudes y a la concurrency" — mixes translated "límites de tasa" with untranslated "concurrency" in one clause. Rewrite: "...a la frecuencia de solicitudes y a la concurrencia".
- `es-419/kimi-api/rate-limits.md:11,18,24,26,35,42` — pervasive bare "rate limit" / "concurrency" throughout the article. Rewrite: "límite de frecuencia/tasa" and "concurrencia" (the latter never appears anywhere in the locale, so this is genuine under-translation, not house term).
- `es-419/kimi-api/api-troubleshooting.md:70,73` — "la concurrency de la API", "Los límites de concurrency de la API" — same untranslated term in headings and body. Rewrite: "concurrencia".
- `es-419/kimi-code/cli-customization.md:24` — "ajusta el tiempo de espera, la concurrency, el formato de salida" — untranslated "concurrency" in a plain-prose list. Rewrite: "la concurrencia".
- `es-419/agent/FAQ-en.md:39` — "Límite de concurrency: pueden ejecutarse en paralelo un máximo de 3 tareas" — untranslated "concurrency" as a bold label. Rewrite: "Límite de concurrencia".
- `es-419/kimi-claw/kimi-claw-android-guide.md:66,169` — "aceptas la Privacy Policy", "Privacy Policy: Leer Privacy Policy" — English UI label left untranslated inline (the source does keep it, but in Spanish prose it reads as MT residue). Rewrite: "Política de privacidad".
- `es-419/kimi-claw/kimi-claw-android-guide.md:99,107,114,121,303` — "Dashboard" used throughout ("interfaz principal del Dashboard", "sección Administración de canales del Dashboard"). Consistent but untranslated; "panel de control" would read more naturally for a general audience. Medium because it recurs many times.

## LOW

- `es-419/kimi-claw/kimi-claw-android-guide.md:29` — table header "Proyecto | Requisito" — "Proyecto" is a literal rendering of source "Project", but the rows list OS/storage/network, i.e. these are spec items. Rewrite: "Elemento | Requisito".
- `es-419/kimi-claw/kimi-claw-android-guide.md:208` — "durante el proceso de Onboarding" — untranslated "Onboarding" in prose. Rewrite: "durante el proceso de configuración inicial".
- `es-419/kimi-claw/kimi-claw-android-guide.md:210,212,231,233` — "página de cambio de Bot", "administración de Bot", "la información del Bot" — "Bot" capitalized/untranslated used as a common noun. Acceptable but reads slightly MT-ish; lowercase "bot" or "asistente" would be smoother.
- `es-419/getting-started/memory-tips.md:83` — "Memory Space tiene actualmente los siguientes límites" — product/feature name "Memory Space" left in English at the start of a Spanish sentence. Rewrite: "El espacio de memoria (Memory Space) tiene..." or use the localized feature name.
- `es-419/kimi-webbridge/kimi-webbridge.md:65,78` — 'Haz clic en "Cargar descomprimida"' — matches Chrome's Spanish "Cargar descomprimida", so acceptable, but slightly opaque; could add "(Load unpacked)" for the option users see. Minor.
- `es-419/others/chat-issues.md:20,50` — "Se activó el rate limit", "es un rate limit en horas pico" — consumer-facing article (not developer), so bare "rate limit" is more jarring here than in the API docs. Rewrite: "límite de frecuencia" / "límite de uso".
- `es-419/membership/overview.md:23,28` and passim; `es-419/kimi-business/kimi-business.md:42,109` — "créditos de Agent", "créditos de Kimi Code", "créditos completos del periodo actual" appear with a lowercase "c" mid-cell where a capitalized/section-initial term would be expected (collateral from find-replace). Purely cosmetic capitalization; flagged low.
- `es-419/kimi-api/api-troubleshooting.md:24` — "estrategia de reintento con backoff exponencial" — "backoff" untranslated (though "retroceso exponencial" is used in error-codes.md:28 — internal inconsistency). Rewrite for consistency: "retroceso exponencial".
- `es-419/deep-research/use-cases.md:11` (SeoMeta description) & `getting-started/memory-tips.md:11` — SeoMeta descriptions are raw first-person prompt text ("Soy un analista de valores profesional...", "Soy nombre/apodo y actualmente vivo en ciudad") pulled verbatim from a code example rather than a real page description. Reads oddly as a meta description, but this mirrors the en-US source, so low.

---

## Articles actually read (19, all 13 categories covered)

1. agent/overview.md
2. agent/swarm.md
3. agent/FAQ-en.md
4. agent/features-and-limits.md
5. deep-research/use-cases.md
6. deep-research/overview.md
7. docs-and-sheets/overview.md
8. kimi-api/api-troubleshooting.md
9. kimi-api/rate-limits.md (scanned)
10. kimi-business/kimi-business.md
11. kimi-claw/kimi-claw-android-guide.md (longest guide, full)
12. kimi-code/faq.md
13. kimi-webbridge/kimi-webbridge.md
14. membership/overview.md
15. others/chat-issues.md
16. slides/stuck.md
17. websites/overview.md
18. getting-started/prompt basics.md
19. getting-started/agentic-chat.md
20. getting-started/memory-tips.md

Plus targeted grep scans across the whole locale for agreement slips ("créditos agotada/insuficiente", "su créditos") and untranslated terms ("concurrency", "rate limit", "Privacy Policy", "Onboarding", "Detener salida", "Dashboard") to confirm the systematic nature of the recurring pattern.
