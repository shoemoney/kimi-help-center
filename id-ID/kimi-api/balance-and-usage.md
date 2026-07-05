---
title: "Saldo & penggunaan"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo & penggunaan - Pusat Bantuan Kimi"
  description="Kimi API menyediakan beragam cara untuk melihat saldo akun dan detail penggunaan Anda, sehingga memudahkan pemantauan konsumsi dan biaya."
/>

# Saldo & penggunaan

Kimi API menyediakan beragam cara untuk melihat saldo akun dan detail penggunaan Anda, sehingga memudahkan pemantauan konsumsi dan biaya.

## Dasbor konsol

Masuk ke [platform.kimi.ai](https://platform.kimi.ai) dan buka halaman **fee-detail** (detail tagihan) di konsol untuk melihat:

- Saldo akun saat ini
- Rincian penggunaan harian
- Penggunaan dan biaya per model
- Tren pengeluaran historis

<Callout type="info">
Tagihan harian diperbarui paling lambat **pukul 07.00 keesokan harinya**. Data penggunaan real-time mungkin sedikit tertunda.
</Callout>

> **Catatan**: Tagihan harian diperbarui paling lambat **pukul 07.00 keesokan harinya**. Data penggunaan real-time mungkin sedikit tertunda.

## Token estimation API

Sebelum mengirim permintaan, Anda dapat menggunakan Token Estimation API untuk memperkirakan berapa banyak token yang akan dikonsumsi oleh panggilan tersebut — berguna untuk mengontrol biaya.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Kirimkan format `messages` yang sama seperti pada permintaan Chat Completion, dan API akan mengembalikan perkiraan jumlah token.

## API kueri saldo

Mintai saldo akun Anda saat ini secara langsung melalui API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Sertakan API Key Anda di header permintaan untuk mengambil saldo yang tersedia.

## Tips pemantauan penggunaan

<Callout type="tip">
**Praktik Terbaik**:
- Periksa halaman fee-detail secara berkala untuk memantau tren pengeluaran
- Integrasikan Balance Query API dan tetapkan ambang batas notifikasi saldo
- Gunakan Token Estimation API sebelum panggilan penting untuk memperkirakan biaya
</Callout>
