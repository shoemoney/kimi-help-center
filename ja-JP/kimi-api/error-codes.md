---
title: "API エラーコード"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API エラーコード - Kimi ヘルプセンター"
  description="Kimi API の呼び出し時によくあるエラーコードと、その解決方法。"
/>

# API エラーコード

<Callout type="info">
Kimi API の呼び出し時によくあるエラーコードと、その解決方法。
</Callout>

## エラーコード一覧

| エラーコード | 意味 | 対処方法 |
| --- | --- | --- |
| 400 | Bad Request（不正なリクエスト） | リクエスト本文の形式、パラメータ名、型を確認してください。よくある原因: 不正な JSON、必須パラメータの不足、値が許容範囲外。 |
| 401 | Unauthorized（未認証） | API Key が正しいこと、有効期限切れや無効化されていないことを確認してください。ヘッダー形式も確認してください: `Authorization: Bearer <your-api-key>`。 |
| 403 | Forbidden（残高不足） | アカウント残高がなくなっています — コンソールでチャージしてください。アカウントに制限がかかっている可能性もあります。必要に応じてサポートへお問い合わせください。 |
| 404 | Not Found（見つかりません） | リクエスト URL のパスとモデル名を確認してください。エンドポイントが `https://api.moonshot.ai/v1/...` であることを確認してください。 |
| 429 | Too Many Requests（リクエスト過多） | rate limit を超過しました。頻度を下げ、指数バックオフを実装するか、上限引き上げについてサポートへお問い合わせください。 |
| 500 | Internal Server Error（内部サーバーエラー） | 一時的なサーバーの問題です — しばらくしてから再試行してください。解消しない場合は、`request_id` を添えて support@moonshot.ai までお問い合わせください。 |

## トラブルシューティングの基本

<Callout type="tip">
1. **エラーメッセージ全体を確認する**: レスポンス JSON には、詳細な説明を含む `error.message` が含まれます。
2. **request_id を控える**: サポートが問題をすばやく特定するのに役立ちます。
3. **公式ドキュメントを参照する**: 呼び出し内容が [platform.kimi.ai](https://platform.kimi.ai) のドキュメントと一致していることを確認してください。
4. **リトライロジックを実装する**: 429 と 500 のエラーには、指数バックオフを使用してください。
</Callout>
