---
title: "FAQ Kimi Websites"
slug: "websites-faq"
order: 3
extract_headings: true
preview: false
preview_content: "Pertanyaan umum tentang penggunaan Kimi Websites."
---

<SeoMeta
  title="FAQ Kimi Websites - Pusat Bantuan Kimi"
  description="Panduan mengatasi masalah umum pada Kimi Websites, termasuk kendala pratinjau, halaman kosong, kehilangan data, dan kegagalan publikasi."
/>

# FAQ Kimi Websites

> Untuk panduan lengkap tentang tombol panel pratinjau, mode penyuntingan, publikasi dan pembatalan publikasi, lihat [Kimi Websites](/websites/websites-overview). Halaman ini hanya membahas pemecahan masalah yang umum terjadi.

## Pratinjau tidak dapat dimuat atau saya tidak melihat versi terbaru?

> Misalnya: "Situs web tidak muncul," "Pratinjau masih versi lama," atau "Saya tidak melihat versi tersimpan terbaru."

Pada umumnya, situs web sudah berhasil dibuat dan disimpan. Masalah "tidak terlihat" biasanya terjadi pada panel pratinjau atau tampilan kartu versi. Penyebab paling umum adalah direktori proyek yang tidak tepat. Kasus lain dapat ditangani dengan urutan berikut:

<Callout type="warning">
**Periksa direktori proyek**: Proyek situs web harus berada di `/mnt/agents/output/app`. Pratinjau hanya membaca versi yang disimpan dari direktori ini. Jika Kimi menempatkan proyek di lokasi lain (misalnya direktori sementara `/tmp`), versi mungkin berhasil disimpan, tetapi pratinjau tidak dapat membacanya—minta Kimi memindahkan proyek ke direktori ini lalu menyimpannya kembali.
</Callout>

1. **Segarkan halaman atau buka kembali percakapan**—kartu versi terkadang membutuhkan beberapa detik untuk muncul.
2. **Minta Kimi menyimpan versi baru di percakapan.**
3. **Jika percakapan sudah sangat panjang, coba mulai percakapan baru** (lihat "Percakapan saya sangat panjang—perlukah saya memulai yang baru?" di bawah).
4. Jika masih belum muncul: kode dan versi biasanya sudah berhasil disimpan (Anda dapat meminta nomor versi kepada Kimi). Ini sering kali hanya fluktuasi sementara pada layanan pratinjau—silakan coba lagi nanti. Jika masalah berlanjut, klik **Umpan Balik Pengguna** (ikon amplop) di panel pratinjau untuk mengirim masukan beserta nomor versi, dan tim kami akan memeriksanya.

## Situs web kosong, layar putih, crash, atau tidak merespons?

> Misalnya: "Halaman benar-benar kosong," "Situs web tidak berisi apa pun," "Situs web crash," atau "Tidak ada yang tampil / diklik pun tidak bereaksi."

- Layar kosong atau crash biasanya disebabkan oleh **kesalahan runtime front-end** (misalnya dependensi yang hilang, membuka subhalaman secara langsung, atau resource maupun gambar tertentu gagal dimuat). Jelaskan gejalanya kepada Kimi dalam percakapan (tangkapan layar akan membantu), lalu Kimi akan menemukan dan memperbaiki masalahnya, kemudian menyimpan versi baru.
- Jika Anda menduga layar kosong disebabkan oleh **file yang hilang**, setiap versi situs web menyimpan snapshot. Minta Kimi memulihkan dari versi historis (lihat "File atau direktori proyek hilang" di bawah).
- **Kompatibilitas browser**: Beberapa browser yang berfokus pada privasi (Brave, add-on Firefox tertentu) dapat memblokir pemuatan resource front-end sehingga tampilan menjadi tidak normal. Coba tambahkan domain Kimi ke whitelist, nonaktifkan sementara pelindung/pemblokir privasi, atau beralih ke Chrome / Edge / Safari.

## Bagaimana jika mengklik "Publikasikan" gagal?

Penanganannya sama seperti di atas: coba lagi nanti. Jika masalah berlanjut, kirim melalui **Umpan Balik Pengguna** dengan nomor versi. Versi sudah berhasil disimpan dan tidak perlu dibuat ulang dari awal.

## Berapa lama tautan situs web berlaku? Apakah akan kedaluwarsa?

