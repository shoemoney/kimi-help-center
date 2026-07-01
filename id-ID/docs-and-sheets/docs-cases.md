---
title: "Contoh penggunaan & pustaka prompt Kimi Docs"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Contoh penggunaan & pustaka prompt Kimi Docs - Pusat Bantuan Kimi"
  description="Contoh penggunaan dan prompt untuk Kimi Docs — mulai dari penyuntingan naskah hingga penerjemahan profesional dan desain PDF."
/>

# Contoh penggunaan & pustaka prompt Kimi Docs

<Callout type="info">
Contoh penggunaan dan prompt untuk Kimi Docs — mulai dari penyuntingan naskah hingga penerjemahan profesional dan desain PDF.
</Callout>

## Pakar penyuntingan

Layaknya penyunting naskah yang teliti, Kimi menguraikan masukan revisi, menunjukkan dengan tepat bagian yang relevan dalam dokumen Anda, lalu otomatis menyisipkan komentar serta saran yang rinci.

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
    },
  ]}
/>

## Penerjemahan profesional

Layaknya penerjemah yang tak kenal lelah, Kimi menerjemahkan PDF berbahasa Inggris setebal 50 halaman ke bahasa Prancis halaman demi halaman, dengan tetap mempertahankan seluruh rumus dan kode pada hasilnya.

**Contoh prompt**:

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
  alt="Terjemahkan"
/>

## Layanan desain & penerbitan PDF

Layaknya desainer tata letak, Kimi membantu Anda merancang elemen visual, menata teks dan gambar secara otomatis, serta menghasilkan portofolio PDF berkualitas penerbitan.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black & white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English & Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods & Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar & Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall & Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
    },
  ]}
/>

## Skenario lain & contoh prompt

| Skenario | Contoh prompt |
|------|-----------|
| **Laporan profesional** | Tulis "Buku Putih Industri Ekonomi Ketinggian Rendah China 2026" dalam Word, dengan gaya McKinsey, mencakup ukuran pasar, lanskap persaingan, konteks kebijakan, dan rekomendasi investasi |
| **Tinjauan kontrak** | [Unggah contract.docx] Tinjau kontrak ini dari sudut pandang pengacara, identifikasi klausul berisiko, dan sisipkan komentar |
| **Pemodelan keuangan** | Bangun model proyeksi keuangan SaaS tiga tahun dalam Word, mencakup proyeksi pendapatan, struktur biaya, dan arus kas |
| **Penyaringan dokumen panjang** | Saring makalah akademis 30.000 kata ini menjadi ringkasan eksekutif 5.000 kata dalam format Word |
| **Perbandingan beberapa versi** | [Unggah Kontrak V1 dan V2] Bandingkan kedua versi, daftarkan semua perubahan beserta deskripsi dampaknya, dan keluarkan sebagai Word |
