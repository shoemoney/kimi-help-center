---
title: "Hazırlık"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Kimi Code'u kullanmadan önce bilmeniz gereken temel konular: terminaller, PowerShell, CLI ve güvenlik noktaları."
---

<SeoMeta
  title="Kimi Code'u Kullanmadan Önce Hazırlık - Kimi Yardım Merkezi"
  description="Terminal, PowerShell ve CLI temellerini; geliştirme sırasında Kimi Code CLI'ı güvenli kullanmayı öğrenin."
/>

# Hazırlık

Kimi Code'u kullanmadan önce birkaç temel kavramı bilmeniz gerekir. Bunlar, Kimi Code'u daha sorunsuz kurup kullanmanıza yardımcı olur.

## Terminal nedir?

**Terminal**, metin komutları yazarak bilgisayarınızı yönettiğiniz bir penceredir.

Bunu “metin tabanlı dosya yöneticisi” gibi düşünebilirsiniz: terminalde klasör içeriklerini görüntülemek, dizin değiştirmek, dosya oluşturmak ve benzeri işlemler için fareyle simgelere tıklamak yerine `ls`, `cd`, `mkdir` gibi komutlar yazarsınız.

### Terminal nasıl açılır?

| İşletim sistemi | Nasıl açılır? |
|---------|---------|
| **macOS** | `Cmd + Space` tuşlarına basın, "Terminal" yazın ve Enter'a basın |
| **Windows** | `Win + R` tuşlarına basın, `powershell` veya `wt` yazın;<br>ya da Başlat menüsünde "PowerShell"/"Terminal" arayın |
| **Linux** | `Ctrl + Alt + T` tuşlarına basın veya uygulamalar menüsünde "Terminal"i bulun |

### İşletim sisteminizi nasıl kontrol edersiniz?

- **macOS**: Ekranın sol üst köşesindeki Apple simgesine tıklayın → "Bu Mac Hakkında"
- **Windows**: `Win + Pause/Break` tuşlarına basın veya "Bu Bilgisayar"a sağ tıklayın → "Özellikler"
- **Linux**: Terminalde `uname -a` veya `cat /etc/os-release` komutunu çalıştırın

## PowerShell nedir?

**PowerShell**, Windows'ta yaygın kullanılan bir terminal aracıdır. Standart Komut İstemi'nden (CMD) daha güçlüdür. Windows'ta Kimi Code CLI, PowerShell içinde kurulmalı ve kullanılmalıdır.

Windows'ta iki farklı “komut satırı” aracı vardır. Bunları karıştırmayın:

| Araç | Açıklama | Uygun mu? |
|-----|------|---------|
| **CMD (Komut İstemi)** | Windows'un en temel komut satırı aracı | ❌ Önerilmez |
| **PowerShell** | Daha güçlü ve modern bir komut satırı aracı | ✅ Önerilir |

> **İpucu**: Kimi Code CLI kurulum komutu PowerShell içinde çalıştırılmalıdır. CMD içinde düzgün çalışmayabilir.

## Çalışma dizini

Kimi Code CLI başladığında, o an bulunduğunuz klasörü **çalışma dizini** olarak kullanır. Yalnızca bu çalışma dizininin içindeki dosyaları okuyabilir ve değiştirebilir.

**Başlamadan önce terminalinizde geçerli yolu kontrol edin**:

- Terminal istemi genellikle geçerli dizini gösterir; örneğin `~/projects/my-app$`
- Tam yolu görmek için `pwd` (macOS/Linux) veya `cd` (Windows) yazın
- Hedef proje dizinine girmek için `cd <folder-name>` komutunu kullanın, ardından `kimi` çalıştırın

> **Örnek**: Projenizin `~/Documents/my-project` içinde olduğunu varsayalım. Şöyle başlatın:
> 1. Terminali açın
> 2. `cd ~/Documents/my-project` yazın
> 3. Başlatmak için `kimi` yazın

## Komutlar nasıl çalıştırılır?

