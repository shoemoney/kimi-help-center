---
title: "Kimi WebBridge Tanıtımı"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge Tanıtımı - Kimi Yardım Merkezi"
  description="Kimi WebBridge, yapay zekâ Agent'ları için tasarlanmış bir tarayıcı eklentisidir. Doğrudan Chrome veya Edge tarayıcınızda çalışarak mevcut oturum açma bilgilerinizi kullanır ve Agent'ların web sayfalarıyla tıpkı bir insan gibi etkileşime girmesini sağlar."
  ogType="article"
/>

# Kimi WebBridge Tanıtımı

Kimi WebBridge, yapay zekâ Agent'ları için tasarlanmış bir tarayıcı eklentisidir. Bulut tabanlı tarayıcı otomasyon çözümlerinin aksine, Kimi WebBridge doğrudan Chrome veya Edge tarayıcınızda çalışır; mevcut oturum açma bilgilerinizi otomatik olarak kullanarak Agent'ların web sayfalarıyla tıpkı bir insan gibi etkileşime girmesini sağlar.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridge eğitimi",
    },
  ]}
/>

<Callout type="tip">
En iyi tarayıcı otomasyon deneyimi için Kimi WebBridge'i birincil iş bilgisayarınıza kurmanızı öneririz.
</Callout>

<Callout type="info">
WebBridge, yerel bir köprü hizmeti ve bir tarayıcı eklentisi aracılığıyla çalışır. Tüm işlemler cihazınızda yerel olarak gerçekleşir; oturum durumları ve web sayfası içerikleri makinenizden asla dışarı çıkmaz.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Tanıtımı"
/>

## 1. Adım: Kimi WebBridge eklentisini indirin

Aşağıdaki yöntemlerle indirebilirsiniz:

**Yöntem 1: web mağazasından kurun**

- Chrome kullanıcıları için: [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc) adresine gidin
- Edge kullanıcıları için: [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg) adresine gidin

**Yöntem 2: el ile kurulum**

Web mağazasına erişemiyorsanız el ile kurulum yöntemini kullanabilirsiniz.

Ardından tarayıcınıza uygun adımları izleyin:

**Chrome:**

1. [Kimi WebBridge resmi web sitesinden](https://www.kimi.com/features/webbridge) eklenti paketini indirin.
2. İndirilen dosyayı çıkarın
3. Adres çubuğunda `chrome://extensions/` adresini açın
4. Sağ üst köşedeki "Geliştirici modu"nu etkinleştirin
5. "Paketlenmemiş öğe yükle"ye tıklayın
6. Dosya seçicide çıkardığınız WebBridge klasörünü seçin

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. [Kimi WebBridge resmi web sitesinden](https://www.kimi.com/features/webbridge) eklenti paketini indirin.
2. İndirilen dosyayı çıkarın
3. Adres çubuğunda `edge://extensions/` adresini açın
4. Sol alt köşedeki "Geliştirici modu"nu etkinleştirin
5. "Paketlenmemiş öğe yükle"ye tıklayın
6. Dosya seçicide çıkardığınız WebBridge klasörünü seçin

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Kurulumun ardından WebBridge'i tarayıcınızın eklentiler listesinde görmelisiniz. Daha kolay erişim için tarayıcı araç çubuğuna sabitlemenizi öneririz.

## 2. Adım: Kurulum yönteminizi seçin ve yapılandırmayı tamamlayın

### Yöntem 1: Kimi Work Masaüstü ile kullanma

1. Kimi Work'ü [resmi web sitesinden](https://www.kimi.com/zh-cn/products/kimi-work) indirin

2. Kurulumdan sonra Kimi Work içinde talimatlar gönderebilirsiniz; örneğin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi Webbridge'i kullan ve Xiaohongshu'yu aç, Kimi K2.6 lansmanıyla ilgili gönderileri ara",
    },
  ]}
/>

### Yöntem 2: Yerel Agent'larla eşleştirme

Claude Code, Codex, Cursor, Kimi Code, Hermers Claw ve daha fazlasını destekler.

1. WebBridge'i otomatik olarak kurmak için aşağıdaki komutu doğrudan Agent içinde gönderin. Agent, işletim sisteminize göre uygun kurulumu çalıştıracaktır.

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
      content: "Kimi WebBridge'i kullan, X.com'u aç ve Kimi K2.6 lansmanıyla ilgili gönderileri ara",
    },
  ]}
/>
