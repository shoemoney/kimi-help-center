---
title: "Credit（用量額度）更新與使用規則"
slug: "update-rules"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Credit（用量額度）更新與使用規則 - Kimi 說明中心"
  description="所有 Kimi 會員功能共用同一個 credit（用量額度）池，並依實際使用量消耗。"
/>

# Credit（用量額度）更新與使用規則

<Callout type="info">
所有 Kimi 會員功能（Agent、Deep Research、Slides、Docs、Sheets、Kimi Code、Kimi Work、Kimi Claw 等）共用同一個 credit（用量額度）池，並依實際使用量消耗。
</Callout>

## 共用 credit（用量額度）池如何運作？
Kimi 會員功能共用一個可在各處使用的 credit（用量額度）池。Agent 功能與其他 Kimi 功能都會從中扣除：
| 功能 | 說明 |
|---------|-------------|
| **Agent 任務** | 網站、文件、簡報、試算表、Deep Research |
| **Kimi Code** | 面向開發者的 AI 程式碼助理 |
| **Kimi Work** | Kimi 桌面應用程式 |
| **Kimi Claw** | 你的個人雲端部署 AI 助理 |
| **其他功能** | 圖片生成等更多功能 |

> **K2.6**：在 Chat 中，K2.6 同樣會消耗會員 credit（用量額度），計費方式與在 Kimi Work 內作為 K2.6 Agent 使用時相同。
> **Kimi Code**：會從同一個共用 credit（用量額度）池扣除，但有僅適用於 Kimi Code 的專屬 5 小時／每週 rate limit（速率限制）。

<Callout type="tip">
這表示你可以在共用池中自由分配 credit（用量額度）：這個月多用於研究，下個月多用於文件。
</Callout>

## Credit（用量額度）如何計算？
Credit（用量額度）會依任務處理的 token（詞元）數量消耗。輸入與輸出越長，使用的 token（詞元）就越多。

<Callout type="info">
**免費方案使用者的粗略參考**：
- 生成一份簡單簡報 ≈ 1–2% credit（用量額度）
- 執行一份 Deep Research 報告 ≈ 5–10%
- 撰寫一段程式碼片段 ≈ 0.5–2%
較高級別方案會提供相應更大的 credit（用量額度）池。
</Callout>

## Credit（用量額度）刷新規則
| 規則 | 說明 |
|------|-------------|
| **週期** | 月訂閱與年訂閱使用者都會按**每月**週期獲得 credit（用量額度） |
| **到期** | 未使用的 credit（用量額度）會在每個週期結束時到期，不會滾存，也不能折換現金 |
| **限制** | 個別任務可能受 UI 中顯示的 5 小時與 7 天 concurrency（並行）限制約束 |

## Credit（用量額度）用完時
- 已在進行中的任務會正常完成
- 新任務會顯示「credit（用量額度）不足」提示

**你可以選擇**：

- 等待下一個帳單週期刷新 credit（用量額度）
- 升級至更高級別方案，以獲得更大的每月可用額度
## Credit（用量額度）到底如何刷新？
1. **依週期刷新** — Credit（用量額度）會在你的訂閱週年日期刷新，而不是按日曆月份刷新
2. **不滾存** — 剩餘 credit（用量額度）會歸零，然後重新發放完整額度
3. **範例** — 如果你在 12 月 1 日下午 3:00 訂閱，credit（用量額度）會在 1 月 1 日下午 3:00 刷新

<Callout type="info">
**系統錯誤**：如果任務因系統問題失敗，請使用 👎 按鈕回報並申請退還 credit（用量額度）。
</Callout>
