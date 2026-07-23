---
title: "Saldo & penggunaan"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Saldo & penggunaan - Pusat Bantuan Kimi"
  description="Kimi API menyediakan beberapa cara untuk melihat saldo akun dan detail penggunaan, sehingga Anda dapat memantau konsumsi dan biaya."
/>

# Saldo & penggunaan

Kimi API menyediakan beberapa cara untuk melihat saldo akun dan detail penggunaan, sehingga Anda dapat memantau konsumsi dan biaya.

## Dasbor konsol

Masuk ke [platform.kimi.ai](https://platform.kimi.ai), lalu buka halaman **fee-detail** (detail penagihan) di konsol untuk melihat:

- Saldo akun saat ini
- Rincian penggunaan harian
- Penggunaan dan biaya per model
- Tren pengeluaran historis

<Callout type="info">
Penagihan harian diperbarui paling lambat **pukul 07.00 keesokan harinya**. Data penggunaan waktu nyata mungkin mengalami sedikit jeda.
</Callout>

> **Catatan**: Penagihan harian diperbarui paling lambat **pukul 07.00 keesokan harinya**. Data penggunaan waktu nyata mungkin mengalami sedikit jeda.

## API Token Estimation

Sebelum mengirim permintaan, Anda dapat menggunakan API Token Estimation untuk memperkirakan berapa banyak token yang akan digunakan oleh panggilan tersebut — berguna untuk mengendalikan biaya.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Kirim format `messages` yang sama seperti pada permintaan Chat Completion, dan API akan mengembalikan estimasi jumlah token.

## API kueri saldo

Kueri saldo akun Anda saat ini langsung melalui API:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

Sertakan kunci API Anda di header permintaan untuk mengambil saldo yang tersedia.

## Kiat memantau penggunaan

<Callout type="tip">
**Praktik terbaik**:
- Periksa halaman fee-detail secara rutin untuk memantau tren pengeluaran
- Integrasikan Balance Query API dan tetapkan ambang peringatan saldo
- Gunakan API Token Estimation sebelum panggilan penting untuk memperkirakan biaya
</Callout>
