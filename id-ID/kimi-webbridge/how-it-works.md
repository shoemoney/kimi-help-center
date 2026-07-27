---
title: "Cara Kerja Kimi WebBridge"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Cara Kerja Kimi WebBridge - Pusat Bantuan Kimi"
  description="Pelajari cara Kimi WebBridge menghubungkan browser Anda dengan AI Agent secara lokal, memungkinkan navigasi web, klik, tangkapan layar, dan banyak lagi secara aman."
  ogType="article"
/>

# Cara Kerja Kimi WebBridge

## Alur Kerja

Kimi WebBridge bekerja sebagai berikut:

1. **Layanan Bridge Lokal**: Sebuah layanan lokal berjalan di komputer Anda untuk menerima instruksi dari Agent
2. **Ekstensi Browser**: Menjalankan tindakan tertentu di browser berdasarkan Chrome DevTools Protocol
3. **Isolasi Keamanan**: Seluruh eksekusi berlangsung secara lokal—status login dan konten halaman web tidak pernah meninggalkan perangkat Anda

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Antarmuka Ekstensi

Klik ikon WebBridge di bilah alat browser untuk memeriksa status koneksi saat ini:

**Terhubung**: WebBridge berfungsi dengan baik dan dapat bekerja sama dengan Agent.

**Terputus**: Periksa konfigurasi Anda atau jalankan kembali perintah koneksi.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
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

Untuk contoh penggunaan lainnya, silakan kunjungi [situs resmi Kimi WebBridge](https://www.kimi.com/features/webbridge).
