---
title: "Kimi Eklentileri Nedir?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Harici araçları Kimi'ye bağlayarak görevleri tamamlamak için uygulama ve hizmetleri kullanmasını sağlayın. Bir eklenti yüklendikten sonra Kimi; finansal veriler, ofis yazılımları ve tasarım araçları gibi üçüncü taraf yeteneklerini çağırarak işlerinizi halletmenize yardımcı olabilir."
---

<SeoMeta
  title="Kimi Eklentileri Nedir? Nasıl Yüklenir ve Kullanılır - Kimi Yardım Merkezi"
  description="Kimi eklentileri hakkında bilgi edinin: finansal veriler, ofis yazılımları ve tasarım araçları gibi harici hizmetleri Kimi'ye bağlayın ve görevleri tamamlarken doğrudan çağırın. Eklentilerin nerede çalıştığı, yükleme ve yetkilendirme, çağırma, eklenti kategorileri ve credit kullanımı konularını kapsar."
/>

# Kimi Eklentileri Nedir?

Eklentiler, harici araçları Kimi'ye bağlayarak görevleri tamamlamak için uygulama ve hizmetleri kullanabilmesini sağlar. Bir eklenti yüklediğinizde Kimi, bir görevi tamamlarken ilgili üçüncü taraf yeteneğini doğrudan çağırabilir — örneğin finansal verileri sorgulamak, ofis yazılımını çalıştırmak veya tasarım araçlarını kullanmak. Belirli bir eklentinin kullanılmasını açıkça isteyebilirsiniz; Kimi de uygun olduğunda otomatik olarak bir eklenti çağırır.

## Kimi eklentisi nedir?

Kimi eklentisi, [Kimi Code eklenti tanımını](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) izler ve aşağıdaki bileşenlerden bir veya daha fazlasını içerebilir:

| Bileşen | Amaç |
| --- | --- |
| Skills | Görevleri tamamlamak için gereken bilgiyi, adımları ve kullanım kılavuzunu sağlar |
| MCP | Harici yazılımları, hizmetleri, veritabanlarını veya API'leri bağlar |
| Agents | Karmaşık görevleri özelleşmiş alt aracılara devreder |
| Hooks | Belirli olaylar gerçekleştiğinde önceden tanımlanmış eylemleri otomatik olarak çalıştırır |
| Commands | Net, yeniden kullanılabilir komut tabanlı giriş noktaları sağlar |
| System Prompt | Eklenti etkinken ana Agent'a sistem talimatları ekler |

Kimi web deneyimi şu anda eklentilerde MCP ve Skills'i desteklemektedir. Kimi Work ve Kimi Code, yukarıdaki tam eklenti tanımını izler ve daha eksiksiz eklenti bileşeni kombinasyonlarını destekler.

**Örnekler:**

- **Notion Eklentisi** = Notion MCP + kullanım kılavuzu skill'i
- **Finansal araştırma Eklentisi** = birden fazla finans MCP'si + birden fazla analiz skill'i + özel bir Agent

## Eklentileri nerede kullanabilirsiniz

Modeli **K3** veya **K3 Swarm** olarak değiştirdiğinizde ve **Deep Research, Websites ve PPT** senaryolarında eklentileri kullanabilirsiniz.

Eklentileri **Kimi Work masaüstü uygulamasında** da kullanabilirsiniz; masaüstündeki yerleşik eklenti listesi için bkz. [Kimi Work Eklenti Merkezi](/kimi-work/plugin-center).

<Callout type="info">
Eklentiler henüz Kimi Claw veya Kimi Plus sohbetlerinde desteklenmemektedir.
</Callout>

## Eklenti yükleme

