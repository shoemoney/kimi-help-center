---
title: "Kimi Code for VS Code 快速入門"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code for VS Code 快速入門 - Kimi 說明中心"
  description="Kimi Code for VS Code 是整合於 Visual Studio Code 的擴充套件。安裝後，你可以提問、檢視程式碼差異，並快速提交變更..."
/>

# Kimi Code for VS Code 快速入門

<Callout type="warning">
**VS Code 擴充套件相容性提醒**

Kimi Code for VS Code 目前僅開放給使用舊版 Python CLI 的使用者全新安裝。已安裝外掛程式的既有使用者，在升級至新版 CLI 後仍可繼續使用。TS 版本 CLI 使用者目前暫不支援安裝。
</Callout>

Kimi Code for VS Code 是整合於 Visual Studio Code 的擴充套件。安裝後，你可以直接在編輯器中提問、檢視程式碼差異，並快速提交變更。 

此擴充套件可讀取你引用的檔案內容，並透過視覺化介面顯示修改建議；經你確認後才會執行。整個工作流程都由你掌控，同時大幅提升開發效率。

此擴充套件在 VS Code 中提供原生聊天面板，支援：
- 透過 `@` 符號引用檔案或資料夾。
- 透過 `/` 指令執行專案掃描與上下文管理。
- 以差異檢視呈現檔案變更，並支援回復。
- 整合 MCP 伺服器以呼叫外部工具。

---

## 安裝

1.  **先決條件**：你需要 Kimi 帳號訂閱或 Kimi API 金鑰。
2.  **Marketplace**：透過 [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code) 安裝。

<Callout type="tip">
如果安裝後未顯示擴充套件，請重新啟動 VS Code，或在命令面板中執行 **Developer: Reload Window**（Mac：`Cmd+Shift+P`，Win/Linux：`Ctrl+Shift+P`）。
</Callout>

---

## 驗證

Kimi Code 支援兩種驗證模式。你可以隨時透過**齒輪圖示**切換模式。

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="驗證設定"
  width={800}
  height={450}
/>

- **Kimi 帳號模式**：點選登入按鈕，透過瀏覽器授權。
- **API 金鑰模式**：如果你已設定 API 金鑰，可點選略過登入。

---

## 常見工作流程

程式碼閱讀：輸入 `@` 選取檔案或資料夾，要求說明程式碼流程，並繼續追問。

重構：引用目標程式碼，例如 `@src/feature/`，要求擬定重構方案，檢視差異後選擇性核准；必要時可使用回復功能。

除錯：貼上錯誤訊息或堆疊追蹤，引用相關檔案，要求診斷與修正，然後核准建議的變更。

專案概覽：引用資料夾，例如 `@src/services/`，要求產生模組地圖或架構摘要，並繼續詢問相依性或薄弱環節。

---

## 指令與快捷鍵

使用 `CodePreview` 快速測試指令或查閱常用快捷鍵：

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : 聚焦 Kimi 輸入框\nAlt+K : 插入目前檔案引用\nCtrl+N : 新增對話",
    },
  ]}
/>

| 快捷鍵 | 功能 |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | 聚焦 Kimi 輸入框 |
| `Alt+K` | 插入目前檔案引用 |
| `Ctrl+N` / `Cmd+N` | 新增對話 |
| `↑` / `↓` | 瀏覽輸入歷史 |

<Callout type="info">
在命令面板中輸入 **Kimi Code**，即可存取更多指令：在新分頁開啟、在側邊欄開啟，或管理工作階段。
</Callout>
