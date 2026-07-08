# th-TH Naturalness / MT-Trace Review

**Locale:** `th-TH` (machine-translated from `en-US/`)
**Reviewer role:** Native Thai editor — naturalness / MT-trace only (terminology "เครดิต", punctuation, links out of scope)
**Date:** 2026-06-30

---

## Overall fluency verdict: **4.5 / 5**

This is a strong, largely publishable Thai localization. The prose reads like it was written (or heavily post-edited) by a fluent Thai speaker, not raw MT. Word-breaking and inter-word spacing are handled correctly throughout; classifiers are generally present and correct (ตัว for agents/bots, ชิ้น/รายการ for items, ครั้ง for counts, ฉบับ/หน้า for documents); connective particles (โดย, ซึ่ง, พร้อม, เพื่อ) are idiomatic; and the register is a consistent, natural instructional tone (คุณ / -ครับ-free neutral). English sentence structure is rarely forced onto Thai — sentences are re-ordered into natural Thai head-modifier order.

The very small number of issues are **stylistic polish**, not comprehension-breaking MT errors. No meaning-changing mistranslations were found in the sample. The single largest recurring artifact is **truncated / prompt-fragment `SeoMeta description` fields** auto-derived from body text, which is a content-generation pattern rather than a translation-fluency defect, but it surfaces as unnatural Thai in metadata.

### Counts by severity
- **Critical (meaning-changing):** 0
- **Major (clearly unnatural / calque a reader would notice):** 2
- **Minor (polish / slight stiffness / metadata artifacts):** 6
- **Total findings:** 8

---

## Findings

### Major

1. **`getting-started/search.md:31`** — "Web Search (Auto/Off) **ทลายกรอบ**เรื่องความสดใหม่ของข้อมูล"
   - *Why unnatural:* "ทลายกรอบ" (smash/break the frame) is an overly literary calque of English "breaks the barrier of data freshness." It reads as marketing-translationese; native tech writing would not use this dramatic verb here.
   - *Natural rewrite:* "Web Search (Auto/Off) ช่วยให้ Kimi เข้าถึงข้อมูลล่าสุดได้แบบเรียลไทม์ ทั้งที่ทันสมัย น่าเชื่อถือ และตรวจสอบย้อนกลับได้" (drop the "smash the barrier" metaphor entirely).

2. **`getting-started/search.md:50`** — "งานวิจัยเชิงวิชาชีพ (ข้อมูลคู่แข่ง **พรมแดนความรู้ทางวิชาการ** มาตรฐานอุตสาหกรรม)"
   - *Why unnatural:* "พรมแดนความรู้" is a literal calque of "knowledge frontier(s)." Thai readers parse "พรมแดน" as a geographic border; the intended sense (cutting-edge / latest academic developments) is lost and sounds odd in a parenthetical list.
   - *Natural rewrite:* "…ข้อมูลคู่แข่ง ความรู้วิชาการล่าสุด มาตรฐานอุตสาหกรรม" or "องค์ความรู้แนวหน้าทางวิชาการ".

### Minor

3. **`deep-research/use-cases.md:11`** (`SeoMeta description`) — "ผมเป็นนักวิเคราะห์หลักทรัพย์มืออาชีพ กรุณาช่วยวิเคราะห์เชิงลึกเกี่ยวกับ Pop Mart…"
   - *Why unnatural:* The meta description is a raw first-person **prompt fragment** (male pronoun ผม), cut off with "…". As page metadata this reads as a stray sentence, not a description. Systemic pattern (auto-extracted from body). Also inconsistent voice — the rest of the doc uses neutral คุณ.
   - *Natural rewrite:* Author a proper description, e.g. "รวมกรณีการใช้งานและคลังพรอมต์สำหรับ Deep Research ครอบคลุมการวิจัยอุตสาหกรรม การวิเคราะห์คู่แข่ง การตรวจสอบการลงทุน และอื่น ๆ".

4. **`getting-started/memory-tips.md:11`** (`SeoMeta description`) — "ฉันชื่อ/ชื่อเล่น ตอนนี้อยู่ที่เมือง มีพื้นฐานด้านอาชีพ/บทบาท และเชี่ยวชาญในด้าน 1 กับด้าน 2"
   - *Why unnatural:* Same pattern — the meta description is a filled-in prompt template fragment with placeholder-style phrasing ("ด้าน 1 กับด้าน 2"). Not a natural page description.
   - *Natural rewrite:* "เคล็ดลับการตั้งค่าและใช้ฟีเจอร์ Memory ของ Kimi เพื่อให้จดจำตัวตน ความชอบ และรูปแบบผลลัพธ์ที่คุณต้องการ".

