---
title: "Rate limits"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limits - Kimi ヘルプセンター"
  description="Kimi API では、プラットフォームの安定性と公平な利用を保つため、リクエスト頻度と concurrency に rate limit を設けています。rate limit の階層は、アカウントの..."
/>

# Rate limits

Kimi API では、プラットフォームの安定性と公平な利用を保つため、リクエスト頻度と concurrency に rate limit（レート制限） を設けています。rate limit の階層は、アカウントの累計チャージ額に基づいて決まります。

## rate limit の階層

API の rate limit は、アカウントの**累計チャージ額**に応じた階層制です。チャージ額が増えるほど、利用可能な rate limit も高くなります。各階層のしきい値と、対応する RPM（1 分あたりのリクエスト数）および TPM（1 分あたりの token 数）の上限については、[platform.moonshot.ai](https://www.platform.moonshot.ai) コンソールをご確認ください。

## 現在の上限を確認するには？

- API コンソールにログインすると、現在の rate limit 階層を確認できます。
- API レスポンスヘッダーにも rate limit 情報が含まれます。
  - `X-RateLimit-Limit`: 現在の rate limit 上限
  - `X-RateLimit-Remaining`: 残りの利用可能リクエスト数
  - `X-RateLimit-Reset`: 上限がリセットされる時刻

## 429 エラーへの対応

リクエスト頻度が上限を超えると、API は 429 ステータスコードを返します。次の対応をおすすめします。

1. **指数バックオフを実装する**: まず 1 秒待ち、再試行のたびに待機時間を 2 倍にします（2 秒、4 秒、8 秒…）。
2. **concurrency を制御する**: リクエストキューやセマフォを使い、同時リクエスト数を制限します。
3. **リクエストをまとめる**: 複数の小さなリクエストをまとめて、少数の大きなリクエストにします。

## より高い rate limit をリクエストする

ビジネス上の要件が現在の rate limit を超える場合は、次の方法をご検討ください。

- **チャージしてアップグレードする**: 累計チャージ額を増やすと、システムが rate limit 階層を自動的にアップグレードします。
- **営業担当に問い合わせる**: 特別な要件がある場合は、[platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) からプラットフォームの営業チームに連絡し、カスタム rate quota をリクエストしてください。
