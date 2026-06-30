---
title: "Kode kesalahan API"
slug: "api-error-codes"
order: 2
extract_headings: false
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
| 400 | Bad Request | Periksa format isi permintaan, nama parameter, dan tipenya. Penyebab umum: JSON yang rusak, parameter wajib yang hilang, atau nilai di luar rentang. |
| 401 | Unauthorized | Pastikan API Key benar, belum kedaluwarsa, dan tidak dinonaktifkan. Konfirmasi format header: `Authorization: Bearer <your-api-key>`. |
| 403 | Forbidden (saldo tidak cukup) | Saldo akun habis — lakukan top up di konsol. Akun juga mungkin dibatasi; hubungi dukungan jika diperlukan. |
| 404 | Not Found | Periksa jalur URL permintaan dan nama model. Pastikan endpoint adalah `https://api.moonshot.ai/v1/...`. |
| 429 | Too Many Requests | Melebihi rate limit. Kurangi frekuensi, terapkan exponential backoff, atau hubungi dukungan untuk menaikkan batas. |
| 500 | Internal Server Error | Masalah server sementara — coba lagi nanti. Jika berlanjut, hubungi support@moonshot.ai dengan menyertakan `request_id`. |

## Tips pemecahan masalah umum

<Callout type="tip">
1. **Periksa pesan kesalahan lengkap**: JSON respons menyertakan `error.message` dengan deskripsi terperinci.
2. **Catat request_id**: Membantu tim dukungan menemukan masalah dengan cepat.
3. **Rujuk dokumentasi resmi**: Pastikan panggilan sesuai dengan dokumentasi di [platform.moonshot.ai](https://platform.moonshot.ai).
4. **Terapkan logika coba ulang**: Untuk kesalahan 429 dan 500, gunakan exponential backoff.
</Callout>
