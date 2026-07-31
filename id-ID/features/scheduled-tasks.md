---
title: "Tugas Terjadwal"
slug: "scheduled-tasks"
order: 5
extract_headings: false
preview: true
preview_content: "Tugas terjadwal memungkinkan Kimi menjalankan tugas tetap secara otomatis pada waktu yang Anda tentukan — ideal untuk ringkasan harian, pemantauan mingguan, dan pembersihan rutin. Tersedia di Kimi dan aplikasi desktop Kimi Work."
---

<SeoMeta
  title="Cara Menggunakan Tugas Terjadwal Kimi - Pusat Bantuan Kimi"
  description="Pelajari tugas terjadwal Kimi: minta Kimi menjalankan tugas secara otomatis pada waktu yang ditetapkan, dengan jadwal harian, mingguan, bulanan, atau satu kali, tanggal kedaluwarsa opsional, serta kemampuan digabungkan dengan Skills untuk pekerjaan yang lebih kompleks. Ideal untuk ringkasan harian, pemantauan industri mingguan, dan pembersihan data berkala. Tersedia di Kimi dan aplikasi desktop Kimi Work."
/>

# Tugas Terjadwal

Tugas terjadwal memungkinkan Kimi menjalankan tugas tetap secara otomatis pada waktu yang Anda tentukan, sehingga Anda tidak perlu memulainya secara manual setiap kali. Fitur ini ideal untuk pekerjaan rutin yang berulang — ringkasan harian, pemantauan industri mingguan, pembersihan data berkala, dan sebagainya.

Tugas terjadwal adalah fitur umum, tersedia di **Kimi** dan **aplikasi desktop Kimi Work**.

## Membuat tugas terjadwal

Ada dua cara:

- **Dari titik masuk**: klik "Buat tugas terjadwal" di sidebar, lalu isi tugas di dialog;
- **Dari percakapan**: jelaskan kebutuhan penjadwalan Anda dengan bahasa alami, dan Kimi akan membuatkan tugas terjadwal untuk Anda, termasuk menyusun judul, jadwal, dan isi tugas secara otomatis.

Tugas terjadwal mencakup:

- **Judul**: merangkum tugas agar mudah ditemukan di daftar tugas;
- **Jadwal**: harian, mingguan, bulanan, atau tidak berulang (satu kali);
- **Tanggal kedaluwarsa**: Anda dapat menentukan kapan tugas berakhir (dipilih secara default saat membuat tugas);
- **Isi tugas**: prompt yang menjelaskan apa yang harus dilakukan tugas. Pada waktu yang dijadwalkan, Kimi menjalankan prompt tetap ini.

## Menulis prompt tugas yang baik

Prompt tugas yang baik menyebutkan tiga hal sekaligus:

- **Kapan**: kapan tugas dijalankan (tanggal tertentu / waktu tertentu setiap hari / hari tertentu setiap minggu);
- **Format keluaran**: seperti apa hasil yang Anda inginkan (poin utama, tabel, templat, jumlah kata, bahasa);
- **Batasan**: hal yang tidak boleh dilakukan atau harus dipenuhi (misalnya, maksimal 200 kata, hanya bahasa Mandarin, sertakan catatan risiko, keluarkan hanya 3 item).

**Templat universal**: Pada [waktu], lakukan [tugas], keluarkan sebagai [format], dan ikuti [batasan].

Berikut beberapa contoh yang bisa Anda salin dan sesuaikan:

<CodePreview
  files={[
    {
      name: "market-news.txt",
      language: "text",
      content: "Setiap hari pukul 9:00, rangkum berita pasar terbaru menjadi 3 poin utama ditambah 1 catatan risiko, dalam bahasa Mandarin, maksimal 200 kata.",
    },
    {
      name: "daily-report-reminder.txt",
      language: "text",
      content: "Dalam 1 jam, ingatkan saya untuk menyelesaikan laporan kerja hari ini, dan lampirkan templat laporan (struktur empat bagian).",
    },
    {
      name: "bedtime-reminder.txt",
      language: "text",
      content: "Pukul 22:30 malam ini, ingatkan saya untuk: mematikan komputer, membersihkan diri, dan bersiap tidur. Gunakan nada yang lembut.",
    },
  ]}
/>

## Mengelola tugas terjadwal

**Daftar tugas** menampilkan semua tugas terjadwal Anda (diurutkan berdasarkan waktu). Di setiap kartu tugas, Anda dapat:

- mengaktifkan atau menonaktifkan tugas;
- melakukan tindakan lain: menemukan tugas, menjalankannya sekali sekarang, mengedit, dan menghapus.

Dalam percakapan, tugas terjadwal muncul sebagai **kartu tugas** yang menampilkan judul, frekuensi, waktu eksekusi berikutnya, dan isi tugas — Anda juga dapat menjalankannya sekarang, menjeda, mengedit, atau menghapusnya.

