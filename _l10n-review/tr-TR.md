# Localization Review — `tr-TR` (Turkish)

Source: machine-translated from `en-US/` (identical paths). ~90 `.md` files reviewed.

## Counts

| # | Category | Defects |
|---|----------|---------|
| 1 | Leftover Chinese/CJK | 0 (all hits excluded: asset paths + 1 known source-inherited) |
| 2 | Untranslated words mid-sentence | 17 (mostly "credit", glossary term not localized) |
| 3 | Fullwidth/CJK punctuation | 13 |
| 4 | Broken anchor links | 2 |
| 5 | Bilingual annotations `English (中文)` | 0 |
| 6 | Register/politeness (siz vs sen) | 0 reader-facing (1 in example prompt, ignored) |
| 7 | Reversed semantics (top 3.2%) | 0 (correct) |
| 8 | Naturalness / awkward phrasing | 10 (apostrophe-suffix on "kredi" is the dominant pattern) |

## Verdict

The Turkish translation is fluent and consistently formal ("siz"), with correct semantics throughout. The dominant problem is **glossary inconsistency around the term "credit"**: the same concept appears untranslated as `credit`/`Credit`/`credit'ler` and translated as `kredi`/`krediler`/`kota` — frequently mixing within a single sentence — plus a recurring grammar error where a Turkish-spelled `kredi` takes an English apostrophe-suffix (`kredi'nız`, `kredi'yı`). Secondary issues are fullwidth `？` in headings and a translated URL slug producing a broken link. None are blocking, but the credit/kredi/kota cleanup should be done repo-wide before publishing.

---

## 1. Leftover Chinese/CJK

No reader-facing defects. All `[一-龥]` hits are excluded:
- tr-TR/agent/use-skills-in-agent-en.md:30 — `src="./images/skills/加号-en.png"` — asset path, excluded.
- tr-TR/kimi-webbridge/kimi-webbridge.md:23 — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, excluded.
- tr-TR/kimi-claw/concepts.md:11 — `description="Image: 截图30"` — known source-inherited [source].

## 2. Untranslated words mid-sentence

