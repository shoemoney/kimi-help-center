---
title: "Kemampuan Full-Stack Kimi Websites"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
preview_content: "Kemampuan full-stack Kimi Websites dan keterbatasannya saat ini."
---

<SeoMeta
  title="Mengapa situs web yang dibuat Kimi tidak berfungsi? - Pusat Bantuan Kimi"
  description="Pelajari batas kemampuan dan keterbatasan Kimi Websites saat ini. Skenario yang belum didukung mencakup pembayaran pihak ketiga, OAuth, dan integrasi API yang kompleks."
/>

# Kemampuan Full-Stack Kimi Websites

## Peningkatan Pembuatan Situs Web Full-Stack

Sebuah situs web lengkap biasanya terdiri dari tiga bagian: **antarmuka front-end, layanan back-end, dan penyimpanan data**. Kimi Websites telah ditingkatkan dengan kemampuan pembuatan situs web full-stack, yang mendukung pembuatan dan deployment situs web secara end-to-end, mulai dari halaman front-end hingga basis data back-end.

| Kemampuan         | Deskripsi                                                           |
|--------------|----------------------------------------------------------------|
| Pembuatan front-end     | Struktur halaman HTML/CSS/JavaScript, styling, dan logika interaksi                    |
| Basis data back-end   | Membangun basis data back-end secara otomatis, dengan dukungan baca/tulis data persisten dan pengelolaan visual               |
| Login pengguna     | Mendukung login akun Kimi, serta dapat membangun sistem login akun dan kata sandi melalui basis data           |
| Manajemen versi     | AI otomatis melakukan commit versi dan mendukung rollback ke versi historis mana pun                      |
| Pratinjau full-stack     | Mendukung pratinjau front-end dan back-end secara lengkap; sebagian skenario memerlukan pengaktifan lingkungan sandbox secara manual                   |
| Penerbitan dan deployment   | Klik "Terbitkan" secara manual untuk melakukan deployment ke internet publik. Sebelum diterbitkan, situs hanya tersedia untuk pratinjau. Deployment konten full-stack didukung  |

## Hasil Kerja Agent

- File eksekusi tugas lengkap, termasuk kode front-end dan back-end
- Situs web full-stack yang dapat dipratinjau secara online dan diterbitkan
- Paket Zip yang dapat diunduh, terletak di direktori `/mnt/agents/output/app/`

## Contoh Penggunaan

| Skenario             | Contoh prompt                                                       |
|------------------|------------------------------------------------------------------|
| Membuat landing page dari awal   | Buat landing page pemasaran untuk produk SaaS dengan gaya bernuansa teknologi, mencakup hero section, pengenalan fitur, harga, dan CTA |
| Membuat ulang dari tangkapan layar         | [Unggah tangkapan layar desain] Ubah desain ini menjadi kode halaman web yang dapat dijalankan               |
| Portofolio pribadi       | Buat situs web portofolio pribadi untuk fotografer, dengan gaya hitam-putih minimalis dan dukungan layout gambar masonry        |
| Halaman visualisasi data     | Buat halaman web visualisasi data yang menampilkan data pendanaan perusahaan AI tahun 2025, lengkap dengan grafik dan filter |
| Situs web merek         | Buat situs web resmi untuk merek kopi, menggunakan palet warna Morandi, dengan beranda, halaman produk, dan halaman toko      |
| Aplikasi dengan login     | Buat situs web basis pengetahuan internal tim yang kontennya hanya dapat dilihat setelah login                   |
| Admin pengelolaan data     | Buat sistem pendaftaran acara tempat pengguna dapat mengirim informasi yang disimpan ke basis data, dan admin dapat melihat daftar pendaftaran |
| Alat/kalkulator    | Buat halaman web kalkulator BMI dengan antarmuka yang bersih, pilihan pergantian unit, dan tips kategori kesehatan     |

## Keterbatasan Saat Ini

Skenario berikut belum didukung dan akan dibuka secara bertahap pada versi mendatang:

- Integrasi pembayaran pihak ketiga, seperti Stripe dan PayPal
- Login OAuth pihak ketiga, seperti Google dan GitHub. Saat ini, hanya login akun Kimi atau login nama pengguna/kata sandi berbasis basis data yang didukung
- Integrasi API sisi server yang kompleks, seperti menghubungkan ke layanan SaaS eksternal
