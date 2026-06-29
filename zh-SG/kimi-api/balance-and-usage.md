---
title: "余额与用量"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="余额与用量 - Kimi 帮助中心"
  description="Kimi API 提供多种方式查看账户余额与用量明细，帮助你跟踪消耗和费用。"
/>

# 余额与用量

Kimi API 提供多种方式查看账户余额与用量明细，帮助你跟踪消耗和费用。

## 控制台概览

登录 [platform.moonshot.ai](https://platform.moonshot.ai)，进入控制台中的 **fee-detail**（费用明细）页面，即可查看：

- 当前账户余额
- 每日用量明细
- 各模型用量和费用
- 历史支出趋势

<Callout type="info">
每日账单会在次日 **7:00 AM** 前更新。实时用量数据可能略有延迟。
</Callout>

> **注意**：每日账单会在次日 **7:00 AM** 前更新。实时用量数据可能略有延迟。

## Token 估算 API

发送请求前，你可以使用 Token 估算 API 预估本次调用将消耗多少 token，便于控制成本。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

传入与 Chat Completion 请求相同的 `messages` 格式，API 将返回预估的 token 数量。

## 余额查询 API

你可以通过 API 直接查询当前账户余额：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

在请求头中携带你的 API 密钥，即可获取可用余额。

## 用量监控建议

<Callout type="tip">
**最佳实践**：
- 定期查看 fee-detail 页面，监控支出趋势
- 集成余额查询 API，并设置余额提醒阈值
- 在关键调用前使用 Token 估算 API，预估费用
</Callout>
