---
title: "Kimi WebBridge 使用案例示範"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 使用案例示範 - Kimi 說明中心"
  description="探索 Kimi WebBridge 的典型使用情境，包含旅行規劃、租屋搜尋、文獻研究等 Skill 與 CLI 範例。"
  ogType="article"
/>

# Kimi WebBridge 使用案例示範

Kimi WebBridge 可讓 Agent 像真人一樣操作瀏覽器，使用你已登入的網站，自動瀏覽、擷取並整理資訊。

<Callout type="tip">
使用 WebBridge 時，任務描述越具體，Agent 越能準確完成。建議明確指定目標網站、篩選條件與期望的輸出格式。若頁面結構較複雜，也可以先請 Agent 截圖，確認頁面狀態後再繼續操作。
</Callout>

實際使用時，WebBridge 常與 Skill 和 CLI 搭配：Skill 用來沉澱任務經驗——該造訪哪些網站、依照哪些步驟收集資訊，以及如何整理結果；CLI 則提供搜尋、閱讀頁面、下載檔案、查詢結構化資料等具體能力。

用一句話告訴 AI Agent 你在網頁上反覆執行的工作。它就能為你產生一個 CLI，直接使用你真實的 Chrome 登入工作階段——不需要 API，也不用設定或管理 API Token。

以下情境中使用的 Skills 與 CLIs 都是透過這種方式建立的。你可以直接安裝使用，也可以將它們作為參考範例。

<Callout type="warning">
本頁提供的 Skills 與 CLIs 僅供教學與技術交流使用。如有任何疑慮，請聯絡 <a href="mailto:support@moonshot.cn">support@moonshot.cn</a>。
</Callout>

## 資訊查找與整理

當你需要跨多個網站搜尋時，WebBridge 可以讓 Agent 自動開啟目標頁面、擷取重點內容，並整理成結構化輸出，省去逐頁開啟、手動複製貼上的繁瑣工作。

### 旅行規劃

在機票平台、飯店訂房網站與旅遊社群之間切換，比較價格與時程，並整理行程、預算表與住宿建議。

相關工具：

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我計畫在 11 月和另一位同行者去京都 5 天 4 夜，預算約人民幣 8,000 元。請幫我查詢機票、飯店與景點開放時間，並將結果整理成每日行程與預算表。",
    },
  ]}
/>

安裝與使用：

1. 從 [Releases](https://github.com/better-world-ai/x-cli/releases) 下載 ctrip-cli 和 booking-cli
2. 執行 `npx skills add better-world-ai/x-cli --skill travel-planning`
3. 開啟本機 Agent，例如 Kimi Code、Claude Code、Codex CLI 或 Cursor 等相容 Skill 的客戶端，並送出上方 prompt

### 租屋物件篩選

同時搜尋多個租屋平台，依租金、通勤、戶型等條件篩選物件，彙整資訊並排序推薦。

相關工具：

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "請幫我尋找上海張江高科站附近的租屋。我的預算在人民幣 4,500 元以內，通勤時間需低於 40 分鐘，優先考慮一房整租。請開啟多個平台，整理房源連結、價格、面積與通勤時間，並提供優先聯絡清單。",
    },
  ]}
/>

安裝與使用：

1. 從 [Releases](https://github.com/better-world-ai/x-cli/releases) 下載 58-cli、anjuke-cli、apartments-cli、rightmove-cli 和 idealista-cli
2. 執行 `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. 開啟本機 Agent，例如 Kimi Code、Claude Code、Codex CLI 或 Cursor 等相容 Skill 的客戶端，並送出上方 prompt

## 內容研究與分析

WebBridge 可以協助 Agent 自動瀏覽搜尋結果、開啟詳情頁、擷取標題、資料、評論等資訊，並進一步分析與總結。它非常適合需要瀏覽大量網頁的研究型任務。

### 文獻研究

搜尋學術文獻，擷取論文摘要、核心方法、實驗結論與引用關係，並輸出結構化綜述。

相關工具：

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "請研究過去兩年有關 AI Agent memory 的代表性論文，整理標題、作者、摘要、核心方法與開源連結，並總結研究脈絡。",
    },
  ]}
/>

安裝與使用：

1. 從 [Releases](https://github.com/better-world-ai/x-cli/releases) 下載 scholar-cli
2. 執行 `npx skills add better-world-ai/x-cli --skill paper-research`
3. 開啟本機 Agent，例如 Kimi Code、Claude Code、Codex CLI 或 Cursor 等相容 Skill 的客戶端，並送出上方 prompt

### 深度主題搜尋

當你想了解一個陌生主題，過去的做法是打開搜尋引擎，逐一點進每個結果通讀，複製重點，再整理成筆記——半天就沒了。

讓 AI 替你跑完整個流程：它會自動搜尋，沿著結果抓取全文，既可以為你綜合摘要，也可以保留原文供你閱讀。無論是研究課題、追蹤領域新進展，或為寫作蒐集材料，都可以先用它把資訊集中到一處。

相關工具：

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "搜尋 2025 年值得使用的本機 AI 模型，並擷取前 10 筆結果的全文。",
    },
  ]}
/>

安裝與使用：

1. 從 [Releases](https://github.com/better-world-ai/x-cli/releases) 下載 google-cli 或 baidu-cli
2. 開啟本機 Agent，例如 Kimi Code、Claude Code、Codex CLI 或 Cursor 等相容 Skill 的客戶端，並送出上方 prompt

## 日常辦公輔助

運用 WebBridge 的自動化能力處理重複性的網頁操作，提升工作效率。

### 電商比價

在多個電商平台搜尋同一商品，比較價格、規格與使用者評價，並整理最佳購買選項。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "我想買一台 27 吋 4K 螢幕，預算約人民幣 2,000 元。請在主流電商平台搜尋並比較選項，整理價格、品牌與使用者評價，推薦性價比最高的選擇。",
    },
  ]}
/>

### 網頁資料擷取

從網頁中擷取表格、清單等結構化資料，並自動整理成指定格式，省去手動複製貼上的麻煩。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "請幫我開啟這個網頁，擷取頁面上的商品價格表，並輸出為清楚的清單。",
    },
  ]}
/>

更多使用案例，請參見 [Kimi WebBridge 官方網站](https://www.kimi.com/zh-cn/features/webbridge)。