Jika Anda mengklik **Publikasikan** untuk men-deploy situs web secara publik, tautan yang dihasilkan akan tetap berlaku tanpa batas waktu, kecuali Anda mengklik **Batalkan Publikasi** secara manual untuk menjadikan situs privat, atau kontennya ditandai sebagai konten yang tidak pantas.

## Konten, data, atau catatan hilang?

> Misalnya: "Konten di beranda saya hilang," "Pengetahuan yang saya unggah ke database lenyap," "Informasi yang saya unggah tidak ada," atau "AI mengatakan data hilang secara permanen."

Pada kebanyakan kasus, data sebenarnya tidak hilang. Periksa dengan urutan berikut:

1. **Pertama, pastikan apakah situs web benar-benar "full-stack"**: Hanya situs web full-stack yang dibuat dengan **kemampuan back-end (database)** yang akan menyimpan data di database cloud platform, sehingga tetap ada di berbagai kunjungan dan perangkat. Dalam praktiknya, banyak situs web yang mengaku "full-stack" **akhirnya hanya front-end**, dengan data yang sebenarnya tidak pernah masuk ke database—dalam kondisi ini, menyegarkan halaman atau berganti perangkat tentu akan membuat data sebelumnya hilang. Minta Kimi memastikan apakah proyek tersebut memiliki back-end dan database sungguhan.
2. **Situs web front-end murni**: Data hanya disimpan di penyimpanan lokal browser Anda saat ini (localStorage). Berganti browser / perangkat atau menghapus data browser akan membuatnya hilang. Jika Anda membutuhkan penyimpanan data jangka panjang di banyak perangkat, minta Kimi beralih ke solusi full-stack dengan database.
3. **Situs web full-stack terkonfirmasi**: Data disimpan di database cloud yang dikelola platform. **Menerbitkan versi baru tidak akan menghapus data yang sudah ada**; jika data tetap tidak terlihat meskipun situs sudah full-stack, biasanya ini masalah sementara—segarkan atau coba lagi nanti.
4. **Jika Anda memastikan data benar-benar hilang**: Klik **Umpan Balik Pengguna** (ikon amplop) di panel pratinjau untuk mengirim masukan, dan tim kami akan memeriksanya. Pada titik ini, jangan terus melakukan operasi berulang agar tidak menimpa data.

## File atau direktori proyek hilang, atau muncul "environment reset" / "unable to recover"?

> Misalnya: "Direktori proyek situs web saya hilang dan tidak bisa dipulihkan," "File hilang," atau "Pesan environment reset."

- Setiap versi situs web **menyimpan snapshot**, sehingga source code biasanya dapat dipulihkan dari versi historis. Minta Kimi menampilkan daftar versi historis lalu melakukan rollback / pemulihan ke versi tertentu.
- Jika ini terjadi dalam **percakapan yang sangat panjang** (terutama jika Anda berganti model di tengah percakapan), kami menyarankan untuk memulai percakapan baru (lihat bagian berikutnya).
- Jika pemulihan tetap tidak memungkinkan, klik **Umpan Balik Pengguna** untuk mengirim masukan, dan tim kami akan memeriksanya.

## Percakapan saya sangat panjang—perlukah saya memulai yang baru?

Jika sebuah percakapan sudah berlangsung lama, mencakup banyak versi, atau Anda berganti model di tengah percakapan (misalnya K2.6 → K3), kemampuan yang aktif saat ini mungkin bukan versi terbaru, sehingga dapat menyebabkan hilangnya konteks atau anomali file. **Kami menyarankan untuk memulai percakapan baru** agar Anda mendapatkan kemampuan pembuatan dan delivery terbaru. Situs web yang sudah dipublikasikan dan versi historis tidak terpengaruh dan tetap dapat diakses seperti biasa.

## Bisakah saya melakukan self-deploy setelah mengekspor kode?

Anda dapat mengunduh kode proyek lengkap dan men-deploy-nya ke server sendiri, tetapi dua hal berikut disediakan oleh platform Kimi dan **tidak akan ikut bermigrasi bersama kode**:

- **Login akun Kimi**: Ini adalah kemampuan login yang disediakan platform dan tidak dapat digunakan langsung setelah keluar dari platform Kimi. Jika Anda membutuhkan login untuk self-deployment, minta Kimi membuat sistem login nama pengguna/kata sandi berbasis database Anda sendiri.
- **Database yang dikelola platform**: Data situs web full-stack disimpan di database cloud yang ditetapkan platform untuk situs tersebut. Kode yang diekspor tidak mencakup data ini, dan tidak akan otomatis terhubung ke database Anda sendiri. Self-deployment mengharuskan Anda menyiapkan database sendiri dan memigrasikan data.

