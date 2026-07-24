---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: true
preview: true
preview_content: "Bangun dan deploy website full-stack dari deskripsi bahasa alami, mockup desain, atau template."
---

<SeoMeta
  title="Ikhtisar Fitur Kimi Websites - Pusat Bantuan Kimi"
  description="Pelajari kemampuan Kimi Websites untuk membangun website full-stack. Hasilkan website lengkap (frontend + backend + database) dengan bahasa alami, disertai deployment sekali klik, pengeditan multi-giliran, dan ekspor kode."
/>

# Ikhtisar Fitur Kimi Websites

## Apa Itu Kimi Websites

Kimi Websites adalah produk Kimi Agent untuk membangun website full-stack, didukung oleh Kimi K3, model AI multimodal visual agentic. Kemampuan utamanya adalah pemrograman visual (Vibe Coding): Anda dapat membuat website full-stack lengkap dari bahasa alami, mockup desain, atau rekaman layar, lalu mempratinjaunya secara online dan memublikasikannya dengan sekali klik.

Website yang dihasilkan oleh Kimi Websites dapat mencakup:

- **Frontend**: Struktur halaman HTML, tata letak dan styling CSS, serta logika interaksi JavaScript (efek gerak, animasi, dll.)
- **Backend**: Penyimpanan database persisten, login pengguna, dan autentikasi
- **Engineering**: Manajemen versi otomatis, pratinjau full-stack, dan deployment publik

### Fitur Produk

| Fitur        | Deskripsi                                                  |
|----------------|--------------------------------------------------------------|
| Pembuatan website berbasis percakapan | Jelaskan kebutuhan Anda dengan bahasa alami, dan AI otomatis menghasilkan website full-stack |
| Pemahaman gambar/video | Unggah mockup desain, tangkapan layar, atau rekaman layar, lalu AI otomatis mengurainya dan membuat halaman |
| Penyimpanan persisten | Otomatis membangun database backend, dengan pembacaan, penulisan, dan pengelolaan data yang persisten |
| Manajemen database | Menyediakan panel database visual untuk operasi data dasar seperti melihat, mengedit, dan menghapus |
| Login pengguna | Mendukung login akun Kimi, dan juga dapat membangun sistem login nama pengguna/kata sandi melalui database |
| Manajemen versi | AI otomatis membuat commit versi (git commit) dan mendukung pemulihan ke versi historis mana pun |
| Pratinjau full-stack | Mendukung pratinjau frontend dan backend lengkap; beberapa skenario memerlukan pengaktifan manual lingkungan sandbox |
| Pengeditan multi-giliran | Mendukung perubahan iteratif melalui percakapan multi-giliran dan memungkinkan Anda membandingkan berbagai versi |
| Pengeditan visual | Anotasikan elemen pada halaman pratinjau dengan melingkari atau menandainya, lalu kirim semua saran ke Kimi sekaligus |
| Publikasi dan deployment | Setelah Anda mengeklik "Publikasikan" secara manual, situs di-deploy ke internet publik; sebelum dipublikasikan, situs hanya dapat dipratinjau. Deployment full-stack didukung |
| URL khusus | Sesuaikan subdomain situs, misalnya `abc` dalam `abc.ok.kimi.link` |
| Berbagi dan kontrol akses | Dapatkan tautan berbagi publik dengan sekali klik, atau atur situs menjadi privat/hanya terlihat oleh Anda |
| Pemilihan template | Menyediakan beberapa template siap pakai agar Anda dapat mulai membangun dengan cepat |
| Ekspor kode | Mendukung pengunduhan paket proyek lengkap (termasuk frontend dan backend) untuk deployment mandiri |

## Cara Menggunakan

### Metode 1: Akses dari Web
Kunjungi halaman khusus Kimi Websites

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Beranda Kimi Websites"
/>

