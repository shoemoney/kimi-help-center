---
title: "Mengapa situs web buatan agent tidak berfungsi?"
slug: "websites-why-not-working"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Mengapa situs web buatan agent tidak berfungsi? - Kimi Help Center"
  description="Proyek full-stack mencakup UI frontend, layanan backend, dan penyimpanan persisten. Kimi Agent dapat menghasilkan ketiganya, tetapi keberhasilan runtime bergantung pada env..."
/>

# Mengapa tidak berfungsi?

<Callout type="tip">
Proyek full-stack mencakup **UI frontend, layanan backend, dan penyimpanan persisten**. Kimi Agent dapat menghasilkan ketiganya, tetapi keberhasilan runtime bergantung pada penyiapan lingkungan, konfigurasi auth, dan tindakan publikasi.
</Callout>

Jika aplikasi Anda tidak berfungsi seperti yang diharapkan, masalahnya biasanya bukan karena kemampuan backend yang hilang. Penyebabnya umumnya adalah langkah preview, auth, basis data, atau publikasi yang belum tuntas.

## Alur kerja full-stack

1. **Generate**: Agent membuat frontend + backend + skema basis data dan logika data.
2. **Preview**: Jalankan di sandbox untuk pengujian full-stack secara lokal (dalam beberapa kasus, perlu dijalankan secara manual).
3. **Version**: Agent dapat menggunakan alat versi dan membuat commit secara otomatis.
4. **Rollback**: Anda dapat kembali ke versi commit mana pun sebelumnya.
5. **Publish / Share**: Aplikasi baru di-deploy ke URL publik setelah Anda mempublikasikannya secara manual.

## Penyebab kegagalan yang umum

| Gejala | Kemungkinan Penyebab | Yang Harus Dilakukan |
|----------|-------------|------------|
| Frontend termuat tetapi API gagal | Runtime sandbox belum dijalankan | Jalankan sandbox dan jalankan ulang preview |
| Data tidak tersimpan atau tidak terlihat | DB belum diinisialisasi atau dimigrasikan | Jalankan ulang langkah penyiapan atau migrasi DB |
| Login gagal | Alur auth tidak dikonfigurasi dengan benar | Periksa konfigurasi Kimi Login dan pengaturan callback |
| Orang lain tidak bisa mengakses aplikasi Anda | Aplikasi belum dipublikasikan | Klik **Publish/Share** untuk men-deploy |
| Perubahan terbaru merusak fungsionalitas | Regresi pada versi terbaru | Rollback ke commit yang stabil |

## Dukungan autentikasi

- **Fase 1**: Mendukung **Kimi Login**.
- **Fase berikutnya**: Penyedia OAuth tambahan akan ditambahkan.
- **Juga didukung**: Login akun email/kata sandi berbasis DB standar dapat dihasilkan oleh Agent.

## Versi dan rollback

- Agent mendukung alat pembuatan versi baru dan dapat melakukan `git commit` secara otonom selama pengembangan.
- Anda dapat melihat riwayat versi dan melakukan rollback ke commit pilihan saat diperlukan.

## Preview vs Publish

- **Preview**: Untuk pengembangan dan pengujian di sandbox; dalam beberapa skenario mungkin memerlukan menjalankan sandbox secara manual.
- **Publish/Share**: Tindakan manual oleh pengguna yang men-deploy aplikasi Anda ke lingkungan yang dapat diakses publik.

## Agent paling cocok untuk

- Pembuatan prototipe produk full-stack secara cepat
- Alur CRUD dengan penyimpanan persisten
- Operasi data admin atau back-office dasar
- Proyek demo end-to-end dengan alur login, data, dan deployment

## Batasan saat ini

- Operasi produksi tingkat lanjut (misalnya, SRE kompleks dan HA multi-region) masih memerlukan pekerjaan rekayasa manual.
- Untuk skenario produksi berisiko tinggi, lakukan tinjauan keamanan dan pengetatan deployment sebelum rilis.
