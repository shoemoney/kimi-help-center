---
title: "Buat dan Ajukan Plugin"
slug: "plugin-submission-guide"
order: 4
extract_headings: false
preview: true
preview_content: "Ubah produk atau layanan Anda menjadi plugin Kimi, uji coba, dan ajukan untuk dimasukkan ke dalam pasar resmi."
---

<SeoMeta
  title="Buat dan Ajukan Plugin - Pusat Bantuan Kimi"
  description="Pelajari cara membuat dan menguji plugin di Kimi Work serta mengajukan untuk dimasukkan ke dalam pasar plugin resmi Kimi."
/>

# Buat dan Ajukan Plugin

Jika Anda ingin menghubungkan produk atau layanan Anda ke Kimi agar pengguna dapat mengakses kemampuannya dalam percakapan, ikuti panduan ini untuk membuat, menguji, dan mengajukan plugin untuk pasar plugin resmi Kimi.

## Apa itu plugin Kimi?

Plugin Kimi menghubungkan produk Anda ke Kimi. Ini membantu Kimi memahami kapan produk Anda berguna dan memberikan alur kerja atau alat yang diperlukan untuk membantu pengguna. Sebuah plugin dapat berisi:

- **Hanya Skills**: alur kerja yang dapat digunakan kembali yang disesuaikan dengan produk atau kasus penggunaan Anda.
- **Hanya MCP**: alat dan layanan yang diekspos ke Kimi melalui server MCP.
- **Skills dan MCP**: alat produk yang dikombinasikan dengan alur kerja yang membantu Kimi menggunakannya secara efektif.

## Sebelum memulai

Pertama, <a href="https://www.kimi.com/products/kimi-work">unduh dan pasang Kimi Work</a>. Siapkan hal berikut:

- Nama plugin, deskripsi, dan logo
- Tugas inti yang harus dapat diselesaikan pengguna dalam bahasa alami
- URL server MCP, jika berlaku

<Callout type="warning">
Jika logo plugin mencakup produk, merek, atau merek dagang pihak ketiga, hubungi pemegang hak terkait dan dapatkan otorisasi tertulis yang diperlukan sebelum mengajukan.
</Callout>

## Langkah 1: Buat dan uji plugin

1. Buka Kimi Work, ketik "/" dalam percakapan, dan pilih **Plugin Builder**.
2. Jelaskan plugin dan berikan informasi yang telah Anda siapkan. Jika Anda sudah memiliki plugin Codex, Claude, atau platform lain, berikan file atau URL proyeknya dan ikuti petunjuk untuk mengubahnya.

3. Buka **Plugins** → **Personal**, temukan plugin, dan pasang.

4. Uji kemampuan inti dalam percakapan baru, termasuk kasus normal dan kasus tepi. Simpan setidaknya tiga contoh perintah uji yang representatif.
5. Ikuti petunjuk Plugin Builder untuk mendapatkan file ZIP plugin lengkap.

Untuk plugin berbasis MCP, uji juga alur autentikasinya:

- **Tanpa autentikasi**: pengguna dapat menggunakan plugin segera setelah pemasangan.
- **OAuth**: halaman otorisasi pihak ketiga harus terbuka selama pemasangan pertama.
- **Autentikasi CLI**: pemasangan tidak memulai otorisasi. Pertama kali pengguna memanggil plugin, mereka menyelesaikan otorisasi dalam percakapan. Setelah otorisasi berhasil, mereka umumnya tidak perlu mengotorisasi lagi dalam percakapan lain.

## Langkah 2: Ajukan aplikasi Anda

