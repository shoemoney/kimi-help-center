---
title: "Menggunakan Skill di Kimi Claw"
slug: "use-skills-in-claw"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Menggunakan Skill di Kimi Claw - Pusat Bantuan Kimi"
  description="Pelajari cara mengunduh, menyinkronkan, memanggil, dan menyesuaikan skill di Kimi Claw untuk otomatisasi alur kerja yang efisien serta pengelolaan memori jangka panjang."
  ogType="article"
/>

# Menggunakan Skill di Kimi Claw

Kimi Claw adalah asisten AI dengan kepribadian unik dan kemampuan memori jangka panjang yang dapat menjalankan tugas terjadwal di latar belakang, berkolaborasi lintas platform, mempertahankan memori konteks, serta mengotomatiskan pekerjaan yang merepotkan seperti pengumpulan informasi, pemantauan, dan notifikasi.

## Memperoleh dan mengelola skill

### Mengunduh skill dari Kimi

Anda dapat mengunduh skill resmi atau kustom dari platform Kimi ke Claw lokal Anda:

1. Buka Kimi Claw dan masuk ke bagian **Skill**.
2. Telusuri daftar skill, pilih skill yang Anda butuhkan, lalu pilih **Unduh ke Claw**.
3. Setelah diunduh, Anda dapat langsung memanggilnya di Claw.

<Callout type="info">
Ketika skill diperbarui, versi lokal tidak akan otomatis ditimpa. Untuk mendapatkan konten terbaru, silakan unduh ulang secara manual.
</Callout>

### Menyinkronkan skill dari Kimi Agent

Jika Anda sudah menambahkan skill di Kimi Agent (versi web), Kimi Claw dapat langsung menyinkronkan dan menampilkan skill tersebut tanpa perlu konfigurasi ulang.

Ketika Kimi Claw mendeteksi versi skill yang tidak konsisten antara kedua platform, akan muncul prompt **Perlu Pembaruan** di samping skill. Klik untuk menyinkronkan ke versi terbaru.

### Menggunakan pustaka skill Clawhub

Kimi Claw dilengkapi **Pustaka Skill Clawhub** bawaan yang berisi skill berkualitas tinggi dan terverifikasi untuk berbagai skenario kerja umum:

- **Penyusunan Informasi**: ringkasan berita, perbandingan kompetitor, templat notulen rapat.
- **Pekerjaan Analisis**: tinjauan saham dan industri, interpretasi data, identifikasi risiko.
- **Pengelolaan Alur Kerja**: proses lengkap mulai dari penguraian kebutuhan hingga penyampaian hasil.

Masuk ke pustaka skill, telusuri atau cari skill yang sesuai dengan skenario kerja Anda, lalu klik untuk memasangnya.

## Memanggil skill

Di kotak input Kimi Claw, ada tiga cara memanggil skill, sama seperti versi web:

- Ketik `/` untuk memilih skill dari daftar pop-up.
- Klik tombol **+** di samping kotak input dan pilih dari menu.
- Ketik nama skill secara langsung.

<Callout type="warning">
Entri skill di OpenClaw pihak ketiga, Kimi Claw lokal, dan Kimi Claw desktop saat ini belum tersedia.
</Callout>

## Mengajari Claw cara kerja Anda

Selain menggunakan skill siap pakai, Anda dapat "mengajari" Claw pengalaman dan metode yang telah Anda kumpulkan, sehingga ia bekerja jangka panjang sesuai kebiasaan Anda. Ada tiga cara utama:

**Berikan proses**: Beri tahu Claw langkah-langkah spesifik yang Anda lakukan saat menangani jenis tugas tertentu.

**Berikan standar**: Beri tahu Claw apa yang paling Anda utamakan—akurasi, kecepatan, kelayakan, atau pengendalian risiko.

**Berikan templat**: Beri tahu Claw format keluaran yang Anda inginkan. Misalnya, jika struktur laporan harian kerja Anda adalah "Yang saya kerjakan hari ini → Kendala yang dihadapi → Rencana besok → Butuh bantuan", sampaikan langsung kepada Claw, dan ia akan menyusun laporan berikutnya dalam format tersebut.

### Studi kasus

Misalkan Anda seorang product manager yang membutuhkan Kimi Claw untuk membantu meninjau masukan pengguna setiap minggu. Anda dapat mengajari Claw seperti ini:

1. **Proses**: "Setiap Senin, setelah mengumpulkan masukan pengguna, kategorikan dulu berdasarkan modul fitur, lalu beri tanda tingkat prioritas (P0-P3), dan terakhir ekstrak masalah yang paling sering muncul."

2. **Standar**: "Saya paling mengutamakan keaslian dan kelayakan masukan, jadi singkirkan pendapat yang berulang dan simpan hanya masukan yang disertai deskripsi kasus penggunaan yang spesifik."

3. **Templat**: "Format keluaran: Modul Fitur | Isi Masukan | Prioritas | Jumlah Pengguna | Saran Solusi"

Setelah Anda menyampaikan "Bantu saya menyusun masukan pengguna minggu ini," Claw akan otomatis memprosesnya sesuai standar tersebut tanpa perlu Anda menjelaskan ulang setiap kali.

<Callout type="tip">
Melalui perpaduan antara skill dan metode kerja yang disesuaikan, Kimi Claw dapat menyelesaikan tugas dengan lebih cepat dan akurat, secara konsisten menghasilkan keluaran yang sesuai dengan kebiasaan Anda.
</Callout>

## Catatan penggunaan di perangkat seluler

Saat menggunakan skill di perangkat seluler, perhatikan batasan berikut:

- Jika Anda telah menambahkan skill di versi web, menu plus akan menampilkan entri skill. Mengkliknya akan menyisipkan skill sebagai teks di kotak input.
- Jika skill belum ditambahkan di versi web, menu plus di perangkat seluler tidak akan menampilkan entri skill.
- Jika riwayat percakapan berisi konten yang dihasilkan skill, akan muncul prompt: **Skill dihasilkan, saat ini hanya didukung di platform web Kimi**.

Kami menyarankan agar sebagian operasi pengelolaan skill (seperti membuat, mengedit, menghapus) diselesaikan di platform web, sementara perangkat seluler digunakan terutama untuk memanggil skill yang sudah ada.
