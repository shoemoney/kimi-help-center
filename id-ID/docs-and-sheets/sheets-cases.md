---
title: "Contoh kasus penggunaan & koleksi prompt Kimi Sheets"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Contoh kasus penggunaan \u0026 koleksi prompt Kimi Sheets - Pusat Bantuan Kimi"
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
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
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
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
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
