---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Doğal dille yazılmış açıklamalardan, tasarım taslaklarından veya şablonlardan web siteleri oluşturun ve dağıtın."
---

<SeoMeta
  title="Kimi Websites'a genel bakış - Kimi Yardım Merkezi"
  description="Doğal dille yazılmış açıklamalardan, tasarım taslaklarından veya şablonlardan web siteleri oluşturun ve dağıtın."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites**, en yeni Kimi K3 çok kipli görsel ajan yapay zekâ modeliyle güçlendirilmiş bir Kimi Agent ürün özelliğidir. Temel yeteneği **Vibe Coding**'dir; yani doğal dilden web siteleri üretip bunları çevrimiçi dağıtmaktır.
</Callout>

Kimi, görsel girdileri (arayüz taslakları, ekran görüntüleri, etkileşim videoları) ve doğal dil yönergelerini anlayarak kullanıcı girdisini eksiksiz ve çalıştırılabilir ön uç koduna dönüştürür; bu yalnızca statik arayüzü değil, dinamik etkileşimli davranışı da kapsar.

## Özelliklere genel bakış

| Özellik | Açıklama |
|---------|------------|
| **Sohbetle site oluşturma** | İhtiyaçlarınızı doğal dille anlatın; yapay zekâ web sitesini otomatik olarak üretsin |
| **Görüntü/Video anlama** | Tasarım taslaklarını/ekran görüntülerini/ekran kayıtlarını yükleyin; yapay zekâ bunları çözümleyip HTML sayfaları oluştursun |
| **Otomatik dağıtım** | Tek tıkla anında yayımlama |
| **Çok turlu düzenleme** | Sürüm karşılaştırmasıyla yinelemeli site revizyonları |
| **Tek tıkla paylaşım** | Kolayca paylaşmak için erişilebilir bağlantılar oluşturun |
| **Şablon seçimi** | Hızlı başlangıç için çok sayıda hazır şablon |
| **Kod dışa aktarma** | Kendi sunucunuzda barındırmak için paketlenmiş HTML/CSS/JS dosyalarını indirin |

## Kimi Websites nasıl kullanılır?

### 1. Yöntem: Kimi Websites sayfasına gidin

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Kimi websites homepage"
/>

1. **Tarayıcıyı açın**: Chrome, Safari, Edge, Firefox veya başlıca tarayıcılardan birini kullanın
2. **Şu adrese gidin**: [kimi.com/websites](https://www.kimi.com/zh/websites) (Çince ve İngilizce destekler)
3. **Giriş yapın**: Kimi hesabınızla (telefon numarası veya e-posta)
4. **Görevinizi girin**:

| Yaklaşım | Açıklama |
|----------|-------------|
| **Metin girişi** | İsteğinizi doğal dille yazın |
| **Görüntü/site kopyalama** | Bir tasarım taslağı veya ekran görüntüsü yükleyin |
| **Şablon tabanlı** | Hazır bir şablon seçip içeriği değiştirin |

5. **Oluşturmaya başlayın**: Bir şablon seçin veya sohbetle baştan başlayın

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### 2. Yöntem: mobil uygulama

iOS, Android ve HarmonyOS'un tamamında resmi Kimi uygulaması mevcuttur. Giriş alanında **Görev çubuğu**'na dokunup **Websites moduna** geçin; bu mod çok kipli üretim araçları ile Agent yeteneklerini içerir.

### 3. Yöntem: genel Agent modu

K3 modelini seçip bir site oluşturma görevi girin. Kimi, görsel kodlama yeteneklerini ve kod çalıştırma araçlarını devreye sokar.

## Kimi Websites nasıl çalışır?

### 1. Adım: sohbet yoluyla bir web sitesi oluşturun

İhtiyaçlarınızı doğal dille anlatın. Üç oluşturma yöntemi desteklenir:

| Yöntem | Açıklama |
|--------|------------|
| **Metinle açıklama** | Web sitesi gereksinimlerini doğrudan girin; yapay zekâ otomatik olarak üretsin |
| **Tasarım taslağı çözümleme** | Bir tasarım dosyası yükleyin; yapay zekâ bunu tanıyıp web sayfası olarak yeniden oluştursun |
| **Şablonla hızlı oluşturma** | Hazır bir şablon seçip içeriği değiştirin |

**Örnek istem**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "West Highland Terrier köpekleri için siyah-beyaz renk şemalı bir web sitesi oluştur. Üç bölüm içersin:\nYapay zekâ tarafından üretilen görsellerin sergilendiği, stüdyo kalitesinde fotoğraf takvimi\nBir \"Curly Lab\" bakım ve tımar ansiklopedisi\nWestie baskılı kapüşonlu sweatshirt'ler ve sınırlı sayıda gümüş yaldızlı poster satan bir ürün mağazası. Ödeme sayfasında bir bağış modülü bulunsun; satılan her ürün başına sokak köpeklerinin kurtarılmasına 1 dolar bağışlansın.",
    },
  ]}
/>

### 2. Adım: oluşturma süreci

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

