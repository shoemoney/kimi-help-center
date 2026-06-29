---
title: "API 定價"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API 定價 - Kimi 說明中心"
  description="Kimi API 依 token 用量計費，並依模型與功能採用不同定價。"
/>

# API 定價

<Callout type="info">
Kimi API 依 token 用量計費，並依模型與功能採用不同定價。
</Callout>

## 計費基本說明

- **按 token 計費**：每次 API 呼叫會分別計算輸入 token 與輸出 token 的費用
- **token 單位**：1M = 1,000,000 token
- **依模型定價**：能力越強的模型，單位 token 成本越高——請選擇最符合使用情境的模型

## 額外功能計費

| 功能 | 額外費用 |
| --- | --- |
| **Web Search** | 每次調用 $0.004（不受 token 用量影響） |

## 上下文快取

<Callout type="tip">
**上下文快取**可讓你快取常用的上下文內容（例如系統提示詞與參考文件）。命中快取的 token 會以優惠費率計費，有效降低重複上下文的成本。
</Callout>

上下文快取的詳細定價，請參閱官方文件。

## 定價詳情

完整的模型定價表與計費規則請見：

你可以前往 [platform.moonshot.ai/docs/pricing/chat](https://www.platform.moonshot.ai/docs/pricing/chat)

## 成本最佳化建議

<Callout type="tip">
- 合理設定 `max_tokens` 參數，避免產生不必要的過長輸出
- 對重複使用的系統提示詞與上下文使用上下文快取
- 依任務複雜度選擇合適模型——簡單任務可使用輕量模型
- 精簡提示詞設計，盡量減少不必要的輸入 token
</Callout>
