---
title: "Kimi’ye başlarken"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi’ye başlarken - Kimi Help Center"
  description="Kimi’nin üç modelini (K2.6, K3, K3 Swarm), yerleşik araçlarını ve çok modlu yeteneklerini öğrenerek sohbet ve görev yürütmeye hızlıca başlayın."
/>

# Kimi’ye başlarken

Sohbet kutusuna sorular yazabilir, dosya yükleyebilir veya ihtiyacınıza göre modeller arasında geçiş yapabilirsiniz.
[kimi.com](https://www.kimi.com) adresini açın ve bir mesaj göndermeyi deneyin — Kimi’ye merhaba deyin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Merhaba, Kimi!",
    },
  ]}
/>

## Model seçin

Kimi birden fazla model sunar. Geçiş yapmak için giriş kutusunun üzerindeki model değiştirme düğmesine tıklayın.

| Model | Düşünme gücü | En uygun kullanım |
|-------|-------------------|----------|
| **K2.6** | Standart / Yüksek | Daha hızlı yanıtlarla hızlı sohbet ve soru-cevap |
| **K3** | Düşük / Yüksek / Maksimum | Sohbet ve Agent görevleri; genel olarak en yetenekli model |
| **K3 Swarm** | Düşük / Yüksek / Maksimum | Büyük ölçekli arama ve toplu işlem; tek seferde tamamlanır |

