---
title: "模型能力"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="模型能力 - Kimi 說明中心"
  description="以下是關於 Kimi API 模型能力的常見問題。"
/>

# 模型能力

以下是關於 Kimi API 模型能力的常見問題。

## 支援 JSON 模式嗎？

支援。Kimi API 提供 JSON 模式，可將模型輸出限制為有效的 JSON。使用方式如下：

- 在請求中將 `response_format` 參數設為 `{"type": "json_object"}`。
- 同時在提示詞中明確要求模型傳回 JSON，並說明預期的結構。
- 在 JSON 模式下，模型保證會輸出可解析的 JSON 字串。

## 支援模型微調嗎？

Kimi API **目前不支援** 使用者自行發起模型微調。若有客製化模型需求，請透過 [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) 聯絡業務團隊，了解企業客製化方案。

## 支援 OCR 嗎？

Kimi API 的視覺模型具備影像理解能力，可辨識圖片中的文字，達到類似 OCR 的效果：

- 支援辨識英文、中文及多種其他語言的文字。
- 可辨識印刷文字，以及部分手寫文字。
- 每張圖片皆按固定費率計費，計為 1,024 token。
- 除了純文字辨識外，模型也能解讀圖片中的表格、圖表及其他結構化內容。

## 支援 TTS（文字轉語音）和 ASR（語音辨識）嗎？

Kimi API **目前不支援** TTS 或 ASR。若需要語音相關能力，可考慮將第三方語音服務與 Kimi API 搭配使用。未來功能更新請留意平台公告。
