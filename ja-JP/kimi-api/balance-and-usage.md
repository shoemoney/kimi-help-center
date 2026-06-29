---
title: "残高と使用状況"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="残高と使用状況 - Kimi ヘルプセンター"
  description="Kimi API では、アカウント残高と使用状況の詳細を確認する方法が複数用意されており、消費量とコストを把握できます。"
/>

# 残高と使用状況

Kimi API では、アカウント残高と使用状況の詳細を確認する方法が複数用意されており、消費量とコストを把握できます。

## コンソールダッシュボード

[platform.moonshot.ai](https://platform.moonshot.ai) にログインし、コンソールの **fee-detail**（請求明細）ページに移動すると、次の情報を確認できます。

- 現在のアカウント残高
- 日別の使用状況内訳
- モデル別の使用量とコスト
- 過去の支出傾向

<Callout type="info">
日次の請求情報は **翌日午前 7:00 まで**に更新されます。リアルタイムの使用状況データには、わずかな遅延が生じる場合があります。
</Callout>

> **注**: 日次の請求情報は **翌日午前 7:00 まで**に更新されます。リアルタイムの使用状況データには、わずかな遅延が生じる場合があります。

## Token Estimation API

リクエストを送信する前に Token Estimation API を使うと、その呼び出しで消費される token 数を見積もれます。コスト管理に便利です。

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

利用可能残高を取得するには、リクエストヘッダーに API Key を含めてください。

## 使用状況監視のヒント

<Callout type="tip">
**ベストプラクティス**:
- fee-detail ページを定期的に確認し、支出傾向を把握する
- 残高照会 API を組み込み、残高アラートのしきい値を設定する
- 重要な呼び出しの前に Token Estimation API を使用して、コストを見積もる
</Callout>
