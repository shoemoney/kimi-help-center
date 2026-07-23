---
title: "模型選擇與效能比較"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: true
preview_content: "Kimi API 模型選擇指南：效能面向與 Vision 計費。"
---

<SeoMeta
  title="如何選擇合適的 Kimi API 模型？ - Kimi 說明中心"
  description="依據你的業務需求，選擇最適合的 Kimi API 模型。本文比較各模型的效能、價格與適用情境，協助你做出最佳選擇。"
/>

# 模型選擇與效能比較

Kimi API 提供多種模型供開發者選擇；不同模型在能力、速度與價格上各有側重。

## 可用模型

請前往 [platform.kimi.com/docs/introduction](https://platform.kimi.com/docs/introduction) 查看完整的模型清單與詳細參數。

選擇模型時，建議依下列面向評估：

- **上下文長度**：不同模型支援的最大上下文視窗不同；處理長文件時，需選擇大上下文模型。
- **回應速度**：輕量模型回應更快，適合對延遲敏感的情境。
- **生成品質**：高階模型在複雜推理、創作等任務上表現更好。
- **價格**：依預算與呼叫量，選擇性價比最高的模型。

## Vision 模型（圖片理解）

Vision 模型支援圖片輸入，可用於圖片描述、OCR、圖表解讀等情境：

- 每張圖片固定按 **1024 tokens** 計費，與圖片尺寸及解析度無關。
- 支援常見圖片格式（JPEG、PNG、WebP 等）。
- 圖片可透過 URL 或 Base64 編碼方式傳入。

## 目前不支援的能力

- **影片多模態**：暫不支援直接輸入與理解影片檔案。
- **PPT 生成 API**：PPT 生成功能暫未開放 API 介面。
- **Deep Research（深度研究） API**：Deep Research（深度研究）功能暫未開放 API 介面。

如需上述能力，請留意平台公告以取得最新消息。
