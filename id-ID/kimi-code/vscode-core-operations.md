---
title: "Operasi Inti VS Code"
slug: "vscode-core-operations"
order: 12
extract_headings: false
preview: true
preview_content: "Panel chat, referensi file, peninjauan diff, Mode Rencana, dan pengelolaan konteks di ekstensi Kimi Code untuk VS Code."
---

<SeoMeta
title="Operasi Inti Kimi Code untuk VS Code - Pusat Bantuan Kimi"
description="Kuasai fitur inti ekstensi Kimi Code untuk VS Code: referensi file @, perintah slash, peninjauan diff perubahan kode, Mode Rencana, antrean pesan, dan pengelolaan konteks."
/>

# Operasi Inti VS Code

<Callout type="warning">
**Adaptasi ekstensi VS Code sedang berlangsung**

Kimi Code untuk VS Code saat ini hanya terbuka untuk pemasangan baru bagi pengguna CLI Python lama. Pengguna yang sudah memasang ekstensi ini dapat terus menggunakannya setelah meningkatkan ke CLI baru. Pengguna lain dari CLI versi TS belum didukung untuk pemasangan saat ini.
</Callout>

## Buka panel

Klik ikon Kimi di Bilah Aktivitas, atau jalankan perintah "Kimi Code" dari Palette Perintah.

## Input dan kontrol

### Referensi file

Ketik `@`, lalu pilih nama file atau folder. Misalnya, gunakan `@src/handlers/` untuk merujuk folder, `@app.ts` untuk merujuk file, atau `@src/app.ts:10-20` untuk merujuk rentang baris tertentu.

Tekan `Alt+K` untuk menyisipkan file saat ini atau kode yang dipilih sebagai referensi dengan cepat.

### Perintah slash

Ketik `/` untuk membuka menu perintah. Gunakan `/init` untuk memindai proyek dan membuat dokumentasi, atau `/compact` untuk memadatkan konteks yang terlalu panjang.

### Riwayat input

Tekan `↑` / `↓` di kotak input untuk menelusuri pesan yang baru saja Anda kirim dengan cepat, sehingga lebih mudah mengulang atau merevisi pertanyaan.

### Input file media

Anda dapat menempel, menyeret dan melepas, atau memilih file media. Format yang didukung mencakup format gambar seperti PNG, JPEG, GIF, WebP, dan HEIC, serta format video seperti MP4, WebM, dan MOV.

- **Tempel / seret dan lepas**: Satu gambar dapat berukuran hingga 5MB dalam ukuran aslinya. Sistem akan otomatis memampatkannya, termasuk mengonversi HEIC ke JPEG, mengubah ukuran gambar yang terlalu besar, dan menurunkan kualitas hingga sekitar 2MB.
- **Pemilih file**: Saat memilih file melalui tombol "+" di kotak input atau menu `@`, gambar dapat berukuran hingga 10MB dan video hingga 20MB.
- **Batas umum**: Setiap pesan dapat melampirkan hingga 9 file, dengan ukuran total hingga 80MB. Saat file media dilampirkan, model yang tidak mendukung input multimodal akan otomatis disaring.

### Antrean pesan

Saat Kimi sedang merespons, Anda tetap dapat mengetik dan mengirim pesan di kotak input. Pesan-pesan ini tidak akan hilang; sebaliknya, pesan tersebut ditambahkan ke **antrean pesan**. Bilah alat bawah menampilkan jumlah antrean, dan Anda dapat mengekliknya untuk membuka panel antrean:

- Lihat daftar pesan yang menunggu untuk dikirim
- Edit atau hapus pesan dalam antrean
- Ubah urutan pesan
- Saat Kimi sedang merespons, klik ikon ⚡ pada item antrean untuk langsung menyisipkan pesan tersebut sebagai **Steer**, sehingga Kimi diarahkan untuk menyesuaikan arah respons saat ini

### Model dan Thinking mode

Ganti model dari menu dropdown di bilah input.

Sebagian model mendukung kemampuan penalaran yang lebih panjang. Tombol Thinking mode memiliki tiga status: tersembunyi ketika model tidak mendukung Thinking mode, diaktifkan/dinonaktifkan secara manual oleh pengguna, atau selalu aktif untuk model seperti k2-thinking.

Setelah diaktifkan, langkah-langkah berpikir diciutkan secara default dalam respons. Anda dapat membukanya untuk melihat proses penalaran. Aktifkan `kimi.alwaysExpandThinking` di pengaturan agar proses berpikir dibuka secara default.

