---
title: "開始使用"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code CLI 的安裝、登入與入門指南。"
---

<SeoMeta
  title="Kimi Code CLI 安裝與快速入門 - Kimi 說明中心"
  description="開始使用 Kimi Code CLI：安裝命令、終端機與瀏覽器用法、首次登入，以及使用 /init 產生 AGENTS.md。"
/>

# 開始使用 Kimi Code CLI

Kimi Code CLI 是在終端機中執行的 AI agent，可協助你完成軟體開發任務與日常終端機操作——讀取與修改程式碼、執行 shell 命令、搜尋檔案、擷取網頁，並在工作過程中依據回饋自主規劃並調整下一步。

它適用於以下情境：

- **撰寫與修改程式碼**：實作新功能、修復 bug、完成重構
- **理解專案**：探索不熟悉的 codebase，回答架構與實作相關問題
- **自動化任務**：批次處理檔案、執行建置與測試、串接多個腳本

CLI 以 TypeScript 撰寫，透過 npm 發布，並在 Node.js 上執行。

## 開始之前

- **作業系統**：macOS、Linux，或 Windows（透過 PowerShell）
- **Kimi 帳號**：有效的 Kimi 會員訂閱，或可呼叫的 API 金鑰

<Callout type="tip">
Kimi Code CLI 是完整互動式的 TUI 應用程式。為獲得最佳視覺體驗，建議在支援真彩色與連字的終端機中執行，例如 [Kitty](https://sw.kovidgoyal.net/kitty/) 或 [Ghostty](https://ghostty.org/)。
</Callout>

## 安裝

你可以使用兩種安裝方式：官方安裝腳本（建議使用，無須預先安裝 Node.js），或全域 npm 安裝。

### 安裝腳本（建議）

macOS / Linux：

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="安裝 Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows（PowerShell）：

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

腳本會自動下載最新版本、驗證 checksum，並將 `kimi` 可執行檔加入你的 `PATH`。

<Callout type="tip">
在 Windows 上，首次啟動前請先安裝 [Git for Windows](https://gitforwindows.org/)。Kimi Code CLI 會使用隨附的 Git Bash 作為 shell 環境；如果 Git Bash 安裝在自訂位置，請將 `KIMI_SHELL_PATH` 設為 `bash.exe` 的絕對路徑。
</Callout>

### npm 安裝

如果你已安裝 Node.js 22.19.0 或更新版本，可以直接透過 npm 安裝：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

或使用 pnpm：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### 驗證安裝

安裝完成後，確認可執行檔已可使用：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
如果找不到 `kimi` 命令，請嘗試重新開啟終端機，或執行 `source ~/.bashrc`（或 `~/.zshrc`）。
</Callout>

> 由於 macOS Gatekeeper，首次執行 `kimi` 可能會明顯較慢。你可以將終端機應用程式加入 **系統設定 → 隱私權與安全性 → 開發者工具**，加快後續啟動速度。

## 升級與解除安裝

**升級**：執行 `kimi upgrade`——CLI 會檢查最新版本並顯示更新選項。選擇 `Install update now`，即可依據目前的安裝來源升級。你也可以直接透過套件管理工具升級：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**解除安裝**：如果你是透過腳本安裝，刪除 `kimi` 可執行檔即可。如果你是透過 npm 安裝：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## 首次啟動

### 互動式終端機

進入你的專案目錄，執行 `kimi` 啟動互動式 UI：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### 單次指令

若要不進入互動式 UI、只執行單次指令，請使用 `-p`：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"查看此專案的目錄結構\"",
    },
  ]}
/>

### 恢復工作階段

若要恢復上一個工作階段，請加上 `-C`：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### 首次登入

首次啟動時，你需要設定 API 來源。在互動式 UI 中輸入 `/login`，開始登入流程：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` 會開啟平台選擇器，支援以下兩種方式：

- **Kimi Code (OAuth)**——device-code flow；在任一裝置開啟連結、登入，並輸入代碼完成授權
- **Kimi Platform API 金鑰**——輸入來自 `platform.kimi.com` 或 `platform.kimi.ai` 的 API 金鑰

若要登出，請輸入 `/logout` 清除目前的憑證。

<Callout type="tip">
如果你想連接 Anthropic、OpenAI、Google 或其他 provider，請直接編輯 `~/.kimi-code/config.toml` 來設定 API 金鑰。所有設定選項的完整參考，請參閱環境變數與設定覆寫文件。
</Callout>

## 產生 AGENTS.md

在你的專案目錄中執行 `/init` 命令。Kimi Code CLI 會自動掃描專案結構，並產生 `AGENTS.md` 檔案：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` 用來向 AI 提供專案背景資訊、建置步驟、程式碼規範與其他 context，協助 AI 更準確理解你的專案。

