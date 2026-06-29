---
title: "模型能力"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="模型能力 - Kimi 帮助中心"
  description="以下是关于 Kimi API 模型能力的常见问题。"
/>

# 模型能力

以下是关于 Kimi API 模型能力的常见问题。

## 是否支持 JSON 模式？

支持。Kimi API 提供 JSON Mode，可将模型输出约束为有效的 JSON。用法如下：

- 在请求中将 `response_format` 参数设置为 `{"type": "json_object"}`。
- 同时在提示词中明确要求模型返回 JSON，并说明预期结构。
- 在 JSON Mode 下，模型会保证输出可解析的 JSON 字符串。

## 是否支持模型微调？

Kimi API **目前不支持**用户自行发起模型微调。如有定制模型需求，请通过 [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) 联系销售团队，了解企业级定制方案。

## 是否支持 OCR？

Kimi API 的 Vision 模型具备图像理解能力，可以识别图像中的文字，实现类似 OCR 的效果：

- 支持识别英语、中文及多种其他语言文本。
- 可识别印刷体文字及部分手写文字。
- 每张图片按固定 1,024 tokens 计费。
- 除纯文本识别外，模型还可解读图像中的表格、图表及其他结构化内容。

## 是否支持 TTS（文本转语音）和 ASR（语音识别）？

Kimi API **目前不支持** TTS 或 ASR。如需语音相关能力，可考虑将第三方语音服务与 Kimi API 结合使用。后续功能更新请关注平台公告。
