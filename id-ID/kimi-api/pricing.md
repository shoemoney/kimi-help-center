---
title: "Harga API"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Harga API - Pusat Bantuan Kimi"
  description="Penagihan API Kimi berdasarkan konsumsi token, dengan harga yang spesifik untuk setiap model dan fitur."
/>

# Harga API

<Callout type="info">
Penagihan API Kimi berdasarkan konsumsi token, dengan harga yang spesifik untuk setiap model dan fitur.
</Callout>

## Dasar penagihan

- **Penagihan per token**: Setiap panggilan API ditagih terpisah untuk token input dan token output
- **Satuan token**: 1M = 1.000.000 token
- **Harga spesifik per model**: Model dengan kemampuan lebih tinggi memiliki biaya per token yang lebih tinggi — pilih model yang paling sesuai dengan kebutuhan Anda

## Penagihan fitur tambahan

| Fitur | Biaya Tambahan |
| --- | --- |
| **Web Search** | $0,004 per pemanggilan (terlepas dari konsumsi token) |

## Context caching

<Callout type="tip">
**Context Caching** memungkinkan Anda menyimpan konten konteks yang sering digunakan (seperti system prompt dan dokumen referensi) dalam cache. Token yang berhasil mengakses cache ditagih dengan tarif diskon, sehingga secara efektif menekan biaya untuk konteks yang berulang.
</Callout>

Lihat dokumentasi resmi untuk rincian harga Context Caching.

## Rincian harga

Untuk tabel harga model lengkap dan aturan penagihan:

Anda dapat mengunjungi [platform.moonshot.ai/docs/pricing/chat](https://www.platform.moonshot.ai/docs/pricing/chat)

## Tips menghemat biaya

<Callout type="tip">
- Atur parameter `max_tokens` dengan tepat agar output tidak terlalu panjang tanpa alasan
- Gunakan Context Caching untuk system prompt dan konteks yang berulang
- Pilih model yang sesuai dengan tingkat kerumitan tugas — gunakan model ringan untuk tugas sederhana
- Sederhanakan rancangan prompt Anda untuk menekan token input yang tidak perlu
</Callout>
