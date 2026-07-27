---
title: "Rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Rate limit - Pusat Bantuan Kimi"
  description="Kimi API menerapkan rate limit pada frekuensi permintaan dan concurrency untuk menjaga stabilitas platform serta penggunaan yang adil. Tingkat rate limit didasarkan pada..."
/>

# Rate limit

Kimi API menerapkan rate limit pada frekuensi permintaan dan concurrency untuk menjaga stabilitas platform serta penggunaan yang adil. Tingkat rate limit didasarkan pada total top-up kumulatif akun Anda.

## Tingkat rate limit

Rate limit API disusun bertingkat berdasarkan **total top-up kumulatif** akun Anda — semakin besar top-up yang telah Anda lakukan, semakin tinggi rate limit yang tersedia. Untuk ambang tiap tingkat serta batas RPM (requests per minute) dan TPM (tokens per minute) yang sesuai, lihat konsol [platform.kimi.ai](https://platform.kimi.ai).

## Bagaimana cara memeriksa limit saat ini?

- Masuk ke konsol API untuk melihat tingkat rate limit Anda saat ini.
- Header respons API juga memuat informasi rate limit:
  - `X-RateLimit-Limit`: Batas rate limit saat ini
  - `X-RateLimit-Remaining`: Sisa permintaan yang tersedia
  - `X-RateLimit-Reset`: Waktu saat limit direset

## Menangani error 429

Saat frekuensi permintaan Anda melampaui limit, API mengembalikan kode status 429. Tindakan yang disarankan:

1. **Terapkan exponential backoff**: Mulai dengan menunggu 1 detik, lalu gandakan waktu tunggu pada setiap percobaan ulang (2s, 4s, 8s…).
2. **Kendalikan concurrency**: Gunakan antrean permintaan atau semaphore untuk membatasi jumlah permintaan yang berjalan bersamaan.
3. **Gabungkan permintaan**: Satukan beberapa permintaan kecil menjadi lebih sedikit permintaan yang lebih besar.

## Meminta rate limit yang lebih tinggi

Jika kebutuhan bisnis Anda melebihi rate limit saat ini:

- **Top up untuk upgrade**: Tingkatkan total top-up kumulatif Anda, dan sistem akan otomatis menaikkan tingkat rate limit Anda.
- **Hubungi tim sales**: Untuk kebutuhan khusus, hubungi tim sales platform melalui [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales) untuk meminta rate quota khusus.
