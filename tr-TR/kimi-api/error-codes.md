---
title: "API hata kodları"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="API hata kodları - Kimi Yardım Merkezi"
  description="Kimi API çağrılarında sık görülen hata kodları ve bunları çözme yolları."
/>

# API hata kodları

<Callout type="info">
Kimi API çağrılarında sık görülen hata kodları ve bunları çözme yolları.
</Callout>

## Hata kodu başvurusu

| Hata Kodu | Anlamı | Çözüm |
| --- | --- | --- |
| 400 | Hatalı İstek | İstek gövdesinin biçimini, parametre adlarını ve türlerini kontrol edin. Yaygın nedenler: hatalı biçimlendirilmiş JSON, eksik zorunlu parametreler, aralık dışı değerler. |
| 401 | Yetkisiz | API anahtarının doğru, süresinin dolmamış ve devre dışı bırakılmamış olduğundan emin olun. Header biçimini doğrulayın: `Authorization: Bearer <your-api-key>`. |
| 403 | Yasak (yetersiz bakiye) | Hesap bakiyesi tükendi — konsoldan bakiye yükleyin. Hesap kısıtlanmış da olabilir; gerekirse destek ekibiyle iletişime geçin. |
| 404 | Bulunamadı | İstek URL yolunu ve model adını kontrol edin. Uç noktanın `https://api.moonshot.ai/v1/...` olduğundan emin olun. |
| 429 | Too Many Requests | rate limit aşıldı. Sıklığı azaltın, üstel geri çekilme uygulayın veya daha yüksek limitler için destek ekibiyle iletişime geçin. |
| 500 | Internal Server Error | Geçici sunucu sorunu — daha sonra yeniden deneyin. Sorun devam ederse `request_id` ile birlikte support@moonshot.ai adresine başvurun. |

## Genel sorun giderme ipuçları

<Callout type="tip">
1. **Tam hata mesajını kontrol edin**: Yanıt JSON içinde ayrıntılı açıklama içeren `error.message` alanı bulunur.
2. **request_id değerini not edin**: Destek ekibinin sorunu hızla bulmasına yardımcı olur.
3. **Resmî belgelere bakın**: Çağrıların [platform.kimi.ai](https://platform.kimi.ai) adresindeki dokümanlarla uyumlu olduğundan emin olun.
4. **Yeniden deneme mantığı uygulayın**: 429 ve 500 hataları için üstel geri çekilme kullanın.
</Callout>
