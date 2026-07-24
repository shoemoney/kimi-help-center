---
title: "Kimi Websites SSS"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Kimi Websites kullanımı hakkında sık sorulan sorular."
---

<SeoMeta
  title="Kimi Websites SSS - Kimi Yardım Merkezi"
  description="Kimi Websites için önizleme sorunları, boş sayfalar, veri kaybı ve yayınlama hataları dahil yaygın sorun giderme adımları."
/>

# Kimi Websites SSS

> Önizleme paneli düğmeleri, düzenleme modları, yayınlama ve yayından kaldırma hakkında eksiksiz yönergeler için [Kimi Websites](/websites/websites-overview) sayfasına bakın. Bu sayfada yalnızca yaygın sorun giderme konuları ele alınır.

## Önizleme yüklenmiyor ya da en son sürümü göremiyor muyum?

> Örneğin: "Web sitesi görünmüyor", "Önizleme hâlâ eski sürüm" veya "Kaydedilen en son sürümü göremiyorum."

Çoğu durumda web sitesi başarıyla oluşturulmuş ve kaydedilmiştir. "Görememe" sorunu genellikle önizleme paneli veya sürüm kartı gösteriminden kaynaklanır. En yaygın neden proje dizininin yanlış olmasıdır. Diğer durumlarda şu sırayı izleyebilirsiniz:

<Callout type="warning">
**Proje dizinini doğrulayın**: Web sitesi projesi `/mnt/agents/output/app` konumunda olmalıdır. Önizleme yalnızca bu dizinden kaydedilen sürümleri okur. Kimi projeyi başka bir yere yerleştirdiyse (örneğin geçici bir `/tmp` dizinine), sürüm başarıyla kaydedilmiş olabilir ancak önizleme onu okuyamaz—Kimi'den projeyi bu dizine taşımasını ve yeniden kaydetmesini isteyin.
</Callout>

