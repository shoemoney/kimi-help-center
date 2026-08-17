---
title: "Eklenti Oluşturun ve Gönderin"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Ürün veya hizmetinizi bir Kimi eklentisine dönüştürün, test edin ve resmi mağazada listelenmek için başvurun."
---

<SeoMeta
  title="Eklenti Oluşturma ve Gönderme - Kimi Yardım Merkezi"
  description="Kimi Work'ta bir eklenti oluşturmayı, test etmeyi ve resmi Kimi eklenti mağazasında listelenmek için başvurmayı öğrenin."
/>

# Eklenti Oluşturun ve Gönderin

Ürün veya hizmetinizi Kimi'ye bağlayarak kullanıcıların sohbet sırasında bu özelliklerden yararlanabilmesini istiyorsanız, resmi Kimi eklenti mağazası için bir eklenti oluşturmak, test etmek ve göndermek üzere bu kılavuzu takip edin.

## Kimi eklentisi nedir?

Bir Kimi eklentisi, ürününüzü Kimi'ye bağlar. Kimi'nin ürününüzün ne zaman kullanışlı olduğunu anlamasına yardımcı olur ve kullanıcılara yardımcı olmak için gerekli iş akışlarını veya araçları sağlar. Bir eklenti şunları içerebilir:

- **Yalnızca beceriler**: ürününüze veya kullanım durumunuza özel yeniden kullanılabilir iş akışları.
- **Yalnızca MCP**: bir MCP sunucusu aracılığıyla Kimi'ye sunulan araçlar ve hizmetler.
- **Beceriler ve MCP**: Kimi'nin bunları etkili bir şekilde kullanmasına yardımcı olan iş akışlarıyla birleştirilmiş ürün araçları.

## Başlamadan önce

Öncelikle <a class="leading-7 text-(--Colors-KMBlue) decoration-(--hc-pill-border) decoration-2 transition-colors hover:text-(--Colors-KMBlue-hover)" href="https://www.kimi.com/products/kimi-work">Kimi Work'ü indirin ve yükleyin</a>. Aşağıdakileri hazırlayın:

- Bir eklenti adı, açıklaması ve logosu
- Kullanıcıların doğal dilde tamamlayabilmesi gereken temel görevler
- Uygulanabilirse bir MCP sunucu URL'si

<Callout type="warning">
Eklenti logosunda bir üçüncü taraf ürünü, markası veya ticari markası bulunuyorsa, göndermeden önce ilgili hak sahibiyle iletişime geçin ve gerekli yazılı izni alın.
</Callout>

## Adım 1: Eklentiyi oluşturun ve test edin

1. Kimi Work'ü açın, bir sohbette "/" yazın ve **Plugin Builder**'ı seçin.
2. Eklentiyi tanımlayın ve hazırladığınız bilgileri sağlayın. Zaten bir Codex, Claude veya başka bir platformun eklentisine sahipseniz, dosyalarını veya proje URL'sini sağlayın ve dönüştürme talimatlarını izleyin.

3. **Eklentiler** → **Kişisel** bölümüne gidin, eklentiyi bulun ve yükleyin.

4. Normal ve sınır durumlarını da içeren temel yetenekleri yeni bir sohbette test edin. En az üç temsili test istemi saklayın.
5. Plugin Builder'ın talimatlarını izleyerek tam eklenti ZIP dosyasını alın.

MCP destekli bir eklenti için ayrıca kimlik doğrulama akışını test edin:

- **Kimlik doğrulama yok**: kullanıcılar eklentiyi yükledikten hemen sonra kullanabilir.
- **OAuth**: üçüncü taraf yetkilendirme sayfası ilk yükleme sırasında açılmalıdır.
- **CLI kimlik doğrulaması**: yükleme yetkilendirme başlatmaz. Kullanıcılar eklentiyi ilk kez çağırdıklarında yetkilendirmeyi sohbet içinde tamamlarlar. Başarılı yetkilendirmeden sonra genellikle başka sohbetlerde tekrar yetkilendirme yapmaları gerekmez.

## Adım 2: Başvurunuzu gönderin

Eklentiyi oluşturup test ettikten sonra [Kimi eklenti gönderme formunu](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) doldurun ve eklenti ZIP dosyasını yükleyin.

Form şunları ister:

