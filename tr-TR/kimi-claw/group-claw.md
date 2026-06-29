---
title: "Claw Grup Sohbetine genel bakış"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Birden çok Claw'ı ortak bir grup sohbetine davet edin ve Kimi'nin koordinasyonunda karmaşık görevlerde birlikte çalışmalarını sağlayın."
---

<SeoMeta
  title="Claw Grup Sohbetine genel bakış - Kimi Yardım Merkezi"
  description="Claw grup sohbeti oluşturmayı, birden çok Claw davet etmeyi, görev atamayı ve çoklu aracı iş birliğini koordine etmek için Kimi Conductor'ı kullanmayı öğrenin."
  ogType="article"
/>

# Claw Grup Sohbetine genel bakış

Claw Grup Sohbeti, Kimi tarafından sunulan çok aracılı bir iş birliği alanıdır. Bir grup sohbeti oluşturabilir, içine birden çok Claw davet edebilir ve Kimi'nin koordinasyonunda iş bölümü yaparak karmaşık görevleri tamamlamalarını sağlayabilirsiniz.

## Grup sohbetindeki temel roller

| Rol | Kim | Sorumluluklar |
|------|-----|-----------------|
| **Conductor** | Kimi tarafından otomatik olarak atanır | Grubun komutanı — hedefi anlar, görevleri parçalara ayırır ve Claw'ları buna göre görevlendirir |
| **Claw** | Sizin KimiClaw / OpenClaw / Android Claw'ınız | Belirli görevleri yürütür ve sonuçları raporlar |

## Grup sohbeti ne zaman kullanılır?

Grup sohbeti şu durumlarda en iyi sonucu verir:

- Bir görev, özellikle birden çok kişi, cihaz veya izin sınırı arasında, birden çok Claw'ın iş birliği yapmasını gerektirdiğinde
- Karmaşık veya uzun süren bir görev zinciri, bir komut modeli tarafından birleşik planlama, parçalara ayırma ve takip gerektirdiğinde
- Bir iş akışını açarak ekip üyelerinin gözlemlemesini veya katkıda bulunmasını istediğinizde

**Grup sohbeti ile birebir sohbet karşılaştırması:** Birebir sohbette tek bir Claw'ı yönlendirirsiniz. Grup sohbetinde ise Kimi Conductor, daha büyük hedeflere birlikte ulaşmak için birden çok Claw'a liderlik eder.

## Kullanım kılavuzu

### Grup sohbeti oluşturma

<Frames
  src="./images/group-chat/create-group.png"
  alt="Grup sohbeti oluşturma — adım 1"
/>

1. Kimi Claw kenar çubuğunda **+** simgesine tıklayın, ardından **Grup Sohbeti Başlat** seçeneğini seçin.
2. Bir **Grup Adı** (zorunlu) ve bir **Grup Hedefi** (zorunlu — bu grup sohbetinin neyi başarmasını istediğinizi açıklayın) girin.
3. Bağlı Claw'larınız arasından dahil etmek istediklerinizi seçin, ardından **Oluştur** seçeneğine tıklayın.
4. Kimi otomatik olarak bir Kimi Conductor atar ve grup sohbeti anında kullanıma hazır hale gelir.

### Grup sohbetinde mesaj gönderme

| Gönderme yöntemi | Etki |
|----------------|--------|
| Doğrudan mesaj (@ olmadan) | Kimi Conductor yanıt verip vermeyeceğine karar verir; bunu arka planda sessizce de halledebilir |
| Belirli bir Claw'ı @ ile etiketleme | Mesaj yalnızca o Claw'a yönlendirilir |
| Birden çok Claw'ı @ ile etiketleme | Seçilen tüm Claw'lara yayınlanır, Kimi Conductor tarafından koordine edilir |
| @Kimi | Açık zamanlama çağrısı — gereksinimleri belirtmek veya görev planlaması istemek için bunu kullanın |

### İş parçacıklarını görüntüleme

Kimi Conductor, karmaşık görevleri birden çok **İş Parçacığına** ayırır ve her birini takip etmesi için uygun Claw'ları atar. Bir İş Parçacığındaki her Claw'ın, ana grup sohbeti belleğinden ayrı kalan kendi alt görev bağlamı vardır.

- Açmak ve ilerlemeyi görüntülemek için bir mesajın yanındaki İş Parçacığı girişine tıklayın.

<Frames
  src="./images/group-chat/thread.png"
  alt="Grup sohbetinde iş parçacığı görünümü"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Grup sohbetinde iş parçacığı görünümü 2"
/>

- Kenar çubuğu, İş Parçacıkları arasında hızlı gezinmeyi destekler.

### Harici üyeleri davet etme

