---
title: "儲值與開立發票"
slug: "api-billing-and-finance"
order: 10
extract_headings: true
preview: true
preview_content: "API 儲值、發票開立與退款政策說明。"
---

<SeoMeta
  title="Kimi API 帳單與財務管理 - Kimi 說明中心"
  description="了解 Kimi API 的帳單產生規則、儲值方式、發票申請流程與財務相關常見問題，方便企業使用者管理費用。"
/>

# 儲值與開立發票

以下是 Kimi API 計費與財務相關的常見問題。

## 收費標準如何？

Kimi API 按 token 消耗量計費，輸入 token 與輸出 token 分別計價。不同模型價格不同，聯網搜尋每次額外收費 ¥0.03。詳細價格請參考 [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)。

## 支援 WeCom 或 Alipay 儲值嗎？

API 控制台支援以下儲值方式：

- **Alipay**：掃碼付款或登入 Alipay 帳戶付款。
- **WeChat Pay**：掃碼付款。
- **企業對公轉帳**：完成企業認證的使用者可申請對公轉帳儲值，請聯絡銷售團隊取得對公帳戶資訊。

儲值後餘額會即時入帳，可立即用於 API 呼叫。

## 如何開立發票？

1. 登入 [https://platform.kimi.ai/](https://platform.kimi.ai/) 控制台。
2. 前往「費用 → 發票管理」頁面。
3. 選擇需要開立發票的儲值紀錄。
4. 填寫發票資訊（個人/企業）並送出申請。
5. 電子發票將寄送至你填寫的電子信箱。

可開立的發票類型：

- 個人普通電子發票
- 企業普通電子發票
- 企業增值稅專用發票（需完成企業認證）
