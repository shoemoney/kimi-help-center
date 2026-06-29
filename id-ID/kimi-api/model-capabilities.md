---
title: "Kemampuan model"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="Kemampuan model - Pusat Bantuan Kimi"
  description="Berikut adalah pertanyaan yang sering diajukan seputar kemampuan model Kimi API."
/>

# Kemampuan model

Berikut adalah pertanyaan yang sering diajukan seputar kemampuan model Kimi API.

## Apakah mendukung mode JSON?

Ya. Kimi API menyediakan JSON Mode yang membatasi keluaran model agar berupa JSON yang valid. Cara penggunaannya:

- Setel parameter `response_format` menjadi `{"type": "json_object"}` dalam permintaan Anda.
- Selain itu, instruksikan model secara eksplisit dalam prompt Anda untuk mengembalikan JSON dan jelaskan struktur yang diharapkan.
- Dalam JSON Mode, model dijamin menghasilkan string JSON yang dapat di-parse.

## Apakah mendukung fine-tuning model?

Kimi API **saat ini belum mendukung** fine-tuning model yang dimulai oleh pengguna. Untuk kebutuhan model khusus, hubungi tim penjualan melalui [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales) untuk mengetahui opsi kustomisasi enterprise.

## Apakah mendukung OCR?

Model Vision pada Kimi API memiliki kemampuan memahami gambar dan dapat mengenali teks di dalam gambar, sehingga menghasilkan kemampuan serupa OCR:

- Mendukung pengenalan teks dalam bahasa Inggris, Tionghoa, dan banyak bahasa lainnya.
- Dapat mengenali teks cetak dan sebagian teks tulisan tangan.
- Setiap gambar ditagih dengan tarif tetap sebesar 1.024 token.
- Selain pengenalan teks biasa, model juga dapat menafsirkan tabel, grafik, dan konten terstruktur lainnya di dalam gambar.

## Apakah mendukung TTS (text-to-speech) dan ASR (pengenalan suara)?

Kimi API **saat ini belum mendukung** TTS maupun ASR. Untuk kemampuan terkait suara, pertimbangkan untuk menggabungkan layanan suara pihak ketiga dengan Kimi API. Pantau terus pengumuman platform untuk pembaruan fitur di masa mendatang.
