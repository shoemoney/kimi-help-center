# id-ID Naturalness / MT-trace Review

**Locale:** `id-ID` (machine-translated from `en-US`)
**Scope:** NATURALNESS and machine-translation traces only. Terminology (kredit), fullwidth punctuation, links, and register (Anda) were explicitly out of scope and are NOT reported here.

## Overall fluency verdict: 4.5 / 5

The id-ID localization reads as genuinely fluent, professional Indonesian. Sentence structure is idiomatic, connectors (`agar`, `sehingga`, `layaknya`, `demi`) are used naturally, and technical terms are handled sensibly (a natural Indonesian mix of translated terms and retained English product/tech terms). Across ~20 articles I found no meaning-changing mistranslations and only a small number of genuine naturalness blemishes — mostly abstract calques and a few over-literal collocations. This is well above typical raw-MT quality; it reads like MT that received human polish.

## Counts by severity

- **High:** 0
- **Medium:** 3
- **Low:** 6

Total genuine findings: 9

---

## Findings

### High severity
None. No mistranslations that change meaning, and no phrasing that would confuse or mislead a native reader.

### Medium severity

**1.** `getting-started/search.md:31` — "Web search (Auto/Off) **menembus batas kekinian pengetahuan** untuk menghadirkan informasi yang aktual…"
- *Why unnatural:* Literal word-for-word calque of EN "breaks through knowledge freshness boundaries." The abstract noun stack "batas kekinian pengetahuan" (boundaries-of-freshness-of-knowledge) is not something a native writer would produce; "menembus batas" + abstract nouns reads as translated.
- *Natural rewrite:* "Web search (Otomatis/Nonaktif) mengatasi keterbatasan pengetahuan model yang tidak selalu mutakhir, sehingga menghadirkan informasi yang aktual, tepercaya, dan dapat ditelusuri."

**2.** `getting-started/search.md:37` (heading) — "**Kekinian berpadu dengan kredibilitas**"
- *Why unnatural:* "Kekinian" as a standalone abstract noun for "freshness/timeliness" is colloquial/trendy (it more commonly means "trendiness") and sits oddly in a formal help-center heading. Paired with "berpadu dengan kredibilitas" it becomes a slightly forced poetic calque of "Freshness meets credibility."
- *Natural rewrite:* "Informasi terkini yang tepercaya" or "Kemutakhiran dan kredibilitas."

**3.** `getting-started/agentic-chat.md:44` — "…menggunakan **arsitektur multimodal natif** (bukan OCR tempelan)."
- *Why unnatural:* "OCR tempelan" is a too-literal rendering of EN "bolted-on OCR." "Tempelan" (a patch/something stuck on) does not carry the intended "added as an afterthought" nuance and reads oddly next to a technical term; a reader may parse it as "OCR sticker."
- *Natural rewrite:* "…(bukan OCR yang ditambahkan belakangan)" or "(bukan OCR yang ditempelkan secara terpisah)."

### Low severity

**4.** `kimi-claw/kimi-claw-android-guide.md:187` — "Tidak diperlukan operasi manual; sistem akan menyelesaikannya secara otomatis di latar belakang."
- *Why unnatural:* "operasi manual" is a calque of "manual operation"; in Indonesian "operasi" leans toward surgical/military. Native phrasing prefers "tindakan manual" or "campur tangan manual."
- *Natural rewrite:* "Tidak diperlukan tindakan manual; sistem menanganinya otomatis di latar belakang."

**5.** `kimi-claw/kimi-claw-android-guide.md:191` — "…Anda juga dapat mengklik Cadangkan **secara aktif** untuk menyimpan snapshot…"
- *Why unnatural:* "secara aktif" is a literal rendering of EN "actively click Backup." Indonesian doesn't need the adverb here; it reads redundant/robotic.
- *Natural rewrite:* "…Anda juga dapat mengklik Cadangkan sendiri untuk menyimpan…" (or simply drop "secara aktif").