5. **`others/account-ban.md:11`** & **`deep-research/stuck.md:11`** (`SeoMeta description`) — descriptions truncated mid-clause with "…" ("…ระงับ/โอนบัญ…", "…ไม่ได้หมายความว่างานถูกหยุดชะงัก…").
   - *Why unnatural:* Auto-truncated body sentences used as metadata; the ellipsis + mid-word cut ("บัญ…") reads broken in Thai. Systemic across several files.
   - *Natural rewrite:* Provide standalone one-line descriptions rather than truncated body prose.

6. **`kimi-webbridge/FAQ.md:57`** — "Kimi WebBridge รองรับระบบปฏิบัติการ Windows และสามารถรันคำสั่งติดตั้งในสภาพแวดล้อม Linux ได้"
   - *Why:* Logically odd (Windows heading, then "can run in a Linux environment"). **Confirmed faithful to the en-US source (same oddity at en-US/kimi-webbridge/FAQ.md:57)** — NOT an MT trace; flagged only so the source can be fixed upstream. Thai rendering itself is fine.

7. **`getting-started/prompt basics.md:19`** — "พรอมต์ที่ชัดเจนและเฉพาะเจาะจงมักนำไปสู่คำตอบที่แม่นยำและมีคุณค่ามากกว่า**เสมอ**"
   - *Why slightly stiff:* "มัก…เสมอ" pairs a hedge (มัก = usually/tends to) with an absolute (เสมอ = always) in the same clause — a small logical redundancy inherited from "consistently … more."
   - *Natural rewrite:* drop เสมอ → "…มักนำไปสู่คำตอบที่แม่นยำและมีคุณค่ามากกว่า" or drop มัก → "…ให้คำตอบที่แม่นยำและมีคุณค่ามากกว่าเสมอ".

8. **`agent/swarm.md:113`** — heading "สถาปัตยกรรมหลัก: **ผู้บัญชาการ + ผู้เชี่ยวชาญ**" vs body which elsewhere renders Orchestrator as **ผู้ควบคุม** (lines 31, 115, 120, 133, 137).
   - *Why:* Internal inconsistency — the same role is called ผู้บัญชาการ / ผู้ควบคุม / โค้ช across the article (partly intentional metaphor, but the heading term diverges from the running term). Minor consistency polish, reads fine individually.
   - *Natural rewrite:* Standardize on ผู้ควบคุม (Orchestrator) for the role label, keeping โค้ช/ผู้บัญชาการ only inside the explicit sports/command metaphor.

---

## Notes on strengths (why the score is high)
- Correct Thai spacing around Latin product names and code tokens (`kimi migrate`, MCP, API key) — no missing/extra spaces.
- Idiomatic re-ordering of English relative clauses into Thai ที่/ซึ่ง constructions rather than word-for-word.
- FAQ question headings phrased as natural spoken Thai questions ("ทำไม…?", "…ได้หรือไม่?", "ควรทำอย่างไรหาก…?") rather than stilted literal renderings.
- Long Android guide (545 lines) and group-chat guide stay natural and consistent throughout — no drift in later sections.
- Callout/table/tip prose is as fluent as the main body (a common MT weak spot, handled well here).

---

## Articles read (21)
1. getting-started/overview.md
2. getting-started/prompt basics.md
3. getting-started/search.md
4. getting-started/memory-tips.md
5. kimi-claw/kimi-claw-android-guide.md (longest, 545 lines)
6. kimi-claw/group-claw.md
7. kimi-claw/troubleshooting.md
8. kimi-code/faq.md
9. kimi-code/cli-getting-started.md
10. deep-research/overview.md
11. deep-research/use-cases.md
12. deep-research/stuck.md
13. kimi-webbridge/FAQ.md
14. kimi-api/overview.md
15. membership/overview.md
16. others/chat-issues.md
17. others/account-ban.md
18. agent/overview.md
19. agent/swarm.md
20. slides/adaptive-vs-visual.md
21. slides/stuck.md
22. kimi-business/faq.md
23. docs-and-sheets/overview.md

Categories covered: getting-started, kimi-claw, kimi-code, deep-research, kimi-webbridge, kimi-api, membership, others, agent, slides, kimi-business, docs-and-sheets (all 12).
