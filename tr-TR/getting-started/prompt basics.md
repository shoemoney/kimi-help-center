---
title: "Prompt'ların temelleri"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Prompt'ların temelleri - Kimi Yardım Merkezi"
  description="Prompt, Kimi'ye gönderdiğiniz metin biçimindeki yönergedir; bir soru, bir açıklama, bir gereksinim listesi ya da hatta eksiksiz bir görev brifingi olabilir. Kimi, sizin..."
/>

# Prompt'ların temelleri

<Callout type="info">
Prompt, Kimi'ye gönderdiğiniz metin biçimindeki yönergedir; bir soru, bir açıklama, bir gereksinim listesi ya da hatta eksiksiz bir görev brifingi olabilir. Kimi, niyetinizi anlamak, bir yanıt oluşturmak ve görevleri yürütmek için prompt'unuzu kullanır.

Kısacası: **nasıl sorduğunuz, Kimi'nin nasıl yanıt vereceğini belirler.** Açık ve net bir prompt, neredeyse her zaman daha isabetli ve değerli bir yanıt getirir.
</Callout>

## İyi bir prompt'un dört temel unsuru

### 1. Rolü ve bağlamı tanımlayın

Kimi'ye kim olduğunuzu ve hangi durumda olduğunuzu söylemek, doğru derinliği ve tonu yakalamasına yardımcı olur.

| Belirsiz Prompt | Daha İyi Prompt |
|-------------|--------------|
| Yapay zekâ hakkında bir makale yaz | Bir teknoloji medyası editörüyüm. Genel okuyucuya hitap eden, anlaşılır ve akıcı bir üslupla yazılmış 2.000 kelimelik bir yapay zekâ tanıtım makalesine ihtiyacım var |
| Veri analizinde bana yardım et | Bir pazar analistiyim. Lütfen bu Excel dosyasındaki kanal bazında dönüşüm oranlarını, aylık değişimlere odaklanarak analiz et |

### 2. Görevi ayrıntılı biçimde tarif edin

Açıklamanız ne kadar belirginse, o kadar az revizyon turuna ihtiyaç duyarsınız. İyi bir görev açıklaması genellikle şunları içerir:

- **Ne yapılacağı**: Net bir eylem (analiz et, özetle, çevir, oluştur, karşılaştır…)
- **Çıktı biçimi**: Tablo, liste, paragraf, kod, Markdown…
- **Kapsam ve kısıtlar**: Kelime sayısı, madde sayısı, zaman aralığı, coğrafi kapsam…
- **Kalite gereksinimleri**: Akademik ton, sohbet havası, özlü, ayrıntılı…

<ComparisonBlock
  wrong={"Bu makaleyi özetle"}
  correct={"Bu makaleyi 3 maddede özetle; her biri en fazla 50 kelime olsun ve İngilizce olarak yaz"}
/>

### 3. Örnek veya referans sağlayın

Biçimlendirmeye dair belirli beklentileriniz olduğunda, Kimi'ye bir örnek vermek (few-shot) son derece etkilidir:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Toplantı notlarını şu biçimde düzenle:\n\nToplantı Konusu: xxx\nKatılımcılar: xxx\nÖnemli Kararlar:\nxxx\nxxxEylem Maddeleri:\n[ ] xxx (Sorumlu: xxx, Son Tarih: xxx)",
    },
  ]}
/>

### 4. Karmaşık görevleri adımlara bölün
Karmaşık görevlerde işi daha küçük adımlara ayırın ve Kimi'ye bu adımlar boyunca yol gösterin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bir rekabet analizi raporuna ihtiyacım var. Şu adımları izle:\nEn önemli 3 yerli rakibi ve temel özelliklerini listele\nFiyatlandırma stratejilerini karşılaştır\nHer ürünün güçlü ve zayıf yönlerini analiz et\nKendi ürünümüz için farklılaşma önerileri sun",
    },
  ]}
/>

