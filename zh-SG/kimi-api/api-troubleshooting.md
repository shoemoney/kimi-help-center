---
title: "API 故障排查"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API 故障排查 - Kimi 帮助中心"
  description="面向使用 Kimi API 的开发者，汇总常见问题及解决方法。"
/>

# API 故障排查

<Callout type="info">
面向使用 Kimi API 的开发者，汇总常见问题及解决方法。
</Callout>

## 如何处理 429 速率限制错误？

429 错误表示你的请求频率已超过当前账号的速率限制。可按以下方式处理：

- 实现指数退避重试策略（重试前依次等待 1s、2s、4s……）。
- 通过队列机制控制并发请求数量。
- 提高累计充值金额，以升级速率限制等级。
- 如需更高配额，请联系销售团队。

## 如何处理 401 认证错误？

401 错误表示 API Key 认证失败。请检查以下事项：

- 确认 API Key 已正确复制（注意首尾是否有空格）。
- 核对请求头格式是否为 `Authorization: Bearer <your-api-key>`。
- 确认 API Key 未被删除或停用——可在控制台中检查。
- 确保你没有使用其他平台的密钥（Kimi API Key 以 `sk-` 开头）。

<Callout type="warning">
**API Key 格式**：Kimi API Key 以 `sk-` 开头。请确保使用正确的密钥格式。
</Callout>

## 文件上传会收费吗？

文件上传本身免费。不过，当你在对话中引用已上传文件时，文件内容会被解析为 token，并按输入 token 计费。文件越大，产生的 token 通常越多。

## 如何处理 403 余额不足错误？

403 错误通常表示账号余额不足。你可以在控制台充值，资金会立即到账。也可以使用余额查询 API 查看当前余额。

## 响应被截断怎么办？

如果 API 响应不完整或被截断：

- 检查 `max_tokens` 参数是否设置过低，并按需调高。
- 查看响应中的 `finish_reason` 字段：`length` 表示输出因 token 限制而被截断；`stop` 表示已正常完成。
- 对于长文本生成，建议将请求拆分为多个片段。

<Callout type="tip">
**检查 `finish_reason`**：`length` = 已截断，`stop` = 正常完成。
</Callout>

## 可以通过文件 API 上传图片吗？

可以。文件上传 API 支持图片文件。上传后，你可以在对话中引用这些图片。使用视觉模型时，也可以通过 URL 或 Base64 编码在消息中直接传入图片。

## 网页搜索的信息来源？

Kimi API 的网页搜索功能会实时从互联网检索公开可用的信息。结果来源于主流搜索引擎索引的网页。每次调用网页搜索会额外收取 $0.004。

## Kimi 会员与 API 并发有关吗？

<Callout type="warning">
**Kimi 会员套餐**（如 Allegretto）与 **API** 属于不同的计费体系。会员套餐中包含的智能体并行能力仅适用于 Kimi 面向消费者的产品，与 API 速率限制无关。API 并发限制由账号的累计充值等级决定。
</Callout>

## API 与 Kimi 网页版应用的区别

| 维度 | Kimi 网页版应用 | Kimi API |
| --- | --- | --- |
| **面向对象** | 面向消费者的对话产品 | 面向开发者的集成接口 |
| **访问方式** | 基于浏览器使用 | 通过程序调用 API |
| **计费方式** | 会员/配额体系 | 按 token 用量计费 |
| **账号** | 共用登录账号 | 共用登录账号 |
| **额度** | 不可在系统间转移 | 不可在系统间转移 |

## 可以通过 API 使用 PPT 生成和深度研究吗？

<Callout type="warning">
**PPT 生成**和**深度研究**目前**尚未通过 API 开放**。这些功能目前仅可在 Kimi 面向消费者的产品中使用。请关注平台公告，获取后续更新。
</Callout>

## 是否支持本地部署？

Kimi API 目前仅提供云端 API 服务，**不支持本地私有化部署**。如有私有化部署需求，请通过 [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) 联系销售团队。

## 可以在中国境外调用 Kimi API 吗？

Kimi API 可通过 `api.moonshot.ai` 在全球范围内使用。如果遇到连接问题，请联系销售团队，以便为你的所在地区评估最佳方案。
