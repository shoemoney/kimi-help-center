---
title: "Rate limit sınırları"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limit sınırları - Kimi Yardım Merkezi"
  description="Kimi API, platform kararlılığını ve adil kullanımı sağlamak için istek sıklığına ve concurrency değerine rate limit uygular. Rate limit kademeleri, hesabınızın..."
/>

# Rate limit sınırları

Kimi API, platform kararlılığını ve adil kullanımı sağlamak için istek sıklığına ve concurrency değerine rate limit uygular. Rate limit kademeleri, hesabınızın kümülatif yükleme tutarına göre belirlenir.

## Rate limit kademeleri

API rate limit değerleri, hesabınızın **kümülatif yükleme tutarına** göre kademelendirilir — ne kadar çok yükleme yaparsanız kullanabileceğiniz rate limit değerleri de o kadar yükselir. Belirli kademe eşikleri ile bunlara karşılık gelen RPM (dakika başına istek) ve TPM (dakika başına token) sınırları için [platform.kimi.ai](https://platform.kimi.ai) konsoluna bakın.

## Mevcut sınırlar nasıl kontrol edilir?

- Mevcut rate limit kademenizi görüntülemek için API konsoluna giriş yapın.
- API yanıt başlıkları da rate limit bilgilerini içerir:
  - `X-RateLimit-Limit`: Geçerli rate limit üst sınırı
  - `X-RateLimit-Remaining`: Kalan kullanılabilir istek sayısı
  - `X-RateLimit-Reset`: Sınırın sıfırlanacağı zaman

## 429 hatalarını ele alma

İstek sıklığınız sınırı aştığında API, 429 durum kodu döndürür. Öneriler:

1. **Üstel geri çekilme uygulayın**: Başlangıçta 1 saniye bekleyin, ardından her yeniden denemede bekleme süresini ikiye katlayın (2s, 4s, 8s…).
2. **Concurrency değerini kontrol altında tutun**: Eşzamanlı istek sayısını sınırlamak için istek kuyrukları veya semaforlar kullanın.
3. **İstekleri toplu gönderin**: Birden fazla küçük isteği daha az sayıda, daha büyük isteklerde birleştirin.

## Daha yüksek rate limit talep etme

İş gereksinimleriniz mevcut rate limit değerlerini aşıyorsa:

- **Yükleme yaparak yükseltin**: Kümülatif yükleme tutarınızı artırın; sistem rate limit kademenizi otomatik olarak yükseltir.
- **Satış ekibiyle iletişime geçin**: Özel gereksinimler için [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) üzerinden platform satış ekibine ulaşarak size özel rate quota talep edin.
