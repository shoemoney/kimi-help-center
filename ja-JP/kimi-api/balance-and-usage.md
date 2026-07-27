---
title: "残高と利用状況"
slug: "api-balance-and-usage"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="残高と利用状況 - Kimi ヘルプセンター"
  description="Kimi API では、アカウント残高や利用明細を確認する方法を複数用意しています。利用量とコストの把握に役立ちます。"
/>

# 残高と利用状況

Kimi API では、アカウント残高や利用明細を確認する方法を複数用意しています。利用量とコストの把握に役立ちます。

## コンソールダッシュボード

[platform.kimi.ai](https://platform.kimi.ai) にログインし、コンソールの **fee-detail**（請求明細）ページへ移動すると、以下を確認できます。

- 現在のアカウント残高
- 日別の利用内訳
- モデル別の利用量とコスト
- 過去の支出傾向

<Callout type="info">
日次請求は **翌日午前 7:00 まで**に更新されます。リアルタイムの利用データには、わずかな遅延が生じる場合があります。
</Callout>

> **注**: 日次請求は **翌日午前 7:00 まで**に更新されます。リアルタイムの利用データには、わずかな遅延が生じる場合があります。

## Token Estimation API

リクエストを送信する前に、Token Estimation API を使って、その呼び出しで消費される token 数を見積もることができます。コスト管理に役立ちます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Chat Completion リクエストと同じ `messages` 形式を渡すと、API が推定 token 数を返します。

## 残高照会 API

API から現在のアカウント残高を直接照会できます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

リクエストヘッダーに API Key を含めると、利用可能な残高を取得できます。

## 利用状況の監視に関するヒント

<Callout type="tip">
**ベストプラクティス**:
- fee-detail ページを定期的に確認し、支出傾向を把握する
- Balance Query API を組み込み、残高アラートのしきい値を設定する
- 重要な呼び出しの前に Token Estimation API を使用してコストを見積もる
</Callout>
