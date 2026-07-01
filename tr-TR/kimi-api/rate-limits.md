---
title: "Rate limit'ler"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limit'ler - Kimi Yardım Merkezi"
  description="Kimi API, platform kararlılığını ve adil kullanımı sağlamak için istek sıklığı ve concurrency üzerinde rate limit uygular. Rate limit kademeleri hesabınızın..."
/>

# Rate limit'ler

Kimi API, platform kararlılığını ve adil kullanımı sağlamak için istek sıklığı ve concurrency üzerinde rate limit（hız sınırı） uygular. Rate limit kademeleri, hesabınızın toplam yükleme tutarına göre belirlenir.

## Rate limit kademeleri

API rate limit'leri, hesabınızın **toplam yükleme tutarına** göre kademelendirilir; ne kadar çok yükleme yaparsanız, kullanabileceğiniz rate limit'ler o kadar yüksek olur. Kademe eşikleri ile bunlara karşılık gelen RPM (dakika başına istek) ve TPM (dakika başına token) sınırlarının ayrıntıları için [platform.moonshot.ai](https://www.platform.moonshot.ai) konsoluna bakın.

## Mevcut sınırları nasıl kontrol edebilirsiniz?

- Mevcut rate limit kademenizi görmek için API konsoluna giriş yapın.
- API yanıt başlıkları da rate limit bilgisini içerir:
  - `X-RateLimit-Limit`: Mevcut rate limit üst sınırı
  - `X-RateLimit-Remaining`: Kalan kullanılabilir istek sayısı
  - `X-RateLimit-Reset`: Sınırın sıfırlanacağı zaman

## 429 hatalarıyla başa çıkma

İstek sıklığınız sınırı aştığında, API 429 durum kodu döndürür. Önerilen adımlar:

1. **Üstel geri çekilme (exponential backoff) uygulayın**: Önce 1 saniye bekleyin, ardından her yeniden denemede bekleme süresini ikiye katlayın (2s, 4s, 8s…).
2. **Concurrency'yi denetleyin**: Eşzamanlı istek sayısını sınırlamak için istek kuyrukları veya semaforlar kullanın.
3. **İstekleri toplu hale getirin**: Birçok küçük isteği daha az sayıda ve daha büyük isteklerde birleştirin.

## Daha yüksek rate limit talep etme

İş ihtiyaçlarınız mevcut rate limit'leri aşıyorsa:

- **Yükleme yaparak yükseltin**: Toplam yükleme tutarınızı artırın; sistem rate limit kademenizi otomatik olarak yükseltecektir.
- **Satış ekibiyle iletişime geçin**: Özel gereksinimleriniz için [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) üzerinden platform satış ekibine ulaşarak özel bir rate quota talep edin.
