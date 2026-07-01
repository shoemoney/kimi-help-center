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
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
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
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
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
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black & white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English & Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods & Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar & Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall & Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
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
