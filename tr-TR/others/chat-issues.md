---
title: "Kimi sohbetinde sık karşılaşılan sorunlar"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi sohbetinde sık karşılaşılan sorunlar - Kimi Yardım Merkezi"
  description="Kimi sohbetlerinde sorun mu yaşıyorsunuz? Bu makale, kesilen yanıtlar, hatalı içerik ve yükleme hataları gibi sık karşılaşılan sohbet sorunlarının çözüm adımlarını derleyerek hızlıca çözmenize yardımcı olur."
/>

# Kimi sohbetinde sık karşılaşılan sorunlar

## Mesaj gönderilemiyor / kırmızı bir daire mi beliriyor?

Bunun olası nedenleri şunlardır:

- **Rate limit devreye girdi**: Kimi, belirli zaman aralıklarında bir konuşma sınırına sahiptir. Çok sık mesaj göndermek, etkileşimin devam etmesini engelleyebilir. Tekrar denemeden önce 2–3 saat bekleyin ve konuşma sıklığınızı dengeleyin.
- **Zayıf ağ koşulları**: Düşük sinyal ya da kararsız bir bağlantı mesajların gönderilmesini engelleyebilir. Farklı bir ağa geçip yeniden deneyin.

## Konuşma 200.000 kelimeyi mi aşıyor?

K2.6'nın tek bir konuşmadaki bağlam sınırı yaklaşık 128K token (~200.000 kelime) civarındadır. Bu sınıra ulaşıldığında model artık yeni girdi kabul edemez.

<Callout type="tip">
**Önerilen adımlar**:

1. **Yeni bir konuşma başlatın**: Önceki konuşmadaki temel sonuçları ya da ana hatları yeni bir konuşmaya kopyalayarak devam edin.
2. **Devir teslim belgesi oluşturun**: Kimi'den "özetle ve bir devir teslim belgesi oluştur" demesini isteyin, ardından bunu yeni konuşmaya başlangıç bağlamı olarak yapıştırın — bu yöntem bilgileri korurken token tasarrufu sağlar.

**Not**: Aynı konuşma içindeki mesajları silmek bağlam penceresini **boşaltmaz**. Bunun yerine yeni bir konuşma başlatın.
</Callout>

<Callout type="info">
Düşünen modeller akıl yürütme için daha fazla token tüketir; bu da etkin bağlam sınırını küçültür. Uzun belgelerle çalışırken K2-Thinking yerine K2'yi tercih edin.
</Callout>

## "Hadi başka bir konudan bahsedelim" mi görüyorsunuz?

Bu uyarı, mevcut içeriğin bir güvenlik politikasını tetiklediğini ve konunun sürdürülemeyeceğini gösterir. Konuşmaya devam etmek için yeni bir konu yazmanız yeterlidir — beklemeye gerek yok.

<Callout type="info">
İçeriğin bir ihlal teşkil etmediğini düşünüyorsanız "👎" simgesine tıklayarak geri bildirim gönderin ve güvenlik politikalarımızı geliştirmemize yardımcı olun.
</Callout>

## "Kimi biraz yorgun" mu görüyorsunuz?

Bu, çok fazla kullanıcının çevrimiçi olduğu ve işlem kaynaklarının yoğun yük altında bulunduğu anlamına gelir — yoğun saatlerde devreye giren bir rate limit. 1–2 dakika bekleyip tekrar deneyin.

<Callout type="tip">
Bekleme sürelerini azaltmak için, ayrılmış işlem kaynaklarına öncelikli erişim sunan bir üyelik planına abone olmayı düşünebilirsiniz.
</Callout>

## PPT/Word/Excel indirilemiyor mu?

Kimi sohbet penceresi, indirilebilir Office dosyalarını doğrudan üretmez:

| Dosya Türü | Nerede Oluşturulur |
|-----------|-------------------|
| **Slaytlar** | [Kimi Slides](https://www.kimi.com/slides) sayfasına gidin — çevrimiçi oluşturmayı ve indirmeyi destekler |
| **Word/Excel** | **Agent** modunu kullanın |
