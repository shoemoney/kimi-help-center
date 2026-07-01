---
title: "API 錯誤碼"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API 錯誤碼 - Kimi 說明中心"
  description="呼叫 Kimi API 時常見的錯誤碼及處理方式。"
/>

# API 錯誤碼

<Callout type="info">
呼叫 Kimi API 時常見的錯誤碼及處理方式。
</Callout>

## 錯誤碼參考

| 錯誤碼 | 含義 | 解決方法 |
| --- | --- | --- |
| 400 | 請求錯誤 | 檢查請求 body 的格式、參數名稱與類型。常見原因包括：JSON 格式錯誤、缺少必要參數、數值超出允許範圍。 |
| 401 | 未授權 | 確認 API Key 正確，且未過期或遭停用。請確認 header 格式為：`Authorization: Bearer <your-api-key>`。 |
| 403 | 禁止存取（餘額不足） | 帳戶餘額已用完，請至 console 充值。帳戶也可能受到限制；如有需要，請聯絡支援團隊。 |
| 404 | 找不到資源 | 檢查請求 URL 路徑與模型名稱。確認 endpoint 為 `https://api.moonshot.ai/v1/...`。 |
| 429 | Too Many Requests（請求過多） | 已超過 rate limit（速率限制）。請降低請求頻率、實作指數退避，或聯絡支援團隊申請更高限制。 |
| 500 | Internal Server Error（伺服器內部錯誤） | 暫時性的伺服器問題，請稍後重試。若問題持續發生，請附上 `request_id` 聯絡 support@moonshot.ai。 |

## 一般疑難排解建議

<Callout type="tip">
1. **檢查完整錯誤訊息**：回應 JSON 會在 `error.message` 中提供詳細說明。
2. **記下 request_id**：可協助支援團隊快速找出問題。
3. **參考官方文件**：請確認呼叫方式符合 [platform.moonshot.ai](https://platform.moonshot.ai) 上的文件說明。
4. **實作重試邏輯**：針對 429 與 500 錯誤，請使用指數退避。
</Callout>
