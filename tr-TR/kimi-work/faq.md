---
title: "SSS"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work SSS - Kimi Yardım Merkezi"
  description="Kimi Work SSS: web sürümünden farkları, yerel dosyalara erişirken izin denetimi, WebBridge tarayıcı otomasyonunun neler yapabildiği ve zamanlanmış görevlerin nasıl çalıştığı."
/>

# Kimi Work SSS

## Kimi Work ile web sürümü arasındaki fark nedir?

Kimi web uygulaması hızlı sohbetler ve sorgular için idealdir; Kimi Work ise derin iş akışları için tasarlanmış yerel bir Agent'tır. Yerel klasörlerinizi okur ve işler, WebBridge aracılığıyla web'de otonom olarak gezinir, arka planda Python kodu çalıştırır ve zamanlanmış görevleri yürütür. Sistem düzeyinde bir dijital çalışandır.

## Kimi Work, yerel dosyalara erişirken gizliliğimi nasıl korur?

Dosyalarınız üzerinde tam denetim sizdedir. Kimi Work izin denetimi sunar; nasıl yetki vereceğinizi siz seçersiniz:

- **İzin iste**: işlem yapmadan önce yetki ister — Kimi, yerel dosyalarınızı değiştirmeden, üzerine yazmadan veya bu dosyalar içinde kod çalıştırmadan önce sizden açıkça yetki ister;
- **Tümüne izin ver**: yetki istemeden doğrudan çalışır.

"İzin iste" seçeneğini belirlediğinizde, onayınız olmadan hiçbir şey yapılmaz.

## WebBridge (tarayıcı otomasyonu) benim için tam olarak ne yapabilir?

WebBridge, Kimi'ye bir tarayıcıyı insan gibi kullanma becerisi kazandırır. Ondan bir web sitesindeki son haberleri kontrol edip özetlemesini ya da geçmiş hisse senedi verilerini yerel Excel dosyanıza aktarmasını isteyebilirsiniz. Kendi başına tıklar, kaydırır ve veri çıkarır; böylece saatler süren manuel işten sizi kurtarır.

## Zamanlanmış görevlerle neler yapabilirim? Bilgisayarım uyku modundaysa çalışırlar mı?

Yerleşik Cron zamanlayıcısı LLM Agent çağrılarını, Python/Shell çalıştırmalarını ve daha fazlasını destekler. Görevleri günlük, saatlik ya da koşula bağlı olarak tetikleyebilirsiniz. Görevlerin gece boyunca sorunsuz çalışmasını sağlamak için ayarlarınızda "Bilgisayarı Uyanık Tut" seçeneğini etkinleştirmeniz yeterlidir.
