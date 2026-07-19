---
title: "Proyek"
slug: "project"
order: 4
extract_headings: true
preview: true
preview_content: "Proyek adalah ruang kerja persisten yang menyatukan file referensi, chat, dan instruksi proyek untuk tugas jangka panjang, sehingga Anda tidak perlu menjelaskan ulang konteksnya di setiap chat baru."
---

<SeoMeta
  title="Apa Itu Proyek Kimi? Cara Membuat dan Menggunakannya - Pusat Bantuan Kimi"
  description="Pelajari Proyek Kimi: ruang kerja persisten yang mengelompokkan file referensi, chat, dan instruksi proyek — ideal untuk menulis rangkaian dokumen, riset berkelanjutan, atau memelihara codebase. Mencakup pembuatan dan pengelolaan proyek, instruksi proyek, file proyek, serta quota paket."
/>

# Proyek

Proyek adalah ruang kerja persisten. Anda dapat menyatukan file referensi, chat, dan instruksi proyek untuk satu tugas jangka panjang dalam satu proyek, dan setiap chat yang Anda mulai di dalam proyek akan otomatis membawa konteks ini — jadi Anda tidak perlu mengunggah ulang file yang sama atau menjelaskan ulang latar belakang proyek setiap kali.

**Kapan menggunakan proyek**: Buat proyek ketika pekerjaan akan berlanjut dari waktu ke waktu, menghasilkan lebih dari satu keluaran, atau bergantung pada kumpulan file yang sama — misalnya, menulis rangkaian dokumen, melakukan riset berkelanjutan, atau memelihara codebase. Jika tugasnya mandiri dan tidak membutuhkan konteks bersama, gunakan chat biasa saja.

<Callout type="info">
Aplikasi desktop Kimi Work juga memiliki "Proyek", yang terpisah dari proyek Kimi (Chat) yang dijelaskan di sini — keduanya tidak terhubung dan tidak berbagi data.
</Callout>

## Membuat dan mengelola proyek

**Titik masuk**:
- tombol "+" di sebelah kanan bagian "Proyek" pada sidebar;
- item "+ Proyek baru" di bagian atas pemilih Proyek beranda.

**Buat**: masukkan nama proyek (wajib, 1–50 karakter) dan, jika perlu, instruksi proyek; klik "Buat" untuk membuka halaman beranda proyek.

**Edit / Hapus**:
- arahkan kursor ke atau klik kanan nama proyek di sidebar untuk "Edit judul" atau "Sematkan";
- menghapus proyek memerlukan konfirmasi. **Setelah dihapus, chat, file, dan instruksi proyek akan dihapus permanen dan tidak dapat dipulihkan** — harap lanjutkan dengan hati-hati.

**Sidebar**: bagian "Proyek" berada di bawah entri Kimi Claw dan di atas riwayat chat, menampilkan proyek Anda berdasarkan yang paling baru dibuat; luaskan proyek untuk melihat chat di dalamnya.

## Halaman beranda proyek

Halaman beranda proyek menggunakan tata letak tiga kolom:
- **Kiri**: sidebar standar;
- **Tengah**: area untuk memulai chat dan daftar chat proyek. Kotak input menampilkan "Mulai chat di 'project name'…", dan mengirim pesan di sini akan membuat chat yang otomatis menjadi bagian dari proyek saat ini;
- **Panel Kanan**: dua blok — Instruksi dan File (dapat diciutkan).

## Yang dapat Anda lakukan dalam chat proyek

Chat dalam proyek memiliki kemampuan yang sama seperti chat Kimi biasa, sekaligus otomatis membawa konteks proyek. Anda dapat:
- menggunakan **file proyek** (dibaca sesuai kebutuhan oleh model) dan **instruksi proyek**;
- menggunakan **plugin, Skills, dan Goal**;
- **memilih model**.

Mulai chat terpisah untuk setiap keluaran yang berbeda agar pesan dan hasilnya tetap terfokus; proyek akan menyatukan chat-chat terkait tersebut.

## Instruksi proyek

- Instruksi proyek adalah instruksi kustom khusus untuk proyek (teks biasa) yang diikuti Kimi di setiap chat dalam proyek tersebut;
- Contoh: "Anda adalah manajer produk senior. Balas dalam bahasa Mandarin dan keluarkan hasil dalam Markdown.";
- Instruksi berlaku mulai dari pesan Anda berikutnya atau chat baru setelah disimpan.

## File proyek

- Unggah file referensi ke proyek agar dapat digunakan oleh semua chat di dalamnya;
- Format yang didukung sama dengan unggahan Kimi Agent: PDF, DOCX, XLSX, CSV, TXT, MD, file kode umum, dan format gambar umum;
- **Setiap file tidak boleh lebih besar dari 100 MB, dan Anda dapat mengunggah hingga 50 file**;
- File proyek **dibaca sesuai kebutuhan oleh model** — alih-alih memuat seluruh teks setiap file di tiap giliran, model menentukan file mana yang diperlukan berdasarkan pertanyaan Anda;
- Blok File menampilkan bilah kapasitas di bagian bawah; ketika sudah mendekati atau mencapai batas, Anda akan diminta menghapus file atau meningkatkan paket.

## Cara kerja konteks dalam proyek

Saat Anda memulai chat dalam proyek, konteks yang disuntikkan ke model mencakup: **system prompt + global main memory + instruksi proyek + file proyek yang dibaca sesuai kebutuhan**.

Chat biasa (non-proyek) tidak menyuntikkan instruksi atau file proyek; instruksi dan file sebuah proyek hanya berlaku di dalam proyek tersebut dan tidak memengaruhi proyek lain maupun chat biasa.

## Quota dan paket

Jumlah proyek dan penyimpanan proyek meningkat sesuai paket keanggotaan Anda:

| Paket | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Proyek | 2 | 20 | 20 | 100 | 100 |
| Penyimpanan proyek | 500MB | 20GB | 20GB | 50GB | 50GB |

Batas lain (seperti jumlah chat per proyek dan batas karakter untuk instruksi proyek) juga mengikuti paket Anda; untuk angka terbaru, lihat [halaman paket keanggotaan](/membership/membership-pricing).

## FAQ

### Apakah file proyek dibaca sepenuhnya di setiap giliran chat?
Tidak. File proyek dibaca sesuai kebutuhan — model menentukan file mana yang diperlukan berdasarkan pertanyaan Anda dan hanya membaca file tersebut, bukan memuat semua file di setiap giliran.

### Berapa banyak file yang dapat ditampung sebuah proyek?
Setiap file tidak boleh lebih besar dari 100 MB, dan Anda dapat mengunggah hingga 50 file. Total penyimpanan proyek mengikuti paket Anda; lihat [halaman paket keanggotaan](/membership/membership-pricing).

### Apa yang terjadi ketika saya menghapus proyek?
Menghapus proyek akan **menghapus permanen** chat, file, dan instruksi proyek di dalamnya, dan tindakan ini tidak dapat dibatalkan. Harap pastikan sebelum menghapus.

### Bagaimana jika saya mencapai batas jumlah proyek atau penyimpanan?
Hapus proyek atau file yang tidak lagi Anda perlukan untuk mengosongkan ruang, atau tingkatkan paket Anda untuk quota yang lebih tinggi. Lihat [halaman paket keanggotaan](/membership/membership-pricing) untuk detailnya.
