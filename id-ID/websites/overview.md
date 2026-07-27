---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Buat dan deploy situs web full-stack dari deskripsi bahasa alami, mockup desain, atau template."
---

<SeoMeta
  title="Ikhtisar Fitur Kimi Websites - Pusat Bantuan Kimi"
  description="Pelajari kemampuan pembuatan situs web full-stack dari Kimi Websites. Buat situs web lengkap (frontend + backend + database) dengan bahasa alami, dilengkapi deployment sekali klik, pengeditan multi-giliran, dan ekspor kode."
/>

# Ikhtisar Fitur Kimi Websites

## Apa Itu Kimi Websites

Kimi Websites adalah produk pembuatan situs web full-stack dari Kimi Agent, didukung oleh Kimi K3, model AI multimodal visual agentic. Kemampuan utamanya adalah pemrograman visual (Vibe Coding): Anda dapat membuat situs web full-stack lengkap dari bahasa alami, mockup desain, atau rekaman layar, lalu mempratinjaunya secara online dan menerbitkannya dengan sekali klik.

Situs web yang dibuat oleh Kimi Websites dapat mencakup:

- **Frontend**: struktur halaman HTML, layout dan gaya CSS, serta logika interaksi JavaScript (efek gerak, animasi, dll.)
- **Backend**: penyimpanan database persisten, login pengguna, dan autentikasi
- **Engineering**: manajemen versi otomatis, pratinjau full-stack, dan deployment publik

### Fitur Produk

| Fitur        | Deskripsi                                                  |
|----------------|--------------------------------------------------------------|
| Pembuatan situs lewat percakapan | Jelaskan kebutuhan Anda dalam bahasa alami, dan AI otomatis membuat situs web full-stack |
| Pemahaman gambar/video | Unggah mockup desain, tangkapan layar, atau rekaman layar, lalu AI otomatis mengurainya dan membuat halaman |
| Penyimpanan persisten | Otomatis membangun database backend, dengan pembacaan, penulisan, dan pengelolaan data yang persisten |
| Manajemen database | Menyediakan panel database visual untuk operasi data dasar seperti melihat, mengedit, dan menghapus |
| Login pengguna | Mendukung login akun Kimi, dan juga dapat membangun sistem login nama pengguna/kata sandi melalui database |
| Manajemen versi | AI otomatis membuat commit versi (git commit) dan mendukung rollback ke versi historis mana pun |
| Pratinjau full-stack | Mendukung pratinjau frontend dan backend lengkap; beberapa skenario mengharuskan Anda memulai lingkungan sandbox secara manual |
| Pengeditan multi-giliran | Mendukung perubahan iteratif melalui percakapan multi-giliran dan memungkinkan Anda membandingkan berbagai versi |
| Pengeditan visual | Beri anotasi pada elemen di halaman pratinjau dengan melingkari atau menandainya, lalu kirim semua saran ke Kimi sekaligus |
| Penerbitan dan deployment | Setelah Anda mengeklik "Publish" secara manual, situs akan di-deploy ke internet publik; sebelum diterbitkan, situs hanya dapat dipratinjau. Deployment full-stack didukung |
| Custom URL | Sesuaikan subdomain situs, seperti `abc` pada `abc.ok.kimi.link` |
| Berbagi dan kontrol akses | Dapatkan tautan berbagi publik dengan sekali klik, atau atur situs menjadi privat/hanya terlihat oleh Anda |
| Pemilihan template | Menyediakan beberapa template preset agar Anda bisa mulai membangun dengan cepat |
| Ekspor kode | Mendukung pengunduhan paket proyek lengkap (termasuk frontend dan backend) untuk deployment yang dikelola sendiri |

## Cara Menggunakan

### Metode 1: Akses di Web
Kunjungi halaman khusus Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Beranda Kimi Websites"
/>

1. Buka browser: Gunakan browser populer seperti Chrome, Safari, Edge, atau Firefox.
2. Buka alamat akses resmi: halaman khusus Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (mendukung antarmuka bahasa Mandarin dan Inggris)
3. Masuk ke akun Anda: Masuk dengan akun Kimi (pendaftaran dengan nomor ponsel atau email didukung)
4. Masukkan tugas pembuatan situs web Anda. Kimi Websites menyediakan tiga cara utama untuk membuat situs web:
   1. **Input teks**: Masukkan tugas di kotak dialog dan jelaskan situs web yang Anda inginkan dalam bahasa alami;
   2. **remix gambar/situs web**: Unggah mockup desain atau tangkapan layar situs web yang Anda sukai untuk memicu fitur terkait;
   3. **Pembuatan situs berbasis template**: Buat situs web standar dengan cepat dengan memilih template preset dan mengedit kontennya;
