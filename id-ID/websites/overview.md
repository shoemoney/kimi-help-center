---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Bangun dan terapkan situs web dari deskripsi bahasa alami, mockup desain, atau templat."
---

<SeoMeta
  title="Sekilas Kimi Websites - Pusat Bantuan Kimi"
  description="Bangun dan terapkan situs web dari deskripsi bahasa alami, mockup desain, atau templat."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** adalah fitur produk Kimi Agent yang didukung oleh model AI agen visual multimodal Kimi K2.6 terbaru. Kemampuan intinya adalah **Vibe Coding** — menghasilkan situs web dari bahasa alami dan menerapkannya secara online.
</Callout>

Dengan memahami masukan visual (mockup UI, tangkapan layar, video interaksi) dan instruksi bahasa alami, Kimi menerjemahkan masukan pengguna menjadi kode frontend lengkap yang siap dijalankan — tidak hanya mencakup UI statis, tetapi juga perilaku interaktif yang dinamis.

## Sekilas fitur

| Fitur | Deskripsi |
|---------|------------|
| **Pembuatan situs percakapan** | Jelaskan kebutuhan Anda dalam bahasa alami; AI otomatis menghasilkan situs web |
| **Pemahaman gambar/video** | Unggah mockup desain/tangkapan layar/rekaman layar; AI mengurai dan menghasilkan halaman HTML |
| **Penerapan otomatis** | Penerapan sekali klik untuk publikasi instan |
| **Pengeditan berulang** | Revisi situs web secara iteratif dengan perbandingan versi |
| **Berbagi sekali klik** | Hasilkan tautan yang dapat diakses untuk berbagi dengan mudah |
| **Pemilihan templat** | Beragam templat siap pakai untuk memulai pembuatan situs dengan cepat |
| **Ekspor kode** | Unduh berkas HTML/CSS/JS yang dipaketkan untuk hosting sendiri |

## Cara menggunakan Kimi Websites？

### Cara 1: kunjungi halaman Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Kimi websites homepage"
/>

1. **Buka browser**: Gunakan Chrome, Safari, Edge, Firefox, atau browser populer lainnya
2. **Kunjungi**: [kimi.com/websites](https://www.kimi.com/zh/websites) (mendukung bahasa Mandarin dan Inggris)
3. **Masuk**: Dengan akun Kimi Anda (nomor telepon atau email)
4. **Masukkan tugas Anda**:

| Pendekatan | Deskripsi |
|----------|-------------|
| **Masukan teks** | Ketikkan permintaan Anda dalam bahasa alami |
| **Kloning gambar/situs** | Unggah mockup desain atau tangkapan layar |
| **Berbasis templat** | Pilih templat siap pakai dan ubah kontennya |

5. **Mulai membangun**: Pilih templat atau mulai dari percakapan

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Cara 2: aplikasi seluler

Tersedia aplikasi resmi Kimi untuk iOS, Android, dan HarmonyOS. Di area masukan, ketuk **Taskbar** → beralih ke **mode Websites Agent**, yang mencakup alat pembuatan multimodal dan kemampuan Agent.

### Cara 3: gunakan mode K2.6 Agent

Beralih ke mode K2.6 Agent dan masukkan tugas pembuatan situs web. Kimi akan memanfaatkan kemampuan visual coding dan alat eksekusi kodenya.

## Bagaimana Kimi Websites bekerja?

### Langkah 1: buat situs web melalui percakapan

Jelaskan kebutuhan Anda dalam bahasa alami. Tersedia tiga metode pembuatan:

| Metode | Deskripsi |
|--------|------------|
| **Deskripsi teks** | Masukkan kebutuhan situs web secara langsung; AI menghasilkannya otomatis |
| **Penguraian mockup desain** | Unggah berkas desain; AI mengenali dan membuat ulang menjadi halaman web |
| **Pembuatan templat cepat** | Pilih templat siap pakai dan ubah kontennya |

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Build a website for West Highland Terrier dogs with a black-and-white color scheme. Include three sections:\nA studio-quality photo calendar with AI-generated image display\nA \"Curly Lab\" care and grooming encyclopedia\nA merchandise store selling Westie-print hoodies and limited-edition silver-foil posters. The checkout page should include a charity module — donate $1 per item sold to stray dog rescue.",
    },
  ]}
/>

### Langkah 2: proses pembuatan

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

