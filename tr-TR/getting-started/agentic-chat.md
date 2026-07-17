---
title: "Kimi ile başlarken"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi ile başlarken - Kimi Yardım Merkezi"
  description="Kimi'nin üç modelini (K2.6, K3, K3 Swarm), yerleşik araçlarını ve çok modlu yeteneklerini öğrenerek sohbet ve görev yürütmeye hızlıca başlayın."
/>

# Kimi ile başlarken

Sohbet kutusuna sorularınızı yazabilir, dosya yükleyebilir veya ihtiyacınıza göre modeller arasında geçiş yapabilirsiniz.
[kimi.com](https://www.kimi.com) adresini açın ve bir mesaj göndermeyi deneyin — Kimi'ye merhaba deyin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Selam Kimi!",
    },
  ]}
/>

## Bir model seçin

Kimi, birden çok model sunar. Geçiş yapmak için giriş kutusunun üzerindeki model değiştirme düğmesine tıklayın.

| Model | Düşünme gücü | En uygun |
|-------|-------------------|----------|
| **K2.6** | Standart / Yüksek | Daha hızlı yanıtlarla hızlı sohbet ve soru-cevap |
| **K3** | Düşük / Yüksek / Maksimum | Sohbet ve Agent görevleri; genel olarak en yetenekli model |
| **K3 Swarm** | Düşük / Yüksek / Maksimum | Büyük ölçekli arama ve toplu işleme, tek seferde tamamlanır |

