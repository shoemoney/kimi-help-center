---
title: "常見問題"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work 常見問題 - Kimi 說明中心"
  description="Kimi Work 常見問題：與網頁版的差異、存取本機檔案時的權限控制、WebBridge 瀏覽器自動化能做什麼、排程任務如何執行。"
/>

# Kimi Work 常見問題

## Kimi Work 和網頁版有什麼差異？

Kimi 網頁版適合快速對話與查詢；Kimi Work 則是為深度工作流程打造的本機 Agent。它能讀取並處理你的本機資料夾、透過 WebBridge 自主瀏覽網頁、在背景執行 Python 程式碼、執行排程任務，是一個系統層級的「數位員工」。

## 存取本機檔案時，Kimi Work 如何保護我的隱私？

你對自己的檔案擁有絕對控制權。Kimi Work 提供權限控制，由你自行選擇授權方式：

- **請求權限**：操作前先請求授權，Kimi 在修改、覆寫本機檔案或執行程式碼前會請求你的明確授權；
- **全部允許**：無需授權直接執行。

選擇「請求權限」時，未經你同意不會發生任何操作。

## WebBridge（瀏覽器自動化）具體能做什麼？

WebBridge 讓 Kimi 能像人一樣使用瀏覽器。你可以請它查看某個網站的最新資訊並總結，或把歷史股價資料擷取到本機 Excel。它會自主點擊、捲動、擷取資料，替你省下大量手動操作的時間。

## 排程任務能做什麼？電腦休眠時還會執行嗎？

內建的 Cron 排程器支援 LLM Agent 呼叫、Python/Shell 執行等，可依每日、每小時或條件觸發。為確保任務在夜間也能順利執行，只要在設定中開啟「保持電腦喚醒」（Keep Computer Awake）選項即可。
