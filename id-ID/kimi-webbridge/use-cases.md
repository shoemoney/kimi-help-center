---
title: "Demo Kasus Penggunaan Ekstensi Browser Kimi"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo Kasus Penggunaan Ekstensi Browser Kimi - Pusat Bantuan Kimi"
  description="Jelajahi kasus penggunaan umum Ekstensi Browser Kimi: perencanaan perjalanan, pencarian tempat sewa, riset literatur, perbandingan harga, dan lainnya, dengan contoh prompt yang siap disalin."
  ogType="article"
/>

# Demo Kasus Penggunaan Ekstensi Browser Kimi

Semua tugas di bawah ini dapat langsung diserahkan kepada Kimi: mengobrol di sidebar, atau biarkan Agent lokal menjalankannya.

## Pencarian dan Pengorganisasian Informasi

Saat Anda perlu mencari di beberapa situs web sekaligus, Ekstensi Browser Kimi dapat membuat Agen otomatis membuka halaman target, mengekstrak konten utama, lalu menyusunnya menjadi keluaran terstruktur, sehingga Anda tidak perlu repot membuka halaman satu per satu serta menyalin dan menempel secara manual.

### Perencanaan Perjalanan

Berpindah di antara platform penerbangan, situs pemesanan hotel, dan komunitas perjalanan untuk membandingkan harga dan jadwal, lalu menyusun rencana perjalanan, tabel anggaran, dan rekomendasi akomodasi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya sedang merencanakan perjalanan 5 hari 4 malam ke Kyoto pada November untuk dua orang, dengan anggaran sekitar RMB 8,000. Tolong periksa penerbangan, hotel, dan jam buka objek wisata, lalu susun hasilnya menjadi rencana perjalanan per hari dan tabel anggaran.",
    },
  ]}
/>

### Penyaringan Iklan Sewa

Cari di beberapa platform sewa sekaligus, filter iklan berdasarkan biaya sewa, waktu komuter, tipe unit, dan kriteria lain, gabungkan informasinya, lalu urutkan rekomendasi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong bantu saya mencari hunian sewa di dekat Zhangjiang Hi-Tech Park Station di Shanghai. Anggaran saya maksimal RMB 4,500, waktu komuter harus di bawah 40 menit, dan saya lebih memilih apartemen utuh satu kamar tidur. Buka beberapa platform, susun tautan iklan, harga, luas lantai, dan waktu komuter, lalu berikan daftar kontak prioritas.",
    },
  ]}
/>

## Riset dan Analisis Konten

Ekstensi Browser Kimi dapat membantu Agen otomatis menelusuri hasil pencarian, membuka halaman detail, mengekstrak judul, data, komentar, dan informasi lain, lalu menganalisis serta merangkumnya. Ini sangat cocok untuk tugas riset yang perlu menelusuri banyak halaman web.

### Riset Literatur

Cari literatur akademik, ekstrak abstrak paper, metode inti, kesimpulan eksperimen, dan relasi sitasi, lalu keluarkan ulasan terstruktur.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong riset paper representatif dari dua tahun terakhir tentang memori AI Agent, susun judul, penulis, abstrak, metode inti, dan tautan open-source, lalu rangkum arah perkembangan risetnya.",
    },
  ]}
/>

### Pencarian Topik Mendalam

Ingin memahami topik yang belum familier? Biarkan Kimi mencari secara otomatis, membaca hasilnya satu per satu, dan merangkum semuanya menjadi sebuah ringkasan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Cari model AI lokal yang layak digunakan pada 2025 dan ambil teks lengkap dari 10 hasil teratas.",
    },
  ]}
/>

## Bantuan Kantor Sehari-hari

Gunakan kemampuan otomasi Ekstensi Browser Kimi untuk menangani operasi web berulang dan meningkatkan efisiensi kerja.

### Perbandingan Harga E-commerce

Cari produk yang sama di beberapa platform e-commerce, bandingkan harga, spesifikasi, dan ulasan pengguna, lalu susun opsi pembelian terbaik.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya ingin membeli monitor 27 inci 4K dengan anggaran sekitar RMB 2,000. Tolong cari dan bandingkan opsi di platform e-commerce arus utama, susun harga, merek, dan ulasan pengguna, lalu rekomendasikan pilihan dengan value terbaik.",
    },
  ]}
/>

### Ekstraksi Data Web

Ekstrak data terstruktur seperti tabel dan daftar dari halaman web, lalu susun otomatis ke format yang ditentukan, sehingga Anda tidak perlu repot menyalin dan menempel secara manual.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong bantu saya membuka halaman web ini, ekstrak tabel harga produk di halaman tersebut, lalu keluarkan sebagai daftar yang jelas.",
    },
  ]}
/>

## Ubah alur kerja berulang menjadi Skill

Saat alur kerja yang sama perlu dijalankan berulang kali, Anda tidak perlu mengetik ulang instruksinya setiap kali. Kimi dapat mempelajari prosesnya dan menyimpannya sebagai Skill—setelah itu, cukup ketik `/` untuk memanggilnya kapan saja.

### Rekam aksi menjadi Skill

Cocok untuk rutinitas web dengan langkah-langkah tetap, seperti membuka dasbor untuk mengekspor data setiap hari atau mengisi formulir yang sama.

1. Ketik `/` di sidebar dan pilih "Rekam aksi menjadi Skill"
2. Lakukan langkah-langkahnya sekali seperti biasa—Kimi merekam setiap aksi
3. Klik "Berhenti & hasilkan", dan Kimi akan merangkum proses tersebut menjadi Skill
4. Periksa nama, langkah, dan parameter Skill, lalu simpan (informasi sensitif seperti kata sandi dapat ditandai sebagai parameter rahasia dan diisi saat dijalankan ulang)

Nantinya, ketik `/` dan pilih Skill tersebut agar Kimi mengulanginya untuk Anda. Anda dapat mengedit langkah dan konten Skill kapan saja.

### Ubah situs menjadi Skill

Cocok untuk situs web yang sering Anda gunakan, seperti dasbor data rutin atau sistem internal.

Ketik `/` di sidebar dan pilih "Ubah situs menjadi Skill". Kimi secara otomatis menganalisis struktur dan cara kerja situs tersebut, mengemasnya menjadi Skill siap pakai, dan setelah disimpan Anda dapat memanggilnya kapan saja dengan `/`.

### Simpan sesi ini sebagai Skill

Jika Kimi sudah menyelesaikan proses yang bagus dalam percakapan saat ini, Anda dapat langsung menyimpannya untuk digunakan kembali: ketik `/` dan pilih "Simpan sesi ini sebagai Skill".

Untuk kasus penggunaan lainnya, lihat [situs web resmi Ekstensi Browser Kimi](https://www.kimi.com/zh-cn/features/webbridge).
