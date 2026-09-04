---
title: "Kişisel Eklenti Nasıl Oluşturulur"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Kimi Work'teki yerleşik Plugin Builder skill'ini kullanarak tek cümlelik bir fikri, harici bir eklenti deposunu veya herhangi bir web sayfasını kendi eklentinize dönüştürün."
---

<SeoMeta
  title="Kişisel Eklenti Nasıl Oluşturulur - Kimi Yardım Merkezi"
  description="Kimi Work'teki yerleşik Plugin Builder skill'i ile kişisel eklenti oluşturun: tek cümlelik bir fikirden oluşturun, harici bir eklenti deposunu içe aktarın veya herhangi bir web sayfasını eklentiye dönüştürün. Kişisel eklenti pazarınıza kaydolduktan sonra yükleyin ve sohbetlerde hemen kullanın."
/>

# Kişisel Eklenti Nasıl Oluşturulur

Kimi Work'te yerleşik **Plugin Builder** skill'ini kullanarak tek cümlelik bir fikri, harici bir eklenti deposunu veya herhangi bir web sayfasını kendi eklentinize dönüştürebilirsiniz. Hangi yöntemi seçerseniz seçin, eklenti size aynı yoldan ulaşır: **oluştur / dönüştür → kişisel eklenti pazarınıza kaydet ("Personal" sekmesi) → + ile yükle → sohbette kullan**. Yüklendikten sonra mevcut sohbette hemen kullanılabilir — yeniden başlatma gerekmez.

Başlamadan önce en güncel [Kimi Work](https://www.kimi.ai/products/kimi-work) masaüstü uygulamasının yüklü olduğundan emin olun. Plugin Builder yerleşik bir skill'dir ve ek kurulum gerektirmez: sohbette "/" yazarak çağırın ya da eklenti pazarında "Custom plugin" seçeneğine tıklayarak ana sohbette oluşturmaya başlayın.

## Tek Cümleyle Yeni Eklenti Oluşturma

"Aklımda bir fikir var ama elimde mevcut kod yok" durumu için idealdir. Yalnızca istediğiniz yeteneği tanımlamanız yeterlidir; Plugin Builder iskelet kurulumunu, alan doldurmayı, yerel doğrulamayı ve kaydı otomatik olarak üstlenir — tek bir dosyayı bile elle yazmazsınız.

1. **Neye ihtiyacınız olduğunu tanımlayın.** Sohbette Plugin Builder'ı çağırın ve eklentinin ne yapması gerektiğini tek cümleyle açıklayın — örneğin, "şirket kayıt bilgilerini arayan bir eklenti yap". Ad, açıklama ve kategori gibi çıkarılabilen alanlar otomatik olarak doldurulur; yalnızca bir MCP sunucu URL'si veya simge gibi çıkarılamayan bilgiler sizinle teyit edilir.
2. **Derlemenin bitmesini bekleyin.** Plugin Builder eklenti dosyalarını yerel olarak oluşturur, yapı ve spesifikasyon doğrulamasını otomatik olarak geçirir ve ardından eklentiyi kişisel eklenti pazarınıza kaydeder.
3. **Yükleyin ve kullanın.** **Plugins → Personal** bölümünü açın, az önce oluşturduğunuz eklentiyi bulun ve + ile yükleyin. Yüklendikten sonra mevcut sohbette hemen kullanılabilir ve istediğiniz zaman "/" ile çağırabilirsiniz.

**Tek paragraflık prompt:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nBenim için şunları kapsayan bir literatür arama eklentisi oluştur:\n1. Literatür arama: konuya / yazara / dergiye göre makale bul; künye kayıtları, özetler ve tam metin bağlantıları döndür\n2. Sonuç dışa aktarma: arama sonuçlarını kaynakça yöneticilerine kolayca aktarabilmek için CSV olarak dışa aktar\n3. Derleme desteği: arama sonuçlarına dayanarak bir literatür taraması taslağı hazırla",
    },
  ]}
