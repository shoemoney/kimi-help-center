---
title: "工作階段與脈絡"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="工作階段與脈絡 - Kimi 說明中心"
  description="Kimi Code CLI 支援多工作階段管理與脈絡持久化，讓你隨時暫停並繼續工作。"
/>

# 工作階段與脈絡

Kimi Code CLI 支援多工作階段管理與脈絡持久化，讓你隨時暫停並繼續工作。

## 恢復工作階段

你可以透過幾種方式恢復先前的工作階段：

### 繼續最近的工作階段

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

使用 `--continue`（或 `-c`）旗標繼續上一段對話。
### 指定工作階段 ID

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session <session-id>",
    },
  ]}
/>

使用 `--session` 旗標恢復指定的工作階段。

### 瀏覽並切換

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

執行 `/sessions`（或 `/resume`）以查看工作階段清單，並選擇要恢復的工作階段。
## 啟動時重播

恢復工作階段時，Kimi Code CLI 會自動重播對話歷史，協助你快速回想先前的脈絡與進度。

## 狀態持久化

以下狀態會在不同工作階段之間自動儲存並恢復：

- **核准決策**：系統會記住「在此工作階段允許」等決策。
- **動態子代理**：會保留工作階段期間建立的子代理設定。
- **其他目錄**：透過命令新增的額外工作目錄也會保留下來。

這表示你恢復工作階段後，就能無縫延續先前的工作。

## 清除與壓縮

Kimi Code CLI 會在需要時自動壓縮脈絡，確保對話能繼續進行。你也可以使用斜線命令手動管理脈絡：

### 清除脈絡

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

輸入 `/clear`（或 `/reset`）即可清除目前工作階段中的所有脈絡，並開始一段全新對話：

### 壓縮脈絡

輸入 `/compact` 可壓縮脈絡，在降低 token 用量的同時保留關鍵資訊：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

壓縮時也可以加入指示，告訴 AI 應優先保留哪些資訊：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact 保留關於資料庫遷移的討論",
    },
  ]}
/>

### 脈絡狀態

CLI 底部的狀態列會即時顯示目前的脈絡使用率，協助你監控脈絡消耗。當使用率偏高時，請使用 `/compact` 壓縮脈絡，避免遺失重要資訊。