1. Buka browser: Gunakan browser umum seperti Chrome, Safari, Edge, atau Firefox.
2. Buka alamat akses resmi: halaman khusus Kimi Websites: [https://www.kimi.com/zh/websites](https://www.kimi.com/zh/websites) (mendukung antarmuka bahasa Mandarin dan Inggris)
3. Login ke akun Anda: Masuk dengan akun Kimi (pendaftaran dengan nomor ponsel atau email didukung)
4. Masukkan tugas pembuatan website Anda. Kimi Websites menyediakan tiga cara utama untuk membuat website:
   1. **Input teks**: Masukkan tugas di kotak dialog dan jelaskan website yang Anda inginkan dengan bahasa alami;
   2. **remix gambar/website**: Unggah mockup desain atau tangkapan layar website yang Anda sukai untuk memicu fitur terkait;
   3. **Pembuatan website berbasis template**: Buat website standar dengan cepat dengan memilih template siap pakai dan mengedit kontennya;
5. Mulai membangun: Masuk ke antarmuka fitur Websites, pilih template, atau buat langsung melalui percakapan.

<Frames
  src="./images/overview/screenshot-27.png"
  alt="tangkapan layar 27"
/>

### Metode 2: Akses dari Aplikasi Seluler
Pilih alat website khusus di App seluler

<Frames
  src="./images/overview/screenshot-27.png"
  alt="Antarmuka pembuat website"
/>

App resmi tersedia untuk iOS, Android, dan HarmonyOS (nama app: "Kimi"). Di atas kotak input, ketuk bilah alat (Taskbar) → beralih ke mode Websites. Fitur ini mencakup alat pembuatan multimodal dan kemampuan Agent, sehingga Anda dapat memberikan input visual dan menghasilkan kode frontend.

### Metode 3: Mode Agent Umum
Dalam mode Agent umum, masukkan kebutuhan pembuatan website Anda

Di website resmi atau perangkat seluler, pilih model K3 dan masukkan instruksi tugas yang berkaitan dengan pembuatan website. Kimi akan memanggil kemampuan pemrograman visual dan alat eksekusi kode.

## Langkah-Langkah

### Membuat Website Melalui Percakapan

Jelaskan kebutuhan Anda dengan bahasa alami di kotak input, dan Kimi akan memahaminya serta menjalankannya. Tiga metode pembuatan didukung:

| Metode             | Deskripsi                              |
|--------------------|------------------------------------------|
| Deskripsi teks   | Masukkan kebutuhan website secara langsung, dan AI otomatis menghasilkan situs |
| Penguraian mockup desain | Unggah mockup desain, lalu AI mengenali dan membuat ulangnya sebagai halaman web |
| Membangun website standar dengan cepat | Pilih template siap pakai dan edit kontennya |

### Contoh Praktis

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Masukkan tugas pembuatan website\nBuat website untuk anak anjing West Highland White Terrier, dengan palet warna utama hitam-putih. Sertakan tiga bagian:\n1. Kalender potret berkualitas studio dengan tampilan gambar yang dihasilkan AI;\n2. Ensiklopedia perawatan \"Curly-Coat Lab\";\n3. Toko merchandise yang menjual hoodie dengan avatar Westie dan poster foil perak edisi terbatas.\nHalaman checkout harus menyertakan modul amal: donasikan $1 untuk setiap item yang terjual ke penyelamatan anak anjing terlantar.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="Contoh website"
/>

### Ikhtisar Alur Kerja Pembuatan Website

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Deskripsi kebutuhan → Kimi memikirkan tugas → memanggil SKILL pembuatan webapp →\nmemahami tech stack dan proses build → membuat daftar tugas dan menginisialisasi proyek → menulis to-do list → menjalankan terminal → menghasilkan gambar → mempratinjau dan menyesuaikan →\nmemperbarui progres tugas dan mengembangkan kode inti website → memperbarui file CSS dan konfigurasi, lalu membuat komponen → melakukan pengeditan multi-giliran → deploy online → membagikan dan mendistribusikan",
    },
  ]}
/>

Kimi Websites mengaktifkan SKILL pembuatan webapp, agent pembuatan kode multi-giliran yang dikhususkan untuk konstruksi website. Agent ini secara mandiri menjalankan alur kerja berikut:

