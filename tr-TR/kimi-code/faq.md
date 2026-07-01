---
title: "Kimi Code SSS"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Kimi Code sıkça sorulan sorular."
---

<SeoMeta
  title="Kimi Code SSS - Kimi Yardım Merkezi"
  description="Kimi Code CLI kurulumu, kimlik doğrulama, geçiş, etkileşim ve daha fazlası hakkında sıkça sorulan sorular."
/>

# Sıkça sorulan sorular

## Eski sürümden geçiş

<Callout type="info">
Kimi Code CLI büyük bir sürüm yükseltmesinden geçti — Python/uv'den Node.js'e taşınarak daha basit bir kurulum deneyimi, daha hızlı başlatma ve yeniden tasarlanmış bir terminal arayüzü sunuyor. Eski sürüm zamanla kullanımdan kaldırılacak; bu nedenle en kısa sürede yükseltmenizi öneririz.
</Callout>

Eski sürümden geçiş yapıyorsanız aşağıdaki adımları izleyin — tek bir komut yapılandırmanızı, MCP sunucularınızı ve oturum geçmişinizi yeni sürüme taşır.

### Yenilikler

- **Artık Python / uv yok**: Node.js üzerine yeniden inşa edildi — Python ortamı gerekmez, kurulumu daha basit
- **Yerel ikili dosya, ek kurulum gerektirmeden hemen çalışır**: Daha hızlı başlatma, daha hafif kullanım
- **Yeniden tasarlanmış terminal arayüzü**: Daha akıcı, daha hızlı yanıt veren bir deneyim
- **Tam veri aktarımı**: Yapılandırma, MCP sunucuları ve oturum geçmişi sorunsuzca taşınır

### Geçiş nasıl yapılır

Geçiş için iki yol vardır.

kimi-code'u kurduktan sonra **`kimi`'yi ilk çalıştırdığınızda**, otomatik olarak `~/.kimi/` altında kimi-cli verisinin olup olmadığını denetler. Herhangi bir veri bulursa bir geçiş istemi belirir ve şimdi geçiş yapmayı, sonra yapmayı ya da bir daha sorulmamasını seçebilirsiniz.

İsterseniz **istediğiniz zaman elle de çalıştırabilirsiniz**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Sohbet oturumlarını da taşıyıp taşımayacağınızı seçebilirsiniz. Henüz geçmişe ihtiyacınız yoksa **Yalnızca yapılandırma** seçeneğini belirleyin; aksi takdirde her şeyi tek seferde taşımak için **Yapılandırma + N oturum** seçeneğini kullanın. İşlem sonunda bir özet yazdırılır.

### Geçiş sırasında neler olur

**Taşınanlar**: yapılandırma (`config.toml`), MCP sunucu yapılandırması, giriş geçmişi ve taşımayı seçtiğiniz sohbet oturumları.

**Taşınmayanlar**: OAuth oturum açma kimlik bilgileri ve MCP servis yetkilendirmeleri kopyalanmaz; bu nedenle geçişten sonra yeniden `/login` çalıştırmanız ve MCP sunucularını yeniden yetkilendirmeniz gerekir. kimi-cli eklentileri de bu kapsamın dışındadır.

<Callout type="tip">
Geçiş, `~/.kimi/` altındaki eski verilerinizin hiçbirini **asla değiştirmez veya silmez**. kimi-cli eskisi gibi çalışmaya devam eder ve ikisi birbirini etkilemez. Geçiş işlemi tekrar tekrar da çalıştırılabilir — daha önce taşınmış oturumlar yeniden içe aktarılmaz.
</Callout>

Geçişten sonra, kimi-cli'den içe aktarılan oturumlar, yenilerinden ayırt edebilmeniz için oturum seçicide `[imported]` etiketiyle işaretlenir.

## Kurulum ve kimlik doğrulama

### `/login` çalıştırıldığında kullanılabilir model yok

`/login` çalıştırırken "Seçilen platform için kullanılabilir model yok" mesajını görüyorsanız, bunun nedeni şunlar olabilir:

- **Geçersiz veya süresi dolmuş API anahtarı**: Girdiğiniz API anahtarının doğru ve hâlâ geçerli olup olmadığını kontrol edin.
- **Ağ bağlantısı sorunu**: API servis adresine (örneğin `api.kimi.com` veya `api.moonshot.cn`) erişebildiğinizi doğrulayın.

**Platform ayrımına dikkat edin**

