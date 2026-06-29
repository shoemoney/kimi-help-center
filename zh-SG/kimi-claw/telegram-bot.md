---
title: "Telegram 机器人"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram 机器人 - Kimi 帮助中心"
  description="将 Kimi Claw 连接到 Telegram，即可在任何设备上与它聊天，无需浏览器。"
/>

# Telegram 机器人

将 Kimi Claw 连接到 Telegram，即可在任何设备上与它聊天，无需浏览器。

## 分步设置

### 1. 使用 BotFather 创建机器人

1. 打开 Telegram，并与 [@BotFather](https://t.me/BotFather) 开始聊天。
2. 发送 `/newbot`。
3. 按提示选择一个**显示名称**和一个**用户名**（必须以 `bot` 结尾）。
4. BotFather 会回复一个**机器人 token**——复制并妥善保存。

### 2. 将机器人连接到 Kimi Claw

1. 在 [kimi.com](https://kimi.com) 打开你的 Kimi Claw 对话。
2. 告诉 Kimi Claw：_"这是我的 Telegram 机器人 token：`<your-token>`。请设置 Telegram 连接。"_
3. Kimi Claw 会将该 token 保存到配置中。

### 3. 重启并配对

1. 重启 Kimi Claw——你可以让它重启，或前往**设置 → 重启 Kimi Claw**。
2. 它重新上线后，打开你的新 Telegram 机器人并发送一条消息。
3. Kimi Claw 会回复你——配对即完成。

## 小贴士

- **隐私模式：** 默认情况下，Telegram 群组中的机器人只能看到提及它们的消息，或以 `/` 开头的消息。如果你希望 Kimi Claw 看到所有群组消息，请通过 BotFather 关闭隐私模式（`/setprivacy → Disable`）。
- **多个机器人：** 你可以创建多个 Telegram 机器人，并将它们连接到同一个 Kimi Claw 实例。
- **token 安全：** 切勿公开分享你的机器人 token。如果 token 泄露，请通过 BotFather 撤销它（`/revoke`），并配置一个新的 token。
