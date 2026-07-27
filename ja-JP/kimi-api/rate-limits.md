---
title: "rate limit（レート制限）"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="rate limit（レート制限） - Kimi ヘルプセンター"
  description="Kimi API では、プラットフォームの安定性と公平な利用を確保するため、リクエスト頻度と concurrency（同時実行数）に rate limit（レート制限）を設けています。rate limit（レート制限）の tier（段階）は、アカウントの..."
/>

# rate limit（レート制限）

Kimi API では、プラットフォームの安定性と公平な利用を確保するため、リクエスト頻度と concurrency（同時実行数）に rate limit（レート制限）を設けています。rate limit（レート制限）の tier（段階）は、アカウントの累計チャージ額に基づいて決まります。

## rate limit（レート制限）の tier（段階）

API の rate limit（レート制限）は、アカウントの**累計チャージ額**に応じて段階的に設定されます。チャージ額が多いほど、利用可能な rate limit（レート制限）も高くなります。各 tier（段階）のしきい値と、それに対応する RPM（1分あたりのリクエスト数）および TPM（1分あたりの token 数）の上限については、[platform.kimi.ai](https://platform.kimi.ai) のコンソールをご確認ください。

## 現在の上限を確認するには？

- API コンソールにログインすると、現在の rate limit（レート制限）の tier（段階）を確認できます。
- API のレスポンスヘッダーにも rate limit（レート制限）情報が含まれます。
  - `X-RateLimit-Limit`: 現在の rate limit（レート制限）の上限
  - `X-RateLimit-Remaining`: 残りの利用可能リクエスト数
  - `X-RateLimit-Reset`: 上限がリセットされる時刻

## 429 エラーへの対応

リクエスト頻度が上限を超えると、API は 429 ステータスコードを返します。推奨される対応は次のとおりです。

1. **指数バックオフを実装する**: まず 1 秒待ち、再試行のたびに待機時間を 2 倍にします（2 秒、4 秒、8 秒…）。
2. **concurrency（同時実行数）を制御する**: リクエストキューやセマフォを使い、同時リクエスト数を制限します。
3. **リクエストをまとめる**: 複数の小さなリクエストを統合し、より少ない回数の大きなリクエストにします。

## より高い rate limit（レート制限）を申請する

現在の rate limit（レート制限）ではビジネス要件を満たせない場合は、次の方法があります。

- **チャージしてアップグレードする**: 累計チャージ額を増やすと、システムが rate limit（レート制限）の tier（段階）を自動的にアップグレードします。
- **営業担当に問い合わせる**: 特別な要件がある場合は、[platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) からプラットフォームの営業チームにお問い合わせのうえ、カスタム rate quota（レート割り当て）を申請してください。
