---
title: "模型選擇與比較"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="模型選擇與比較 - Kimi 說明中心"
  description="依能力、速度與價格，選擇合適的 Kimi API 模型。"
/>

# 模型選擇與比較

<Callout type="info">
依能力、速度與價格，選擇合適的 Kimi API 模型。
</Callout>

Kimi API 提供多款模型供開發者選用。
## 可用模型
請前往 [platform.moonshot.ai/docs/introduction](https://www.platform.moonshot.ai/docs/introduction) 查看完整模型清單與詳細規格。
選擇模型時，可從以下面向評估：
| 面向 | 考量重點 |
| --- | --- |
| **上下文長度** | 處理長文件時，選擇大上下文模型 |
| **回應速度** | 對延遲敏感的場景，適合使用輕量模型 |
| **生成品質** | 複雜推理與創意寫作，建議選擇高階模型 |
| **價格** | 依預算與用量，選擇具成本效益的模型 |

## 視覺模型
視覺模型支援圖片輸入，可用於圖片描述、OCR、圖表解讀等任務：

<Callout type="info">
- 每張圖片不論尺寸或解析度，皆按固定 **1,024 tokens** 計費
- 支援格式：JPEG、PNG、WebP 等
- 圖片可透過 URL 或 Base64 編碼傳入
</Callout>

## 目前尚未支援的能力

<Callout type="warning">
- **影片多模態**：尚不支援直接輸入影片
- **PPT 生成 API**：尚未透過 API 開放
- **Deep Research API**：尚未透過 API 開放
</Callout>

如需了解這些能力的最新進展，請關注平台公告。
