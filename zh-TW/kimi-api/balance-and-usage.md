---
title: "餘額與用量"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="餘額與用量 - Kimi 說明中心"
  description="Kimi API 提供多種方式查看帳戶餘額與用量明細，協助你掌握用量與費用。"
/>

# 餘額與用量

Kimi API 提供多種方式查看帳戶餘額與用量明細，協助你掌握用量與費用。

## 控制台儀表板

登入 [platform.kimi.ai](https://platform.kimi.ai)，前往控制台中的 **fee-detail**（帳單明細）頁面，即可查看：

- 目前帳戶餘額
- 每日用量明細
- 各模型用量與費用
- 歷史支出趨勢

<Callout type="info">
每日帳單會在**隔日上午 7:00 前**更新。即時用量資料可能略有延遲。
</Callout>

> **注意**：每日帳單會在**隔日上午 7:00 前**更新。即時用量資料可能略有延遲。

## Token Estimation API

送出請求前，你可以使用 Token Estimation API 預估本次呼叫會消耗多少 token，方便控管費用。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

傳入與 Chat Completion 請求相同的 `messages` 格式，API 會回傳預估的 token 數量。

## 餘額查詢 API

透過 API 直接查詢目前帳戶餘額：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

在請求標頭中加入你的 API Key，即可取得可用餘額。

## 用量監控建議

<Callout type="tip">
**最佳做法**：
- 定期查看 fee-detail 頁面，掌握支出趨勢
- 整合餘額查詢 API，並設定餘額提醒門檻
- 在重要呼叫前使用 Token Estimation API 預估費用
</Callout>
