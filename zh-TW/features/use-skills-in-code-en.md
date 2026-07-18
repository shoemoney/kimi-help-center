---
title: "在 Kimi Code 中使用技能"
slug: "use-skills-in-code"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="在 Kimi Code 中使用技能 - Kimi 說明中心"
  description="了解如何在 Kimi Code CLI 中建立並呼叫技能，以統一團隊程式碼規範並自動化開發流程。"
  ogType="article"
/>

# 在 Kimi Code 中使用技能

Kimi Code 是專為開發者打造的 AI 程式設計助手，可直接在終端機或編輯器中執行，協助撰寫程式碼、修正錯誤並產生文件。Kimi Code 支援透過 `SKILL.md` 檔案提供知識型指引；AI 讀取後，會依照其中定義的規範執行。適合用來定義程式碼風格、工作流程與最佳實務。

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="使用斜線指令呼叫技能"
/>

## 呼叫技能

Kimi Code CLI 可讓你使用斜線指令呼叫技能：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

例如，輸入 `/skill:git-commits` 後，Kimi Code 會讀取對應的 `SKILL.md` 內容，並將其作為指令傳送給 Agent。

你也可以在斜線指令後附加補充描述，這些內容會加入技能指令的末尾：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits 修正使用者登入問題",
    },
  ]}
/>

在一般對話中，無須手動呼叫；Agent 會依據上下文自動判斷是否需要讀取技能內容。

## 建立第一個技能

建立技能只需兩步：在 Skills 目錄中建立一個子目錄，然後在其中建立 `SKILL.md` 檔案。

建議儲存位置（適用於所有專案）：

<CodePreview
  files={[
    {
      name: "目錄結構",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` 使用 YAML Frontmatter 定義中繼資料，接著以 Markdown 撰寫核心規範：

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: 我的專案程式碼風格規範\n---\n\n## 程式碼風格\n\n- 使用 4 個空格縮排\n- 變數名稱使用 camelCase\n- 函式名稱使用 snake_case\n- 每個函式都需要 docstring\n- 單行不超過 100 個字元",
    },
  ]}
/>

Frontmatter 中的 `name` 與 `description` 都是選填欄位。若省略，會預設使用目錄名稱。

### 範例

你的團隊要求提交訊息遵循 Conventional Commits 格式，但反覆說明十分繁瑣。把它寫成技能後，日後只需一個指令即可呼叫。

**步驟 1：建立技能檔案**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: 使用 Conventional Commits 格式的 Git 提交訊息規範\n---\n\n## Git 提交規範\n\n採用 Conventional Commits 格式：type(scope): description\n\n允許的類型：feat, fix, docs, style, refactor, test, chore\n\n範例：\n- feat(auth): 新增 OAuth 登入支援\n- fix(api): 修正使用者查詢回傳空值的問題",
    },
  ]}
/>

**步驟 2：完成程式碼變更後，呼叫技能**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits 修正 Safari 中登入頁面的版面位移",
    },
  ]}
/>

Kimi Code 會讀取你的規範，並與任務描述結合，直接輸出格式正確的提交訊息；你無須重複說明任何格式要求。

## 流程技能：定義多步驟工作流程

一般技能提供靜態規範，而 **流程技能** 可定義自動化的多步驟流程。

在 Frontmatter 中設定 `type: flow`，並嵌入 Mermaid 或 D2 格式的流程圖，即可建立流程技能。

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: 程式碼審查工作流程\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

使用 `/flow:<name>` 指令執行。Agent 會從 `BEGIN` 節點開始，依序自動完成每個步驟，直到到達 `END` 為止。

## 技能載入機制

Kimi Code CLI 會依照以下優先順序搜尋並載入技能（先匹配者優先）：

1. **內建技能**：隨軟體套件一同安裝，提供基礎能力。
2. **使用者層級技能**：儲存在主目錄中，適用於所有專案。
3. **專案層級技能**：儲存在專案目錄中，僅適用於該專案。

你也可以使用 `--skills-dir` 參數手動指定其他 Skills 目錄：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Kimi Code CLI 內建兩個實用技能：`kimi-cli-help`（回答 CLI 使用問題）和 `skill-creator`（引導你建立新技能）。輸入 `/skill:skill-creator` 即可開始。
</Callout>

完整的設定選項與參數說明，請參閱 [Kimi Code CLI 技能文件](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)。