1. Penguraian kebutuhan: Otomatis menganalisis modul fitur website, gaya visual, dan logika interaksi
2. Perencanaan tugas: Memecah pekerjaan menjadi subtugas seperti desain, pengembangan, dan persiapan aset
3. Solusi teknis: Otomatis memilih arsitektur teknis yang sesuai (seperti React + Tailwind CSS)
4. Pembuatan aset: Menghasilkan aset visual seperti gambar dan ikon sesuai kebutuhan
5. Konstruksi kode: Menulis struktur halaman, styling, dan kode interaksi
6. Optimasi multi-giliran: Menyesuaikan secara mandiri berdasarkan pratinjau hingga website selesai

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
      content: "Warnanya kurang bagus. Saya ingin menghapus persyaratan hitam-putih dan membuatnya menjadi website yang terlihat normal.\nKimi Websites akan menyusun ulang to-do list dan melanjutkan pembuatan website.",
    },
  ]}
/>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Antarmuka Panel Pratinjau

Setelah website dihasilkan, panel pratinjau terbuka di sebelah kanan, dan kartu versi juga muncul dalam percakapan. Entri operasi utamanya adalah sebagai berikut:

**Bilah alat atas panel pratinjau** (dari kiri ke kanan):

| Tombol | Fungsi |
|--------|----------|
| Pratinjau / Kode | Beralih antara pratinjau visual dan tampilan kode sumber/pohon file |
| Edit | Masuk ke mode edit; klik area yang ingin Anda ubah, tambahkan catatan anotasi, lalu kirim ke Kimi |
| Bagikan | Publikasikan website, salin tautan, sesuaikan URL, atau batalkan publikasi |
| Pratinjau layar penuh | Lihat website dalam layar penuh |
| Ganti mode pratinjau | Beralih antara tampilan desktop dan seluler |
| Segarkan | Muat ulang pratinjau |
| Umpan balik pengguna | Kirim masalah yang ditemui saat penggunaan; Anda dapat memasukkan teks dan mengunggah tangkapan layar |
| Tutup | Ciutkan panel pratinjau |

**Kartu versi dalam percakapan**: Menampilkan nama situs, nomor versi (seperti V2), dan URL. Klik **Pratinjau** untuk membuka versi terkait; klik **Pulihkan** untuk mengembalikan ke versi tersebut. Kartu **Semua File** memungkinkan Anda melihat atau mengunduh file proyek lengkap. Untuk detail penggunaan setiap tombol, lihat bagian terkait di bawah.

### Pengeditan Visual

<Frames
  src="./images/overview/web-case1.png"
  alt="Antarmuka pengeditan visual"
/>

- **Optimasi multi-giliran**: Sempurnakan detail website melalui percakapan berkelanjutan
- **Cara mengedit**:
  - **Mode anotasi**: Klik bagian halaman web yang ingin Anda ubah dan tambahkan komentar dengan bahasa alami
  - **Mode seleksi**: Pilih elemen apa pun pada halaman web dan tambahkan komentar
  - Gunakan persegi, panah, kuas, penggantian warna, dan alat seleksi serta pengeditan lainnya untuk menambahkan saran perubahan
- Setelah menambahkan anotasi di beberapa tempat, masukkan semuanya ke percakapan dan kirim semua saran ke Kimi sekaligus

### Deployment dan Publikasi Kode
| Metode deployment | Deskripsi                                           |
|-------------------|------------------------------------------------------|
| Publikasi sekali klik | Klik tombol "Publikasikan" untuk deploy situs ke internet publik dan menghasilkan tautan online yang dapat diakses (sebelum dipublikasikan hanya pratinjau) |
| Unduh dan deploy | Unduh paket kode dan deploy ke server Anda sendiri |
| URL khusus | Ubah URL acak bawaan menjadi nama yang mudah diingat, misalnya menyesuaikan `abc` dalam `abc.ok.kimi.link` |

> **Tentang "URL khusus"**: 3–30 karakter, hanya huruf kecil, angka, dan tanda hubung. Tidak boleh diawali atau diakhiri tanda hubung, dan tidak boleh hanya angka. Beberapa kata cadangan (seperti `kimi`, `www`, `login`, dll.) tidak tersedia. Jika sudah digunakan atau tidak tersedia, silakan pilih nama lain.

> **Tentang batasan "Unduh dan deploy"**: **Login akun Kimi** dan **database cloud yang dikelola platform** disediakan oleh platform Kimi dan tidak akan ikut bermigrasi bersama kode yang diekspor. Jika Anda deploy kode ke server sendiri, metode login harus diubah menjadi skema nama pengguna/kata sandi berbasis database Anda sendiri, dan data juga harus dimigrasikan ke database Anda sendiri. Untuk akses publik saja, kami menyarankan langsung menggunakan **Publikasi sekali klik**, sehingga login akun Kimi dan data cloud tetap berfungsi normal. Lihat [Mengapa website yang saya buat tidak berfungsi?](/websites/websites-why-not-working) untuk detailnya.

