---
title: "Contoh kasus penggunaan & koleksi prompt Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Contoh kasus penggunaan & koleksi prompt Kimi Sheets - Pusat Bantuan Kimi"
  description="Contoh kasus penggunaan dan prompt untuk Kimi Sheets — mulai dari valuasi keuangan hingga pembuatan storyboard."
/>

# Contoh kasus penggunaan Kimi Sheets

<Callout type="info">
Contoh kasus penggunaan dan prompt untuk Kimi Sheets — mulai dari valuasi keuangan hingga pembuatan storyboard.
</Callout>

## Valuasi keuangan

Layaknya seorang analis keuangan, Kimi mengumpulkan data keuangan riil, menyusun model valuasi DCF, dan melakukan simulasi valuasi perusahaan.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Lakukan valuasi DCF atas XX Healthcare. Masukkan seluruh proses valuasi dan datanya\nke dalam lembar kerja Excel, kutip sumber data, jelaskan alasan di balik angka-angka estimasi\nseperti ukuran pasar, laju pertumbuhan, dan pangsa pasar, serta sertakan analisis lingkungan makroekonomi.",
    },
  ]}
/>

## Pembuatan storyboard

Layaknya seorang storyboard artist, Kimi membuat skrip storyboard video dalam format Excel yang mencakup durasi, deskripsi shot, narasi, efek suara, dan frame referensi.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Buat skrip storyboard di Excel untuk video promosi 3D tentang\npembaruan terbaru Kimi AI — OK Computer — yang mendukung pembuatan dan pengeditan dokumen Office\n(mis. pemformatan tesis panjang di Word, pemodelan dan analisis data di Excel,\npembuatan slide otomatis).\n\nExcel harus mencakup:\nKolom A: nomor urut (1-20)\nKolom B: durasi kumulatif (detik)\nKolom C: durasi shot (detik)\nKolom D: deskripsi shot (3D / gerakan kamera)\nKolom E: narasi/teks (gunakan warna latar berbeda untuk membedakan narasi\ndari teks di layar)\nKolom F: efek suara/musik latar (gunakan warna font berbeda untuk membedakannya)\nKolom G: bingkai storyboard (buat satu gambar untuk setiap shot — jaga konsistensi visual\ndengan menggunakan gaya sketsa garis hitam putih klasik)\n\nRancang sendiri kerangka kreatif, naskah, dan storyboard, lalu\nbuat bingkai-bingkai untuk melengkapi naskah ini, disajikan dalam format Excel yang rapi.",
    },
  ]}
/>

## Skenario lain & contoh prompt

| Skenario | Contoh prompt |
|------|-----------|
| Pemodelan keuangan | Lakukan valuasi DCF untuk Perusahaan XX — masukkan seluruh proses dan datanya ke Excel, cantumkan sumbernya, dan jelaskan alasan di balik asumsi utama seperti tingkat pertumbuhan |
| Perbandingan data industri | Riset 20 perusahaan NEV domestik teratas — sajikan kapitalisasi pasar, volume penjualan 2025, model andalan, dan berita terkini dalam tabel perbandingan |
| Pengkatalogan literatur | Cari makalah tentang optimasi inferensi LLM dari tiga bulan terakhir — susun ke Excel berisi judul, penulis, metodologi inti, dan kontribusi utama |
| Penggabungan banyak sheet | [Unggah 12 file Excel penjualan bulanan] Gabungkan 12 sheet ini menjadi ringkasan tahunan, hitung tingkat pertumbuhan bulan ke bulan, dan gunakan formula untuk menautkan antar sheet |
| Ekstraksi sales lead | [Unggah PDF/gambar pameran] Ekstrak seluruh informasi peserta pameran dan susun ke file Excel sales leads berisi 1.000 baris dengan nama perusahaan, kontak, dan kategori produk |
| Manajemen proyek | Buat Excel manajemen proyek PMO dengan daftar tugas, penanggung jawab, status progres, diagram Gantt, dan penautan antar sheet |
| Visualisasi data | Ubah Excel data penjualan ini menjadi dashboard visual dengan grafik garis tren, grafik distribusi regional, dan grafik donat tingkat penyelesaian |
