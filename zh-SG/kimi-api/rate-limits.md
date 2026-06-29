---
title: "速率限制"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="速率限制 - Kimi 帮助中心"
  description="Kimi API 会对请求频率和并发实施速率限制，以保障平台稳定与公平使用。速率限制档位取决于你账户的..."
/>

# 速率限制

Kimi API 会对请求频率和并发实施速率限制，以保障平台稳定与公平使用。速率限制档位取决于你账户的累计充值金额。

## 速率限制档位

API 速率限制会根据你账户的**累计充值金额**划分档位——充值越多，可用的速率限制越高。具体档位门槛以及对应的 RPM（每分钟请求数）和 TPM（每分钟 token 数）限制，请参考 [platform.moonshot.ai](https://www.platform.moonshot.ai) 控制台。

## 如何查看当前限制？

- 登录 API 控制台，查看你当前的速率限制档位。
- API 响应标头中也会包含速率限制信息：
  - `X-RateLimit-Limit`: 当前速率限制上限
  - `X-RateLimit-Remaining`: 剩余可用请求数
  - `X-RateLimit-Reset`: 限制重置时间

## 处理 429 错误

当你的请求频率超过限制时，API 会返回 429 状态码。建议采取以下措施：

1. **实现指数退避**：初始等待 1 秒，之后每次重试都将等待时间翻倍（2s、4s、8s…）。
2. **控制并发**：使用请求队列或信号量来限制同时发起的请求数量。
3. **批量请求**：将多个小请求合并为数量更少、规模更大的请求。

## 申请更高的速率限制

如果你的业务需求超过当前速率限制：

- **充值升级**：提高账户累计充值金额，系统会自动提升你的速率限制档位。
- **联系销售**：如有特殊需求，请通过 [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) 联系平台销售团队，申请自定义速率配额。
