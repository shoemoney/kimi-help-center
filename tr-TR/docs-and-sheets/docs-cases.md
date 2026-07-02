---
title: "Kimi Docs kullanım senaryoları ve istem kütüphanesi"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Docs kullanım senaryoları & istem kütüphanesi - Kimi Yardım Merkezi"
  description="Kimi Docs için örnek kullanım senaryoları ve istemler — el yazması incelemesinden profesyonel çeviriye ve PDF tasarımına kadar."
/>

# Kimi Docs kullanım senaryoları ve istem kütüphanesi

<Callout type="info">
Kimi Docs için örnek kullanım senaryoları ve istemler — el yazması incelemesinden profesyonel çeviriye ve PDF tasarımına kadar.
</Callout>

## İnceleme uzmanı

Titiz bir el yazması incelemecisi gibi Kimi, düzeltme geri bildirimlerini ayrıştırır, belgenizdeki ilgili pasajları tam olarak belirler ve ayrıntılı yorumlar ile önerileri otomatik olarak ekler.

**Örnek istem**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Akıllı şehirler ve bölgesel planlama alanında uzmanlaşmış kıdemli bir metin hakemisin.\nAşağıda belirli inceleme yorumlarından oluşan bir dizi bulunuyor. Bu sorunları dikkatlice incele,\nekteki Word belgesinde ilgili paragrafları veya şekilleri bul ve\nsorunları ayrıntılı düzeltme önerileriyle birlikte yorum olarak ekle. Not:\nyorumlar yapay zeka tarafından değil, bir insan tarafından yazılmış gibi okunmalı — madde işaretli biçimlendirmeden kaçın.\n\nÖzgün metni ayrıntılı yorumlarla birlikte ver.",
    },
  ]}
/>

## Profesyonel çeviri

Yorulmak bilmeyen bir çevirmen gibi Kimi, 50 sayfalık İngilizce bir PDF'yi sayfa sayfa Fransızcaya çevirir ve çıktıda tüm formülleri ve kodu korur.

**Örnek istem**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Stanford'ın CS336 dersinin ilk ödevinin PDF'sini İngilizce olarak bul, ardından\nonu Fransızca bir PDF'ye dönüştür. Tüm kodu ve matematiksel formülleri Fransızca sürümde koru.\nÇeviri akıcı olmalı — hiçbir içeriği çıkarma veya ekleme.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Çeviri"
/>

## PDF tasarımı ve yayıncılık hizmeti

Bir mizanpaj tasarımcısı gibi Kimi, görsel öğeleri planlamanıza yardımcı olur, metni ve görselleri otomatik olarak düzenler ve yayın kalitesinde PDF portföyleri oluşturur.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Modern sanat, özellikle Picasso çalışmaları konusunda uzmanlaşmış bir küratöryel yayıncılık yapay zekâsısın.\nGörevin: izleyicilerin Picasso'nun neden defalarca yeniden ziyaret edilmesi gerektiğini anlamasına yardımcı olmak için\nzengin bir görsel malzeme kullanmak.\n\nDoğrudan PDF olarak çıktı ver.\n\nI. Temel Gereksinimler\nZengin görsel malzeme\nHer dönem, her sanatçı göndermesi ve her akım destekleyici görsellerle sunulmalı\nKaynağı belli görselleri önceliklendir\nYalnızca kaynağı belli görsel bulunmadığında yüksek doğrulukta yapay zekâ üretimi görseller kullan\n\nII. Görsel Sistem\nTam sayfa filigran olarak MAP Logosu\nAsimetrik düzen\nKontrollü yerel kırılmalar içeren net bir ızgara\nYüksek kontrastlı siyah beyaz + birincil renk vurguları\n\nIII. İçerik Yapısı (tüm bölümleri oluştur)\n1. Kapak\nPicasso\nSergi alt başlığı (English & Chinese)\nMAP Logosu filigranı\n\n2. Neden Picasso (görsellerle)\nFarklı dönemlerden Picasso portreleri\nFarklı dönemlerden yan yana getirilmiş eserler\n\n3. Dönemler ve Akımlar (görsel odaklı)\nHer dönem 8-12 görsel içermeli:\nMavi Dönem\nPembe Dönem\nKübizm (Analitik / Sentetik)\nSavaş ve Politika\nGeç Dönem Deneyler\n\nGörsel türleri:\nEserin tamamı\nDetay kırpmaları\nYapısal yapısöküm şemaları (gerektiğinde yapay zekâ üretimi)\n\n4. Önemli Eserler\n25'ten az olmamak üzere eser\nBazı eserler tam sayfa yer kaplayabilir\nYapıya, perspektife ve yapısöküme vurgu\n\n5. Picasso'ya Nasıl Bakılır\nGörsele dayalı karşılaştırmalı açıklamalar\nAynı konunun yan yana ele alınışı\n\n6. Sergi Salonu ve Ritim\nYüksek yoğunluklu izleme alanları\nDüşünmeye olanak tanıyan tampon alanlar\n\n7. MAP'in Çağdaş Konumu\nŞanghay'ın neden Picasso'ya ihtiyacı olduğu\nBu anın neden önemli olduğu",
    },
  ]}
/>

## Diğer senaryolar ve örnek istemler

| Senaryo | Örnek istem |
|------|-----------|
| **Profesyonel rapor** | Word'de McKinsey tarzında bir "2026 Çin Düşük İrtifa Ekonomisi Sektör Beyaz Belgesi" yaz; pazar büyüklüğü, rekabet ortamı, politika bağlamı ve yatırım önerilerini kapsasın |
| **Sözleşme incelemesi** | [contract.docx yükleyin] Bu sözleşmeyi bir avukatın bakış açısıyla incele, riskli maddeleri belirle, yorum ekle |
| **Finansal modelleme** | Word'de üç yıllık bir SaaS finansal tahmin modeli oluştur; gelir projeksiyonları, maliyet yapısı ve nakit akışını içersin |
| **Uzun metin özetleme** | Bu 30.000 kelimelik akademik makaleyi Word formatında 5.000 kelimelik bir yönetici özetine indirge |
| **Çoklu sürüm karşılaştırması** | [Sözleşme V1 ve V2 yükleyin] Sürümleri karşılaştır, tüm değişiklikleri etki açıklamalarıyla listele, Word olarak çıktı ver |
