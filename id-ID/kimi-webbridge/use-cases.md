---
title: "Demo Kasus Penggunaan Kimi WebBridge"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Demo Kasus Penggunaan Kimi WebBridge - Pusat Bantuan Kimi"
  description="Jelajahi berbagai kasus penggunaan umum Kimi WebBridge, termasuk contoh Skill dan CLI untuk perencanaan perjalanan, pencarian tempat sewa, riset literatur, dan lainnya."
  ogType="article"
/>

# Demo Kasus Penggunaan Kimi WebBridge

Kimi WebBridge memungkinkan Agen mengoperasikan browser seperti manusia sungguhan, memanfaatkan situs web tempat Anda sudah login untuk menavigasi, mengekstrak, dan menyusun informasi secara otomatis.

<Callout type="tip">
Saat menggunakan WebBridge, semakin spesifik deskripsi tugas Anda, semakin akurat Agen dapat menyelesaikannya. Sebaiknya tentukan situs web tujuan, filter, dan format keluaran yang diinginkan. Jika struktur halaman cukup kompleks, Anda juga dapat meminta Agen mengambil screenshot terlebih dahulu untuk memastikan kondisi halaman sebelum melanjutkan.
</Callout>

Dalam praktiknya, WebBridge sering digunakan bersama Skill dan CLI: Skill merekam pengalaman tugas—situs web mana yang perlu dikunjungi, langkah apa yang harus diikuti untuk mengumpulkan informasi, dan bagaimana hasil disusun; CLI menyediakan kemampuan konkret seperti mencari, membaca halaman, mengunduh file, dan mengueri data terstruktur.

Beri tahu Agen AI, dalam satu kalimat, apa yang berulang kali Anda lakukan di web. Agen dapat membuat CLI untuk Anda yang langsung memakai sesi login Chrome asli Anda—tanpa API, dan tanpa perlu mengonfigurasi atau mengelola token API.

Skills dan CLI yang digunakan dalam skenario di bawah dibuat dengan cara ini. Anda dapat langsung menginstal dan menggunakannya, atau menjadikannya contoh referensi.

<Callout type="warning">
Skills dan CLI yang disediakan di halaman ini hanya untuk pembelajaran dan pertukaran teknis. Jika Anda memiliki pertanyaan atau kekhawatiran, hubungi <a href="mailto:support@moonshot.cn">support@moonshot.cn</a>.
</Callout>

## Pencarian dan Pengorganisasian Informasi

Saat Anda perlu mencari di beberapa situs web sekaligus, WebBridge dapat membuat Agen otomatis membuka halaman target, mengekstrak konten utama, lalu menyusunnya menjadi keluaran terstruktur, sehingga Anda tidak perlu repot membuka halaman satu per satu serta menyalin dan menempel secara manual.

### Perencanaan Perjalanan

Berpindah di antara platform penerbangan, situs pemesanan hotel, dan komunitas perjalanan untuk membandingkan harga dan jadwal, lalu menyusun rencana perjalanan, tabel anggaran, dan rekomendasi akomodasi.

Alat terkait:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya sedang merencanakan perjalanan 5 hari 4 malam ke Kyoto pada November untuk dua orang, dengan anggaran sekitar RMB 8,000. Tolong periksa penerbangan, hotel, dan jam buka objek wisata, lalu susun hasilnya menjadi rencana perjalanan per hari dan tabel anggaran.",
    },
  ]}
/>

Instalasi dan penggunaan:

1. Unduh ctrip-cli dan booking-cli dari [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Jalankan `npx skills add better-world-ai/x-cli --skill travel-planning`
3. Buka Agen lokal, seperti klien yang kompatibel dengan Skill seperti Kimi Code, Claude Code, Codex CLI, atau Cursor, lalu kirim prompt di atas

### Penyaringan Iklan Sewa

Cari di beberapa platform sewa sekaligus, filter iklan berdasarkan biaya sewa, waktu komuter, tipe unit, dan kriteria lain, gabungkan informasinya, lalu urutkan rekomendasi.

Alat terkait:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong bantu saya mencari hunian sewa di dekat Zhangjiang Hi-Tech Park Station di Shanghai. Anggaran saya maksimal RMB 4,500, waktu komuter harus di bawah 40 menit, dan saya lebih memilih apartemen utuh satu kamar tidur. Buka beberapa platform, susun tautan iklan, harga, luas lantai, dan waktu komuter, lalu berikan daftar kontak prioritas.",
    },
  ]}
