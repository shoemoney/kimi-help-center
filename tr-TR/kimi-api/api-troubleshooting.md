---
title: "API sorun giderme"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API sorun giderme - Kimi Yardım Merkezi"
  description="Kimi API kullanan geliştiriciler için sık karşılaşılan sorunlar ve çözümleri."
/>

# API sorun giderme

<Callout type="info">
Kimi API kullanan geliştiriciler için sık karşılaşılan sorunlar ve çözümleri.
</Callout>

## 429 rate limit hatası nasıl giderilir?

429 hatası, istek sıklığınızın mevcut hesabın rate limit değerini aştığı anlamına gelir. Çözüm için:

- Üstel geri çekilme (exponential backoff) yeniden deneme stratejisi uygulayın (yeniden denemeden önce 1 sn, 2 sn, 4 sn… bekleyin).
- Bir kuyruk mekanizması kullanarak eşzamanlı istek sayısını denetleyin.
- Rate limit kademenizi yükseltmek için toplam yükleme tutarınızı artırın.
- Daha yüksek bir kota gerekiyorsa satış ekibiyle iletişime geçin.

## 401 kimlik doğrulama hatası nasıl giderilir?

401 hatası, API Key kimlik doğrulamasının başarısız olduğu anlamına gelir. Aşağıdakileri kontrol edin:

- API Key'in doğru kopyalandığından emin olun (baştaki/sondaki boşluklara dikkat edin).
- İstek başlığı biçiminin `Authorization: Bearer <your-api-key>` olduğunu doğrulayın.
- API Key'in silinmediğini veya devre dışı bırakılmadığını teyit edin — konsoldan kontrol edin.
- Başka bir platforma ait bir anahtar kullanmadığınızdan emin olun (Kimi API Key'leri `sk-` ile başlar).

<Callout type="warning">
**API Key Biçimi**: Kimi API Key'leri `sk-` ile başlar. Doğru anahtar biçimini kullandığınızdan emin olun.
</Callout>

## Dosya yükleme ücrete tabi midir?

Dosya yüklemenin kendisi ücretsizdir. Ancak yüklenen bir dosyaya bir görüşmede referans verdiğinizde, içeriği token'lara ayrıştırılır ve girdi token'ı olarak faturalandırılır. Daha büyük dosyalar daha fazla token üretir.

## 403 yetersiz bakiye hatası nasıl giderilir?

403 hatası genellikle hesap bakiyesinin yetersiz olduğunu gösterir. Konsoldan bakiye yükleyin — yüklenen tutar anında kullanılabilir hale gelir. Mevcut bakiyenizi kontrol etmek için bakiye sorgulama API'sini de kullanabilirsiniz.

## Yanıt kesilirse ne yapmalıyım?

API yanıtı eksik veya kesik gelirse:

- `max_tokens` parametresinin çok düşük ayarlanıp ayarlanmadığını kontrol edin ve gerektiğinde artırın.
- Yanıttaki `finish_reason` alanını inceleyin: `length`, çıktının token sınırı nedeniyle kesildiği; `stop` ise normal şekilde tamamlandığı anlamına gelir.
- Uzun metin üretimi için isteği parçalara bölmeyi düşünün.

<Callout type="tip">
**`finish_reason` değerini kontrol edin**: `length` = kesildi, `stop` = normal şekilde tamamlandı.
</Callout>

## Dosya API'si ile görsel yükleyebilir miyim?

Evet. Dosya yükleme API'si görsel dosyalarını destekler. Yüklendikten sonra görsellere görüşmelerde referans verilebilir. Vision modelleriyle, görselleri doğrudan mesajlar içinde URL veya Base64 kodlamasıyla da iletebilirsiniz.

## Web aramasının kaynakları nelerdir?

Kimi API'nin web arama özelliği, internetteki herkese açık bilgileri gerçek zamanlı olarak getirir. Sonuçlar, başlıca arama motorlarının dizinlediği web sayfalarından elde edilir. Her web arama çağrısı için ek 0,004 $ ücret alınır.

## Kimi üyeliği ile API concurrency arasında bir ilişki var mı?

<Callout type="warning">
**Kimi üyelik planları** (Allegretto gibi) ile **API** ayrı faturalandırma sistemleridir. Üyelik planlarına dahil olan ajan paralelliği yalnızca Kimi'nin tüketici ürünleri için geçerlidir ve API rate limit değerleriyle ilgisi yoktur. API concurrency limitleri, hesabınızın toplam yükleme kademesine göre belirlenir.
</Callout>

## API ile Kimi web uygulaması arasındaki fark

| Özellik | Kimi Web Uygulaması | Kimi API |
| --- | --- | --- |
| **Hedef** | Tüketiciye yönelik sohbet ürünü | Geliştiriciye yönelik entegrasyon arayüzü |
| **Erişim** | Tarayıcı tabanlı | Programatik API çağrıları |
| **Faturalandırma** | Üyelik/kredi sistemi | Token bazlı kullandıkça öde |
| **Hesap** | Ortak oturum açma | Ortak oturum açma |
| **Krediler** | Sistemler arasında aktarılamaz | Sistemler arasında aktarılamaz |

## PPT oluşturma ve deep research API üzerinden kullanılabilir mi?

<Callout type="warning">
**PPT oluşturma** ve **deep research** **henüz API üzerinden kullanılamıyor**. Bu özelliklere şu anda yalnızca Kimi tüketici ürünü aracılığıyla erişilebilir. Güncellemeler için platform duyurularını takip edin.
</Callout>

## Şirket içi (on-premises) dağıtım destekleniyor mu?

Kimi API şu anda yalnızca bulut tabanlı API hizmetleri sunmaktadır ve **şirket içi (on-premises) özel dağıtımı desteklememektedir**. Özel dağıtım gereksinimleri için [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales) üzerinden satış ekibiyle iletişime geçin.

## Kimi API'yi Çin dışından çağırabilir miyim?

Kimi API, `api.moonshot.ai` üzerinden uluslararası olarak kullanılabilir. Bağlantı sorunları yaşarsanız, bölgeniz için en uygun çözümü görüşmek üzere satış ekibiyle iletişime geçin.
