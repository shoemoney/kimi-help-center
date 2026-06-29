---
title: "Bot Telegram"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bot Telegram - Kimi Help Center"
  description="Hubungkan Kimi Claw ke Telegram agar Anda bisa mengobrol dengannya dari perangkat apa pun — tanpa perlu browser."
/>

# Bot Telegram

Hubungkan Kimi Claw ke Telegram agar Anda bisa mengobrol dengannya dari perangkat apa pun — tanpa perlu browser.

## Panduan langkah demi langkah

### 1. Buat bot dengan BotFather

1. Buka Telegram dan mulai obrolan dengan [@BotFather](https://t.me/BotFather).
2. Kirim `/newbot`.
3. Ikuti petunjuk untuk memilih **nama tampilan** dan **username** (harus diakhiri dengan `bot`).
4. BotFather akan membalas dengan sebuah **token bot** — salin dan simpan baik-baik.

### 2. Hubungkan bot ke Kimi Claw

1. Buka percakapan Kimi Claw Anda di [kimi.com](https://kimi.com).
2. Beri tahu Kimi Claw: _"Ini token bot Telegram saya: `<your-token>`. Tolong siapkan koneksi Telegram-nya."_
3. Kimi Claw akan menyimpan token tersebut ke dalam konfigurasinya.

### 3. Restart dan pasangkan

1. Restart Kimi Claw — minta saja agar Kimi Claw melakukannya, atau buka **Settings → Restart Kimi Claw**.
2. Setelah kembali online, buka bot Telegram baru Anda dan kirim pesan.
3. Kimi Claw akan merespons — pemasangan pun selesai.

## Tips

- **Mode privasi:** Secara default, bot di grup Telegram hanya melihat pesan yang menyebut mereka atau diawali dengan `/`. Jika Anda ingin Kimi Claw melihat semua pesan grup, nonaktifkan Mode Privasi melalui BotFather (`/setprivacy → Disable`).
- **Beberapa bot:** Anda bisa membuat beberapa bot Telegram dan menghubungkannya ke instance Kimi Claw yang sama.
- **Keamanan token:** Jangan pernah membagikan token bot Anda ke publik. Jika token bocor, cabut melalui BotFather (`/revoke`) lalu konfigurasikan yang baru.