Setelah membuat dan menguji plugin, lengkapi [formulir pengajuan plugin Kimi](https://moonshot.feishu.cn/share/base/form/shrcnZcnxlNJlbw845KoVgjEhkh) dan unggah file ZIP plugin.

Formulir menanyakan:

| Item | Persyaratan |
| --- | --- |
| Nama plugin, deskripsi, dan file ZIP | Diperlukan |
| Jenis plugin | Hanya Skills, hanya MCP, atau hibrida |
| Autentikasi MCP | Diperlukan untuk plugin hanya MCP dan hibrida |
| Wilayah yang dituju | Tiongkok Daratan, luar negeri, atau keduanya |
| Sorotan dan perintah uji yang direkomendasikan | Setidaknya tiga perintah uji |
| Minat pemasaran bersama dan materi | Materi bersifat opsional dan hanya diperlukan jika Anda ingin mendiskusikan pemasaran bersama |
| Status otorisasi dan kepatuhan | Ungkapkan item yang memerlukan diskusi lebih lanjut |
| Email kontak | Digunakan untuk pembaruan tinjauan dan permintaan informasi tambahan |
| Perusahaan atau tim, situs web terkait, dan catatan | Opsional |

<Callout type="warning">
Jangan sertakan kata sandi, token, kunci API, kunci pribadi, atau rahasia lain dalam formulir atau file ZIP plugin. Jika pengguna memerlukan kunci mereka sendiri, jelaskan hanya cara mereka mendapatkan dan mengonfigurasinya.
</Callout>

## Apa yang terjadi selanjutnya

Tim Kimi akan meninjau aplikasi dan file ZIP plugin. Jika plugin lolos tinjauan, atau jika kami memerlukan informasi atau perubahan lebih lanjut, kami akan menghubungi Anda di alamat email yang diberikan dan membagikan langkah selanjutnya.

## FAQ

### Bisakah saya mengajukan plugin tanpa server MCP?

Ya. Plugin hanya Skills didukung. Pilih **Hanya Skills** sebagai jenis plugin.

### Bisakah saya mengajukan plugin Codex, Claude, atau platform lain?

Ya. Pada Langkah 1, berikan file plugin yang ada atau URL proyek ke Plugin Builder dan ikuti petunjuk untuk mengubahnya. Pasang dan uji plugin yang dikonversi di Kimi Work sebelum mengajukan file ZIP yang dihasilkan.

### Metode autentikasi MCP apa yang didukung?

Tiga metode berikut saat ini didukung:

- **Tanpa autentikasi**: Pengguna dapat menggunakan plugin segera setelah pemasangan tanpa masuk atau menyelesaikan verifikasi identitas lainnya.
- **OAuth**: Pengguna secara otomatis dialihkan ke halaman otorisasi produk pihak ketiga saat mereka memasang plugin untuk pertama kali. Mereka dapat menggunakan plugin setelah otorisasi.
- **Autentikasi CLI**: Pemasangan tidak memulai alur otorisasi. Pertama kali pengguna memanggil plugin dalam percakapan, mereka menyelesaikan otorisasi menggunakan petunjuk yang ditampilkan dalam percakapan. Setelah otorisasi berhasil, mereka umumnya tidak perlu mengotorisasi lagi dalam percakapan lain.

Uji alur yang sesuai dengan metode autentikasi sebenarnya dari plugin Anda. Jika plugin OAuth tidak mengalihkan selama pemasangan pertama, atau plugin yang diautentikasi CLI berulang kali meminta pengguna untuk mengotorisasi, periksa konfigurasi autentikasi Server MCP sebelum mengajukan aplikasi dan jelaskan masalahnya di **Catatan tambahan**.

### Bagaimana tampilan alur otorisasi OAuth?

Untuk Server MCP yang diaktifkan OAuth, Plugin Builder mengidentifikasi informasi otorisasi yang relevan dari URL Server MCP. Setelah plugin dibuat, pengguna dibawa ke halaman otorisasi produk pihak ketiga saat pertama kali memasangnya.

### Bagaimana jika saya ingin menjelajahi kemitraan yang lebih luas dengan Kimi?

Pertama selesaikan proses pembuatan, pengujian, dan pengajuan plugin dalam panduan ini. Jika Anda ingin menjelajahi bentuk kolaborasi lain selain mencantumkan plugin, jelaskan secara singkat proposal Anda di **Catatan tambahan**. Tim Kimi dapat menghubungi Anda berdasarkan situasi.

### Apakah mengajukan aplikasi menjamin pencantuman?

Tidak. Tim Kimi mengevaluasi fungsi plugin, pengalaman pengguna, keamanan, keandalan layanan, dan status otorisasi yang relevan.
