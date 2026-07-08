# Localization Audit — `th-TH` (Thai)

Source: `en-US/` (identical paths). 90 `th-TH/**/*.md` files reviewed.

## Counts

| # | Category | Defects | [source] | Notes |
|---|----------|--------:|---------:|-------|
| 1 | Leftover CJK | 0 | 1 | Only asset paths + known SeoMeta `截图30` |
| 2 | Untranslated words mid-sentence | 0 | – | All Latin hits are in code/commands/tables |
| 3 | Fullwidth / CJK punctuation | 17 | 17 | All present in en-US too (source-inherited) |
| 4 | Broken anchor / link | 3 | 0 | 1 critical (translated link path); 2 anchors likely broken |
| 5 | Bilingual `English (中文)` leftovers | 0 | – | None found |
| 6 | Glossary/term consistency (`credit`) | ~112 | 0 | `เครดิต` used where glossary mandates `credit` |
| 7 | Reversed semantics (deep-research 3.2%) | 0 | – | Correct: keeps best 3.2% |
| 8 | Naturalness | 0 serious | – | Prose reads fluent and native |

**Verdict:** Translation quality is high and reads naturally. The dominant problem is a systematic terminology violation: the glossary marks `credit` as `keep_original_with_note` / `case_sensitive: true`, but the Thai transliteration `เครดิต` appears ~112 times — often mixed with `credit` in the very same sentence — and in one case the transliteration leaked into a link path, breaking the link. Fullwidth punctuation defects exist but are inherited from the English source. Fixing the `credit`/`เครดิต` inconsistency is the single highest-impact action.

---

## 1. Leftover Chinese / CJK

No genuine defects. All `[一-龥]` hits are exempt:
- `th-TH/agent/use-skills-in-agent-en.md:30` — `src="./images/skills/加号-en.png"` — asset path, exempt.
- `th-TH/kimi-webbridge/kimi-webbridge.md:23` — `url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4"` — asset path, exempt.
- `th-TH/kimi-claw/concepts.md:11` — `description="Image: 截图30"` — SeoMeta description. [source] (known source-inherited).

## 2. Untranslated words mid-sentence

No defects. Latin word hits (`login`, `the`, `and`, `version`, etc.) all occur inside code spans (`` `/login` ``), command tables, or API endpoint cells — legitimate, must stay English.

## 3. Fullwidth / CJK punctuation (all [source])

Every item below is also present in the matching `en-US` file, so they are source-inherited. They remain technically wrong for Thai output and should be fixed at source. Fix = replace fullwidth glyph with ASCII/Thai equivalent (or drop — Thai does not use `?` after questions).

Fullwidth `？` in headings/titles (replace with nothing or ASCII `?`):
- `th-TH/docs-and-sheets/overview.md:42` — `### ใช้งาน Kimi Docs อย่างไร？` — [source]
- `th-TH/docs-and-sheets/overview.md:84` — `### ใช้งาน Kimi Sheets อย่างไร？` — [source]
- `th-TH/kimi-api/business-cooperation.md:21` — `## ติดต่อทีมขายได้อย่างไร？` — [source]
- `th-TH/kimi-api/rate-limits.md:22` — `## จะตรวจสอบขีดจำกัดปัจจุบันได้อย่างไร？` — [source]
- `th-TH/deep-research/wrong-direction.md:22` — `## จะลดการเบี่ยงเบนของทิศทางได้อย่างไร？` — [source]
- `th-TH/deep-research/stuck.md:20` — `## สิ่งที่คุณทำได้？` — [source]
- `th-TH/deep-research/quota-deducted.md:23` — `## ตรวจสอบเครดิตคงเหลือได้อย่างไร？` — [source]
- `th-TH/agent/quota-and-billing.md:38` — `## วิธีตรวจสอบการใช้ เครดิต？` — [source]
- `th-TH/agent/overview.md:41` — `## ทำงานอย่างไร？` — [source]
- `th-TH/getting-started/presets.md:24` — `## วิธีเพิ่มพรีเซ็ต？` — [source]
- `th-TH/kimi-claw/tailscale-issue.md:18` — `## วิธีแก้ไข？` — [source]
- `th-TH/kimi-claw/tailscale-issue.md:28` — `## วิธีป้องกัน？` — [source]
- `th-TH/websites/overview.md:35` — `## วิธีใช้ Kimi Websites？` — [source]

Fullwidth `：` (replace with ASCII `:`):
- `th-TH/slides/overview.md:45` — `- Adaptive：การค้นคว้าเชิงลึก...` — use `Adaptive:` — [source]
- `th-TH/kimi-claw/conversation-limits.md:18` — `**วิธีแก้ไข：**` — use `**วิธีแก้ไข:**` — [source]

Fullwidth `｜` in SeoMeta title (replace with ASCII `|` or ` - `):
- `th-TH/getting-started/search.md:10` — `title="Agentic Search สำหรับคำแนะนำและคำตอบ｜ศูนย์ช่วยเหลือ Kimi"` — [source]

Fullwidth `（ ）` wrapping a markdown link URL (BREAKS the link — renders as literal text, not clickable):
- `th-TH/deep-research/use-cases.md:63` — `[ดูผลลัพธ์]（https://www.kimi.com/replay/19b36b81-...716b）` — replace fullwidth `（ ）` with ASCII `( )` so the link works. [source] (en-US:63 has the same bug).

## 4. Broken anchor / link

