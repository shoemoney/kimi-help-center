---
title: "Persiapan"
slug: "preparation"
order: 0
extract_headings: false
preview: true
preview_content: "Dasar-dasar penting sebelum menggunakan Kimi Code: terminal, PowerShell, CLI, dan pertimbangan keamanan."
---

<SeoMeta
  title="Persiapan Sebelum Menggunakan Kimi Code - Pusat Bantuan Kimi"
  description="Pelajari dasar-dasar terminal, PowerShell, dan CLI, serta cara menggunakan Kimi Code CLI dengan aman untuk pengembangan."
/>

# Persiapan

Sebelum menggunakan Kimi Code, ada beberapa konsep dasar yang perlu Anda pahami. Ini akan membantu Anda memasang dan menggunakan Kimi Code dengan lebih lancar.

## Apa itu terminal?

**Terminal** adalah jendela untuk mengoperasikan komputer dengan mengetikkan perintah berbasis teks.

Bayangkan terminal sebagai “pengelola file berbasis teks”: alih-alih mengeklik ikon dengan mouse, Anda mengetik perintah seperti `ls`, `cd`, dan `mkdir` untuk melihat isi folder, berpindah direktori, membuat file, dan sebagainya.

### Cara membuka terminal

| Sistem operasi | Cara membukanya |
|---------|---------|
| **macOS** | Tekan `Cmd + Space`, ketik "Terminal" atau "Terminal", lalu tekan Enter |
| **Windows** | Tekan `Win + R`, ketik `powershell` atau `wt`;<br>atau cari "PowerShell"/"Terminal" di menu Start |
| **Linux** | Tekan `Ctrl + Alt + T`, atau cari "Terminal" di menu aplikasi |

### Cara memeriksa sistem operasi Anda

- **macOS**: Klik ikon Apple di pojok kiri atas layar → "Mengenai Mac Ini"
- **Windows**: Tekan `Win + Pause/Break`, atau klik kanan "PC Ini" → "Properti"
- **Linux**: Jalankan `uname -a` atau `cat /etc/os-release` di terminal

## Apa itu PowerShell?

**PowerShell** adalah alat terminal yang umum digunakan di Windows. Dibanding Command Prompt (CMD) standar, PowerShell lebih andal. Di Windows, Kimi Code CLI harus dipasang dan digunakan melalui PowerShell.

Windows memiliki dua alat “baris perintah” yang berbeda. Jangan sampai tertukar:

| Alat | Deskripsi | Cocok? |
|-----|------|---------|
| **CMD (Command Prompt)** | Alat baris perintah paling dasar di Windows | ❌ Tidak disarankan |
| **PowerShell** | Alat baris perintah modern yang lebih andal | ✅ Disarankan |

> **Tips**: Perintah instalasi Kimi Code CLI harus dijalankan di PowerShell. Perintah tersebut mungkin tidak berjalan dengan benar di CMD.

## Direktori kerja

Saat Kimi Code CLI dimulai, folder saat ini akan digunakan sebagai **direktori kerja**. Kimi Code CLI hanya dapat membaca dan mengubah file di dalam direktori kerja tersebut.

**Sebelum memulai, periksa path saat ini di terminal Anda**:

- Prompt terminal biasanya menampilkan direktori saat ini, misalnya `~/projects/my-app$`
- Ketik `pwd` (macOS/Linux) atau `cd` (Windows) untuk melihat path lengkap
- Gunakan `cd <folder-name>` untuk masuk ke direktori proyek tujuan, lalu jalankan `kimi`

> **Contoh**: Misalnya proyek Anda berada di `~/Documents/my-project`. Mulai dengan langkah berikut:
> 1. Buka terminal
> 2. Ketik `cd ~/Documents/my-project`
> 3. Ketik `kimi` untuk memulai

## Cara menjalankan perintah

Menjalankan perintah di terminal atau PowerShell itu sederhana:

1. **Salin perintah**: Salin teks perintah dari dokumentasi
   - macOS/Linux: `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash`
   - Windows: `irm https://code.kimi.com/kimi-code/install.ps1 | iex`
2. **Tempelkan ke terminal**: Klik kanan di jendela terminal, atau tekan `Cmd/Ctrl + V` untuk menempelkan
3. **Tekan Enter**: Tekan tombol `Enter` untuk menjalankan perintah
4. **Tunggu hingga selesai**: Terminal akan menampilkan proses eksekusi dan hasilnya

> **Catatan**: Di terminal, `Ctrl+C` biasanya **menghentikan perintah yang sedang berjalan**; bukan untuk menyalin teks. Untuk menyalin, gunakan `Cmd/Ctrl + Shift + C`; untuk menempelkan, gunakan `Cmd/Ctrl + Shift + V`; atau gunakan menu klik kanan.

> **Tips**: Jika Anda diminta memasukkan kata sandi saat perintah sedang berjalan, terminal tidak akan menampilkan karakter apa pun. Ini adalah mekanisme keamanan yang normal. Cukup ketik kata sandi, lalu tekan Enter.

## Apa itu CLI?

**CLI** adalah singkatan dari **C**ommand-**L**ine **I**nterface. Artinya, Anda menggunakan alat dengan mengetikkan perintah teks, bukan mengeklik tombol di antarmuka grafis.

Kimi Code CLI adalah alat baris perintah: Anda mengetik `kimi` di terminal untuk memulainya, lalu berinteraksi dengan AI melalui perintah teks agar dapat membantu membaca kode, mengubah file, menjalankan perintah, dan lainnya.

## Lingkungan jaringan

Untuk menggunakan Kimi Code, Anda perlu akses ke server Kimi. Jika lingkungan jaringan Anda memiliki salah satu pembatasan berikut, Anda mungkin perlu menyesuaikan pengaturan:

- **Jaringan perusahaan/sekolah**: Beberapa lingkungan intranet mungkin membatasi akses ke API eksternal. Jika Anda menggunakan proxy, Anda dapat mengatur alamat proxy di konfigurasi.
- **VPN/proxy**: Jika Anda menggunakan proxy global, pastikan proxy tersebut tidak mencegat atau mengganggu permintaan ke `api.kimi.com` atau `api.moonshot.cn`.
- **Firewall**: Periksa apakah firewall sistem atau router Anda memblokir akses jaringan dari program terminal.

## Pertimbangan keamanan

Kimi Code CLI adalah AI Agent yang andal. Kimi Code CLI dapat:

- **Membaca** isi file di komputer Anda
- **Mengubah** kode dan file konfigurasi Anda
- **Menjalankan** perintah Shell, misalnya memasang dependensi atau menjalankan pengujian

**Perhatikan hal-hal berikut saat menggunakannya**:

- **Jangan jalankan di direktori sensitif**: Hindari menjalankan Kimi Code CLI di direktori yang berisi kata sandi, kunci, atau file pribadi.
- **Tinjau tindakan dengan saksama**: Kimi Code akan meminta konfirmasi Anda sebelum mengubah file atau menjalankan perintah. Jangan mengeklik “Setuju” hanya karena kebiasaan.
- **Pahami sebelum melanjutkan**: Jika Anda tidak yakin dengan dampak suatu tindakan, minta Kimi Code menjelaskan secara persis apa yang akan dilakukan sebelum Anda memutuskan untuk melanjutkan.
- **Cadangkan kode penting**: Sebelum menggunakan Kimi Code pada proyek penting, sebaiknya commit kode Anda ke version control seperti Git, agar Anda dapat mengembalikannya kapan saja.

> **Rekomendasi**: Saat pertama kali menggunakannya, cobalah Kimi Code CLI pada proyek uji coba atau salinan proyek Anda. Setelah memahami cara kerjanya, barulah gunakan pada proyek produksi Anda.