| Öğe | Gereksinim |
| --- | --- |
| Eklenti adı, açıklaması ve ZIP dosyası | Zorunlu |
| Eklenti türü | Yalnızca beceriler, yalnızca MCP veya hibrit |
| MCP kimlik doğrulaması | Yalnızca MCP ve hibrit eklentiler için zorunlu |
| Hedeflenen bölgeler | Çin ana karası, denizaşırı veya her ikisi |
| Öne çıkanlar ve önerilen test istemleri | En az üç test istemi |
| Ortak pazarlama ilgisi ve materyaller | Materyaller isteğe bağlıdır ve yalnızca ortak pazarlama tartışmak istiyorsanız gereklidir |
| Yetkilendirme ve uyumluluk durumu | Daha fazla tartışma gerektiren öğeleri açıklayın |
| İletişim e-postası | İnceleme güncellemeleri ve ek bilgi talepleri için kullanılır |
| Şirket veya ekip, ilgili web sitesi ve notlar | İsteğe bağlı |

<Callout type="warning">
Formda veya eklenti ZIP'inde şifreler, token'lar, API anahtarları, özel anahtarlar veya diğer gizli bilgileri eklemeyin. Kullanıcıların kendi anahtarlarına ihtiyaç duyması durumunda, yalnızca bunu nasıl alacaklarını ve yapılandıracaklarını açıklayın.
</Callout>

## Sonraki adımlar

Kimi ekibi başvuruyu ve eklenti ZIP'ini inceleyecektir. Eklenti incelemeyi geçerse veya daha fazla bilgi veya değişiklik gerekiyorsa, size sağlanan e-posta adresinden iletişime geçeceğiz ve sonraki adımları paylaşacağız.

## SSS

### MCP sunucusu olmadan bir eklenti gönderebilir miyim?

Evet. Yalnızca beceriler içeren eklentiler desteklenmektedir. Eklenti türü olarak **Yalnızca beceriler**'i seçin.

### Codex, Claude veya başka bir platformun eklentisini gönderebilir miyim?

Evet. 1. Adımda, mevcut eklenti dosyalarını veya proje URL'sini Plugin Builder'a sağlayın ve dönüştürme talimatlarını izleyin. Dönüştürülen eklentiyi Kimi Work'ta yükleyip test ettikten sonra oluşturulan ZIP dosyasını gönderin.

### Hangi MCP kimlik doğrulama yöntemleri destekleniyor?

Şu anda aşağıdaki üç yöntem desteklenmektedir:

- **Kimlik doğrulama yok**: Kullanıcılar eklentiyi yükledikten hemen sonra oturum açmadan veya başka bir kimlik doğrulama işlemi tamamlamadan kullanabilir.
- **OAuth**: Kullanıcılar eklentiyi ilk kez yüklediklerinde otomatik olarak üçüncü taraf ürünün yetkilendirme sayfasına yönlendirilir. Yetkilendirmeden sonra eklentiyi kullanabilirler.
- **CLI kimlik doğrulaması**: Yükleme bir yetkilendirme akışı başlatmaz. Kullanıcılar eklentiyi bir sohbette ilk kez çağırdıklarında, sohbette gösterilen talimatları kullanarak yetkilendirmeyi tamamlarlar. Başarılı yetkilendirmeden sonra genellikle başka sohbetlerde tekrar yetkilendirme yapmaları gerekmez.

Eklentinizin gerçek kimlik doğrulama yöntemiyle eşleşen akışı test edin. Bir OAuth eklentisi ilk yükleme sırasında yönlendirme yapmazsa veya CLI ile kimlik doğrulamalı bir eklenti kullanıcılardan tekrar tekrar yetkilendirme isterse, başvurunuzu göndermeden önce MCP Sunucusu'nun kimlik doğrulama yapılandırmasını kontrol edin ve sorunu **Ek notlar** bölümünde açıklayın.

### OAuth yetkilendirme akışı nasıl görünür?

OAuth etkin bir MCP Sunucusu için, Plugin Builder MCP Sunucusu URL'sinden ilgili yetkilendirme bilgilerini tanımlar. Eklenti oluşturulduktan sonra, kullanıcılar ilk kez yüklediklerinde üçüncü taraf ürünün yetkilendirme sayfasına yönlendirilir.

### Kimi ile daha geniş bir ortaklık keşfetmek istersem ne yapmalıyım?

Önce bu kılavuzdaki eklenti oluşturma, test etme ve gönderme sürecini tamamlayın. Eklentiyi listelemenin ötesinde başka işbirliği biçimlerini keşfetmek istiyorsanız, önerinizi **Ek notlar** bölümünde kısaca açıklayın. Kimi ekibi duruma göre sizinle iletişime geçebilir.

### Başvuru göndermek listelenmeyi garanti eder mi?

Hayır. Kimi ekibi eklentinin işlevselliğini, kullanıcı deneyimini, güvenliğini, hizmet güvenilirliğini ve ilgili yetkilendirme durumunu değerlendirir.
