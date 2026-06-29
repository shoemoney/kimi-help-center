---
title: "互動與輸入"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="互動與輸入 - Kimi 說明中心"
  description="Kimi Code CLI 提供多種互動方式，協助你高效與 AI 協作。"
/>

# 互動與輸入

Kimi Code CLI 提供多種互動方式，協助你高效與 AI 協作。

## Thinking mode

Thinking Mode 可讓 AI 在回覆前進行更深入的推理，特別適合處理複雜問題。

- 使用 `/model` 指令切換模型並開啟或關閉 Thinking Mode。
- 你也可以在啟動時加上 `--thinking` 旗標來啟用 Thinking Mode。

## 多行輸入

按下 **Ctrl-J** 可插入換行，進行多行輸入。這在撰寫較長提示詞，或貼上多行程式碼片段時很有用。

## 從剪貼簿貼上

按下 **Ctrl-V** 可貼上剪貼簿內容，支援文字與圖片。貼上圖片時，AI 可以直接解讀圖片內容（例如螢幕截圖、設計稿、錯誤截圖）。

## 斜線指令

以 `/` 開頭的指令可用於控制工作階段、設定與偵錯。常用指令包括：

| 指令 | 說明 |
| --- | --- |
| `/help` | 顯示說明資訊 |
| `/login` | 登入並授權 |
| `/model` | 切換模型與 Thinking Mode |
| `/sessions` | 列出並切換工作階段 |
| `/clear` | 清除目前上下文 |
| `/compact` | 壓縮上下文 |
| `/init` | 產生 AGENTS.md |
| `/exit` | 離開 CLI |

在輸入欄位輸入 `/`，系統會自動顯示可用指令清單。

## @ 路徑補全

在輸入中使用 `@` 符號來引用檔案或目錄路徑，系統會自動補全：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "檢查 @src/utils/auth.ts 是否存在任何安全性漏洞",
    },
  ]}
/>

AI 會自動讀取所引用的檔案內容作為上下文。

## 結構化問答

在某些情境中，AI 會提供結構化選項供你輸入。使用 **方向鍵** 選取選項，然後按下 **Enter** 確認。

## 操作確認

當 AI 需要修改檔案、執行 shell 指令或進行其他操作時，會先請你確認。你可以選擇：

| 選項 | 說明 |
| --- | --- |
| **允許** | 允許此次操作 |
| **本工作階段皆允許** | 在目前工作階段的剩餘時間內允許類似操作，不再提示 |
| **拒絕** | 拒絕此次操作 |

### YOLO 模式

如果你信任 AI 的操作，可以使用 YOLO 模式略過所有確認：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> 在 YOLO 模式下，AI 會自動執行所有操作，請謹慎使用。建議僅在受控的開發環境中使用。
