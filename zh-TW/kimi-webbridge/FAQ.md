---
title: "常見問題"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 常見問題 - Kimi 說明中心"
  description="關於 Kimi WebBridge 的安裝、連線，以及搭配多種瀏覽器與本機 Agent 使用時的常見問題。"
  ogType="article"
/>

# 常見問題

## 安裝與設定

### 安裝擴充功能時看到「無法從這個網站新增應用程式」？

請確認你是從官方線上應用程式商店安裝（Chrome Web Store 或 Edge Add-ons）。若無法存取線上應用程式商店，請使用官方網站提供的手動安裝方式。

### 執行連線指令後沒有任何反應？

請檢查你的網路連線。若問題仍然存在，請嘗試重新啟動 Kimi Claw Desktop，然後再次執行指令。

### 可以在多台電腦上使用嗎？

可以，但每台電腦都需要分別安裝與設定。

### 找不到 Kimi Claw Desktop？

Kimi Claw Desktop 是部署在你本機電腦上的 Kimi Claw。開啟 Kimi Desktop，在左側邊欄找到 Kimi Claw，建立新的 Claw，並選擇「部署在我的電腦上」。

## 連線與使用

### 擴充功能狀態顯示「已中斷連線」？

請先確認 Kimi WebBridge 瀏覽器擴充功能已成功安裝，然後依照你的設定方式執行以下步驟：

- **Kimi Desktop**：重新啟動 Kimi Desktop 後再試一次

- **其他本機 Agent**：在你的 Agent 中重新傳送以下指令，執行完成後重新啟動該 Agent：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### 在 Windows 安裝 WebBridge 時出現錯誤：Installation failed

Kimi WebBridge 支援 Windows 作業系統，安裝指令可在 Linux 環境中執行：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### WebBridge 安裝後顯示 Chrome 相容性警告，這代表什麼？

如果 WebBridge 可以正常開啟頁面，但 `snapshot`、`evaluate`、`screenshot` 或 `click` 等操作持續失敗，較常見的原因是**與其他瀏覽器擴充功能衝突**。

這種情況尤其常見於網頁擷取工具、網站輔助擴充功能、螢幕錄影擴充功能，以及 AI 助理擴充功能。

建議依照以下步驟排除：

1. 開啟瀏覽器的擴充功能管理頁面
2. 暫時停用其他擴充功能
3. 只保留 Kimi WebBridge 啟用
4. 重新啟動瀏覽器後再試一次
5. 如果 WebBridge 可以正常運作，請逐一重新啟用其他擴充功能，以找出造成衝突的擴充功能


### WebBridge 會洩漏我的登入資訊嗎？

不會。所有執行都在你的裝置本機完成——登入狀態與網頁內容都不會離開你的電腦。Agent 只能存取你授權的操作結果。

### 為什麼操作會失敗？

複雜的頁面結構或動態載入可能導致操作失敗。你可以嘗試簡化指令，或先請 Agent 截圖確認頁面狀態，再執行操作。

### 支援哪些瀏覽器？

目前支援 Chrome 與 Edge。建議使用最新版本以獲得最佳體驗。

## 搭配其他 Agent 使用

### 支援哪些其他 Agent？

WebBridge 支援所有本機 Agent，包括 Claude Code、Codex、Cursor、Kimi Code、Hermes Claw 等。

### 不同 Agent 的設定方式一樣嗎？

所有 Agent 的安裝指令都相同——只要執行一個 curl 指令即可安裝。詳細資訊請參考各 Agent 的 Skill 設定。