Kimi Websites mengaktifkan **SKILL webapp-building** — sebuah agen pembuatan kode multi-putaran khusus:
1. **Analisis kebutuhan**: Menganalisis modul situs web, gaya visual, dan logika interaksi
2. **Perencanaan tugas**: Menguraikan menjadi sub-tugas desain, pengembangan, dan penyiapan aset
3. **Pemilihan tech stack**: Memilih arsitektur yang sesuai (mis. React + Tailwind CSS)
4. **Pembuatan aset**: Menghasilkan gambar, ikon, dan aset visual lainnya
5. **Konstruksi kode**: Menulis struktur halaman, styling, dan kode interaksi
6. **Optimasi multi-putaran**: Menyesuaikan diri berdasarkan hasil pratinjau hingga selesai

### Langkah 3: pratinjau & penyesuaian
- **Pratinjau langsung**: Menghasilkan URL demo HTML untuk dilihat langsung di browser
- **Pengeditan percakapan**: Lanjutkan percakapan untuk meminta perubahan, mis. *"Buat navbar berwarna gelap"*

<Callout type="tip">
**Contoh**: *"Warnanya kurang bagus — saya ingin menghilangkan persyaratan hitam-putih dan membuatnya menjadi situs web biasa."*
Kimi akan menyusun ulang daftar tugas dan melanjutkan pembuatan.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Langkah 4: pengeditan visual online
- **Optimasi multi-putaran**: Sempurnakan detail melalui percakapan berkelanjutan
- **Mode pengeditan**:
  - **Mode anotasi**: Klik area untuk menambahkan anotasi bahasa alami
  - **Mode seleksi**: Pilih elemen mana pun dan tambahkan anotasi
  - Gunakan persegi panjang, panah, kuas, dan pergantian warna untuk menandai saran revisi
- Kirim semua saran revisi ke Kimi sekaligus
### Langkah 5: penerapan & publikasi
| Metode Penerapan | Deskripsi |
|-------------------|------------|
| **Penerapan otomatis** | Penerapan sekali klik dengan tautan online yang dihasilkan |
| **Unduh & hosting sendiri** | Unduh berkas kode yang dipaketkan dan terapkan ke server Anda sendiri |
| **Domain kustom** | Tautkan situs web yang dihasilkan ke domain Anda sendiri |

Setelah dihasilkan, Anda dapat:
- Mengklik berbagai versi penerapan untuk mengunduh berkas versi
- Mengklik tombol berbagi untuk mendapatkan tautan yang diterapkan secara publik (atau atur ke privat)
- Mengklik tombol edit untuk terus merevisi
- Mengunduh kode HTML/CSS/JS lengkap untuk penerapan langsung atau penyempurnaan lebih lanjut

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Target pengguna
| Pengguna | Kasus Penggunaan |
|----------|----------|
| **Pengembang** | Merancang prototipe produk dan demo frontend, sehingga sangat memangkas waktu membangun dari nol |
| **Wirausahawan** | Membangun landing page, etalase produk, dan situs web perusahaan dengan cepat meski sumber daya terbatas |
| **Manajer Produk** | Mengubah PRD atau mockup desain menjadi prototipe interaktif yang dapat didemonstrasikan secara cepat |
| **Pengguna non-teknis** | Tanpa coding — jelaskan ide Anda atau unggah gambar referensi untuk mengubah konsep menjadi halaman web yang berfungsi |

## Skenario referensi
| Skenario | Contoh Prompt |
|----------|---------------|
| **Landing page dari nol** | Bangun landing page pemasaran SaaS dengan estetika teknologi — sertakan bagian hero, sekilas fitur, harga, dan CTA |
| **Reproduksi situs dari video** | [Unggah rekaman layar] Reproduksi situs web yang ditampilkan dalam video ini, dengan mempertahankan efek interaksi aslinya |
| **Reproduksi tangkapan layar** | [Unggah mockup desain] Ubah desain ini menjadi kode halaman web yang dapat dijalankan |
| **Portofolio pribadi** | Bangun situs portofolio seorang fotografer — gaya minimalis hitam-putih dengan tata letak gambar masonry |
| **Halaman visualisasi data** | Buat halaman visualisasi yang menampilkan data pendanaan perusahaan AI tahun 2025 lengkap dengan grafik dan filter |
| **Situs web merek** | Bangun situs web merek kopi dengan warna earth tone yang lembut — sertakan halaman beranda, produk, dan pencari toko |
| **Alat bantu / Kalkulator** | Bangun halaman web kalkulator BMI — antarmuka bersih, mendukung pengalihan satuan, dengan indikator tingkat kesehatan |