## Mode kerja

### Konfirmasi operasi dan eksekusi alat

Saat Kimi mengusulkan untuk menjalankan alat atau menulis ke file, dialog konfirmasi muncul dengan tiga opsi:

- **Ya**: Setujui hanya operasi saat ini
- **Ya, untuk sesi ini**: Setujui operasi serupa dalam sesi saat ini hingga sesi baru dimulai
- **Tidak**: Tolak menjalankan operasi

Aktifkan `kimi.yoloMode` di pengaturan untuk menyetujui semua pemanggilan alat secara otomatis. Ini cocok ketika Anda memercayai alur kerja dan ingin efisiensi yang lebih tinggi.

### Dialog Pertanyaan

Selama eksekusi, Kimi mungkin mengajukan pertanyaan, misalnya meminta Anda memilih pendekatan implementasi. Kartu pertanyaan akan muncul di bagian bawah. Anda dapat langsung memilih opsi prasetel, atau memilih "Respons khusus..." untuk memasukkan jawaban sendiri. Setelah Anda menjawab, Kimi akan melanjutkan eksekusi.

### Mode Rencana

Klik ikon 📋 di sisi kiri kotak input untuk masuk ke Mode Rencana. Saat diaktifkan, Kimi terlebih dahulu menampilkan Kartu Rencana yang dapat diperluas sebelum eksekusi formal, berisi daftar langkah yang akan dijalankan. Anda dapat meninjau rencana sebelum membiarkannya berlanjut.

- Tombol Mode Rencana mempertahankan pengaturan sebelumnya untuk setiap sesi baru.
- Jika Kimi sudah melakukan streaming respons, keluar dari Mode Rencana memerlukan konfirmasi kedua agar tugas saat ini tidak terputus.

### Pelacakan perubahan file

Setelah Kimi memodifikasi file, semua perubahan dilacak dan ditampilkan di bagian "Perubahan File". Anda dapat melihat daftar file yang dimodifikasi beserta statusnya, seperti ditambahkan, diubah, atau dihapus, bersama statistik baris yang ditambahkan dan dihapus.

Untuk setiap file, Anda dapat melihat perubahan dalam tampilan diff native VS Code, memulihkannya ke kondisi asli, atau mempertahankan perubahan untuk menghapus catatan pelacakan. Operasi batch didukung, sehingga Anda dapat mempertahankan atau membuang semua perubahan sekaligus. Status baseline dicatat saat pertama kali sebuah file dimodifikasi dalam sesi; pengembalian akan memulihkan file ke versi baseline tersebut.

## Pengelolaan konteks

### Riwayat sesi

Klik menu dropdown riwayat di bagian atas panel untuk menelusuri sesi sebelumnya. Data sesi disimpan secara lokal dan mendukung pencarian kata kunci. Anda dapat menghapus sesi lama atau memuat sesi untuk melanjutkan percakapan sebelumnya.

Bilah status menampilkan persentase penggunaan konteks serta jumlah token input/output. Saat penggunaan konteks tinggi, gunakan perintah `/compact` untuk memadatkannya.

### Beralih direktori kerja

Klik ikon roda gigi (Menu Tindakan) di sisi kanan kotak input → **Direktori Kerja** untuk beralih direktori kerja di antara berbagai subdirektori dalam Workspace saat ini. Setelah beralih, sesi baru dimulai otomatis agar Kimi dapat bekerja berdasarkan konteks direktori baru. Anda dapat memilih subdirektori terdaftar secara langsung, atau menggunakan "Jelajahi..." untuk menelusuri subfolder apa pun.

## Menu tindakan

### Daftar fitur

Ikon roda gigi di sisi kanan kotak input membuka menu tindakan, yang mencakup fitur-fitur berikut:

- **Direktori Kerja**: Beralih direktori kerja saat ini (lihat "Beralih direktori kerja" di atas)
- **Server MCP**: Buka panel konfigurasi server MCP
- **Konfigurasi Umum**: Buka halaman konfigurasi Kimi di pengaturan VS Code
- **Tampilkan Log**: Buka panel log output Kimi Code untuk pemecahan masalah
- **Reset Kimi**: Reset Kimi Webview, berguna saat antarmuka macet atau tidak merespons
- **Keluar / Masuk**: Keluar dari atau masuk kembali ke akun Kimi Anda

Anda juga dapat menjalankan "Kimi Code: Run CLI" dari Palette Perintah VS Code untuk memulai Kimi Code CLI secara langsung di terminal terintegrasi.