## Eksekusi dan notifikasi

- Pada waktu yang dijadwalkan, Kimi menjalankan prompt tetap yang ditetapkan dalam tugas;
- Setiap eksekusi membuat notifikasi yang ditandai belum dibaca; Anda dapat melihat hasil tiap eksekusi dan melompat ke percakapan terkait;
- Status baca disinkronkan di web dan seluler;
- Setelah tugas berjalan, Anda dapat **memilih model untuk melanjutkan pertanyaan lanjutan** dalam percakapan hasil, dan mengetik "/" untuk **memanggil plugin dan Skills**.

## Menggabungkan dengan Skills

Tugas terjadwal dapat digabungkan dengan **Skills** untuk menangani pekerjaan yang lebih kompleks — terutama **Skills** **keuangan** Kimi (data pasar, analisis pendapatan, dan sebagainya).

Sebelum menggunakannya, **instal dan uji Skill terlebih dahulu**, pastikan hasilnya sesuai harapan, lalu gunakan dalam tugas terjadwal.

## Kedaluwarsa

Tanggal kedaluwarsa dipilih secara default saat Anda membuat tugas, agar tugas yang sudah tidak relevan tidak terus tertinggal. Masa kedaluwarsa default adalah:

- Harian: +7 hari;
- Mingguan: +1 bulan;
- Bulanan: +3 bulan.

<Callout type="info">
Tugas terjadwal yang berjalan secara lokal di aplikasi desktop Kimi Work tidak tunduk pada aturan kedaluwarsa di atas; tugas lokal berjalan sesuai siklusnya selama aplikasi terbuka, dan pemicu yang terlewat saat aplikasi tertutup tidak akan dijalankan setelahnya.
</Callout>

## Quota dan paket

Tugas terjadwal membatasi jumlah **tugas yang dapat aktif sekaligus** (tidak ada batasan berapa banyak tugas yang dapat Anda buat). Jumlah tugas aktif bergantung pada paket keanggotaan Anda:

| Paket | Gratis | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Tugas terjadwal | 2 | 6 | 15 | 20 | 25 |

- Saat Anda sudah mencapai batas aktif dan membuat tugas lain, tugas baru akan **disimpan sebagai tidak aktif**, disertai prompt untuk meningkatkan paket atau menonaktifkan sebagian tugas;
- Jika batas aktif Anda turun (karena penurunan paket atau manfaat kedaluwarsa), tugas yang melebihi batas akan dijeda secara otomatis.

Untuk quota terbaru, lihat [halaman paket keanggotaan](/membership/membership-pricing).

<Callout type="tip">
**Tips**: Sebelum menjadwalkan tugas, coba isinya sekali dalam percakapan biasa, atau gunakan "Jalankan sekali sekarang" untuk memverifikasinya — pastikan redaksinya jelas dan hasilnya sesuai harapan sebelum Anda mengandalkan jadwal. Jika tugas bergantung pada Skill, instal dan uji Skill tersebut terlebih dahulu.
</Callout>

## FAQ

### Apakah ada batasan jumlah tugas terjadwal yang dapat saya buat?
Tidak ada batasan jumlah tugas yang dapat Anda buat, tetapi jumlah yang dapat **aktif sekaligus** bergantung pada paket Anda. Saat Anda melampaui batas aktif, tugas baru disimpan sebagai tidak aktif; Anda dapat meningkatkan paket atau menonaktifkan sebagian tugas untuk mengaktifkannya.

### Apakah komputer atau aplikasi harus tetap terbuka agar tugas berjalan?
Tugas terjadwal yang dibuat di Kimi berjalan di cloud — Anda tidak perlu membiarkan klien tetap terbuka. Tugas yang berjalan secara lokal di aplikasi desktop Kimi Work mengharuskan aplikasi tetap terbuka; pemicu yang terlewat saat aplikasi tertutup tidak akan dijalankan setelahnya.

### Bisakah saya memilih model saat tugas terjadwal berjalan?
Saat membuat tugas, ada dua mode: **pembuatan manual** dan **pembuatan lewat percakapan**. Pembuatan manual menggunakan model K2.6 secara default untuk membuat tugas terjadwal; dengan pembuatan lewat percakapan, Anda dapat berganti model setelah memulai percakapan baru, lalu memasukkan prompt untuk membuat tugas. Setelah tugas berjalan, percakapan hasil akan dibuat, dan di dalamnya Anda dapat berganti model untuk melanjutkan pertanyaan lanjutan, serta mengetik "/" untuk memanggil plugin dan Skills.

### Bagaimana jika saya mencapai batas tugas aktif?
Nonaktifkan tugas yang tidak lagi Anda perlukan, atau tingkatkan paket untuk mendapatkan batas aktif yang lebih tinggi. Lihat [halaman paket keanggotaan](/membership/membership-pricing) untuk detailnya.
