---
title: "Başlarken"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code CLI kurulumu, oturum açma ve başlangıç kılavuzu."
---

<SeoMeta
  title="Kimi Code CLI Kurulumu ve Hızlı Başlangıç - Kimi Yardım Merkezi"
  description="Kimi Code CLI ile çalışmaya başlayın: kurulum komutları, terminal ve tarayıcı kullanımı, ilk oturum açma ve /init ile AGENTS.md oluşturma."
/>

# Kimi Code CLI ile başlarken

Kimi Code CLI, terminalde çalışan ve yazılım geliştirme görevleriniz ile günlük terminal işlemlerinizde size yardımcı olan bir yapay zekâ aracısıdır — kod okur ve düzenler, shell komutları çalıştırır, dosya arar, web sayfaları getirir, çalışırken aldığı geri bildirime göre sonraki adımlarını özerk biçimde planlar ve ayarlar.

Şu senaryolara uygundur:

- **Kod yazma ve düzenleme**: yeni özellikler ekleme, hataları giderme, yeniden düzenlemeleri tamamlama
- **Bir projeyi anlama**: tanımadığınız bir kod tabanını keşfetme, mimari ve uygulamaya dair soruları yanıtlama
- **Görevleri otomatikleştirme**: dosyaları toplu işleme, derleme ve testleri çalıştırma, birden fazla betiği birbirine bağlama

CLI, TypeScript ile yazılmış olup npm üzerinden dağıtılır ve Node.js üzerinde çalışır.

## Başlamadan önce

- **İşletim sistemi**: macOS, Linux veya Windows (PowerShell aracılığıyla)
- **Kimi hesabı**: etkin bir Kimi üyelik aboneliği ya da çağrılabilir bir API anahtarı

