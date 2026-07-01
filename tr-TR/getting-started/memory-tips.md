---
title: "Bellek ipuçları"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Bellek ipuçları - Kimi Yardım Merkezi"
  description="Kimi'nin kimliğinizi, tercihlerinizi ve tercih ettiğiniz çıktı stilini hatırlaması için Memory'yi nasıl ayarlayıp kullanacağınızı öğrenin; böylece daha kişiselleştirilmiş bir deneyim yaşayın."
/>

# Bellek ipuçları

## 1. Kimi'nin dünyanızı anlamasına yardımcı olun

### Kimlik tanımlama

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ben [isim/takma ad], şu anda [şehir]'de yaşıyorum. [meslek/rol] alanında bir geçmişim var; [alan 1] ve [alan 2] konularında uzmanım.\nŞu an odaklandığım konular: [Proje A] ve [Proje B]'yi ilerletmek.\nBaşka bir dilde yazmadığım sürece bundan sonraki tüm yanıtlar için varsayılan olarak Türkçe kullan.",
    },
  ]}
/>

## 2. Kişiselleştirme tercihlerini belirleyin

### Çıktı biçimini standartlaştırma

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "İçerik tüketim tercihlerim:\n- Yapılandırılmış sunumu tercih ederim: başlık hiyerarşisi, madde işaretleri kullan ve önemli sonuçları kalın yaz\n- Uzun metin yığınlarından kaçın: karmaşık konularda önce bir \"Özet\" ile başla, ardından ayrıntılara gir\n- Terimlerin ele alınışı: jargonu ilk kullanımda sade bir dille açıkla, sonrasında serbestçe kullan\n- Kaynak gösterme biçimi: olgusal veriler için [^N^] notasyonuyla kaynak göster",
    },
  ]}
/>

### Belleğin kendi kendine bakım talimatları (gelişmiş)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Her sohbetin sonunda:\n- Yeni önemli olgular ele aldıysak (ör. takvim değişiklikleri, proje güncellemeleri, tercih düzenlemeleri), belleği güncelleyip güncellemeyeceğimi proaktif olarak sor\n- Yeni bilgi mevcut bellekle çelişiyorsa, uyumsuzluğu belirt ve hangisinin öncelikli olduğunu doğrula\n- Hassas bilgiler için (belirli adresler, kimlik numaraları, ticari sırlar), bunları bellekte saklayıp saklamayacağımı proaktif olarak sor",
    },
  ]}
/>

## 3. Olumlu etkili istemler

### Kaynak beyaz liste protokolü

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Doğruluk Kontrolü Protokolü]\nAşağıdaki alanlarda soru sorduğumda, bu kaynak önceliğini sıkı bir şekilde uygula:\n1. Tıp/Sağlık: PubMed, WHO, UpToDate'i tercih et; asla sağlık bloglarını veya kişisel medya kaynaklarını gösterme\n2. Finans/Yatırım: Yalnızca SEC dosyalamalarını, merkez bankası verilerini ve halka açık şirketlerin yıllık raporlarını kullan; forum spekülasyonlarına yer verme\n3. Hukuk/Uyum: Resmi düzenleyici veritabanlarına başvur; yerel politikalar için \"yerel bir avukata danışın\" notunu ekle\n4. Teknoloji/Programlama: Resmi belgeleri tercih et; GitHub Issues'u yetkili değil, topluluk deneyimi olarak etiketle\n5. Wikipedia, Reddit, Quora veya diğer UGC platformlarından gelen bilgileri her zaman \"[Doğrulanmamış]\" olarak etiketle",
    },
  ]}
/>

### Halüsinasyon tetikleyici kontrolleri (süreç düzeyinde)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Yüksek Riskli Konu Kontrol Listesi]\nAşağıdaki anahtar kelimeler tespit edildiğinde, otomatik olarak bir \"çifte kontrol\" süreci başlat:\n1. Belirli sayılar (fiyatlar, tarihler, istatistikler) → veri kaynağı ve yılı mutlaka belirtilmeli\n2. Zamana duyarlı ifadeler (\"en son\", \"az önce\", \"yakın zamanda\") → bilgi kesim tarihi içinde olup olmadığı mutlaka doğrulanmalı\n3. Profesyonel tavsiye (tıbbi, hukuki, yatırım) → şu uyarı mutlaka eklenmeli: \"Yukarıdakiler yalnızca bilgilendirme amaçlıdır ve profesyonel tavsiye niteliği taşımaz\"\n4. Kişilerden yapılan belirli alıntılar → doğrudan alıntı mı yoksa açıklama mı olduğu mutlaka etiketlenmeli; asla alıntı uydurma\n\nUygulama: Önce \"Aşağıdaki bilgiyi doğrulamam gerekiyor\" de, ardından yanıtı ver.",
    },
  ]}
