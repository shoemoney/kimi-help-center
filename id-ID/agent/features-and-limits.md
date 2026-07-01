---
title: "Fitur & batasan Agent"
slug: "agent-features-and-limits"
order: 3
extract_headings: false
preview: false
---

# Fitur & batasan Agent

<SeoMeta
  title="Fitur & batasan Agent - Pusat Bantuan Kimi"
  description="Pelajari kemampuan Kimi Agent, tips penggunaan, batasan, dan praktik terbaik untuk hasil optimal."
/>

<Callout type="info">
**Kimi Agent** adalah asisten bertenaga AI yang menjalankan tugas-tugas kompleks secara mandiri melalui penalaran multilangkah dan integrasi alat. Panduan ini membahas praktik terbaik, batasan, dan FAQ agar Anda bisa memaksimalkan mode Agent.
</Callout>

## Tips penggunaan

**(1) Sebelum mengirimkan tugas**

Jelaskan informasi latar belakang dan batasan secara jelas — konteks proyek, kasus penggunaan, dan persyaratan khusus — agar Kimi dapat memahami maksud Anda dengan lebih akurat.

**(2) Selama eksekusi**

Kimi Agent berjalan secara asinkron di latar belakang. Jika halaman web tampak membeku atau berhenti, **jangan klik "Stop"** — tindakan ini akan menghentikan eksekusi tugas. Anda boleh meninggalkan halaman; tugas akan terus berjalan di latar belakang dan Anda akan menerima notifikasi setelah selesai. Untuk tugas yang diperkirakan memakan waktu lama (mis. K2.6 Agent Swarm [Beta]), mohon bersabar.

**(3) Skenario website**

Agent dapat menghasilkan konten full-stack, termasuk antarmuka frontend, layanan backend, dan logika penyimpanan persisten. Jika sebuah proyek tidak berjalan sesuai harapan, masalahnya biasanya terkait dengan startup sandbox, inisialisasi basis data, konfigurasi autentikasi, atau aksi publish yang terlewat. Agent standar berjalan di cloud dan tidak dapat langsung mengakses berkas lokal atau sistem intranet perusahaan. Untuk akses berkas lokal atau intranet, gunakan Kimi Claw.

<Callout type="tip">
**Perlu mengakses berkas lokal?** Gunakan Kimi Claw untuk akses yang aman ke berkas lokal dan sistem intranet perusahaan. Pelajari selengkapnya di [dokumentasi Kimi Claw](/kimi-claw/overview).
</Callout>

**(4) Percakapan multigiliran dan penyesuaian tugas**
Seiring beberapa putaran dialog dan revisi, Agent mungkin "melupakan" sejumlah detail awal. Sebaiknya tetapkan dulu kerangka dan poin-poin utama tugas, lalu lakukan penyesuaian secara bertahap.

**(5) Penguraian tugas besar**
Untuk tugas yang besar dan kompleks, pecahlah menjadi 2–3 tahap dan kirimkan ke Kimi secara bertahap, atau gunakan K2.6 Agent Swarm [Beta].

**(6) Batasan output berkas**
Dalam mode Agent standar, biasanya hanya satu berkas yang bisa dihasilkan per tugas (mis. dokumen atau spreadsheet). Untuk beberapa berkas sekaligus (mis. dokumen Word dan PPT), gunakan K2.6 Agent Swarm [Beta].

**(7) Batas konteks dan keseimbangan output**
Karena batas konteks model bahasa besar sebesar 256K karakter (kira-kira 40.000–50.000 karakter Mandarin / ~100.000 kata Inggris), pemrosesan berkas dalam jumlah besar membutuhkan keseimbangan antara volume input dan output.

<Callout type="warning">
**Catatan Batas Konteks**: Agent menggunakan jendela konteks 256K karakter. Untuk hasil optimal, berikan konteks yang ringkas dan hindari membebani dengan berkas yang tidak perlu.
</Callout>

## Catatan penting

<Callout type="warning">
**Penggunaan kredit**: Tugas Agent mengonsumsi kredit dari kumpulan bersama (fitur keanggotaan lainnya). Kimi Code menggunakan kumpulan kredit terpisah. Setiap tugas Agent biasanya mengonsumsi 1 unit kredit. Untuk informasi kredit rinci menurut tingkat keanggotaan, lihat [Kredit & Penagihan](/agent/quota-and-billing).
Tingkat gratis: 6 tugas Agent/bulan
Tingkat berbayar: 60–720 tugas Agent/bulan tergantung paket Anda
</Callout>

- **Waktu eksekusi**: Dalam mode Agent, satu tugas biasanya memakan waktu 5–20 menit. Tugas K2.6 Agent Swarm [Beta] mungkin lebih lama. Anda boleh meninggalkan halaman — cukup jangan klik Stop agar tugas tidak terhenti.
- **Penggunaan kredit**: Tugas Agent mengonsumsi kredit dari kumpulan bersama. Kimi Code menggunakan kumpulan kredit terpisah. 
- **Tugas sederhana**: Untuk tanya jawab sederhana, mode chat standar disarankan demi respons yang lebih cepat.

<Callout type="warning">
**Kepatuhan Konten**: Fitur Agent tunduk pada [Perjanjian Pengguna Kimi](https://www.kimi.com/user/agreement/modelUse?version=v2). Menghasilkan konten terlarang tidak didukung; mengirimkan konten terlarang dapat mengakibatkan penangguhan layanan.
</Callout>

## FAQ

**T: Apa yang bisa dilakukan Agent?**

Agent memenuhi kebutuhan berikut melalui beberapa pemanggilan alat:
- **Pembuatan & penyuntingan teks**: Menghasilkan artikel, laporan, dokumen, dll. dengan dukungan berbagai gaya dan format penulisan.
- **Pengembangan web**: Membangun antarmuka dan layanan proyek full-stack, mendukung desain antarmuka aplikasi, integrasi backend, persistensi data, dan visualisasi data.
- **Pembuatan slide**: Alat PPT berbasis web khusus untuk menghasilkan presentasi yang lengkap.
- **Bantuan koding**: Penulisan dan debugging kode di berbagai bahasa pemrograman.

**T: Mengapa website yang dibangun Agent tidak berfungsi?**

Sebuah proyek yang lengkap biasanya terdiri dari tiga bagian: antarmuka frontend, layanan backend, dan penyimpanan data. Agent dapat menghasilkan konten proyek full-stack pada ketiga lapisan tersebut. Jika proyek Anda tidak berjalan sesuai harapan, masalahnya biasanya terkait dengan startup sandbox, inisialisasi basis data, konfigurasi autentikasi, atau aksi publish yang terlewat.

**T: Apa saja hasil kerja Agent?**

- Berkas eksekusi tugas yang lengkap
- Pratinjau proyek yang telah di-deploy dan versi yang dipublikasikan
- Arsip Zip yang dapat diunduh (terletak di `/mnt/okcomputer/output/`)

**T: Berapa panjang konteks Agent?**

Agent menggunakan panjang konteks **256K karakter** (kira-kira 40.000–50.000 karakter Mandarin / ~100.000 kata Inggris).

**T: Bagaimana kredit Agent dihitung?**

Agent, PPT, dan fitur keanggotaan lainnya berbagi satu kumpulan kredit. Kimi Code menggunakan kumpulan kredit terpisah. Setiap tugas Agent biasanya dihitung sebagai satu unit kredit. Lihat kredit dan penggunaan Anda saat ini di [Kredit Keanggotaan](https://www.kimi.com/membership-credits).