- **Giriş noktaları**: giriş kutusundaki **+** simgesini kullanın veya "/" yazın; mobilde giriş kutusundaki **+** simgesini veya "/" kullanın.
- Eklenti pazarında arama yapın veya göz atın, bir eklentinin ayrıntılarını açın ve yükleyin.
- Bazı eklentiler **OAuth yetkilendirmesi** gerektirir (üçüncü taraf oturum açma sayfasına yönlendirilirsiniz; yetkilendirdikten sonra kullanabilirsiniz); bazı eklentiler **önceden yüklenmiştir** ve manuel kurulum gerektirmez.
- **Yalnızca kurumsal kullanıcılara açık eklentiler**: kurumsal olmayan kullanıcılar bunları görebilir, ancak "Install" düğmesi gri görünür.
- Oturumunuz kapalıyken eklenti yükleyemez veya kullanamazsınız.

## Eklenti kullanma

- Yükledikten sonra giriş kutusuna "/" yazın veya **+** → Plugins seçeneğine tıklayın, ardından çağırmak istediğiniz eklentiyi seçin; **birden fazla eklentiyi aynı anda çağırabilirsiniz**.
- Ayrıca yalnızca neye ihtiyacınız olduğunu da anlatabilirsiniz (örneğin, "bu şirketi Tianyancha'da arat"); Kimi otomatik olarak uygun eklentiyi seçer.
- Kimi bir eklentinin araçlarını çağırdığında, yanıtında "xx eklentisi kullanılıyor" ifadesi görüntülenir.

## Eklenti kategorileri ve listesi

Eklenti pazarı aşağıdaki kategorilere ayrılmıştır. Gerçekte gördüğünüz eklentiler **bölgeye (yurt içi / yurt dışı)** ve **kullandığınız uygulamaya** göre değişir; bazı eklentiler birden fazla kategoride görüntülenir.

- **Finans**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Üretkenlik**: Notion, Baidu Netdisk
- **Geliştirme**: GitHub, Supabase, Neon, Cloudflare
- **Yaratıcılık**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Genel**: Vivify

## Veriler ve izinler

- Bir eklentiyi seçtiğinizde veya kullanılmasını açıkça istediğinizde Kimi, o eklentinin sağladığı araçlara öncelik verir ve yanıtını bu araçların döndürdüğü sonuçlara dayanarak oluşturur; bir eklentiyi bağladıktan sonra Kimi, yetkilendirdiğiniz kapsam dahilinde ilgili içeriklere erişir.
- Bir eklenti üçüncü bir tarafça sağlanıyorsa, veri işleme kuralları o şirket tarafından bağımsız olarak belirlenir ve veriler, ilgili şirketin hizmet şartları ile gizlilik politikasına tabidir — yetkilendirmeden önce bunları incelemenizi öneririz.
- **Bir eklentiyi istediğiniz zaman kaldırabilir veya yetkilendirmeyi iptal edebilirsiniz.** Kaldırdıktan sonra ilgili OAuth yetkilendirmesi iptal edilir; eklentiyi yeniden kullanmak için yeniden yüklemeniz ve yeniden yetkilendirmeniz gerekir.

## SSS

### Eklentiler üyelik credit'imi tüketir mi?
Bazıları tüketir. Kimi bir görevi tamamlamak için bir eklentinin araçlarını veya hizmetlerini çağırdığında, gerçek kullanıma göre credit tüketilir; çağrı maliyeti olmayan eklentiler ek ücret oluşturmaz.

### Birden fazla eklentiyi aynı anda kullanabilir miyim?
Evet. "/" veya **+** üzerinden birden fazla eklentiyi aynı anda çağırabilirsiniz.

### Neden belirli bir eklentiyi göremiyorum?
Kullanılabilir eklentiler bölgeye (yurt içi / yurt dışı) ve kullandığınız uygulamaya göre değişir; ayrıca bazı eklentiler yalnızca bireysel veya kurumsal kullanıcılara açıktır.

### ChatGPT, Claude veya diğer platformlardaki eklentileri kullanabilir miyim?
Evet. Bkz. [Kişisel Eklenti Nasıl Oluşturulur](/plugins-and-skills/create): başka bir platformdaki mevcut eklenti dosyalarını veya proje bağlantısını Plugin Builder'a verin ve talimatları izleyerek bunu bir Kimi eklentisine dönüştürün.