5. Mulai membangun: Masuk ke antarmuka fitur Websites, pilih template, atau buat langsung melalui percakapan.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="tangkapan layar 27"
/>

### Metode 2: Akses dari Aplikasi Seluler
Pilih alat situs web khusus di App seluler

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Antarmuka pembuat situs web"
/>

App resmi tersedia untuk iOS, Android, dan HarmonyOS (nama app: "Kimi"). Di atas kotak input, ketuk toolbar (Taskbar) → beralih ke mode Websites. Di dalamnya terdapat alat generasi multimodal dan kemampuan Agent, sehingga Anda dapat memberikan input visual dan menghasilkan kode frontend.

### Metode 3: Mode Agent Umum
Dalam mode Agent umum, masukkan kebutuhan pembuatan situs web Anda

Di situs web resmi atau perangkat seluler, pilih model K3 dan masukkan instruksi tugas terkait pembuatan situs web. Kimi akan memanggil kemampuan pemrograman visual dan alat eksekusi kode.

## Langkah-langkah

### Membuat Situs Web Lewat Percakapan

Jelaskan kebutuhan Anda dalam bahasa alami di kotak input, lalu Kimi akan memahami dan menjalankannya. Tiga metode pembuatan didukung:

| Metode             | Deskripsi                              |
|--------------------|------------------------------------------|
| Deskripsi teks   | Masukkan kebutuhan situs web secara langsung, dan AI otomatis membuat situsnya |
| Penguraian mockup desain | Unggah mockup desain, lalu AI mengenali dan membuat ulangnya sebagai halaman web |
| Buat situs standar dengan cepat | Pilih template preset dan edit kontennya |

### Contoh Praktis

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Masukkan tugas pembuatan situs web\nBuat situs web untuk anak anjing West Highland White Terrier, dengan palet warna utama hitam-putih. Sertakan tiga bagian:\n1. Kalender potret berkualitas studio dengan tampilan gambar yang dihasilkan AI;\n2. Ensiklopedia perawatan \"Curly-Coat Lab\";\n3. Toko merch yang menjual hoodie dengan avatar Westie dan poster foil perak edisi terbatas.\nHalaman checkout harus menyertakan modul amal: donasikan $1 untuk setiap item yang terjual guna membantu penyelamatan anak anjing telantar.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Contoh situs web"
/>

### Ikhtisar Alur Kerja Pembuatan Situs Web

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Deskripsi kebutuhan → Kimi memikirkan tugas → memanggil SKILL pembuatan webapp →\nmemahami tech stack dan proses build → membuat daftar tugas dan menginisialisasi proyek → menulis daftar to-do → menjalankan terminal → menghasilkan gambar → mempratinjau dan menyesuaikan →\nmemperbarui progres tugas dan mengembangkan kode inti situs web → memperbarui file CSS dan konfigurasi, lalu membuat komponen → melakukan pengeditan multi-giliran → deploy online → berbagi dan mendistribusikan",
    },
  ]}
/>

Kimi Websites mengaktifkan SKILL pembuatan webapp, agent generasi kode multi-giliran yang dikhususkan untuk konstruksi situs web. Ia menjalankan alur kerja berikut secara mandiri:

1. Penguraian kebutuhan: Otomatis menganalisis modul fitur situs web, gaya visual, dan logika interaksi
2. Perencanaan tugas: Memecah pekerjaan menjadi subtugas seperti desain, pengembangan, dan persiapan aset
3. Solusi teknis: Otomatis memilih arsitektur teknis yang sesuai (seperti React + Tailwind CSS)
4. Pembuatan aset: Menghasilkan aset visual seperti gambar dan ikon sesuai kebutuhan
5. Konstruksi kode: Menulis struktur halaman, gaya, dan kode interaksi
6. Optimasi multi-giliran: Menyesuaikan secara mandiri berdasarkan pratinjau hingga situs web selesai

<Frames
  src="./images/overview/screenshot-26.png"
  alt="tangkapan layar 26"
/>

