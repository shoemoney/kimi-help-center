---
title: "Projeler"
slug: "project"
order: 4
extract_headings: false
preview: true
preview_content: "Proje, uzun soluklu bir görevin referans dosyalarını, sohbetlerini ve proje talimatlarını bir arada tutan kalıcı bir çalışma alanıdır; böylece her yeni sohbette arka planı yeniden anlatmanız gerekmez."
---

<SeoMeta
  title="Kimi Projesi Nedir? Nasıl Oluşturulur ve Kullanılır? - Kimi Yardım Merkezi"
  description="Kimi Projects hakkında bilgi edinin: referans dosyalarını, sohbetleri ve proje talimatlarını bir araya getiren kalıcı bir çalışma alanı — belge serileri yazmak, sürekli araştırma yürütmek veya bir kod tabanını korumak için idealdir. Proje oluşturma ve yönetme, proje talimatları, proje dosyaları ve plan kotalarını kapsar."
/>

# Projeler

Proje, kalıcı bir çalışma alanıdır. Uzun soluklu bir göreve ait referans dosyalarını, sohbetleri ve proje talimatlarını tek bir projede bir arada tutabilirsiniz; proje içinde başlattığınız her sohbet bu bağlamı otomatik olarak taşır — böylece aynı dosyaları tekrar yüklemeniz veya proje arka planını her seferinde yeniden anlatmanız gerekmez.

**Ne zaman proje kullanmalı**: Çalışma zaman içinde devam edecekse, birden fazla çıktı üretecekse veya aynı dosya grubuna dayanıyorsa proje oluşturun — örneğin bir belge serisi yazmak, sürekli araştırma yürütmek ya da bir kod tabanını korumak için. Görev tek seferlikse ve paylaşılan bağlama ihtiyaç duymuyorsa normal bir sohbet kullanmanız yeterlidir.

<Callout type="info">
Kimi Work masaüstü uygulamasında da "Projeler" bulunur; bunlar burada açıklanan Kimi (Sohbet) projelerinden ayrıdır — ikisi bağlantılı değildir ve veri paylaşmaz.
</Callout>

## Proje oluşturma ve yönetme

**Giriş noktaları**:
- kenar çubuğundaki "Projeler" bölümünün sağındaki "+" düğmesi;
- ana sayfadaki Proje seçicinin üst kısmındaki "+ Yeni proje" öğesi.

**Oluşturma**: bir proje adı girin (zorunlu, 1–50 karakter) ve isterseniz proje talimatlarını ekleyin; proje ana sayfasını açmak için "Oluştur"a tıklayın.

**Düzenleme / Silme**:
- kenar çubuğunda bir proje adının üzerine gelin veya sağ tıklayarak "Başlığı düzenle" ya da "Sabitle" seçeneğini kullanın;
- bir projeyi silmek için onay gerekir. **Silme işlemi tamamlandıktan sonra projenin sohbetleri, dosyaları ve proje talimatları kalıcı olarak kaldırılır ve geri getirilemez** — lütfen dikkatli ilerleyin.

**Kenar çubuğu**: "Projeler" bölümü Kimi Claw girişinin altında ve sohbet geçmişinin üstünde yer alır; projelerinizi en son oluşturulana göre listeler. Bir projeyi genişleterek sohbetlerini görebilirsiniz.

## Proje ana sayfası

Proje ana sayfası üç sütunlu bir düzen kullanır:
- **Sol**: standart kenar çubuğu;
- **Orta**: sohbet başlatma alanı ve projenin sohbet listesi. Giriş kutusunda "'project name' içinde sohbet başlat…" yazar; buradan gönderdiğiniz mesaj, otomatik olarak mevcut projeye ait bir sohbet oluşturur;
- **Sağ Panel**: iki blok — Talimatlar ve Dosyalar (daraltılabilir).

## Proje sohbetinde neler yapabilirsiniz?

