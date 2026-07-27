---
title: "Kimi WebBridge Kullanım Senaryosu Demosu"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge Kullanım Senaryosu Demosu - Kimi Yardım Merkezi"
  description="Seyahat planlama, kiralık ev arama, literatür araştırması ve daha fazlası için Skill ve CLI örnekleri de dahil olmak üzere tipik Kimi WebBridge kullanım senaryolarını keşfedin."
  ogType="article"
/>

# Kimi WebBridge Kullanım Senaryosu Demosu

Kimi WebBridge, bir Agent’ın tarayıcıyı gerçek bir kişi gibi kullanmasını sağlar; zaten oturum açtığınız web sitelerinde otomatik olarak gezinir, bilgileri çıkarır ve düzenler.

<Callout type="tip">
WebBridge kullanırken görev tanımınız ne kadar net olursa, Agent görevi o kadar isabetli tamamlar. Hedef web sitesini, filtreleri ve istediğiniz çıktı formatını belirtmenizi öneririz. Sayfa yapısı karmaşıksa, devam etmeden önce sayfanın durumunu doğrulamak için Agent’tan önce ekran görüntüsü almasını da isteyebilirsiniz.
</Callout>

Pratikte WebBridge çoğu zaman Skill ve CLI ile birlikte kullanılır: Skill; hangi web sitelerine gidileceği, bilgi toplamak için hangi adımların izleneceği ve sonuçların nasıl düzenleneceği gibi görev deneyimini kaydeder. CLI ise arama yapma, sayfaları okuma, dosya indirme ve yapılandırılmış verileri sorgulama gibi somut yetenekler sunar.

AI Agent’a web’de tekrar tekrar yaptığınız işi tek cümleyle anlatın. Sizin için gerçek Chrome oturumunuzu doğrudan kullanan bir CLI oluşturabilir; API gerekmez, API Token yapılandırmanız veya yönetmeniz gerekmez.

Aşağıdaki senaryolarda kullanılan Skills ve CLI’lar bu yöntemle oluşturuldu. Bunları doğrudan kurup kullanabilir veya referans örnek olarak değerlendirebilirsiniz.

<Callout type="warning">
Bu sayfada sunulan Skills ve CLI’lar yalnızca eğitim ve teknik paylaşım amaçlıdır. Herhangi bir çekinceniz varsa lütfen <a href="mailto:support@moonshot.ai">support@moonshot.ai</a> adresinden bizimle iletişime geçin.
</Callout>

## Bilgi Arama ve Düzenleme

Birden fazla web sitesinde arama yapmanız gerektiğinde WebBridge, Agent’ın hedef sayfaları otomatik olarak açmasını, önemli içeriği çıkarmasını ve yapılandırılmış çıktıya dönüştürmesini sağlar. Böylece sayfaları tek tek açıp elle kopyalayıp yapıştırma zahmetinden kurtulursunuz.

### Seyahat Planlama

Uçuş platformları, otel rezervasyon siteleri ve seyahat toplulukları arasında geçiş yaparak fiyatları ve saatleri karşılaştırın; ardından gezi planlarını, bütçe tablolarını ve konaklama önerilerini düzenleyin.

İlgili araçlar:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kasım ayında iki kişi için Kyoto’ya 5 günlük, 4 gecelik bir seyahat planlıyorum; bütçem yaklaşık 8.000 RMB. Lütfen uçuşları, otelleri ve turistik yerlerin açılış saatlerini kontrol edin; sonuçları gün gün gezi planı ve bütçe tablosu olarak düzenleyin.",
    },
  ]}
/>

Kurulum ve kullanım:

1. [Sürümler](https://github.com/better-world-ai/x-cli/releases) sayfasından ctrip-cli ve booking-cli indirin
2. `npx skills add better-world-ai/x-cli --skill travel-planning` komutunu çalıştırın
3. Kimi Code, Claude Code, Codex CLI veya Cursor gibi Skill uyumlu bir istemci üzerinden yerel bir Agent açın ve yukarıdaki istemi gönderin

### Kiralık İlan Eleme

Birden fazla kiralama platformunda aynı anda arama yapın; ilanları kira, ulaşım süresi, daire tipi ve diğer ölçütlere göre filtreleyin, bilgileri birleştirin ve önerileri sıralayın.

İlgili araçlar:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Şanghay’da Zhangjiang Hi-Tech Park Station yakınında kiralık ev bulmama yardımcı olun. Bütçem 4.500 RMB içinde, ulaşım süresi 40 dakikanın altında olmalı ve tercihen 1+1 tüm daire istiyorum. Birden fazla platformu açın; ilan bağlantılarını, fiyatları, metrekareleri ve ulaşım sürelerini düzenleyin, ardından öncelikli iletişim listesi hazırlayın.",
    },
  ]}
