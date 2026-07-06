---
title: "Rate limits（速率限制）"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limits（速率限制） - Kimi 說明中心"
  description="Kimi API 對請求頻率與 concurrency（併發）設有 rate limit（速率限制），以確保平台穩定並維持公平使用。rate limit 等級依據帳戶的累計儲值金額而定..."
/>

# Rate limits（速率限制）

Kimi API 對請求頻率與 concurrency（併發）設有 rate limit（速率限制），以確保平台穩定並維持公平使用。rate limit 等級依據帳戶的累計儲值金額而定。

## Rate limit 等級

API rate limit 會依照帳戶的**累計儲值金額**分級——儲值越多，可使用的 rate limit 越高。各等級門檻以及對應的 RPM（每分鐘請求數）與 TPM（每分鐘 token 數）限制，請參閱 [platform.kimi.ai](https://platform.kimi.ai) 控制台。

## 如何查看目前限制？

- 登入 API 控制台，查看你目前的 rate limit 等級。
- API 回應標頭也會包含 rate limit 資訊：
  - `X-RateLimit-Limit`: 目前 rate limit 上限
  - `X-RateLimit-Remaining`: 剩餘可用請求數
  - `X-RateLimit-Reset`: 限制重設時間

## 處理 429 錯誤

當請求頻率超過限制時，API 會傳回 429 狀態碼。建議採取以下做法：

1. **實作指數退避**：一開始先等待 1 秒，之後每次重試都將等待時間加倍（2s、4s、8s…）。
2. **控制 concurrency（併發）**：使用請求佇列或 semaphore 來限制同時發出的請求數。
3. **合併請求**：將多個小型請求合併為較少、較大的請求。

## 申請更高的 rate limit

如果你的業務需求超過目前的 rate limit：

- **儲值升級**：提高累計儲值金額後，系統會自動升級你的 rate limit 等級。
- **聯絡銷售團隊**：如有特殊需求，請透過 [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) 聯絡平台銷售團隊，申請自訂 rate quota（速率配額）。
