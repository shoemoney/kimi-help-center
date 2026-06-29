---
title: "Pemecahan masalah umum"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Pemecahan masalah umum - Pusat Bantuan Kimi"
  description="Halaman ini membahas kode error umum dan opsi perbaikan mandiri untuk Kimi Claw."
/>

# Pemecahan masalah umum

Halaman ini membahas kode error umum dan opsi perbaikan mandiri untuk Kimi Claw.

## Kode error umum

| Kode | Arti | Tindakan |
|------|---------|------------|
| **400** | Bad Request — Masukan tidak valid atau parameter keliru | Periksa pesan Anda untuk konten yang tidak didukung, lalu coba lagi. |
| **401** | Unauthorized — Autentikasi gagal | Keluar dari Kimi lalu masuk kembali. Jika masalah berlanjut, periksa kredensial API Anda di pengaturan Kimi Claw. |
| **403** | Forbidden — Izin tidak memadai | Pastikan tingkat keanggotaan Anda mendukung fitur yang sedang digunakan. Pastikan akun Anda tidak dibatasi. |
| **429** | Too Many Requests — Batas rate terlampaui | Tunggu beberapa menit lalu coba lagi. Lihat [Batas Percakapan](/kimi-claw/conversation-limits) untuk detail cara memeriksa quota Anda. |
| **500** | Internal Server Error — Terjadi kesalahan di sisi server | Coba lagi setelah jeda singkat. Jika terus berulang, gunakan opsi perbaikan mandiri di bawah atau hubungi dukungan. |

## Opsi perbaikan mandiri

Kimi Claw menyediakan alat perbaikan bawaan yang dapat diakses dari **Pengaturan** di web:

| Opsi | Fungsinya |
|--------|--------------|
| **Mulai ulang Kimi Claw** | Memulai ulang koneksi gateway. Mengatasi sebagian besar masalah sementara (putusnya bridge, hang sesaat). |
| **Perbaiki Kimi Claw** | Menjalankan diagnostik otomatis yang mendeteksi dan memperbaiki masalah konfigurasi. Coba opsi ini bila memulai ulang saja tidak membantu. |
| **Pulihkan Pengaturan Awal** | Mengembalikan Kimi Claw ke kondisi default. File workspace dan Memory tetap dipertahankan, tetapi koneksi platform chat (Telegram, dll.) perlu dikonfigurasi ulang. Gunakan sebagai upaya terakhir. |

## Jalur eskalasi

Jika opsi perbaikan mandiri tidak menyelesaikan masalah:

1. Jalankan `/logs` di Terminal untuk merekam keluaran error terbaru.
2. Jalankan `/debug` untuk mengaktifkan diagnostik terperinci.
3. Hubungi **support@moonshot.ai** dengan menyertakan detail error dan log yang relevan.
