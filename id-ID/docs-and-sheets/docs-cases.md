---
title: "Contoh penggunaan & pustaka prompt Kimi Docs"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Contoh penggunaan & pustaka prompt Kimi Docs - Pusat Bantuan Kimi"
  description="Contoh penggunaan dan prompt untuk Kimi Docs — mulai dari penyuntingan naskah hingga penerjemahan profesional dan desain PDF."
/>

# Contoh penggunaan & pustaka prompt Kimi Docs

<Callout type="info">
Contoh penggunaan dan prompt untuk Kimi Docs — mulai dari penyuntingan naskah hingga penerjemahan profesional dan desain PDF.
</Callout>

## Pakar penyuntingan

Layaknya penyunting naskah yang teliti, Kimi menguraikan masukan revisi, menunjukkan dengan tepat bagian yang relevan dalam dokumen Anda, lalu otomatis menyisipkan komentar serta saran yang rinci.

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Anda adalah editor naskah senior yang berspesialisasi dalam kota pintar dan perencanaan wilayah.\nBerikut ini adalah sekumpulan komentar tinjauan yang spesifik. Analisis masalah-masalah ini dengan saksama,\ntemukan paragraf atau gambar yang sesuai dalam dokumen Word terlampir, dan\nsisipkan masalah tersebut beserta saran revisi yang terperinci dalam bentuk komentar. Catatan:\nkomentar harus terbaca seolah-olah ditulis oleh manusia, bukan AI — hindari format berbutir (bullet).\n\nKeluarkan naskah asli beserta komentar terperinci.",
    },
  ]}
/>

## Penerjemahan profesional

Layaknya penerjemah yang tak kenal lelah, Kimi menerjemahkan PDF berbahasa Inggris setebal 50 halaman ke bahasa Prancis halaman demi halaman, dengan tetap mempertahankan seluruh rumus dan kode pada hasilnya.

**Contoh prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Temukan PDF tugas pertama dari mata kuliah CS336 Stanford dalam bahasa Inggris, lalu\nkonversikan menjadi PDF berbahasa Prancis. Pertahankan semua kode dan rumus matematika dalam versi bahasa Prancis.\nTerjemahan harus mengalir — jangan menghilangkan atau menambahkan konten apa pun.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Terjemahkan"
/>

## Layanan desain & penerbitan PDF

Layaknya desainer tata letak, Kimi membantu Anda merancang elemen visual, menata teks dan gambar secara otomatis, serta menghasilkan portofolio PDF berkualitas penerbitan.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Anda adalah AI penerbitan kuratorial yang berspesialisasi dalam seni modern, khususnya studi tentang Picasso.\nTugas Anda: gunakan citra visual yang melimpah untuk membantu penonton memahami mengapa Picasso harus ditinjau kembali\nberulang kali.\n\nKeluarkan langsung sebagai PDF.\n\nI. Persyaratan Inti\nCitra visual yang melimpah\nSetiap periode, setiap rujukan seniman, dan setiap aliran harus disertai gambar pendukung\nUtamakan gambar dari sumber asli\nGunakan gambar hasil AI berketelitian tinggi hanya jika gambar dari sumber tidak tersedia\n\nII. Sistem Visual\nLogo MAP sebagai tanda air satu halaman penuh\nTata letak asimetris\nKisi yang rapi dengan gangguan lokal yang terkendali\nHitam putih berkontras tinggi + aksen warna primer\n\nIII. Struktur Konten (buat semua bagian)\n1. Sampul\nPicasso\nSubjudul pameran (English & Chinese)\nTanda air logo MAP\n\n2. Mengapa Picasso (dengan gambar)\nPotret Picasso dari berbagai periode\nKarya dari berbagai periode disandingkan\n\n3. Periode dan Aliran (berpusat pada gambar)\nSetiap periode harus mencakup 8 hingga 12 gambar:\nPeriode Biru\nPeriode Mawar\nKubisme (analitis / sintetis)\nPerang dan Politik\nEksperimen Akhir\n\nJenis gambar:\nKarya utuh\nPotongan detail\nDiagram dekonstruksi struktural (dihasilkan AI bila diperlukan)\n\n4. Karya Utama\nTidak kurang dari 25 karya\nBeberapa karya boleh memenuhi halaman penuh\nPenekanan pada struktur, perspektif, dan dekonstruksi\n\n5. Cara Memandang Picasso\nPenjelasan komparatif berbasis gambar\nPenyajian berdampingan atas subjek yang sama\n\n6. Ruang Pameran dan Ritme\nZona tampilan berkepadatan tinggi\nZona penyangga untuk refleksi\n\n7. Posisi Kontemporer MAP\nMengapa Shanghai membutuhkan Picasso\nMengapa momen ini penting",
    },
  ]}
/>

## Skenario lain & contoh prompt

| Skenario | Contoh prompt |
|------|-----------|
| **Laporan profesional** | Tulis "Buku Putih Industri Ekonomi Ketinggian Rendah China 2026" dalam Word, dengan gaya McKinsey, mencakup ukuran pasar, lanskap persaingan, konteks kebijakan, dan rekomendasi investasi |
| **Tinjauan kontrak** | [Unggah contract.docx] Tinjau kontrak ini dari sudut pandang pengacara, identifikasi klausul berisiko, dan sisipkan komentar |
| **Pemodelan keuangan** | Bangun model proyeksi keuangan SaaS tiga tahun dalam Word, mencakup proyeksi pendapatan, struktur biaya, dan arus kas |
| **Penyaringan dokumen panjang** | Saring makalah akademis 30.000 kata ini menjadi ringkasan eksekutif 5.000 kata dalam format Word |
| **Perbandingan beberapa versi** | [Unggah Kontrak V1 dan V2] Bandingkan kedua versi, daftarkan semua perubahan beserta deskripsi dampaknya, dan keluarkan sebagai Word |