### Pratinjau dan Penyesuaian

- **Pratinjau real-time**: Menghasilkan URL demo HTML yang dapat langsung Anda buka di browser
- **Pengeditan lewat percakapan**: Lanjutkan percakapan untuk meminta perubahan, misalnya "ubah bilah navigasi menjadi bergaya gelap"

#### Contoh Nyata

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Warna-warnanya kurang bagus. Saya ingin menghapus persyaratan hitam-putih dan membuatnya menjadi situs web yang terlihat normal.\nKimi Websites akan menyusun ulang daftar to-do dan melanjutkan pembangunan situs web.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Antarmuka Panel Pratinjau

Setelah situs web dibuat, panel pratinjau terbuka di sisi kanan, dan kartu versi juga muncul dalam percakapan. Entri operasi utamanya adalah sebagai berikut:

**Toolbar atas panel pratinjau** (dari kiri ke kanan):

| Tombol | Fungsi |
|--------|----------|
| Preview / Code | Beralih antara pratinjau visual dan tampilan kode sumber/pohon file |
| Edit | Masuk ke mode edit; klik area yang ingin Anda ubah, tambahkan catatan anotasi, lalu kirim ke Kimi |
| Publish | Saat belum diterbitkan, klik "Publish" untuk menjadikan situs web publik |
| Share | Setelah diterbitkan, gunakan kartu berbagi untuk menyalin tautan, menyesuaikan subdomain, membuka situs web, klik "…" untuk membatalkan publikasi, atau klik "Update" saat versi baru tersedia |
| Pratinjau layar penuh | Lihat situs web dalam layar penuh |
| Alihkan mode pratinjau | Beralih antara tampilan desktop dan seluler |
| Refresh | Muat ulang pratinjau |
| Masukan pengguna | Kirim masalah yang ditemui saat penggunaan; Anda dapat memasukkan teks dan mengunggah tangkapan layar |
| Tutup | Ciutkan panel pratinjau |

**Kartu versi dalam percakapan**: Menampilkan nama situs, nomor versi (seperti V2), dan URL. Klik **Preview** untuk membuka versi terkait; klik **Restore** untuk rollback ke versi tersebut. Kartu **All Files** memungkinkan Anda melihat atau mengunduh file proyek lengkap. Untuk penggunaan detail tiap tombol, lihat bagian terkait di bawah.

### Pengeditan Visual

<Frames
  src="./images/overview/web-case1.png"
  alt="Antarmuka pengeditan visual"
/>

- **Optimasi multi-giliran**: Sempurnakan detail situs web melalui percakapan berkelanjutan
- **Cara mengedit**:
  - **Mode anotasi**: Klik bagian halaman web yang ingin Anda ubah dan tambahkan komentar dalam bahasa alami
  - **Mode seleksi**: Pilih elemen apa pun di halaman web dan tambahkan komentar
  - Gunakan persegi panjang, panah, kuas, penggantian warna, dan alat seleksi serta pengeditan lainnya untuk menambahkan saran perubahan
- Setelah menambahkan anotasi di beberapa tempat, tambahkan semuanya ke percakapan dan kirim seluruh saran ke Kimi sekaligus

### Deployment dan Penerbitan Kode
| Metode deployment | Deskripsi                                           |
|-------------------|------------------------------------------------------|
| Publikasi sekali klik | Klik tombol "Publish" untuk men-deploy situs ke internet publik dan menghasilkan tautan online yang dapat diakses (hanya pratinjau sebelum diterbitkan) |
| Unduh dan deploy | Unduh paket kode dan deploy ke server Anda sendiri |
| Custom URL | Ubah URL acak bawaan menjadi nama yang mudah diingat, misalnya menyesuaikan `abc` pada `abc.ok.kimi.link` |

> **Tentang "Custom URL"**: 3–30 karakter, hanya huruf kecil, angka, dan tanda hubung. Tidak boleh diawali atau diakhiri dengan tanda hubung, dan tidak boleh seluruhnya angka. Beberapa kata cadangan (seperti `kimi`, `www`, `login`, dll.) tidak tersedia. Jika sudah dipakai atau tidak tersedia, pilih nama lain.

