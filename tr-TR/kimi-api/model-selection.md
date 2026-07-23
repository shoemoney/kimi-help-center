---
title: "Model seçimi ve karşılaştırması"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Model seçimi ve karşılaştırması - Kimi Yardım Merkezi"
  description="Yetenek, hız ve fiyatlandırmaya göre doğru Kimi API modelini seçin."
/>

# Model seçimi ve karşılaştırması

<Callout type="info">
Yetenek, hız ve fiyatlandırmaya göre doğru Kimi API modelini seçin.
</Callout>

Kimi API, geliştiricilerin seçebileceği birden fazla model sunar.
## Kullanılabilir modeller
Tam model listesi ve ayrıntılı teknik özellikler için [platform.kimi.ai/docs/models](https://platform.kimi.ai/docs/models) sayfasını ziyaret edin.
Model seçerken şunları göz önünde bulundurabilirsiniz:
| Boyut | Dikkate alınacak nokta |
| --- | --- |
| **Bağlam Uzunluğu** | Uzun belge işleme için geniş bağlamlı modelleri seçin |
| **Yanıt Hızı** | Gecikmeye duyarlı senaryolar için hafif modeller |
| **Üretim Kalitesi** | Karmaşık akıl yürütme ve yaratıcı yazım için daha üst seviye modeller |
| **Fiyatlandırma** | Bütçe ve hacme göre maliyet açısından verimli modeli seçin |

## Görü modelleri
Görü modelleri; açıklama oluşturma, OCR, grafik yorumlama ve daha fazlası için görüntü girişini destekler:

<Callout type="info">
- Her görüntü, boyutundan veya çözünürlüğünden bağımsız olarak sabit **1.024 token** üzerinden ücretlendirilir
- Desteklenen formatlar: JPEG, PNG, WebP vb.
- Görüntüler URL veya Base64 kodlamasıyla iletilebilir
</Callout>

## Şu anda desteklenmeyen yetenekler

<Callout type="warning">
- **Video Multimodal**: Doğrudan video girişi henüz desteklenmiyor
- **PPT Generation API**: Henüz API üzerinden kullanılamıyor
- **Deep Research API**: Henüz API üzerinden kullanılamıyor
</Callout>

Bu yeteneklerle ilgili güncellemeler için platform duyurularını takip edin.
