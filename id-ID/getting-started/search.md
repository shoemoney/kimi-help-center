---
title: "Agentic Search"
slug: "search"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Agentic Search untuk Panduan dan Jawaban - Pusat Bantuan Kimi"
  description="Agentic Search Kimi dibangun di atas arsitektur end-to-end agentic reinforcement learning. Berbeda dengan pendekatan orkestrasi alat tradisional, AI dapat..."
/>

# Agentic Search

<Callout type="info">
Agentic Search Kimi dibangun di atas arsitektur end-to-end agentic reinforcement learning. Berbeda dengan pendekatan orkestrasi alat tradisional, AI dapat secara mandiri menentukan kapan harus mencari, alat mana yang akan digunakan, dan bagaimana menyesuaikan strateginya — memungkinkan tugas pengumpulan dan pengolahan informasi yang kompleks.
</Callout>

Dibandingkan dengan pencarian berbasis pencocokan kata kunci tradisional, kemampuan pencarian Kimi telah mengalami dua evolusi besar:
- **Explorer Search** (Oktober 2024) memadukan pemahaman semantik large language model dengan pengambilan informasi waktu nyata, secara otomatis menguraikan pertanyaan kompleks dan menelusuri sumbernya.
- **Agentic Search** melangkah lebih jauh dengan perencanaan mandiri dan pemanggilan alat, mendukung kueri data finansial, penelusuran literatur akademis, pencarian gambar, dan tugas multimodal lainnya.

## Pengaturan web search

<Frames
  src="./images/search/web-search.png"
  alt="Web search"
/>

Web search (Auto/Off) mengatasi keterbatasan pengetahuan model yang tidak selalu mutakhir, sehingga menghadirkan informasi yang aktual, tepercaya, dan dapat ditelusuri.

Ketuk sakelar "Web search" di bawah kotak input obrolan. Saat diaktifkan, Kimi secara mandiri menentukan apakah pertanyaan saat ini membutuhkan data waktu nyata, lalu dengan cerdas memanggil mesin pencari dan basis data vertikal untuk mengambil dan merangkai informasi.

## Kemampuan inti

### 1. Informasi terkini yang tepercaya
Pengambilan informasi web secara waktu nyata mencakup 100+ sumber tepercaya yang terverifikasi (media berita utama, pengumuman pemerintah, platform data finansial, basis data jurnal akademis) — memastikan informasi selalu mutakhir sekaligus otoritatif.

### 2. Atribusi sumber
Semua jawaban berbasis pencarian menyertakan tautan sumber rujukan. Ketuk untuk membuka halaman aslinya dan memverifikasi akurasi serta konteksnya secara menyeluruh.

### 3. Akses informasi global
Mendukung percakapan bahasa alami dalam berbagai bahasa. Kimi dapat secara proaktif menelusuri sumber non-Inggris (misalnya dokumentasi teknis berbahasa Jepang, berita berbahasa Prancis) dan secara otomatis merangkai informasi multibahasa.

## Kasus penggunaan yang direkomendasikan

- Berita dan pembaruan waktu nyata (berita terkini, data pasar saham, perubahan kebijakan)
- Verifikasi fakta (kabar burung di internet, data historis, metodologi statistik)
- Riset profesional (intelijen kompetitor, perkembangan akademis terdepan, standar industri)

## Lencana sumber otoritatif

Web search Kimi menyaring sumber dari tiga dimensi — relevansi, otoritas, dan kekinian — secara otomatis menyingkirkan situs berisiko, sindikasi duplikat, konten web berkualitas rendah, dan informasi halusinasi demi memastikan hasil yang andal.

Sumber berkualitas tinggi yang lolos penyaringan ketat Kimi ditandai dengan lencana otoritas dalam respons (misalnya ikon sertifikasi situs resmi, sertifikasi akademis, sertifikasi media), membantu Anda mengenali informasi yang sangat tepercaya dengan cepat.

