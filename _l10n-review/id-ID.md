# Localization Review — `id-ID` (Indonesian)

Source: machine-translated from `en-US/` (identical paths). Files reviewed: 90 `id-ID/**/*.md`.

## Counts

| Category | Count | Notes |
|---|---|---|
| 1. Leftover CJK | 0 | All 3 CJK hits are asset paths or known source-inherited (see below). |
| 2. Untranslated words mid-sentence | 0 real defects | English kept only in UI labels / example prompts (policy-consistent with source). |
| 3. Fullwidth/CJK punctuation | 23 | All source-inherited `？ ： ｜ （）`. Defects in id-ID but mirror en-US. |
| 4. Broken anchor links | 2 | Anchor not translated while heading was. |
| 5. Bilingual annotations `English (中文)` | 0 | None found. |
| 6. Register (Anda vs kamu) | 5 lines (2 files) reader-facing | Dominant register "Anda" (558) vs "kamu" (15, most in exempt prompts). |
| 7. Reversed semantics (top 3.2%) | 0 | Correct — keeps the best 3.2%. |
| 8. Naturalness | minor | Prose generally fluent; one awkward heading. |

**Verdict:** The id-ID localization is in good shape — no leftover Chinese, no bilingual leftovers, correct deep-research semantics, and consistently fluent prose. The bulk of flagged issues (all 23 fullwidth-punctuation items and the example-prompt registers) are inherited verbatim from the en-US source, so fixing them is really a source-fix that should propagate to all locales. The only two locale-specific defects are the two broken anchor links, where the heading was translated but the in-link anchor was not. Recommend (a) fixing the two anchors in id-ID, and (b) opening a source ticket for the fullwidth punctuation in en-US.

---

## 1. Leftover Chinese / CJK

No defects. The three CJK matches are all permitted:
- `id-ID/agent/use-skills-in-agent-en.md:30` — `src="./images/skills/加号-en.png"` — asset path, exempt.
- `id-ID/kimi-webbridge/kimi-webbridge.md:23` — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, exempt.
- `id-ID/kimi-claw/concepts.md:11` — `description="Image: 截图30"` — SeoMeta, known source-inherited. [source]

---

## 2. Untranslated words mid-sentence

No genuine defects. English text that remains is policy-consistent with the en-US source:
- UI menu labels kept in English (e.g. `others/account-deletion.md:18` "Settings → Account Security → Delete Account"; `getting-started/memory-space.md:54,77,80` "...→ Memory Space"). The en-US source also presents these UI strings in English; keeping them is a reasonable localization choice but is slightly inconsistent (in memory-space, "Settings/Personalization" are translated to "Pengaturan/Personalisasi" while "Memory Space" is left English). Not a translation error per se — note for policy consistency. [source-policy]
- All-English example prompts inside `CodePreview`/quotes/Callout (memory-tips.md, prompt basics.md, usage-tips.md) — exempt by rule.

---

## 3. Fullwidth / CJK punctuation

All confirmed source-inherited (en-US has the identical fullwidth character at the same location). Still defects in the rendered id-ID page; mark [source].

Fullwidth `？` in `##`/`###` headings (should be ASCII `?`):
- `id-ID/docs-and-sheets/overview.md:42` — `### Cara menggunakan Kimi Docs？` — use `?`. [source]
- `id-ID/docs-and-sheets/overview.md:84` — `### Cara menggunakan Kimi Sheets？` — use `?`. [source]
- `id-ID/kimi-api/business-cooperation.md:21` — `## Bagaimana cara menghubungi tim penjualan？` — use `?`. [source]
- `id-ID/kimi-api/rate-limits.md:22` — `## Cara memeriksa batas saat ini？` — use `?`. [source]
- `id-ID/deep-research/wrong-direction.md:22` — `## Cara mengurangi penyimpangan arah？` — use `?`. [source]
- `id-ID/deep-research/stuck.md:20` — `## Apa yang bisa Anda lakukan？` — use `?`. [source]
- `id-ID/deep-research/quota-deducted.md:23` — `## Cara mengecek sisa credit？` — use `?` (also: "credit" mid-phrase; en uses "credits"). [source]
- `id-ID/deep-research/overview.md:76` — `## Cara menggunakan Deep Research？` — use `?`. [source]
- `id-ID/agent/overview.md:41` — `## Cara kerjanya？` — use `?`. [source]
- `id-ID/agent/quota-and-billing.md:38` — `## Cara memeriksa pemakaian kredit？` — use `?`. [source]
- `id-ID/agent/swarm.md:40` — `## Cara menggunakan？` — use `?`. [source]
- `id-ID/getting-started/presets.md:24` — `## Cara menambahkan preset？` — use `?`. [source]
- `id-ID/kimi-claw/slow-no-response.md:28` — `## Cara mengatasinya？` — use `?`. [source]
- `id-ID/kimi-claw/tailscale-issue.md:18` — `## Cara memperbaikinya？` — use `?`. [source]
- `id-ID/kimi-claw/tailscale-issue.md:28` — `## Cara mencegahnya？` — use `?`. [source]
- `id-ID/websites/overview.md:35` — `## Cara menggunakan Kimi Websites？` — use `?`. [source]
- `id-ID/membership/invoice.md:18` — `## Bagaimana cara mendapatkan faktur？` — use `?`. [source]
- `id-ID/others/account-ban.md:29` — `## Bagaimana cara mengajukan banding？` — use `?`. [source]