## 你的第一次對話

登入後，請用自然語言描述任務。建議先讓 Kimi Code CLI 熟悉專案：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "查看此專案的目錄結構，並簡要說明每個目錄的用途。",
    },
  ]}
/>

Kimi Code CLI 會在回覆前自動呼叫讀取檔案、搜尋等工具，瀏覽相關內容。唯讀操作預設會自動執行，不需要你確認。若要修改檔案或執行 shell 命令，則會在進行前請你確認。

你也可以直接描述更具體的任務：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "在 src/utils 中新增一個可將任意字串轉成 kebab-case 的函式，並為它新增單元測試。",
    },
  ]}
/>

Kimi Code CLI 會規劃步驟、修改程式碼、執行測試，並告訴你每一步做了什麼。

<Callout type="tip">
不知道可以做什麼？隨時輸入 `/help` 開啟內建命令與鍵盤快捷鍵面板。使用 `↑`/`↓` 瀏覽，按 `Esc` 關閉。若要退出，請輸入 `/exit`、按兩次 `Ctrl-C`，或在輸入框為空時按 `Ctrl-D`。
</Callout>

## 常用命令與鍵盤快捷鍵

### 工作階段命令

| 命令 | 說明 |
| --- | --- |
| `/new` | 開始新的工作階段，清除目前 context |
| `/sessions` | 瀏覽工作階段歷史，並選擇要恢復的工作階段 |
| `/model` | 切換目前模型 |
| `/compact` | 手動壓縮 context，釋放 token |
| `/fork` | Fork 目前工作階段，保留歷史但獨立繼續 |

### 最常用鍵盤快捷鍵

| 快捷鍵 | 說明 |
| --- | --- |
| `Esc` | 中斷串流輸出 / 關閉彈出視窗 |
| `Ctrl-C` | 中斷輸出；閒置時按兩次可退出 |
| `Shift-Tab` | 切換 Plan 模式 |
| `Ctrl-S` | 在串流輸出中途插入訊息，不必等目前回覆完成 |
| `Ctrl-O` | 收合 / 展開工具輸出 |

若要查看完整清單，請輸入 `/help` 或前往 [互動與輸入](/kimi-code/cli-interaction)。

## 資料儲存位置

Kimi Code CLI 預設會將本機資料儲存在 `~/.kimi-code/` 底下，包括設定檔、工作階段記錄、log 與更新快取。若要移到其他位置，請透過 `KIMI_CODE_HOME` 環境變數指定新的路徑。完整目錄結構請參閱環境變數文件。

## FAQ

**我輸入了 API Key，但顯示 authentication failed。**

首先，請確認你的 Key 與 Base URL 屬於同一個平台。`api.kimi.com` 與 `api.moonshot.cn` 是兩套完全獨立的帳號系統，API 金鑰不能互通：

| 平台 | Base URL | 計費 | 金鑰建立 |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI 相容：`https://api.kimi.com/coding/v1`<br> Anthropic 相容：`https://api.kimi.com/coding/` | Kimi 會員訂閱（包含 quota） | [Kimi Code Console](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | 按量付費 | [Kimi Open Platform](https://platform.kimi.com) |

**安裝後找不到 `kimi` 命令。**

安裝腳本會將 `kimi` 加入你的 PATH，但你需要重新啟動終端機，或執行 `source ~/.bashrc`（或 `source ~/.zshrc`）才會生效。如果仍然找不到，請檢查 `~/.local/bin` 是否在你的 PATH 中。

**執行 `/login` 後瀏覽器沒有彈出。**

在遠端伺服器或 headless 環境中，`/login` 會顯示一個 URL。請手動複製到瀏覽器中完成授權。

如果你有任何問題或建議，請在 [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues) 提供回饋。

## 下一步

- [互動與輸入](/kimi-code/cli-interaction)——輸入框操作、approval flow、Plan 模式與 YOLO 模式說明
- [工作階段與 context](/kimi-code/cli-sessions)——恢復工作階段、壓縮 context、匯出工作階段
- [常見使用情境](/kimi-code/cli-use-cases)——典型任務的 prompt 範例
