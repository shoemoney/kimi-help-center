---
title: "Konuşma sınırları"
slug: "conversation-limits"
order: 6
extract_headings: true
preview: false
---

<SeoMeta
  title="Konuşma sınırları - Kimi Yardım Merkezi"
  description="Konuşma bağlamı çok uzayıp modelin token sınırını aştığında, Kimi Claw yanıt vermeyi durdurabilir veya bir hata döndürebilir."
/>

# Konuşma sınırları

Konuşma bağlamı çok uzayıp modelin token sınırını aştığında, Kimi Claw yanıt vermeyi durdurabilir veya bir hata döndürebilir.

**Nasıl düzeltilir:**

- Yeni bir konuşma başlatmak ve mevcut bağlamı temizlemek için `/new` gönderin.
- `/new` sonrasında hata devam ediyorsa, belleğe fazla sayıda Skill yüklenmiş olabilir. Şunları deneyin:
  - `/skills` — yüklü skill'leri gözden geçirin ve ihtiyaç duymadıklarınızı kaldırın.
  - `/compact` — yer açmak için mevcut bağlamı sıkıştırın.
  - `/reset` — son çare olarak Kimi Claw'ı tamamen sıfırlayın.

## API rate limit'ine mi ulaştınız?

Bu, istek sıklığı üst sınırına ulaştığınız anlamına gelir. Bir süre bekleyip tekrar deneyin.

**quota ve rate limit'lerinizi kontrol etmek için:**

1. [kimi.com/code](https://kimi.com/code) adresine gidin.
2. **Console**'u açın.
3. Mevcut kullanımınızı ve üst sınırlarınızı görmek için **View Quota & Rate Limits** seçeneğine tıklayın.

Sık sık rate limit'lere takılıyorsanız, görevlerinizi zamana yayabilir veya daha yüksek işlem hacmi için daha üst bir üyelik kademesine geçmeyi düşünebilirsiniz.
