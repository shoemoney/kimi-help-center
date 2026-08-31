---
title: "外掛（Plugins）"
slug: "plugins"
order: 6
extract_headings: false
preview: true
preview_content: "將外部工具接入 Kimi，使它可以使用應用和服務完成任務。安裝外掛後，Kimi 就能呼叫金融資料、辦公軟體、設計工具等第三方能力來幫你完成任務。"
---

<SeoMeta
  title="Kimi 外掛（Plugins）是什麼？如何安裝和使用 - Kimi 幫助中心"
  description="瞭解 Kimi 的外掛（Plugins）：把金融資料、辦公軟體、設計工具等外部服務接入 Kimi，安裝後即可在完成任務時直接呼叫。含可用場景、安裝授權、喚起方式、外掛分類清單與會員額度說明。"
/>

# 外掛（Plugins）

外掛（Plugins）將外部工具接入 Kimi，使它可以使用應用和服務完成任務。安裝一個外掛後，Kimi 就能在完成任務時直接呼叫對應的第三方能力——比如查詢金融資料、操作辦公軟體、呼叫設計工具等。你可以在需要時主動指定使用某個外掛，Kimi 也會在合適的時候自動呼叫它。

## 什麼是 Kimi 外掛

Kimi Plugin 遵循 [Kimi Code 的外掛定義](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest)，可以包含以下一種或多種元件：

| 內容 | 作用 |
| --- | --- |
| Skills | 提供完成任務所需的知識、步驟和使用方法 |
| MCP | 連接外部軟體、服務、資料庫或 API |
| Agents | 讓複雜任務可以由專門的子 Agent 協作完成 |
| Hooks | 在特定事件發生時自動執行預設動作 |
| Commands | 提供明確、可重複使用的命令式入口 |
| System Prompt | Plugin 啟用期間，向主 Agent 追加系統提示詞 |

目前 Kimi Web 端支援外掛中的 MCP 和 Skills；Kimi Work 和 Kimi Code 對齊上述外掛定義，支援更完整的外掛元件組合。

**典型例子：**

- **Notion Plugin** = Notion MCP + 使用說明 Skill
- **金融投研 Plugin** = 多個金融 MCP + 多個分析 Skill + 自訂 Agent

## 在哪些場景可用

在 Kimi 中將模型切換為 **K3** 或 **K3 叢集**，以及在 **深度研究、網站、PPT** 場景中，都可以使用外掛。

在 **Kimi Work 桌面端**也可以使用外掛；桌面端內建的外掛清單見 [Kimi Work 外掛中心](/kimi-work/plugin-center)。

<Callout type="info">
Kimi Claw、Kimi Plus 會話中暫不支援外掛。
</Callout>

## 如何安裝

- **入口**：在輸入框的【+】或輸入「/」；移動端在輸入框的【+】或「/」。
- 在外掛市場中搜尋或瀏覽，進入外掛詳情頁點選安裝。
- 部分外掛需要 **OAuth 授權**（跳轉第三方登入，授權成功後即可使用）；部分外掛為**預裝**，無需手動安裝。
- **僅企業版外掛**：非企業版使用者可以看到，但「安裝」按鈕為置灰狀態，無法安裝。
- 未登入時無法安裝或使用外掛。

## 如何使用

- 安裝後，在輸入框輸入「/」或點【+】→外掛，選擇要用的外掛即可喚起；**支援同時喚起多個外掛**。
- 你也可以直接描述需求（例如「用天眼查查一下這家公司」），Kimi 會自動選擇合適的外掛。
- Kimi 呼叫外掛工具時，會在回覆中顯示「正在使用 xx 外掛」。

## 外掛分類與清單

外掛市場按以下分類組織。實際可見的外掛會因**地區（國內 / 海外）**和**使用端**而有所不同，部分外掛跨多個分類展示。

