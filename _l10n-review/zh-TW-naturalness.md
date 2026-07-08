# zh-TW 自然度 / 機翻痕跡審查 (Naturalness Review)

**Locale:** `zh-TW` (Traditional Chinese, Taiwan)
**Scope:** NATURALNESS / machine-translation traces only. Simplified-char leftovers, punctuation, links, and 幻燈片→簡報 / 點擊 are OUT of scope (already handled) and NOT reported here.

## Overall Fluency Verdict

**Score: 4 / 5** — Generally fluent and reads well. The prose is mostly idiomatic Taiwan Mandarin, sentence rhythm is natural, and most UI/technical terms are correctly localized (呼叫, 最佳化 in some files, 平行 in some files, 佇列, 疑難排解, 額度). The main drag on the score is a set of **recurring Mainland (大陸用語) vocabulary items** that leak through inconsistently — the same concept is sometimes rendered the TW way and sometimes the Mainland way, even within a single file. A handful of English calques (notably 技術深潛) and one or two literal renderings also appear. No meaning-changing mistranslations were found in the sample.

## Counts by Severity

| Severity | Count | Nature |
|----------|-------|--------|
| High (jarring calque / clearly wrong register) | 2 | 技術深潛 calque; 大模型 slang |
| Medium (Mainland vocab a TW reader wouldn't use) | 6 patterns | 並行, 優化, 調用, 定位, 編程, 排查 |
| Low (minor stiffness / word choice / duplicated word) | 4 | 列印摘要, 水平擴展, 免費額度額度, 通過 (by-means-of) |

Note: the Medium items are *patterns* that recur across many files (see line lists), so the effective instance count is ~30+.

---

## Biggest Recurring MT Pattern

**Inconsistent Mainland↔Taiwan vocabulary for the same concept**, most visibly `並行` (Mainland) vs `平行` (Taiwan) for "parallel", and `優化` (Mainland) vs `最佳化` (Taiwan) for "optimize". The translation memory clearly contains both, and picks the Mainland variant in some segments and the TW variant in others — sometimes in adjacent lines of the same table.

---

## Findings by Severity

### HIGH

- `agent/swarm.md:111` — `## 技術深潛` — literal calque of English "Technical deep dive" (en-US: "## Technical deep dive"). 深潛 = literally "deep diving/submerging"; no TW reader parses this as a section heading. → **技術深入解析** / **技術詳解** / **深入技術原理**.
- `slides/overview.md:17` — `由 K2.6 大模型驅動` — 大模型 is Mainland tech slang for LLM. TW readers use 大型語言模型 or 大型模型. → **由 K2.6 大型語言模型驅動** (or just **由 K2.6 模型驅動**, matching agent/overview.md which says 由 K2.6 模型驅動).

### MEDIUM (Mainland vocabulary / collocations)

- **並行 → 平行** (parallel). Mainland uses 並行; Taiwan overwhelmingly uses 平行 (esp. 平行處理/平行任務). Note the same repo already uses 平行 correctly in `agent/overview.md:33` (平行協作) and `membership/pricing.md:26` (平行子任務), and even mixes both within `kimi-business.md` (line 39 「Agent 並行任務」 vs line 41 「4 個平行子任務」 — jarring inline inconsistency).
  - `agent/swarm.md:17, 31, 57, 68, 124, 128` (pervasive in this file)
  - `agent/swarm.md:11` (SeoMeta description)
  - `kimi-business/kimi-business.md:39`
  - `kimi-code/membership-guide.md:26`, `kimi-api/api-troubleshooting.md:25,73`, `kimi-api/rate-limits.md:11,16,35`
  - `kimi-claw/group-claw.md:220` (「你需要專業分工並行」)
  - → replace 並行 with **平行** throughout for consistency with the rest of the corpus.
- **優化 → 最佳化** (optimize). Mainland 優化 vs TW 最佳化. Note `websites/overview.md:107,124` already uses 最佳化 correctly — so this is again inconsistent.
  - `agent/swarm.md:133` (流程優化 → **流程最佳化**)
  - `slides/overview.md:17` (自動優化版面 → 自動**最佳化**版面), `:37` (彈性優化 → 彈性**最佳化**), `:39` (優化視覺呈現 → **最佳化**視覺呈現)
  - `deep-research/use-cases.md:23` (優化方向 → **最佳化**方向)
- **調用 → 呼叫** (call/invoke). TW standard is 呼叫; the repo uses 呼叫 correctly almost everywhere (e.g. deep-research/overview.md:30 工具呼叫), so 調用 is a stray Mainland leak.
  - `agent/overview.md:43` (工具調用 → 工具**呼叫**)
  - `kimi-claw/concepts.md:25` (可調用的能力 → 可**呼叫**的能力)
  - `kimi-api/pricing.md:30` (每次調用 → 每次**呼叫**)
- **定位 (問題/根本原因) → 找出 / 釐清 / 找到** ("pinpoint/locate"). 定位 in the sense of "pinpoint the problem" is Mainland tech-support jargon; TW readers expect 找出/找到/釐清. (定位 meaning physical positioning is fine, but all instances here are the jargon sense.)
  - `kimi-claw/kimi-claw-android-guide.md:514` (快速定位問題 → 快速**找出問題**), `:544` (同)
  - `slides/stuck.md:83` (更快定位問題 → 更快**找出問題**)
  - `kimi-api/error-codes.md:35` (快速定位問題 → 快速**找出問題**)
  - `kimi-code/cli-use-cases.md:44` (自動定位根本原因 → 自動**找出根本原因**)
  - `docs-and-sheets/docs-cases.md:22` (精準定位…段落 → 精準**找出**…段落) — borderline OK but 找出 more natural
- **編程 → 程式設計 / 寫程式** (programming). 編程 is Mainland; TW uses 程式設計 / 寫程式. (The repo elsewhere consistently uses 程式碼/程式.)
  - `websites/overview.md:18` (氛圍式編程 → 氛圍式**程式設計**, i.e. 「Vibe Coding（氛圍式程式設計）」)
  - `websites/overview.md:68` (視覺編程能力 → 視覺**程式設計**能力)
- **排查 → 排除 / 檢查 / 逐步檢查** (troubleshoot). 排查 is Mainland; TW uses 排除故障 / 逐步檢查 / 檢查. (The repo already uses 疑難排解 as headings, so 排查 in body text is inconsistent register.)
  - `others/chat-issues.md:11` (排查方案 → **排除方案** / **檢查步驟**)
  - `others/phone-profile.md:23` (排查步驟 → **檢查步驟**)
  - `slides/stuck.md:17` (依照以下步驟排查 → 依照以下步驟**逐步檢查/排除**)
  - `kimi-webbridge/FAQ.md:75` (依照以下步驟排查 → 同上)

### LOW (minor stiffness / word choice)

- `kimi-code/faq.md:50` — `遷移結束後會列印摘要` — 列印 = "print (to paper)"; for console output TW writers say 顯示. → **遷移結束後會顯示摘要**.
- `agent/swarm.md:16, 17` — `「水平擴展」架構` — 擴展 is understandable but TW prefers 擴充 (橫向擴充 / 水平擴充). → **「水平擴充」架構** (or 橫向擴充).
- `slides/overview.md:43` — `每月提供免費額度額度` — duplicated word 額度額度 (likely a merge artifact, but a naturalness/typo issue). → **每月提供免費額度**.
- `getting-started/search.md:56` — `通過 Kimi 嚴格篩選的優質來源` — here 通過 reads as "by means of Kimi's screening"; TW prefers 透過 for the by-means-of sense (通過 in TW leans toward "pass a test/through a passage"). Borderline. → 若語意為「經由篩選」可保留「通過…篩選」；若語意為「透過 Kimi 的機制」宜改 **透過**. Also see 通過 used for "by means of" at `kimi-api/account-and-auth.md:59` (通過驗證的使用者 — this one is fine, = "who passed verification").

---

## Articles Read (20, across all 14 categories)

1. getting-started/overview.md
2. getting-started/agentic-chat.md
3. getting-started/search.md
4. getting-started/memory-tips.md
5. kimi-claw/kimi-claw-android-guide.md (longest guide, 545 lines)
6. kimi-claw/group-claw.md
7. kimi-claw/troubleshooting.md
8. kimi-code/cli-getting-started.md
9. kimi-code/faq.md
10. agent/swarm.md
11. agent/overview.md
12. deep-research/use-cases.md
13. deep-research/overview.md
14. docs-and-sheets/docs-cases.md
15. slides/overview.md
16. others/chat-issues.md
17. kimi-api/overview.md
18. websites/overview.md
19. kimi-business/kimi-business.md
20. kimi-webbridge/kimi-webbridge.md

Plus corpus-wide grep sweeps (並行, 優化, 調用, 定位, 編程, 排查, 大模型, 深潛, 視頻/質量/信息/網絡/默認/軟件 etc.) to confirm pattern frequency and catch instances outside the read sample.