Bir projedeki sohbetler, normal Kimi sohbetleriyle aynı yeteneklere sahiptir; ayrıca projenin bağlamını otomatik olarak taşır. Şunları yapabilirsiniz:
- **proje dosyalarını** (model tarafından ihtiyaç halinde okunur) ve **proje talimatlarını** kullanmak;
- **eklentileri, Skills ve Hedef** özelliğini kullanmak;
- **model seçmek**.

Her ayrı çıktı için ayrı bir sohbet başlatın; böylece mesajlar ve sonuçlar odağını korur. Proje, bu ilişkili sohbetleri bir arada tutar.

## Proje talimatları

- Proje talimatları, projeye özel özel talimatlardır (düz metin) ve Kimi, proje içindeki her sohbette bunları izler;
- Örneğin: "Kıdemli bir ürün yöneticisisin. Çince yanıt ver ve çıktıyı Markdown biçiminde üret.";
- Kaydettikten sonra bir sonraki mesajınızdan veya yeni bir sohbetten itibaren geçerli olur.

## Proje dosyaları

- Referans dosyalarını, projenin tüm sohbetlerinde kullanılmak üzere projeye yükleyin;
- Desteklenen biçimler Kimi Agent yüklemeleriyle aynıdır: PDF, DOCX, XLSX, CSV, TXT, MD, yaygın kod dosyaları ve yaygın görsel biçimleri;
- **Her dosya en fazla 100 MB olabilir ve en çok 50 dosya yükleyebilirsiniz**;
- Proje dosyaları **model tarafından ihtiyaç halinde okunur** — model, her turda tüm dosyaların tam metnini önceden yüklemek yerine, sorunuza göre hangi dosyalara ihtiyaç duyduğuna karar verir;
- Dosyalar bloğunun alt kısmında bir kapasite çubuğu bulunur; sınıra yaklaştığında veya sınıra ulaştığında dosya silmeniz ya da planınızı yükseltmeniz istenir.

## Bir projede bağlam nasıl çalışır?

Bir projede sohbet başlattığınızda modele aktarılan bağlam şunları içerir: **sistem istemi + genel ana bellek + proje talimatları + ihtiyaç halinde okunan proje dosyaları**.

Normal (proje dışı) sohbetlerde proje talimatları veya dosyaları aktarılmaz; bir projenin talimatları ve dosyaları yalnızca o proje içinde geçerli olur, diğer projeleri ya da normal sohbetleri etkilemez.

## Kotalar ve planlar

Proje sayısı ve proje depolama alanı üyelik planınıza göre artar:

| Plan | Ücretsiz | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Projeler | 2 | 20 | 20 | 100 | 100 |
| Proje depolama alanı | 500MB | 20GB | 20GB | 50GB | 50GB |

Diğer limitler de (proje başına sohbet sayısı ve proje talimatları için karakter limiti gibi) planınıza göre ölçeklenir; en güncel değerler için [üyelik planları sayfasına](/membership/membership-pricing) bakın.

## SSS

### Proje dosyaları bir sohbetin her turunda tamamen okunur mu?
Hayır. Proje dosyaları ihtiyaç halinde okunur — model, sorunuza göre hangi dosyalara ihtiyaç duyduğuna karar verir ve her turda tüm dosyaları önceden yüklemek yerine yalnızca gerekli olanları okur.

### Bir projede kaç dosya tutulabilir?
Her dosya en fazla 100 MB olabilir ve en çok 50 dosya yükleyebilirsiniz. Toplam proje depolama alanı planınıza göre ölçeklenir; [üyelik planları sayfasına](/membership/membership-pricing) bakın.

### Bir projeyi sildiğimde ne olur?
Bir projeyi silmek, sohbetlerini, dosyalarını ve proje talimatlarını **kalıcı olarak kaldırır**; bu işlem geri alınamaz. Lütfen silmeden önce onaylayın.

### Proje sayısı veya depolama limitine ulaşırsam ne yapmalıyım?
Alan açmak için artık ihtiyaç duymadığınız projeleri veya dosyaları silin ya da daha yüksek quota için planınızı yükseltin. Ayrıntılar için [üyelik planları sayfasına](/membership/membership-pricing) bakın.