- **金融**：金融投資分析、投資銀行私募股權、企業財務會計、萬得金融資料服務、標普全球市場財智、恒生聚源金融資料、同花順 iFinD 金融資料庫、SEC、全球金融資料庫、世界銀行公開資料、IMF 國際貨幣基金組織資料庫、Stripe、天眼查
- **效率辦公**：Notion、百度網盤
- **程式碼開發**：GitHub、Supabase、Neon、Cloudflare
- **創意設計**：靈感池、影象生成、影片生成、音訊生成、Canva 可畫
- **通用工具**：靈動報告

## 資料與許可權

- 當你選擇或明確要求使用某個外掛時，Kimi 會優先呼叫該外掛提供的工具，並基於工具返回的結果生成回答；連線外掛後，Kimi 會在你授權的範圍內訪問相關內容。
- 如使用第三方提供的外掛，其資料處理規則由該公司獨立制定，相關資料受其服務條款和隱私政策約束，建議你在授權前查閱。
- 你可以**隨時解除安裝外掛或撤銷授權**。解除安裝後相關 OAuth 授權會失效；再次使用需重新安裝並授權。

## 如何在 Kimi Work 中自訂外掛

請先下載並安裝 [Kimi Work](https://www.kimi.ai/products/kimi-work)。你按照以下步驟，在 Kimi Work 中自訂你的個人外掛：

1. <strong>建立外掛。</strong>開啟 Kimi Work，進入「外掛」→右上角「新建外掛」，按照引導完成外掛建立。你也可以在會話中透過 slash 喚起 <strong>Plugin Builder 技能</strong>，描述希望建立的外掛並提供相關資訊，然後按照引導完成建立。如果你已有 ChatGPT、Claude 或其他平台的外掛，也可以將原始外掛檔案或專案連結提供給 Plugin Builder，按照引導將其轉換為 Kimi 外掛。

<Frames src="./images/plugins/custom-plugin-1.png" alt="在 Kimi Work 中建立外掛" width={1742} height={402} />
<Frames src="./images/plugins/custom-plugin-2.png" alt="在 Kimi Work 會話中使用 Plugin Builder" width={1312} height={256} />

2. <strong>安裝外掛。</strong>建立完成後，進入「外掛」→「個人」，找到剛剛建立的外掛並安裝。

<Frames src="./images/plugins/custom-plugin-3.png" alt="在個人外掛中安裝外掛" width={1740} height={566} />

3. <strong>在會話中使用。</strong>在會話中可以隨時透過 slash 喚起外掛，使用自然語言提出任務請求。

<Frames src="./images/plugins/custom-plugin-4.png" alt="在會話中透過 slash 喚起外掛" width={1232} height={224} />

## 如何申請發佈到官方市場

如果你希望將建立並完成基礎測試的個人外掛提交至 Kimi 官方外掛市場，可以進入外掛詳情頁，點擊右上角「✉️」按鈕，在用戶反饋表單中選擇「申請發佈到官方市場」，並填寫聯絡電郵。

提交後，申請資訊會同步至 Kimi 審核團隊。我們會根據外掛內容和測試情況進行評估；如需補充材料或進一步溝通，團隊會透過填寫的電郵與您聯絡。

<Frames src="./images/plugins/market-submit-1.png" alt="申請發佈到官方市場" width={1752} height={646} />
<Frames src="./images/plugins/market-submit-2.png" alt="填寫外掛發佈申請表單" width={1020} height={738} />

## 常見問題

### 使用外掛會消耗會員額度嗎？
部分外掛會。Kimi 呼叫外掛的工具或服務完成任務時，會按實際呼叫情況消耗會員額度；沒有呼叫成本的外掛不額外收費。

### 可以同時使用多個外掛嗎？
可以。透過「/」或【+】能一次喚起多個外掛。

### 為什麼我看不到某個外掛？
可用的外掛會因地區（國內 / 海外）和使用端而不同；此外部分外掛僅對個人版/企業版使用者開放。

### 可以在 Kimi 中使用 ChatGPT、Claude 或其他平台的外掛嗎？
你可以參考【如何在 Kimi Work 中自訂外掛】部分，將其他平台的現有外掛檔案或專案連結提供給 Plugin Builder，按照引導將其轉換為 Kimi 外掛。
