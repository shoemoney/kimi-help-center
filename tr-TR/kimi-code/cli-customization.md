---
title: "Özelleştirme ve referans"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Özelleştirme \u0026 referans - Kimi Yardım Merkezi"
  description="Kimi Code CLI, yapay zekânın davranışını ve iş akışını ihtiyaçlarınıza göre uyarlamanıza olanak tanıyan kapsamlı özelleştirme seçenekleri sunar."
/>

# Özelleştirme ve referans

Kimi Code CLI, yapay zekânın davranışını ve iş akışını ihtiyaçlarınıza göre uyarlamanıza olanak tanıyan kapsamlı özelleştirme seçenekleri sunar.

## Yapılandırma dosyası

Kimi Code CLI, genel yapılandırma dosyası olarak `~/.kimi/config.toml` kullanır ve hem TOML hem de JSON biçimlerini destekler. Şunları yapılandırabilirsiniz:

- **API Sağlayıcıları ve Modeller**: Farklı model sağlayıcıları, API uç noktaları ve anahtarları tanımlayın.
- **Varsayılan Model**: Kullanılacak varsayılan modeli belirtin.
- **Çalışma Zamanı Parametreleri**: Zaman aşımı, concurrency, çıktı biçimi ve diğer çalışma zamanı ayarlarını düzenleyin.

> Yapılandırma dosyasını düzenlemek üzere hızlıca açmak için `/config` komutunu kullanın.

## AGENTS.md proje yapılandırması

Yapay zekâya proje düzeyinde bağlam sağlamak için proje kök dizininize bir `AGENTS.md` dosyası yerleştirin:

- **Proje Arka Planı**: Projenin işlevselliğini, mimarisini ve teknoloji yığınını açıklayın.
- **Derleme Adımları**: Bağımlılıkların nasıl kurulacağı, projenin nasıl derleneceği ve testlerin nasıl çalıştırılacağı.
- **Kod Kuralları**: Adlandırma kuralları, dizin yapısı kuralları, kod stili tercihleri.
- **Özel Notlar**: Güvenlik kısıtlamaları, performans gereksinimleri ve diğer önemli hususlar.

Yapay zekânın projenizi otomatik olarak taramasını ve ilk `AGENTS.md` dosyasını oluşturmasını sağlamak için `/init` komutunu kullanın. Projeye özgü bilgileri eklemek için dosyayı manuel olarak da düzenleyebilirsiniz. `AGENTS.md` dosyaları herhangi bir alt dizine yerleştirilebilir; yapay zekâ ilgili yapılandırmaları otomatik olarak yükler.

## Özel sistem istemi

Yapay zekânın sistem istemini çeşitli şekillerde özelleştirebilirsiniz:

- **Genel sistem istemi**: `~/.kimi/AGENTS.md` içine yazın; tüm projeler için geçerli olur.
- **Proje düzeyinde sistem istemi**: Proje kök dizinindeki `AGENTS.md` içine yazın; yalnızca mevcut proje için geçerli olur.
- **Başlatma parametresi**: Başlatma sırasında belirtmek için `--system-prompt` bayrağını kullanın.

Proje düzeyindeki yapılandırma, genel yapılandırmayı geçersiz kılar ve başlatma parametresi en yüksek önceliğe sahiptir.

## MCP entegrasyonu

Kimi Code CLI, Model Context Protocol'ü (MCP) destekleyerek harici araçlara ve veri kaynaklarına bağlanmanıza ve yapay zekânın yeteneklerini genişletmenize olanak tanır:

- **MCP Sunucu Yapılandırması**: Yapay zekânın harici araçları çağırabilmesi için yapılandırma dosyasına MCP sunucu adreslerini ekleyin.
- **Yerleşik MCP Desteği**: Sık kullanılan bazı MCP araçları yerleşik olarak gelir ve ek yapılandırma gerektirmez.
- **Özel MCP Sunucuları**: Alana özgü yetenekler sağlamak için kendi MCP sunucularınızı geliştirebilirsiniz.

MCP yapılandırması `~/.kimi/config.toml` dosyasına ya da proje düzeyindeki yapılandırma dosyalarına yerleştirilebilir.

## Ortam değişkenleri

Kimi Code CLI, ortam değişkenleri aracılığıyla yapılandırmayı destekler; bu, CI/CD ardışık düzenleri ve betikler için kullanışlıdır:

| Ortam Değişkeni | Açıklama |
| --- | --- |
| `KIMI_API_KEY` | API anahtarı |
| `KIMI_BASE_URL` | Özel API uç noktası |
| `KIMI_MODEL` | Varsayılan model adı |
| `KIMI_MAX_TOKENS` | Maksimum çıktı token sayısı |

Ortam değişkenleri, yapılandırma dosyasındaki ayarlara göre önceliklidir.

## Daha fazla referans

- **Eğik Çizgi Komut Referansı**: Mevcut tüm komutları görüntülemek için `/help` kullanın.
- **CLI Parametre Referansı**: Tüm başlatma parametrelerini görüntülemek için `kimi --help` çalıştırın.
- **Resmi Dokümantasyon**: En güncel ve eksiksiz dokümantasyon için [Kimi Code Docs](https://www.kimi.com/code/docs/en/) adresini ziyaret edin.