Kimi Code üyelik avantajları ile [Kimi Açık Platform](https://platform.kimi.com) farklı Base URL'lere sahiptir. Lütfen yapılandırma sırasında Base URL'in API Key ile eşleştiğinden emin olun.

| Platform | Base URL | Faturalandırma | Anahtar oluşturma |
|------|---------|---------|-------------|
| **Kimi Code** | Anthropic uyumlu: `https://api.kimi.com/coding/` | Kimi üyelik aboneliği (kredi dahil) | [Kimi Code Konsolu](https://www.kimi.com/code/console) |
| **Kimi Açık Platform** | `https://api.moonshot.cn/v1` | Kullandıkça öde | [Kimi Açık Platform](https://platform.kimi.com) |

### API anahtarı geçersiz

Geçersiz bir API anahtarının olası nedenleri:

- **Anahtar yanlış girilmiş**: Fazladan boşluk veya eksik karakter olup olmadığını kontrol edin.
- **Anahtarın süresi dolmuş veya iptal edilmiş**: Anahtarın durumunu platform konsolunda doğrulayın.

### Üyelik süresi dolmuş veya kredi tükenmiş

Kimi Code platformunu kullanıyorsanız, `/usage` komutuyla mevcut kredinizi ve üyelik durumunuzu kontrol edebilirsiniz. Krediniz tükendiyse veya üyeliğinizin süresi dolduysa, [Kimi Code](https://kimi.com/code) üzerinden yenilemeniz veya yükseltmeniz gerekir.

## Abonelik

### Fatura nasıl talep edebilirim veya üyeliğimi nasıl yükseltebilirim?

[Kimi Üyelik sayfasını](https://www.kimi.com/membership/pricing?from=kfc_docs_faq#pricing-faq) ziyaret edin ve fatura talebi göndermek ya da planınızı yükseltmek için yönergeleri izleyin.

## Etkileşim sorunları

### Görsel yapıştırma başarısız

`Ctrl-V` ile bir görsel yapıştırırken "Mevcut model görsel girişini desteklemiyor" mesajını görüyorsanız, mevcut model görsel girişini desteklemiyordur.

Çözümler:

- **Görselleri destekleyen bir modele geçin**: `image_in` özelliğine sahip bir model kullanın.
- **Pano içeriğini kontrol edin**: Panoda bir görsel dosyasının yolu yerine gerçekten görsel verisi bulunduğundan emin olun.

## Güncellemeler ve yükseltmeler

### macOS'te ilk başlatma yavaş

macOS Gatekeeper, yeni bir program ilk kez çalıştığında bir güvenlik denetimi yapar; bu da başlatmayı yavaşlatır. Çözümler:

- **Denetimin tamamlanmasını bekleyin**: İlk çalıştırmada sabırlı olun; sonraki başlatmalar normal hıza dönecektir.
- **Geliştirici Araçları'na ekleyin**: Terminal uygulamanızı **Sistem Ayarları → Gizlilik ve Güvenlik → Geliştirici Araçları** bölümüne ekleyin.

### Kimi Code CLI nasıl yükseltilir

En son sürümü kontrol etmek ve güncelleme seçeneklerini görmek için `kimi upgrade` komutunu çalıştırın. Yükseltmek için `Install update now` (Güncellemeyi şimdi yükle) seçeneğini belirleyin. Doğrudan paket yöneticisi üzerinden de yükseltebilirsiniz:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## VS Code uzantısı SSS

Aşağıda Kimi Code VS Code Uzantısı hakkında sıkça sorulan sorular yer almaktadır.

### VS Code açık çalışma alanı olmadığını söylüyor

Lütfen VS Code'da bir klasör açın. Kimi Code VS Code uzantısının düzgün çalışması için bir çalışma alanı gerekir.

### VS Code CLI'ın bulunamadığını söylüyor

Lütfen Kimi Code CLI'ı elle kurun ve VS Code ayarlarında `kimi.executablePath` değerini yapılandırın ya da yerleşik CLI'ın mevcut olduğundan emin olun.

### VS Code'da oturum açma başarısız

Oturum açmayı atlayıp bunun yerine API anahtarı modunu kullanmayı deneyin, ağ bağlantınızı kontrol edin ya da Kimi Code uzantısı eylem menüsünden daha sonra yeniden deneyin.

### VS Code mesaj gönderiyor ama yanıt alamıyor

Lütfen Kimi Code CLI'ın kullanılabilir olduğunu, modelin yapılandırıldığını ve VS Code'da bir çalışma alanı klasörünün açık olduğunu doğrulayın. Hata günlüklerini "Kimi Code: Show Logs" üzerinden kontrol edin.

### VS Code bağlantısı zaman aşımına uğruyor

30 saniye içinde yanıt alınmazsa zaman aşımına uğrar. Lütfen ağınızı kontrol edip yeniden deneyin.

### Mesaj göndermeden önce VS Code'da hata

Belirli hatalar VS Code'da mesaj göndermeyi engeller; örneğin Kimi Code CLI'ın bulunamaması, sürümün çok düşük olması, oturum açılmamış olması veya oturumun meşgul olması. Hata bir bildirim olarak gösterilir ve girdiğiniz metin yeniden denemek için korunur.

## Geri bildirim ve iletişim

### Belgeler sorunumu çözmedi

Yukarıdakiler sorununuzu çözmediyse, e-posta yoluyla bizimle iletişime geçmekten çekinmeyin: [code@moonshot.ai](mailto:code@moonshot.ai). Lütfen e-postada karşılaştığınız sorunu, izlediğiniz adımları ve ilgili günlük bilgilerini açıklayın; en kısa sürede size yanıt vereceğiz.

Herhangi bir sorunuz veya öneriniz varsa, [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues) üzerinden de geri bildirimde bulunabilirsiniz.
