---
title: "Model yetenekleri"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Model yetenekleri - Kimi Help Center"
  description="Kimi API model yetenekleri hakkında sıkça sorulan sorular aşağıdadır."
/>

# Model yetenekleri

Kimi API model yetenekleri hakkında sıkça sorulan sorular aşağıdadır.

## JSON modunu destekliyor mu?

Evet. Kimi API, model çıktısını geçerli JSON ile sınırlandıran JSON Mode özelliğini sunar. Kullanımı:

- İsteğinizde `response_format` parametresini `{"type": "json_object"}` olarak ayarlayın.
- Ayrıca modele JSON döndürmesini açıkça talimat verin ve beklenen yapıyı prompt'unuzda tanımlayın.
- JSON Mode'da modelin ayrıştırılabilir bir JSON dizesi üretmesi garanti edilir.

## Model ince ayarını destekliyor mu?

Kimi API, **şu anda** kullanıcı tarafından başlatılan model ince ayarını **desteklememektedir**. Özel model gereksinimleriniz için kurumsal özelleştirme seçenekleri hakkında bilgi almak üzere [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) üzerinden satış ekibiyle iletişime geçin.

## OCR destekliyor mu?

Kimi API'nin Vision modelleri görüntü anlama yeteneğine sahiptir ve görüntülerdeki metni tanıyarak OCR'a benzer sonuçlar elde edebilir:

- İngilizce, Çince ve birçok başka dildeki metnin tanınmasını destekler.
- Basılı metni ve bazı el yazısı metinleri tanıyabilir.
- Her görüntü için sabit 1.024 token ücretlendirilir.
- Düz metin tanımanın ötesinde modeller, görüntülerdeki tabloları, grafikleri ve diğer yapılandırılmış içerikleri de yorumlayabilir.

## TTS (metinden konuşmaya) ve ASR (konuşma tanıma) destekliyor mu?

Kimi API, **şu anda** TTS veya ASR **desteklememektedir**. Konuşmayla ilgili yetenekler için üçüncü taraf bir konuşma hizmetini Kimi API ile birleştirmeyi düşünebilirsiniz. Gelecekteki özellik güncellemeleri için platform duyurularını takip edin.