Jika Anda hanya ingin halaman web dapat diakses publik, cukup gunakan fitur **Bagikan → Publikasikan** di platform. Tidak perlu menyiapkan server sendiri—login akun Kimi dan data cloud akan tetap berfungsi normal.

## Situs web yang dihasilkan tidak sesuai kebutuhan saya?

- Dalam percakapan, sebutkan secara spesifik bagian yang tidak sesuai: misalnya warna, tata letak, teks, modul fitur, tabel data, dan sebagainya.
- Anda dapat mengunggah gambar referensi, contoh halaman web, atau deskripsi teks yang lebih rinci agar Agent dapat memodifikasi sesuai referensi.
- Jika setelah beberapa kali modifikasi Anda masih belum puas, coba mulai percakapan baru dengan deskripsi kebutuhan yang lebih terstruktur.

## Apakah saya masih bisa mengubah konten, tautan, atau gaya situs web setelah dibuat?

Bisa. Di percakapan awal, lanjutkan dengan memberi tahu Agent apa yang ingin Anda ubah, misalnya:

- "Ubah judul beranda menjadi XXX"
- "Ubah tautan tombol 'Hubungi Kami' menjadi https://xxx"
- "Ganti keseluruhan tampilan ke tema gelap"

Setelah modifikasi, Agent akan membuat ulang dan men-deploy tautan baru.

## Bagaimana cara menambahkan back-end, database, atau fungsi login ke situs web?

- Tekankan dalam instruksi pembuatan situs web bahwa Anda menginginkan halaman web full-stack dengan database dan fungsi login.
- Sebagai alternatif, Anda dapat meminta Agent membuat halaman front-end terlebih dahulu, lalu mengekspor source code dan menyerahkannya kepada developer untuk pengembangan lanjutan.

## Bisakah saya mengunduh source code situs web atau mengekspornya ke GitHub?

Versi saat ini mendukung pengunduhan semua file ke lokal. Dalam percakapan, buka "Semua File" dan klik tombol unduh.

## Berapa banyak credit yang digunakan untuk membuat/memodifikasi situs web?

Pembuatan situs web adalah tugas kompleks yang biasanya menghabiskan token/credit dalam jumlah besar, bergantung pada:

- Jumlah halaman dan kompleksitasnya
- Apakah mencakup gambar, tabel, dan logika interaksi
- Jumlah modifikasi iteratif

Sebaiknya buat deskripsi kebutuhan sejelas mungkin untuk mengurangi coba-coba. Jika Anda tidak puas dengan hasilnya, Anda dapat menjelaskan situasinya melalui masukan.

## Pembuatan situs web sangat lambat, terus mengantre, atau terminal gagal?

- Pada jam sibuk (siang dan malam hari kerja), antrean dapat terjadi. Kami menyarankan penggunaan di luar jam sibuk.
- Jika tugas macet lebih dari 10 menit, coba segarkan halaman web terlebih dahulu.
- Untuk situs web yang kompleks, sebaiknya pecah menjadi tugas-tugas kecil: mulai dari beranda, lalu tambahkan subhalaman dan fitur secara bertahap.

## Kimi Websites cocok untuk apa? Tidak cocok untuk apa?

**Cocok untuk:**

- Beranda/portofolio pribadi, landing page acara, halaman showcase produk, halaman tool sederhana, prototipe game kecil
- Memvalidasi ide desain dengan cepat dan membuat demo interaktif
- Situs web yang membutuhkan database back-end sederhana dan sistem pengguna

**Tidak cocok untuk:**

- Situs web kompleks dengan sistem pembayaran
- Lingkungan produksi formal dengan concurrency tinggi dan ketersediaan tinggi
- Situs bisnis yang memerlukan hosting stabil jangka panjang dengan domain khusus

---

Jika metode di atas tidak menyelesaikan masalah Anda, silakan kirim melalui tombol **Umpan Balik Pengguna** di pojok kanan bawah web/app Kimi, atau [hubungi dukungan pelanggan](/others/contact-support). Kami menyarankan untuk melampirkan:

- Tautan situs web tempat masalah terjadi
- Browser dan sistem operasi yang Anda gunakan
- Tangkapan layar atau teks pesan kesalahan
- Perkiraan waktu percakapan awal

Kami akan terus mengoptimalkan kemampuan pembuatan situs web berdasarkan masukan Anda.
