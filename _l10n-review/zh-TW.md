# zh-TW (Traditional Chinese, Taiwan) Localization Audit

**Scope:** All 90 `zh-TW/**/*.md` files. Machine-translated from `en-US/`. Compared against `en-US/` and `zh-CN/` (note: zh-CN uses `ppt/` where en-US/zh-TW use `slides/`).

## Counts

| Category | Count | Severity |
|---|---|---|
| 1. Simplified-Chinese leftovers | 1 | low (filename only) |
| 2. Untranslated English prose | 0 | — |
| 3. Taiwan vs Mainland terminology | 5 | low–medium |
| 4. Broken markdown links (fullwidth paren) | 1 | high [source] |
| 5. Broken anchor links | 2 | high |
| 6. Reversed semantics ("top 3.2%") | 0 | — (correct) |
| 7. Naturalness / consistency | 2 | low |

## Verdict

This is a **high-quality localization**. Core Taiwan terminology is applied consistently and correctly throughout (軟體/網路/登入/螢幕/影片/資訊/品質/預設/程式 — zero Mainland counterparts found). Prose reads naturally. The only **must-fix** issues are 2 broken anchor links (English slugs left under translated headings) and 1 source-inherited broken link with fullwidth parens. Everything else is minor polish.

---

## 1. Simplified-Chinese leftovers

- `zh-TW/kimi-webbridge/kimi-webbridge.md:23` — video URL `H265_LoRes_WebBridge_用户教程_EN.mp4` contains Simplified `用户` (should be `用戶`). **[source]** — identical in `en-US:23` and `zh-CN:23` (which uses `_CN.mp4`). It is a media filename, so renaming requires the asset to be renamed too; flag but low priority.

No Simplified leftovers in any body text. (`默` in `靜默` and `户` above are the only `户`-family hits; `靜默` is correct Traditional.)

## 2. Untranslated English prose

None. All English-only lines are code blocks, command snippets, image `src` paths, or URLs — all legitimately untranslated.

## 3. Taiwan vs Mainland terminology

- `zh-TW/slides/overview.md` (幻燈片, 41 occurrences repo-wide) — Taiwan standard for "slides/presentation" is **投影片** or **簡報**; 幻燈片 is Mainland-leaning. The docs already use 簡報 38× (good) but inconsistently mix in 幻燈片 41×. Suggestion: standardize on 簡報/投影片.
- `zh-TW/agent/what-are-skills-en.md:74` — `事件窗口` (event window) uses Mainland 窗口 → Taiwan **事件視窗** or **事件期間**. (Only `窗口` occurrence in the corpus; everywhere else uses 視窗.)
- `zh-TW/slides/overview.md:40,42` & `zh-TW/kimi-claw/kimi-claw-android-guide.md:302` — `在線` appears; lines 40/42 are actually `在線上`(=線上, fine), but `kimi-claw-android-guide.md:302` "多頻道同時在線" should be **同時上線** / **同時在線上** for TW naturalness.
- Note on `文件`: usage is **correct** — it is consistently used for "document/documentation" (a valid Taiwan term) while "file" is correctly rendered as `檔案`. No action needed.
- Note on `子程序` (cli-ides.md) for "subprocess" — acceptable; not flagged.

## 4. Broken markdown links (fullwidth parentheses)

- `zh-TW/deep-research/use-cases.md:63` — `[查看結果]（https://www.kimi.com/replay/19b36b81-...）` uses fullwidth `（ ）` around the URL, which **breaks the markdown link** (renders as literal text). **[source]** — `en-US:63` has the identical `]（...）`. Fix: use halfwidth `[查看結果](https://www.kimi.com/replay/19b36b81-4492-83de-8000-00004525716b)`. (Should also be fixed upstream in en-US.)

## 5. Broken anchor links

Both stem from translating the heading text while leaving the original English anchor slug. With `extract_headings`, the anchor is derived from the (now Chinese) heading, so the link no longer resolves.

- `zh-TW/kimi-code/cli-ides.md:102` — link `[前置條件](#prerequisites)` but the heading is `## 前置條件` (line 21) → anchor `#前置條件`, not `#prerequisites`. **Broken.** Fix: `(#前置條件)`. (zh-CN got this right: `[前置准备](#前置准备)`.)
- `zh-TW/slides/stuck.md:51` — link `[問題回饋指南](#bug-feedback-guidelines)` but the heading is `## 問題回饋指南` (line 81) → anchor `#問題回饋指南`, not `#bug-feedback-guidelines`. **Broken.** Fix: `(#問題回饋指南)`. (en-US works because heading "Bug Feedback Guidelines" → `#bug-feedback-guidelines`.)

## 6. Reversed semantics — "top 3.2%"

- `zh-TW/deep-research/overview.md:28` — "規劃約 74 個關鍵字，發現 206 個 URL，篩選出品質最高的前 3.2% 內容". This is **correct**: it clearly means selecting/keeping the best 3.2%. Matches en-US "filters to top 3.2% highest-quality content". No issue.

## 7. Naturalness / consistency

- Click-verb inconsistency: `點擊` (93×) vs `點選` (33×) vs `按一下` (2×). All are understood in Taiwan, but `點擊` is Mainland-leaning; TW UI text prefers `點選` / `按一下`. Cosmetic; consider standardizing.
- `zh-TW/kimi-claw/concepts.md:11` — `<SeoMeta description="圖片：截圖 30" />`. The Traditional conversion (截圖) is **correct**, but the description itself is a meaningless image-alt placeholder ("Image: screenshot 30"). **[source]** — en-US:11 has `description="Image: 截图30"`. Should be a real page summary, e.g. `description="Kimi Claw 的核心概念與終端機使用說明"`. (Source defect; recommend fixing upstream too.)

Overall prose skimmed across getting-started, deep-research, membership, kimi-code, slides articles reads fluently and idiomatically for Taiwan readers.
