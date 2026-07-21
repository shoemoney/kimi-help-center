---
title: "İletişim ve Geri Bildirim"
slug: "contact-and-feedback"
order: 5
extract_headings: false
preview: true
preview_content: "Kimi Code için iletişim ve geri bildirim kanalları."
---

<SeoMeta
  title="İletişim ve Geri Bildirim - Kimi Code Yardım Merkezi"
  description="Kimi Code için CLI içinden geri bildirim, GitHub Issues ve e-posta dâhil geri bildirimin nasıl gönderileceğini öğrenin."
/>

# İletişim ve Geri Bildirim

## Geri bildirim kanalları

Kimi Code kullanırken herhangi bir sorunla karşılaşırsanız veya önerileriniz varsa aşağıdaki kanallardan geri bildirim paylaşabilirsiniz.

### Seçenek 1: Geri bildirimi doğrudan CLI içinde gönderin

Kimi Code CLI etkileşimli modunda, geri bildirim göndermek için `/feedback` komutunu girin. Sistem, sorunu daha doğru anlatmanıza yardımcı olmak için mevcut ortamınıza ilişkin bilgileri otomatik olarak toplar.

### Seçenek 2: GitHub Issues

[Kimi CLI GitHub Issues](https://github.com/MoonshotAI/kimi-cli/issues) sayfasını ziyaret edin ve benzer bir sorunun daha önce açılıp açılmadığını görmek için arama yapın. Yoksa yeni bir Issue oluşturup karşılaştığınız durumu ayrıntılı biçimde açıklayabilirsiniz.

### Seçenek 3: E-posta ile geri bildirim

Sorunları bildirmek için Kimi Code ekibine [code@moonshot.ai](mailto:code@moonshot.ai) adresinden e-posta da gönderebilirsiniz. Lütfen aşağıdaki bilgileri olabildiğince eksiksiz ekleyin:

- **Sorun açıklaması**: Karşılaştığınız sorunu veya istediğiniz özelliği açıkça anlatın
- **Yeniden üretme adımları**: Sorunun adım adım nasıl tetikleneceği
- **Ortam bilgileri**: İşletim sistemi ve Kimi Code CLI sürümü (kontrol etmek için `kimi --version` komutunu çalıştırın)
- **Hata günlükleri**: Bir hata mesajı varsa lütfen tamamını yapıştırın

### Seçenek 4: Feishu grubuna katılın
Feishu grubuna katılmak için QR kodunu tarayın

<Frames
  src="./images/contact-and-feedback/contact-and-feedback-01.png"
  alt="Feishu grubu QR kodu"
/>

## Geri bildirim göndermeden önce kontrol edilecekler

Geri bildirim göndermeden önce şunları kontrol etmenizi öneririz:

- Kimi Code CLI’nin en son sürümüne güncelleme yapıp yapmadığınız (kontrol etmek için `kimi --version` komutunu çalıştırın)
- Ağ bağlantınızın çalışıp çalışmadığı ve `api.kimi.com` adresine erişip erişemediğiniz
- API anahtarınızın geçerli olup olmadığı ve süresinin dolup dolmadığı
- Çalışma dizininin doğru olup olmadığı ve Kimi’nin ilgili dosyalara erişim iznine sahip olup olmadığı

## Diğer iletişim kanalları

| Geri bildirim türü | Kanal |
|---------|------|
| Hesap itirazları / şikâyetler ve ihbarlar | [support@moonshot.cn](mailto:support@moonshot.cn) |
| Basın talepleri | [pr@kimi.com](mailto:pr@kimi.com) |
