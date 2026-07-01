---
title: "Masalah umum pada chat Kimi"
slug: "chat-issues"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Masalah umum pada chat Kimi - Pusat Bantuan Kimi"
  description="Mengalami masalah saat mengobrol dengan Kimi? Artikel ini merangkum langkah penyelesaian untuk masalah chat yang umum, termasuk balasan terputus, konten tidak normal, dan gagal memuat, agar cepat teratasi."
/>

# Masalah umum pada chat Kimi

## Tidak bisa mengirim pesan / muncul lingkaran merah?

Hal ini mungkin disebabkan oleh:

- **Rate limit terpicu**: Kimi memiliki batas percakapan dalam rentang waktu tertentu. Mengirim pesan terlalu sering dapat menghentikan interaksi lebih lanjut. Tunggu 2–3 jam sebelum mencoba lagi, dan atur frekuensi percakapan Anda.
- **Kondisi jaringan buruk**: Sinyal lemah atau koneksi tidak stabil dapat membuat pesan gagal terkirim. Beralihlah ke jaringan lain lalu coba lagi.

## Percakapan melebihi 200.000 kata?

Batas konteks satu percakapan adalah sekitar 128K token (~200.000 kata). Setelah batas ini tercapai, model tidak lagi dapat menerima input baru.

<Callout type="tip">
**Tindakan yang disarankan**:

1. **Mulai percakapan baru**: Salin kesimpulan atau garis besar penting dari percakapan asli ke percakapan baru untuk melanjutkan.
2. **Buat dokumen serah terima**: Minta Kimi untuk "merangkum dan membuat dokumen serah terima," lalu tempelkan ke percakapan baru sebagai konteks awal — cara ini menghemat token sekaligus menjaga informasi tetap utuh.

**Catatan**: Menghapus pesan di dalam percakapan yang sama **tidak** membebaskan jendela konteks. Mulailah percakapan baru sebagai gantinya.
</Callout>

<Callout type="info">
Model thinking menghabiskan lebih banyak token untuk penalaran, sehingga batas konteks efektifnya menjadi lebih kecil. Saat mengerjakan dokumen panjang, gunakan K2 daripada K2-Thinking.
</Callout>

## Muncul pesan "mari bicara tentang hal lain"?

Pesan ini menandakan bahwa konten saat ini memicu kebijakan keamanan dan topik tersebut tidak dapat dilanjutkan. Cukup ketik topik baru untuk melanjutkan percakapan — tanpa perlu menunggu.

<Callout type="info">
Jika menurut Anda konten tersebut tidak melanggar, klik "👎" untuk mengirim masukan dan bantu kami menyempurnakan kebijakan keamanan kami.
</Callout>

## Muncul pesan "Kimi sedang agak lelah"?

Ini berarti terlalu banyak pengguna yang sedang online dan sumber daya komputasi sedang bekerja keras — rate limit pada jam sibuk. Tunggu 1–2 menit lalu coba lagi.

<Callout type="tip">
Untuk mengurangi waktu tunggu, pertimbangkan berlangganan paket keanggotaan agar mendapat akses prioritas ke sumber daya komputasi khusus.
</Callout>

## Tidak bisa mengunduh PPT/Word/Excel?

Jendela chat Kimi sendiri tidak menghasilkan file Office yang dapat diunduh:

| Jenis File | Tempat Membuatnya |
|-----------|-------------------|
| **Slide** | Buka [Kimi Slides](https://www.kimi.com/slides) — mendukung pembuatan dan pengunduhan secara online |
| **Word/Excel** | Gunakan mode **Agent** |