<Callout type="tip">
Kimi Code CLI, tamamen etkileşimli bir TUI uygulamasıdır. En iyi görsel deneyim için bunu, gerçek renk (true-color) ve ligatür desteği olan bir terminalde çalıştırın; örneğin [Kitty](https://sw.kovidgoyal.net/kitty/) veya [Ghostty](https://ghostty.org/).
</Callout>

## Kurulum

İki kurulum seçeneği mevcuttur: resmi kurulum betiği (önerilir, önceden kurulmuş Node.js gerektirmez) ve genel (global) bir npm kurulumu.

### Kurulum betiği (önerilir)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Kimi Code CLI kuruluyor"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Betik, en son sürümü otomatik olarak indirir, sağlama toplamını (checksum) doğrular ve `kimi` çalıştırılabilir dosyasını `PATH`'inize yerleştirir.

<Callout type="tip">
Windows'ta ilk çalıştırmadan önce [Git for Windows](https://gitforwindows.org/) kurun. Kimi Code CLI, shell ortamı olarak birlikte gelen Git Bash'i kullanır; Git Bash özel bir konuma kurulmuşsa `KIMI_SHELL_PATH` değişkenini `bash.exe`'nin mutlak yoluna ayarlayın.
</Callout>

### npm ile kurulum

Sisteminizde zaten Node.js 22.19.0 veya üzeri kuruluysa, doğrudan npm üzerinden kurabilirsiniz:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Veya pnpm ile:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Kurulumu doğrulama

Kurulumdan sonra çalıştırılabilir dosyanın hazır olduğunu doğrulayın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
`kimi` komutu bulunamazsa, terminalinizi yeniden açmayı veya `source ~/.bashrc` (ya da `~/.zshrc`) komutunu çalıştırmayı deneyin.
</Callout>

> macOS Gatekeeper nedeniyle `kimi`'nin ilk çalıştırılması belirgin biçimde daha uzun sürebilir. Terminal uygulamanızı **Sistem Ayarları → Gizlilik ve Güvenlik → Geliştirici Araçları** bölümüne ekleyerek sonraki açılışları hızlandırabilirsiniz.

## Yükseltme ve kaldırma

**Yükseltme**: `kimi upgrade` komutunu çalıştırın — CLI, en son sürümü denetler ve güncelleme seçeneklerini sunar. Mevcut kurulum kaynağınıza göre yükseltmek için `Install update now` seçeneğini seçin. Ayrıca doğrudan paket yöneticisi üzerinden de yükseltebilirsiniz:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Kaldırma**: betik aracılığıyla kurduysanız, `kimi` çalıştırılabilir dosyasını silin. npm aracılığıyla kurduysanız:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## İlk çalıştırma

### Etkileşimli terminal

Proje dizininize geçin ve etkileşimli arayüzü başlatmak için `kimi` komutunu çalıştırın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Tek bir talimat

Etkileşimli arayüze girmeden tek bir talimat çalıştırmak için `-p` kullanın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Oturumu sürdürme

Önceki oturumu sürdürmek için `-C` ekleyin:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### İlk oturum açma

İlk çalıştırmada bir API kaynağı yapılandırmanız gerekir. Etkileşimli arayüzde oturum açma akışını başlatmak için `/login` yazın:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login`, iki seçeneği destekleyen bir platform seçici açar:

- **Kimi Code (OAuth)** — cihaz kodu akışı; bağlantıyı herhangi bir cihazda açın, oturum açın ve yetkilendirmek için kodu girin
- **Kimi Platform API anahtarı** — `platform.kimi.com` veya `platform.kimi.ai` üzerinden bir API anahtarı girin

Oturumu kapatmak için, mevcut kimlik bilgilerini temizleyen `/logout` komutunu girin.

<Callout type="tip">
Anthropic, OpenAI, Google veya diğer sağlayıcıları bağlamak istiyorsanız, API anahtarını yapılandırmak için doğrudan `~/.kimi-code/config.toml` dosyasını düzenleyin. Tüm yapılandırma seçeneklerinin eksiksiz referansı için ortam değişkenleri ve yapılandırma geçersiz kılma belgelerine bakın.
</Callout>

## AGENTS.md oluşturma

Proje dizininizde `/init` komutunu çalıştırın. Kimi Code CLI, proje yapısını otomatik olarak tarar ve bir `AGENTS.md` dosyası oluşturur:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md`, yapay zekânın projenizi daha doğru anlamasına yardımcı olmak için ona proje arka plan bilgisi, derleme adımları, kod kuralları ve diğer bağlamı sağlamak için kullanılır.

## İlk konuşmanız

Oturum açtıktan sonra, bir görevi doğal dille tarif edin. İyi bir başlangıç noktası, Kimi Code CLI'nin projeye aşina olmasını sağlamaktır:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bu projenin dizin yapısına bir göz at ve her dizinin ne işe yaradığını kısaca açıkla.",
    },
  ]}
/>

Kimi Code CLI, yanıt vermeden önce ilgili içeriğe göz atmak için otomatik olarak dosya okuma, arama ve diğer araçları çağırır. Yalnızca okuma işlemleri varsayılan olarak onay gerektirmeden otomatik olarak yürütülür. Dosyaları değiştiren veya shell komutları çalıştıran işlemler için, devam etmeden önce sizden onay ister.

Daha somut bir görevi doğrudan da tarif edebilirsiniz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/utils içine herhangi bir dizeyi kebab-case biçimine dönüştüren bir fonksiyon ekle ve bunun için bir birim testi ekle.",
    },
  ]}
/>

Kimi Code CLI adımları planlar, kodu değiştirir, testleri çalıştırır ve her adımda ne yaptığını size bildirir.

<Callout type="tip">
Ne yapacağınızdan emin değil misiniz? Yerleşik komut ve klavye kısayolu panelini açmak için istediğiniz zaman `/help` yazın. Göz atmak için `↑`/`↓`, kapatmak için `Esc` tuşunu kullanın. Çıkmak için `/exit` yazın, `Ctrl-C`'ye iki kez basın ya da giriş kutusu boşken `Ctrl-D`'ye basın.
</Callout>

## Sık kullanılan komutlar ve klavye kısayolları

### Oturum komutları

