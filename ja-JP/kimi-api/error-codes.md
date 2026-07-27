---
title: "APIエラーコード"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="APIエラーコード - Kimi ヘルプセンター"
  description="Kimi API の呼び出し時によくあるエラーコードと、その対処方法を説明します。"
/>

# APIエラーコード

<Callout type="info">
Kimi API の呼び出し時によくあるエラーコードと、その対処方法を説明します。
</Callout>

## エラーコード一覧

| エラーコード | 意味 | 対処方法 |
| --- | --- | --- |
| 400 | Bad Request（不正なリクエスト） | リクエスト本文の形式、パラメータ名、型を確認してください。よくある原因は、JSON の形式不備、必須パラメータの不足、値が許容範囲外であることです。 |
| 401 | Unauthorized（認証エラー） | API Key が正しく、有効期限切れや無効化の状態でないことを確認してください。ヘッダー形式が `Authorization: Bearer <your-api-key>` になっていることも確認します。 |
| 403 | Forbidden（残高不足） | アカウント残高が不足しています。コンソールでチャージしてください。アカウントに制限がかかっている可能性もあります。必要に応じてサポートへお問い合わせください。 |
| 404 | Not Found（見つかりません） | リクエスト URL のパスとモデル名を確認してください。エンドポイントが `https://api.moonshot.ai/v1/...` であることを確認します。 |
| 429 | Too Many Requests（リクエスト過多） | rate limit を超過しています。リクエスト頻度を下げる、指数バックオフを実装する、または上限引き上げについてサポートへお問い合わせください。 |
| 500 | Internal Server Error（サーバー内部エラー） | 一時的なサーバーの問題です。時間をおいて再試行してください。解消しない場合は、`request_id` を添えて support@moonshot.ai までお問い合わせください。 |

## トラブルシューティングの基本

<Callout type="tip">
1. **エラーメッセージ全体を確認する**: レスポンス JSON の `error.message` に詳しい説明が含まれています。
2. **request_id を控える**: サポートが問題をすばやく特定する手がかりになります。
3. **公式ドキュメントを参照する**: [platform.kimi.ai](https://platform.kimi.ai) のドキュメントに沿った呼び出しになっているか確認してください。
4. **リトライ処理を実装する**: 429 および 500 エラーには、指数バックオフを使用してください。
</Callout>