#### Pratinjau Khusus Versi
Setelah pembuatan selesai, Anda akan masuk ke halaman pratinjau.
Di antarmuka pratinjau, Anda dapat mengeklik versi deployment yang berbeda dan mengunduh file untuk versi yang berbeda.

<Frames
  src="./images/overview/screenshot-26.png"
  alt="Pratinjau versi"
/>

#### Publikasikan, Bagikan, dan Batalkan Publikasi
Sebelum dipublikasikan, website hanya dapat dipratinjau dalam percakapan. Agar orang lain dapat mengaksesnya, klik **Bagikan** di sudut kanan atas panel pratinjau untuk membuka panel publikasi:

1. **URL khusus**: Anda dapat mengubah nama dalam URL bawaan, misalnya mengubahnya menjadi `yourname.ok.kimi.link`;
2. Klik **Salin Tautan** untuk mendapatkan URL publik, atau klik **Buka Website** untuk melihatnya di tab baru. Setelah dipublikasikan, bagian atas panel menampilkan **Dipublikasikan**, dan siapa pun yang memiliki tautan dapat mengaksesnya;
3. Untuk menonaktifkan situs dari publik, pilih **Batalkan Publikasi** dari menu **…** di sudut kanan atas panel. Situs tidak lagi dapat diakses publik (kode dan data tetap disimpan, dan Anda dapat memublikasikannya kembali kapan saja).

### Pengeditan Multi-Giliran

Jika Anda belum puas dengan bagian tertentu, klik tombol edit di jendela pratinjau untuk terus menyempurnakannya.
Anda juga dapat mengirim instruksi ke Kimi dengan bahasa alami dan melanjutkan pengeditan bersama Agent.
Setelah hasilnya sesuai, unduh kode HTML/CSS/JS lengkap dan deploy langsung, atau lanjutkan penyempurnaan di editor.

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Untuk Siapa

- Developer: Merancang prototipe produk dan demo frontend, sehingga waktu untuk membangun dari nol berkurang drastis.
- Wirausahawan: Cepat membuat website resmi, landing page, dan halaman pamer produk saat sumber daya terbatas.
- Manajer produk: Mengubah PRD atau mockup desain menjadi prototipe interaktif yang bisa didemonstrasikan dengan cepat, tanpa menunggu jadwal pengembangan.
- Pengguna nonteknis: Tidak diperlukan pengetahuan coding. Jelaskan ide Anda atau unggah gambar referensi, lalu wujudkan konsep menjadi halaman web yang dapat dijalankan.

## Contoh Prompt
**Anda dapat merujuk pada skenario dan prompt berikut untuk menghasilkan konten**

| Skenario         | Contoh prompt                                                   |
|------------------|------------------------------------------------------------------|
| Membuat landing page dari nol | Bantu saya membuat landing page pemasaran untuk produk SaaS dengan gaya bernuansa teknologi, mencakup bagian hero, pengenalan fitur, harga, dan CTA |
| Membuat ulang website dari video | [Unggah rekaman layar] Buat ulang website yang ditampilkan dalam video dan pertahankan interaksi aslinya |
| Membuat ulang dari tangkapan layar | [Unggah mockup desain] Implementasikan desain ini sebagai kode halaman web yang dapat dijalankan |
| Portofolio pribadi | Bantu saya membuat website portofolio pribadi untuk fotografer, dengan gaya minimalis hitam-putih dan dukungan tata letak gambar masonry |
| Halaman visualisasi data | Buat halaman web visualisasi yang menampilkan data pendanaan perusahaan AI pada tahun 2025, termasuk grafik dan filter |
| Website merek | Bantu saya membuat website resmi untuk merek kopi, menggunakan palet warna Morandi, dengan beranda, halaman produk, dan halaman toko |
| Utilitas/kalkulator | Buat halaman web kalkulator BMI dengan antarmuka bersih, penggantian satuan, dan tips tingkat kesehatan |
