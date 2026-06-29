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