Fullwidth `：` in bold labels (should be ASCII `:`):
- `id-ID/kimi-claw/memory-loss.md:28` — `**Cara mengatasinya：**` — use `:`. [source]
- `id-ID/kimi-claw/conversation-limits.md:18` — `**Cara mengatasinya：**` — use `:`. [source]

Fullwidth `（ ）` breaking a markdown link (link will not render):
- `id-ID/deep-research/use-cases.md:63` — `[Lihat hasil]（https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b）` — replace fullwidth parens with ASCII `(` `)` so the link works. [source]

Fullwidth `｜` in SeoMeta title:
- `id-ID/getting-started/search.md:10` — `title="Agentic Search untuk Panduan dan Jawaban｜Pusat Bantuan Kimi"` — use ASCII `|` (or " - "). [source]

---

## 4. Broken anchor links

Locale-specific defects: the link anchor still points to the English slug while the target heading was translated, so the anchor resolves to nothing.

- `id-ID/kimi-code/cli-ides.md:102` — `...(lihat [Prasyarat](#prerequisites))...` — target heading is `## Prasyarat` (line 21) → generated anchor is `#prasyarat`, not `#prerequisites`. Fix: change link to `#prasyarat`. (en-US is correct: heading "Prerequisites" → `#prerequisites`.)
- `id-ID/slides/stuck.md:51` — `...[Panduan Umpan Balik Bug](#bug-feedback-guidelines)...` — target heading is `## Panduan Umpan Balik Bug` (line 81) → generated anchor `#panduan-umpan-balik-bug`, not `#bug-feedback-guidelines`. Fix: change link to `#panduan-umpan-balik-bug`. (en-US is correct: heading "Bug Feedback Guidelines" → `#bug-feedback-guidelines`.)

---

## 5. Bilingual annotations `English (中文)`

No defects found.

---

## 6. Register / politeness consistency

Dominant register is formal "Anda" (558 occurrences) — correct for help docs. "kamu" appears 15 times; most are inside example prompts (table cells in quotes, Callout `Contoh prompt`) and are EXEMPT per the rule. The following are reader-facing prose and inconsistent with the rest of the docs:

- `id-ID/kimi-claw/file-transfer.md:20` — `Kamu bisa mengirim gambar...` — change to "Anda dapat mengirim...".
- `id-ID/kimi-claw/file-transfer.md:24` — `...kembali kepadamu. Jika pengiriman... pastikan kamu menggunakan...` — change "kepadamu"→"kepada Anda", "kamu"→"Anda".
- `id-ID/kimi-claw/file-transfer.md:28` — `Kamu juga bisa menelusuri... bisa kamu akses kapan saja.` — change "Kamu"→"Anda", "kamu"→"Anda".
- `id-ID/getting-started/memory-tips.md:87` — `...kamu harus terlebih dahulu memangkasnya...` — reader instruction; change "kamu"→"Anda".
- `id-ID/getting-started/memory-tips.md:88` — `Jika kamu mencoba menyimpan konten...` — change "kamu"→"Anda".

Note: `memory-tips.md:89` ("kamu dapat menyarankan...") and the line-107/113/118/119 entries address the model/assistant or sit inside the prompt-reference table; left as-is. All `usage-tips.md` (24, 30, 32, 49) "kamu" are inside example prompts — exempt.

---

## 7. Reversed semantics — deep-research overview "top 3.2%"

No defect. `id-ID/deep-research/overview.md:28` reads `...menyaring hingga 3,2% konten berkualitas tertinggi` = "filtering down to the top 3.2% highest-quality content" — correctly means SELECT/keep the best 3.2%, matching en-US line 27 "filters to top 3.2% highest-quality content". (Decimal localized to `3,2%`, which is correct Indonesian convention.)

---

## 8. Naturalness

Prose is generally fluent and idiomatic (e.g. presets.md, overview articles, usage-tips.md read naturally). Minor notes:

- `id-ID/getting-started/search.md:24` — heading `## Pengaturan web search` mixes Indonesian + untranslated English noun phrase. More natural: `## Pengaturan Pencarian Web` (or keep "Web search" capitalized as a UI label). The en-US heading is "Web search settings"; the inline UI toggle "Web search" elsewhere can stay as the literal control name, but the heading reads awkwardly half-translated.
- `id-ID/deep-research/quota-deducted.md:23` — `## Cara mengecek sisa credit？` — "credit" left in English mid-phrase; elsewhere the docs use "kredit" (e.g. agent/quota-and-billing.md). Use "kredit" for consistency. [source uses "credits"]

No machine-translation artifacts (literal word-order calques, mistranslated idioms) detected in the ~12 articles skimmed.