- **`th-TH/agent/features-and-limits.md:57` — CRITICAL** — `...ได้ที่ [เครดิต และการเรียกเก็บเงิน](/agent/เครดิต-and-billing)` — the link **path** was translated to Thai. en-US source is `[Credits & Billing](/agent/credits-and-billing)`. The route `/agent/เครดิต-and-billing` does not exist → dead link. Fix: restore path to `/agent/credits-and-billing` (note: en-US points to `credits-and-billing` although the actual file is `quota-and-billing.md` — verify the route, but it must NOT be Thai).
- `th-TH/kimi-code/cli-ides.md:102` — `[สิ่งที่ต้องเตรียม](#prerequisites)` — anchor `#prerequisites` derived from English heading, but the Thai heading is `## สิ่งที่ต้องเตรียม` (line 21), whose generated slug is Thai, not `prerequisites`. Likely broken in-page anchor. Fix: either add explicit `{#prerequisites}` to the heading or change link to the Thai slug. (Same pattern exists in en-US where the English heading naturally produces `#prerequisites`, so the link works there — translating the heading without pinning the anchor breaks it.)
- `th-TH/slides/stuck.md:51` — `[แนวทางการส่งความคิดเห็นเกี่ยวกับบั๊ก](#bug-feedback-guidelines)` — same issue: target heading `## แนวทางการส่งความคิดเห็นเกี่ยวกับบั๊ก` (line 81) generates a Thai slug, not `bug-feedback-guidelines`. Likely broken. Fix: pin `{#bug-feedback-guidelines}` on the heading or use the Thai slug.

## 5. Bilingual `English (中文)` leftovers

None found.

## 6. Glossary / terminology consistency — `credit` vs `เครดิต` (HIGH IMPACT)

Glossary `glossary/terms.yaml` (id `M2-002`, `M0-001`-style billing terms) defines `credit` with `translation_strategy: keep_original_with_note` and `case_sensitive: true` — i.e. keep the English word `credit`. The Thai files inconsistently transliterate it as `เครดิต` ~112 times (vs `credit` 66 times), frequently mixing both in one sentence. en-US uses lowercase `credit` throughout, so `เครดิต` is a translation defect, NOT source-inherited.

Representative offenders (fix all `เครดิต` → `credit`):
- `th-TH/membership/overview.md:17` — `ทุกแพ็กเกจมี **credit สองชุด**: Kimi Code ใช้ เครดิต แยก...` — mixes `credit` and `เครดิต` in one sentence.
- `th-TH/membership/overview.md:23,28,41` — table rows `เครดิต ของ Agent`, `เครดิต ของ Kimi Code`, and `credit สองชุด ... เครดิต`.
- `th-TH/membership/pricing.md:22,27,45` — same mixing (`credit` + `เครดิต`).
- `th-TH/membership/update-rules.md:11,17,21,28,29,32` — `credit` and `เครดิต` alternate within the same paragraphs.
- `th-TH/membership/account-query.md:2,10,14,20,30,34,38` — title/heading/body all `เครดิต`.
- `th-TH/agent/quota-and-billing.md:2,10,11,14,17,21,22,23,24,27,30,31,33,35,36,38,42,47,50,51,52` — pervasive `เครดิต` (note line 24 even writes `credit` and `เครดิต` together).
- `th-TH/agent/features-and-limits.md:57,63,94,96` — `เครดิต` (line 57 also breaks the link, see §4).
- `th-TH/agent/overview.md:65,70` — SeoMeta `description`/`title` use `เครดิต`.
- `th-TH/agent/FAQ-en.md:21,23,25,29,45` — `เครดิต`.
- `th-TH/agent/swarm.md:52`; `th-TH/kimi-code/benefits.md:23` (`credit` + `เครดิต` same line); `th-TH/kimi-code/faq.md:79,89,91`; `th-TH/kimi-code/cli-getting-started.md:304`.
- `th-TH/kimi-business/kimi-business.md:36,42,59,84,109`; `th-TH/kimi-business/faq.md:26`.
- `th-TH/kimi-api/api-troubleshooting.md:27,82`.
- `th-TH/deep-research/quota-deducted.md:2,10,14,20,21,23,25,29,41`.
- `th-TH/membership/_category.json:3,6`.

NOTE: `th-TH/kimi-api/billing-and-finance.md:31` `บัตรเครดิต/บัตรเดบิต` ("credit card / debit card") is a correct Thai word — NOT a violation; do not change.

Suggested fix: global replace standalone `เครดิต` → `credit` (preserving spacing), except inside `บัตรเครดิต` (credit card). Also align SeoMeta titles/descriptions and the `_category.json`.

## 7. Reversed semantics — deep-research 3.2%

No defect. `th-TH/deep-research/overview.md:48` reads `...และกรองจนเหลือเนื้อหาคุณภาพสูงสุด 3.2%` = "filters down to keep the highest-quality 3.2%". Matches en-US:27 "filters to top 3.2% highest-quality content". Semantics correct (selects/keeps the best 3.2%).

## 8. Naturalness

Skimmed ~10 articles (getting-started/overview, deep-research/overview, kimi-claw/overview, membership/overview, others/account-ban, agent/overview, slides/overview, websites/overview, kimi-api/overview, docs-and-sheets/overview). Thai prose is fluent, idiomatic, and reader-appropriate (consistent polite `คุณ` register, natural connectors `ด้วยตัวเอง`, `อย่างมืออาชีพ`, `ไม่กี่นาที`). No machine-translation artifacts worth flagging. The only readability friction is the `เครดิต`/`credit` mixing covered in §6 (jarring within a sentence) and the stray double-space around `เครดิต` tokens (e.g. `ใช้ เครดิต` with surrounding spaces) — cosmetic, resolved by the §6 fix.
