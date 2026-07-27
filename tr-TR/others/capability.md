---
title: "Kimi neler yapabilir?"
slug: "capability"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi neler yapabilir? - Kimi Yardım Merkezi"
  description="Kimi’nin yetenekleri hakkında SSS: çevrimiçi arama ve tarayıcı kullanımı, bilgisayar masaüstünü kontrol etme (Kimi Computer Use), görsel/video/ses üretme, kod yazma, web sitesi oluşturma, PPT ve elektronik tablo hazırlama, dosya işleme, bellek, çok dilli destek ve bağlam uzunluğu."
/>

# Kimi neler yapabilir?

## Kimi internette arama yapıp web sayfalarında gezinebilir mi?

Evet. Kimi, bir soru için çevrimiçi erişimin gerekip gerekmediğine otomatik olarak karar verir ve bilgi almak için yerleşik arama araçlarını kullanır. **Kimi Code** ve **Kimi Work** içinde, **WebBridge** ile Kimi bir tarayıcıyı insan gibi kullanabilir: sayfalarda gezinebilir, tıklayabilir, kaydırabilir, veri çıkarabilir ve çok adımlı web görevlerini tamamlayabilir.

## Kimi bilgisayarımın masaüstünü kullanabilir mi?

Normal sohbetlerde ve Agent görevlerinde Kimi’nin bilgisayarınızı kullanma **izni yoktur**. **Kimi Work’te bu özelliği isterseniz kendiniz etkinleştirebilirsiniz**.

Kimi Work’te **Kimi Computer Use** ile Kimi sizin için masaüstünüzde tıklayabilir, yazı yazabilir, kaydırabilir, sürükleyebilir ve bir uygulamanın arayüz içeriğini ya da ekran görüntülerini okuyabilir. Örneğin: “Benim için X’e tıkla”, “Y alanına … gir”, “Z uygulamasının mevcut durumunu kontrol et” veya “Şu anda açık olan uygulamaları listele.” Tüm işlemler arka planda çalışır; bu nedenle Kimi farenizin kontrolünü ele almaz veya ön plandaki pencereyi değiştirmez.

**Nasıl kurulur**: Kimi Work’te “Eklentiler”e tıklayın, “Kimi Computer Use”ı seçin ve Kur’a tıklayın. Kurulum için “Work” modunda aşağıdaki talimatı da gönderebilirsiniz:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Lütfen benim için kimi computer-use yükle: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kimi görsel, video ve ses üretebilir mi?

Evet. Kimi, yaratıcı tasarım eklentileriyle görsel, video ve ses üretebilir. Kullanmadan önce ilgili eklentiyi eklenti pazarından kurun:

- **Görsel üretimi**: Metin açıklamalarından yüksek kaliteli görseller üretir. 1K/2K/4K çözünürlükleri, birden çok en-boy oranını, isteğe bağlı opak veya şeffaf arka planları ve JPG / PNG çıktısını destekler.
- **Video üretimi**: Metin açıklamalarından, isteğe bağlı referans görsellerle birlikte yüksek kaliteli videolar üretir. 16:9, 4:3, 1:1, 3:4, 9:16 ve 21:9 gibi en-boy oranlarını ve 4–12 saniyelik süreleri destekler.
- **Ses üretimi**: Birden fazla Mandarin sesiyle metinden konuşmaya dönüştürmeyi veya İngilizce açıklamalardan ses efekti üretimini destekler; süre aralığı 0.5–22 saniyedir.

## Kimi kod yazabilir, web sitesi oluşturabilir, PPT ve elektronik tablo hazırlayabilir mi?

Evet. Görevleri otonom olarak yürütebilen bir AI Agent olarak Kimi; web sitesi oluşturma, PPT hazırlama, belge ve elektronik tablo işleme, Deep Research ve daha fazlasını destekler.

## Kimi hangi dosyaları işleyebilir?

Kimi; PDF, Word, Excel, PPT, görseller, TXT ve video gibi yaygın biçimleri destekler. **Her dosyanın boyutu en fazla 100 MB olabilir ve tek seferde en çok 50 dosya yükleyebilirsiniz**.

## Kimi’nin belleği var mı?

Evet. [Bellek](/features/memory-space), Kimi’nin sizi daha iyi anlayabilmesi için önemli bilgileri otomatik olarak kaydeder. Belleği ve materyalleri projelere göre ayrı tutmanız gerekiyorsa [Proje](/features/project) özelliğini kullanın.

## Kimi birden fazla dili destekliyor mu?

Evet. Arayüz dilini **“Ayarlar” → “Genel” → “Dil”** bölümünden değiştirebilirsiniz. Şu anda desteklenen diller arasında Almanca, Rusça, Fransızca, Geleneksel Çince, Korece, Portekizce, Tayca, Türkçe, İspanyolca, İtalyanca, Endonezce, İngilizce ve Vietnamca bulunur. K2.6 ve K3; çok dilli sohbet, erişim ve içerik üretimini destekler.

## Kimi tek seferde ne kadar içerik işleyebilir?

K2.6, tek turda yaklaşık **128K token’lık bağlama (yaklaşık 50.000–60.000 Çince karakter)** sahiptir. Çok uzun belgeler için **K3, 1 milyon token’lık bağlam** sunar (en yüksek üyelik kademesi gerekir). Ayrıntılar için [Bir sohbet 200.000 Çince karakteri aşarsa ne yapmalıyım?](/others/chat-issues) bölümüne bakın.
