# Localization Review — `vi-VN` (Vietnamese)

Reviewed all ~90 `vi-VN/**/*.md` files, machine-translated from `en-US/`. Compared against the matching `en-US/<path>` to determine source-inheritance.

## Counts

| Category | Count | Of which [source] |
| --- | --- | --- |
| 1. Leftover Chinese/CJK | 0 (3 excluded: asset paths / SeoMeta) | 3 |
| 2. Untranslated words mid-sentence | 0 | — |
| 3. Fullwidth / CJK punctuation | 22 | 22 |
| 4. Broken anchor links | 2 | 0 |
| 5. Bilingual annotations `English (中文)` | 0 | — |
| 6. Register / pronoun consistency | 0 | — |
| 7. Reversed semantics ("top 3.2%") | 0 (correct) | — |
| 8. Naturalness | 0 notable | — |
| **Total actionable (non-[source])** | **2** | |

## Verdict

The Vietnamese localization is high quality: fully translated, natural, terminologically consistent, and uses a single consistent reader address ("bạn") throughout. The only translation-introduced defects are **2 broken anchor links** (heading text was translated but the in-page links still point to the old English slugs). All 22 fullwidth-punctuation issues are inherited verbatim from the English source and should ideally be fixed upstream in `en-US/` as well.

---

## 1. Leftover Chinese / CJK — none actionable

All three CJK hits are excluded by the checklist (asset paths / SeoMeta) and are source-inherited:

- vi-VN/agent/use-skills-in-agent-en.md:30 — `src="./images/skills/加号-en.png"` — asset path, excluded. [source]
- vi-VN/kimi-webbridge/kimi-webbridge.md:23 — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, excluded. [source]
- vi-VN/kimi-claw/concepts.md:11 — `description="Image: 截图30"` — known source-inherited SeoMeta. [source]

## 2. Untranslated words mid-sentence — none

Heuristic scan for stray English mid-sentence returned only legitimate items: quoted UI strings ("No models available…", "Stop output"), HTTP error names (`401 Unauthorized`), code/header literals (`Authorization: Bearer <your-api-key>`), and `_category.json` editor notes. No genuine untranslated prose.

## 3. Fullwidth / CJK punctuation — 22, all [source]

All instances were verified to exist identically in the matching `en-US/` file, so they are source-inherited. They are still rendering defects in the Vietnamese output and worth fixing (preferably upstream).

Fullwidth `？` in headings (replace with ASCII `?`):
- vi-VN/docs-and-sheets/overview.md:42 — `### Cách sử dụng Kimi Docs？` [source]
- vi-VN/docs-and-sheets/overview.md:84 — `### Cách sử dụng Kimi Sheets？` [source]
- vi-VN/kimi-api/business-cooperation.md:21 — `## Làm thế nào để liên hệ với đội ngũ bán hàng？` [source]
- vi-VN/kimi-api/rate-limits.md:22 — `## Cách kiểm tra giới hạn hiện tại？` [source]
- vi-VN/deep-research/overview.md:76 — `## Cách sử dụng Deep Research？` [source]
- vi-VN/deep-research/wrong-direction.md:22 — `## Làm sao để giảm tình trạng lệch hướng？` [source]
- vi-VN/deep-research/stuck.md:20 — `## Bạn có thể làm gì？` [source]
- vi-VN/deep-research/quota-deducted.md:23 — `## Làm thế nào để kiểm tra số credit còn lại？` [source]
- vi-VN/agent/swarm.md:40 — `## Cách sử dụng？` [source]
- vi-VN/agent/overview.md:41 — `## Cách hoạt động？` [source]
- vi-VN/agent/quota-and-billing.md:38 — `## Kiểm tra Mức sử dụng tín dụng như thế nào？` [source]
- vi-VN/others/account-ban.md:29 — `## Khiếu nại như thế nào？` [source]
- vi-VN/getting-started/presets.md:24 — `## Cách thêm một mẫu lệnh？` [source]
- vi-VN/kimi-claw/tailscale-issue.md:18 — `## Cách khắc phục？` [source]
- vi-VN/kimi-claw/tailscale-issue.md:28 — `## Cách phòng ngừa？` [source]
- vi-VN/kimi-claw/slow-no-response.md:28 — `## Cách khắc phục？` [source]
- vi-VN/websites/overview.md:35 — `## Cách sử dụng Kimi Websites？` [source]
- vi-VN/membership/invoice.md:18 — `## Làm thế nào để lấy hóa đơn？` [source]

