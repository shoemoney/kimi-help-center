# pt-BR Naturalness / MT-trace Review — Kimi Help Center

**Reviewer role:** Native Brazilian Portuguese editor
**Scope:** Naturalness and machine-translation traces only. Terminology, fullwidth punctuation, and links were explicitly out of scope and are NOT re-reported here.
**Source of truth:** `en-US/` at the same path (compared where phrasing looked odd).

## Overall fluency verdict: 5 / 5

This is an unusually strong localization. Across ~22 articles spanning every category, the prose reads like it was written by a native Brazilian Portuguese speaker, not translated. It shows genuine idiomatic command: natural headings ("saiu dos trilhos", "A história por trás", "sem precisar de navegador"), correct verb–preposition collocations, natural connectors, and appropriate register (informal-professional, consistent use of "você"). Idioms are reworked rather than calqued (e.g., "self-architect" → "se autoarquitetar", "by hand" → "na mão", "out of the gate" → "logo de cara"). Product/UI terms are sensibly kept in English where expected.

There are **no meaning-changing mistranslations** and **no robotic/word-salad passages**. The handful of findings below are minor collocation/word-order preferences plus one untranslated SeoMeta block (arguably a completeness bug, not a naturalness one, but flagged since it directly harms the reader).

## Counts by severity

| Severity | Count |
|---|---|
| High (meaning-changing MT error) | 0 |
| Medium (clearly unnatural / calque a reader would notice) | 2 |
| Low (minor preference; still acceptable) | 5 |
| **Total** | **7** |

---

## Medium

### 1. `agent/features-and-limits.md:12-13` — SeoMeta left entirely in English
```
title="Agent Features & Limitations - Central de Ajuda Kimi"
description="Learn about Kimi Agent's capabilities, usage tips, limitations, and best practices for optimal results."
```
**Why:** The whole `<SeoMeta>` block is untranslated English inside an otherwise fully pt-BR page (the H1 above it is "Recursos e limitações do Agent"). A pt-BR user searching / seeing the meta description gets raw English. Not a fluency defect in the prose, but a visible quality gap.
**Fix:**
```
title="Recursos e limitações do Agent - Central de Ajuda Kimi"
description="Conheça os recursos, as dicas de uso, as limitações e as boas práticas do Kimi Agent para obter os melhores resultados."
```

### 2. `kimi-claw/kimi-claw-android-guide.md:282, 398` — "software de chat"
> "Controlar o telefone por software de chat" / "comandos de software de chat"
**Why:** Faithful to the source's own clumsy "chat software", but in pt-BR "software de chat" is an unnatural collocation — a native writer says "aplicativos de mensagens" / "apps de mensagens" (which is in fact what the body text uses elsewhere: "diferentes apps de mensagens", line 302). The inconsistency makes the calque stand out.
**Fix:** "Controlar o telefone por aplicativos de mensagens" / "comandos enviados por apps de mensagens".

---

## Low

### 3. `kimi-claw/kimi-claw-android-guide.md:313` — "Isolamento de dados sensíveis — o Kimi Claw Android lerá dados de arquivos locais"
**Why:** Slightly telegraphic/heading-like list style carried from EN ("Sensitive Data Isolation — ..."). Reads a touch robotic vs. the surrounding prose. Minor.
**Fix:** "Isole dados sensíveis — como o Kimi Claw Android lê dados de arquivos locais, limpe ou isole informações sensíveis com antecedência."

### 4. `kimi-claw/kimi-claw-android-guide.md:29` (table) — "Projeto | Requisito" as a column header
**Why:** "Projeto" is a literal rendering of the CN/EN table label "项目/Item" meaning "item/aspect", not "project". A reader briefly reads it as "Project". Borderline terminology, but it reads unnaturally as a column head.
**Fix:** "Item | Requisito".

### 5. `getting-started/search.md:102` — "Encontre o McDonald's verdadeiro"
**Why:** Literal rendering of the (already odd) EN "Find the real McDonald's". In pt-BR it's ambiguous/awkward as a search example. Source is the culprit, but a native editor would smooth it.
**Fix:** e.g. "Descubra qual McDonald's é o verdadeiro" or replace with a clearer example.

### 6. `membership/overview.md:36` — Callout "Use todo o limite de créditos na mesma função"
**Why:** Terse, ambiguous instruction (function? feature?) — reads like a compressed MT of a source fragment; the intent ("spend your credit allowance within a single feature/pool") isn't clear to a native reader.
**Fix:** "Aproveite todo o seu limite de créditos dentro de um mesmo recurso."

### 7. `kimi-code/cli-getting-started.md:33` — "true-color e ligaduras"
**Why:** "ligaduras" (ligatures) is the correct term but bare, without the English gloss that devs expect; in a dev context BR readers usually see "ligatures". Very minor register nit, not wrong.
**Fix (optional):** "…com suporte a true-color e ligaduras (ligatures)…".

---

## Articles read (22)

1. getting-started/overview.md
2. getting-started/prompt basics.md
3. getting-started/search.md
4. getting-started/memory-space.md
5. agent/overview.md
6. agent/swarm.md
7. agent/features-and-limits.md
8. deep-research/overview.md
9. deep-research/stuck.md
10. deep-research/wrong-direction.md
11. kimi-code/faq.md
12. kimi-code/cli-getting-started.md
13. kimi-code/cli-use-cases.md
14. kimi-claw/kimi-claw-android-guide.md
15. kimi-claw/group-claw.md
16. kimi-claw/slow-no-response.md
17. kimi-claw/telegram-bot.md
18. kimi-webbridge/kimi-webbridge.md
19. kimi-webbridge/FAQ.md
20. websites/overview.md
21. membership/overview.md
22. membership/payment-issues.md
23. kimi-api/overview.md
24. kimi-api/api-troubleshooting.md
25. kimi-business/kimi-business.md
26. slides/overview.md
27. docs-and-sheets/overview.md
28. others/chat-issues.md

_(Coverage note: comparisons against en-US were made for search.md and kimi-claw-android-guide.md to confirm whether odd phrasing originated in the source.)_