| Komut | Açıklama |
| --- | --- |
| `/new` | Mevcut bağlamı temizleyerek yeni bir oturum başlatır |
| `/sessions` | Oturum geçmişine göz atın ve sürdürmek için birini seçin |
| `/model` | Mevcut modeli değiştirir |
| `/compact` | Token boşaltmak için bağlamı el ile sıkıştırır |
| `/fork` | Mevcut oturumu çatallar; geçmişi korur ancak bağımsız olarak devam eder |

### En çok kullanılan klavye kısayolları

| Kısayol | Açıklama |
| --- | --- |
| `Esc` | Akış halindeki çıktıyı keser / bir açılır pencereyi kapatır |
| `Ctrl-C` | Çıktıyı keser; boştayken iki kez basıldığında çıkar |
| `Shift-Tab` | Plan modunu açıp kapatır |
| `Ctrl-S` | Mevcut yanıtın bitmesini beklemeden akış ortasında bir mesaj ekler |
| `Ctrl-O` | Araç çıktısını daraltır / genişletir |

Tam liste için `/help` yazın veya [Etkileşim ve giriş](/kimi-code/cli-interaction) sayfasını ziyaret edin.

## Verilerin saklandığı yer

Kimi Code CLI, yerel verilerini varsayılan olarak `~/.kimi-code/` altında saklar — yapılandırma dosyaları, oturum kayıtları, günlükler ve güncelleme önbelleği. Bunu başka bir yere taşımak için, `KIMI_CODE_HOME` ortam değişkeni aracılığıyla yeni bir yola yönlendirin. Eksiksiz dizin düzeni için ortam değişkenleri belgelerine bakın.

## SSS

**API Anahtarımı girdim ancak kimlik doğrulamanın başarısız olduğunu söylüyor.**

Öncelikle, Anahtarınızın ve Base URL'nizin aynı platforma ait olduğunu doğrulayın. `api.kimi.com` ve `api.moonshot.cn`, birbirinden tamamen bağımsız iki hesap sistemidir ve API Anahtarları birbirinin yerine kullanılamaz:

| Platform | Base URL | Faturalandırma | Anahtar oluşturma |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI uyumlu: `https://api.kimi.com/coding/v1`<br> Anthropic uyumlu: `https://api.kimi.com/coding/` | Kimi üyelik aboneliği (kredi dahildir) | [Kimi Code Konsolu](https://www.kimi.com/code/console) |
| **Kimi Açık Platformu** | `https://api.moonshot.cn/v1` | Kullandıkça öde | [Kimi Açık Platformu](https://platform.kimi.com) |

**Kurulumdan sonra `kimi` komutu bulunamıyor.**

Kurulum betiği `kimi`'yi PATH'inize ekler, ancak bunun etkili olması için terminali yeniden başlatmanız veya `source ~/.bashrc` (ya da `source ~/.zshrc`) komutunu çalıştırmanız gerekir. Hâlâ bulunamıyorsa, `~/.local/bin` dizininin PATH'inizde olup olmadığını kontrol edin.

**`/login` çalıştırdıktan sonra tarayıcı açılmadı.**

Uzak bir sunucuda veya başsız (headless) bir ortamda `/login` bir URL görüntüler. Yetkilendirmeyi tamamlamak için bunu el ile tarayıcınıza kopyalayın.

Herhangi bir sorununuz veya öneriniz varsa, [GitHub Issues](https://github.com/MoonshotAI/kimi-cli/issues) üzerinden geri bildirim gönderin.

## Sonraki adımlar

- [Etkileşim ve giriş](/kimi-code/cli-interaction) — giriş kutusu işlemleri, onay akışı, Plan modu ve YOLO modu açıklanıyor
- [Oturumlar ve bağlam](/kimi-code/cli-sessions) — oturumları sürdürme, bağlamı sıkıştırma, oturumları dışa aktarma
- [Sık karşılaşılan kullanım senaryoları](/kimi-code/cli-use-cases) — tipik görevler için istem örnekleri
