---
title: "Kimi Tarayıcı Uzantısı Tanıtımı"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Tarayıcı Uzantısı Tanıtımı - Kimi Yardım Merkezi"
  description="Kimi Tarayıcı Uzantısı (eski adıyla Kimi WebBridge), sayfaları açabilen, düğmelere tıklayabilen, formları doldurabilen ve bilgi çıkarabilen, AI Agent'lar için bir tarayıcı eklentisidir."
  ogType="article"
/>

# Kimi Tarayıcı Uzantısı Tanıtımı

Kimi Tarayıcı Uzantısı (eski adıyla Kimi WebBridge), yapay zekâ Agent'ları için tasarlanmış bir tarayıcı eklentisidir. Sayfaları açabilir, düğmelere tıklayabilir, formları doldurabilir ve bilgi çıkarabilir; böylece Agent, sıkıcı web işlemlerini tıpkı bir insan gibi otomatik olarak tamamlar. Ayrıca sık kullandığınız web sayfalarını CLI'lere ayırabilir ve kaydedilen web işlemlerini Agent'ın istediği zaman yeniden kullanabileceği Skill'lere dönüştürebilirsiniz.

## İki kullanım şekli

Kimi Tarayıcı Uzantısı iki kullanım şekli sunar:

- **Tarayıcı yan çubuğu**: Araç çubuğundaki Kimi simgesine tıklayarak yan çubuğu açın, ardından Kimi hesabınızla oturum açıp doğrudan sohbet edin ve Kimi'nin geçerli sayfada sizin için işlem yapmasını sağlayın.
- **Yerel Agent ile uzaktan kontrol**: Kimi Work veya Claude Code gibi yapay zekâ Agent'larının uzantıyı uzaktan çalıştırmasını sağlayarak web görevlerini otomatik hale getirin.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi Tarayıcı Uzantısı eğitimi",
    },
  ]}
/>

## İndirme ve kurulum

### 1. Adım: Kimi Tarayıcı Uzantısı'nı indirin

Aşağıdaki yöntemlerle indirebilirsiniz:

**Yöntem 1: web mağazasından kurun**

- Chrome kullanıcıları için: [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc) adresine gidin
- Edge kullanıcıları için: [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg) adresine gidin

**Yöntem 2: el ile kurulum**

Web mağazasına erişemiyorsanız el ile kurulum yöntemini kullanabilirsiniz:

1. [Kimi Tarayıcı Uzantısı resmi web sitesinden](https://www.kimi.com/features/webbridge) eklenti paketini indirin ve çıkarın
2. Adres çubuğuna uzantı yönetim sayfasının adresini girin (Chrome: `chrome://extensions/`; Edge: `edge://extensions/`)
3. "Geliştirici modu"nu etkinleştirin (Chrome'da sayfanın sağ üstünde, Edge'de sayfanın sol altında)
4. "Paketlenmemiş öğe yükle"ye tıklayın
5. Dosya seçicide çıkardığınız WebBridge klasörünü seçin

<Frames
  src="./images/installation_chrome_en.png"
  alt="Chrome'da gösterilen el ile kurulum adımları; Edge arayüzü büyük ölçüde aynıdır"
/>

Kurulumun ardından Kimi Tarayıcı Uzantısı'nı tarayıcınızın eklentiler listesinde görmelisiniz. Daha kolay erişim için tarayıcı araç çubuğuna sabitlemenizi öneririz.

### 2. Adım: Kurulum yönteminizi seçin ve yapılandırmayı tamamlayın

**Yöntem 1: Kimi Work Masaüstü ile kullanma**

1. Kimi Work'ü [resmi web sitesinden](https://www.kimi.com/products/kimi-work) indirin

2. İndirdiğiniz Kimi Work Masaüstü uygulamasını açın ve Work mode'a geçin. Eklenti Merkezi'nde Kimi Tarayıcı Uzantısı'nı bulup yükleyin. Ardından aşağıdaki talimatı tarayıcı yan çubuğunda veya Kimi Work'te göndermeyi deneyin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi Tarayıcı Uzantısı'nı kullan ve Xiaohongshu'yu aç, Kimi K3 lansmanıyla ilgili gönderileri ara",
    },
  ]}
/>

**Yöntem 2: Yerel Agent'larla eşleştirme**

Claude Code, Codex, Cursor, Kimi Code, Hermes Claw ve daha fazlasını destekler.

1. Kimi Tarayıcı Uzantısı'nı otomatik olarak kurmak için aşağıdaki komutu doğrudan Agent içinde gönderin. Agent, işletim sisteminize göre uygun kurulumu çalıştıracaktır.

macOS kullanıcısıysanız aşağıdaki komutu kullanın:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Windows kullanıcısıysanız aşağıdaki komutu kullanın:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Kullanmaya başlayın

Eklenti bağlandıktan sonra talimatlar gönderebilirsiniz.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi Tarayıcı Uzantısı'nı kullan, X.com'u aç ve Kimi K3 lansmanıyla ilgili gönderileri ara",
    },
  ]}
/>
