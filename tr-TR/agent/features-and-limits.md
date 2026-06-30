---
title: "Agent özellikleri ve kısıtlamaları"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Agent özellikleri ve kısıtlamaları

<SeoMeta
  title="Agent Özellikleri \u0026 Kısıtlamaları - Kimi Yardım Merkezi"
  description="Kimi Agent'ın yeteneklerini, kullanım ipuçlarını, kısıtlamalarını ve en iyi sonuçlar için önerilen uygulamaları öğrenin."
/>

<Callout type="info">
**Kimi Agent**, çok adımlı muhakeme ve araç entegrasyonuyla karmaşık görevleri kendi başına yürüten yapay zekâ destekli bir asistandır. Bu kılavuz; Agent modundan en iyi şekilde yararlanmanıza yardımcı olacak önerilen uygulamaları, kısıtlamaları ve sık sorulan soruları kapsar.
</Callout>

## Kullanım ipuçları

**(1) Bir görevi göndermeden önce**

Arka plan bilgilerini ve kısıtları net biçimde belirtin — proje bağlamı, kullanım senaryosu ve özel gereksinimler — böylece Kimi amacınızı daha isabetli anlayabilir.

**(2) Yürütme sırasında**

Kimi Agent arka planda eşzamansız çalışır. Web sayfası donmuş ya da takılmış gibi görünüyorsa **"Durdur"a basmayın** — bu, görevin yürütülmesini keser. Sayfadan ayrılabilirsiniz; görev arka planda çalışmaya devam eder ve tamamlandığında bir bildirim alırsınız. Uzun sürmesi beklenen görevlerde (ör. K2.6 Agent Swarm [Beta]) lütfen sabırlı olun.

**(3) Web sitesi senaryoları**

Agent; ön yüz arabirimleri, arka uç hizmetleri ve kalıcı depolama mantığı dâhil olmak üzere tam yığın içerik üretebilir. Bir proje beklendiği gibi çalışmıyorsa sorun genellikle sandbox başlatma, veritabanı başlatma, kimlik doğrulama yapılandırması veya eksik yayımlama işlemleriyle ilgilidir. Standart Agent bulutta çalışır ve yerel dosyalara ya da kurumsal intranet sistemlerine doğrudan erişemez. Yerel dosya veya intranet erişimi için Kimi Claw kullanın.

<Callout type="tip">
**Yerel dosyalara mı erişmeniz gerekiyor?** Yerel dosyalara ve kurumsal intranet sistemlerine güvenli erişim için Kimi Claw kullanın. Ayrıntılar için [Kimi Claw belgelerine](/kimi-claw/overview) bakın.
</Callout>

**(4) Çok turlu konuşmalar ve görev düzenlemeleri**
Birden fazla diyalog ve revizyon turu boyunca Agent, ilk aşamadaki bazı ayrıntıları "unutabilir". En iyisi, önce görev çerçevesini ve ana noktaları oluşturmak, ardından kademeli düzenlemeler yapmaktır.

**(5) Büyük görevlerin parçalara ayrılması**
Büyük ve karmaşık görevleri 2–3 aşamaya bölerek Kimi'ye partiler hâlinde gönderin ya da K2.6 Agent Swarm [Beta] kullanın.

**(6) Dosya çıktısı kısıtlamaları**
Standart Agent modunda genellikle her görev başına yalnızca tek bir dosya çıktısı alınabilir (ör. bir belge ya da elektronik tablo). Birden fazla dosya için (ör. hem bir Word belgesi hem de bir PPT) K2.6 Agent Swarm [Beta] kullanın.

**(7) Bağlam sınırları ve çıktı dengesi**
Büyük dil modellerinin 256K karakterlik bağlam sınırı (yaklaşık 40.000–50.000 Çince karakter / ~100.000 İngilizce sözcük) nedeniyle, büyük hacimli dosyaların işlenmesi giriş ve çıkış hacmi arasında bir denge gerektirir.

