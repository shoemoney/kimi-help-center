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
      content: "Saya [nama/panggilan], saat ini tinggal di [kota]. Berlatar belakang [profesi/peran], dengan keahlian di [bidang 1] dan [bidang 2].\nSaat ini berfokus pada: memajukan [Proyek A] dan [Proyek B].\nMohon secara default menjawab dalam bahasa Indonesia untuk semua respons berikutnya, kecuali saya secara eksplisit menulis dalam bahasa lain.",
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
      content: "Preferensi saya dalam mengonsumsi konten:\n- Utamakan penyajian terstruktur: gunakan hierarki judul, poin-poin, dan cetak tebal untuk kesimpulan utama\n- Hindari dinding teks: untuk topik yang kompleks, awali dengan ringkasan \"TL;DR\", lalu uraikan ke detail\n- Penanganan istilah: jelaskan jargon dengan bahasa sederhana saat pertama digunakan, lalu gunakan dengan bebas setelahnya\n- Format sitasi: kutip sumber untuk data faktual menggunakan notasi [^N^]",
    },
  ]}
/>

### Instruksi pemeliharaan memori mandiri (lanjutan)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Di akhir setiap percakapan:\n- Jika kita membahas fakta penting yang baru (mis. perubahan jadwal, pembaruan proyek, penyesuaian preferensi), tanyakan secara proaktif apakah perlu memperbarui memori\n- Jika informasi baru bertentangan dengan memori yang ada, tandai perbedaannya dan konfirmasikan mana yang diprioritaskan\n- Untuk informasi sensitif (alamat spesifik, nomor identitas, rahasia dagang), tanyakan secara proaktif apakah perlu menyimpannya di memori",
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
      content: "[Protokol Pengecekan Fakta]\nKetika saya mengajukan pertanyaan dalam bidang-bidang berikut, patuhi ketat prioritas sumber ini:\n1. Medis/Kesehatan: Utamakan PubMed, WHO, UpToDate; jangan pernah mengutip blog kesehatan atau media pribadi\n2. Keuangan/Investasi: Gunakan hanya dokumen SEC, data bank sentral, dan laporan tahunan perusahaan publik; tanpa spekulasi forum\n3. Hukum/Kepatuhan: Rujuk basis data regulasi resmi; untuk kebijakan lokal, beri catatan \"konsultasikan dengan pengacara setempat\"\n4. Teknologi/Pemrograman: Utamakan dokumentasi resmi; beri label GitHub Issues sebagai pengalaman komunitas, bukan sumber otoritatif\n5. Untuk informasi dari Wikipedia, Reddit, Quora, atau platform UGC lainnya, selalu beri tag \"[Belum Terverifikasi]\"",
    },
  ]}
/>

### Pemeriksaan pemicu halusinasi (tingkat proses)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Daftar Periksa Topik Berisiko Tinggi]\nKetika kata kunci berikut terdeteksi, otomatis picu proses \"pemeriksaan ganda\":\n1. Angka spesifik (harga, tanggal, statistik) → wajib menyebutkan sumber data dan tahunnya\n2. Bahasa yang sensitif waktu (\"terbaru\", \"baru saja\", \"belakangan ini\") → wajib memverifikasi apakah masih dalam batas pengetahuan\n3. Saran profesional (medis, hukum, investasi) → wajib menambahkan penafian: \"Informasi di atas hanya untuk referensi dan bukan merupakan saran profesional\"\n4. Kutipan spesifik dari individu → wajib memberi label sebagai kutipan langsung atau parafrasa; jangan pernah mengarang kutipan\n\nEksekusi: Pertama nyatakan \"Saya perlu memverifikasi informasi berikut\", lalu berikan jawabannya.",
    },
  ]}
/>

## Batas memori
Saat ini Ruang Memori memiliki batasan berikut:
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