> **Tentang batasan "Unduh dan deploy"**: **Login akun Kimi** dan **database cloud yang dikelola platform** disediakan oleh platform Kimi dan tidak akan ikut bermigrasi bersama kode yang diekspor. Jika Anda men-deploy kode ke server sendiri, metode login harus diubah menjadi skema nama pengguna/kata sandi berbasis database Anda sendiri, dan data juga harus dimigrasikan ke database Anda sendiri. Untuk akses publik saja, kami menyarankan langsung menggunakan **Publikasi sekali klik**, dan login akun Kimi serta data cloud akan tetap berfungsi normal. Lihat [Mengapa situs web yang saya buat tidak berfungsi?](/websites/websites-why-not-working) untuk detail.

#### Pratinjau per Versi
Setelah pembuatan selesai, Anda akan masuk ke halaman pratinjau.
Di antarmuka pratinjau, Anda dapat mengeklik berbagai versi deployment dan mengunduh file untuk versi yang berbeda.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Pratinjau versi"
/>

#### Publikasikan, Bagikan, dan Batalkan Publikasi
Sebelum diterbitkan, situs web hanya dapat dipratinjau dalam percakapan. Agar orang lain dapat mengaksesnya, klik **Share** di sudut kanan atas panel pratinjau untuk membuka panel publikasi:

1. **Custom URL**: Anda dapat mengubah nama dalam URL default, misalnya mengubahnya menjadi `yourname.ok.kimi.link`;
2. Klik **Copy Link** untuk mendapatkan URL publik, atau klik **Open Website** untuk melihatnya di tab baru. Setelah diterbitkan, bagian atas panel menampilkan **Published**, dan siapa pun yang memiliki tautan dapat mengaksesnya;
3. Untuk menonaktifkan situs, pilih **Unpublish** dari menu **…** di sudut kanan atas panel. Situs tidak lagi dapat diakses publik (kode dan data tetap disimpan, dan Anda dapat menerbitkannya ulang kapan saja).

### Pengeditan Multi-Giliran

Jika Anda belum puas dengan bagian tertentu, klik tombol edit di jendela pratinjau untuk terus menyempurnakannya.
Anda juga dapat mengirim instruksi kepada Kimi dalam bahasa alami dan melanjutkan pengeditan dengan Agent.
Setelah hasilnya sesuai, unduh kode HTML/CSS/JS lengkap dan deploy langsung, atau lanjutkan penyempurnaan di editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Cocok untuk Siapa

- Developer: Merancang prototipe produk dan demo frontend, sehingga sangat mengurangi waktu yang diperlukan untuk membangun dari nol.
- Wirausahawan: Membangun situs web resmi, landing page, dan halaman showcase produk dengan cepat saat sumber daya terbatas.
- Manajer produk: Mengubah PRD atau mockup desain menjadi prototipe interaktif yang dapat didemonstrasikan dengan cepat, tanpa menunggu jadwal pengembangan.
- Pengguna nonteknis: Tidak diperlukan pengetahuan coding. Jelaskan ide Anda atau unggah gambar referensi, lalu ubah konsep menjadi halaman web yang dapat dijalankan.

## Contoh Prompt
**Anda dapat merujuk pada skenario dan prompt berikut untuk menghasilkan konten**

| Skenario         | Contoh prompt                                                   |
|------------------|------------------------------------------------------------------|
| Buat landing page dari nol | Bantu saya membuat landing page pemasaran untuk produk SaaS dengan gaya bernuansa teknologi, mencakup hero section, pengenalan fitur, harga, dan CTA |
| Buat ulang situs web dari video | [Unggah rekaman layar] Buat ulang situs web yang ditampilkan dalam video dan pertahankan interaksi aslinya |
| Buat ulang dari tangkapan layar | [Unggah mockup desain] Implementasikan desain ini sebagai kode halaman web yang dapat dijalankan |
| Portofolio pribadi | Bantu saya membuat situs web portofolio pribadi untuk fotografer, dengan gaya hitam-putih minimalis dan dukungan layout gambar masonry |
| Halaman visualisasi data | Buat halaman web visualisasi yang menampilkan data pendanaan perusahaan AI pada 2025, termasuk grafik dan filter |
| Situs web brand | Bantu saya membuat situs web resmi untuk brand kopi, menggunakan palet warna Morandi, dengan beranda, halaman produk, dan halaman toko |
| Utilitas/kalkulator | Buat halaman web kalkulator BMI dengan antarmuka yang bersih, pengalihan satuan, dan tips tingkat kesehatan |
