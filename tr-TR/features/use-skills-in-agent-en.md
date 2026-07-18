---
title: "Agent Modunda Skill Kullanımı"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent Modunda Skill Kullanımı - Kimi Yardım Merkezi"
  description="Agent Modunda skill'leri nasıl çağıracağınızı, özel skill'ler oluşturmayı, önerilen skill'leri keşfetmeyi ve Kimi'nin yeteneklerini genişletmeyi öğrenin."
  ogType="article"
/>

# Agent Modunda Skill Kullanımı

## Skill'ler nasıl çağrılır?

Kimi Agent Modu'nun giriş kutusunda Skill'leri çağırmanın üç yolu vardır:

**Yöntem 1: `/` komutunu kullanın**

Giriş kutusuna `/` yazarak Skill listesini açın. Eklemek için bir Skill adına tıklayın. Ayrıca listeyi filtrelemek için `/` işaretinden sonra anahtar kelimeler de yazabilirsiniz.

**Yöntem 2: "➕" menüsünü kullanın**

Giriş kutusunun yanındaki **➕** düğmesine tıklayın. Menüden bir Skill seçin; Skill adı, giriş kutusuna metin olarak eklenecektir.

<Frames
  src="./images/skills/加号-en.png"
  alt="Artı menüsüyle skill çağırma"
/>

**Yöntem 3: Kararı Kimi'ye bırakın**

Yalnızca ihtiyacınızı tarif edin. Kimi, görev içeriğinize göre en uygun Skill'i otomatik olarak belirleyip tetikleyecektir.

### Örnek: SEO analiz raporu oluşturmak için Skill kullanma

Diyelim ki web sitenizin SEO performansını analiz etmek isteyen bir içerik yöneticisisiniz:

1. Giriş kutusuna `/` yazın, `seo-analyzer` Skill'ini bulup seçin.
2. Şunu yazmaya devam edin: `Lütfen https://help.com/zh-cn/help adresinin SEO performansını analiz et, başlıca sorunları ve optimizasyon önerilerini listele.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO analizi"
/>

3. Gönderdikten sonra Kimi, SEO analizi iş akışını izleyerek otomatik olarak arama yapar, içeriği düzenler ve yapılandırılmış bir rapor sunar.

Kimi'ye analizi nasıl yapacağını söylemenize gerek yoktur; iş akışı zaten Skill içinde tanımlıdır.

## Skill'leri keşfetme ve yönetme

### Kimi'nin seçimleri

Kimi, tek tıkla eklenebilen, kullanıma hazır bir dizi önerilen skill sunar:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Önerilen skill'ler"
/>

## Skill'leri özelleştirme

Kimi'nin önerdiği skill'ler ihtiyaçlarınızı karşılamıyorsa, kendi iş akışınıza özel skill'ler oluşturabilirsiniz.

**Ne zaman özel bir skill oluşturmalısınız?**

- Tekrar tekrar yürütülmesi gereken yinelenen bir göreviniz var (ör. haftalık rakip raporları).
- Kimi'nin içeriği şirketinizin belirli biçiminde sunmasını istiyorsunuz.
- Kimi'nin doğrudan izlemesini istediğiniz bir çalışma yöntemi setiniz var.

İyi bir skill tek bir işi yapar ve onu iyi yapar. Tüm gereksinimleri tek bir skill'e sığdırmaya çalışmayın.

### Seçenek 1: Belgeden skill'e

Elinizde hazır şablonlar, standart belgeler veya örnek dosyalar varsa, bunları doğrudan yükleyip Kimi'nin öğrenip ilgili skill'i oluşturmasını sağlayabilirsiniz.

1. **Skills** panelinde **Office Belgesini Skill'e Dönüştür** seçeneğini seçin.
2. Dosyaları yükleme alanına tıklayarak veya sürükleyerek ekleyin. Desteklenen biçimler: `docx`, `xlsx`, `pdf`, `pptx` ve belge ekran görüntüleri. Yükleme başına en fazla 3 dosya, her biri 100 MB'ı geçmemelidir.

<Frames
  src="./images/skills/document.png"
  alt="Skill oluşturmak için belge yükleme"
/>

3. Skill açıklamasını doldurarak Kimi'ye bu skill'in ne yapması gerektiğini anlatın. Örneğin: "Haftalık satış verilerimi bu şablonun stiline ve biçimine göre düzenlememe yardım et."
4. **Skill Oluştur**'a tıklayın.

### Seçenek 2: Kimi ile oluşturma

Hazır belgeleriniz yoksa, ihtiyaçlarınızı doğrudan diyalog yoluyla tarif edebilirsiniz; Kimi, skill oluşturmayı adım adım tamamlamanızda size rehberlik eder.

Giriş kutusuna `/skill-creator` yazın, ardından oluşturmak istediğiniz Skill'i tarif edin. Kimi, gereksinimleri eksiksiz bir Skill haline getirmenize yardımcı olur.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Diyalog yoluyla Skill oluşturma"
/>

### Mevcut Skill'leri yönetme

**Skills** panelinde **Özel Skill'ler** sekmesine geçerek oluşturduğunuz Skill'leri düzenleyebilir, belgeleri güncelleyebilir veya silebilirsiniz.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Özel Skill'leri yönetme"
/>

<Callout type="info">
Skill'ler, Agent Modu ve Kimi Claw'da desteklenir. `swarm` ekli Skill'ler yalnızca Swarm (Agent kümesi) senaryolarında kullanılabilir ve diğer bağlamlarda görüntülenmez.
</Callout>

## Etkili Skill açıklamaları yazma

Kimi, "bu Skill'in ne zaman kullanılacağını" belirlemek için Skill açıklamalarına dayanır. Açıklamanız ne kadar net olursa, Skill o kadar isabetli tetiklenir.

Eksiksiz bir Skill açıklaması şunları içermelidir:
- Skill'in temel işlevi.
- Hangi senaryolar için uygun olduğu.
- Yanıt verdiği tetikleyici kelimeler.
- Gereksinimin dolaylı şekilde ifade edilmesini tanıma yeteneği.

<ComparisonBlock
  wrong={"Kullanıcıların Skill aramasına ve keşfetmesine yardımcı ol."}
  correct={"Kullanıcıların Skill aramasına ve keşfetmesine yardımcı ol. Kullanıcılar belirli bir türde Skill bulmak istediklerinde ya da bir sorunu tarif edip Skill önerisi almayı umduklarında kullanılır. Tetikleyici kelimeler arasında “Skill bul”, “Skill ara”, “X yapabilecek bir Skill var mı?” gibi ifadeler yer alır."}
/>
