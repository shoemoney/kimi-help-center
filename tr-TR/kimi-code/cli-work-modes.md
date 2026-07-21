---
title: "Çalışma Modları"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Kimi Code CLI içinde Plan modunu ve Thinking mode’u nasıl kullanacağınızı ve hangi durumlarda tercih edeceğinizi öğrenin."
---

<SeoMeta
  title="Kimi Code CLI Çalışma Modları - Kimi Yardım Merkezi"
  description="Kimi Code CLI içinde Plan modunu ve Thinking mode’u nasıl kullanacağınızı ve hangi durumlarda tercih edeceğinizi öğrenin."
/>

# Çalışma Modları

## Plan modu

Plan modu, yapay zekanın kod yazmaya başlamadan önce bir uygulama planı oluşturmasını sağlayan salt okunur bir planlama modudur; böylece yanlış yöne harcanacak emeğin önüne geçilir.

Plan modunda yapay zeka, kod tabanını incelemek için yalnızca salt okunur araçları (`Glob`, `Grep`, `ReadFile`) kullanabilir. Hiçbir dosyayı değiştiremez veya komut çalıştıramaz. Yapay zeka planı özel bir plan dosyasına yazar ve ardından onayınıza sunar. Planı onaylayabilir, reddedebilir veya düzeltme yorumları ekleyebilirsiniz.

### Plan moduna girme

Plan moduna dört şekilde girebilirsiniz:

- **Başlangıç seçeneği**: Yeni bir oturumu doğrudan Plan modunda başlatmak için `kimi --plan` kullanın
- **Klavye kısayolu**: Plan modunu açıp kapatmak için `Shift-Tab` tuşlarına basın
- **Slash komutu**: `/plan` veya `/plan on` girin
- **Yapay zeka tarafından başlatma**: Karmaşık görevlerde yapay zeka, `EnterPlanMode` aracı üzerinden Plan moduna geçmek isteyebilir. Kabul edebilir veya reddedebilirsiniz

Ayrıca yapılandırma dosyasında `default_plan_mode = true` ayarlayarak her yeni oturumun varsayılan olarak Plan modunda başlamasını sağlayabilirsiniz.

Plan moduna girdikten sonra istem `📋` olarak değişir ve alt durum çubuğunda mavi bir `plan` göstergesi görünür.

### Planları inceleme ve onaylama

Yapay zeka planı tamamladığında, `ExitPlanMode` üzerinden onaya sunar. Onay panelinde planın tamamı gösterilir. Şunları yapabilirsiniz:

- **Yürütmeyi onayla**: Plan birden fazla uygulama yolu içeriyorsa yapay zeka, aralarından seçim yapmanız için 2–3 etiketli seçenek (örneğin "Plan A" veya "Plan B (Önerilen)") listeler. Birini seçtikten sonra yapay zeka Plan modundan çıkar ve seçtiğiniz yolu yürütür. Yalnızca tek bir yol varsa **Onayla** düğmesi gösterilir
- **Reddet**: Planı reddeder ve Plan modunda kalırsınız. Geri bildiriminizi konuşmada iletebilirsiniz
- **Reddet ve Çık**: Planı reddeder ve tek adımda Plan modundan çıkarsınız
- **Düzelt**: Düzeltme yorumları girersiniz. Yapay zeka planı buna göre günceller ve yeniden sunar

Tam planı tam ekran sayfalayıcıda görüntülemek için `Ctrl-E` tuşlarına basın.

### Plan modunu yönetme

Plan modunu yönetmek için `/plan` komutunu kullanın:

- `/plan`: Plan modunu açar veya kapatır
- `/plan on`: Plan modunu açar
- `/plan off`: Plan modunu kapatır
- `/plan view`: Geçerli planı görüntüler
- `/plan clear`: Geçerli plan dosyasını temizler

## Thinking mode

Thinking mode, yapay zekanın yanıt vermeden önce daha derin düşünmesini sağlar; bu nedenle karmaşık problemler için uygundur.

Modeller ve Thinking mode arasında geçiş yapmak için `/model` komutunu kullanabilirsiniz. Bir model seçtikten sonra, model Thinking mode’u destekliyorsa sistem bunu etkinleştirmek isteyip istemediğinizi sorar. Başlangıçta `--thinking` seçeneğiyle de etkinleştirebilirsiniz:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> İpucu: Thinking mode, geçerli model tarafından desteklenmelidir. `kimi-k2-thinking-turbo` gibi bazı modeller Thinking mode’u her zaman kullanır ve kapatılamaz.
