---
title: "Kimi 能做什麼？"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 能做什麼？ - Kimi 說明中心"
  description="關於 Kimi 能力的常見問題：上網搜尋與瀏覽器操作、控制電腦桌面（Kimi Computer Use）、生成圖片／影片／語音、撰寫程式碼、建立網站、製作 PPT 與試算表、處理檔案、記憶、多語言支援與上下文長度。"
/>

# Kimi 能做什麼？

## Kimi 可以搜尋網路、瀏覽網頁嗎？

可以。Kimi 會自動判斷問題是否需要連網，並使用內建搜尋工具取得資訊。在 **Kimi Code** 與 **Kimi Work** 中，搭配 **WebBridge**，Kimi 也能像人一樣操作瀏覽器——瀏覽、點擊、捲動、擷取資料，並完成多步驟的網頁任務。

## Kimi 可以操作我的電腦桌面嗎？

在一般聊天與 Agent 任務中，Kimi **沒有權限**操作你的電腦。**在 Kimi Work 中，你可以自行選擇是否啟用這項能力**。

在 Kimi Work 中，透過 **Kimi Computer Use**，Kimi 可以替你在桌面上點擊、輸入、捲動、拖曳，並讀取應用程式介面內容或螢幕截圖。例如：「幫我點 X」、「在 Y 輸入……」、「查看 Z app 目前狀態」，或「列出目前已開啟的 app」。所有操作都會在背景執行，因此 Kimi 不會接管你的滑鼠，也不會切換前景視窗。

**安裝方式**：在 Kimi Work 中點擊「外掛程式」，選擇「Kimi Computer Use」，再點擊安裝。你也可以在「工作」模式中送出以下指令來安裝：

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Please install kimi computer-use for me: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi 可以生成圖片、影片和語音嗎？

可以。Kimi 可透過創意設計外掛程式生成圖片、影片與音訊。使用前，請先從外掛程式市場安裝對應的外掛程式：

- **圖片生成**：根據文字描述生成高品質圖片。支援 1K/2K/4K 解析度、多種長寬比、可選不透明或透明背景，並可輸出 JPG / PNG。
- **影片生成**：根據文字描述生成高品質影片，並可選擇提供參考圖片。支援 16:9、4:3、1:1、3:4、9:16、21:9 等長寬比，片長為 4–12 秒。
- **音訊生成**：支援以多種華語聲線進行文字轉語音，也可根據英文描述生成音效，長度為 0.5–22 秒。

## Kimi 可以寫程式碼、建立網站、製作 PPT 和試算表嗎？

可以。作為能自主執行任務的 AI Agent，Kimi 支援建立網站、製作 PPT、處理文件與試算表、Deep Research（深度研究）等能力。

## Kimi 可以處理哪些檔案？

Kimi 支援 PDF、Word、Excel、PPT、圖片、TXT、影片等常見格式。**單一檔案大小不得超過 100 MB，且一次最多可上傳 50 個檔案**。

## Kimi 有記憶功能嗎？

有。[記憶](/features/memory-space)會自動保存重要資訊，讓 Kimi 更了解你。如果你需要依專案分開管理記憶與資料，可以使用[專案](/features/project)功能。

## Kimi 支援多種語言嗎？

支援。你可以在 **「設定」→「一般」→「語言」** 中切換介面語言。目前支援的語言包括德文、俄文、法文、繁體中文、韓文、葡萄牙文、泰文、土耳其文、西班牙文、義大利文、印尼文、英文與越南文。K2.6 與 K3 都支援多語言對話、檢索與創作。

## Kimi 一次可以處理多少內容？

K2.6 的單輪上下文長度約為 **128K tokens（約 5 萬至 6 萬個中文字）**。對於超長文件，**K3 提供 100 萬 tokens 的上下文**（需最高會員等級）。詳情請參閱[聊天超過 20 萬中文字時該怎麼辦？](/others/chat-issues)。
