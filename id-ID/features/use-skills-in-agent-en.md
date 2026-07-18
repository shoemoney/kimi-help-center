---
title: "Menggunakan Skills di Mode Agent"
slug: "use-skills-in-agent"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Menggunakan Skills di Mode Agent - Pusat Bantuan Kimi"
  description="Pelajari cara memanggil skill, membuat skill kustom, menemukan skill rekomendasi, dan memperluas kemampuan Kimi di Mode Agent."
  ogType="article"
/>

# Menggunakan Skills di Mode Agent

## Bagaimana cara memanggil Skills?

Di kotak masukan Mode Agent Kimi, ada tiga cara untuk memanggil Skills:

**Cara 1: Gunakan perintah `/`**

Ketik `/` di kotak masukan untuk memunculkan daftar Skill. Klik nama Skill untuk menyisipkannya. Anda juga bisa mengetik kata kunci setelah `/` untuk menyaring daftar.

**Cara 2: Gunakan menu "➕"**

Klik tombol **➕** di samping kotak masukan. Pilih Skill dari menu, dan nama Skill akan disisipkan sebagai teks di kotak masukan.

<Frames
  src="./images/skills/加号-en.png"
  alt="Invoke skills using plus menu"
/>

**Cara 3: Biarkan Kimi yang memutuskan**

Cukup jelaskan kebutuhan Anda. Kimi akan otomatis mengenali dan memicu Skill yang paling sesuai berdasarkan isi tugas Anda.

### Contoh: Menggunakan Skills untuk membuat laporan analisis SEO

Misalkan Anda seorang content manager yang ingin menganalisis performa SEO situs Anda:

1. Ketik `/` di kotak masukan, lalu cari dan pilih Skill `seo-analyzer`.
2. Lanjutkan dengan mengetik: `Tolong analisis performa SEO https://help.com/zh-cn/help, sebutkan masalah utama dan saran optimasinya.`

<Frames
  src="./images/skills/SEO-en.png"
  alt="SEO analysis"
/>

3. Setelah dikirim, Kimi akan otomatis mencari, menyusun, dan menghasilkan laporan terstruktur mengikuti alur kerja analisis SEO.

Anda tidak perlu memberi tahu Kimi cara melakukan analisisnya—alur kerjanya sudah ditentukan di dalam Skill.

## Menemukan dan mengelola Skills

### Pilihan Kimi

Kimi menyediakan sekumpulan skill rekomendasi yang siap pakai dan bisa ditambahkan dengan satu klik:

<Frames
  src="./images/skills/kimi-picks.png"
  alt="Recommended skills"
/>

## Membuat Skills kustom

Jika skill rekomendasi Kimi belum memenuhi kebutuhan Anda, Anda bisa membuat skill kustom yang disesuaikan dengan alur kerja spesifik Anda.

**Kapan sebaiknya membuat skill kustom?**

- Anda punya tugas berulang yang perlu dikerjakan berkali-kali (misalnya laporan kompetitor mingguan).
- Anda ingin Kimi menghasilkan konten dalam format khusus perusahaan Anda.
- Anda punya seperangkat metode kerja yang ingin diikuti langsung oleh Kimi.

Skill yang baik sebaiknya mengerjakan satu hal dan mengerjakannya dengan baik. Jangan menjejalkan semua kebutuhan ke dalam satu skill.

### Opsi 1: Dokumen menjadi skill

Jika Anda sudah punya templat siap pakai, dokumen standar, atau file contoh, Anda bisa langsung mengunggahnya dan membiarkan Kimi mempelajarinya untuk menghasilkan skill yang sesuai.

1. Pilih **Office Document to Skill** di panel **Skills**.
2. Klik atau seret file ke area unggah. Format yang didukung: `docx`, `xlsx`, `pdf`, `pptx`, dan tangkapan layar dokumen. Maksimal 3 file per unggahan, masing-masing tidak lebih dari 100 MB.

<Frames
  src="./images/skills/document.png"
  alt="Upload documents to generate skills"
/>

3. Isi deskripsi skill, beri tahu Kimi apa yang harus dilakukan skill ini. Contoh: "Bantu saya menyusun data penjualan mingguan mengikuti gaya dan format templat ini."
4. Klik **Create Skill**.

### Opsi 2: Buat bersama Kimi

Jika Anda tidak punya dokumen siap pakai, Anda bisa langsung menjelaskan kebutuhan Anda lewat dialog, dan Kimi akan memandu Anda langkah demi langkah hingga skill selesai dibuat.

Ketik `/skill-creator` di kotak masukan, lalu jelaskan Skill apa yang ingin Anda buat. Kimi akan membantu menyusun kebutuhan Anda menjadi Skill yang lengkap.

<Frames
  src="./images/skills/create-skill-en.png"
  alt="Create Skills through dialogue"
/>

### Mengelola Skills yang ada

Di panel **Skills**, beralih ke tab **Custom Skills** untuk mengedit, memperbarui dokumen, atau menghapus Skills yang sudah Anda buat.

<Frames
  src="./images/skills/managing-skills.png"
  alt="Manage custom Skills"
/>

<Callout type="info">
Skills didukung di Mode Agent dan Kimi Claw. Skills dengan akhiran `swarm` hanya tersedia dalam skenario Swarm (klaster Agent) dan tidak akan ditampilkan dalam konteks lain.
</Callout>

## Menulis deskripsi Skill yang efektif

Kimi mengandalkan deskripsi Skill untuk menentukan "kapan menggunakan Skill ini." Semakin jelas deskripsi Anda, semakin akurat pula pemicuan Skill tersebut.

Deskripsi Skill yang lengkap sebaiknya mencakup:
- Fungsi inti dari Skill.
- Skenario yang cocok untuknya.
- Kata pemicu yang direspons.
- Pengenalan penyebutan kebutuhan secara tidak langsung.

<ComparisonBlock
  wrong={"Membantu pengguna mencari dan menemukan Skills."}
  correct={"Membantu pengguna mencari dan menemukan Skills. Digunakan ketika pengguna secara eksplisit ingin menemukan jenis Skill tertentu atau menjelaskan suatu masalah dan berharap mendapatkan rekomendasi Skill. Kata pemicu mencakup “Find Skills”, “Search Skills”, “Is there a Skill that can do X?”, dan sebagainya."}
/>