/>

Kurulum ve kullanım:

1. [Sürümler](https://github.com/better-world-ai/x-cli/releases) sayfasından 58-cli, anjuke-cli, apartments-cli, rightmove-cli ve idealista-cli indirin
2. `npx skills add better-world-ai/x-cli --skill rental-assistant` komutunu çalıştırın
3. Kimi Code, Claude Code, Codex CLI veya Cursor gibi Skill uyumlu bir istemci üzerinden yerel bir Agent açın ve yukarıdaki istemi gönderin

## İçerik Araştırma ve Analizi

WebBridge, Agent’ın arama sonuçlarını otomatik olarak gezmesine, ayrıntı sayfalarını açmasına, başlıkları, verileri, yorumları ve diğer bilgileri çıkarmasına; ardından bunları analiz edip özetlemesine yardımcı olur. Çok sayıda web sayfası gezmeyi gerektiren araştırma işleri için çok uygundur.

### Literatür Araştırması

Akademik literatürde arama yapın; makale özetlerini, temel yöntemleri, deneysel sonuçları ve atıf ilişkilerini çıkarın, yapılandırılmış bir inceleme çıktısı alın.

İlgili araçlar:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Lütfen AI Agent belleği üzerine son iki yıldaki temsilî makaleleri araştırın; başlıkları, yazarları, özetleri, temel yöntemleri ve açık kaynak bağlantılarını düzenleyin, araştırma çizgisini özetleyin.",
    },
  ]}
/>

Kurulum ve kullanım:

1. [Sürümler](https://github.com/better-world-ai/x-cli/releases) sayfasından scholar-cli indirin
2. `npx skills add better-world-ai/x-cli --skill paper-research` komutunu çalıştırın
3. Kimi Code, Claude Code, Codex CLI veya Cursor gibi Skill uyumlu bir istemci üzerinden yerel bir Agent açın ve yukarıdaki istemi gönderin

### Derinlemesine Konu Arama

Bilmediğiniz bir konuyu anlamak istediğinizde eski yöntem şuydu: arama motorunu açmak, her sonuca tek tek tıklayıp okumak, önemli noktaları kopyalamak ve notlara dönüştürmek—yarım gün giderdi.

Bu süreci sizin için AI çalıştırsın: otomatik arama yapar, sonuçları takip ederek tam metni alır ve ister sizin için bir özet sentezler, ister okumanız için özgün metni saklar. Araştırma konuları, bir alandaki yeni gelişmeleri takip etme veya yazı için malzeme toplama gibi işlerde, bilgileri tek yerde toplamak için önce bunu kullanın.

İlgili araçlar:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "2025’te kullanmaya değer yerel AI modellerini arayın ve ilk 10 sonucun tam metnini alın.",
    },
  ]}
/>

Kurulum ve kullanım:

1. [Sürümler](https://github.com/better-world-ai/x-cli/releases) sayfasından google-cli veya baidu-cli indirin
2. Kimi Code, Claude Code, Codex CLI veya Cursor gibi Skill uyumlu bir istemci üzerinden yerel bir Agent açın ve yukarıdaki istemi gönderin

## Günlük Ofis Desteği

Tekrarlayan web işlemlerini halletmek ve iş verimliliğini artırmak için WebBridge’in otomasyon yeteneklerinden yararlanın.

### E-ticaret Fiyat Karşılaştırması

Aynı ürünü birden fazla e-ticaret platformunda arayın; fiyatları, teknik özellikleri ve kullanıcı yorumlarını karşılaştırın, en iyi satın alma seçeneklerini düzenleyin.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Yaklaşık 2.000 RMB bütçeyle 27 inç 4K monitör almak istiyorum. Lütfen ana akım e-ticaret platformlarında seçenekleri arayıp karşılaştırın; fiyatları, markaları ve kullanıcı yorumlarını düzenleyin, fiyat-performansı en iyi seçenekleri önerin.",
    },
  ]}
/>

### Web Verisi Çıkarma

Web sayfalarından tablo ve liste gibi yapılandırılmış verileri çıkarın ve bunları belirtilen formatta otomatik olarak düzenleyin; elle kopyalayıp yapıştırma zahmetinden kurtulun.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Lütfen bu web sayfasını açmama yardımcı olun, sayfadaki ürün fiyat tablosunu çıkarın ve net bir liste olarak çıktılayın.",
    },
  ]}
/>

Daha fazla kullanım senaryosu için [Kimi WebBridge resmî web sitesine](https://www.kimi.com/zh-cn/features/webbridge) bakın.
