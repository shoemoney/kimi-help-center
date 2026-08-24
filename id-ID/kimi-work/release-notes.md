---
title: "Catatan Rilis"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Catatan Rilis Kimi Work - Pusat Bantuan Kimi"
  description="Catatan pembaruan versi Kimi Work: fitur baru, perubahan, dan perbaikan untuk Mac dan Windows, diperbarui secara berkala."
/>

# Catatan Rilis

Halaman ini mencatat pembaruan versi Kimi Work, termasuk fitur baru, perubahan, dan perbaikan, dan terus diperbarui. Unduh versi terbaru: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.2 (2026-08-24)

**Baru**

- Peliharaan desktop baru: Kimi menemani dan berinteraksi dengan Anda sebagai peliharaan desktop
- Perintah Slash baru: kotak input kini mendukung perintah compact (kompres konteks), fork (cabang percakapan), dan goal (tujuan)
- Percakapan workspace sementara baru: mulai mengobrol dengan cepat tanpa membuat proyek terlebih dahulu
- Lebih banyak format pratinjau di workspace: dukungan untuk csv / tsv, audio dan video, ico, dan lebih banyak format teks

**Perubahan**

- Kontrol Agent atas browser bawaan kini aktif secara default

**Perbaikan**

- Memperbaiki masalah pesan pertama yang sekilas menampilkan keadaan kosong setelah dikirim
- Memperbaiki masalah pesan dalam antrean yang tidak mempertahankan tingkat izin yang dipilih dengan benar
- Memperbaiki masalah Launcher yang dapat keliru memicu permintaan izin “Input Monitoring” macOS pada beberapa tata letak keyboard
- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi dan stabilitas

## 3.2.1 (2026-08-21)

**Baru**

- Launcher global baru: panggil kotak input kapsul mengambang di desktop kapan saja, di mana saja dengan pintasan keyboard global
  - Saat dipanggil, secara otomatis membawa file yang sedang dipilih di Finder / File Explorer, dan mendukung menempelkan gambar, menambahkan lampiran, serta menyeret tangkapan layar
  - Ketik “/” untuk membuka menu plugin dan skill (mendukung pencarian pinyin), serta memilih workspace
  - Tahan pintasan untuk mendikte; setelah dikirim, kotak menyusut menjadi kapsul mini, dan Anda dapat kembali ke aplikasi utama dengan satu klik untuk melihat jawabannya
- Antrean pesan baru: selama Agent menjawab, Anda dapat terus mengirim pesan; pesan baru secara otomatis mengantre, dengan dukungan menyusun ulang lewat seret, mengedit, menghapus, dan pratinjau detail
- Dikte suara di kotak input Work: klik mikrofon atau tahan pintasan untuk mulai mendikte, dengan pengenalan campuran Mandarin-Inggris

**Perubahan**

- Logika notifikasi pesan diperbarui: Anda dapat mengganti aturan notifikasi pesan di Pengaturan

**Perbaikan**

- Konsumsi daya siaga dioptimalkan, mengurangi penggunaan sumber daya latar belakang saat aplikasi tidak aktif
- Memperbaiki masalah ikon Dock yang menghilang di macOS
- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi dan stabilitas

## 3.2.0 (2026-08-19)

**Baru**

- Menambahkan browser bawaan Agent: tab browser terikat pada percakapan dan berada di area pratinjau, dan Agent dapat mengoperasikan browser secara langsung — mengklik, mengetik, dan lainnya; di Mac, Anda juga dapat mengimpor cookie dari browser Chrome lokal untuk menggunakan kembali sesi login yang sudah ada (nonaktif secara default dan dapat diaktifkan di Pengaturan)
- Lokalisasi dalam 16 bahasa: klien kini mendukung 16 bahasa, naik dari sebelumnya hanya bahasa Mandarin dan Inggris

**Perubahan**

- Kimi WebBridge kini menjadi plugin: kontrol browser nyata telah dipindahkan ke bentuk plugin, yang nonaktif secara default dan dapat diaktifkan di Pengaturan
- Halaman daftar dasbor telah dihapus; kini Anda berpindah antar dasbor melalui bilah tab di bagian atas
- Dasbor kini menjadi jenis area pratinjau: dasbor dapat dibuka di area pratinjau percakapan, dan beberapa dasbor dapat dibuka secara paralel

**Perbaikan**

- Rendering pesan streaming ditingkatkan: respons panjang kini dirender lebih mulus
- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi dan stabilitas

## 3.1.10 (2026-08-16)

**Perbaikan**

- Memperbaiki masalah di mana aplikasi mengalami crash saat upgrade pada sebagian pengguna Windows

## 3.1.9 (2026-08-15)

**Baru**

- Pasar plugin pribadi telah hadir: pasar plugin kini memiliki bagian "Plugin Pribadi" tempat Anda dapat menjelajahi dan memasang plugin dari pengembang individu

**Perbaikan**

- Memperbaiki masalah di mana konten Markdown streaming terkadang gagal dimuat ulang
- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi dan stabilitas

## 3.1.8 (2026-08-11)

**Baru**

- Navigasi riwayat pesan: bilah navigasi pesan baru di sisi kanan chat panjang memungkinkan Anda melompat cepat kembali ke pesan sebelumnya
- Percabangan percakapan: mulai cabang baru dari giliran mana pun untuk terus menjelajah, dengan membawa riwayat chat percakapan asli
- Edit dan rewind: edit pesan terakhir Anda dan buat ulang responsnya
- Folder proyek: pindahkan percakapan masuk atau keluar proyek, dan sematkan proyek ke area sematan sidebar
- Pengeditan file transparan: setelah Agent memodifikasi file, kartu ringkasan diff dibuat — tinjau perubahan baris demi baris dan kembalikan dengan satu klik; file workspace diperbarui otomatis saat berubah di disk
- Penemuan dan pembuatan skill: temukan dan buat skill kustom di Work, dengan dukungan pencarian skill
- Komponen dasbor yang disematkan ke desktop kini memiliki tombol selalu di atas (always-on-top)

**Perubahan**

- Jendela percakapan mandiri baru kini mendukung Chat
- Pesan pengguna yang terlalu panjang di kotak input kini diciutkan

**Perbaikan**

- Memperbaiki pratinjau tautan file PDF di Windows; Work Settings tidak lagi berkedip putih dalam mode gelap; menempelkan dari clipboard Word kini mengembalikan teks, bukan lampiran gambar
- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi dan stabilitas

## 3.1.7 (2026-08-05)

**Baru**

- Mendukung masukan tingkat pesan: Anda dapat menyukai atau tidak menyukai pesan tertentu dalam balasan asisten

**Perubahan**

- Komponen papan yang disematkan ke desktop tidak lagi dipaksa selalu berada di atas

**Perbaikan**

- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi

## 3.1.6 (2026-07-29)

**Baru**

- Editor slide PPT tersedia: buka dan edit slide langsung di workspace, perubahan langsung terlihat
- Mendukung anotasi tangkapan layar untuk file di area pratinjau dan browser; setelah selesai, anotasi dapat dikirim langsung ke Agent untuk direvisi
- Mendukung migrasi disk penyimpanan di Windows: data Work dapat dipindahkan ke disk lain
- Instalasi di Windows kini mendukung pemilihan lokasi instalasi

**Perubahan**

- Meningkatkan beberapa masalah token efficiency

**Perbaikan**

- Memperbaiki beberapa bug dan meningkatkan beberapa interaksi