Fullwidth `（）` breaking a markdown link (replace with ASCII `()`):
- vi-VN/deep-research/use-cases.md:63 — `[Xem kết quả]（https://www.kimi.com/replay/...）` — fullwidth parens break the link; EN has the same bug. Fix: `[Xem kết quả](https://www.kimi.com/replay/...)`. [source]

Fullwidth `：` in a bold label (replace with ASCII `:`):
- vi-VN/kimi-claw/conversation-limits.md:18 — `**Cách khắc phục：**` — EN: `**How to fix it：**`. Fix: `**Cách khắc phục:**`. [source]

Fullwidth `｜` in a SeoMeta title (replace with ASCII `|`):
- vi-VN/getting-started/search.md:10 — `title="...lời giải đáp｜Trung tâm trợ giúp Kimi"` — EN uses `｜` too. Fix: `|`. [source]

## 4. Broken anchor links — 2 (translation-introduced)

In-page anchor links still reference the English heading slugs, but the target headings were translated to Vietnamese, so the slugs no longer match (GitHub-style slugification of the Vietnamese headings produces different anchors). These worked in `en-US/` but are broken in `vi-VN/`.

- vi-VN/kimi-code/cli-ides.md:102 — `[Điều kiện tiên quyết](#prerequisites)` — heading at line 21 is now `## Điều kiện tiên quyết` (slug ≈ `#điều-kiện-tiên-quyết`), so `#prerequisites` matches nothing. Fix: point to the translated slug, e.g. `(#điều-kiện-tiên-quyết)`.
- vi-VN/slides/stuck.md:51 — `[Hướng dẫn gửi phản hồi lỗi](#bug-feedback-guidelines)` — heading at line 81 is now `## Hướng dẫn gửi phản hồi lỗi` (slug ≈ `#hướng-dẫn-gửi-phản-hồi-lỗi`), so `#bug-feedback-guidelines` matches nothing. Fix: point to the translated slug, e.g. `(#hướng-dẫn-gửi-phản-hồi-lỗi)`.

## 5. Bilingual annotations `English (中文)` — none

No `Latin (CJK)` leftovers found.

## 6. Register / pronoun consistency — consistent

Reader address is uniformly informal "bạn" (603 occurrences across the corpus). No formal forms ("quý vị" / "quý khách": 0 occurrences) are mixed in, so register is consistent throughout reader-facing prose.

## 7. Reversed semantics ("top 3.2%") — correct

- vi-VN/deep-research/overview.md:28 — `...lọc ra 3,2% nội dung chất lượng cao nhất` = "filters to the 3.2% highest-quality content". This correctly preserves the SELECT/keep-the-best meaning of the EN source ("filters to top 3.2% highest-quality content"). No reversal. (Note: uses Vietnamese decimal comma `3,2%`, which is locale-correct.)

## 8. Naturalness — good

Skimmed ~12 articles across categories (deep-research/overview, getting-started/overview, kimi-claw/concepts, agent/overview, membership/overview, kimi-code/cli-getting-started, docs-and-sheets/overview, kimi-webbridge, agent FAQ-en, use-skills-in-agent-en, what-are-skills-en, slides/stuck). Phrasing reads as fluent, idiomatic Vietnamese with appropriate technical terminology (e.g. "tín dụng/credit", "kỹ năng/Skills", "suy luận chuyên sâu"). All `-en`-suffixed files are fully translated despite the filename suffix. No machine-translation artifacts worth flagging.
