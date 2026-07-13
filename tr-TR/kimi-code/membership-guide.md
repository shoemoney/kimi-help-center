---
title: "Kimi Code üyelik rehberi"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code üyelik rehberi - Kimi Yardım Merkezi"
  description="Kimi Code, Kimi üyelik planı kapsamında geliştiricilere yönelik bir avantajdır ve yüksek performanslı AI kodlama yetenekleri sunar. Bu avantajdan..."
/>

# Kimi Code üyelik rehberi

<Callout type="info">
Kimi Code, Kimi üyelik planı kapsamında geliştiricilere yönelik bir avantajdır ve yüksek performanslı AI kodlama yetenekleri sunar. Bu avantajı Kimi Code CLI, Claude Code, Roo Code ve diğer desteklenen araçlar üzerinden kullanabilirsiniz.
</Callout>

## Öne çıkan avantajlar

| Avantaj | Açıklama |
|-----------|-------------|
| **Geniş Uyumluluk** | Kimi Code CLI, Claude Code, Roo Code ve diğer yaygın kodlama ajanlarıyla çalışır |
| **Standard / HighSpeed katmanları** | İki hızda aynı model — HighSpeed, Standard'ın yaklaşık 5–6 katı çıktı hızı sunar ve isteğe bağlı olarak geçiş yapılır |
| **Ultra Hızlı Yanıtlar** | Saniyede 100 token'a kadar üretim hızıyla kodlama verimliliğini önemli ölçüde artırır |
| **Yüksek Frekanslı Eşzamanlılık** | 5 saatlik pencere başına yaklaşık 300–1.200 istek (planınıza bağlı olarak), 30 eşzamanlı akışa kadar |

## Hızlı başlangıç

Durumunuza uygun yolu seçin:

- **Yeni Kullanıcılar**: [kimi.com/code](https://kimi.com/code) adresine gidin, oturum açın ve bir Coding Plan'a abone olun.
- **Mevcut Aboneler**: Konsola erişerek API Anahtarlarınızı yönetin ve Kimi Code'u kullanmaya başlayın.

## API anahtarı edinme

1. [Kimi Konsolu](https://kimi.com/code) üzerinde oturum açın.
2. **API Keys** sayfasına gidin.
3. **Create New API Key** seçeneğine tıklayın.
4. API Anahtarınızı kopyalayıp güvenli bir şekilde saklayın (yalnızca oluşturulduğu anda bir kez görüntülenir).

<Callout type="warning">
API Anahtarınızı başkalarıyla paylaşmayın veya herkese açık kod depolarına eklemeyin.
</Callout>

## Tek tıkla giriş

Kimi Code CLI'da, bir API Anahtarını elle kopyalamadan hızlı yetkilendirme için `/login` komutunu kullanabilirsiniz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Sistem cihaz yetkilendirmesini ve hesap bağlamasını otomatik olarak tamamlar; tüm işlem yalnızca birkaç saniye sürer.

## Cihaz yönetimi

- Her hesap birden fazla cihazda kullanılabilir.
- **30 gün boyunca etkin olmayan** cihaz yetkilendirmeleri otomatik olarak sona erer; yeniden yetkilendirmek için tekrar `/login` çalıştırmanız gerekir.
- Yetkilendirilmiş cihazları konsoldan görüntüleyip yönetebilirsiniz.

## Model nasıl değiştirilir

**HighSpeed modeli artık kullanılabilir.** Kimi Code iki katman sunar — **Standard** ve **HighSpeed** — aynı model üzerine kurulu, aynı kodlama yeteneğine sahip ve aynı Base URL, API Key ile üyelik avantajlarını paylaşır. HighSpeed, Standard'ın yaklaşık **5–6 katı çıktı hızı** sunar; anında yanıt ve hızlı yineleme istediğinizde tek tıkla geçiş daha akıcı bir kodlama deneyimi verir. Başlıca farklar:

| Öğe | Standard | HighSpeed |
| --- | --- | --- |
| Model ID | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Çıktı hızı | Temel | Standard'dan ~5–6 kat hızlı |
| Kredi tüketimi | Temel | Standard'ın ~3 katı |
| Kodlama yeteneği | Tam | Standard ile aynı |
| En uygun | Günlük kodlama görevleri | Anında yanıt, hızlı yineleme |
| Üyelik | Tüm Kimi Code üyelerine açık | [Allegretto](https://www.kimi.com/membership/pricing) veya üzeri plan gerektirir |

Hedef modele geçiş yolları:

- **Resmi Kimi Code CLI**: bir oturumda `/model` yazarak Standard ile HighSpeed arasında doğrudan geçiş yapın — yapılandırma değişikliği gerekmez.
- **VS Code için Kimi Code**: giriş çubuğundaki açılır menüden hedef modeli seçin; HighSpeed henüz görünmüyorsa VS Code'u yeniden başlatın veya uzantıyı yeniden yükleyin.
- **Üçüncü taraf araçlar**: aracın Model ID'sini hedef modele ayarlayın; diğer tüm ayarlar aynı kalır. Her araçta nerede bulacağınız için bkz. [Üçüncü taraf Coding Agent'larda kullanım](/kimi-code/third-party-agents).

<Callout type="info">
- **Kararlı Model ID'leri**: her iki ID de kararlı tanımlayıcılardır; arka uç, modeller geliştikçe eşlenen modeli günceller, istemci yapılandırması değişmeden.
- **Tam olarak yazın**: HighSpeed ID'si `kimi-for-coding-highspeed` olmalıdır. Yanlış yazılırsa veya başka bir değere ayarlanırsa istek sessizce standart `kimi-for-coding`'e geri döner — hata yok, ama hızlanma da yok.
- **Erişim yoksa 401**: planınızda HighSpeed erişimi yoksa çağrı `401` döndürür; Allegretto veya üzerine yükseltin.
</Callout>

<Callout type="tip">
**Görevin tamamı neden 5–6 kat hızlı hissettirmiyor?** «5–6×», **model çıktı hızını** ifade eder (metin/kodun ne kadar hızlı üretildiği). Bir kodlama görevinin toplam süresi «model çıktısı + araç çağrıları (dosya okuma/yazma, komut çalıştırma, web araması vb.) + betik yürütme»den oluşur: araç çağrıları ve betik yürütmenin ne kadar sürdüğü projenize ve komutlarınıza bağlıdır ve HighSpeed bu kısmı değiştirmez. Yani tümü 5–6 kat hızlı hissettirmiyorsa, bunun nedeni genellikle o turda araç çağrıları / betik yürütmenin çoğunluğu kaplamasıdır, model üretiminin yavaşlaması değil.
</Callout>
