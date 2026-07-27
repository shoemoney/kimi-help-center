---
title: "Harga API"
slug: "api-pricing"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Harga API - Pusat Bantuan Kimi"
  description="Penagihan Kimi API berdasarkan konsumsi token, dengan harga yang berbeda menurut model dan fitur."
/>

# Harga API

<Callout type="info">
Penagihan Kimi API berdasarkan konsumsi token, dengan harga yang berbeda menurut model dan fitur.
</Callout>

## Dasar penagihan

- **Penagihan per token**: Setiap panggilan API ditagih terpisah untuk token input dan token output
- **Satuan token**: 1M = 1.000.000 token
- **Harga per model**: Model dengan kapabilitas lebih tinggi memiliki biaya per token yang lebih tinggi — pilih model yang paling sesuai dengan kebutuhan penggunaan Anda

## Penagihan fitur tambahan

| Fitur | Biaya Tambahan |
| --- | --- |
| **Web Search** | $0.004 per pemanggilan (tidak bergantung pada konsumsi token) |

## Caching konteks

<Callout type="tip">
**Caching Konteks** memungkinkan Anda menyimpan konten konteks yang sering digunakan (seperti prompt sistem dan dokumen referensi) dalam cache. Token yang mengenai cache ditagih dengan tarif diskon, sehingga efektif menekan biaya untuk konteks yang berulang.
</Callout>

Lihat dokumentasi resmi untuk rincian harga Caching Konteks.

## Rincian harga

Untuk tabel harga model dan aturan penagihan lengkap:

Anda dapat membuka [platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)

## Tips mengoptimalkan biaya

<Callout type="tip">
- Atur parameter `max_tokens` secara tepat untuk menghindari output yang terlalu panjang tanpa perlu
- Gunakan Caching Konteks untuk prompt sistem dan konteks yang berulang
- Pilih model yang tepat sesuai kompleksitas tugas — gunakan model ringan untuk tugas sederhana
- Rapikan desain prompt Anda untuk meminimalkan token input yang tidak diperlukan
</Callout>
