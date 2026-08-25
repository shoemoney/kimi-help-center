---
title: "SSS"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work SSS - Kimi Yardım Merkezi"
  description="Kimi Work SSS: web sürümünden farkları, yerel dosyalara erişirken izin denetimi, WebBridge tarayıcı otomasyonunun neler yapabildiği ve zamanlanmış görevlerin nasıl çalıştığı."
/>

# Kimi Work SSS

## Kimi Work ile web sürümü arasındaki fark nedir?

Kimi web uygulaması hızlı sohbetler ve sorgular için idealdir; Kimi Work ise derinlemesine iş akışları için tasarlanmış yerel bir Agent’tır. Yerel klasörlerinizi okur ve işler, WebBridge üzerinden web’de otonom gezinir, arka planda Python kodu çalıştırır ve zamanlanmış görevleri yürütür. Sistem düzeyinde bir dijital çalışandır.

## Kimi Work yerel dosyalara erişirken gizliliğimi nasıl korur?

Dosyalarınız üzerinde tam denetim sizdedir. Kimi Work üç seviyeli izin denetimi sunar; yetkilendirmeyi nasıl yapacağınızı siz seçersiniz:

- **Varsayılan**: rutin işlemler otomatik olarak çalışır — Kimi, yerel dosyalarınızda değişiklik yapma, dosyaların üzerine yazma veya kod çalıştırma gibi hassas işlemlerden önce sizden açık yetki ister;
- **Manuel olarak izin ver**: işlemden önce yetki ister;
- **Tümüne izin ver**: yetki sormadan doğrudan çalışır.

"Manuel olarak izin ver" seçeneğini belirlediğinizde, onayınız olmadan hiçbir işlem yapılmaz.

## WebBridge (tarayıcı otomasyonu) benim için tam olarak ne yapabilir?

WebBridge, Kimi’ye tarayıcıyı bir insan gibi kullanma yeteneği kazandırır. Ondan bir web sitesindeki son haberleri kontrol edip özetlemesini ya da geçmiş hisse senedi verilerini yerel Excel dosyanıza aktarmasını isteyebilirsiniz. Tıklar, kaydırır ve verileri otonom biçimde çıkarır; böylece saatler sürecek manuel işten tasarruf edersiniz.

## Zamanlanmış görevlerle neler yapabilirim? Bilgisayarım uykudayken çalışırlar mı?

Zamanlanmış görevler, Kimi’nin belirli bir görevi belirlenen zamanda otomatik olarak çalıştırmasını sağlar — günlük, haftalık, aylık veya tek seferlik (tekrarsız) planlarla. Günlük özetler, haftalık izleme ve dönemsel temizlik işleri için idealdir.

Kimi Work masaüstü uygulamasında zamanlanmış görevler **yerel olarak** çalışır ve yalnızca **uygulama açıkken** yürütülür. Bilgisayarınız uykudayken ya da kapalıyken veya uygulama kapalıyken kaçırılan tetiklemeler, uygulama bir sonraki açılışında **geriye dönük olarak çalıştırılmaz**. Bu nedenle bir görevin gece boyunca çalışmasını istiyorsanız bilgisayarınızı ve Kimi Work uygulamasını açık tutun. (Buna karşılık, Kimi içinde oluşturulan görevler bulutta çalışır ve istemcinin açık kalmasını gerektirmez.)

Ayrıntılar için [Zamanlanmış Görevler](/features/scheduled-tasks) bölümüne bakın.
