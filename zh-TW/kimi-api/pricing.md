---
title: "API 計費說明"
slug: "api-pricing"
order: 3
extract_headings: true
preview: true
preview_content: "Kimi API 計費邏輯、Token 價格與成本最佳化建議。"
---

<SeoMeta
  title="Kimi API 定價與計費說明 - Kimi 說明中心"
  description="查看 Kimi API 各模型的呼叫價格、Token 計費規則與帳單說明。瞭解輸入／輸出 Token 定價，合理預估 API 使用成本。"
/>
# API 計費說明

Kimi API 依 token 消耗量計費，不同模型與功能的價格會有所差異。

## 計費基礎

- **按 token 計費**：每次 API 呼叫會分別依輸入 token 與輸出 token 計費。
- **token 單位**：1M = 1,000,000 tokens。
- **不同模型價格不同**：能力越高的模型單價越高，請依業務需求選擇合適的模型。

## 附加功能計費

- **聯網搜尋**：每次呼叫聯網搜尋功能會額外收費 **¥0.03**，獨立於 token 消耗計算。

## Context Caching

Context Caching 功能可讓你快取常用的上下文內容（如系統提示詞、參考文件等），快取命中的部分 token 將以優惠價格計費，有效降低重複上下文的使用成本。

Context Caching 的詳細定價請參考官方文件。

## 計費詳情

完整的模型價格表與計費規則，請造訪：

[https://platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## 成本最佳化建議

- 合理設定 `max_tokens` 參數，避免生成過長且無用的內容。
- 使用 Context Caching 快取重複的系統提示詞與上下文。
- 依任務複雜度選擇合適的模型，簡單任務使用輕量模型即可。
- 精簡 prompt 設計，減少不必要的輸入 token。
