---
title: "API 呼叫常見問題"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: true
preview_content: "API 呼叫常見問題：429 rate limit、401 認證失敗、輸出遭截斷等。"
---

<SeoMeta
  title="Kimi API 常見問題與疑難排解 - Kimi 說明中心"
  description="遇到 Kimi API 呼叫異常？本文彙整常見問題的排查步驟，涵蓋認證失敗、逾時、回傳異常等情境，幫你快速解決問題。"
/>
# API 呼叫常見問題

以下整理開發者使用 Kimi API 時最常遇到的問題與解法。

## 收到 429 rate limit 錯誤怎麼辦？

429 錯誤表示請求頻率已超過目前帳戶的 rate limit（速率限制）。處理方式：

- 採用指數退避重試策略（等待 1s、2s、4s… 後重試）。
- 控制並發（concurrency）請求數量，並使用佇列機制。
- 透過提高累計儲值金額，提升 rate limit 等級。
- 如需更高 quota，請聯絡銷售團隊。

## 收到 401 認證失敗錯誤怎麼辦？

401 錯誤表示 API Key 認證失敗。請檢查：

- API Key 是否已正確複製（留意前後空白）。
- 請求標頭格式是否為 `Authorization: Bearer <your-api-key>`。
- API Key 是否已被刪除或停用，可至控制台確認。
- 是否使用了其他平台的 Key（Kimi API Key 以 `sk-` 開頭）。

## 檔案上傳是否計費？

檔案上傳本身不會產生費用。但當你在對話中引用已上傳的檔案時，檔案內容會被解析成 token，並計入輸入 token 計費。檔案越大，解析產生的 token 越多。

## 收到 403 餘額不足（Insufficient Balance）錯誤怎麼辦？

403 錯誤通常表示帳戶餘額不足。請前往控制台儲值，儲值後即可立即繼續使用。也可透過餘額查詢介面確認目前餘額。

## 回傳內容遭截斷怎麼辦？

如果 API 回傳的內容不完整或遭截斷：

- 檢查 `max_tokens` 參數是否設定過小，並適度加大該值。
- 查看回應中的 `finish_reason` 欄位：`length` 表示因 token 限制而截斷，`stop` 表示正常結束。
- 若要產生長篇文字，可考慮分段請求。

## 檔案介面可以上傳圖片嗎？

可以。檔案上傳介面支援上傳圖片檔案，上傳後可在對話中引用。若使用 Vision 模型，也可直接在訊息中透過 URL 或 Base64 傳入圖片。

## 連網搜尋的來源是什麼？

Kimi API 的連網搜尋功能會即時檢索網際網路上的公開資訊，搜尋結果來自主流搜尋引擎索引的網頁內容。每次連網搜尋會額外收費 ¥0.03。

## Allegretto 會員與 API concurrency 有關係嗎？

Kimi 會員（Allegretto 等）與 API 採用彼此獨立的計費體系。會員方案的 Agent 並行能力僅適用於 Kimi 產品端，與 API 的 rate limit 無關。API 的 concurrency 限制取決於帳戶累計儲值金額的等級。

## API 和網頁版 Kimi 有什麼差異？

- **網頁版 Kimi**：提供給一般使用者的對話產品，可直接透過瀏覽器使用。
- **Kimi API**：提供給開發者的介面服務，用於將 AI 能力整合到自有產品中。
- 兩者採用獨立的計費體系，帳號可共用，但 credit 不互通。

## PPT 生成和深度研究（Deep Research）有 API 嗎？

目前 PPT 生成和深度研究（Deep Research）功能**暫未開放 API 介面**。這些功能僅可在 Kimi 產品端使用。請留意平台公告，以取得最新消息。

## 支援本地化部署嗎？

Kimi API 目前僅提供雲端 API 服務，**暫不支援本地化私有部署**。如有私有化部署需求，請透過 [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) 聯絡銷售團隊諮詢。

## 海外可以呼叫 Kimi API 嗎？

Kimi API 主要為中國大陸使用者提供服務。海外地區的存取可能受到網路環境影響，穩定性無法完全保證。如有海外使用需求，建議聯絡銷售團隊了解可行方案。
