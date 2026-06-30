---
title: "Rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Rate limit - Pusat Bantuan Kimi"
  description="Kimi API menerapkan rate limit pada frekuensi dan concurrency permintaan untuk menjaga stabilitas platform serta pemakaian yang adil. Tingkatan rate limit ditentukan oleh akun Anda..."
/>

# Rate limit

Kimi API menerapkan rate limit pada frekuensi dan concurrency permintaan untuk menjaga stabilitas platform serta pemakaian yang adil. Tingkatan rate limit ditentukan oleh total top-up kumulatif pada akun Anda.

## Tingkatan rate limit

Rate limit API dibagi dalam beberapa tingkatan berdasarkan **total top-up kumulatif** akun Anda — semakin besar top-up Anda, semakin tinggi rate limit yang tersedia. Untuk ambang batas setiap tingkatan beserta batas RPM (permintaan per menit) dan TPM (token per menit) yang sesuai, lihat konsol [platform.moonshot.ai](https://www.platform.moonshot.ai).

## Cara memeriksa batas saat ini？

- Masuk ke konsol API untuk melihat tingkatan rate limit Anda saat ini.
- Header respons API juga menyertakan informasi rate limit:
  - `X-RateLimit-Limit`: Batas rate limit saat ini
  - `X-RateLimit-Remaining`: Sisa permintaan yang tersedia
  - `X-RateLimit-Reset`: Waktu saat batas akan disetel ulang

## Menangani error 429

Ketika frekuensi permintaan Anda melampaui batas, API mengembalikan kode status 429. Tindakan yang disarankan:

1. **Terapkan exponential backoff**: Tunggu 1 detik pada awalnya, lalu gandakan waktu tunggu setiap kali mencoba ulang (2s, 4s, 8s…).
2. **Kontrol concurrency**: Gunakan antrean permintaan atau semaphore untuk membatasi jumlah permintaan yang berjalan bersamaan.
3. **Kelompokkan permintaan**: Gabungkan beberapa permintaan kecil menjadi lebih sedikit permintaan yang lebih besar.

## Meminta rate limit yang lebih tinggi

Jika kebutuhan bisnis Anda melebihi rate limit saat ini:

- **Top-up untuk naik tingkat**: Tingkatkan total top-up kumulatif Anda, dan sistem akan otomatis menaikkan tingkatan rate limit Anda.
- **Hubungi tim sales**: Untuk kebutuhan khusus, hubungi tim sales platform melalui [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) guna meminta quota rate limit yang disesuaikan.
