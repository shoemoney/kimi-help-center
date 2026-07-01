---
title: "Kimi Claw Android 概覽"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Claw Android 概覽 - Kimi 說明中心"
  description="了解如何在 Android 手機上部署 OpenClaw，將手機變成全天候 AI 遠端助理。"
  ogType="article"
/>

# Kimi Claw Android 概覽

本文將介紹如何將 OpenClaw 部署到 Android 手機，讓閒置手機成為你的全天候 AI 遠端助理。你可以透過 Kimi、Feishu、WeChat 等通訊應用程式遠端控制手機、使用應用、連接智慧家庭，並建立專屬的個人助理。

建議將 Kimi Claw Android 部署在閒置手機上，以避免與日常使用產生權限衝突。請勿手動升級 OpenClaw 版本；官方適配後的更新會透過應用內版本更新提供。

## Kimi Claw Android 簡介

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

系統需求：

| 項目 | 要求 |
| --- | --- |
| 作業系統 | Android 8.0 及以上版本 |
| 可用儲存空間 | 至少 5GB |
| 網路 | 需要穩定的網路連線 |
| 帳號 | Kimi Allegretto 及以上訂閱方案 |

<Callout type="info">
建議使用閒置手機，以免影響日常使用。
</Callout>

## 下載與安裝
### 下載 Kimi Claw Android

你可以透過以下方式下載：

