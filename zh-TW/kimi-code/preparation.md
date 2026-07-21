---
title: "準備工作"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "使用 Kimi Code 前需要了解的基本概念：終端機、PowerShell、CLI 與安全注意事項。"
---

<SeoMeta
  title="使用 Kimi Code 前的準備工作 - Kimi Help Center"
  description="了解終端機、PowerShell 與 CLI 的基本概念，以及如何安全地使用 Kimi Code CLI 進行開發。"
/>

# 準備工作

使用 Kimi Code 前，你需要先了解幾個基本概念。這些概念能幫助你更順利地安裝與使用 Kimi Code。

## 什麼是終端機？

**終端機**是一個可以透過輸入文字指令來操作電腦的視窗。

你可以把它想像成「文字版的檔案管理器」：在終端機裡，你不是用滑鼠點擊圖示，而是輸入 `ls`、`cd`、`mkdir` 等指令，來查看資料夾內容、切換目錄、建立檔案等等。

<Frames
  src="./images/preparation/preparation-01.png"
  alt="終端機示意圖"
/>

### 如何開啟終端機

| 作業系統 | 開啟方式 |
|---------|---------|
| **macOS** | 按下 `Cmd + Space`，輸入「Terminal」或「終端機」，再按 Enter |
| **Windows** | 按下 `Win + R`，輸入 `powershell` 或 `wt`；<br>或在開始功能表搜尋「PowerShell」/「Terminal」 |
| **Linux** | 按下 `Ctrl + Alt + T`，或在應用程式選單中找到「Terminal」 |

### 如何確認你的作業系統

- **macOS**：點擊螢幕左上角的 Apple 圖示 →「關於這台 Mac」
- **Windows**：按下 `Win + Pause/Break`，或在「本機」上按右鍵 →「內容」
- **Linux**：在終端機中執行 `uname -a` 或 `cat /etc/os-release`

## 什麼是 PowerShell？

<Frames
  src="./images/preparation/preparation-02.png"
  alt="PowerShell 示意圖"
/>

**PowerShell** 是 Windows 上常用的終端機工具，比標準的命令提示字元（CMD）更強大。在 Windows 上，Kimi Code CLI 必須在 PowerShell 中安裝與使用。

Windows 有兩種不同的「命令列」工具，請不要混淆：

| 工具 | 說明 | 適合使用？ |
|-----|------|---------|
| **CMD（命令提示字元）** | Windows 中最基本的命令列工具 | ❌ 不建議 |
| **PowerShell** | 更強大、現代化的命令列工具 | ✅ 建議使用 |

> **提示**：Kimi Code CLI 的安裝指令必須在 PowerShell 中執行，在 CMD 中可能無法正常執行。

## 工作目錄

Kimi Code CLI 啟動時，會把你目前所在的資料夾作為**工作目錄**。它只能讀取與修改該工作目錄內的檔案。

**開始前，請先確認終端機中的目前路徑**：

- 終端機提示符通常會顯示目前目錄，例如 `~/projects/my-app$`
- 輸入 `pwd`（macOS/Linux）或 `cd`（Windows）查看完整路徑
- 使用 `cd <folder-name>` 進入目標專案目錄，然後執行 `kimi`

> **範例**：假設你的專案位於 `~/Documents/my-project`，可依照以下方式啟動：
> 1. 開啟終端機
> 2. 輸入 `cd ~/Documents/my-project`
> 3. 輸入 `kimi` 啟動

## 如何執行指令

<Frames
  src="./images/preparation/preparation-03.png"
  alt="指令執行示意圖"
/>

在終端機或 PowerShell 中執行指令很簡單：

1. **複製指令**：從文件中複製指令文字
   - macOS/Linux：`curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows：`irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **貼到終端機**：在終端機視窗中按右鍵，或按 `Cmd/Ctrl + V` 貼上
3. **按下 Enter**：按下 `Enter` 鍵執行指令
4. **等待完成**：終端機會顯示執行過程與結果

> **注意**：在終端機中，`Ctrl+C` 通常是**中斷目前執行的指令**，不是複製文字。若要複製，請使用 `Cmd/Ctrl + Shift + C`；若要貼上，請使用 `Cmd/Ctrl + Shift + V`；也可以使用右鍵選單。

> **提示**：如果指令執行時要求你輸入密碼，終端機不會顯示任何字元。這是正常的安全機制，只要輸入密碼並按下 Enter 即可。

## 什麼是 CLI？

<Frames
  src="./images/preparation/preparation-04.png"
  alt="終端機示意圖"
/>

**CLI** 是 **C**ommand-**L**ine **I**nterface 的縮寫，意思是透過輸入文字指令使用工具，而不是在圖形介面中點擊按鈕。

Kimi Code CLI 是一個命令列工具：你在終端機中輸入 `kimi` 啟動它，接著透過文字指令與 AI 互動，讓它協助你閱讀程式碼、修改檔案、執行指令等等。

## 網路環境

使用 Kimi Code 需要連線至 Kimi 伺服器。如果你的網路環境有以下限制，可能需要調整設定：

- **公司／學校網路**：某些內部網路環境可能會限制存取外部 API。如果你有代理伺服器，可以在設定中填入代理位址。
- **VPN／代理**：如果你使用全域代理，請確認它不會攔截或干擾對 `api.kimi.com` 或 `api.moonshot.cn` 的請求。
- **防火牆**：檢查系統或路由器的防火牆是否阻擋了終端機程式的網路存取。

## 安全注意事項

Kimi Code CLI 是功能強大的 AI Agent。它可能會：

- **讀取**你電腦上的檔案內容
- **修改**你的程式碼與設定檔
- **執行** Shell 指令，例如安裝相依套件或執行測試

**使用時請務必留意以下事項**：

- **不要在敏感目錄中啟動**：避免在包含密碼、金鑰或私人個人檔案的目錄中執行 Kimi Code CLI。
- **仔細審查操作**：Kimi Code 在修改檔案或執行指令前，會先請你確認。不要習慣性地點擊「同意」。
- **先了解再繼續**：如果你不確定某項操作會造成什麼影響，請先要求 Kimi Code 說明它具體會做什麼，再決定是否繼續。
- **備份重要程式碼**：在重要專案中使用 Kimi Code 前，建議先將程式碼提交到版本控制系統，例如 Git，這樣就能隨時回復。

> **建議**：第一次使用時，先在測試專案或專案副本中試用 Kimi Code CLI。熟悉它的運作方式後，再用於正式專案。
