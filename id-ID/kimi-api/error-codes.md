---
title: "Kode kesalahan API"
slug: "api-error-codes"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Kode kesalahan API - Pusat Bantuan Kimi"
  description="Kode kesalahan umum saat memanggil Kimi API dan cara mengatasinya."
/>

# Kode kesalahan API

<Callout type="info">
Kode kesalahan umum saat memanggil Kimi API dan cara mengatasinya.
</Callout>

## Referensi kode kesalahan

| Kode Kesalahan | Arti | Solusi |
| --- | --- | --- |
| 400 | Permintaan tidak valid | Periksa format body permintaan, nama parameter, dan tipenya. Penyebab umum: JSON tidak valid, parameter wajib tidak ada, nilai di luar rentang. |
| 401 | Tidak terotorisasi | Pastikan API Key benar, belum kedaluwarsa, dan tidak dinonaktifkan. Pastikan format header: `Authorization: Bearer <your-api-key>`. |
| 403 | Dilarang (saldo tidak mencukupi) | Saldo akun habis — isi ulang di konsol. Akun juga mungkin dibatasi; hubungi dukungan jika perlu. |
| 404 | Tidak ditemukan | Periksa path URL permintaan dan nama model. Pastikan endpoint adalah `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | Melebihi rate limit. Kurangi frekuensi, terapkan backoff eksponensial, atau hubungi dukungan untuk rate limit yang lebih tinggi. |
| 500 | Internal Server Error | Masalah server sementara — coba lagi nanti. Jika berlanjut, hubungi support@moonshot.ai dengan `request_id`. |

## Tips pemecahan masalah umum

<Callout type="tip">
1. **Periksa pesan kesalahan lengkap**: JSON respons menyertakan `error.message` dengan deskripsi terperinci.
2. **Catat request_id**: Membantu tim dukungan menemukan masalah dengan cepat.
3. **Rujuk dokumentasi resmi**: Pastikan panggilan sesuai dengan dokumentasi di [platform.kimi.ai](https://platform.kimi.ai).
4. **Terapkan logika percobaan ulang**: Untuk kesalahan 429 dan 500, gunakan backoff eksponensial.
</Callout>