## Pratik ipuçları
### Takip soruları ve yinelemeden yararlanın
İlk yanıttan memnun kalmadınız mı? Bütün bağlamı yeniden anlatmanıza gerek yok; sadece soruya devam edin:
- "Lütfen 2. maddeyi ayrıntılandır"
- "Tonu daha resmî yap"
- "Veri kaynaklarını ekle"
- "Farklı bir açıdan yeniden analiz et"
### Dosyalardan ve bağlantılardan yararlanın
Kimi; PDF, Word belgesi, Excel dosyası, görsel ve daha fazlasını yüklemeyi destekler. URL'leri de doğrudan yapıştırabilirsiniz. Dosyaları prompt'unuzla birleştirmek verimliliği önemli ölçüde artırır:
| Görev | Prompt Örneği |
|------|---------------|
| PDF özetleme | "Bu PDF'in ana noktalarını özetle" |
| Veri analizi | "Bu Excel verilerine dayanarak satış eğilimlerini analiz et" |
| URL'den çıkarım | "Bağlantıdaki bu makaleyi oku ve önemli çıkarımları derle" |

### Çıktı biçimini belirtin
Kimi'ye tam olarak hangi biçimi istediğinizi söyleyin:
| İhtiyaç | Prompt Örneği |
|------|---------------|
| Karşılaştırma tablosu | "A ile B'nin avantaj ve dezavantajlarını bir tabloda karşılaştır" |
| Kod çıktısı | "Bunu yorum satırları içeren Python koduyla gerçekleştir" |
| Yapılandırılmış liste | "Numaralı bir liste hâlinde düzenle; her madde 20 kelimenin altında olsun" |
| Markdown | "Başlık hiyerarşisine sahip Markdown biçiminde çıktı ver" |

### Kalıcı tercihler için belleği kullanın
Tekrar eden tercih ve gereksinimleriniz varsa, bunları uzun vadeli hatırlaması için Kimi'nin **Bellek** özelliğini kullanın:
- "React yığınını tercih eden bir frontend mühendisi olduğumu unutma"
- "Her zaman İngilizce ve Markdown biçiminde yanıt ver"
- "Teknik sorulara yanıt verirken kod örnekleri ekle"

<Callout type="tip">
Bu sayede kendinizi tekrarlamak zorunda kalmazsınız; Kimi bu tercihleri sonraki sohbetlerde otomatik olarak uygular.
</Callout>

## Sık yapılan hatalar
| Hata | Daha İyi Yaklaşım |
|---------|----------------|
| Birbiriyle ilgisiz birçok görevi tek bir mesaja tıkıştırmak | Bağlamı temiz tutmak için her bağımsız görev için yeni bir oturum başlatın |
| Aşırı belirsiz prompt'lar (ör. "bana bir şeyler yaz") | Ne yazılacağını, kim için, hangi üslupla ve ne uzunlukta olacağını belirtin |
| İlk denemede kusursuz çıktı beklemek | Önce bir taslak oluşturun, ardından takip sorularıyla onu geliştirin |
| Yapay zekâ çıktısını doğrulamamak | Tarihleri, verileri ve olgusal iddiaları her zaman teyit edin |

## Hızlı başlangıç şablonları
İşte hemen kullanabileceğiniz birkaç prompt şablonu; kopyalayın, özelleştirin ve başlayın:
**Yazma**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[hedef kitle] için [konu] hakkında yaklaşık [xxx] kelimelik bir [makale türü] yaz.\nGereksinimler: [üslup/biçim/odak alanları]",
    },
  ]}
/>

**Analiz**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[temel boyutlar] üzerine odaklanarak [konu] konusunu analiz et.\nÇıktı biçimi: [tablo/grafik/rapor]\nSonuçları ve önerileri dahil et.",
    },
  ]}
/>

**Çeviri**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Aşağıdaki metni [akademik/sohbet havasında/kurumsal] bir üslupla [hedef dil] diline çevir.\nAlana özgü terimler için özgün terimi parantez içinde belirt.",
    },
  ]}
/>

<Callout type="info">
Bu temel kavram ve teknikleri özümseyince Kimi ile çok daha verimli iş birliği yaparsınız; böylece yapay zekâ gerçek bir üretkenlik aracına dönüşür.
</Callout>
