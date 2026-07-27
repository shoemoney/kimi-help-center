---
title: "API料金"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="API料金 - Kimi Help Center"
  description="Kimi APIはtoken消費量に基づく課金で、モデル別・機能別に料金が設定されています。"
/>

# API料金

<Callout type="info">
Kimi APIはtoken消費量に基づく課金で、モデル別・機能別に料金が設定されています。
</Callout>

## 課金の基本

- **token単位の課金**: 各API呼び出しでは、入力tokenと出力tokenがそれぞれ個別に課金されます
- **token単位**: 1M = 1,000,000 token
- **モデル別料金**: 高性能なモデルほどtokenあたりの料金が高くなります。用途に最適なモデルを選択してください

## 追加機能の課金

| 機能 | 追加料金 |
| --- | --- |
| **Web Search** | 1回の呼び出しあたり$0.004（token消費量とは独立） |

## コンテキストキャッシュ

<Callout type="tip">
**コンテキストキャッシュ**を使うと、システムプロンプトや参照ドキュメントなど、頻繁に使用するコンテキスト内容をキャッシュできます。キャッシュにヒットしたtokenには割引料金が適用されるため、繰り返し使うコンテキストのコストを効果的に抑えられます。
</Callout>

コンテキストキャッシュの詳しい料金については、公式ドキュメントを参照してください。

## 料金の詳細

モデル料金表と課金ルールの詳細は、以下をご確認ください。

[platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat) にアクセスできます

## コスト最適化のヒント

<Callout type="tip">
- 不必要に長い出力を避けるため、`max_tokens` パラメータを適切に設定する
- 繰り返し使うシステムプロンプトやコンテキストには、コンテキストキャッシュを使用する
- タスクの複雑さに合ったモデルを選ぶ。単純なタスクには軽量モデルを使用する
- プロンプト設計を簡潔にし、不要な入力tokenを最小限に抑える
</Callout>