/>

## Pazar Yerinden veya Depodan Eklenti İçe Aktarma

Bir eklenti deposu bağlantısını Plugin Builder'a bırakın; otomatik olarak tanır, biçimi dönüştürür ve "Personal" sekmenize yükler. İçe aktarılan eklentiler resmi pazarı etkilemez ve istediğiniz zaman kaldırılabilir.

1. **Desteklenen eklenti biçimleri:** Plugin Builder aşağıdaki kaynakların eklenti manifestlerini tanır ve hepsini Kimi'nin yerel `kimi.plugin.json` biçimine dönüştürür:

| Biçim | Notlar |
| --- | --- |
| `kimi.plugin.json` | Kimi'nin yerel biçimi: gerekli alanlar düzeltilir |
| Diğer aracı platformlarının eklenti manifestleri | `.codex-plugin/plugin.json` veya `.claude-plugin/plugin.json` gibi dizinlerdeki `plugin.json` dosyaları ile bu platformların sunduğu pazar yeri dizin dosyaları |
| `server.json` | MCP resmi kayıt biçimi: yalnızca bir MCP hizmeti içeren bir eklentiye dönüştürülür |
| Genel `plugin.json` | Eklenti kök dizininde bulunan genel bir manifest |

2. **Nasıl içe aktarılır:** depo bağlantısını Plugin Builder'a gönderin. Aşağıdaki depo şekillerini otomatik olarak tanır:

- **Tek eklentili depo**: deponun tamamı tek bir eklentiye dönüştürülür;
- **Çok eklentili depo (monorepo)**: her alt dizin kendi eklentisine dönüştürülür;
- **Eklenti pazarı / dizin deposu** (plugins.json veya marketplace.json dizini içeren bir depo): dizindeki her girdi genişletilir ve toplu olarak dönüştürülür;
- **Yalnızca skill içeren depo**: eklenti manifesti olmayıp yalnızca skill dosyaları içeren bir depo, skill türünde bir eklenti olarak paketlenir.

3. **Personal sekmesinden yükleme:** işlem tamamlandığında Plugin Builder hangi eklentilerin kullanılabilir olduğunu bildirir. **Plugins → Personal** bölümüne gidin ve ilgili kartta "Install" seçeneğine tıklayarak sohbetlerde kullanmaya başlayın.

**Tek paragraflık promptlar:**

Tek bir depoyu içe aktarma:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nhttps://github.com/owner/example deposundaki eklentiyi kişisel eklenti olarak içe aktar. Dönüştürmeden sonra önce yapının ve bağımlılıkların kullanılabilir olup olmadığını kontrol et; onaylandıktan sonra kişisel eklenti pazarıma kaydet. Dönüştürme başarısız olursa nedenini söyle.",
    },
  ]}
/>

Bir eklenti pazarını toplu içe aktarma:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nhttps://github.com/hashgraph-online/awesome-ai-plugins adresindeki eklenti koleksiyonunu kişisel eklentilere toplu olarak dönüştür. İncelemem için yalnızca ilk 5 tanesini dönüştür; onayladıktan sonra geri kalanların tamamını dönüştür, kişisel eklenti pazarıma tek tek kaydet ve sonunda bana “kullanılabilir / bağımlılıklar kullanılamıyor / başarısız” olarak gruplandırılmış eksiksiz bir rapor ver.",
    },
  ]}
/>

Yalnızca belirli bir alt dizini dönüştürme:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nYalnızca https://github.com/owner/repo/tree/main/plugins/example dizini altındaki eklentiyi dönüştür. Dönüştürme ve kontroller başarılı olduktan sonra kişisel eklenti pazarıma kaydet.",
    },
  ]}
/>

**İçe aktarılan eklentileri yönetme:**