Kimi Websites, **webapp-building SKILL**'i etkinleştirir; bu, özel bir çok turlu kod üretme ajanıdır:
1. **Gereksinim analizi**: Web sitesi modüllerini, görsel stili ve etkileşim mantığını analiz eder
2. **Görev planlama**: Tasarım, geliştirme ve içerik hazırlama alt görevlerine ayırır
3. **Teknoloji yığını seçimi**: Uygun mimariyi seçer (örneğin React + Tailwind CSS)
4. **İçerik üretimi**: Görseller, simgeler ve diğer görsel öğeleri oluşturur
5. **Kod inşası**: Sayfa yapısını, stillendirmeyi ve etkileşim kodunu yazar
6. **Çok turlu iyileştirme**: Önizleme sonuçlarına göre tamamlanana kadar kendini ayarlar

### 3. Adım: önizleme ve düzenleme
- **Canlı önizleme**: Tarayıcıda anında görüntülemek için bir HTML demo URL'si oluşturur
- **Sohbetle düzenleme**: Değişiklik istemek için sohbete devam edin, örneğin *"Gezinme çubuğunu koyu yap"*

<Callout type="tip">
**Örnek**: *"Renkler pek iyi durmuyor; siyah-beyaz şartını kaldırıp normal görünümlü bir web sitesi yapmak isterim."*
Kimi, yapılacaklar listesini yeniden düzenleyip oluşturmaya devam eder.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### 4. Adım: görsel çevrimiçi düzenleme
- **Çok turlu iyileştirme**: Sürdürülen sohbet aracılığıyla ayrıntıları ince ayar yapın
- **Düzenleme kipleri**:
  - **Açıklama kipi**: Alanlara tıklayıp doğal dille notlar ekleyin
  - **Seçim kipi**: Herhangi bir öğeyi seçip notlar ekleyin
  - Revizyon önerilerini işaretlemek için dikdörtgenleri, okları, fırçaları ve renk değiştirmeyi kullanın
- Tüm revizyon önerilerini Kimi'ye tek seferde gönderin
### 5. Adım: dağıtma ve yayımlama
| Dağıtım Yöntemi | Açıklama |
|-------------------|------------|
| **Otomatik dağıtım** | Çevrimiçi bağlantı oluşturarak tek tıkla dağıtım |
| **İndir ve kendin barındır** | Paketlenmiş kod dosyalarını indirip kendi sunucunuza dağıtın |
| **Özel alan adı** | Oluşturulan web sitesini kendi alan adınıza bağlayın |

Oluşturma tamamlandıktan sonra şunları yapabilirsiniz:
- Sürüm dosyalarını indirmek için farklı dağıtım sürümlerine tıklayın
- Genel olarak dağıtılmış bir bağlantı almak için Paylaş (Share) düğmesine tıklayın (ya da gizliye ayarlayın)
- Revizyona devam etmek için Düzenle (Edit) düğmesine tıklayın
- Doğrudan dağıtım veya daha fazla iyileştirme için eksiksiz HTML/CSS/JS kodunu indirin

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Hedef kitle
| Kitle | Kullanım Senaryosu |
|----------|----------|
| **Geliştiriciler** | Ürün prototipleri ve ön uç demoları tasarlayarak sıfırdan oluşturma süresini büyük ölçüde azaltın |
| **Girişimciler** | Sınırlı kaynaklarla hızla açılış sayfaları, ürün vitrinleri ve kurumsal web siteleri oluşturun |
| **Ürün Yöneticileri** | PRD'leri veya tasarım taslaklarını hızla gösterilebilir etkileşimli prototiplere dönüştürün |
| **Teknik bilgisi olmayan kullanıcılar** | Kodlama gerektirmez; fikrinizi anlatın veya bir referans görseli yükleyip kavramdan çalışan web sayfasına geçin |

## Referans senaryolar
| Senaryo | Örnek İstem |
|----------|---------------|
| **Sıfırdan açılış sayfası** | Teknolojik bir estetiğe sahip bir SaaS pazarlama açılış sayfası oluştur; hero bölümü, özellik özeti, fiyatlandırma ve CTA içersin |
| **Videodan siteye yeniden oluşturma** | [Ekran kaydı yükleyin] Bu videoda gösterilen web sitesini, orijinal etkileşim efektlerini koruyarak yeniden oluştur |
| **Ekran görüntüsünden yeniden oluşturma** | [Tasarım taslağı yükleyin] Bu tasarımı çalıştırılabilir web sayfası koduna dönüştür |
| **Kişisel portfolyo** | Bir fotoğrafçının portfolyo sitesini oluştur; sade siyah-beyaz stil ve tuğla düzeninde görsel yerleşimi olsun |
| **Veri görselleştirme sayfası** | Grafikler ve filtrelerle 2025 yapay zekâ şirketi yatırım verilerini gösteren bir görselleştirme sayfası oluştur |
| **Marka web sitesi** | Yumuşak toprak tonlarında bir kahve markası web sitesi oluştur; ana sayfa, ürünler ve mağaza bulucu sayfalarını içersin |
| **Yardımcı araç / Hesaplayıcı** | Bir BMI hesaplayıcı web sayfası oluştur; sade arayüzlü, birim değiştirme destekli ve sağlık seviyesi göstergeleri olsun |
