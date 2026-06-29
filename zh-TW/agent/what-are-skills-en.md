---
title: "什麼是 Skills？"
slug: "what-are-skills"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="什麼是 Skills？- Kimi 說明中心"
  description="了解 Kimi Skills 的運作原理、類型與使用方式。Skills 是可重複使用的知識套件，可在特定任務中擴充 Agent 能力，內含指令、最佳實務、腳本與資源。"
  ogType="article"
/>

# 什麼是 Skills？

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Skills 是可重複使用的知識套件，用來拓展 AI Agent 的能力邊界。每個 skill 都包含：

- **工作方法與操作指引** — 針對特定任務類型設計的方法論。
- **最佳實務與標準** — 需要遵循的業界標準與內部規範。
- **腳本、工具與參考資源** — 可選用的輔助工具與材料，協助完成執行。

## 如何使用？

對話開始時，Agent 會看到可用 skills 的清單，包括名稱與簡短說明。若某個 skill 與目前任務相關，Agent 會載入完整指令並據此執行。

## 使用流程

從探索 skills 到建立自己的 skill，完整流程如下：

1. **探索 skills** — 在 Skills 面板瀏覽官方與推薦 skills，找到適合你情境的項目。
2. **安裝 skills** — 點擊「+」按鈕，即可立即新增 skill。
3. **叫用 skills** — 在聊天框輸入 `/` 選取 skill，或讓 Kimi 依你的提問自動觸發合適的 skill。
4. **建立自己的 skill** — 若現有 skills 無法滿足需求，可上傳文件或描述需求來生成自訂 skill，也可以使用 `/skill-creator` 透過對話建立。

## Skills 如何運作？

當你送出請求時，Kimi Agent 會判斷目前任務是否涉及特定 skill。若是，它會自動載入對應 skill，並依照其中指令完成任務。

Skills 只會在與任務相關時載入，確保不會干擾其他對話的脈絡。

## Skills 與直接提示有什麼不同？

以撰寫週報為例：
- **直接提示**：直接請 Kimi Agent 撰寫，它會依自身對格式的理解產出內容。
- **使用 Skills**：安裝週報 skill 後，每次輸出都會遵循你預先設定的結構、語氣與長度，不必反覆說明。

| | 直接提示 | 使用 skills |
|---|---|---|
| **每次都需要說明需求嗎？** | 是 | 否，會自動套用 |
| **輸出格式穩定性** | 可能變動 | 依設定保持一致 |
| **最適合的情境** | 一次性、臨時任務 | 重複性、固定流程 |
| **需要事先設定嗎？** | 不需要 | 需要建立或安裝 |

## Skill 類型

### (1) 官方 skills 與推薦 skills

**官方 skills**：由 Moonshot AI 建立並維護，所有使用者皆可使用。Kimi 會在相關情境中自動觸發。

常見官方 skills 包括：
- `docx` — 建立與編輯 Word 文件，適用於任何 .docx 任務，包括文件建立、編輯、註解、修訂、註腳、目錄，以及 Markdown 轉 Word。
- `deep-research` — 使用工具套件進行深度研究並建立長篇報告，需至少 10 輪迭代搜尋、遞迴反思，並強制使用 IPython 視覺化。

**推薦 skills**：精選的情境型 skills，可一鍵新增，涵蓋投資研究、文件格式化等常見用途。

常見推薦 skills 包括：
- `sop-writer` — 將業務流程轉換為完整的標準作業程序（SOP）文件，包括流程圖、RACI 矩陣、詳細操作步驟與例外處理。
- `event-etf-study` — 從概念或事件出發，識別相關股票，建立市值加權 ETF 指數，分析事件窗口期間的市值變化，並生成互動式 HTML 儀表板。適用於使用者詢問概念股、概念 ETF、事件驅動分析或事件研究時。

**Office 文件轉 skill**：上傳文件即可生成 skills，輕鬆複製樣式主題。

### (2) 開源 skills

可從開源社群下載或安裝合適的 Skills，並搭配 Local Agents（如 Kimi Code）或 Cloud Agents（如 Kimi Claw）使用。

**常見 AI Skill Hub 平台**

| 平台 | URL | 說明 |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | AI Agent skill 市集，從 GitHub 匯集 SKILL.md 套件，相容於 Claude Code 與 OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | 開源 AI Agent skill 市集，提供 1,600+ 個經安全審核的 skills，適用於 Claude Code、Codex CLI 與 ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | 瀏覽與發布相容於 Claude Code、Codex CLI 和 ChatGPT 的 SKILL.md 套件 |

### (3) 自訂 skills

由你建立、用於個人工作流程與特定領域任務的自訂 skills，例如：
- 將特定風格指南套用至文件或簡報。
- 依固定範本生成電子郵件或溝通內容。
- 以特定格式整理會議記錄。
- 執行特定資料分析流程。
