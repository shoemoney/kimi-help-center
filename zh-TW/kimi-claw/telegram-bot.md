---
title: "Telegram 機器人"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram 機器人 - Kimi 說明中心"
  description="將 Kimi Claw 連接到 Telegram，讓你在任何裝置上都能與它聊天，無需瀏覽器。"
/>

# Telegram 機器人

將 Kimi Claw 連接到 Telegram，讓你在任何裝置上都能與它聊天，無需瀏覽器。

## 逐步設定

### 1. 使用 BotFather 建立機器人

1. 開啟 Telegram，並與 [@BotFather](https://t.me/BotFather) 開始對話。
2. 傳送 `/newbot`。
3. 依照提示選擇**顯示名稱**和**使用者名稱**（必須以 `bot` 結尾）。
4. BotFather 會回覆一組**機器人 token**——請複製並妥善保管。

### 2. 將機器人連接到 Kimi Claw

1. 在 [kimi.com](https://kimi.com) 開啟你的 Kimi Claw 對話。
2. 告訴 Kimi Claw：_「這是我的 Telegram 機器人 token：`<your-token>`。請幫我設定 Telegram 連線。」_
3. Kimi Claw 會將 token 儲存到其設定中。

### 3. 重新啟動並配對

1. 重新啟動 Kimi Claw——你可以請它重新啟動，或前往**設定 → 重新啟動 Kimi Claw**。
2. 當它重新上線後，開啟你的新 Telegram 機器人並傳送一則訊息。
3. Kimi Claw 會回覆——配對即完成。

## 提示

- **隱私模式：** 預設情況下，Telegram 群組中的機器人只會看到提及它們的訊息，或以 `/` 開頭的訊息。如果你希望 Kimi Claw 能看到所有群組訊息，請透過 BotFather 停用隱私模式（`/setprivacy → Disable`）。
- **多個機器人：** 你可以建立多個 Telegram 機器人，並將它們連接到同一個 Kimi Claw 實例。
- **token 安全：** 請勿公開分享你的機器人 token。如果 token 遭到外洩，請透過 BotFather（`/revoke`）撤銷，並設定新的 token。
