---
title: "API 价格"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API 价格 - Kimi 帮助中心"
  description="Kimi API 按 token 消耗计费，并根据不同模型和功能分别定价。"
/>

# API 价格

<Callout type="info">
Kimi API 按 token 消耗计费，并根据不同模型和功能分别定价。
</Callout>

## 计费基础

- **按 token 计费**：每次 API 调用会分别计算输入 token 和输出 token 的费用
- **token 单位**：1M = 1,000,000 tokens
- **按模型定价**：能力更强的模型，单 token 成本也更高——请根据你的使用场景选择最合适的模型

## 附加功能计费

| 功能 | 附加费用 |
| --- | --- |
| **网页搜索（Web Search）** | 每次调用 $0.004（与 token 消耗无关） |

## 上下文缓存

<Callout type="tip">
**上下文缓存（Context Caching）** 可用于缓存高频使用的上下文内容（例如系统提示词和参考文档）。命中缓存的 token 将按优惠费率计费，从而有效降低重复上下文带来的成本。
</Callout>

详细的上下文缓存（Context Caching）价格，请参考官方文档。

## 价格详情

如需查看完整的模型价格表和计费规则：

你可以访问 [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## 成本优化建议

<Callout type="tip">
- 合理设置 `max_tokens` 参数，避免生成不必要的长输出
- 对重复使用的系统提示词和上下文使用上下文缓存（Context Caching）
- 根据任务复杂度选择合适的模型——简单任务可使用轻量模型
- 精简提示词设计，尽量减少不必要的输入 token
</Callout>
