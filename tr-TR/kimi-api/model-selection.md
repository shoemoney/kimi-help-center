---
title: "Model seçimi ve karşılaştırması"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Model seçimi ve karşılaştırması - Kimi Yardım Merkezi"
  description="Yeteneğe, hıza ve fiyatlandırmaya göre doğru Kimi API modelini seçin."
/>

# Model seçimi ve karşılaştırması

<Callout type="info">
Yeteneğe, hıza ve fiyatlandırmaya göre doğru Kimi API modelini seçin.
</Callout>

Kimi API, geliştiricilerin tercih edebileceği birden fazla model sunar.
## Kullanılabilir modeller
Eksiksiz model listesi ve ayrıntılı özellikler için [platform.kimi.ai/docs/models](https://platform.kimi.ai/docs/models) adresini ziyaret edin.
Bir model seçerken şunları göz önünde bulundurabilirsiniz:
| Boyut | Değerlendirme |
| --- | --- |
| **Bağlam Uzunluğu** | Uzun belge işlemleri için geniş bağlamlı modelleri tercih edin |
| **Yanıt Hızı** | Gecikmeye duyarlı senaryolar için hafif modeller |
| **Üretim Kalitesi** | Karmaşık akıl yürütme ve yaratıcı yazım için üst seviye modeller |
| **Fiyatlandırma** | Bütçenize ve hacminize göre maliyet açısından verimli modeli seçin |

## Görsel modeller
Görsel modeller; başlık oluşturma, OCR, grafik yorumlama ve daha fazlası için görsel girdisini destekler:

<Callout type="info">
- Her görsel, boyutundan veya çözünürlüğünden bağımsız olarak sabit **1.024 token** üzerinden ücretlendirilir
- Desteklenen biçimler: JPEG, PNG, WebP vb.
- Görseller URL veya Base64 kodlaması ile iletilebilir
</Callout>

## Şu anda desteklenmeyen yetenekler

<Callout type="warning">
- **Video Çok Kipli**: Doğrudan video girdisi henüz desteklenmiyor
- **PPT Oluşturma API'si**: API üzerinden henüz kullanılamıyor
- **Deep Research API'si**: API üzerinden henüz kullanılamıyor
</Callout>

Bu yeteneklerle ilgili güncellemeler için platform duyurularını takip edin.
