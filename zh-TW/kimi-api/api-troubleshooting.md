---
title: "API 疑難排解"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API 疑難排解 - Kimi 說明中心"
  description="開發者使用 Kimi API 時的常見問題與解法。"
/>

# API 疑難排解

<Callout type="info">
開發者使用 Kimi API 時的常見問題與解法。
</Callout>

## 如何處理 429 rate limit 錯誤？

429 錯誤表示你的請求頻率已超過目前帳戶的 rate limit。可採取以下做法：

- 實作指數退避重試策略（重試前依序等待 1s、2s、4s……）。
- 使用佇列機制控制並行請求數量。
- 提高累計儲值金額，以升級你的 rate limit 等級。
- 如需更高 quota，請聯絡銷售團隊。

## 如何處理 401 驗證錯誤？

401 錯誤表示 API 金鑰驗證失敗。請檢查以下項目：

- 確認 API 金鑰已正確複製（留意前後是否有空格）。
- 確認請求標頭格式為 `Authorization: Bearer <your-api-key>`。
- 確認 API 金鑰未被刪除或停用——請至控制台查看。
- 確認你使用的不是其他平台的金鑰（Kimi API 金鑰以 `sk-` 開頭）。

<Callout type="warning">
**API 金鑰格式**：Kimi API 金鑰以 `sk-` 開頭。請確認你使用的是正確的金鑰格式。
</Callout>

## 上傳檔案會產生費用嗎？

檔案上傳本身免費。不過，當你在對話中引用已上傳的檔案時，系統會將其內容解析為 token，並按輸入 token 計費。檔案越大，產生的 token 越多。

## 如何處理 403 餘額不足錯誤？

403 錯誤通常表示帳戶餘額不足。請在控制台儲值，款項會立即可用。你也可以使用餘額查詢 API 檢查目前餘額。

## 回應被截斷怎麼辦？

如果 API 回應不完整或遭截斷：

- 檢查 `max_tokens` 參數是否設定過低，並視需要調高。
- 查看回應中的 `finish_reason` 欄位：`length` 表示輸出因 token 限制而被截斷；`stop` 表示已正常完成。
- 若要生成長篇文字，建議將請求拆成多個段落處理。

<Callout type="tip">
**檢查 `finish_reason`**：`length` = 已截斷，`stop` = 正常完成。
</Callout>

## 可以透過檔案 API 上傳圖片嗎？

可以。檔案上傳 API 支援圖片檔案。上傳後，圖片即可在對話中引用。使用視覺模型時，你也可以透過 URL 或 Base64 編碼，直接在訊息中傳入圖片。

## 網頁搜尋的來源是什麼？

Kimi API 的網頁搜尋功能會即時從網際網路擷取公開資訊。結果來源為主要搜尋引擎已索引的網頁。每次呼叫網頁搜尋會額外收取 $0.004。

## Kimi 會員與 API concurrency 有關嗎？

<Callout type="warning">
**Kimi 會員方案**（例如 Allegretto）與 **API** 是彼此獨立的計費系統。會員方案包含的 agent 並行能力僅適用於 Kimi 的消費端產品，與 API rate limit 無關。API concurrency 上限由你的帳戶累計儲值等級決定。
</Callout>

## API 與 Kimi 網頁版應用的差異

| 面向 | Kimi 網頁版應用 | Kimi API |
| --- | --- | --- |
| **目標對象** | 面向一般使用者的對話產品 | 面向開發者的整合介面 |
| **使用方式** | 透過瀏覽器使用 | 以程式呼叫 API |
| **計費方式** | 會員與 quota 制度 | 依 token 用量計費 |
| **帳戶** | 共用登入 | 共用登入 |
| **Credits** | 不可跨系統轉移 | 不可跨系統轉移 |

## 可以透過 API 使用 PPT 生成與 Deep Research 嗎？

<Callout type="warning">
**PPT 生成** 與 **Deep Research（深度研究）** 目前 **尚未透過 API 開放**。這些功能目前只能透過 Kimi 消費端產品使用。請留意平台公告以取得最新消息。
</Callout>

## 支援本地部署嗎？

Kimi API 目前僅提供雲端 API 服務，**不支援本地私有化部署**。如有私有化部署需求，請透過 [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales) 聯絡銷售團隊。

## 可以從中國境外呼叫 Kimi API 嗎？

Kimi API 可透過 `api.moonshot.ai` 在國際範圍使用。若遇到連線問題，請聯絡銷售團隊，以討論最適合你所在地區的解決方案。
