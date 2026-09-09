---
title: "Cara Kerja Ekstensi Browser Kimi"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Cara Kerja Ekstensi Browser Kimi - Pusat Bantuan Kimi"
  description="Pelajari cara Ekstensi Browser Kimi menghubungkan browser Anda dengan AI Agent secara lokal, memungkinkan navigasi web, klik, tangkapan layar, dan banyak lagi secara aman."
  ogType="article"
/>

# Cara Kerja Ekstensi Browser Kimi

## Alur Kerja

Ekstensi Browser Kimi mendukung dua cara penggunaan — **percakapan sidebar** dan **kontrol jarak jauh oleh Agent lokal** — dan bekerja sebagai berikut:

1. **Sidebar Browser**: Klik ikon Kimi di bilah alat untuk membuka sidebar, lalu masuk dengan akun keanggotaan Kimi untuk langsung mengobrol
2. **Layanan Bridge Lokal**: Sebuah layanan lokal berjalan di komputer Anda untuk menerima instruksi dari Agent
3. **Ekstensi Browser**: Menjalankan tindakan tertentu di browser berdasarkan Chrome DevTools Protocol
4. **Isolasi Keamanan**: Seluruh eksekusi berlangsung secara lokal—status login dan konten halaman web tidak pernah meninggalkan perangkat Anda

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Antarmuka Ekstensi

Klik ikon Ekstensi Browser Kimi di bilah alat browser untuk membuka sidebar dan mengirim tugas.

<Frames
  src="./images/connection.png"
  alt="Ekstensi Browser Kimi Connection"
/>

## Fitur

| Fitur | Deskripsi |
|---------|-------------|
| Navigasi Web | Membuka URL tertentu secara otomatis |
| Klik Elemen | Menyimulasikan klik pada tombol, tautan, dan elemen halaman lainnya |
| Pengisian Formulir | Mengisi teks dan memilih opsi secara otomatis |
| Tangkapan Layar Halaman | Mengambil tangkapan halaman saat ini atau area tertentu |
| Ekstraksi Konten | Membaca teks halaman, tabel, dan data terstruktur lainnya |
| Penyimpanan Sesi Login | Menggunakan status login yang sudah tersimpan di browser |

Contoh penggunaan:

- Perbandingan harga e-commerce: Mencari produk secara otomatis dan membandingkan harga di berbagai platform
- Riset informasi: Menelusuri halaman web secara mendalam dan mengekstrak informasi terstruktur
- Pengisian formulir: Mengisi berbagai formulir online secara otomatis
- Entri data: Mengatur dan memasukkan data web ke dalam format tertentu secara otomatis

Untuk contoh penggunaan lainnya, silakan kunjungi [situs resmi Ekstensi Browser Kimi](https://www.kimi.com/features/webbridge).