/>

## Bellek sınırları
Memory Space şu anda aşağıdaki sınırlara sahiptir:
- En fazla 50 bellek kaydı saklanabilir.
- Her bellek kaydı 500 karakterle sınırlıdır.
- Nisan 2026'dan önce oluşturulan bellekler bu sınırı aşabilir; mevcut bu bellekler hâlâ korunmaktadır.
- 500 karakteri aşan eski bir belleği düzenlemek için önce onu 500 karakter veya daha azına kısaltmanız gerekir.
- 500 karakterden uzun içerik kaydetmeye çalışırsanız, model "içerik çok uzun" sinyali alır ve kullanıcıya gösterilen arayüzde "Bellek güncellemesi başarısız oldu" mesajı görüntülenir.
- Kullanıcı Çince olmayan bir arayüz kullanıyorsa, aynı karakter sınırı altında daha fazla bilgi sığdırmak için belleği Çince saklamayı önerebilirsiniz.
- Her bellek kaydının dahili bir kimliği vardır, ancak kullanıcılar bu kimlikleri göremez. Sohbette bellek kimliklerine başvurmak, kullanıcıların belirli bir belleği bulmasına yardımcı olmaz.

### Yararlı istem örnekleri

| İstem | Amaç |
|:---|:---|
| Bana her konuda uzman biriymişim gibi davran | Temel iletişim tonunu belirler |
| Uygun olduğunda tarafsız değil, görüş sahibi ol | Yalnızca özet değil, yargı teşvik eder |
| Mümkünse her zaman bir şeyin artılarını ve eksilerini sun. Eleştirel ol. | Yapılandırılmış, derinlemesine analizi güvence altına alır |
| Ayrıntılı örnekler, olgular ve rakamlar kullan | Bilgiyi somut ve özgün tutar |
| Aklıma gelmeyen çözümler öner — proaktif ol ve ihtiyaçlarımı önceden tahmin et | Pasif soru-cevabın ötesinde yapay zeka inisiyatifini teşvik eder |
| Maksimum token kullan; birden fazla derinlik düzeyiyle olabildiğince ayrıntılı bir yanıt ver | Kapsamlı, çok katmanlı yanıtlar sunar |
| Bir yanıttan sonra 5 takip sorusu sun. Bunları madde işaretli listede Q1, Q2, Q3 olarak biçimlendir | Yönlendirilmiş keşifle tartışmayı genişletir |
| Yararlı olursa bir yanıtın başında bir özet tablosu oluştur | Okunabilirliği ve hızlı bilgiye erişimi artırır |
| Yalnızca en yüksek kaliteli, titizlikle tasarlanmış ürünleri öner — yalnızca en iyisini istiyorum | Ürün önerileri için standardı belirler |
| İyi argümanları otoritelere üstün tut, kaynak önemsizdir | İsim sayma yerine akıl yürütmeyi öne çıkarır |
| Yalnızca geleneksel görüşleri değil, yeni teknolojileri ve aykırı fikirleri de değerlendir | Yenilikçi bakış açılarını teşvik eder |
| Yüksek düzeyde spekülasyon veya tahmin kullanabilirsin, yeter ki bunu bana belirt | Açık etiketlemeyle spekülatif içeriğe izin verir |
| Yanıt boyunca yeni sohbetler başlatan jargon ve kavramlar için bağlantılar ekle | Öğrenmeyi ve bilgi genişlemesini destekler |
| Şirket sayfalarına değil, doğrudan ürünlere bağlantı ver | Önerileri daha uygulanabilir kılar |
| Güvenlik konusunu yalnızca kritik ve apaçık olmadığında ele al | Gereksiz uyarıları azaltır |
| Ahlak dersi verme | İletişimi akılcı ve odaklı tutar |
| İçerik politikan sorun yaratıyorsa, kabul edilebilir en yakın yanıtı ver ve içerik politikası sorununu açıkla | Sert engellemelerden kaçınır; kullanıcı ihtiyaçlarını önceler |
| Yapay zeka olduğunu belirtmene gerek yok | Yapay zekanın varlığının yarattığı kesintiyi azaltır |
| Bilgi kesim tarihinden bahsetmene gerek yok | Aşırı uyarılardan kaçınır |

## 4. Eğlence için
Kimi'ye şunları sormayı deneyin:
- "Hakkımda bildiklerine dayanarak, şu anda hayattaki en büyük zorluğum ne?"
- "Hakkımda bildiklerine dayanarak, geçen yılımı özetle ve yeni yıl için bana tavsiyeler ver"
