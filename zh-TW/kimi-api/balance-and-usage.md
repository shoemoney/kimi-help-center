---
title: "餘額消耗查詢"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: true
preview_content: "如何查詢 API 帳戶餘額、消耗明細與用量估算。"
---

<SeoMeta
  title="如何查看 Kimi API 餘額和用量？ - Kimi 說明中心"
  description="了解如何在 Kimi Open Platform 查看 API 帳戶餘額、歷史用量和消費明細，掌握額度（credit）使用情況，並及時儲值以避免服務中斷。"
/>

# 餘額消耗查詢

Kimi API 提供多種方式查看帳戶餘額與消耗明細，協助你掌握用量與成本。

## 在控制台查看

登入 [platform.kimi.ai/](https://platform.kimi.ai/)，即可在控制台的 **fee-detail**（費用明細）頁面查看：

- 帳戶目前餘額
- 每日消耗明細
- 各模型的用量與費用
- 歷史消費趨勢

<Callout type="info">
**注意**：當日帳單將於**次日 7:00** 更新。即時消耗資料可能會有些許延遲。
</Callout>

## Token 估算介面

在送出請求前，你可以使用 Token 估算介面預估本次呼叫將消耗的 token 數量，方便控管成本。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

在請求本文中傳入與 Chat Completion 相同格式的 messages，介面將回傳預估的 token 數量。

## 餘額查詢介面

透過 API 直接查詢目前帳戶餘額：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

在請求標頭中帶上你的 API Key，即可取得目前可用餘額資訊。

## 用量監控建議

- 定期查看 fee-detail 頁面，留意消耗趨勢。
- 在程式碼中整合餘額查詢介面，設定餘額預警門檻。
- 使用 Token 估算介面，在關鍵呼叫前預估成本。
