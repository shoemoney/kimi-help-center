---
title: "Aturan pembaruan dan penggunaan credit"
slug: "update-rules"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Aturan pembaruan dan penggunaan credit - Pusat Bantuan Kimi"
  description="Semua fitur keanggotaan Kimi menggunakan satu kumpulan credit bersama. Credit dipakai sesuai penggunaan aktual."
/>

# Aturan pembaruan dan penggunaan credit

<Callout type="info">
Semua fitur keanggotaan Kimi (Agent, Deep Research, Slides, Docs, Sheets, Kimi Code, Kimi Work, Kimi Claw, dll.) menggunakan satu kumpulan credit bersama. Credit dipakai sesuai penggunaan aktual.
</Callout>

## Bagaimana cara kerja kumpulan credit bersama?
Fitur keanggotaan Kimi menggunakan satu kumpulan credit bersama yang berlaku di mana saja. Fitur Agent dan fitur Kimi lainnya sama-sama mengambil credit dari kumpulan ini:
| Fitur | Deskripsi |
|---------|-------------|
| **Tugas Agent** | Situs web, dokumen, slide, spreadsheet, Deep Research |
| **Kimi Code** | Asisten coding berbasis AI untuk developer |
| **Kimi Work** | Aplikasi desktop Kimi |
| **Kimi Claw** | Asisten AI pribadi Anda yang diterapkan di cloud |
| **Fitur lainnya** | Pembuatan gambar dan lainnya |

> **K2.6**: Di Chat, K2.6 juga memakai credit keanggotaan, ditagih dengan cara yang sama seperti saat digunakan sebagai Agent K2.6 di dalam Kimi Work.
> **Kimi Code**: Mengambil credit dari kumpulan credit bersama yang sama, tetapi memiliki rate limit tersendiri per 5 jam / mingguan yang hanya berlaku untuk Kimi Code.

<Callout type="tip">
Artinya, Anda bebas mengalokasikan credit di seluruh kumpulan bersama ini — misalnya lebih banyak untuk riset bulan ini, lalu lebih banyak untuk dokumen bulan berikutnya.
</Callout>

## Bagaimana credit dihitung?
Credit dipakai berdasarkan jumlah token yang diproses oleh sebuah tugas. Input dan output yang lebih panjang menggunakan lebih banyak token.

<Callout type="info">
**Perkiraan kasar untuk pengguna paket gratis**:
- Membuat deck slide sederhana ≈ 1–2% dari credit Anda
- Menjalankan laporan Deep Research ≈ 5–10%
- Menulis cuplikan kode ≈ 0,5–2%
Paket tingkat lebih tinggi menyediakan kumpulan credit yang lebih besar secara proporsional.
</Callout>

## Aturan refresh credit
| Aturan | Deskripsi |
|------|-------------|
| **Siklus** | Pelanggan bulanan maupun tahunan menerima credit dalam siklus **bulanan** |
| **Kedaluwarsa** | Credit yang tidak digunakan akan kedaluwarsa pada akhir setiap siklus — tidak diakumulasikan ke siklus berikutnya dan tidak dapat dikonversi menjadi uang tunai |
| **Batas** | Tugas individual dapat dikenai batas concurrency 5 jam dan 7 hari seperti yang ditampilkan di UI |

## Saat credit habis
- Tugas yang sudah berjalan akan tetap selesai seperti biasa
- Tugas baru akan menampilkan pesan "credit tidak mencukupi"

**Pilihan Anda**:

- Tunggu hingga credit Anda di-refresh pada siklus penagihan berikutnya
- Upgrade ke paket tingkat lebih tinggi untuk mendapatkan jatah bulanan yang lebih besar
## Bagaimana tepatnya credit di-refresh?
1. **Berbasis siklus** — Credit di-refresh pada tanggal ulang tahun langganan Anda, bukan berdasarkan bulan kalender
2. **Tidak diakumulasikan** — Sisa credit direset menjadi nol, lalu jatah penuh Anda diterbitkan kembali
3. **Contoh** — Jika Anda berlangganan pada 1 Desember pukul 15.00, credit Anda di-refresh pada 1 Januari pukul 15.00

<Callout type="info">
**Kesalahan sistem**: Jika tugas gagal karena masalah sistem, gunakan tombol 👎 untuk melaporkannya dan meminta pengembalian credit.
</Callout>