Terminalde veya PowerShell'de komut çalıştırmak basittir:

1. **Komutu kopyalayın**: Komut metnini dokümantasyondan kopyalayın
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Terminale yapıştırın**: Terminal penceresinde sağ tıklayın veya yapıştırmak için `Cmd/Ctrl + V` tuşlarına basın
3. **Enter'a basın**: Komutu çalıştırmak için `Enter` tuşuna basın
4. **Bitmesini bekleyin**: Terminal, yürütme sürecini ve sonucu gösterir

> **Not**: Terminalde `Ctrl+C` genellikle **geçerli komutu keser**; metin kopyalamaz. Kopyalamak için `Cmd/Ctrl + Shift + C`, yapıştırmak için `Cmd/Ctrl + Shift + V` kullanın veya sağ tık menüsünden yararlanın.

> **İpucu**: Bir komut çalışırken parola girmeniz istenirse terminal hiçbir karakter göstermez. Bu normal bir güvenlik mekanizmasıdır. Parolayı yazıp Enter'a basmanız yeterlidir.

## CLI nedir?

**CLI**, **C**ommand-**L**ine **I**nterface ifadesinin kısaltmasıdır. Grafik arayüzde düğmelere tıklamak yerine metin komutları yazarak bir aracı kullanmak anlamına gelir.

Kimi Code CLI bir komut satırı aracıdır: Başlatmak için terminalde `kimi` yazarsınız; ardından metin komutlarıyla AI ile etkileşime geçerek kod okuma, dosya değiştirme, komut çalıştırma ve benzeri konularda yardım alırsınız.

## Ağ ortamı

Kimi Code'u kullanmak için Kimi sunucularına erişebilmeniz gerekir. Ağ ortamınızda aşağıdaki kısıtlamalardan biri varsa ayarlarınızı değiştirmeniz gerekebilir:

- **Şirket/okul ağı**: Bazı intranet ortamları harici API erişimini kısıtlayabilir. Proxy kullanıyorsanız yapılandırmada proxy adresini belirleyebilirsiniz.
- **VPN/proxy**: Genel bir proxy kullanıyorsanız, `api.kimi.com` veya `api.moonshot.cn` isteklerini kesmediğinden ya da engellemediğinden emin olun.
- **Güvenlik duvarı**: Sisteminizin veya yönlendiricinizin güvenlik duvarının terminal programından gelen ağ erişimini engelleyip engellemediğini kontrol edin.

## Güvenlik noktaları

Kimi Code CLI güçlü bir yapay zekâ ajanıdır. Şunları yapabilir:

- Bilgisayarınızdaki dosya içeriklerini **okuyabilir**
- Kodunuzu ve yapılandırma dosyalarınızı **değiştirebilir**
- Bağımlılık kurma veya test çalıştırma gibi Shell komutlarını **çalıştırabilir**

**Kullanırken lütfen şunları aklınızda bulundurun**:

- **Hassas dizinlerde başlatmayın**: Parola, anahtar veya kişisel özel dosyalar içeren dizinlerde Kimi Code CLI çalıştırmaktan kaçının.
- **İşlemleri dikkatle inceleyin**: Kimi Code, dosyaları değiştirmeden veya komut çalıştırmadan önce onayınızı ister. Alışkanlıkla “Kabul Et”e tıklamayın.
- **Devam etmeden önce anlayın**: Bir işlemin etkisinden emin değilseniz, devam edip etmemeye karar vermeden önce Kimi Code'dan tam olarak ne yapacağını açıklamasını isteyin.
- **Önemli kodları yedekleyin**: Kimi Code'u önemli bir projede kullanmadan önce, istediğiniz zaman geri dönebilmeniz için kodunuzu Git gibi bir sürüm kontrol sistemine kaydetmenizi öneririz.

> **Öneri**: İlk kez kullanırken Kimi Code CLI'ı bir test projesinde veya projenizin bir kopyasında deneyin. Nasıl çalıştığına alıştıktan sonra üretim projelerinizde kullanabilirsiniz.