<Callout type="warning">
**Bağlam Sınırı Notu**: Agent, 256K karakterlik bir bağlam penceresi kullanır. En iyi sonuçlar için bağlamı özlü tutun ve gereksiz dosyalarla aşırı yüklemekten kaçının.
</Callout>

## Önemli notlar

<Callout type="warning">
**Kredi kullanımı**: Agent görevleri, ortak havuzdaki (diğer üyelik özellikleri) kredi'yı tüketir. Kimi Code ayrı bir kredi havuzu kullanır. Her Agent görevi genellikle 1 kredi birimi tüketir. Üyelik kademelerine göre ayrıntılı kredi bilgileri için [kredi ve Faturalandırma](/agent/quota-and-billing) sayfasına bakın.
Ücretsiz kademe: ayda 6 Agent görevi
Ücretli kademeler: planınıza bağlı olarak ayda 60–720 Agent görevi
</Callout>

- **Yürütme süresi**: Agent modunda tek bir görev genellikle 5–20 dakika sürer. K2.6 Agent Swarm [Beta] görevleri daha uzun sürebilir. Sayfadan ayrılabilirsiniz — yalnızca görevi kesmek için Durdur'a basmayın.
- **Kredi kullanımı**: Agent görevleri ortak havuzdaki kredi'yı tüketir. Kimi Code ayrı bir kredi havuzu kullanır. 
- **Basit görevler**: Basit soru-yanıtlar için daha hızlı yanıt almak adına standart sohbet modu önerilir.

<Callout type="warning">
**İçerik Uyumu**: Agent özellikleri [Kimi Kullanıcı Sözleşmesi](https://www.kimi.com/user/agreement/modelUse?version=v2) kapsamındadır. Yasaklı içerik üretimi desteklenmez; yasaklı içerik göndermek hizmetin askıya alınmasına yol açabilir.
</Callout>

## SSS

**S: Agent neler yapabilir?**

Agent, birden fazla araç çağrısıyla şu ihtiyaçları karşılar:
- **Metin üretme ve düzenleme**: Çeşitli yazım stilleri ve biçimleri desteğiyle makaleler, raporlar, belgeler vb. üretir.
- **Web geliştirme**: Uygulama arabirimi tasarımı, arka uç entegrasyonu, veri kalıcılığı ve veri görselleştirmeyi destekleyerek tam yığın proje arabirimleri ve hizmetleri oluşturur.
- **Slayt üretimi**: Eksiksiz sunumlar üretmek için web tabanlı özel PPT aracı.
- **Kodlama desteği**: Birden fazla programlama dilinde kod yazma ve hata ayıklama.

**S: Agent ile oluşturulan web sitesi neden çalışmıyor?**

Eksiksiz bir proje genellikle üç bölümden oluşur: ön yüz arabirimi, arka uç hizmetleri ve veri depolama. Agent, bu üç katmanın tümünde tam yığın proje içeriği üretebilir. Projeniz beklendiği gibi çalışmıyorsa sorun genellikle sandbox başlatma, veritabanı başlatma, kimlik doğrulama yapılandırması veya eksik yayımlama işlemleriyle ilgilidir.

**S: Agent'ın çıktıları nelerdir?**

- Eksiksiz görev yürütme dosyaları
- Dağıtılmış proje önizlemesi ve yayımlanmış sürümler
- İndirilebilir Zip arşivi (`/mnt/okcomputer/output/` konumunda)

**S: Agent'ın bağlam uzunluğu nedir?**

Agent, **256K karakterlik** (yaklaşık 40.000–50.000 Çince karakter / ~100.000 İngilizce sözcük) bir bağlam uzunluğu kullanır.

**S: Agent kredi'sı nasıl hesaplanır?**

Agent, PPT ve diğer üyelik özellikleri tek bir kredi havuzunu paylaşır. Kimi Code ayrı bir kredi havuzu kullanır. Her Agent görevi genellikle bir kredi birimi olarak sayılır. Mevcut kredi'nızı ve kullanımınızı [Üyelik Credit'leri](https://www.kimi.com/membership-credits) sayfasından görüntüleyin.
