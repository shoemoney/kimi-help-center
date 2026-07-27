---
title: "Kimi sohbetinde sık karşılaşılan sorunlar"
slug: "chat-issues"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi sohbetinde sık karşılaşılan sorunlar - Kimi Yardım Merkezi"
  description="Kimi sohbetlerinde sorun mu yaşıyorsunuz? Bu makalede, kesintiye uğrayan yanıtlar, olağandışı içerikler ve yükleme hataları gibi sık görülen sohbet sorunları için hızlıca çözüm bulmanıza yardımcı olacak sorun giderme adımları özetlenir."
/>

# Kimi sohbetinde sık karşılaşılan sorunlar

## Mesaj gönderemiyor musunuz / kırmızı daire mi görünüyor?

Bunun nedeni şunlar olabilir:

- **rate limit tetiklendi**: Kimi, belirli zaman aralıklarında konuşma sınırı uygular. Çok sık mesaj göndermek, etkileşimin devam etmesini engelleyebilir. Yeniden denemeden önce 2–3 saat bekleyin ve konuşma sıklığınızı buna göre ayarlayın.
- **Ağ koşulları zayıf**: Sinyalin zayıf olması veya bağlantının kararsızlığı mesajların gönderilmesini engelleyebilir. Farklı bir ağa geçip tekrar deneyin.

## Konuşma 200.000 kelimeyi mi aşıyor?

K2.6'nın tek konuşmalık bağlamı yaklaşık 128K token’dır (~200.000 kelime). Bu sınıra ulaşıldığında model artık yeni içeriği okuyamaz. Ne yapmanız gerektiği, sınıra neden ulaştığınıza bağlıdır:

- **Gönderdiğiniz tek bir dosya çok büyük ve daha ilk turda sınıra ulaşıyor**: dosyayı daha küçük parçalara bölün ve partiler hâlinde gönderin.
- **Çok turlu bir konuşma zamanla birikerek sınıra ulaşıyor**: önce o ana kadarki temel sonuçları özetleyin (Kimi’den "özetle ve devir belgesi oluştur"masını da isteyebilirsiniz), ardından bunu yeni bir konuşmaya başlangıç bağlamı olarak yapıştırıp devam edin.

<Callout type="info">
**İpuçları**:
- Daha temelden bakıldığında, [Memory](/features/memory-space) ve [Projeler](/features/project) kullanmak sınıra takılmanızı önlemeye yardımcı olur — Memory önemli bilgileri otomatik olarak saklar; Project ise referans dosyalarınızı, talimatlarınızı ve belleğinizi bir arada tutarak her yeni konuşmanın bağlamla başlamasını sağlar.
- Aynı konuşmadaki önceki mesajları silmek bağlam penceresinde yer açmaz — bunun yerine yeni bir konuşma başlatın.
- Thinking token tüketir; credit tasarrufu için **Thinking gücü** ayarını **Standart** yapın.
- Çok uzun belgeler için K3, 1M-token bağlam sunar (en üst üyelik katmanında kullanılabilir); oluştururken **Konuşma uzunluğu: Ekstra uzun** seçeneğini belirleyin.
</Callout>

## "Başka bir şeyden konuşalım" ifadesini mi görüyorsunuz?

Bu uyarı, mevcut içeriğin bir güvenlik politikasını tetiklediğini ve konunun sürdürülemeyeceğini belirtir. Konuşmaya devam etmek için yeni bir konu yazmanız yeterlidir — beklemeniz gerekmez.

<Callout type="info">
İçeriğin ihlal oluşturmadığını düşünüyorsanız, geri bildirim göndermek ve güvenlik politikalarımızı geliştirmemize yardımcı olmak için "👎" düğmesine tıklayın.
</Callout>

## "Kimi biraz yorgun" ifadesini mi görüyorsunuz?

Bu, çok fazla kullanıcının çevrim içi olduğu ve işlem kaynaklarının yoğun yük altında bulunduğu anlamına gelir — yani yoğun saatlerde uygulanan bir rate limit. 1–2 dakika bekleyip tekrar deneyin.

<Callout type="tip">
Bekleme süresini azaltmak için, ayrılmış işlem kaynaklarına öncelikli erişim sağlayan bir üyelik planına abone olmayı düşünebilirsiniz.
</Callout>

## PPT/Word/Excel indirilemiyor mu?

Kimi sohbet penceresi, indirilebilir Office dosyalarını doğrudan oluşturmaz:

| Dosya Türü | Nerede Oluşturulur |
|-----------|-------------------|
| **Slaytlar** | [Kimi Slides](https://www.kimi.com/slides) bölümüne gidin — çevrim içi oluşturma ve indirme desteklenir |
| **Word/Excel** | **Agent** modunu kullanın |