/>

Instalasi dan penggunaan:

1. Unduh 58-cli, anjuke-cli, apartments-cli, rightmove-cli, dan idealista-cli dari [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Jalankan `npx skills add better-world-ai/x-cli --skill rental-assistant`
3. Buka Agen lokal, seperti klien yang kompatibel dengan Skill seperti Kimi Code, Claude Code, Codex CLI, atau Cursor, lalu kirim prompt di atas

## Riset dan Analisis Konten

WebBridge dapat membantu Agen otomatis menelusuri hasil pencarian, membuka halaman detail, mengekstrak judul, data, komentar, dan informasi lain, lalu menganalisis serta merangkumnya. Ini sangat cocok untuk tugas riset yang perlu menelusuri banyak halaman web.

### Riset Literatur

Cari literatur akademik, ekstrak abstrak paper, metode inti, kesimpulan eksperimen, dan relasi sitasi, lalu keluarkan ulasan terstruktur.

Alat terkait:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong riset paper representatif dari dua tahun terakhir tentang memori AI Agent, susun judul, penulis, abstrak, metode inti, dan tautan open-source, lalu rangkum arah perkembangan risetnya.",
    },
  ]}
/>

Instalasi dan penggunaan:

1. Unduh scholar-cli dari [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Jalankan `npx skills add better-world-ai/x-cli --skill paper-research`
3. Buka Agen lokal, seperti klien yang kompatibel dengan Skill seperti Kimi Code, Claude Code, Codex CLI, atau Cursor, lalu kirim prompt di atas

### Pencarian Topik Mendalam

Saat ingin memahami topik yang belum familier, cara lama adalah membuka mesin pencari, mengeklik setiap hasil dan membacanya sampai tuntas, menyalin poin-poin penting, lalu menyusunnya menjadi catatan—setengah hari pun habis.

Biarkan AI menjalankan proses ini untuk Anda: AI mencari secara otomatis, mengikuti hasil untuk mengambil teks lengkap, lalu dapat menyintesis ringkasan untuk Anda atau menyimpan teks asli agar Anda baca sendiri. Untuk topik riset, memantau perkembangan baru di suatu bidang, atau mengumpulkan bahan tulisan, gunakan ini terlebih dahulu agar semua informasi terkumpul di satu tempat.

Alat terkait:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Cari model AI lokal yang layak digunakan pada 2025 dan ambil teks lengkap dari 10 hasil teratas.",
    },
  ]}
/>

Instalasi dan penggunaan:

1. Unduh google-cli atau baidu-cli dari [Releases](https://github.com/better-world-ai/x-cli/releases)
2. Buka Agen lokal, seperti klien yang kompatibel dengan Skill seperti Kimi Code, Claude Code, Codex CLI, atau Cursor, lalu kirim prompt di atas

## Bantuan Kantor Sehari-hari

Gunakan kemampuan otomasi WebBridge untuk menangani operasi web berulang dan meningkatkan efisiensi kerja.

### Perbandingan Harga E-commerce

Cari produk yang sama di beberapa platform e-commerce, bandingkan harga, spesifikasi, dan ulasan pengguna, lalu susun opsi pembelian terbaik.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya ingin membeli monitor 27 inci 4K dengan anggaran sekitar RMB 2,000. Tolong cari dan bandingkan opsi di platform e-commerce arus utama, susun harga, merek, dan ulasan pengguna, lalu rekomendasikan pilihan dengan value terbaik.",
    },
  ]}
/>

### Ekstraksi Data Web

Ekstrak data terstruktur seperti tabel dan daftar dari halaman web, lalu susun otomatis ke format yang ditentukan, sehingga Anda tidak perlu repot menyalin dan menempel secara manual.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong bantu saya membuka halaman web ini, ekstrak tabel harga produk di halaman tersebut, lalu keluarkan sebagai daftar yang jelas.",
    },
  ]}
/>

Untuk kasus penggunaan lainnya, lihat [situs web resmi Kimi WebBridge](https://www.kimi.com/zh-cn/features/webbridge).
