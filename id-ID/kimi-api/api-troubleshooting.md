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

## Bagaimana menangani error rate limit 429?

Error 429 berarti frekuensi permintaan Anda telah melampaui rate limit akun saat ini. Untuk mengatasinya:

- Terapkan strategi retry exponential backoff (tunggu 1 detik, 2 detik, 4 detik… sebelum mencoba lagi).
- Kendalikan jumlah permintaan bersamaan menggunakan mekanisme antrean.
- Tingkatkan total nilai isi ulang Anda untuk menaikkan tingkat rate limit.
- Hubungi tim penjualan jika Anda membutuhkan quota yang lebih besar.

## Bagaimana menangani error autentikasi 401?

Error 401 berarti autentikasi API Key gagal. Periksa hal-hal berikut:

- Pastikan API Key disalin dengan benar (perhatikan spasi di awal/akhir).
- Verifikasi format header permintaan sudah `Authorization: Bearer <your-api-key>`.
- Pastikan API Key belum dihapus atau dinonaktifkan — periksa di konsol.
- Pastikan Anda tidak menggunakan key dari platform lain (Kimi API Key diawali dengan `sk-`).

<Callout type="warning">
**Format API Key**: Kimi API Key diawali dengan `sk-`. Pastikan Anda menggunakan format key yang benar.
</Callout>

## Apakah unggah file dikenakan biaya?

Unggah file itu sendiri gratis. Namun, ketika Anda mereferensikan file yang diunggah dalam sebuah percakapan, isinya akan diuraikan menjadi token dan ditagih sebagai input token. File yang lebih besar menghasilkan lebih banyak token.

## Bagaimana menangani error saldo tidak cukup 403?

Error 403 biasanya menandakan saldo akun tidak mencukupi. Isi ulang di konsol — dana langsung tersedia. Anda juga dapat menggunakan API kueri saldo untuk memeriksa saldo Anda saat ini.

## Bagaimana jika respons terpotong?

Jika respons API tidak lengkap atau terpotong:

- Periksa apakah parameter `max_tokens` disetel terlalu rendah dan naikkan sesuai kebutuhan.
- Periksa kolom `finish_reason` dalam respons: `length` berarti output terpotong karena batas token; `stop` berarti selesai secara normal.
- Untuk membuat teks yang panjang, pertimbangkan untuk memecah permintaan menjadi beberapa bagian.

<Callout type="tip">
**Periksa `finish_reason`**: `length` = terpotong, `stop` = selesai secara normal.
</Callout>

## Bisakah saya mengunggah gambar melalui API file?

Bisa. API unggah file mendukung file gambar. Setelah diunggah, gambar dapat direferensikan dalam percakapan. Dengan model Vision, Anda juga dapat menyertakan gambar langsung di dalam pesan melalui URL atau pengodean Base64.

## Sumber untuk web search?

Fitur web search Kimi API mengambil informasi yang tersedia secara publik dari internet secara real-time. Hasilnya bersumber dari halaman web yang terindeks oleh mesin pencari besar. Setiap pemanggilan web search dikenakan biaya tambahan sebesar $0,004.

## Apakah ada keterkaitan antara keanggotaan Kimi dan concurrency API?

<Callout type="warning">
**Paket keanggotaan Kimi** (seperti Allegretto) dan **API** adalah sistem penagihan yang terpisah. Paralelisme agent yang termasuk dalam paket keanggotaan hanya berlaku untuk produk konsumen Kimi dan tidak berkaitan dengan rate limit API. Batas concurrency API ditentukan oleh tingkat total isi ulang akun Anda.
</Callout>

## Perbedaan antara API dan aplikasi web Kimi

| Aspek | Aplikasi Web Kimi | Kimi API |
| --- | --- | --- |
| **Sasaran** | Produk percakapan untuk konsumen | Antarmuka integrasi untuk developer |
| **Akses** | Berbasis browser | Panggilan API secara programatik |
| **Penagihan** | Sistem keanggotaan/quota | Bayar sesuai pemakaian berdasarkan token |
| **Akun** | Login bersama | Login bersama |
| **Credit** | Tidak dapat dipindahkan antarsistem | Tidak dapat dipindahkan antarsistem |

## Apakah pembuatan PPT dan deep research tersedia melalui API?

<Callout type="warning">
**Pembuatan PPT** dan **deep research** **belum tersedia melalui API**. Fitur-fitur ini saat ini hanya dapat diakses melalui produk konsumen Kimi. Ikuti pengumuman platform untuk pembaruan.
</Callout>

## Apakah deployment on-premises didukung?

Kimi API saat ini hanya menawarkan layanan API berbasis cloud dan **tidak mendukung deployment privat on-premises**. Untuk kebutuhan deployment privat, hubungi tim penjualan melalui [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales).

## Bisakah saya memanggil Kimi API dari luar China?

Kimi API tersedia secara internasional melalui `api.moonshot.ai`. Jika Anda mengalami masalah konektivitas, hubungi tim penjualan untuk membahas solusi terbaik bagi wilayah Anda.