**6.** `kimi-claw/kimi-claw-android-guide.md:79` — "Klik 'Buka Pengaturan' untuk **melompat ke** halaman pengaturan ponsel" (and line 87 "melompat ke Kimi App").
- *Why unnatural:* "melompat ke" is a literal calque of "jump to." For navigation/redirect between apps/pages, natural Indonesian is "beralih ke," "membuka," or "menuju."
- *Natural rewrite:* "…untuk membuka halaman pengaturan ponsel"; "…untuk beralih ke Kimi App."

**7.** `getting-started/search.md:56` — "…**membantu Anda dengan cepat mengenali** informasi yang sangat tepercaya."
- *Why unnatural:* Adverb-before-verb order ("dengan cepat mengenali") mirrors English "quickly recognize"; more natural Indonesian order is verb + adverb: "mengenali dengan cepat."
- *Natural rewrite:* "…membantu Anda mengenali informasi yang sangat tepercaya dengan cepat."

**8.** `agent/features-and-limits.md:39` — "Seiring **beberapa putaran dialog dan revisi**, Agent mungkin 'melupakan' sejumlah detail awal."
- *Why unnatural:* "beberapa putaran dialog" is a somewhat mechanical calque of "several rounds of dialogue"; "dialog" is stiff here and elsewhere the docs use "percakapan." Slight inconsistency + literal feel.
- *Natural rewrite:* "Setelah beberapa putaran percakapan dan revisi, Agent mungkin 'melupakan' sebagian detail awal."

**9.** `deep-research/use-cases.md:22` — "**Himpun** putaran pendanaan dan perubahan valuasi perusahaan LLM utama…" (table cell)
- *Why unnatural:* "Himpun" (imperative of menghimpun) is very formal/literary for a UI-style example prompt and collocates awkwardly with "putaran pendanaan." Reads translated rather than as something a user would type.
- *Natural rewrite:* "Kumpulkan data putaran pendanaan dan perubahan valuasi perusahaan LLM utama…"

---

## Recurring MT pattern (biggest)

**Over-literal abstract-noun calques and stray English-order adverbs.** The most repeated trace is rendering English abstract/metaphorical noun phrases word-for-word ("knowledge freshness boundaries" → "batas kekinian pengetahuan," "bolted-on OCR" → "OCR tempelan," "freshness meets credibility" → "kekinian berpadu dengan…"), plus occasional English adverb placement ("quickly recognize" → "dengan cepat mengenali"). None break meaning, but they cluster in the more marketing-flavored prose (especially `search.md`) and betray the source.

A secondary, low-impact pattern is a small handful of English motion/verb calques ("jump to" → "melompat ke," "manual operation" → "operasi manual").

---

## Articles read (20)

1. `kimi-claw/kimi-claw-android-guide.md` (longest guide, 545 lines)
2. `getting-started/overview.md`
3. `kimi-code/faq.md`
4. `deep-research/use-cases.md`
5. `websites/overview.md`
6. `agent/swarm.md`
7. `kimi-webbridge/kimi-webbridge.md`
8. `getting-started/search.md`
9. `docs-and-sheets/overview.md`
10. `kimi-business/kimi-business.md`
11. `kimi-webbridge/FAQ.md`
12. `others/chat-issues.md`
13. `slides/stuck.md`
14. `getting-started/memory-tips.md`
15. `kimi-api/api-troubleshooting.md`
16. `kimi-claw/group-claw.md` (partial, ~140 lines)
17. `membership/overview.md`
18. `agent/overview.md`
19. `kimi-code/cli-getting-started.md` (partial, ~130 lines)
20. `kimi-claw/concepts.md`
21. `getting-started/agentic-chat.md`
22. `kimi-business/faq.md`
23. `kimi-claw/memory-loss.md`
24. `membership/payment-issues.md`
25. `agent/features-and-limits.md`
26. `docs-and-sheets/docs-cases.md`

(SeoMeta descriptions, Callouts, tables, and body prose all reviewed within these.)