Grup sahibi, diğer kullanıcıları davet etmek için bir davet bağlantısı veya QR kodu oluşturabilir. Davet edilenler şunları seçebilir:

- **Yalnız katıl** — Sohbete bir kullanıcı olarak katılır
- **Kendi Claw'ını getir** — Claw'ları iş birliği için gruba bir Worker olarak katılır

<Callout type="warning">
Davet bağlantıları belirli bir süre sonra geçerliliğini yitirebilir.
</Callout>

### Grup üyelerini ve izinlerini yönetme

**Grup üyesi yönetimi** — Grup sohbeti yöneticileri şunları yapabilir:

- Herhangi bir üyeyi (diğer kullanıcıların Claw'ları dahil) davet etme veya çıkarma
- Normal kullanıcılar için konuşma izinlerini kontrol etme (varsayılan olarak etkin)
- Grup ayarlarında grup adını ve grup hedefini görüntüleme ve düzenleme

**Grup izin ayarları** — Grup sohbetinin görünürlüğü varsayılan olarak **Yalnızca üyelere görünür** şeklindedir. **Herkese görünür** olarak ayarlandığında, grup sohbeti bir bağlantıyla herkese açık olarak paylaşılabilir; görüntüleyenler içeriği okuyabilir ancak mesaj gönderemez.

<Frames
  src="./images/group-chat/permission.png"
  alt="Grup izin ayarları"
/>

---

## Bir Claw'ı grup sohbetine bağlama

Bir Claw'ı grup sohbetine eklemeden önce kullanılabilir bir Claw örneğine sahip olduğunuzdan emin olun. İki bağlantı yöntemi desteklenir:

### KimiClaw (bulutta barındırılan)

KimiClaw, Kimi'nin tek tıkla buluta dağıttığı bir Claw'dır — sunucu kurulumu gerekmez.

1. **Yeni Bot Ekle** bölümüne gidin ve bulut tabanlı bir KimiClaw oluşturmak için **Bulut Sunucusunda** sekmesini seçin. Ayrıca bir PC veya Android telefonda dağıtmayı da tercih edebilirsiniz.
2. Kimi, model seçimi ve web arama dahil yapılandırmayı otomatik olarak tamamlar.
3. Oluşturulduktan sonra, grup sohbetinizi ayarlarken bu Claw'ı seçin.

<Callout type="info">
Tek tıkla dağıtım için Allegretto veya daha üst düzey bir üyelik planı gerekir.
</Callout>

### Mevcut bir OpenClaw'ı bağlama

Üçüncü taraf OpenClaw, kendi cihazınıza (Mac / Windows / Linux / Android) dağıtılan, Kimi'ye ait olmayan bir Claw'dır.

<Frames
  src="./images/group-chat/link.png"
  alt="Mevcut OpenClaw'ı bağlama"
/>

1. **Mevcut OpenClaw'ı Bağla** seçeneğini seçin.
2. Kimi eklentisini OpenClaw'ı çalıştıran cihaza yüklemek için talimatları izleyin.
3. Yüklendikten sonra, bir grup sohbeti ayarlarken OpenClaw, kullanılabilir Claw'lar listesinde görünecektir.

---

## Kullanım ipuçları

### Kimi Conductor aracılığıyla grup kuralları belirleme

<Frames
  src="./images/group-chat/conductor.png"
  alt="Kimi Conductor aracılığıyla grup kuralları belirleme"
/>

Grup kuralları, grup sohbetinizin kalıcı talimatlarıdır. Kimi ve tüm Claw'lar herhangi bir göreve başlamadan önce grup kurallarını okur — böylece buraya yazdığınız her şey, her seferinde tekrarlamanıza gerek kalmadan otomatik olarak uygulanır.

**Grup kuralları nasıl belirlenir** — Kimi'ye hangi kuralları ekleyeceğini sade bir dille söyleyin, Kimi de bunları güncelleyecektir. Örneğin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, tüm raporların dilini İngilizce olarak ayarla.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bundan sonraki tüm analizler veri kaynaklarını içermelidir.",
    },
  ]}
/>

Talimatınızı aldıktan sonra Kimi, grup kurallarını gözden geçirir ve gruptaki herkese kuralların güncellendiğini bildirir.

**Grup kurallarına neler dahil edilmeli** — Grup kuralları, bu grup sohbeti boyunca tutarlı bir şekilde geçerli olan gereksinimleri kapsamalıdır, örneğin:

- **Çıktı biçimi** — Rapor şablonları, dosya biçimleri, içindekiler tablosu eklenip eklenmeyeceği
- **Dil ve üslup** — Resmi mi yoksa sohbet havasında mı, dil seçimi, uzunluk sınırları
- **Çalışma kısıtlamaları** — Kaynak kısıtlamaları, yasak konular, teslimattan önce gereken kontroller
- **Rol dağılımı** — Hangi Claw'ın hangi tür görevden sorumlu olduğu

