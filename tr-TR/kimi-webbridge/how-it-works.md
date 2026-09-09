---
title: "Kimi Tarayıcı Uzantısı Nasıl Çalışır?"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Tarayıcı Uzantısı Nasıl Çalışır? - Kimi Yardım Merkezi"
  description="Kimi Tarayıcı Uzantısı'nın tarayıcınızı yerel olarak yapay zeka Agent'larına nasıl bağladığını, güvenli web gezintisi, tıklamalar, ekran görüntüleri ve daha fazlasını nasıl mümkün kıldığını öğrenin."
  ogType="article"
/>

# Kimi Tarayıcı Uzantısı Nasıl Çalışır?

## Çalışma Akışı

Kimi Tarayıcı Uzantısı **yan çubuk sohbeti** ve **yerel Agent ile uzaktan kontrol** olmak üzere iki kullanım şeklini destekler ve şu şekilde çalışır:

1. **Tarayıcı Yan Çubuğu**: Araç çubuğundaki Kimi simgesine tıklayarak yan çubuğu açın, ardından Kimi üyelik hesabınızla oturum açıp doğrudan sohbet edin
2. **Yerel Köprü Hizmeti**: Agent'tan talimatları almak için bilgisayarınızda yerel bir hizmet çalışır
3. **Tarayıcı Uzantısı**: Chrome DevTools Protokolü'ne dayanarak tarayıcıda belirli işlemleri gerçekleştirir
4. **Güvenlik İzolasyonu**: Tüm işlemler yerel olarak gerçekleşir; oturum açma durumlarınız ve web sayfası içeriğiniz asla cihazınızdan çıkmaz

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Uzantı Arayüzü

Yan çubuğu açmak ve görev göndermek için tarayıcı araç çubuğundaki Kimi Tarayıcı Uzantısı simgesine tıklayın.

<Frames
  src="./images/connection.png"
  alt="Kimi Tarayıcı Uzantısı Connection"
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

Daha fazla kullanım senaryosu için lütfen [Kimi Tarayıcı Uzantısı resmi web sitesine](https://www.kimi.com/features/webbridge) bakın.
