---
title: "API 错误码"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API 错误码 - Kimi 帮助中心"
  description="调用 Kimi API 时常见的错误码及解决方法。"
/>

# API 错误码

<Callout type="info">
调用 Kimi API 时常见的错误码及解决方法。
</Callout>

## 错误码参考

| 错误码 | 含义 | 解决方法 |
| --- | --- | --- |
| 400 | 错误请求 | 检查请求体格式、参数名称和类型。常见原因包括：JSON 格式错误、缺少必填参数、取值超出范围。 |
| 401 | 未授权 | 确认 API 密钥正确，且未过期或被禁用。检查请求头格式：`Authorization: Bearer <your-api-key>`。 |
| 403 | 禁止访问（余额不足） | 账户余额已用尽——请在控制台充值。账户也可能受到限制；如有需要，请联系支持团队。 |
| 404 | 未找到 | 检查请求 URL 路径和模型名称。确认端点为 `https://api.moonshot.ai/v1/...`。 |
| 429 | 请求过多 | 已超出速率限制。请降低请求频率、实现指数退避，或联系支持团队申请更高限制。 |
| 500 | 服务器内部错误 | 临时服务器问题——请稍后重试。如果问题持续存在，请携带 `request_id` 联系 support@moonshot.ai。 |

## 通用排查建议

<Callout type="tip">
1. **查看完整错误信息**：响应 JSON 中的 `error.message` 会提供详细说明。
2. **记录 request_id**：有助于支持团队快速定位问题。
3. **参考官方文档**：确保调用方式与 [platform.moonshot.ai](https://platform.moonshot.ai) 上的文档一致。
4. **实现重试逻辑**：对于 429 和 500 错误，请使用指数退避。
</Callout>
