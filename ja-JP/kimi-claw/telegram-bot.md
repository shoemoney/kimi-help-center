---
title: "Telegram ボット"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram ボット - Kimi ヘルプセンター"
  description="Kimi Claw を Telegram に接続すれば、ブラウザなしで、どのデバイスからでもチャットできます。"
/>

# Telegram ボット

Kimi Claw を Telegram に接続すれば、ブラウザなしで、どのデバイスからでもチャットできます。

## 設定手順

### 1. BotFather でボットを作成する

1. Telegram を開き、[@BotFather](https://t.me/BotFather) とのチャットを開始します。
2. `/newbot` を送信します。
3. 画面の案内に従って、**表示名** と **ユーザー名**（末尾が `bot` である必要があります）を選びます。
4. BotFather から **bot token** が返信されます。コピーして安全な場所に保管してください。

### 2. ボットを Kimi Claw に接続する

1. [kimi.com](https://kimi.com) で Kimi Claw との会話を開きます。
2. Kimi Claw に _「Telegram bot token は `<your-token>` です。Telegram 連携を設定してください。」_ と伝えます。
3. Kimi Claw が token を設定に保存します。

### 3. 再起動してペアリングする

1. Kimi Claw を再起動します。Kimi Claw に再起動を依頼するか、**設定 → Kimi Claw を再起動** に進んでください。
2. 再びオンラインになったら、新しい Telegram ボットを開いてメッセージを送信します。
3. Kimi Claw が返信すれば、ペアリングは完了です。

## ヒント

- **プライバシーモード:** 初期設定では、Telegram グループ内のボットは、自分宛てのメンションを含むメッセージ、または `/` で始まるメッセージのみを確認できます。Kimi Claw がすべてのグループメッセージを確認できるようにしたい場合は、BotFather で Privacy Mode を無効にしてください（`/setprivacy → Disable`）。
- **複数のボット:** 複数の Telegram ボットを作成し、同じ Kimi Claw インスタンスに接続できます。
- **token の安全管理:** bot token は絶対に公開しないでください。漏えいした場合は、BotFather で無効化（`/revoke`）し、新しい token を設定してください。
