---
title: "Agent özellikleri ve sınırları"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Agent özellikleri ve sınırları

<SeoMeta
  title="Agent Özellikleri ve Sınırları - Kimi Yardım Merkezi"
  description="En iyi sonuçları almak için Kimi Agent’ın yetenekleri, kullanım ipuçları, sınırları ve önerilen yöntemleri hakkında bilgi edinin."
/>

<Callout type="info">
**Kimi Agent**, çok adımlı akıl yürütme ve araç entegrasyonu sayesinde karmaşık görevleri kendi başına yürüten AI destekli bir asistandır. Bu kılavuz, Agent modundan en iyi şekilde yararlanmanıza yardımcı olmak için önerilen yöntemleri, sınırları ve sık sorulan soruları kapsar.
</Callout>

## Kullanım ipuçları

**(1) Görev göndermeden önce**

Kimi’nin amacınızı daha doğru anlaması için arka plan bilgilerini ve kısıtları açıkça belirtin: proje bağlamı, kullanım senaryosu ve özel gereksinimler.

**(2) Yürütme sırasında**

Kimi Agent arka planda eşzamansız olarak çalışır. Web sayfası donmuş veya takılmış gibi görünürse **"Durdur" düğmesine tıklamayın**; bu, görevin yürütülmesini kesintiye uğratır. Sayfadan ayrılabilirsiniz; görev arka planda çalışmaya devam eder ve tamamlandığında bildirim alırsınız. Uzun sürmesi beklenen görevlerde (ör. Agent Swarm) lütfen sabırlı olun.

**(3) Web sitesi senaryoları**

Agent; frontend arayüzleri, backend servisleri ve kalıcı depolama mantığı dahil olmak üzere full-stack içerik üretebilir. Bir proje beklendiği gibi çalışmıyorsa sorun genellikle sandbox başlatma, veritabanı ilklendirme, kimlik doğrulama yapılandırması veya eksik yayımlama adımlarıyla ilgilidir. Standart Agent bulutta çalışır ve yerel dosyalara ya da kurumsal intranet sistemlerine doğrudan erişemez. Yerel dosya veya intranet erişimi için Kimi Claw kullanın.

<Callout type="tip">
**Yerel dosyalara erişmeniz mi gerekiyor?** Yerel dosyalara ve kurumsal intranet sistemlerine güvenli erişim için Kimi Claw kullanın. Daha fazla bilgi için [Kimi Claw belgelerine](/kimi-claw/overview) bakın.
</Callout>

**(4) Çok turlu sohbetler ve görev ayarlamaları**
Birden fazla diyalog ve revizyon turu boyunca Agent, erken aşamadaki bazı ayrıntıları “unutabilir”. En iyisi önce görev çerçevesini ve kilit noktaları belirlemek, ardından kademeli ayarlamalar yapmaktır.

**(5) Büyük görevleri parçalara ayırma**
Büyük ve karmaşık görevlerde işi 2–3 aşamaya bölüp Kimi’ye partiler halinde gönderin veya Agent Swarm kullanın.

**(6) Dosya çıktısı sınırları**
Standart Agent modunda, genellikle görev başına yalnızca bir dosya çıktısı alınabilir (ör. bir belge veya elektronik tablo). Birden fazla dosya için (ör. hem Word belgesi hem de PPT) Agent Swarm kullanın.

**(7) Bağlam sınırları ve çıktı dengesi**
Büyük dil modellerinin 256K karakterlik bağlam sınırı nedeniyle (yaklaşık 40.000–50.000 Çince karakter / ~100.000 İngilizce kelime), yüksek hacimli dosyaları işlerken girdi ve çıktı hacmini dengelemek gerekir.

<Callout type="warning">
**Bağlam Sınırı Notu**: Agent 256K karakterlik bir bağlam penceresi kullanır. En iyi sonuçlar için kısa ve öz bağlam sağlayın; gereksiz dosyalarla sistemi aşırı yüklemeyin.
</Callout>

## Önemli notlar

<Callout type="warning">
**credit kullanımı**: Agent görevleri, ortak havuzdaki credit’leri tüketir. Kimi Code da aynı ortak havuzdan kullanır, ancak yalnızca Kimi Code için geçerli olan kendi 5 saatlik / haftalık rate limit sınırına sahiptir. Her Agent görevi genellikle 1 credit birimi tüketir. Üyelik katmanına göre ayrıntılı credit bilgileri için [Credit’ler ve Faturalandırma](/agent/quota-and-billing) bölümüne bakın.

- Planınıza bağlı olarak ayda 60–720 Agent görevi
</Callout>

- **Yürütme süresi**: Agent modunda tek bir görev genellikle 5–20 dakika sürer. Agent Swarm görevleri daha uzun sürebilir. Sayfadan ayrılabilirsiniz; yalnızca görevi kesintiye uğratmak için Durdur’a tıklamayın.
- **credit kullanımı**: Agent görevleri, Kimi Code’un da kullandığı ortak havuzdaki credit’leri tüketir (Kimi Code’un kendine ait 5 saatlik / haftalık rate limit sınırı vardır).
- **Basit görevler**: Basit soru-cevap işleri için daha hızlı yanıt almak üzere standart sohbet modu önerilir.

<Callout type="warning">
**İçerik Uyumluluğu**: Agent özellikleri [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2) kapsamındadır. Yasaklı içerik üretimi desteklenmez; yasaklı içerik göndermek hizmetin askıya alınmasına yol açabilir.
</Callout>

## SSS

**S: Agent neler yapabilir?**

Agent, birden fazla araç çağrısı kullanarak aşağıdaki ihtiyaçları karşılar:
- **Metin üretme ve düzenleme**: Farklı yazım stilleri ve formatları destekleyerek makale, rapor, belge vb. üretir.
- **Web geliştirme**: Uygulama arayüzü tasarımı, backend entegrasyonu, veri kalıcılığı ve veri görselleştirmeyi destekleyerek full-stack proje arayüzleri ve servisleri oluşturur.
- **Slayt oluşturma**: Tam sunumlar üretmek için web tabanlı özel PPT aracı.
- **Kodlama yardımı**: Birden fazla programlama dilinde kod yazma ve hata ayıklama.

**S: Agent’ın oluşturduğu web sitesi neden çalışmıyor?**

Eksiksiz bir proje genellikle üç bölümden oluşur: frontend arayüz, backend servisleri ve veri depolama. Agent, bu üç katmanın tamamında full-stack proje içeriği üretebilir. Projeniz beklendiği gibi çalışmıyorsa sorun genellikle sandbox başlatma, veritabanı ilklendirme, kimlik doğrulama yapılandırması veya eksik yayımlama adımlarıyla ilgilidir.

**S: Agent’ın teslim çıktıları nelerdir?**

- Tamamlanmış görev yürütme dosyaları
- Dağıtılmış proje önizlemesi ve yayımlanmış sürümler
- İndirilebilir Zip arşivi (`/mnt/okcomputer/output/` konumunda)

**S: Agent’ın bağlam uzunluğu nedir?**

Agent, **256K karakterlik** bir bağlam uzunluğu kullanır (yaklaşık 40.000–50.000 Çince karakter / ~100.000 İngilizce kelime).

**S: Agent credit’leri nasıl hesaplanır?**

Kimi Code dahil tüm üyelik özellikleri tek bir credit havuzunu paylaşır. Her Agent görevi genellikle bir credit birimi olarak sayılır.
