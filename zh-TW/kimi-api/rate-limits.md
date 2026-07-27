---
title: "速率限制與提速"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: true
preview_content: "API 速率限制分級規則、429 處理方式與提速申請方法。"
---

<SeoMeta
  title="Kimi API 速率限制說明 - Kimi 說明中心"
  description="了解 Kimi API 的請求速率限制（RPM/TPM）規則、不同方案的限額差異，以及遇到 429 錯誤時的處理方式。"
/>

# 速率限制與提速

Kimi API 對請求頻率與並行請求數設有速率限制，以確保平台穩定並維持公平使用。速率限制等級會依帳戶的累計儲值金額而定。

## 速率限制分級

API 速率限制會依帳戶的**累計儲值金額**分級；儲值金額越高，可用的速率限制也越高。具體分級標準，以及對應的 RPM（每分鐘請求數）、TPM（每分鐘 token 數）限制，請參考 [platform.kimi.ai/](https://platform.kimi.ai/) 控制台中的說明。

## 如何查看目前限制

- 登入 API 控制台即可查看目前帳戶所屬的速率限制等級。
- API 回應標頭中也會包含速率限制相關資訊：
  - `X-RateLimit-Limit`：目前速率限制上限
  - `X-RateLimit-Remaining`：剩餘可用次數
  - `X-RateLimit-Reset`：限制重設時間

## 遇到 429 錯誤怎麼辦

當請求頻率超出限制時，API 會回傳 429 狀態碼。建議你：

1. **實作指數退避重試**：第一次等待 1 秒，之後每次加倍（2s、4s、8s...）。
2. **控制並行請求數**：使用請求佇列或信號量，限制同時送出的請求數量。
3. **批次處理**：將多個小請求合併為較少的大請求。

## 申請更高速率限制

如果業務需求超出目前的速率限制：

- **儲值提速**：提高累計儲值金額，系統將自動提升速率限制等級。
- **聯絡客服**：如有特殊需求，可聯絡平台客服，或透過 [platform.kimi.ai/](https://platform.kimi.ai/) 聯絡銷售團隊，申請客製化的速率 quota。
