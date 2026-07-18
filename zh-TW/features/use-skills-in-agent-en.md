---
title: "在 Agent 模式中使用技能"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="在 Agent 模式中使用技能 - Kimi 說明中心"
  description="了解如何呼叫技能、建立自訂技能、探索推薦技能，並在 Agent 模式中擴充 Kimi 的能力。"
  ogType="article"
/>

# 在 Agent 模式中使用技能

## 如何呼叫技能？

在 Kimi Agent 模式的輸入框中，有三種方式可以呼叫技能：

**方法 1：使用 `/` 指令**

在輸入框中輸入 `/`，即可叫出技能清單。點選技能名稱即可插入。你也可以在 `/` 後輸入關鍵字來篩選清單。

**方法 2：使用「➕」選單**

點選輸入框旁的 **➕** 按鈕。從選單中選擇一項技能，技能名稱就會以文字形式插入輸入框。

<Frames
  src="./images/skills/加号-en.png"
  alt="使用加號選單呼叫技能"
/>

**方法 3：交給 Kimi 判斷**

直接描述你的需求即可。Kimi 會根據任務內容，自動辨識並觸發最合適的技能。

### 範例：使用技能產生 SEO 分析報告

假設你是內容經理，想分析網站的 SEO 表現：

1. 在輸入框中輸入 `/`，找到並選取 `seo-analyzer` 技能。
2. 繼續輸入：`Please analyze https://help.com/zh-cn/help's SEO performance, list the main issues and optimization suggestions.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO 分析"
/>

3. 送出後，Kimi 會依照 SEO 分析流程，自動搜尋、整理，並輸出結構化報告。

你不需要告訴 Kimi 該如何分析——相關流程已經定義在技能中。

## 探索與管理技能

### Kimi 精選

Kimi 提供一組開箱即用的推薦技能，可一鍵新增：

<Frames
  src="./images/skills/kimi-picks.png"
  alt="推薦技能"
/>

## 自訂技能

如果 Kimi 推薦的技能無法滿足需求，你可以建立符合特定工作流程的自訂技能。

**什麼時候該建立自訂技能？**

- 你有需要反覆執行的固定任務（例如每週競品報告）。
- 你希望 Kimi 依照公司指定格式輸出內容。
- 你有一套工作方法，希望 Kimi 直接遵循。

好的技能應該專注做好一件事。不要試圖把所有需求都塞進單一技能裡。

### 選項 1：文件轉技能

如果你已經有現成範本、標準文件或範例檔案，可以直接上傳，讓 Kimi 學習並產生對應技能。

1. 在 **技能** 面板中選擇 **Office 文件轉技能**。
2. 點選上傳區域或將檔案拖曳至上傳區域。支援格式：`docx`、`xlsx`、`pdf`、`pptx`，以及文件截圖。每次最多上傳 3 個檔案，單一檔案不得超過 100 MB。

<Frames
  src="./images/skills/document.png"
  alt="上傳文件以產生技能"
/>

3. 填寫技能描述，告訴 Kimi 這項技能應該做什麼。例如：「請依照這個範本的風格與格式，協助我整理每週銷售資料。」
4. 點選 **建立技能**。

### 選項 2：與 Kimi 一起建立

如果沒有現成文件，你可以直接透過對話描述需求，Kimi 會一步步引導你完成技能建立。

在輸入框中輸入 `/skill-creator`，接著描述你想建立的技能。Kimi 會協助你把需求整理成完整的技能。

<Frames
  src="./images/skills/create-skill-en.png"
  alt="透過對話建立技能"
/>

### 管理既有技能

在 **技能** 面板中，切換到 **自訂技能** 分頁，即可編輯、更新文件或刪除你已建立的技能。

<Frames
  src="./images/skills/managing-skills.png"
  alt="管理自訂技能"
/>

<Callout type="info">
技能支援在 Agent 模式與 Kimi Claw 中使用。帶有 `swarm` 後綴的技能僅適用於 Swarm（Agent 叢集）場景，不會在其他情境中顯示。
</Callout>

## 撰寫有效的技能描述

Kimi 會依據技能描述來判斷「何時使用這項技能」。描述越清楚，技能就越能被準確觸發。

完整的技能描述應包含：
- 技能的核心功能。
- 適用情境。
- 會回應的觸發詞。
- 能辨識使用者對需求的間接提及。

<ComparisonBlock
  wrong={"協助使用者搜尋並探索技能。"}
  correct={"協助使用者搜尋並探索技能。適用於使用者明確想尋找某類技能，或描述了一個問題並希望獲得技能推薦時。觸發詞包括「尋找技能」、「搜尋技能」、「有沒有能做到 X 的技能？」等。"}
/>
