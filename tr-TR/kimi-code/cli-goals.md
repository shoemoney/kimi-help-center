---
title: "Hedefler"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Kimi Code'un belirlenen bir sonuca doğru, turlar boyunca çalışmaya devam etmesi için hedefleri kullanın."
---

<SeoMeta
  title="Hedefler - Kimi Yardım Merkezi"
  description="Kimi Code'un belirlenen bir sonuca doğru turlar boyunca çalışmaya devam etmesi için /goal komutunu kullanın. Hedefleri ne zaman kullanacağınızı, yaşam döngülerini nasıl yöneteceğinizi ve sıradaki hedefleri nasıl kuyruğa alacağınızı öğrenin."
/>

# Hedefler

Hedefler, Kimi Code'un belirlenen bir sonuca doğru turlar boyunca çalışmaya devam etmesini sağlar. Bir sonraki adımda ne yapılacağını söyleyen normal bir istemin aksine, bir hedef neyin gerçekleşmesi gerektiğini söyler. Görevin net bir bitiş çizgisi olduğunda ancak bir sonraki yararlı adım, ajanın çalışırken öğrendiklerine bağlı olduğunda `/goal` komutunu kullanın — örneğin başarısız olan bir grup testi düzeltirken ya da bozuk bir derlemenin temel nedenini bulurken.

## Bir hedef başlatın

Hedefi `/goal` komutundan sonra yazın:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Sorun izleyicide listelenen hataları düzelt.",
    },
  ]}
/>

Kimi Code hedefi kaydeder, bir sonraki kullanıcı mesajı olarak gönderir ve hedef modunu başlatır. Her turun ardından hedefin tamamlanıp tamamlanmadığını, engellenip engellenmediğini, duraklatılıp duraklatılmadığını veya hâlâ etkin olup olmadığını kontrol eder.

Hedefler en iyi sonucu, bitiş çizgisini ve onu kanıtlayan delili belirten bir amaçla verir:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal checkout-regression etiketli her hatayı düzelt, her düzeltme için test ekle veya güncelle ve checkout test paketini çalıştır",
    },
  ]}
/>

Yalnızca geniş bir yön belirten hedeflerden kaçının:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Bu kod tabanındaki tüm hataları bul.",
    },
  ]}
/>

Bu hedef neyin başarı sayıldığını, neyin inceleneceğini veya ne zaman duracağını söylemez. Ajan hemen engellenebilir ya da beklediğinizden çok daha uzun süre çalışmaya devam edebilir.

### Hedefleri ne zaman kullanmalı

Net bir bitiş çizgisi ve doğrulanabilir delili olan işler için hedefleri kullanın.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Başarısız olan her checkout testini düzelt ve checkout test paketini başarıyla çalıştır.",
    },
  ]}
/>

Kimi Code test çıktısını inceleyebilir, dosyaları değiştirebilir, kontrolleri yeniden çalıştırabilir ve hedefin ne zaman tamamlandığına karar verebilir.

Görev birkaç tur araştırma ve onarım gerektirebildiğinde hedefleri kullanın.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Sürüm derlemesinin neden başarısız olduğunu bul, temel nedeni düzelt ve derlemenin geçtiğini doğrula.",
    },
  ]}
/>

Hedef sonucu tarif ettiği için, ilk ipucu temel neden olmadığında ajan kendini uyarlayabilir.

Başka bir istem olmadan devam etmesi gereken sıralı işler için hedefleri kullanın.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Özellik uygulamasını güncelle, dokümantasyon ekle, testleri çalıştır ve değişen dosyaları özetle.",
    },
  ]}
/>

Bu, iş tamamlanmadan önce var olması gereken kontrolleri veya artefaktları önceden bildiğinizde yararlıdır.

### Hedefleri ne zaman kullanmamalı

Geniş konular veya açık uçlu tartışmalar için hedefleri kullanmayın.

**Karşı örnek:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Merhaba!",
    },
  ]}
/>

<Callout type="warning">
Ajanlar, hedef olmayan girdiler için hedefi anında tamamlanmış olarak işaretler.
</Callout>

İmkânsız ya da çözülemez olduğu bilinen görevler için hedefleri kullanmayın.

**Karşı örnek:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal 1 + 1 = 3 olduğunu kanıtla.",
    },
  ]}
/>

<Callout type="warning">
Hedef imkânsız ya da çözülemez görünüyorsa ajanlar hedefi engellenmiş olarak işaretler.
</Callout>

Muğlak veya karmaşık amaçlarla hedefleri kullanmayın.

**Karşı örnek:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Tek bir HTML dosyasında bir video oyunu oluştur.",
    },
  ]}
/>

