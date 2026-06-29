---
title: "モデルの選択と比較"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="モデルの選択と比較 - Kimi ヘルプセンター"
  description="能力、速度、料金に基づいて、最適な Kimi API モデルを選びましょう。"
/>

# モデルの選択と比較

<Callout type="info">
能力、速度、料金に基づいて、最適な Kimi API モデルを選びましょう。
</Callout>

Kimi API では、開発者が用途に応じて複数のモデルから選択できます。
## 利用可能なモデル
モデルの一覧と詳細な仕様については、[platform.moonshot.ai/docs/introduction](https://www.platform.moonshot.ai/docs/introduction) をご覧ください。
モデルを選ぶ際は、次の点を考慮できます。
| 観点 | 検討事項 |
| --- | --- |
| **コンテキスト長** | 長文ドキュメント処理には、大きなコンテキストを扱えるモデルを選びます |
| **応答速度** | レイテンシが重要なシナリオには、軽量モデルが適しています |
| **生成品質** | 複雑な推論やクリエイティブな文章作成には、上位モデルを選びます |
| **料金** | 予算と利用量に応じて、費用対効果の高いモデルを選びます |

## ビジョンモデル
ビジョンモデルは画像入力に対応しており、キャプション生成、OCR、グラフの解釈などに利用できます。

<Callout type="info">
- 画像はサイズや解像度にかかわらず、1枚あたり一律 **1,024 tokens** として課金されます
- 対応形式: JPEG、PNG、WebP など
- 画像は URL または Base64 エンコードで渡せます
</Callout>

## 現時点で未対応の機能

<Callout type="warning">
- **動画マルチモーダル**: 動画の直接入力にはまだ対応していません
- **PPT 生成 API**: API 経由ではまだ利用できません
- **Deep Research API**: API 経由ではまだ利用できません
</Callout>

これらの機能に関する最新情報は、プラットフォームのお知らせをご確認ください。