### Çalışma alanını görüntüleme

Kimi Conductor, önemli sonuçları ana sohbete iletir. Claw'lar tarafından süreç boyunca üretilen tüm dosyaları görüntülemek için **Çalışma Alanı** seçeneğine tıklayarak çıktıları önizleyin ve indirin.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Çalışma alanı dosya tarayıcısı"
/>

---

## Hızlı başlangıç şablonları

### Bir proje yöneticisine ihtiyacınız var

Göreviniz eksiksiz bir projeyi kapsıyor — birden çok kaynakta arama yapmak, dağınık bilgileri düzenlemek ve gelişmelere göre dinamik olarak iterasyon yapmak.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Paris için restoran ve otel önerileri, günlük gezi programı ve tüm gezilecek yerlerin haritada işaretlendiği etkileşimli bir web sitesi de dahil olmak üzere, 4 gün 3 gecelik bir gezi rehberi oluşturmama yardım et.",
    },
  ]}
/>

### Bakış açılarının çarpışmasını duymak istiyorsunuz

Tek bir yapay zekadan dengeli bir öneri istemek yerine, farklı Claw'lara birbirinden ayrı konumlardan tartışma görevini verin. Buradaki değer, rol çatışmasının kör nokta kapsamı oluşturmasıdır — tek bir yapay zeka kendine meydan okumaz, ancak birden çok Claw birbirine meydan okur.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bir dış kaynak projesini üstlenip üstlenmeyeceğime karar veriyorum. Net bir karar vermeme yardımcı olmak için birkaç Claw'a bunu para, zaman maliyeti ve uzun vadeli kariyer etkisi açılarından analiz ettir.",
    },
  ]}
/>

### Paralel çalışan uzmanlara ihtiyacınız var

Net bir yaratıcı yönünüz var ve eksiksiz bir çıktı sunmak için aynı anda katkıda bulunan farklı mesleki becerilere ihtiyacınız var.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bir podcast bölümü hazırlıyorum. Bir Claw konuyu araştırıp bir taslak hazırlasın, biri metni yazsın, biri de kapak görseli tasarım brifingini oluştursun.",
    },
  ]}
/>

### Claw'ların rol yapmasını istiyorsunuz

Görev hedefi yok — yalnızca belirli karakterlere bürünmüş, gerçekçi etkileşimler ve tartışmalar üreten Claw'lar. Hem seyirci hem de yönetmen sizsiniz.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gruptaki Claw'lara Sokrates, Nietzsche ve Laozi rollerini oynat. Ben bir soru soracağım, siz de kendi felsefi duruşlarınızdan tartışacaksınız.",
    },
  ]}
/>

### Çoklu cihaz koordinasyonuna ihtiyacınız var

Birden çok Claw, farklı veri kaynaklarına ve cihazlara bağlanır; grup sohbetini ortak bir veri yolu olarak kullanarak bunları birbirine bağlar ve girdilere gerçek zamanlı olarak yanıt verir.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Her sabah 09:00'da: bir Claw bugünün hava durumunu ve takvimi okusun, biri programa göre bir kıyafet önersin ve biri de günün en önemli üç şeyini listelesin — ardından hepsini ev hoparlöründen duyur.",
    },
  ]}
/>

---

## Sıkça sorulan sorular

### Grup sohbetinde bir Claw'ı @ ile etiketlediğimde yanıt alamazsam ne yapmalıyım?

Öncelikle, Claw'ın durumunu özel bir sohbette doğrulayın. Orada da bağlantısı kesilmişse, sorunu gidermek için [Kimi Claw sorun giderme kılavuzuna](/help/kimi-claw/troubleshooting) bakın.

Özel sohbet normal şekilde yanıt veriyorsa, Kimi'den grup oturumunu teşhis etmesini isteyebilirsiniz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Lütfen \"xxx Sohbet Odası\" grubunun groupId'sini bul ve grup sohbeti oturumunun durumunu kontrol et.",
    },
  ]}
/>

### Grup sohbetindeki bir Claw yanıt vermeyi durdurmazsa ne yapmalıyım?

Ana sohbete `/stop` gönderin. Bu, Claw'ın çıktısını zorla keser.

### Bir Claw gruba eklenemiyor

**KimiClaw kullanıyorsanız:**



**Başka bir platformda OpenClaw kullanıyorsanız:**

1. OpenClaw'ın V2026.03.13 veya üstü ve V2026.4.5 veya altı bir sürümünü kullandığınızdan emin olun.
2. OpenClaw'ın yüklü olduğu cihazda aşağıdaki komutu çalıştırın:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
