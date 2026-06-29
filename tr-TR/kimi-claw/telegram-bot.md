---
title: "Telegram botu"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram botu - Kimi Yardım Merkezi"
  description="Kimi Claw'u Telegram'a bağlayın; böylece tarayıcıya gerek kalmadan her cihazdan onunla sohbet edebilirsiniz."
/>

# Telegram botu

Kimi Claw'u Telegram'a bağlayın; böylece tarayıcıya gerek kalmadan her cihazdan onunla sohbet edebilirsiniz.

## Adım adım kurulum

### 1. BotFather ile bot oluşturun

1. Telegram'ı açın ve [@BotFather](https://t.me/BotFather) ile bir sohbet başlatın.
2. `/newbot` komutunu gönderin.
3. Bir **görünen ad** ve bir **kullanıcı adı** (`bot` ile bitmelidir) seçmek için yönergeleri izleyin.
4. BotFather size bir **bot token'ı** ile yanıt verecek; bunu kopyalayın ve güvende tutun.

### 2. Botu Kimi Claw'a bağlayın

1. [kimi.com](https://kimi.com) üzerinde Kimi Claw konuşmanızı açın.
2. Kimi Claw'a şunu söyleyin: _"İşte Telegram bot token'ım: `<your-token>`. Lütfen Telegram bağlantısını kur."_
3. Kimi Claw token'ı yapılandırmasına kaydedecektir.

### 3. Yeniden başlatın ve eşleştirin

1. Kimi Claw'u yeniden başlatın; ya yeniden başlamasını isteyin ya da **Ayarlar → Kimi Claw'u Yeniden Başlat** seçeneğine gidin.
2. Tekrar çevrimiçi olduğunda, yeni Telegram botunuzu açın ve bir mesaj gönderin.
3. Kimi Claw yanıt verecektir; eşleştirme tamamlanmıştır.

## İpuçları

- **Gizlilik modu:** Varsayılan olarak, Telegram gruplarındaki botlar yalnızca kendilerinden bahseden veya `/` ile başlayan mesajları görür. Kimi Claw'un tüm grup mesajlarını görmesini istiyorsanız, BotFather üzerinden Gizlilik Modu'nu devre dışı bırakın (`/setprivacy → Disable`).
- **Birden fazla bot:** Birden fazla Telegram botu oluşturabilir ve bunları aynı Kimi Claw örneğine bağlayabilirsiniz.
- **Token güvenliği:** Bot token'ınızı asla herkese açık biçimde paylaşmayın. Ele geçirilirse, BotFather üzerinden iptal edin (`/revoke`) ve yenisini yapılandırın.
