---
title: "Kimi Claw'a genel bakış"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Tek tıklamayla kurulum sayesinde kendi Kimi Claw yapay zekâ asistanınızı bulutta dağıtın ve yönetin."
---

<SeoMeta
  title="Kimi Claw'a genel bakış - Kimi Yardım Merkezi"
  description="Tek tıklamayla kurulum sayesinde kendi Kimi Claw yapay zekâ asistanınızı bulutta dağıtın ve yönetin."
/>

# Ürüne genel bakış

<Callout type="info">
**Kimi Claw**, kendine özgü bir kişiliğe ve kalıcı uzun süreli belleğe sahip bir yapay zekâ asistanıdır. Kimi Claw aracılığıyla, doğrudan Kimi üzerinden kendi OpenClaw örneğinizi oluşturabilir, dağıtabilir ve onunla sohbet edebilirsiniz.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Tek tıklamayla buluta dağıtım

Henüz bir OpenClaw'unuz yok mu? Bir tane oluşturmak için [kimi.com/bot](https://kimi.com/bot) adresine gidin. Kimi onu sizin için buluta dağıtır — sunucu satın almanıza ya da komut satırı kurulumuyla uğraşmanıza gerek yok.

<Callout type="warning">

- Tek tıklamayla dağıtım için **Allegretto veya üstü** bir plan gerekir. [Üyelik Planları](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi otomatik olarak **Kimi K2.6 modelini** yapılandırır, **Kimi üyelik kredilerinizi** bağlar ve Kimi Web Search'ü etkinleştirir — ayrıca API yapılandırması gerekmez.
- Kimi Claw, doğrudan Telegram ve diğer sohbet platformlarına dağıtılabilir.
- **Kimi K3** modeline geçmek isterseniz, Kimi Claw ayarlarından model yapılandırmasını değiştirebilir veya aşağıdaki gelişmiş yapılandırma bölümüne bakabilirsiniz.

## Başlarken

1. [kimi.com/bot](https://kimi.com/bot) adresinden oturum açın
2. Yeni bir Kimi Claw başlatmak için **Oluştur**'a tıklayın
3. Otomatik kurulumun tamamlanmasını bekleyin (genellikle birkaç dakika)
4. Kimi Claw'unuzun adını ve kişiliğini özelleştirin
5. **Ayarlar → Sohbet Kanalları** bölümünde kullanmak istediğiniz platformları (örneğin Telegram) bağlayın

## Mevcut bir OpenClaw'u bağlama

Daha önce kendi OpenClaw örneğinizi barındırdıysanız, Kimi eklentisini kurarak onu Kimi'ye bağlayabilirsiniz:

1. [kimi.com/bot](https://kimi.com/bot) adresine gidin ve **Mevcut OpenClaw'u Bağla** seçeneğini seçin
2. Eklentiyi OpenClaw cihazınıza kurmak için yönergeleri izleyin
3. Bağlantı kurulduğunda OpenClaw'unuzla Kimi üzerinden sohbet edebilirsiniz

<a id="switch-to-k3"></a>
## Kimi K3 modeline geçiş

Kimi Claw varsayılan olarak Kimi K2.6 modelini kullanır. Kimi K3 kullanmak isterseniz, aşağıdaki komutla yerel OpenClaw yapılandırmanızı otomatik olarak değiştirebilirsiniz.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

Komutu çalıştırdıktan sonra `session_status` çıktısında `model` alanının `kimi-coding/k3` ve `context` üst sınırının `1.0m` olduğunu doğrulayın.

<Callout type="warning">
Yapılandırma dosyasının yolu kurulum şekline göre değişiklik gösterebilir; lütfen `/root/.openclaw/openclaw.json` yolunu kendi durumunuza göre değiştirin. Değişiklik yapmadan önce mutlaka yedek alın.
</Callout>
