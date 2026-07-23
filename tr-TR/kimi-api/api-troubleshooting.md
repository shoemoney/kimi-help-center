---
title: "API sorun giderme"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API sorun giderme - Kimi Yardım Merkezi"
  description="Kimi API kullanan geliştiricilerin sık karşılaştığı sorunlar ve çözümleri."
/>

# API sorun giderme

<Callout type="info">
Kimi API kullanan geliştiricilerin sık karşılaştığı sorunlar ve çözümleri.
</Callout>

## 429 rate limit hatası nasıl ele alınır?

429 hatası, istek sıklığınızın mevcut hesabın rate limit değerini aştığı anlamına gelir. Çözmek için:

- Üstel geri çekilme tabanlı bir yeniden deneme stratejisi uygulayın (yeniden denemeden önce 1 sn, 2 sn, 4 sn… bekleyin).
- Bir kuyruk mekanizması kullanarak eşzamanlı istek sayısını kontrol edin.
- rate limit kademenizi yükseltmek için toplam yükleme tutarınızı artırın.
- Daha yüksek quota gerekiyorsa satış ekibiyle iletişime geçin.

## 401 kimlik doğrulama hatası nasıl ele alınır?

401 hatası, API anahtarıyla kimlik doğrulamanın başarısız olduğu anlamına gelir. Şunları kontrol edin:

- API anahtarının doğru kopyalandığından emin olun (başta/sonda boşluk kalmamasına dikkat edin).
- İstek başlığı biçiminin `Authorization: Bearer <your-api-key>` olduğunu doğrulayın.
- API anahtarının silinmediğini veya devre dışı bırakılmadığını doğrulayın — konsoldan kontrol edin.
- Başka bir platforma ait anahtar kullanmadığınızdan emin olun (Kimi API anahtarları `sk-` ile başlar).

<Callout type="warning">
**API Anahtarı Biçimi**: Kimi API anahtarları `sk-` ile başlar. Doğru anahtar biçimini kullandığınızdan emin olun.
</Callout>

## Dosya yüklemek ücretli mi?

Dosya yüklemenin kendisi ücretsizdir. Ancak yüklediğiniz bir dosyaya konuşmada başvurduğunuzda, dosyanın içeriği token’lara ayrıştırılır ve giriş token’ları olarak ücretlendirilir. Daha büyük dosyalar daha fazla token üretir.

## 403 yetersiz bakiye hatası nasıl ele alınır?

403 hatası genellikle hesap bakiyesinin yetersiz olduğunu gösterir. Konsoldan yükleme yapın — tutar hemen kullanılabilir hale gelir. Mevcut bakiyenizi kontrol etmek için bakiye sorgulama API’sini de kullanabilirsiniz.

## Yanıt kesilirse ne yapmalıyım?

API yanıtı eksikse veya kesilmişse:

- `max_tokens` parametresinin çok düşük ayarlanıp ayarlanmadığını kontrol edin ve gerekirse artırın.
- Yanıttaki `finish_reason` alanını inceleyin: `length`, çıktının token sınırı nedeniyle kesildiği anlamına gelir; `stop`, çıktının normal şekilde tamamlandığı anlamına gelir.
- Uzun metin üretimi için isteği parçalara bölmeyi düşünün.

<Callout type="tip">
**`finish_reason` değerini kontrol edin**: `length` = kesildi, `stop` = normal şekilde tamamlandı.
</Callout>

## Dosya API’si üzerinden görsel yükleyebilir miyim?

Evet. Dosya yükleme API’si görsel dosyalarını destekler. Yüklendikten sonra görsellere konuşmalarda başvurulabilir. Vision modellerinde, görselleri URL veya Base64 kodlamasıyla doğrudan mesajların içinde de iletebilirsiniz.

## Web Search kaynakları nelerdir?

Kimi API’nin Web Search özelliği, internette herkese açık bilgileri gerçek zamanlı olarak getirir. Sonuçlar, büyük arama motorları tarafından dizine eklenmiş web sayfalarından sağlanır. Her Web Search çağrısı için ek olarak $0.004 ücret alınır.

## Kimi üyeliği ile API concurrency arasında bir ilişki var mı?

<Callout type="warning">
**Kimi üyelik planları** (Allegretto gibi) ile **API** ayrı faturalandırma sistemleridir. Üyelik planlarına dahil olan agent paralelliği yalnızca Kimi’nin tüketici ürünleri için geçerlidir ve API rate limit değerleriyle ilişkili değildir. API concurrency sınırları, hesabınızın toplam yükleme kademesine göre belirlenir.
</Callout>

## API ile Kimi web uygulaması arasındaki fark

| Konu | Kimi Web Uygulaması | Kimi API |
| --- | --- | --- |
| **Hedef** | Tüketicilere yönelik sohbet ürünü | Geliştiricilere yönelik entegrasyon arayüzü |
| **Erişim** | Tarayıcı tabanlı | Programatik API çağrıları |
| **Faturalandırma** | Üyelik/credit sistemi | token bazlı kullandıkça öde |
| **Hesap** | Ortak oturum açma | Ortak oturum açma |
| **Credit’ler** | Sistemler arasında aktarılamaz | Sistemler arasında aktarılamaz |

## PPT oluşturma ve Deep Research API üzerinden kullanılabilir mi?

<Callout type="warning">
**PPT oluşturma** ve **Deep Research** **henüz API üzerinden kullanılamıyor**. Bu özelliklere şu anda yalnızca Kimi tüketici ürünü üzerinden erişilebilir. Güncellemeler için platform duyurularını takip edin.
</Callout>

## Şirket içi kurulum destekleniyor mu?

Kimi API şu anda yalnızca bulut tabanlı API hizmetleri sunar ve **şirket içi özel kurulumu desteklemez**. Özel kurulum gereksinimleriniz için satış ekibiyle [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) üzerinden iletişime geçin.

## Kimi API’yi Çin dışından çağırabilir miyim?

Kimi API, `api.moonshot.ai` üzerinden uluslararası kullanıma açıktır. Bağlantı sorunları yaşarsanız bölgeniz için en uygun çözümü görüşmek üzere satış ekibiyle iletişime geçin.
