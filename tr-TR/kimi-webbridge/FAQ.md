---
title: "SSS"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge SSS - Kimi Yardım Merkezi"
  description="Kimi WebBridge'in kurulumu, bağlantısı ve çeşitli tarayıcılar ile Yerel Agent'larla kullanımı hakkında sıkça sorulan sorular."
  ogType="article"
/>

# SSS

## Kurulum ve yapılandırma

### Uzantıyı kurarken "Bu web sitesinden uygulama eklenemiyor" hatasını mı görüyorsunuz?

Lütfen kurulumu resmi web mağazasından (Chrome Web Mağazası veya Edge Eklentileri) yaptığınızdan emin olun. Web mağazasına erişemiyorsanız resmi web sitesinde sunulan manuel kurulum yöntemini kullanın.

### Bağlantı komutunu çalıştırdıktan sonra hiçbir şey olmuyor mu?

Lütfen internet bağlantınızı kontrol edin. Sorun devam ederse Kimi Claw Desktop'ı yeniden başlatıp komutu tekrar çalıştırmayı deneyin.

### Birden fazla bilgisayarda kullanabilir miyim?

Evet, ancak her bilgisayarın ayrı ayrı kurulup yapılandırılması gerekir.

### Kimi Claw Desktop'ı bulamıyorum?

Kimi Claw Desktop, yerel bilgisayarınıza dağıtılmış bir Kimi Claw'dur. Kimi Desktop'ı açın, sol kenar çubuğunda Kimi Claw'ı bulun, yeni bir Claw oluşturun ve "Bilgisayarıma dağıt" seçeneğini seçin.

## Bağlantı ve kullanım

### Uzantı durumu "Bağlantı kesildi" mi gösteriyor?

Lütfen Kimi WebBridge tarayıcı uzantısının başarıyla kurulduğundan emin olun, ardından kurulum yönteminize göre adımları izleyin:

- **Kimi Desktop**: Kimi Desktop'ı yeniden başlatıp tekrar deneyin

- **Diğer Yerel Agent'lar**: Aşağıdaki komutu Agent'ınızda yeniden gönderin, ardından çalıştıktan sonra Agent'ı yeniden başlatın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Windows'ta WebBridge kurulurken "Kurulum başarısız oldu" hatası alınıyor

Kimi WebBridge, Windows işletim sistemini destekler ve kurulum komutu Linux ortamında çalıştırılabilir:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Kurulumdan sonra WebBridge bir Chrome uyumluluk uyarısı gösteriyor. Bu ne anlama geliyor?

WebBridge sayfaları normal şekilde açabiliyor ancak `snapshot`, `evaluate`, `screenshot` veya `click` gibi işlemler sürekli başarısız oluyorsa, daha yaygın neden **diğer tarayıcı uzantılarıyla bir çakışmadır**.

Bu durum özellikle veri kazıma araçlarında, web sitesi yardımcı uzantılarında, ekran kaydı uzantılarında ve yapay zeka asistanı uzantılarında sık görülür.

Sorunu gidermek için aşağıdaki adımları öneririz:

1. Tarayıcınızın uzantı yönetim sayfasını açın
2. Diğer uzantıları geçici olarak devre dışı bırakın
3. Yalnızca Kimi WebBridge'i etkin tutun
4. Tarayıcıyı yeniden başlatıp tekrar deneyin
5. WebBridge normal şekilde çalışıyorsa, çakışan uzantıyı belirlemek için diğer uzantıları tek tek yeniden etkinleştirin


### WebBridge oturum açma bilgilerimi sızdırır mı?

Hayır. Tüm işlemler cihazınızda yerel olarak gerçekleşir; oturum açma durumları ve web sayfası içeriği makinenizden asla ayrılmaz. Agent yalnızca yetkilendirdiğiniz işlem sonuçlarına erişebilir.

### İşlemler neden başarısız oluyor?

Karmaşık sayfa yapıları veya dinamik yükleme işlemlerin başarısız olmasına neden olabilir. Yönergelerinizi sadeleştirmeyi deneyin veya işlemi yürütmeden önce sayfa durumunu doğrulamak için Agent'tan önce bir ekran görüntüsü almasını isteyin.

### Hangi tarayıcılar destekleniyor?

Şu anda Chrome ve Edge destekleniyor. En iyi deneyim için en güncel sürümü kullanmanızı öneririz.

## Diğer agent'larla çalışma

### Hangi diğer Agent'lar destekleniyor?

WebBridge; Claude Code, Codex, Cursor, Kimi Code, Hermers Claw ve daha fazlası dahil tüm Yerel Agent'ları destekler.

### Yapılandırma farklı Agent'lar için aynı mı?

Kurulum komutu hepsi için aynıdır; kurmak için tek bir curl komutu çalıştırmanız yeterlidir. Ayrıntılar için her Agent'ın Skill yapılandırmasına bakın.
