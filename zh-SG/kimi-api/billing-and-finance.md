---
title: "充值与开票"
slug: "api-billing-and-finance"
order: 10
extract_headings: true
preview: true
preview_content: "API 充值、发票开具及退款政策说明。"
---

<SeoMeta
  title="Kimi API 账单与财务管理 - Kimi 帮助中心"
  description="了解 Kimi API 的账单生成规则、充值方式、发票申请流程及财务相关常见问题，便于企业用户管理费用。"
/>

# 充值与开票

以下是 Kimi API 计费与财务相关的常见问题。

## 收费标准是怎样的？

Kimi API 按 token 消耗量计费，输入 token 与输出 token 分别计价。不同模型的价格不同，联网搜索每次另收 ¥0.03。详细价格请参考 [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)。

## 支持企业微信或支付宝充值吗？

API 控制台支持以下充值方式：

- **支付宝**：扫码支付，或登录支付宝账户支付。
- **微信支付**：扫码支付。
- **企业对公转账**：已完成企业认证的用户可申请对公转账充值，请联系销售团队获取对公账户信息。

充值后余额会实时到账，可立即用于 API 调用。

## 如何开发票？

1. 登录 [https://platform.kimi.ai/](https://platform.kimi.ai/) 控制台。
2. 进入「费用 → 发票管理」页面。
3. 选择需要开票的充值记录。
4. 填写发票信息（个人/企业），并提交申请。
5. 电子发票将发送至你填写的邮箱。

支持开具的发票类型：

- 个人普通电子发票
- 企业普通电子发票
- 企业增值税专用发票（需完成企业认证）
