---
title: "Bellek kaybı ve bağlam"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Bellek kaybı \u0026 bağlam - Kimi Yardım Merkezi"
  description="OpenClaw, her gün saat 04.00'te konuşmayı otomatik olarak sıfırlar. Bu, aşırı uzun bağlamların halüsinasyonlara veya yanıt kalitesinin düşmesine yol açmasını önler."
/>

# Bellek kaybı ve bağlam

## Dünkü konuşmam neden kayboldu?

OpenClaw, **her gün saat 04.00'te** konuşmayı otomatik olarak sıfırlar. Böylece aşırı uzun bağlamların halüsinasyonlara veya yanıt kalitesinin düşmesine yol açması önlenir.

Sıfırlamanın ne zaman gerçekleşeceğini değiştirmek isterseniz, zamanlamayı `config.yaml` dosyasından düzenleyebilirsiniz.

**En iyi yöntem:** Sizin için önemli olan her şey için — tercihler, proje ayrıntıları, tekrar eden talimatlar — Kimi Claw'a bunları kaydetmesini açıkça söyleyin: _"Bunu Memory'ye kaydet."_ Memory'de saklanan bilgiler, konuşma sıfırlamalarından etkilenmeden kalıcı olarak korunur.

## Kimi Claw belleğini mi kaybetti?

Her gün saat 04.00'te yapılan sıfırlama, aktif konuşma bağlamını temizler. Bir şey **Memory**'ye kaydedilmediyse kaybolur.

**Nasıl çözülür:**
- Bir konuşma sırasında _"X'i Memory'ye kaydet"_ deyin; Kimi Claw bunu uzun süreli belleğe yazacaktır.
- Kaydedilmiş bellekleri **Workspace → AGENTS.md → #MEMORY** üzerinden görüntüleyin.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Kaydedilmiş bellekleri istediğiniz zaman görüntülemek ve yönetmek için `/memory` komutunu kullanın.

## Abonelik sona erdikten sonra bellek ne kadar süre saklanır?

Bellek dosyaları Workspace'inizde tutulur ve bunları istediğiniz zaman görüntüleyebilir veya indirebilirsiniz.

- Üyeliğiniz sona erdikten sonra bulut örneği **7 gün boyunca saklanır**.
- 7 gün içinde yenileme yaparsanız, tüm verileriniz — bellek, yapılandırma, beceriler — eksiksiz şekilde geri yüklenir.
- 7 gün sonra örnek geri alınabilir ve veriler kalıcı olarak silinebilir.
- Daha kolay geçiş için bir bellek dışa aktarma/yedekleme özelliği geliştirilme aşamasındadır.