1. **Sayfayı yenileyin veya konuşmayı yeniden açın**—sürüm kartlarının görünmesi bazen birkaç saniye sürebilir.
2. **Kimi'den konuşma içinde yeni bir sürüm kaydetmesini isteyin.**
3. **Konuşma çok uzunsa yeni bir konuşma başlatmayı deneyin** (aşağıdaki "Konuşmam çok uzun—yeni bir konuşma başlatmalı mıyım?" bölümüne bakın).
4. Hâlâ görünmüyorsa: kod ve sürüm genellikle başarıyla kaydedilmiştir (Kimi'den sürüm numarasını isteyebilirsiniz). Bu çoğu zaman önizleme hizmetindeki geçici bir dalgalanmadan kaynaklanır—lütfen daha sonra yeniden deneyin. Sorun devam ederse önizleme panelindeki **Kullanıcı Geri Bildirimi** (zarf simgesi) düğmesine tıklayarak sürüm numarasıyla birlikte geri bildirim gönderin; ekibimiz inceleyecektir.

## Web sitesi boş, beyaz ekran gösteriyor, çöküyor veya yanıt vermiyor mu?

> Örneğin: "Sayfa tamamen boş", "Web sitesi boş", "Web sitesi çöktü" veya "Hiçbir şey görünmüyor / tıklayınca hiçbir şey olmuyor."

- Boş ya da çökmüş bir ekran genellikle **front-end çalışma zamanı hatasından** kaynaklanır (eksik bağımlılıklar, bir alt sayfaya doğrudan erişme veya tekil bir kaynağın ya da görselin yüklenememesi gibi). Belirtiyi konuşmada Kimi'ye anlatın (ekran görüntüsü yararlı olur); Kimi sorunu bulup düzeltecek ve ardından yeni bir sürüm kaydedecektir.
- Boş ekranın **eksik dosyalardan** kaynaklandığını düşünüyorsanız web sitesinin her sürümü bir anlık görüntü kaydeder. Kimi'den geçmiş bir sürümden geri yüklemesini isteyin (aşağıdaki "Proje dosyaları veya dizinleri eksik" bölümüne bakın).
- **Tarayıcı uyumluluğu**: Gizliliğe odaklanan bazı tarayıcılar (Brave, belirli Firefox eklentileri) front-end kaynaklarının yüklenmesini engelleyerek görüntüleme anomalilerine yol açabilir. Kimi alan adını izin listenize eklemeyi, kalkanları/gizlilik engelleyicileri geçici olarak devre dışı bırakmayı veya Chrome / Edge / Safari kullanmayı deneyin.

## "Yayınla"ya tıklamak başarısız olursa ne yapmalıyım?

İşlem yukarıdakiyle aynıdır: daha sonra yeniden deneyin. Sorun devam ederse sürüm numarasıyla birlikte **Kullanıcı Geri Bildirimi** üzerinden gönderin. Sürüm zaten başarıyla kaydedilmiştir; sıfırdan yeniden oluşturulması gerekmez.

## Web sitesi bağlantısı ne kadar süre geçerli? Süresi dolar mı?

Web sitesini herkese açık olarak dağıtmak için **Yayınla**ya tıklarsanız, oluşturulan bağlantı siz siteyi gizli yapmak için manuel olarak **Yayından Kaldır**a tıklamadığınız veya içerik uygunsuz olarak işaretlenmediği sürece süresiz olarak geçerli kalır.

## İçerik, veri veya kayıtlar eksik mi?

> Örneğin: "Ana sayfamdaki içerik kayboldu", "Veritabanına yüklediğim bilgi gitti", "Yüklediğim bilgiler eksik" veya "AI verilerin kalıcı olarak kaybolduğunu söylüyor."

Çoğu durumda veriler aslında kaybolmamıştır. Şu sırayla kontrol edin:

1. **Önce web sitesinin gerçekten "full-stack" olup olmadığını doğrulayın**: Yalnızca **back-end (veritabanı) özellikleriyle** oluşturulmuş full-stack web siteleri verileri platformun bulut veritabanında saklar; böylece veriler ziyaretler ve cihazlar arasında kalıcı olur. Pratikte "full-stack" olduğu söylenen birçok web sitesi **sonuçta yalnızca front-end kalır** ve veriler hiçbir zaman gerçekten veritabanına girmez—bu durumda sayfayı yenilemek veya cihaz değiştirmek önceki verilerin doğal olarak kaybolmasına neden olur. Kimi'den projenin gerçek bir back-end ve veritabanı içerip içermediğini doğrulamasını isteyin.
2. **Saf front-end web sitesi**: Veriler yalnızca mevcut tarayıcınızın yerel depolamasına (localStorage) kaydedilir. Tarayıcı / cihaz değiştirmek veya tarayıcı verilerini temizlemek verilerin kaybolmasına neden olur. Uzun vadeli, çok cihazlı veri saklama gerekiyorsa Kimi'den veritabanlı bir full-stack çözüme geçmesini isteyin.
3. **Doğrulanmış full-stack web sitesi**: Veriler platform tarafından yönetilen bulut veritabanına kaydedilir. **Yeni bir sürüm yayınlamak mevcut verileri temizlemez**; full-stack olmasına rağmen veriler hâlâ görünmüyorsa bu genellikle geçici bir sorundur—yenileyin veya daha sonra yeniden deneyin.
4. **Verilerin gerçekten kaybolduğunu doğrularsanız**: Önizleme panelindeki **Kullanıcı Geri Bildirimi** (zarf simgesi) düğmesine tıklayarak geri bildirim gönderin; ekibimiz inceleyecektir. Bu noktada üzerine yazmayı önlemek için tekrarlanan işlemlere devam etmeyin.

## Proje dosyaları veya dizinleri eksik ya da "ortam sıfırlandı" / "kurtarılamıyor" mu?

> Örneğin: "Web sitesi proje dizinim yok oldu ve kurtarılamıyor", "Dosyalar eksik" veya "Ortam sıfırlandı mesajı."

- Web sitesinin her sürümü **bir anlık görüntü kaydeder**, bu nedenle kaynak kod genellikle geçmiş sürümlerden kurtarılabilir. Kimi'den geçmiş sürümleri listelemesini ve belirli bir sürüme geri dönmesini / geri yüklemesini isteyin.
- Bu durum **çok uzun bir konuşmada** yaşanıyorsa (özellikle konuşma ortasında model değiştirdiyseniz), yeni bir konuşma başlatmanızı öneririz (sonraki maddeye bakın).
- Kurtarma hâlâ mümkün değilse **Kullanıcı Geri Bildirimi**ne tıklayarak geri bildirim gönderin; ekibimiz inceleyecektir.

## Konuşmam çok uzun—yeni bir konuşma başlatmalı mıyım?

Bir konuşma uzun süredir devam ediyorsa, çok sayıda sürüme yayıldıysa veya konuşma ortasında model değiştirdiyseniz (örneğin K2.6 → K3), mevcut yetenekler en güncel sürüm olmayabilir; bu da bağlam kaybına veya dosya anomalilerine yol açabilir. En güncel oluşturma ve teslim yeteneklerinden yararlanmak için **yeni bir konuşma başlatmanızı öneririz**. Yayınlanmış web siteleri ve geçmiş sürümler bundan etkilenmez; normal şekilde erişilebilir kalır.

## Kodu dışa aktardıktan sonra kendim dağıtabilir miyim?

Tam proje kodunu indirip kendi sunucunuza dağıtabilirsiniz; ancak aşağıdaki iki öğe Kimi platformu tarafından sağlanır ve **kodla birlikte taşınmaz**:

- **Kimi hesap girişi**: Bu, platformun sağladığı bir giriş özelliğidir ve Kimi platformundan ayrıldıktan sonra doğrudan kullanılamaz. Kendi dağıtımınız için giriş gerekiyorsa Kimi'den kendi veritabanınıza dayalı bir kullanıcı adı/şifre giriş sistemi uygulamasını isteyin.
- **Platform tarafından yönetilen veritabanı**: Full-stack web sitesi verileri, platformun o site için atadığı bulut veritabanına kaydedilir. Dışa aktarılan kod bu verileri içermez ve kendi veritabanınıza otomatik olarak bağlanmaz. Kendi dağıtımınız için kendi veritabanınızı kurmanız ve verileri taşımanız gerekir.

Yalnızca web sayfasının herkese açık olarak erişilebilir olmasını istiyorsanız platformun **Paylaş → Yayınla** özelliğini kullanmanız yeterlidir. Kendi sunucunuzu kurmanıza gerek yoktur—Kimi hesap girişi ve bulut verileri normal şekilde çalışmaya devam eder.

## Oluşturulan web sitesi gereksinimlerimle eşleşmiyor mu?

- Konuşmada neyin eşleşmediğini açıkça belirtin: örneğin renk, düzen, metin, özellik modülleri, veri tabloları vb.
- Agent'ın referansa göre düzenleme yapması için referans görseller, örnek web sayfaları veya daha ayrıntılı metin açıklamaları yükleyebilirsiniz.
- Birden fazla düzenlemeden sonra hâlâ memnun değilseniz daha yapılandırılmış bir gereksinim açıklamasıyla yeni bir konuşma başlatmayı deneyin.

## Oluşturulduktan sonra web sitesi içeriğini, bağlantıları veya stilleri hâlâ değiştirebilir miyim?

Evet. Orijinal konuşmada Agent'a neyi değiştirmek istediğinizi söylemeye devam edin, örneğin:

- "Ana sayfa başlığını XXX olarak değiştir"
- "'Bize Ulaşın' düğmesinin bağlantısını https://xxx olarak değiştir"
- "Genel olarak koyu temaya geç"

Değişiklikten sonra Agent yeni bir bağlantı oluşturup dağıtacaktır.

## Web sitesine back-end, veritabanı veya giriş işlevi nasıl eklerim?

- Web sitesi oluşturma talimatında veritabanı ve giriş işlevi olan full-stack bir web sayfası istediğinizi vurgulayın.
- Alternatif olarak Agent'a önce front-end sayfasını oluşturtabilir, ardından kaynak kodu dışa aktarıp ikincil geliştirme için bir geliştiriciye verebilirsiniz.

## Web sitesi kaynak kodunu indirebilir veya GitHub'a dışa aktarabilir miyim?

Mevcut sürüm, tüm dosyaların yerel olarak indirilmesini destekler. Konuşmada "Tüm Dosyalar"ı açın ve indirme düğmesine tıklayın.

## Web sitesi oluşturmak/değiştirmek ne kadar credit tüketir?

Web sitesi oluşturma, genellikle önemli miktarda token/credit tüketen karmaşık bir görevdir; tüketim şunlara bağlıdır:

- Sayfa sayısı ve karmaşıklık
- Görseller, tablolar ve etkileşim mantığının dahil edilip edilmediği
- Yinelemeli düzenleme sayısı

Deneme yanılmayı azaltmak için gereksinim açıklamanızı olabildiğince net yapmanızı öneririz. Sonuçtan memnun değilseniz durumu geri bildirimde açıklayabilirsiniz.

## Web sitesi oluşturma çok yavaş, sürekli sıraya giriyor veya terminal başarısız mı oluyor?

- Yoğun saatlerde (hafta içi gündüz ve akşam) sıra oluşabilir. Yoğun olmayan saatlerde kullanmanızı öneririz.
- Görev 10 dakikadan uzun süre takılı kalırsa önce web sayfasını yenilemeyi deneyin.
- Karmaşık web sitelerinde işi daha küçük görevlere bölmenizi öneririz: ana sayfayla başlayın, ardından alt sayfaları ve özellikleri kademeli olarak ekleyin.

## Kimi Websites ne için uygundur? Ne için uygun değildir?

**Uygun olduğu durumlar:**

- Kişisel ana sayfalar/portföyler, etkinlik açılış sayfaları, ürün tanıtım sayfaları, basit araç sayfaları, küçük oyun prototipleri
- Tasarım fikirlerini hızlıca doğrulama ve etkileşimli demolar oluşturma
- Basit bir back-end veritabanı ve kullanıcı sistemi gerektiren web siteleri

**Uygun olmadığı durumlar:**

- Ödeme sistemleri içeren karmaşık web siteleri
- Yüksek concurrency ve yüksek erişilebilirlik gerektiren resmî üretim ortamları
- Özel alan adıyla uzun süreli, kararlı barındırma gerektiren ticari siteler

---

Yukarıdaki yöntemler sorununuzu çözmezse lütfen Kimi web/app sağ alt köşesindeki **Kullanıcı Geri Bildirimi** düğmesiyle gönderin veya [müşteri desteğiyle iletişime geçin](/others/contact-support). Şunları eklemenizi öneririz:

- Sorunun yaşandığı web sitesi bağlantısı
- Kullandığınız tarayıcı ve işletim sistemi
- Ekran görüntüleri veya hata mesajı metni
- Orijinal konuşmanın yaklaşık zamanı

Geri bildirimlerinize dayanarak web sitesi oluşturma yeteneklerini geliştirmeye devam edeceğiz.
