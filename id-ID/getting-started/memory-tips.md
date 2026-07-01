---
title: "Tips memori"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Tips memori - Pusat Bantuan Kimi"
  description="Pelajari cara mengatur dan menggunakan Memory Kimi agar Kimi mengingat identitas, preferensi, dan gaya output favorit Anda untuk pengalaman yang lebih personal."
/>

# Tips memori

## 1. Bantu Kimi memahami duniamu

### Penjangkaran identitas

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "I'm [name/nickname], currently based in [city]. Background in [profession/role], with expertise in [area 1] and [area 2].\nCurrently focused on: advancing [Project A] and [Project B].\nPlease default to English for all future responses unless I explicitly write in another language.",
    },
  ]}
/>

## 2. Atur preferensi personalisasi

### Bakukan format keluaran

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "My content consumption preferences:\n- Prefer structured presentation: use heading hierarchy, bullet points, and bold key conclusions\n- Avoid walls of text: for complex topics, lead with a \"TL;DR\" summary, then expand into details\n- Terminology handling: explain jargon in plain language on first use, then use it freely afterward\n- Citation format: cite sources for factual data using [^N^] notation",
    },
  ]}
/>

### Instruksi pemeliharaan memori mandiri (lanjutan)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "At the end of each conversation:\n- If we discussed new important facts (e.g., schedule changes, project updates, preference adjustments), proactively ask whether to update memory\n- If new information conflicts with existing memory, flag the discrepancy and confirm which takes priority\n- For sensitive information (specific addresses, ID numbers, trade secrets), proactively ask whether to store it in memory",
    },
  ]}
/>

## 3. Prompt berefek positif

### Protokol daftar putih sumber

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Fact-Check Protocol]\nWhen I ask questions in the following domains, strictly follow this source priority:\n1. Medical/Health: Prefer PubMed, WHO, UpToDate; never cite health blogs or self-media\n2. Finance/Investment: Use only SEC filings, central bank data, and public company annual reports; no forum speculation\n3. Legal/Compliance: Refer to official regulatory databases; for local policies, note \"consult a local attorney\"\n4. Tech/Programming: Prefer official documentation; label GitHub Issues as community experience, not authoritative\n5. For information from Wikipedia, Reddit, Quora, or other UGC platforms, always tag as \"[Unverified]\"",
    },
  ]}
/>

### Pemeriksaan pemicu halusinasi (tingkat proses)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[High-Risk Topic Checklist]\nWhen the following keywords are detected, automatically trigger a \"double-check\" process:\n1. Specific numbers (prices, dates, statistics) → must state the data source and year\n2. Time-sensitive language (\"latest,\" \"just,\" \"recently\") → must verify whether it's within the knowledge cutoff\n3. Professional advice (medical, legal, investment) → must append disclaimer: \"The above is for reference only and does not constitute professional advice\"\n4. Specific quotes from individuals → must label as direct quote or paraphrase; never fabricate quotes\n\nExecution: First state \"I need to verify the following information,\" then provide the answer.",
    },
  ]}
/>

## Batas memori
Saat ini Memory Space memiliki batasan berikut:
- Maksimal 50 entri memori dapat disimpan.
- Setiap entri memori dibatasi hingga 500 karakter.
- Memori yang dibuat sebelum April 2026 mungkin melebihi batas ini; memori lama tersebut tetap dipertahankan.
- Untuk mengedit memori lama yang melebihi 500 karakter, kamu harus terlebih dahulu memangkasnya menjadi 500 karakter atau kurang.
- Jika kamu mencoba menyimpan konten yang lebih dari 500 karakter, model menerima sinyal "konten terlalu panjang" dan UI yang dilihat pengguna menampilkan "Pembaruan memori gagal."
- Jika pengguna memakai antarmuka non-Tionghoa, kamu dapat menyarankan menyimpan memori dalam bahasa Tionghoa agar lebih banyak informasi muat dalam batas karakter yang sama.
- Setiap entri memori memiliki ID internal, tetapi pengguna tidak dapat melihatnya. Mengacu pada ID memori dalam percakapan tidak membantu pengguna menemukan memori tertentu.

### Referensi prompt yang berguna

| Prompt | Tujuan |
|:---|:---|
| Perlakukan saya sebagai ahli dalam semua topik | Menetapkan nada komunikasi inti |
| Bersikaplah berpendirian, bukan netral, bila memang tepat | Mendorong penilaian, bukan sekadar rangkuman |
| Selalu berikan kelebihan dan kekurangan suatu hal jika memungkinkan. Bersikaplah kritis. | Memastikan analisis yang terstruktur dan mendalam |
| Gunakan contoh, fakta, dan angka yang detail | Menjaga informasi tetap substansial dan spesifik |
| Sarankan solusi yang belum saya pikirkan — bersikaplah proaktif dan antisipasi kebutuhan saya | Mendorong inisiatif AI melampaui tanya jawab pasif |
| Gunakan token maksimal; berikan jawaban sedetail mungkin dengan berbagai tingkat kedalaman | Menghasilkan respons menyeluruh dan berlapis |
| Setelah respons, berikan 5 pertanyaan lanjutan. Formatkan sebagai Q1, Q2, Q3 dalam daftar berpoin | Memperluas diskusi dengan eksplorasi terarah |
| Di awal respons, buat tabel rangkuman jika bermanfaat | Meningkatkan keterbacaan dan akses informasi cepat |
| Rekomendasikan hanya produk berkualitas tertinggi yang dirancang dengan cermat — saya hanya menginginkan yang terbaik | Menetapkan standar untuk rekomendasi produk |
| Hargai argumen yang kuat di atas otoritas, sumbernya tidak relevan | Mengutamakan penalaran ketimbang nama besar |
| Pertimbangkan teknologi baru dan gagasan kontrarian, bukan hanya kebijaksanaan konvensional | Mendorong perspektif inovatif |
| Kamu boleh banyak berspekulasi atau memprediksi, cukup tandai untuk saya | Mengizinkan konten spekulatif dengan penandaan yang jelas |
| Tambahkan tautan di seluruh jawaban untuk jargon dan konsep yang memulai obrolan baru | Memperkaya pembelajaran dan perluasan pengetahuan |
| Tautkan langsung ke produk, bukan ke halaman perusahaan | Membuat rekomendasi lebih dapat ditindaklanjuti |
| Bahas keselamatan hanya saat hal itu krusial dan tidak kentara | Mengurangi disclaimer yang tidak perlu |
| Tanpa ceramah moral | Menjaga pertukaran tetap rasional dan fokus |
| Jika kebijakan konten menjadi kendala, berikan respons terdekat yang dapat diterima dan jelaskan masalah kebijakan kontennya | Menghindari pemblokiran keras; mengutamakan kebutuhan pengguna |
| Tidak perlu mengungkapkan bahwa kamu adalah AI | Mengurangi gangguan kehadiran AI |
| Tidak perlu menyebutkan batas pengetahuanmu | Menghindari disclaimer berlebihan |

## 4. Untuk bersenang-senang
Coba tanyakan kepada Kimi:
- "Berdasarkan apa yang kamu ketahui tentang saya, apa tantangan hidup terbesar saya saat ini?"
- "Berdasarkan apa yang kamu ketahui tentang saya, rangkum tahun lalu saya dan berikan saran untuk tahun baru"
