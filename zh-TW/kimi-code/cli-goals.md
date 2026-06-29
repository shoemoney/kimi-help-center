---
title: "目標"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "使用目標，讓 Kimi Code 在多輪對話中持續朝明確結果推進。"
---

<SeoMeta
  title="目標 - Kimi 說明中心"
  description="使用 /goal，讓 Kimi Code 在多輪對話中持續朝明確結果推進。了解何時使用目標、如何管理其生命週期，以及如何排入後續目標。"
/>

# 目標

目標能讓 Kimi Code 在多輪對話中持續朝明確結果推進。一般提示通常是在說下一步要做什麼，而目標則是在說最後必須達成什麼狀態。當任務有清楚的終點，但下一個有效步驟取決於代理程式在執行過程中發現的資訊時，請使用 `/goal`；例如修復一批失敗的測試，或追查建置失敗的根本原因。

## 開始一個目標

在 `/goal` 後寫下目標內容：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修復 issue tracker 中列出的 bug。",
    },
  ]}
/>

Kimi Code 會儲存這個目標，將它作為下一則使用者訊息送出，並進入目標模式。每一輪結束後，它都會檢查目標是否已完成、受阻、暫停，或仍在進行中。

目標最好同時寫明終點，以及能證明完成的依據：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修復每個標記為 checkout-regression 的 bug，為每個修復新增或更新測試，並執行 checkout 測試套件",
    },
  ]}
/>

避免只描述籠統方向的目標：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 找出這個 codebase 中的所有 bug。",
    },
  ]}
/>

這樣的目標沒有說明什麼才算成功、要檢查哪些內容，或何時應該停止。代理程式可能會立刻判定受阻，也可能工作得比你預期久得多。

### 何時使用目標

適合把目標用在有明確終點、且能驗證結果的工作上。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 修復每個失敗的 checkout 測試，並成功執行 checkout 測試套件。",
    },
  ]}
/>

Kimi Code 可以檢查測試輸出、修改檔案、重新執行檢查，並判斷目標何時完成。

當任務可能需要好幾輪調查與修復時，也適合使用目標。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 找出 release build 失敗的原因，修復根本問題，並驗證 build 通過。",
    },
  ]}
/>

目標描述的是結果，因此即使第一個線索不是根本原因，代理程式也能調整方向。

對於應依序完成、且不需要再提示就能繼續推進的工作，也可以使用目標。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 更新功能實作、新增文件、執行測試，並摘要說明變更的檔案。",
    },
  ]}
/>

如果你已經知道工作完成前必須通過哪些檢查，或必須產出哪些成果，這會很有用。

### 何時不該使用目標

不要把目標用在範圍過大的主題或開放式討論上。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 你好！",
    },
  ]}
/>

<Callout type="warning">
對於不構成目標的內容，Agents 會立即將目標標記為完成。
</Callout>

不要把目標用在明知不可能完成或無法解決的任務上。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 證明 1 + 1 = 3。",
    },
  ]}
/>

<Callout type="warning">
如果目標看起來不可能完成或無法解決，Agents 會將目標標記為受阻。
</Callout>

不要使用含糊或過於複雜的目標。

**反例：**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 用單一 HTML 檔案建立一款電玩遊戲。",
    },
  ]}
/>

<Callout type="warning">
Agents 可能會完成目標，但也可能在很長一段時間後產出預料之外或令人意外的結果。
</Callout>

## 管理生命週期

使用同一組指令介面來檢視或控制目前目標：

| 指令 | 動作 |
| --- | --- |
| `/goal` 或 `/goal status` | 顯示目前目標及其進度 |
| `/goal pause` | 暫停作用中的目標，但不刪除 |
| `/goal resume` | 繼續已暫停或受阻的目標 |
| `/goal cancel` | 移除目前目標 |
| `/goal replace <objective>` | 用新的目標內容取代目前目標 |

目標可能以三種方式停止：

- **complete**：目標已完成，Kimi Code 會清除目標，代理程式也會摘要說明如何完成工作
- **paused**：你暫停了目標、中斷了該輪對話、恢復了一個帶有作用中目標的工作階段，或遇到模型、provider 或 runtime 錯誤
- **blocked**：Kimi Code 需要輸入、無法依照目前描述完成目標，或已達預算上限。當代理程式讓目標進入受阻狀態時，會寫一段簡短訊息說明原因。

請把停止條件寫進目標內容中。`/goal` 沒有獨立的停止上限旗標。

## 排入後續目標

代理程式有時會太快完成目標。使用者可能會因為一次只能指定一個目標而失望。許多人其實已經知道接下來想追求哪些目標，卻必須等目前目標完成、開啟 TUI，再手動提交下一個目標。

如果你已經準備好更多工作，但不想打斷目前目標，請使用 `/goal next`：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next 測試通過後更新 release notes",
    },
  ]}
/>

目前目標執行時，代理程式看不到後續目標。當目前目標完成後，Kimi Code 會像使用者輸入 `/goal <objective>` 一樣，開始第一個後續目標。

如果沒有作用中的目標，`/goal next <objective>` 會立即開始該目標。它的行為與 `/goal <objective>` 相同，並會在目標開始前顯示狀態訊息。

以互動方式管理後續目標：

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

在管理器中，使用 <kbd>↑</kbd> / <kbd>↓</kbd> 瀏覽，使用 <kbd>Space</kbd> 選取要移動的目標，使用 <kbd>↑</kbd> / <kbd>↓</kbd> 重新排序，使用 <kbd>E</kbd> 編輯，使用 <kbd>D</kbd> 刪除，使用 <kbd>Esc</kbd> 取消。編輯時，使用 <kbd>Shift-Enter</kbd> 或 <kbd>Ctrl-J</kbd> 新增一行，並使用 <kbd>Enter</kbd> 儲存。

如果目前目標已暫停、取消或受阻，Kimi Code 不會開始下一個後續目標。當某個目標受阻且存在後續目標時，TUI 會提醒你這些目標正在等待完成。

## 謹慎使用目標模式

目標模式適合可透過檔案、測試、指令輸出、生成的成果物，或清楚的書面報告來檢查的工作。對於一次性的編輯，或只需要一個答案的問題，目標模式就不太適合。

在 `manual` 權限模式中，目標工作可能會因工具呼叫需要核准而暫停。若要無人值守地執行工作，請使用符合儲存庫風險與代理程式可能執行之指令風險的權限模式。

在非互動式提示模式中，僅支援建立目標：

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal 修復失敗的 checkout 測試\"",
    },
  ]}
/>

提示模式會在目標完成時以 code `0` 結束、受阻時以 `3` 結束、暫停時以 `6` 結束。`/goal next` 和其他管理指令都是 TUI 控制項。
