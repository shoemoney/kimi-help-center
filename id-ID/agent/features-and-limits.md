---
title: "Fitur & keterbatasan Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Fitur & keterbatasan Agent

<SeoMeta
  title="Fitur & Keterbatasan Agent - Pusat Bantuan Kimi"
  description="Pelajari kemampuan Kimi Agent, tips penggunaan, keterbatasan, dan praktik terbaik untuk mendapatkan hasil optimal."
/>

<Callout type="info">
**Kimi Agent** adalah asisten bertenaga AI yang menjalankan tugas kompleks secara mandiri melalui penalaran multilangkah dan integrasi alat. Panduan ini membahas praktik terbaik, keterbatasan, dan FAQ agar Anda dapat memaksimalkan mode Agent.
</Callout>

## Tips penggunaan

**(1) Sebelum mengirim tugas**

Sampaikan informasi latar belakang dan batasan dengan jelas — konteks proyek, kasus penggunaan, serta kebutuhan khusus — agar Kimi dapat memahami maksud Anda dengan lebih tepat.

**(2) Saat eksekusi berlangsung**

Kimi Agent berjalan secara asinkron di latar belakang. Jika halaman web tampak membeku atau terhenti, **jangan klik "Stop"** — tindakan ini akan menghentikan eksekusi tugas. Anda dapat meninggalkan halaman; tugas akan tetap berjalan di latar belakang dan Anda akan menerima notifikasi saat selesai. Untuk tugas yang diperkirakan memakan waktu lama (misalnya, Agent Swarm), mohon bersabar.

**(3) Skenario website**

Agent dapat menghasilkan konten full-stack, termasuk antarmuka frontend, layanan backend, dan logika penyimpanan persisten. Jika proyek tidak berjalan sesuai harapan, penyebabnya biasanya terkait startup sandbox, inisialisasi database, konfigurasi autentikasi, atau tindakan publikasi yang belum dilakukan. Agent standar berjalan di cloud dan tidak dapat mengakses file lokal atau sistem intranet perusahaan secara langsung. Untuk akses file lokal atau intranet, gunakan Kimi Claw.

<Callout type="tip">
**Perlu mengakses file lokal?** Gunakan Kimi Claw untuk akses aman ke file lokal dan sistem intranet perusahaan. Pelajari selengkapnya di [dokumentasi Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Percakapan multigilir dan penyesuaian tugas**
Dalam beberapa putaran dialog dan revisi, Agent mungkin "melupakan" sebagian detail awal. Sebaiknya tetapkan terlebih dahulu kerangka tugas dan poin-poin utama, lalu lakukan penyesuaian secara bertahap.

**(5) Pemecahan tugas besar**
Untuk tugas besar dan kompleks, pecah menjadi 2–3 fase lalu kirimkan ke Kimi secara bertahap, atau gunakan Agent Swarm.

**(6) Keterbatasan keluaran file**
Dalam mode Agent standar, umumnya hanya satu file yang dapat dihasilkan per tugas (misalnya, dokumen atau spreadsheet). Untuk beberapa file (misalnya, dokumen Word dan PPT sekaligus), gunakan Agent Swarm.

**(7) Batas konteks dan keseimbangan keluaran**
Karena batas konteks model bahasa besar adalah 256K karakter (sekitar 40.000–50.000 karakter Tionghoa / ~100.000 kata bahasa Inggris), pemrosesan file dalam jumlah besar perlu menyeimbangkan volume masukan dan keluaran.

<Callout type="warning">
**Catatan Batas Konteks**: Agent menggunakan jendela konteks 256K karakter. Untuk hasil optimal, berikan konteks yang ringkas dan hindari membebani tugas dengan file yang tidak diperlukan.
</Callout>

## Catatan penting

<Callout type="warning">
**Penggunaan credit**: Tugas Agent menggunakan credit dari pool bersama. Kimi Code juga menggunakan pool bersama ini, tetapi memiliki rate limit 5 jam / mingguan tersendiri yang hanya berlaku untuk Kimi Code. Setiap tugas Agent biasanya menggunakan 1 unit credit. Untuk informasi credit terperinci berdasarkan tingkat keanggotaan, lihat [credit & Penagihan](/agent/quota-and-billing).

- 60–720 tugas Agent/bulan, bergantung pada paket Anda
</Callout>

- **Waktu eksekusi**: Dalam mode Agent, satu tugas biasanya membutuhkan 5–20 menit. Tugas Agent Swarm dapat memakan waktu lebih lama. Anda dapat meninggalkan halaman — cukup jangan klik Stop agar tugas tidak terhenti.
- **Penggunaan credit**: Tugas Agent menggunakan credit dari pool bersama, yang juga digunakan Kimi Code (Kimi Code memiliki rate limit 5 jam / mingguan tersendiri).
- **Tugas sederhana**: Untuk tanya jawab sederhana, mode chat standar disarankan agar respons lebih cepat.

<Callout type="warning">
**Kepatuhan Konten**: Fitur Agent tunduk pada [Kimi User Service Agreement](https://www.kimi.com/user/agreement/modelUse?version=v2). Pembuatan konten terlarang tidak didukung; mengirimkan konten terlarang dapat menyebabkan penangguhan layanan.
</Callout>

## FAQ

**T: Apa yang dapat dilakukan Agent?**

Agent memenuhi kebutuhan berikut melalui beberapa pemanggilan alat:
- **Pembuatan & penyuntingan teks**: Membuat artikel, laporan, dokumen, dan lainnya, dengan dukungan untuk berbagai gaya penulisan dan format.
- **Pengembangan web**: Membangun antarmuka dan layanan proyek full-stack, mendukung desain antarmuka aplikasi, integrasi backend, persistensi data, dan visualisasi data.
- **Pembuatan slide**: Alat PPT khusus berbasis web untuk membuat presentasi lengkap.
- **Bantuan coding**: Penulisan dan debugging kode dalam berbagai bahasa pemrograman.

**T: Mengapa website yang dibuat Agent tidak berfungsi?**

Proyek lengkap biasanya terdiri dari tiga bagian: antarmuka frontend, layanan backend, dan penyimpanan data. Agent dapat menghasilkan konten proyek full-stack di ketiga lapisan tersebut. Jika proyek Anda tidak berjalan sesuai harapan, penyebabnya biasanya terkait startup sandbox, inisialisasi database, konfigurasi autentikasi, atau tindakan publikasi yang belum dilakukan.

**T: Apa saja hasil kerja Agent?**

- File eksekusi tugas lengkap
- Pratinjau proyek yang di-deploy dan versi yang dipublikasikan
- Arsip Zip yang dapat diunduh (berlokasi di `/mnt/okcomputer/output/`)

**T: Berapa panjang konteks Agent?**

Agent menggunakan panjang konteks **256K karakter** (sekitar 40.000–50.000 karakter Tionghoa / ~100.000 kata bahasa Inggris).

**T: Bagaimana credit Agent dihitung?**

Semua fitur keanggotaan, termasuk Kimi Code, berbagi satu pool credit. Setiap tugas Agent biasanya dihitung sebagai satu unit credit.
