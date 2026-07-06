---
title: "API hata kodları"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API hata kodları - Kimi Yardım Merkezi"
  description="Kimi API çağrılırken karşılaşılan yaygın hata kodları ve bunların nasıl çözüleceği."
/>

# API hata kodları

<Callout type="info">
Kimi API çağrılırken karşılaşılan yaygın hata kodları ve bunların nasıl çözüleceği.
</Callout>

## Hata kodu başvurusu

| Hata Kodu | Anlamı | Çözüm |
| --- | --- | --- |
| 400 | Hatalı İstek | İstek gövdesinin biçimini, parametre adlarını ve türlerini kontrol edin. Yaygın nedenler: bozuk JSON, eksik zorunlu parametreler, aralık dışı değerler. |
| 401 | Yetkisiz | API Anahtarının doğru, süresi dolmamış ve etkin olduğunu doğrulayın. Başlık biçimini onaylayın: `Authorization: Bearer <your-api-key>`. |
| 403 | Yasak (yetersiz bakiye) | Hesap bakiyesi tükendi — konsoldan bakiye yükleyin. Hesap kısıtlanmış da olabilir; gerekirse destek ekibiyle iletişime geçin. |
| 404 | Bulunamadı | İstek URL yolunu ve model adını kontrol edin. Uç noktanın `https://api.moonshot.ai/v1/...` olduğunu onaylayın. |
| 429 | Çok Fazla İstek | Rate limit aşıldı. Sıklığı azaltın, üstel geri çekilme uygulayın veya daha yüksek limitler için destek ekibiyle iletişime geçin. |
| 500 | Sunucu İç Hatası | Geçici sunucu sorunu — daha sonra tekrar deneyin. Sorun devam ederse `request_id` ile birlikte support@moonshot.ai adresine yazın. |

## Genel sorun giderme ipuçları

<Callout type="tip">
1. **Tam hata mesajını kontrol edin**: Yanıt JSON'u, ayrıntılı açıklama içeren `error.message` alanını barındırır.
2. **request_id'yi not edin**: Destek ekibinin sorunu hızla bulmasına yardımcı olur.
3. **Resmi belgelere başvurun**: Çağrılarınızın [platform.kimi.ai](https://platform.kimi.ai) adresindeki belgelerle uyumlu olduğundan emin olun.
4. **Yeniden deneme mantığı uygulayın**: 429 ve 500 hataları için üstel geri çekilme kullanın.
</Callout>
