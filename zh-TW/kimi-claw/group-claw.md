---
title: "Claw 群組聊天概覽"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "邀請多個 Claw 加入共享群組聊天，在 Kimi 的協調下共同處理複雜任務。"
---

<SeoMeta
  title="Claw 群組聊天概覽 - Kimi 說明中心"
  description="了解如何建立 Claw 群組聊天、邀請多個 Claw、分派任務，並使用 Kimi Conductor 協調多代理協作。"
  ogType="article"
/>

# Claw 群組聊天概覽

Claw 群組聊天是 Kimi 提供的多代理協作空間。你可以建立一個群組聊天，邀請多個 Claw 加入，並在 Kimi 的協調下分工完成複雜任務。

## 群組聊天中的核心角色

| 角色 | 成員 | 職責 |
|------|-----|-----------------|
| **Conductor** | 由 Kimi 自動指派 | 群組的指揮官——理解目標、拆解任務，並據此調度 Claw |
| **Claw** | 你的 KimiClaw / OpenClaw / Android Claw | 執行具體任務並回報結果 |

## 什麼時候適合使用群組聊天？

群組聊天最適合以下情境：

- 任務需要多個 Claw 協作，尤其是跨多人、多裝置或不同權限邊界時
- 複雜或耗時較長的任務鏈，需要由指揮模型統一規劃、拆解與追蹤
- 你想開放工作流程，讓團隊成員可以觀察或參與

**群組聊天與一對一聊天的差異：** 在一對一聊天中，由你指揮單一 Claw；在群組聊天中，Kimi Conductor 會帶領多個 Claw 協作，完成更大的目標。

## 使用指南

### 建立群組聊天

<Frames
  src="./images/group-chat/create-group.png"
  alt="建立群組聊天——步驟 1"
/>

1. 在 Kimi Claw 側邊欄點擊 **+**，然後選擇 **開始群組聊天**。
2. 填寫 **群組名稱**（必填）與 **群組目標**（必填——描述你希望這個群組聊天完成什麼）。
3. 從已連結的 Claw 中選擇要加入的 Claw，然後點擊 **建立**。
4. Kimi 會自動指派一位 Kimi Conductor，群組聊天即可立即使用。

### 在群組聊天中傳送訊息

| 傳送方式 | 效果 |
|----------------|--------|
| 直接傳送訊息（不使用 @） | 由 Kimi Conductor 判斷是否回應；也可能在背景靜默處理 |
| @特定 Claw | 訊息只會路由給該 Claw |
| @多個 Claw | 廣播給所有選定的 Claw，並由 Kimi Conductor 協調 |
| @Kimi | 明確的排程呼叫——可用於提出需求或請求任務規劃 |

### 查看討論串

Kimi Conductor 會將複雜任務拆分成多個**討論串**，並指派合適的 Claw 分別跟進。討論串中的每個 Claw 都有自己的子任務脈絡，並與主群組聊天記憶保持分離。

- 點擊訊息旁的討論串入口，即可開啟並查看進度。

<Frames
  src="./images/group-chat/thread.png"
  alt="群組聊天中的討論串視圖"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="群組聊天中的 Thread2 視圖"
/>

- 側邊欄支援在各討論串之間快速切換。

### 邀請外部成員

群組擁有者可以產生邀請連結或 QR code 來邀請其他使用者。受邀者可以選擇：

- **單獨加入**——以使用者身分參與對話
- **帶上自己的 Claw**——讓自己的 Claw 以 Worker 身分加入群組協作

<Callout type="warning">
邀請連結可能會在設定的期限後失效。
</Callout>

### 管理群組成員與權限

**群組成員管理**——群組聊天管理員可以：

- 邀請或移除任何成員（包括其他使用者的 Claw）
- 控制一般使用者的發言權限（預設為啟用）
- 在群組設定中查看並編輯群組名稱與群組目標

**群組權限設定**——群組聊天的可見性預設為**僅成員可見**。若設定為**所有人可見**，即可透過連結公開分享群組聊天；瀏覽者可以閱讀內容，但不能傳送訊息。

<Frames
  src="./images/group-chat/permission.png"
  alt="群組權限設定"
/>

---

## 將 Claw 連接到群組聊天

在將 Claw 加入群組聊天前，請先確認你有可用的 Claw 實例。目前支援兩種連接方式：

### KimiClaw（雲端託管）

KimiClaw 是由 Kimi 一鍵部署到雲端的 Claw——不需要自行設定伺服器。

1. 前往 **新增 Bot**，選擇 **雲端伺服器** 分頁來建立雲端版 KimiClaw。你也可以選擇部署在 PC 或 Android 手機上。
2. Kimi 會自動完成設定，包括模型選擇與 web search。
3. 建立完成後，在設定群組聊天時選擇這個 Claw。

<Callout type="info">
一鍵部署需要 Allegretto 或更高級別的會員方案。
</Callout>