#### 方法一：掃描網頁 QR code 下載。
登入 [kimi.com](https://kimi.com)，找到「下載 Kimi Claw Android」入口，並使用 Android 手機掃描頁面上的 QR code 下載。

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### 方法二：直接從 Google Play 下載
在手機應用商店搜尋「Kimi Claw」並完成下載

#### 方法三：在手機上下載 Kimi App
開啟 Kimi App，點擊 Kimi Claw Android，也可以連結既有的 OpenClaw 執行個體。

### 初始設定 

首次開啟 Kimi Claw Android 時，你會看到歡迎頁面。了解以下重要資訊後，點擊「開始設定」進入設定流程。

- 快速部署 OpenClaw - 將 OpenClaw 部署到本機手機，透過 Kimi、Feishu 等進行溝通。
- 建議使用閒置手機 - Kimi Claw Android 需要穩定網路才能運作，建議使用閒置手機
- 請安全使用 - OpenClaw 可能涉及隱私與安全風險，請謹慎使用。

勾選同意 Privacy Policy（隱私權政策）與使用者協議後，繼續下一步。

#### 步驟一：授予權限
Kimi Claw Android 需要以下權限，才能在背景穩定運作。請逐一點擊「授權」完成授權。

| 權限 | 說明 |
| --- | --- |
| 系統通知 | 顯示閘道狀態與提醒 |
| 儲存空間權限 | 需要至少 5GB 可用空間 |
| 背景執行權限 | 切換到背景後保持閘道運作 |

由於不同手機品牌的設定路徑不盡相同，以下為一般步驟：

1. 點擊「開啟設定」跳轉至手機設定頁面
2. 進入應用程式管理清單，選擇 Kimi Claw Android
3. 開啟自動啟動開關
4. 在耗電管理中選擇「完全允許背景行為」
5. 返回 Kimi Claw Android，點擊「我已完成」繼續安裝

#### 步驟二：設定 Kimi 帳號

1. 點擊「前往設定」跳轉至 Kimi App 進行授權
2. 授權完成後，Kimi 會自動為 Kimi Claw Android 建立 Kimi Coding Plan API key
3. 如果你是免費使用者，需要先啟用會員權益。點擊「前往升級」啟用會員。

#### 步驟三：安裝 OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

如果安裝失敗，可以點擊「重新安裝」再試一次。若多次失敗，請點擊「遇到問題？前往回饋」提交問題。

## Dashboard 使用指南

### 主介面

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

設定完成後，進入 Dashboard 主介面，你可以看到以下資訊：

- OpenClaw 閘道狀態 — 啟動中 / 已連線 / 已停止，以及執行時間
- 聊天頻道 — 目前已連接的通訊頻道清單
- OpenClaw 日誌 — OpenClaw 執行的原始日誌
- 使用 Kimi 對話 — 開啟 Kimi App，進入與 Kimi Claw Android 對應的對話介面，並自動切換至對應的 Claw。

如果 Dashboard 頂部出現權限提醒，表示部分權限尚未授予或已失效。請依照提示逐項完成授權，確保 Kimi Claw Android 正常運作。

### 聊天頻道管理

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
在 Dashboard 中，你可以管理所有通訊頻道：

- 查看已連接頻道及其狀態（例如 Kimi - 已連線、Feishu - 已連線）
- 點擊「+ 連接」新增聊天頻道
- 點擊既有頻道以查看詳情或刪除

<Callout type="info">
請至少保留一個聊天頻道，以確保能與 Kimi Claw Android 正常通訊。
</Callout>

### OpenClaw 日誌

- 搜尋 — 依關鍵字搜尋日誌內容
- 篩選層級 — 依日誌層級篩選（資訊 / 警告 / 錯誤等）
- 自動捲動到底部 — 自動捲動至最新日誌
- 重新整理 — 手動重新整理日誌內容

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### 設定

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
點擊設定進入設定頁面：

**功能層：**

- ClawHub 技能：自動關聯 ClawHub 官方網站，並管理 Kimi Claw Android 可用的技能
- OpenClaw 工作區：進入本機 OpenClaw 設定檔目錄，編輯個人偏好

**系統層：**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- 備份與還原：備份目前 OpenClaw 設定與歷史紀錄，並支援還原過去的設定與紀錄
- 無障礙服務：監控手機的無障礙服務權限
- 背景執行權限：監控手機的背景執行權限
- 版本升級：監控版本，點擊即可自動升級

**關於：**

- 說明：基本使用建議說明
- 回饋：提交回饋
- 使用者協議：閱讀使用者協議
- Privacy Policy：閱讀 Privacy Policy

#### ClawHub 技能

自動關聯 ClawHub 官方網站，並管理 Kimi Claw Android 可用的技能。你可以下載並安裝技能，擴充 Claw 的能力。

#### OpenClaw 工作區

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### 備份與復原

Kimi Claw Android 同時提供自動與手動備份功能，確保你的 OpenClaw 歷史紀錄與設定不會遺失。

自動備份

Kimi Claw Android 會定期自動備份目前 OpenClaw 的歷史紀錄與設定，並打包成壓縮檔儲存。無需手動操作，系統會在背景自動完成。

手動備份：

如果你想記錄某一特定時刻的狀態，也可以主動點擊備份，手動儲存目前的歷史紀錄與設定快照。點擊「備份」即可匯出所有目前設定備份。

**還原設定：**

Kimi Claw Android 支援還原至先前的設定狀態，也支援使用 Kimi Claw Android 的自動備份狀態與主動備份狀態。

在以下情境中，你可以使用復原功能還原到先前狀態：

- 解除安裝或重新安裝 App 導致歷史紀錄消失時，可還原過去紀錄
- 需要切換 Claw 設定時，可以還原到先前儲存的設定狀態
- 更換手機並重新部署時，只需匯入備份檔即可還原

在備份清單中點擊對應的備份檔，即可自動將歷史紀錄與設定還原到該時間點，確保過去紀錄不會被清除。

## 設定聊天頻道

### Kimi
Kimi 是預設通訊頻道，在 Onboarding 流程中完成 Kimi 帳號設定後會自動連接，無需額外操作。

安裝與設定完成後，你的 Kimi Claw Android 會自動出現在 Web 用戶端（kimi.com）的 Bot 切換頁面。點擊切換後，頭像與聊天串會同步切換。

Kimi Claw Android 在 Bot 管理中僅支援編輯 Bot 名稱與刪除 Bot。

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

支援三種連接方式：

方法一：開啟 Feishu 建立

點擊「開啟 Feishu 建立」，依提示在 Feishu 中完成應用建立，狀態會自動更新為「已連線」。

方法二：掃描 QR code 建立

1. 點擊「掃描 QR code 建立」
2. 使用 Feishu 掃描 QR code
3. 在瀏覽器中完成 Feishu 應用建立

**方法三：手動輸入 Bot 資訊**

1. 點擊「手動輸入 Bot 資訊」
2. 輸入 App ID 與 App Secret
3. 點擊「新增」完成連接

### WeChat
WeChat 頻道需要先在 WeChat 端安裝 WeChat Claw，Kimi Claw Android 會透過 WeChat Claw 終端進行通訊

你需要先依照 WeChat 官方指引完成 WeChat Claw 安裝。當 WeChat ClawBot 出現在聊天頁面時，即表示安裝完成。

進入 Kimi Claw Android，連接 WeChat 頻道，並使用 WeChat 掃描 QR code 完成流程

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android 支援整合 Telegram，使用者需先取得自己的 bot token 與使用者 ID。

## 自動化

Kimi Claw Android 的核心能力之一，是控制手機上的應用程式來完成各類任務。透過 Kimi、Feishu、WeChat 等聊天頻道向 Claw 發送指令後，Claw 會自動開啟手機上對應的應用程式，像真人一樣執行一連串操作，最後完成你指定的任務。

### 運作原理

當你透過聊天頻道向 Claw 發送任務指令時，Claw 會：

1. 理解你的任務需求
2. 自動開啟手機上對應的應用程式
3. 透過模擬使用者操作（點擊、滑動、輸入等）逐步完成任務
4. 執行過程中擷取螢幕截圖，方便你回顧執行過程
5. 完成任務後向你回報執行結果

### 典型使用情境

#### 購物與消費

在淘寶、天貓、美團等平台搜尋商品、加入購物車、查看訂單、領取優惠等。

#### 出行與導航

在 Amap 查詢計程車費、查看地鐵時刻、搜尋附近飯店、預訂行程等。

#### 社交與內容

在 WeChat、Rednote、Douyin 等平台查看訊息、瀏覽內容、搜尋商品、執行互動操作等。

## 使用技巧

### 透過聊天軟體控制手機

設定完成後，你可以在 Kimi、Feishu、WeChat 中向 Claw 發送命令，遠端控制 Android 手機上的應用程式。例如：

- 幫我開啟 WeChat，查看最新訊息
- 開啟地圖，搜尋附近餐廳
- 「幫我查看日曆，看看今天有哪些行程」

### 使用 ClawHub 技能

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android 內建 ClawHub 技能庫。你可以在設定中管理與安裝技能，為 Claw 擴充更多能力。

適合使用技能的情境：
- 資訊整理：新聞彙整、競品比較
- 資料分析：市場回顧、資料解讀
- 工作流程自動化：從需求拆解到產出的完整流程

### 多頻道同時上線
你可以同時連接 Kimi、Feishu、WeChat 等多個頻道，並在不同通訊應用程式中與 Claw 對話。只需在 Dashboard 的頻道管理區塊點擊「+ 連接」即可新增。

## 安全與受限應用程式

### 安全說明

使用 Kimi Claw Android 前，請留意以下安全注意事項：

1. 使用閒置手機 — Kimi Claw Android 會占用手機系統權限，可能影響日常使用。建議使用閒置手機

2.  敏感資料隔離 — Kimi Claw Android 會讀取本機檔案資料，請事先清理或隔離敏感資訊

3. 金融應用保護 — 系統已自動封鎖銀行、支付、證券與保險類應用程式的存取，以保障資金安全

### 受限應用程式清單

基於金融安全與隱私考量，以下類別的 App 會由 Kimi Claw Android 自動封鎖存取，無法遠端操作：

1. 社交

| Package | 風險說明 |
| --- | --- |
| wechat | 涉及重要的私人社交與支付功能 |

2. 銀行

| Package | App 名稱 | 風險說明 |
| --- | --- | --- |
| com.android.bankabc | abc，中國農業銀行 | 中國農業銀行，可執行轉帳、理財等操作 |
| com.bankcomm.main | bocom，交通銀行 | 交通銀行，支援轉帳、理財等操作 |
| com.bjbk.im | 北京銀行 | 北京銀行，可執行轉帳、理財等操作 |
| com.cebbank.im | 光大銀行 | 中國光大銀行，可執行轉帳、理財等操作 |
| com.cgb.im | 廣發銀行 | 廣發銀行，可執行轉帳、理財等操作 |
| com.chinamworld.bocmbci | boc，中國銀行 | 中國銀行，四大銀行之一 |
| com.chinamworld.main | CCB，中國建設銀行 | 中國建設銀行，四大銀行之一 |
| com.cib.im | 興業銀行 | 興業銀行，可執行轉帳、理財等操作 |
| com.citic.im | 中信銀行 | 中國中信銀行，支援轉帳、理財等操作 |
| com.cmbc.im | 民生銀行 | 中國民生銀行，可執行轉帳、理財等操作 |
| com.cmbchina.ccd.pluto.customerView | cmb，招商銀行 | 招商銀行，支援轉帳、理財等操作 |
| com.hxb.im | 華夏銀行 | 華夏銀行，可執行轉帳、理財等操作 |
| com.hzbk.im | 杭州銀行 | 杭州銀行，支援轉帳、理財等操作 |
| com.icbc | ICBC，中國工商銀行 | 中國工商銀行，四大銀行之一 |
| com.jsbk.im | 江蘇銀行 | 江蘇銀行，支援轉帳、理財等操作 |
| com.nbbk.im | 寧波銀行 | 寧波銀行，支援轉帳、理財等操作 |
| com.pingan.paces.cloud | 平安口袋銀行 | 平安銀行手機用戶端 |
| com.psbc.im | 郵儲銀行 | 中國郵政儲蓄銀行 |
| com.shbk.im | 上海銀行 | 上海銀行，支援轉帳、理財等操作 |
| com.spdb.im | 上海浦發銀行 | 上海浦東發展銀行 |

3. 支付

| Package | App 名稱 | 風險說明 |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay，中國最大的第三方支付平台 |
| com.paypal.android.p2pmobile | paypal | PayPal，全球最大的線上支付平台 |
| com.unionpay | ysf，雲閃付 | 中國銀聯雲閃付，銀行卡支付工具 |
| com.squareup.cash | cashapp | Cash App，美國行動支付平台 |
| com.venmo | venmo | Venmo，美國 P2P 支付平台 |
| com.google.android.apps.walletnfcrel | googlewallet，wallet | Google Wallet，Google 的支付錢包 |

4. 證券

| Package | App 名稱 | 風險說明 |
| --- | --- | --- |
| com.citics.pbm | CITIC，信 e 投 | 中信證券交易用戶端 |
| com.cmschina.stock | 招商證券 | 招商證券交易用戶端 |
| com.csc108.newpda | 中信建投 | 中信建投證券交易用戶端 |
| com.dfzq.stock | 東方證券 | 東方證券交易用戶端 |
| com.eastmoney.android.berlin | eastmoney，東方財富 | 東方財富，股票／基金交易平台 |
| com.ebscn.stock | ebscn，金陽光 | 光大證券交易用戶端 |
| com.foundersc.stock | founder，小方 | 方正證券交易用戶端 |
| com.gf.gfstocks | 廣發易淘金 | 廣發證券交易用戶端 |
| com.guosen.stock | guosen，金太陽 | 國信證券交易用戶端 |
| com.guotai.junan.guiyang | 國泰君安 | 國泰君安證券交易用戶端 |
| com.hexin.plat.android | ths，同花順 | 同花順，股票／基金交易與行情平台 |
| com.htsc.mdc | 華泰，漲樂財富通 | 華泰證券交易用戶端 |
| com.htsec.android | 海通證券 | 海通證券交易用戶端 |
| com.pingan.stock | 平安證券 | 平安證券交易用戶端 |
| com.tfzq.stock | 天風證券 | 天風證券交易用戶端 |
| com.xueqiu.android | xueqiu，雪球 | 雪球，股票社群與交易平台 |
| com.xyzq.stock | 興業證券 | 興業證券交易用戶端 |

5. 保險／金融

| Package | App 名稱 | 風險說明 |
| --- | --- | --- |
| com.pingan.lifeinsurance | 平安金融服務用戶端 | 中國平安保險，可進行保險購買、理賠等操作 |
| com.jd.jrapp | 京東金融 | 京東金融提供理財、借貸、支付等金融服務 |

## 支援與不支援的功能

### 支援的功能

| 功能 | 說明 |
| --- | --- |
| 遠端控制行動應用程式 | 透過聊天軟體命令遠端使用手機上的 App |
| 多頻道通訊 | 支援透過 Kimi、Feishu、WeChat 與 Claw 溝通 |
| 即時日誌檢視 | 查看 OpenClaw 閘道執行日誌，支援搜尋與層級篩選 |
| 設定備份與還原 | 備份目前設定，重新安裝或更換裝置後可還原 |
| 閘道狀態監控 | 即時查看 OpenClaw 閘道的連線狀態與執行時長 |
| 頻道管理 | 新增、查看與刪除通訊頻道 |
| OpenClaw Dashboard | 透過內建 Dashboard 管理 OpenClaw |

### 不支援的功能與限制

| 範圍 | 限制 |
| --- | --- |
| 平台支援 | 目前僅支援 Android 裝置；不支援 iOS |
| 會員 | 僅限 Allegretto 及以上 Kimi 會員使用 |
| 金融類 App | 禁止存取與銀行、支付、證券、保險相關的應用程式（詳見第 6 章） |
| Bot 管理 | Kimi Claw Android 的 Bot 僅支援編輯名稱與刪除，不支援其他 Bot 設定 |
| 終端機 | Kimi Claw Android 目前不提供直接命令列操作能力 |

## 常見問題（FAQ）

<Callout type="info">
以下內容供 Kimi Claw Android 參考。
</Callout>

### 安裝與設定

#### OpenClaw 安裝失敗時該怎麼辦？

- 請確認儲存空間充足（至少 5GB），並且在安裝過程中不要退出應用程式或鎖定螢幕
- 點擊「重新安裝」重試
- 如果多次失敗，請點擊「遇到問題，前往回饋」提交問題

#### 權限授權後，狀態沒有更新？

- 部分手機品牌授予權限後，需要重新啟動 App 才會生效
- 請返回 Kimi Claw Android。如果狀態仍未更新，可嘗試關閉並重新開啟 App

#### 免費使用者可以使用嗎？

- 目前需要啟用 Allegretto 或更高等級的 Kimi 會員權益，才能使用 Kimi Claw Android
- 在設定 Kimi 帳號的步驟中點擊「前往升級」即可開通

#### 還原設定時提示「設定檔無效」？

- 備份檔可能已損毀，或來自不相容的版本
- 請使用「Kimi App 一鍵設定」重新設定

### 連線與穩定性

#### 為什麼閘道狀態一直顯示「啟動中」？

- 檢查網路連線是否正常
- 確認所有必要權限（通知、電池最佳化、儲存、自動啟動）都已授予
- 嘗試在設定中點擊「備份並重新啟動」來重新啟動閘道服務

#### 閘道突然斷線了？

- 檢查手機是否進入省電模式，導致背景 App 被清除
- 確認「忽略電池最佳化」與「自動啟動權限」已正確授予
- 查看 Dashboard 上的閘道狀態。若顯示「已停止」，請點擊重新啟動

#### 手機鎖定後，Kimi Claw Android 會斷線嗎？

- 這通常是因為手機的電池最佳化策略導致背景應用程式被終止
- 請確認已完成以下設定：
  - 忽略電池最佳化 - 已授權
  - 自啟動權限 — 已啟用
  - 耗電管理 — 選擇「完全允許背景行為」

### 頻道與通訊

#### 可以同時連接多個聊天頻道嗎？

- 可以。你可以同時連接 Kimi、Feishu、WeChat 等多個頻道
- 只需在 Dashboard 的頻道管理中點擊「+ 連接」即可新增
- 請至少保留一個頻道，以確保正常通訊

#### 掃描 Feishu QR code 後，一直等待狀態更新？

- 請確認你已在瀏覽器中完成 Feishu 應用建立流程
- 如果長時間沒有更新，可以嘗試改用手動輸入 Bot 資訊的方式連接

#### WeChat 連接失敗？

- 請確認 WeChat Claw 憑證填寫正確，且與 WeChat 端設定中的值一致
- 如有需要，請依照官方 WeChat Claw 設定指南重新產生並重新綁定憑證
- 檢查手機網路是否能正常存取 WeChat 服務

#### 為什麼我在 Kimi App 中看不到 Kimi Claw Android？

- 請確認 Onboarding 流程已完整完成（授予權限 → 安裝 OpenClaw → 設定 Kimi 帳號）
- 檢查 Dashboard 中的閘道狀態是否為「已連線」
- 嘗試在 Kimi App 中重新整理 Bot 清單

### 功能使用

#### 為什麼有些應用程式無法遠端操作？

- 出於安全考量，銀行、支付、證券、保險等金融類應用程式已由系統自動封鎖存取
- 完整清單請參閱第 6 章「受限應用程式清單」。

#### 為什麼需要使用閒置手機？

- Kimi Claw Android 執行期間可能占用手機操作權限，影響你的正常使用
- 使用備用手機可以避免權限衝突，並保護你的私人資料

#### 更換手機後如何重新部署？

1. 在舊手機的 Dashboard → 設定 → 備份與還原中匯出設定檔
2. 在新手機上安裝 Kimi Claw Android
3. 在步驟三選擇「還原設定」，並匯入先前的備份檔。

#### 如何查看 Kimi Claw Android 的執行狀態？

- 在 Dashboard 主介面中，可以查看閘道狀態與執行時間
- 點擊「即時日誌」查看詳細執行日誌
- 透過日誌的搜尋與層級篩選功能，可以快速找出問題

### 升級與版本

#### 如何升級 Kimi Claw Android？

- 在 Dashboard → 設定 →「版本升級」中檢查並升級至最新版本
- 建議在 Wi-Fi 環境下進行升級

#### 可以手動升級 OpenClaw 版本嗎？

- 不建議手動升級。手動升級可能導致相容性問題
- 官方完成適配後，會透過應用內通知推送升級

## 回饋與協助

如果你在使用過程中遇到任何問題或有建議：

### App 內回饋

- Dashboard → 設定 → 使用者回饋
- OpenClaw 安裝頁面 →「如果遇到問題，請提供回饋」

提供回饋時，請附上以下資訊：

- 你的 Kimi Claw Android ID（點擊 Kimi 頻道時可見）
- 裝置型號與 Android 版本
- 問題描述與螢幕截圖

<Callout type="info">
提供 Kimi Claw Android ID 可協助技術人員快速找出問題，回饋時請一併附上。
</Callout>