<Callout type="tip">
K2.6, Chat içinde credit tüketmez (Kimi Work içinde K2.6 Agent olarak kullanıldığında yine üyelik credit’leri tüketir); K3 ve K3 Swarm credit ile ücretlendirilir. Ayrıntılar için [üyelik avantajlarına](https://www.kimi.com/help/membership/membership-overview) bakın.
</Callout>

### Kimi K3 hakkında

Kimi K3, şu anda Kimi’nin en güçlü modelidir. 2,8 trilyon parametreye sahiptir; Kimi Delta Attention (KDA) ve Attention Residuals üzerine inşa edilmiştir, **yerel görme** ve **1 milyon token’lık bağlam penceresi** sunar. Dünyanın ilk açık 3T sınıfı modeli olan K3; uzun soluklu kodlama, bilgi odaklı işler ve akıl yürütme alanlarında öncü zekâ için tasarlanmıştır. Kodlama, uzun vadeli yürütme ve çok çeşitli genel zekâ görevlerinde lider düzeyde performansa ulaşır.

### Yerleşik araçlar

Hiçbir yapılandırma gerekmeden kullanıma hazırdır:

| Araç | Açıklama |
|------|------------|
| **Web Search** | En güncel haberler ve bilgiler için gerçek zamanlı web araması |
| **Fetch Tool** | Belirli URL’lere doğrudan erişim (web sayfaları, belgeler, görseller ve diğer çevrimiçi kaynaklar) |
| **Image Search** | Görsel içerikleri hızla keşfetmek için metinden görsele ve görselden görsele arama |
| **IPython** | Veri analizi ve görselleştirme için Python kodu çalıştırma |
| **Memory** | Kişisel tercihlerinizi ve alışkanlıklarınızı kaydeden akıllı bellek |

## Görsel ve çok modlu yetenekler
Kimi K3; görselleri, videoları ve ofis belgelerini (PDF/Word/Excel) her senaryoda anlayabilir. Bunu sonradan eklenmiş OCR ile değil, **yerel çok modlu mimari** ile yapar. Belge içeriğini doğrudan ayrıştırabilir ve orta-ileri düzey ofis görevlerini yerine getirebilir (örneğin Excel formülleri yazma veya PPT taslakları/VBA kodu üretme). Yerel görme ve 1 milyon token’lık bağlam penceresiyle birlikte, daha uzun ve karmaşık çok modlu materyalleri işleyebilir.
### Çok modlu giriş desteği
- **Görseller**: PNG, JPEG, WebP, GIF vb. (URL, Base64 veya yerel dosya yükleme yoluyla)
- **Video**: MP4 vb. (video_url veya görsel kare dizileri + fps parametresi yoluyla)
- **Belgeler**: PDF, Word, Excel, TXT, Markdown vb.
- **Çevrimiçi kaynaklar**: URL’ler, makale bağlantıları
- **Görsel arama**: İlgili veya benzer görselleri aramak için bir görsel yükleyin
- **Video anlama**: Video anlama desteği sunar — ekran kayıtlarını analiz edip etkileşim mantığını yeniden oluşturabilir
- **Görsel kodlama**: Frontend kodu (HTML/Vue/React vb.) üretmek için ekran görüntüleri veya ekran kayıtları yükleyin; tasarım maketlerinden web sayfalarını otomatik olarak yeniden oluşturabilir

### Çıktı biçimleri
- Düz metin / metin-görsel karışık: Standart sohbet yanıtları
- Markdown: Başlıklar, listeler, tablolar ve bağlantılar içeren zengin metin
- Kod blokları: HTML/Vue/React/Python/JSON/Mermaid vb. (dil tanımlayıcılarıyla)
- JSON yapılandırılmış veri: Zorunlu JSON modu çıktısı
- Mermaid diyagramları: Akış şemaları, sıralama diyagramları, zihin haritaları vb.
- LaTeX matematik formülleri: Satır içi ve blok düzeyinde matematiksel ifadeler
- Çift modlu çıktı (Thinking): Hem `reasoning_content` (düşünme süreci) hem de `content` (nihai yanıt) döndürür
- Araç çağrısı biçimi: Function Calling standart biçimi (geliştiriciler için)

### Önemli notlar

1. **Dosya çıktısı**: K3, uçtan uca düzenlenebilir belgeler (`.pptx`, `.docx`, `.xlsx`, `.pdf` gibi) ve diğer karmaşık çıktılar üretebilir; K2.6 ise hızlı soru-cevaba odaklanır ve yalnızca metin çıktısı verir (PPT taslakları, Word gövde metni veya kod gibi).

<Callout type="tip">
İpucu: Görsel, ses veya video üretmek için "+" → Eklenti’ye tıklayın, ilgili özelliği seçin ve **K3** ile kullanın. Karmaşık düzenlenebilir belgeler oluşturmak veya çok adımlı görevler çalıştırmak için eksiksiz deneyim adına **K3** ya da **K3 Swarm** seçmenizi öneririz.
</Callout>

## Oturumlar ve konuşma turları
"Yeni Sohbet"e tıkladığınızda bunu Kimi ile uzun bir konuşmaya başlamak gibi düşünebilirsiniz.
| Kavram | Benzetme | Teknik Tanım |
|---------|---------|---------------------|
| **Oturum** | Baştan sona tüm toplantı | Net bir başlangıcı ve sonu olan eksiksiz sohbet süreci |
| **Tur** | Tek bir karşılıklı konuşma (siz konuşursunuz, Kimi yanıtlar) | Girdiniz ve Kimi’nin yanıtı bir gidiş-dönüş oluşturur |

### Temel farklar
**Oturum**
- **Sürekli bellek**: Kimi, mevcut sohbet içindeki tüm bağlamı hatırlar
- **Turlar arası bağlam**: Her yanıt, sonraki tur için önceki konuşma içeriğini bağlam olarak kullanır
- **Belirli sınırlar**: "Yeni Sohbet"e tıklamak = temiz başlangıç; önceki bağlam silinir
**Tur**
- **Kümülatif sayı**: Tur 1, Tur 2, … kademeli olarak eklenir
- **Sınırlı bellek**: Çok fazla tur (ör. 50+) Kimi’nin önceki içerikleri “unutmasına” yol açabilir; bu durum özellikle uzun metin yazımında veya katı gereksinimleri olan görevlerde görülür
- **Bağlam uzunluğu kısıtı**: token sayısıyla sınırlıdır; turlar biriktikçe en eski içerikler sıkıştırılabilir

<Callout type="tip">
**Sınır durum**: Tek bir soru-cevap konuşmayı sonlandırıyorsa 1 tur = 1 oturumdur.
</Callout>

## Bu ayrım neden önemli?
Tek bir oturum içinde gönderdiğiniz her yeni soru veya talimat, önceki tüm turlar dikkate alınarak yanıtlanır. Turlar biriktikçe ve içerik uzadıkça yanıt kalitesi zamanla düşebilir.

### Yaygın senaryolar
**Senaryo 1: Konu değiştirme**
- Yanlış: 30.000 kelimelik bir roman yazdığınız oturumda "vergilerimi hesaplamama yardım et" diye sormak
- Doğru: Vergi sorusu için yeni bir oturum başlatın — Kimi’nin roman karakterleriyle vergi kavramlarını karıştırmasını önleyin
**Senaryo 2: Uzun belge işleme**
- Onlarca turdan sonra Kimi, başta belirlenen kuralları veya dosya özetlerini “unutabilir”
- Çözüm: Görev ortasında proaktif olarak özet isteyin ("Şimdiye kadarki planımızı özetle") veya yeni bir oturum başlatın
**Senaryo 3: Ürün sınırlarını anlama**
- Bağlam uzunluğu sınırları token ile ölçülür; ancak gündelik kullanımda bunu “turlar” olarak düşünebilirsiniz
- "Yeni bir sohbet başlat" istemini görüyorsanız mevcut oturumda çok fazla tur var demektir
## En iyi uygulamalar

<Callout type="tip">
**Her görev için yeni bir oturum başlatın**: Makale yazma, araştırma, hata ayıklama gibi bağımsız görevlerin her biri kendi oturumunda yürütülmelidir; böylece bağlamlar birbirine karışmaz.
</Callout>

<Callout type="tip">
**Uzun oturumlarda düzenli özet alın**: 20’den fazla turdan sonra veri kaybını önlemek için Kimi’den önemli bilgileri özetlemesini proaktif olarak isteyin.
</Callout>

<Callout type="tip">
**Hassas bilgileri vakit kaybetmeden temizleyin**: Sohbet geçmişi saklanır; özel içerikleri işledikten sonra tüm oturumu silin.
</Callout>