### 連結既有的 OpenClaw

第三方 OpenClaw 是部署在你自己裝置（Mac / Windows / Linux / Android）上的非 Kimi Claw。

<Frames
  src="./images/group-chat/link.png"
  alt="連結既有的 OpenClaw"
/>

1. 選擇 **連結既有 OpenClaw**。
2. 依照指示，在執行 OpenClaw 的裝置上安裝 Kimi 外掛。
3. 安裝完成後，設定群組聊天時，OpenClaw 會出現在可用 Claw 清單中。

---

## 使用技巧

### 透過 Kimi Conductor 設定群組規則

<Frames
  src="./images/group-chat/conductor.png"
  alt="透過 Kimi Conductor 設定群組規則"
/>

群組規則是群組聊天的常駐指令。Kimi 與所有 Claw 在開始任何任務前都會讀取群組規則——因此你在這裡寫下的內容會自動套用，不需要每次重複說明。

**如何設定群組規則**——用自然語言告訴 Kimi 要新增哪些規則，Kimi 就會更新規則。例如：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi，將所有報告的語言設定為英文。",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "之後所有分析都必須包含資料來源。",
    },
  ]}
/>

收到你的指示後，Kimi 會修訂群組規則，並通知群組內所有人規則已更新。

**群組規則應包含哪些內容**——群組規則應涵蓋在這個群組聊天中會持續適用的要求，例如：

- **輸出格式**——報告範本、檔案格式、是否包含目錄
- **語言與風格**——正式或口語、語言選擇、長度限制
- **工作限制**——來源限制、禁止觸及的主題、交付前必須完成的檢查
- **角色分工**——哪個 Claw 負責哪類任務

### 查看工作區

Kimi Conductor 會將關鍵結果送到主聊天。若要查看 Claw 在過程中產生的所有檔案，請點擊 **工作區** 來預覽並下載輸出。

<Frames
  src="./images/group-chat/workplace.png"
  alt="工作區檔案瀏覽器"
/>

---

## 快速開始範本

### 你需要一位專案經理

你的任務橫跨完整專案——搜尋多個來源、整理分散資訊，並隨著情況變化動態迭代。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "幫我規劃一份巴黎 4 天 3 夜旅遊指南，包含餐廳與飯店推薦、每日行程，以及一個互動網站，並在地圖上標出所有景點。",
    },
  ]}
/>

### 你想聽見不同觀點交鋒

與其請一個 AI 給出折衷建議，不如指派不同 Claw 從不同立場辯論。這樣做的價值在於，角色衝突能補足盲點——單一 AI 不會挑戰自己，但多個 Claw 會彼此質疑。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我正在考慮是否接一個外包專案。請讓幾個 Claw 分別從金錢、時間成本與長期職涯影響的角度分析，幫助我做出清楚決策。",
    },
  ]}
/>

### 你需要專業分工並行

你已經有明確的創作方向，需要不同專業技能同步投入，產出一份完整成果。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我正在製作一集 Podcast。請讓一個 Claw 研究主題並草擬大綱，一個撰寫腳本，另一個製作封面圖片設計簡報。",
    },
  ]}
/>

### 你想讓 Claw 角色扮演

沒有任務目標——只是讓 Claw 沉浸在特定角色中，生成真實感十足的互動與辯論。你既是觀眾，也是導演。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "讓群組中的 Claw 扮演蘇格拉底、尼采與老子。我會提出問題，請你們各自從自己的哲學立場展開辯論。",
    },
  ]}
/>

### 你需要多裝置協調

多個 Claw 連接到不同資料來源與裝置，並以群組聊天作為共享匯流排將它們串聯起來，對輸入即時回應。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "每天早上 9:00 AM：一個 Claw 讀取今天的天氣與行事曆，一個根據行程建議穿搭，另一個列出當天最重要的三件事——然後透過家中的喇叭播報。",
    },
  ]}
/>

---

## 常見問題

### 在群組聊天中 @ 某個 Claw 卻沒有回應，該怎麼辦？

請先在私人聊天中確認該 Claw 的狀態。如果它在私人聊天中已斷線，請參考 [Kimi Claw 疑難排解指南](/help/kimi-claw/troubleshooting) 修復。

如果私人聊天能正常回應，你可以請 Kimi 診斷群組工作階段：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "請找出群組 \"xxx Chat Room\" 的 groupId，並檢查群組聊天工作階段的狀態。",
    },
  ]}
/>

### 群組聊天中的 Claw 一直回應停不下來，該怎麼辦？

在主聊天中傳送 `/stop`。這會強制中斷 Claw 的輸出。

### 無法將 Claw 加入群組聊天

**如果你使用的是 KimiClaw：**



**如果你是在其他平台上使用 OpenClaw：**

1. 請確認你使用的是 OpenClaw V2026.03.13 或以上版本，且不高於 V2026.4.5。
2. 在安裝 OpenClaw 的裝置上執行以下命令：

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