<Callout type="tip">
K2.6 kredi tüketmez; K3 ve K3 Swarm krediyle faturalandırılır. Ayrıntılar için [üyelik avantajlarına](https://www.kimi.com/help/membership/membership-overview) bakın.
</Callout>

### Kimi K3 hakkında

Kimi K3, şu anda Kimi'nin en güçlü modelidir; 2,8 trilyon parametreye sahiptir, Kimi Delta Attention (KDA) ve Attention Residuals üzerine inşa edilmiştir ve **yerel görüş** ile **1 milyon token'lık bağlam penceresi** sunar. Dünyanın ilk açık 3T sınıfı modeli olan K3; uzun vadeli kodlama, bilgi işi ve akıl yürütme genelinde en ileri düzey zeka için tasarlanmıştır ve kodlamada, uzun vadeli yürütmede ve çok çeşitli genel zeka görevlerinde sektör lideri performansa ulaşır.

### Yerleşik araçlar

Hiçbir yapılandırmaya gerek kalmadan hemen kullanılabilir:

| Araç | Açıklama |
|------|------------|
| **Web Search** | En güncel haberler ve bilgiler için gerçek zamanlı web araması |
| **Fetch Tool** | Belirli URL'lere doğrudan erişim (web sayfaları, belgeler, görseller ve diğer çevrimiçi kaynaklar) |
| **Image Search** | Hızlı görsel içerik keşfi için metinden görsele ve görselden görsele arama |
| **IPython** | Veri analizi ve görselleştirme için Python kodu çalıştırın |
| **Memory** | Kişisel tercihlerinizi ve alışkanlıklarınızı kaydeden akıllı hafıza |

## Görsel ve çok modlu yetenekler
Kimi K3; görselleri, videoları ve ofis belgelerini (PDF/Word/Excel) tam kapsamlı anlamayı destekler ve bunu **yerel çok modlu mimari** kullanarak yapar (sonradan eklenen OCR değil). Belge içeriğini doğrudan ayrıştırabilir ve orta-ileri düzey ofis görevlerini gerçekleştirebilir (örneğin Excel formülleri yazma veya PPT ana hatları/VBA kodu oluşturma gibi). Yerel görüş ve 1 milyon token'lık bağlam penceresiyle birleştiğinde, daha uzun ve daha karmaşık çok modlu materyalleri işleyebilir.
### Çok modlu girdi desteği
- **Görseller**: PNG, JPEG, WebP, GIF vb. (URL, Base64 veya yerel dosya yükleme yoluyla)
- **Video**: MP4 vb. (video_url veya görüntü kare dizileri + fps parametresi yoluyla)
- **Belgeler**: PDF, Word, Excel, TXT, Markdown vb.
- **Çevrimiçi kaynaklar**: URL'ler, makale bağlantıları
- **Görsel arama**: İlgili veya benzer görselleri aramak için bir görsel yükleyin
- **Video anlama**: Video anlamayı destekler — ekran kayıtlarını analiz edebilir ve etkileşim mantığını yeniden oluşturabilir
- **Görsel kodlama**: Frontend kodu oluşturmak için ekran görüntüleri veya ekran kayıtları yükleyin (HTML/Vue/React vb.); tasarım maketlerinden web sayfalarını otomatik olarak yeniden üretebilir

### Çıktı formatları
- Düz metin / metin ve görsel karışık: Standart sohbet yanıtları
- Markdown: Başlıklar, listeler, tablolar ve bağlantılarla zengin metin
- Kod blokları: HTML/Vue/React/Python/JSON/Mermaid vb. (dil tanımlayıcılarıyla)
- JSON yapılandırılmış veri: Zorunlu JSON modu çıktısı
- Mermaid diyagramları: Akış şemaları, sıralı diyagramlar, zihin haritaları vb.
- LaTeX matematik formülleri: Satır içi ve blok düzeyinde matematiksel ifadeler
- Çift modlu çıktı (Thinking): Hem `reasoning_content` (düşünme süreci) hem de `content` (nihai yanıt) döndürür
- Araç çağrısı formatı: Function Calling standart formatı (geliştiriciler için)

### Önemli notlar

1. **Dosya çıktısı**: K3, düzenlenebilir belgeleri (örneğin `.pptx`, `.docx`, `.xlsx`, `.pdf`) ve diğer karmaşık çıktıları uçtan uca üretebilir; K2.6 ise hızlı soru-cevaba odaklanır ve yalnızca metin çıktısı verir (örneğin PPT ana hatları, Word gövde metni veya kod).

<Callout type="tip">
İpucu: Görsel, ses veya video oluşturmak için "+" → Plugin'e tıklayın, ilgili özelliği seçin ve bunu **K3** ile kullanın. Karmaşık düzenlenebilir belgeler oluşturmak veya çok adımlı görevler yürütmek için tam deneyim adına **K3** ya da **K3 Swarm** seçmenizi öneririz.
</Callout>

## Oturumlar ve konuşma turları
"Yeni Sohbet"e tıkladığınızda, bunu Kimi ile uzun bir konuşma başlatmak olarak düşünün.
| Kavram | Benzetme | Teknik Tanım |
|---------|---------|---------------------|
| **Oturum** | Baştan sona tüm bir toplantı | Net bir başlangıç ve sonu olan eksiksiz bir sohbet süreci |
| **Tur** | Bir alışveriş (siz konuşursunuz, Kimi yanıt verir) | Sizin girdiniz ve Kimi'nin yanıtı bir gidiş-geliş oluşturur |

### Temel farklar
**Oturum**
- **Sürekli hafıza**: Kimi, mevcut sohbetteki tüm bağlamı hatırlar
- **Turlar arası bağlam**: Her yanıt, bir sonraki tur için bağlam olarak önceki konuşma içeriğine başvurur
- **Tanımlı sınırlar**: "Yeni Sohbet"e tıklamak = temiz bir başlangıç; önceki bağlam temizlenir
**Tur**
- **Kümülatif sayı**: Tur 1, Tur 2, … artımlı olarak eklenir
- **Sınırlı hafıza**: Çok fazla tur (örneğin 50+), özellikle uzun metin yazımı veya katı gereksinimleri olan görevlerde Kimi'nin önceki içeriği "unutmasına" neden olabilir
- **Bağlam uzunluğu kısıtlaması**: Token sayısıyla sınırlıdır; turlar biriktiğinde en eski içerik sıkıştırılabilir

<Callout type="tip">
**Uç durum**: Tek bir soru-cevap konuşmayı sonlandırıyorsa, o zaman 1 tur = 1 oturum demektir.
</Callout>

## Bu ayrım neden önemli
Tek bir oturum içinde gönderdiğiniz her yeni soru veya talimat, önceki tüm turlara başvurularak yanıtlanır. Turlar biriktikçe ve içerik uzadıkça yanıt kalitesi giderek düşebilir.

### Yaygın senaryolar
**Senaryo 1: Konu değiştirme**
- Yanlış: 30.000 kelimelik bir roman yazdığınız bir oturumda "vergilerimi hesaplamama yardım et" diye sormak
- Doğru: Vergi sorusu için yeni bir oturum başlatın — Kimi'nin roman karakterlerini vergi kavramlarıyla karıştırmasını önleyin
**Senaryo 2: Uzun belge işleme**
- Onlarca turdan sonra Kimi, başlangıçta belirlenen kuralları veya dosya özetlerini "unutabilir"
- Çözüm: Görevin ortasında proaktif olarak özetleyin ("Şimdiye kadarki planımızı özetle") veya yeni bir oturum başlatın
**Senaryo 3: Ürün sınırlarını anlamak**
- Bağlam uzunluğu sınırları token cinsinden ölçülür, ancak günlük dilde bunu "tur" olarak düşünün
- "Yeni bir sohbet başlat" uyarısı görürseniz, bu mevcut oturumda çok fazla tur olduğu anlamına gelir
## En iyi uygulamalar

<Callout type="tip">
**Her görev için yeni bir oturum başlatın**: Bağımsız görevler — makale yazma, araştırma, hata ayıklama — bağlam karışmasını önlemek için her biri kendi oturumuna sahip olmalıdır.
</Callout>

<Callout type="tip">
**Uzun oturumlarda periyodik olarak özetleyin**: 20+ turdan sonra, veri kaybını önlemek için Kimi'den önemli bilgileri özetlemesini proaktif olarak isteyin.
</Callout>

<Callout type="tip">
**Hassas bilgileri zamanında temizleyin**: Sohbet geçmişi saklanır; özel içerik işlendikten sonra tüm oturumu silin.
</Callout>
