---
title: "数据处理与安全"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="数据处理与安全 - Kimi 帮助中心"
  description="Kimi API 用户数据安全与隐私保护常见问题。"
/>

# 数据处理与安全

<Callout type="info">
Kimi API 用户数据安全与隐私保护常见问题。
</Callout>

Kimi API 高度重视用户数据安全与隐私保护。
## 用户数据会用于模型训练吗？

<Callout type="warning">
**不会。** 通过 API 提交的用户数据（包括输入内容和模型输出）**不会用于训练或改进 Kimi 的模型**。你的数据仅用于完成当前 API 请求，不会为了训练目的而持久化存储。
</Callout>

## 如何保障私有数据安全？
Kimi API 采用多重措施保护你的私有数据：
| 措施 | 说明 |
| --- | --- |
| **传输加密** | 所有 API 通信均使用 HTTPS/TLS |
| **数据隔离** | 严格隔离不同用户的数据 |
| **不用于训练** | API 数据不会用于模型训练 |
| **访问控制** | 通过 API Key 认证，仅允许授权访问 |
| **合规认证** | 平台已获得相关安全认证 |

<Callout type="tip">
如有更高安全要求，请联系销售团队了解企业级安全解决方案。
</Callout>

## 内容安全审核
Kimi API 内置内容安全审核机制：
- 系统会自动检测并过滤违规内容（违法活动、暴力、色情内容等）
- 触发审核时，API 会返回相应的错误响应
- 内容审核不会存储或泄露你的原始数据
- 如果你认为审核被误触发，请携带 `request_id` 联系支持团队
## 如何删除已上传的文件？
通过文件 API 上传的文件可随时删除：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

在请求头中包含你的 API Key，并提供文件 ID 即可删除。删除后，该文件将无法再被引用，其数据也会从服务器移除。

<Callout type="info">
你也可以在控制台的文件管理页面查看并删除已上传的文件。
</Callout>
