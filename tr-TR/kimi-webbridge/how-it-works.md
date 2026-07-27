---
title: "Kimi WebBridge Nasıl Çalışır?"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge Nasıl Çalışır? - Kimi Yardım Merkezi"
  description="Kimi WebBridge'in tarayıcınızı yerel olarak yapay zeka Agent'larına nasıl bağladığını, güvenli web gezintisi, tıklamalar, ekran görüntüleri ve daha fazlasını nasıl mümkün kıldığını öğrenin."
  ogType="article"
/>

# Kimi WebBridge Nasıl Çalışır?

## Çalışma Akışı

Kimi WebBridge şu şekilde çalışır:

1. **Yerel Köprü Hizmeti**: Agent'tan talimatları almak için bilgisayarınızda yerel bir hizmet çalışır
2. **Tarayıcı Uzantısı**: Chrome DevTools Protokolü'ne dayanarak tarayıcıda belirli işlemleri gerçekleştirir
3. **Güvenlik İzolasyonu**: Tüm işlemler yerel olarak gerçekleşir; oturum açma durumlarınız ve web sayfası içeriğiniz asla cihazınızdan çıkmaz

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Uzantı Arayüzü

Mevcut bağlantı durumunu kontrol etmek için tarayıcı araç çubuğundaki WebBridge simgesine tıklayın:

**Bağlı**: WebBridge düzgün çalışıyor ve Agent ile birlikte çalışabilir.

**Bağlantı Kesildi**: Yapılandırmanızı kontrol edin veya bağlantı komutunu yeniden çalıştırın.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
/>

## Özellikler

| Özellik | Açıklama |
|---------|-------------|
| Web Gezintisi | Belirtilen URL'leri otomatik olarak açar |
| Öğe Tıklama | Düğmeler, bağlantılar ve diğer sayfa öğelerine tıklamayı simüle eder |
| Form Doldurma | Otomatik olarak metin girer ve seçenekleri belirler |
| Sayfa Ekran Görüntüsü | Mevcut sayfayı veya belirli bir alanı yakalar |
| İçerik Çıkarma | Sayfa metnini, tabloları ve diğer yapılandırılmış verileri okur |
| Oturum Açma Durumunun Korunması | Tarayıcıda kayıtlı mevcut oturum açma durumlarını kullanır |

Kullanım senaryoları:

- E-ticaret fiyat karşılaştırması: Ürünleri otomatik olarak arar ve birden fazla platformda fiyatları karşılaştırır
- Bilgi araştırması: Web sayfalarında derinlemesine gezinir ve yapılandırılmış bilgileri çıkarır
- Form doldurma: Çeşitli çevrimiçi formları otomatik olarak doldurur
- Veri girişi: Web verilerini otomatik olarak düzenler ve belirtilen bir biçimde girer

Daha fazla kullanım senaryosu için lütfen [Kimi WebBridge resmi web sitesine](https://www.kimi.com/features/webbridge) bakın.
