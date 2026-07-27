---
title: "API 计费说明"
slug: "api-pricing"
order: 3
extract_headings: true
preview: true
preview_content: "Kimi API 的计费逻辑、Token 价格与成本优化建议。"
---

<SeoMeta
  title="Kimi API 定价与计费说明 - Kimi 帮助中心"
  description="查看 Kimi API 各模型的调用价格、Token 计费规则与账单说明。了解输入/输出 Token 定价，合理预估 API 使用成本。"
/>
# API 计费说明

Kimi API 按 token 用量计费，不同模型与功能的价格各不相同。

## 计费基础

- **按 token 计费**：每次 API 调用会分别按输入 token 和输出 token 计费。
- **token 单位**：1M = 1,000,000 tokens。
- **模型价格差异**：能力更强的模型单价通常更高，请根据业务需求选择合适的模型。

## 附加功能计费

- **联网搜索**：每次调用联网搜索功能将额外收取 **¥0.03**，该费用独立于 token 用量。

## Context Caching

Context Caching 可用于缓存常用上下文内容（如系统提示词、参考文档等）。命中缓存的 token 将按优惠价格计费，从而有效降低重复上下文的使用成本。

详细的 Context Caching 定价请参考官方文档。

## 计费详情

完整的模型价格表和计费规则，请访问：

[https://platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## 费用优化建议

- 合理设置 `max_tokens` 参数，避免生成过长且无用的内容。
- 使用 Context Caching 缓存重复的系统提示词和上下文。
- 根据任务复杂度选择合适的模型；简单任务使用轻量模型即可。
- 精简 prompt 设计，减少不必要的输入 token。
