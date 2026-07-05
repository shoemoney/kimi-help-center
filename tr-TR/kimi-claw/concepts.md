---
title: "Temel kavramlar ve terminal"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Temel kavramlar ve terminal - Kimi Yardım Merkezi"
  description="Kimi Claw'un temel kavramlarını — Memory, Skills, HEARTBEAT, Identity, Soul, Tools ve User — ve gateway, bot durumu, skill'ler ve zamanlanmış görevleri kontrol etmek için kullanılan terminal komutlarını öğrenin."
/>

# Temel kavramlar ve terminal

## Temel kavramlar

| Kavram | Açıklama |
|---------|-------------|
| **Memory** | Kimi Claw'un uzun süreli bellek sistemi. Tercihlerinizi, alışkanlıklarınızı ve önemli bilgilerinizi farklı konuşmalar boyunca saklar. |
| **Skills** | Kimi Claw'a alana özgü uzmanlık kazandıran, ClawHub kitaplığından kurulabilen yetenek modülleri. |
| **HEARTBEAT** | Belirli bir zamanlamayla çalışan arka plan görevleri — düzenli hatırlatmalar, veri çekme ve özetler için idealdir. |
| **Identity** | Kimi Claw'un rol tanımı: ad, meslek, kişilik. Tamamen sizin tarafınızdan özelleştirilebilir. |
| **Soul** | Kimi Claw'un etkileşim tarzını şekillendiren temel kişilik özellikleri ve davranış ilkeleri. |
| **Tools** | Kimi Claw'un kullanabileceği yetenekler bütünü — Web Search, dosya işleme, kod çalıştırma ve daha fazlası. |
| **User** | Sizinle Kimi Claw arasındaki ilişkiyi tanımlayan ve etkileşim biçimleri ile bilgi paylaşımını yöneten ayar. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Web üzerinde **Ayarlar → Terminal** yolunu izleyerek bir komut satırı arayüzü açabilir ve komutlar çalıştırarak Kimi Claw'u doğrudan yönetebilirsiniz.

Dilerseniz hangi komutu çalıştırmak istediğinizi Kimi Claw'a günlük dilinizle de söyleyebilirsiniz — komutu sizin için o yürütecektir.

> Not: Terminal ve eklentiler aynı bağlantı kanalını paylaşır. OpenClaw gateway'ini yeniden başlatmak Terminal'in bağlantısını keser.

## Komut referansı

### Sistem

| Komut | Açıklama |
|---------|-------------|
| `/help` | Yardım bilgilerini gösterir |
| `/status` | Geçerli sistem durumunu görüntüler |
| `/ping` | Bağlantının aktif olup olmadığını test eder |
| `/cron` | Zamanlanmış görevleri yönetir |
| `/config` | Yapılandırmayı görüntüler veya düzenler |
| `/new` | Yeni bir konuşma başlatır (geçerli bağlamı temizler) |
| `/reset` | Kimi Claw'u sıfırlar |
| `/compact` | Geçerli konuşma bağlamını sıkıştırır |
| `/stop` | Çalışmakta olan görevi durdurur |

### Skills

| Komut | Açıklama |
|---------|-------------|
| `/skills` | Yetenekleri keşfeder, kurar ve yönetir |

### Zamanlanmış görevler

| Komut | Açıklama |
|---------|-------------|
| `/cron` | Görev zamanlamasını görüntüler ve yönetir |

### Memory

| Komut | Açıklama |
|---------|-------------|
| `/memory` | Uzun süreli belleği görüntüler ve yönetir |

### Yapılandırma ve hata ayıklama

| Komut | Açıklama |
|---------|-------------|
| `/config` | Sistem yapılandırmasını görüntüler veya düzenler |
| `/logs` | Çalışma zamanı günlüklerini görüntüler |
| `/debug` | Ayrıntılı tanılama için hata ayıklama modunu etkinleştirir |
