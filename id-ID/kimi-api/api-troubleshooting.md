---
title: "Pemecahan masalah API"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Pemecahan masalah API - Pusat Bantuan Kimi"
  description="Masalah umum dan solusinya bagi developer yang menggunakan Kimi API."
/>

# Pemecahan masalah API

<Callout type="info">
Masalah umum dan solusinya bagi developer yang menggunakan Kimi API.
</Callout>

## Bagaimana menangani error 429 rate limit?

Error 429 berarti frekuensi permintaan Anda telah melampaui rate limit akun saat ini. Untuk mengatasinya:

- Terapkan strategi retry dengan exponential backoff (tunggu 1 dtk, 2 dtk, 4 dtk… sebelum mencoba lagi).
- Kendalikan jumlah permintaan concurrent menggunakan mekanisme antrean.
- Tingkatkan jumlah top-up kumulatif Anda untuk menaikkan tier rate limit.
- Hubungi tim penjualan jika Anda membutuhkan quota yang lebih tinggi.

## Bagaimana menangani error 401 autentikasi?

Error 401 berarti autentikasi kunci API gagal. Periksa hal berikut:

- Pastikan kunci API disalin dengan benar (perhatikan spasi di awal/akhir).
- Pastikan format header permintaan adalah `Authorization: Bearer <your-api-key>`.
- Pastikan kunci API belum dihapus atau dinonaktifkan — periksa di konsol.
- Pastikan Anda tidak menggunakan kunci dari platform lain (kunci Kimi API dimulai dengan `sk-`).

<Callout type="warning">
**Format Kunci API**: Kunci Kimi API dimulai dengan `sk-`. Pastikan Anda menggunakan format kunci yang benar.
</Callout>

## Apakah unggah file dikenai biaya?

Unggah file itu sendiri gratis. Namun, saat Anda mereferensikan file yang diunggah dalam percakapan, kontennya diurai menjadi token dan ditagihkan sebagai token input. File yang lebih besar menghasilkan lebih banyak token.

## Bagaimana menangani error 403 Insufficient Balance?

Error 403 biasanya menunjukkan saldo akun tidak mencukupi. Lakukan top-up di konsol — dana langsung tersedia. Anda juga dapat menggunakan API kueri saldo untuk memeriksa saldo saat ini.

## Bagaimana jika respons terpotong?

Jika respons API tidak lengkap atau terpotong:

- Periksa apakah parameter `max_tokens` diatur terlalu rendah, lalu tingkatkan sesuai kebutuhan.
- Periksa field `finish_reason` dalam respons: `length` berarti output terpotong karena batas token; `stop` berarti selesai secara normal.
- Untuk pembuatan teks panjang, pertimbangkan untuk memecah permintaan menjadi beberapa segmen.

<Callout type="tip">
**Periksa `finish_reason`**: `length` = terpotong, `stop` = selesai normal.
</Callout>

## Bisakah saya mengunggah gambar melalui API file?

Ya. API unggah file mendukung file gambar. Setelah diunggah, gambar dapat direferensikan dalam percakapan. Dengan model Vision, Anda juga dapat mengirim gambar langsung dalam pesan melalui URL atau encoding Base64.

## Sumber untuk Web Search?

Fitur Web Search Kimi API mengambil informasi yang tersedia untuk publik dari internet secara real time. Hasilnya bersumber dari halaman web yang diindeks oleh mesin pencari utama. Setiap pemanggilan Web Search dikenai biaya tambahan sebesar $0.004.

## Apakah ada hubungan antara keanggotaan Kimi dan concurrency API?

<Callout type="warning">
**Paket keanggotaan Kimi** (seperti Allegretto) dan **API** adalah sistem penagihan yang terpisah. Paralelisme agent yang termasuk dalam paket keanggotaan hanya berlaku untuk produk konsumen Kimi dan tidak terkait dengan rate limit API. Batas concurrency API ditentukan oleh tier top-up kumulatif akun Anda.
</Callout>

## Perbedaan antara API dan aplikasi web Kimi

| Aspek | Aplikasi Web Kimi | Kimi API |
| --- | --- | --- |
| **Target** | Produk percakapan untuk konsumen | Antarmuka integrasi untuk developer |
| **Akses** | Berbasis browser | Panggilan API secara programatis |
| **Penagihan** | Sistem keanggotaan/credit | Bayar sesuai pemakaian berdasarkan token |
| **Akun** | Login bersama | Login bersama |
| **Credit** | Tidak dapat ditransfer antar-sistem | Tidak dapat ditransfer antar-sistem |

## Apakah pembuatan PPT dan Deep Research tersedia melalui API?

<Callout type="warning">
**Pembuatan PPT** dan **Deep Research** **belum tersedia melalui API**. Saat ini fitur-fitur tersebut hanya dapat diakses melalui produk konsumen Kimi. Ikuti pengumuman platform untuk pembaruan.
</Callout>

## Apakah deployment on-premises didukung?

Kimi API saat ini hanya menyediakan layanan API berbasis cloud dan **tidak mendukung deployment privat on-premises**. Untuk kebutuhan deployment privat, hubungi tim penjualan melalui [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales).

## Bisakah saya memanggil Kimi API dari luar Tiongkok?

Kimi API tersedia secara internasional melalui `api.moonshot.ai`. Jika Anda mengalami masalah konektivitas, hubungi tim penjualan untuk mendiskusikan solusi terbaik bagi wilayah Anda.