Glossary term "credit" left in English (alongside Turkish "kredi" elsewhere). en-US consistently uses "credit"; tr-TR should localize consistently to "kredi" (the translator's own predominant choice). Defects:

- tr-TR/kimi-code/benefits.md:23 — `...kredi havuzunuzdan** credit tüketir; farklı planlar farklı miktarda credit içerir.` — mixes "kredi" and "credit" in one sentence — use "kredi" throughout.
- tr-TR/kimi-code/benefits.md:26 — `## Credit yenileme` — heading untranslated — "Kredi yenileme".
- tr-TR/deep-research/wrong-direction.md:20 — `o göreve ait credit'ler otomatik olarak iade edilir` — "krediler".
- tr-TR/deep-research/overview.md:114 — `**Credit iadeleri**` — "Kredi iadeleri".
- tr-TR/slides/overview.md:43 — `Aylık ücretsiz bir credit kredi'sı` — redundant "credit" + malformed "kredi'sı" — "Aylık ücretsiz bir kredi tahsisatı".
- tr-TR/slides/stuck.md:54 — `size ilgili credit'leri telafi olarak vereceğiz` — "kredileri".
- tr-TR/kimi-claw/overview.md:36 — `Kimi Code credit'lerinizi bağlar` — "kredilerinizi".
- tr-TR/membership/overview.md:12 — `description="...credit sistemini..."` — SeoMeta — "kredi sistemini".
- tr-TR/membership/overview.md:17 — `**iki credit havuzu** ... ortak bir kredi havuzunu` — mixes terms — unify to "kredi".
- tr-TR/membership/overview.md:33 — `Aylık credit'ler aynı özellik için...` — "krediler".
- tr-TR/membership/overview.md:36 — `Tüm credit limitini aynı işlev için kullanın` — "kredi".
- tr-TR/membership/overview.md:41-43 — `**İki credit havuzu**`, `Credit'ler her faturalandırma...`, `Önce bonus credit'ler, ardından plan credit'leri` — unify to "kredi".
- tr-TR/membership/overview.md:52-53 — `title: "Credit Kuralları"`, `description: "Credit'lerin nasıl işlediği..."` — "Kredi".
- tr-TR/membership/pricing.md:32 — `Aylık credit'ler, aynı özellik için...` — "krediler".
- tr-TR/membership/pricing.md:43 — `## Credit dağılımı` — "Kredi dağılımı".
- tr-TR/membership/pricing.md:45 — `**iki credit havuzu** ... daha büyük bir credit havuzu ... [Credit Güncellemesi...]` — mixes "credit"/"kredi" repeatedly; unify.
- tr-TR/membership/upgrade-downgrade.md:24-25 — `yeni credit tahsisatınız`, `**Credit'ler** | Eski planda kullanılmış credit'ler` — "kredi"/"krediler".
- tr-TR/agent/features-and-limits.md:96 — `[Üyelik Credit'leri](...)` — link label untranslated — "Üyelik Kredileri".

Also note "credit" vs "kredi" vs "kota" (quota) are all used for membership allowances across files (e.g. agent/quota-and-billing.md uses "kota"; membership/* uses "kredi"/"credit"). Pick one Turkish term repo-wide (recommend "kredi" for "credit", "kota" for "quota" — matching the EN credit/quota distinction).

## 3. Fullwidth / CJK punctuation

Fullwidth `？` in `##` headings (should be ASCII `?`):
- tr-TR/docs-and-sheets/overview.md:42 — `### Kimi Docs nasıl kullanılır？`
- tr-TR/docs-and-sheets/overview.md:84 — `### Kimi Sheets nasıl kullanılır？`
- tr-TR/kimi-api/rate-limits.md:22 — `## Mevcut sınırları nasıl kontrol edebilirsiniz？`
- tr-TR/kimi-api/business-cooperation.md:21 — `## Satış ekibiyle nasıl iletişime geçilir？`
- tr-TR/deep-research/stuck.md:20 — `## Neler yapabilirsiniz？`
- tr-TR/deep-research/quota-deducted.md:23 — `## Kalan kredi nasıl kontrol edilir？`
- tr-TR/deep-research/overview.md:76 — `## Deep Research nasıl kullanılır？`
- tr-TR/others/account-ban.md:29 — `## Nasıl itiraz edebilirim？`
- tr-TR/agent/overview.md:41 — `## Nasıl çalışır？`
- tr-TR/kimi-claw/tailscale-issue.md:18 — `## Nasıl düzeltilir？`
- tr-TR/kimi-claw/tailscale-issue.md:28 — `## Nasıl önlenir？`
- tr-TR/kimi-claw/slow-no-response.md:28 — `## Nasıl düzeltilir？`

Fullwidth `：` in bold label:
- tr-TR/kimi-claw/conversation-limits.md:18 — `**Nasıl düzeltilir：**` — use ASCII `:` → `**Nasıl düzeltilir:**`.

Fullwidth `｜` in SeoMeta title:
- tr-TR/getting-started/search.md:10 — `title="Rehberler ve Yanıtlar için Agentic Search｜Kimi Yardım Merkezi"` — use ASCII `|` or " - ".

Fullwidth `（ ）` breaking markdown link:
- tr-TR/deep-research/use-cases.md:63 — `[Sonucu görüntüle]（https://www.kimi.com/replay/...）` — fullwidth parens break the link; must be ASCII `(...)`. [source] (en-US has the same fullwidth parens at the same line) — still a live defect to fix.

## 4. Broken anchor links

Both anchors point to English slugs but the target headings were translated, so they no longer resolve. (en-US uses the same `#`-anchors and they work there because the headings are English — so this breakage is introduced by translation.)

- tr-TR/kimi-code/cli-ides.md:102 — `[Ön koşullar](#prerequisites)` — heading is now `## Ön koşullar` (anchor `#ön-koşullar`); `#prerequisites` matches nothing. Update anchor to the Turkish heading slug.
- tr-TR/slides/stuck.md:51 — `[Hata Bildirim Kılavuzu](#bug-feedback-guidelines)` — heading is now `## Hata Bildirim Kılavuzu`; `#bug-feedback-guidelines` matches nothing. Update to the Turkish heading slug.

(Note: a separate intra-text link `/agent/kredi-and-billing` is reported under §8 — it is a path link, not an in-page anchor.)

## 5. Bilingual annotations `English (中文)`

None found.

## 6. Register / politeness (siz vs sen)

Reader-facing text is consistently formal ("siz": -iniz/-ınız endings, formal imperatives like "sorun", "ziyaret edin", "kontrol edin"). No reader-facing deviations found.

- tr-TR/getting-started/memory-tips.md:107 — informal `kullanabilirsin ... belirt` — IGNORED: inside the example-prompts table (memory instructions the user gives Kimi), which the checklist excludes.

## 7. Reversed semantics — deep-research overview "top 3.2%"

Correct. tr-TR/deep-research/overview.md:28 — `...en kaliteli içeriğin ilk %3,2'sine indirger` = "reduces to the top 3.2% of highest-quality content" — matches en-US "filters to top 3.2% highest-quality content" (SELECTS/keeps the best 3.2%). No reversal.

## 8. Naturalness / awkward phrasing

Dominant pattern — apostrophe + Turkish suffix on the fully Turkish word "kredi" (apostrophe is only correct after proper nouns/abbreviations/foreign spellings; "kredi" should suffix directly: krediniz, krediyi, kredisi):
- tr-TR/kimi-code/faq.md:91 — `mevcut kredi'nızı ... kredi'nız tükendiyse` — → "krediniz ... krediniz tükendiyse".
- tr-TR/kimi-api/account-and-auth.md:37 — `Daha yüksek kredi'ya uygun` — → "krediye" (also semantically odd; en-US = "higher quota").
- tr-TR/kimi-business/faq.md:26 — `mevcut dönemin tam kredi'sını alır` — → "kredisini".
- tr-TR/agent/features-and-limits.md:57,63 — `ortak havuzdaki ... kredi'yı tüketir` — → "krediyi".
- tr-TR/agent/features-and-limits.md:94 — `Agent kredi'sı nasıl hesaplanır?` — → "kredisi".
- tr-TR/agent/features-and-limits.md:96 — `Mevcut kredi'nızı` — → "kredinizi".
- tr-TR/agent/FAQ-en.md:21,25,29 — `kredi'sının tükendiğini`, `üyelik kredi'nızdan`, `üyelik kredi'sından` — → "kredisinin", "kredinizden", "kredisinden".
- tr-TR/agent/FAQ-en.md:23 — `Beceri oluşturmak kredi'yı nasıl tüketir?` — → "krediyi".

Translated URL slug producing a wrong link:
- tr-TR/agent/features-and-limits.md:57 — `[kredi ve Faturalandırma](/agent/kredi-and-billing)` — the URL path was translated; the link target does not exist. en-US uses `/agent/credits-and-billing` [source: that en-US slug itself does not match the actual file `quota-and-billing.md`, so the link is questionable in source too], but tr-TR additionally broke it by translating the slug. Restore a valid path (likely `/agent/quota-and-billing`) and translate only the label.

Other:
- tr-TR/agent/features-and-limits.md:57 — link label `[kredi ve Faturalandırma]` has inconsistent casing ("kredi" lowercase, "Faturalandırma" uppercase) — minor.
