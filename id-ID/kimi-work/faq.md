---
title: "FAQ"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Kimi Work - Pusat Bantuan Kimi"
  description="FAQ Kimi Work: perbedaannya dengan versi web, kontrol izin saat mengakses file lokal, kemampuan otomatisasi browser WebBridge, dan cara tugas terjadwal dijalankan."
/>

# FAQ Kimi Work

## Apa perbedaan Kimi Work dan versi web?

Aplikasi web Kimi sangat cocok untuk chat dan kueri cepat, sedangkan Kimi Work adalah Agent lokal yang dirancang untuk alur kerja mendalam. Kimi Work dapat membaca dan menangani folder lokal Anda, menjelajahi web secara mandiri melalui WebBridge, menjalankan kode Python di latar belakang, dan mengeksekusi tugas terjadwal. Singkatnya, ini adalah karyawan digital di level sistem.

## Bagaimana Kimi Work melindungi privasi saya saat mengakses file lokal?

Anda memegang kendali penuh atas file Anda. Kimi Work menyediakan kontrol izin tiga tingkat, dan Anda dapat memilih cara memberikan otorisasi:

- **Default**: operasi rutin berjalan otomatis — Kimi akan meminta otorisasi eksplisit dari Anda sebelum operasi sensitif seperti mengubah, menimpa, atau menjalankan kode di dalam file lokal Anda;
- **Izinkan manual**: meminta otorisasi sebelum bertindak;
- **Izinkan semua**: berjalan langsung tanpa meminta otorisasi.

Saat Anda memilih "Izinkan manual", tidak ada tindakan yang dilakukan tanpa persetujuan Anda.

<Callout type="exclamation">
Saat izin "Izinkan semua" (sepenuhnya otomatis) diaktifkan, AI akan langsung membaca dan menulis file, menjalankan kode, dan mengubah konfigurasi sistem, serta secara otomatis menangani langkah yang seharusnya memerlukan keputusan Anda. Hal ini dapat menyebabkan:

- File tertimpa, terhapus secara keliru, atau rusak;
- Konfigurasi sistem berubah, menyebabkan perangkat lunak bermasalah;
- Perubahan enkripsi disk, partisi, atau firmware, yang menyebabkan perangkat terbatas atau tidak dapat booting.

Sebagian operasi bersifat permanen dan data dapat hilang selamanya serta tidak dapat dipulihkan. Pahami risiko mode ini, gunakan dengan hati-hati, dan buat cadangan data Anda.

Mengaktifkan izin "Izinkan semua" (sepenuhnya otomatis) dianggap sebagai bentuk bahwa Anda mengetahui dan menerima risiko di atas, serta memberi wewenang kepada AI untuk menjalankan operasi terkait secara mandiri; hasil dari operasi yang dijalankan berdasarkan wewenang Anda menjadi tanggung jawab Anda.
</Callout>

## Apa saja yang sebenarnya bisa dilakukan WebBridge (otomatisasi browser) untuk saya?

WebBridge memungkinkan Kimi menggunakan browser layaknya manusia. Anda bisa memintanya memeriksa berita terbaru di sebuah situs web lalu merangkumnya, atau mengambil data historis saham ke Excel lokal Anda. WebBridge dapat mengklik, menggulir, dan mengekstrak data secara mandiri, sehingga menghemat berjam-jam pekerjaan manual.

## Apa yang bisa saya lakukan dengan tugas terjadwal? Apakah tugas tetap berjalan jika komputer saya dalam mode tidur?

Dengan tugas terjadwal, Kimi dapat menjalankan tugas tetap secara otomatis pada waktu yang ditentukan — harian, mingguan, bulanan, atau sekali saja (tidak berulang) — cocok untuk ringkasan harian, pemantauan mingguan, dan pembersihan berkala.

Di desktop Kimi Work, tugas terjadwal berjalan **secara lokal** dan hanya dieksekusi selama **aplikasi terbuka**. Pemicu yang terlewat saat komputer Anda dalam mode tidur atau dimatikan, atau saat aplikasi ditutup, **tidak akan dijalankan secara retroaktif** ketika aplikasi dibuka kembali. Jadi, jika Anda perlu menjalankan tugas semalaman, biarkan komputer dan aplikasi Kimi Work tetap menyala. (Sebaliknya, tugas yang dibuat di Kimi berjalan di cloud dan tidak mengharuskan klien tetap terbuka.)

Lihat [Tugas Terjadwal](/features/scheduled-tasks) untuk detailnya.