<Callout type="warning">
Ajanlar hedefleri tamamlayabilir, ancak uzun bir sürenin ardından beklenmedik veya şaşırtıcı sonuçlar da üretebilir.
</Callout>

## Yaşam döngüsünü yönetin

Mevcut hedefi incelemek veya kontrol etmek için aynı komut yüzeyini kullanın:

| Komut | Eylem |
| --- | --- |
| `/goal` veya `/goal status` | Mevcut hedefi ve ilerlemesini gösterir |
| `/goal pause` | Etkin hedefi silmeden duraklatır |
| `/goal resume` | Duraklatılmış veya engellenmiş bir hedefi sürdürür |
| `/goal cancel` | Mevcut hedefi kaldırır |
| `/goal replace <objective>` | Mevcut hedefi yeni bir amaçla değiştirir |

Bir hedef üç şekilde durabilir:

- **tamamlandı**: amaç gerçekleşmiştir, Kimi Code hedefi temizler ve ajan işi nasıl tamamladığını özetler
- **duraklatıldı**: siz duraklattınız, turu kestiniz, etkin bir hedefe sahip bir oturumu yeniden başlattınız ya da bir model, sağlayıcı veya çalışma zamanı hatasıyla karşılaştınız
- **engellendi**: Kimi Code'un girdiye ihtiyacı vardır, hedefi belirtildiği şekilde tamamlayamaz veya bir bütçe sınırına ulaşmıştır. Ajan bir hedefi engellediğinde, nedenini açıklayan kısa bir mesaj yazar.

Durma koşullarını amacın içine yazın. `/goal` komutunun ayrı bir durma sınırı bayrağı yoktur.

## Sıradaki hedefleri kuyruğa alın

Ajanlar bazen bir hedefi çok hızlı tamamlar. Kullanıcılar her seferinde yalnızca tek bir hedef atayabildikleri için hayal kırıklığına uğrayabilir. Birçok kişi peşinden gitmek istediği sıradaki hedefleri zaten bilir. Mevcut hedefin tamamlanmasını beklemek, TUI'yi açmak ve sonraki hedefi elle göndermek zorunda kalmışlardır.

Hazır daha fazla işiniz olduğunda ancak mevcut hedefi kesmek istemediğinizde `/goal next` komutunu kullanın:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Testler geçtikten sonra sürüm notlarını güncelle",
    },
  ]}
/>

Sıradaki hedefler, mevcut hedef çalışırken ajana görünmez. Mevcut hedef tamamlandığında, kullanıcılar `/goal <objective>` girdiğinde olduğu gibi Kimi Code ilk sıradaki hedefi başlatır.

Etkin bir hedef yoksa, `/goal next <objective>` o amacı anında başlatır. `/goal <objective>` gibi davranır ve hedef başlamadan önce bir durum mesajı gösterir.

Sıradaki hedefleri etkileşimli olarak yönetin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Yöneticide, gezinmek için <kbd>↑</kbd> / <kbd>↓</kbd>, taşımak üzere bir hedef seçmek için <kbd>Space</kbd>, sıralamasını değiştirmek için <kbd>↑</kbd> / <kbd>↓</kbd>, düzenlemek için <kbd>E</kbd>, silmek için <kbd>D</kbd> ve iptal etmek için <kbd>Esc</kbd> tuşlarını kullanın. Düzenlerken yeni bir satır eklemek için <kbd>Shift-Enter</kbd> veya <kbd>Ctrl-J</kbd>, kaydetmek için <kbd>Enter</kbd> tuşunu kullanın.

Mevcut hedef duraklatılmış, iptal edilmiş veya engellenmişse Kimi Code sıradaki hedefi başlatmaz. Bir hedef engellendiğinde ve sırada hedefler varsa, TUI bunların tamamlanmayı beklediğini size hatırlatır.

## Hedef modunu dikkatle kullanın

Hedef modu; dosyalar, testler, komut çıktısı, üretilen artefaktlar veya net bir yazılı raporla kontrol edilebilen işler için yararlıdır. Tek seferlik bir düzenleme ya da yalnızca tek bir yanıt gerektiren bir soru için daha az yararlıdır.

`manual` izin modunda, hedef çalışması araç çağrısı onayı için duraklayabilir. Gözetimsiz işler için, deponun ve ajanın çalıştırabileceği komutların riskine uygun bir izin modu kullanın.

Etkileşimsiz istem modunda yalnızca hedef oluşturma desteklenir:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Başarısız olan checkout testini düzelt\"",
    },
  ]}
/>

İstem modu, hedef tamamlandığında `0`, engellendiğinde `3` ve duraklatıldığında `6` koduyla çıkar. `/goal next` ve diğer yönetim komutları TUI denetimleridir.
