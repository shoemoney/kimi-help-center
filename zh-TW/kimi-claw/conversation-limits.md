---
title: "對話限制"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="對話限制 - Kimi 說明中心"
  description="當對話上下文過長，超出模型的 token 上限時，Kimi Claw 可能會停止回應或傳回錯誤。"
/>

# 對話限制

當對話上下文過長，超出模型的 token 上限時，Kimi Claw 可能會停止回應或傳回錯誤。

**如何修正：**

- 傳送 `/new` 以開始新的對話，並清除目前上下文。
- 如果執行 `/new` 後錯誤仍然存在，可能是載入記憶體的技能過多。請嘗試：
  - `/skills` — 檢視已安裝的技能，並解除安裝不需要的項目。
  - `/compact` — 壓縮目前上下文以釋放空間。
  - `/reset` — 作為最後手段，完全重設 Kimi Claw。

## 達到 API rate limit 了嗎？

這表示你已達到請求頻率上限。請稍候片刻再試一次。

**查看你的 quota 和 rate limit：**

1. 前往 [kimi.com/code](https://kimi.com/code)。
2. 開啟 **主控台**。
3. 點選 **查看 Quota 與 Rate Limit**，即可查看目前用量與上限。

如果你經常達到 rate limit，可以考慮拉開任務間隔，或升級到更高的會員方案以提升處理量。