- **Eklenti güncelleme**: kaynak depo güncellenirse veya adı ya da açıklamayı değiştirmek isterseniz Plugin Builder'a söylemeniz yeterli — yeniden dönüştürür veya değiştirir ve yeniden kaydeder.
- **Kaldırma / silme**: bir eklentiyi devre dışı bırakmak için "Personal" sekmesinden kaldırın; kaldırdıktan sonra girdi sekmede kalır — tamamen kaldırmak isterseniz girdiyi silin.
- **Kaynak dizin**: dönüştürülen çıktı, yerel çalışma alanınızın plugins/ dizininde tutulur. Burası eklentinin "kaynak dosyalarıdır" ve Plugin Builder gelecekteki güncellemeleri buna dayandırır — lütfen elle silmeyin.

## Web Sayfasını Eklentiye Dönüştürme

"Sık kullandığım bir sitenin herkese açık API'si yok ama Kimi'nin benim için veri çekmesini ve siteyi benim yerime kullanmasını istiyorum" durumu için idealdir. URL'yi Plugin Builder'a gönderin ve neye ihtiyacınız olduğunu tanımlayın — örneğin, "XX sitesini eklentiye dönüştür; XX araması yapmak istiyorum". Siteyi analiz etmek ve eklentiyi çalıştırmak için iki tarayıcı seçeneği vardır:

| Yöntem | En uygun olduğu durum | Gerekenler |
| --- | --- | --- |
| **Yerleşik tarayıcı (varsayılan)** | Çoğu web sitesi; siteyi analiz etmek ve eklentiyi çalıştırmak için Kimi Work'ün yerleşik tarayıcısını kullanır | Kurulum gerekmez; giriş gerektiğinde yerleşik tarayıcıda bir kez oturum açın |
| **WebBridge (wb)** | Chrome'da zaten oturum açmış olduğunuz hesapları yeniden kullanma | Önce WebBridge'i kurun ve Chrome'unuzu onunla yönetin |

1. **Siteyi analiz edin.** Plugin Builder, URL'yi seçtiğiniz tarayıcıda açar. Sayfa giriş gerektiriyorsa, tarayıcıda bir kez oturum açmanızı ister — şifrenizi, çerezlerinizi veya herhangi bir kimlik bilginizi asla istemez.
2. **API'leri tersine mühendislikle çözümleyip eklentiyi oluşturur.** Sayfadaki temel özellikleri gerçekten çalıştırır, ağ isteklerini yakalar, sitenin dahili veri API'lerini çözer ve ardından yerleşik sorgu betikleri içeren skill türünde bir eklenti oluşturur.
3. **Doğrulama, kayıt, yükleme.** Önceki yöntemlerle aynı: eklenti doğrulamayı geçtikten sonra "Personal" sekmesine kaydedilir; + ile yükleyin ve kullanmaya başlayın.

Bundan sonra "benim için XX ara" demeniz yeterli; Kimi, eklentiyi kullanarak verileri doğrudan tarayıcıda çeker ve sonuçları düzenler. Sitenin API'leri değişip eklenti çalışmazsa, Plugin Builder'dan siteyi yeniden analiz etmesini ve eklentiyi güncellemesini isteyin.

**Tek paragraflık prompt:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nHacker News'i (https://news.ycombinator.com) şunları kapsayan bir eklentiye dönüştür:\n1. Gönderi arama: bir anahtar kelime gir; gönderi başlıklarını, bağlantıları, puanları ve yorum sayılarını döndür\n2. Ana sayfa: ana sayfadaki güncel ilk 30 gönderiyi getir\n3. Yorumları okuma: belirli bir gönderiyi aç ve öne çıkan yorumlardaki ana noktaları özetle",
    },
  ]}
/>

<Callout type="warning">
Yerleşik tarayıcı yöntemi, Kimi Work'ün yerleşik tarayıcı yeteneğine dayanır — yükseltme istemi görürseniz masaüstü uygulamasını en güncel sürüme güncelleyin. WebBridge yöntemi, önce WebBridge'in bilgisayarınıza ve Chrome'a kurulmuş olmasını gerektirir.
</Callout>
