---
title: "API料金"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API料金 - Kimi ヘルプセンター"
  description="Kimi API は、token消費量に基づいて課金され、モデルや機能ごとに料金が異なります。"
/>

# API料金

<Callout type="info">
Kimi API は、token消費量に基づいて課金され、モデルや機能ごとに料金が異なります。
</Callout>

## 課金の基本

- **tokenごとの課金**: 各 API 呼び出しでは、入力tokenと出力tokenがそれぞれ別々に課金されます
- **token単位**: 1M = 1,000,000 token
- **モデル別料金**: 高性能なモデルほどtokenあたりの料金が高くなります。用途に最適なモデルを選択してください

## 追加機能の課金

| 機能 | 追加料金 |
| --- | --- |
| **Web Search** | 1回の呼び出しにつき $0.004（token消費量とは別に課金） |

## コンテキストキャッシュ

<Callout type="tip">
**コンテキストキャッシュ**を使うと、システムプロンプトや参照ドキュメントなど、頻繁に利用するコンテキスト内容をキャッシュできます。キャッシュにヒットしたtokenには割引料金が適用されるため、繰り返し使うコンテキストのコストを効果的に抑えられます。
</Callout>

コンテキストキャッシュの詳しい料金は、公式ドキュメントを参照してください。

## 料金の詳細

モデル料金表と課金ルールの全文は、次を参照してください:

[platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat) をご覧ください

## コスト最適化のヒント

<Callout type="tip">
- `max_tokens` パラメータを適切に設定し、不要に長い出力を避ける
- 繰り返し使うシステムプロンプトやコンテキストにはコンテキストキャッシュを活用する
- タスクの複雑さに合ったモデルを選ぶ — シンプルなタスクには軽量モデルを使う
- プロンプト設計を簡潔にし、不要な入力tokenを減らす
</Callout>