**Mekanisme penyaringan sumber**:
- **Disingkirkan**: Situs agregator berkualitas rendah, media sosial pribadi yang tak terverifikasi, halaman cache kedaluwarsa
- **Diprioritaskan**: Situs lembaga pemerintah, media otoritatif, jurnal akademis, kanal pelaporan finansial resmi

## Sumber data finansial & akademis

<Frames
  src="./images/search/screenshot-5.png"
  alt="screenshot 5"
/>

Dalam skenario profesional, Kimi mendukung kueri ke basis data domain vertikal untuk memperoleh data profesional yang terstruktur dan dapat ditelusuri.

<Frames
  src="./images/search/screenshot-6.png"
  alt="screenshot 6"
/>

Cukup sampaikan permintaan Anda dalam percakapan, dan Kimi akan secara otomatis memilih sumber data yang sesuai.

### Contoh kueri

- "Cari data pendapatan Apple selama lima tahun terakhir"
- "Telusuri makalah terbaru tentang optimasi inferensi large language model"
- "Bandingkan PDB, PDB per kapita, dan tingkat pengangguran tiga ekonomi terbesar dunia"

### Sumber data yang didukung

| Sumber | Deskripsi |
|--------|-------------|
| **Global Finance Data** | Data finansial saham, futures, indeks, dan lainnya secara global |
| **Academic Data** | Jurnal, makalah, preprint, disertasi, paten, dan sebagainya |
| **Stock Finance Data** | Data finansial saham, futures, indeks, dan lainnya untuk China maupun global |
| **World Bank Data** | PDB, populasi, ketenagakerjaan, perdagangan antarnegara, dan sebagainya |

## Pencarian cerdas

### Pencarian gambar

Kimi mendukung pencarian dan pemahaman berbasis gambar. Setelah Anda mengunggah gambar, Kimi dapat secara otomatis memanggil alat pencarian gambar untuk mengidentifikasi isinya dan mengambil informasi terkait.

**Contoh kueri**:
- "Ini lokasi di mana?"
- "Apa yang terjadi di meme ini / apa yang dikatakan orang ini?"
- "Cari McDonald's yang asli"

**Cara penggunaan**:
- Unggah gambar secara langsung (mendukung format JPG, PNG, dan lainnya)
- Deskripsikan isi gambar atau ajukan pertanyaan terkait gambar dalam prompt Anda
- Kimi akan memadukan pengenalan gambar dengan web search untuk memberikan asal gambar, gambar serupa, dan informasi terkait

**Skenario umum**:
- Mengidentifikasi objek, landmark, atau model produk yang tak dikenal
- Menemukan sumber atau asal sebuah gambar
- Menganalisis data dalam grafik atau tangkapan layar dan mengambil informasi latar yang relevan

### Akses URL langsung

Kimi Search mendukung akses URL langsung untuk mengambil sumber daya dari internet.

<Frames
  src="./images/search/screenshot-22.png"
  alt="screenshot 22"
/>

**Tempel URL langsung ke dalam percakapan**, dan Kimi akan secara otomatis mengambil serta menganalisis isi halaman tersebut.

**Contoh kasus penggunaan**:
- Rangkum poin-poin penting artikel ini
- Ekstrak data kunci dari PDF laporan keuangan ini
- Cari informasi gambar dari URL

## Tips

<Callout type="warning">
- Utamakan tautan yang **dapat diakses publik** (misalnya halaman berita, dokumen PDF publik)
- Beberapa halaman yang **dilindungi kata sandi** atau dibatasi penjelajahan mungkin tidak dapat diakses
- Untuk halaman yang **dimuat secara dinamis**, Kimi mungkin hanya bisa mengambil konten HTML awalnya
- Kimi **tidak dapat membaca ulang tautan percakapan yang dibagikan** (yaitu tautan ke obrolan Kimi lainnya)
</Callout>
