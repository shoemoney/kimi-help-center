---
title: "呼叫 API 發生錯誤（錯誤碼說明）"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: true
preview_content: "Kimi API 錯誤碼一覽與疑難排解建議。"
---

<SeoMeta
  title="Kimi API 錯誤碼完整參考 - Kimi 說明中心"
  description="查閱 Kimi API 常見錯誤碼及其含義，包括 400、401、403、429、500 等錯誤的原因分析與解決方案，協助你快速定位並修復問題。"
/>

# API 錯誤碼說明

呼叫 Kimi API 時可能會遇到以下錯誤碼，請依照錯誤碼與描述排查問題。

## 錯誤碼一覽

| 錯誤碼 | 含義 | 處理方式 |
| --- | --- | --- |
| 400 | 請求參數錯誤（Bad Request） | 檢查請求本文格式是否正確，參數名稱與類型是否符合文件要求。常見原因包括：JSON 格式錯誤、缺少必填參數、參數值超出範圍。 |
| 401 | 驗證失敗（Unauthorized） | 檢查 API Key 是否正確、是否已過期或遭停用。確認請求標頭中的 `Authorization: Bearer <your-api-key>` 格式正確。 |
| 403 | 權限不足／餘額不足（Forbidden） | 帳戶餘額可能已用盡，請前往控制台儲值。也可能是帳號受到限制，請聯絡客服。 |
| 404 | 資源不存在（Not Found） | 檢查請求的 URL 路徑與模型名稱是否正確。確認介面位址為 `https://api.moonshot.cn/v1/...`。 |
| 429 | 請求頻率超限（Too Many Requests） | 已超出目前的速率限制。請降低請求頻率、實作指數退避重試策略，或聯絡客服申請提高速率限制。 |
| 500 | 伺服器內部錯誤（Internal Server Error） | 服務端暫時異常，請稍後再試。若持續出現，請聯絡  api-service@moonshot.ai，並附上 request_id。 |

## 通用疑難排解建議

1. **查看完整錯誤資訊**：API 回傳的 JSON 回應中通常包含 `error.message` 欄位，提供更詳細的錯誤描述。
2. **檢查 request_id**：每次請求回傳的 `request_id` 可協助客服快速定位問題。
3. **參考官方文件**：請確認呼叫方式與 [platform.kimi.com](https://platform.kimi.com/docs/guide/start-using-kimi-api) 文件一致。
4. **使用重試機制**：針對 429 和 500 錯誤，建議實作自動重試，並搭配指數退避策略。
