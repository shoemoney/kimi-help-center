---
title: "FAQ Kimi Code"
slug: "faq"
order: 4
extract_headings: false
preview: true
preview_content: "Pertanyaan yang sering diajukan tentang Kimi Code."
---

<SeoMeta
  title="FAQ Kimi Code - Pusat Bantuan Kimi"
  description="Pertanyaan yang sering diajukan tentang instalasi, autentikasi, migrasi, interaksi Kimi Code CLI, dan lainnya."
/>

# Pertanyaan yang sering diajukan

## Migrasi dari versi lama

<Callout type="info">
Kimi Code CLI telah mengalami pembaruan versi besar — beralih dari Python/uv ke Node.js, menghadirkan pengalaman instalasi yang lebih sederhana, startup yang lebih cepat, dan antarmuka terminal yang dirancang ulang. Versi lama akan dihentikan secara bertahap, jadi kami sarankan untuk segera memperbarui.
</Callout>

Jika Anda bermigrasi dari versi lama, ikuti langkah-langkah di bawah ini — satu perintah saja dapat memindahkan konfigurasi, server MCP, dan riwayat sesi Anda ke versi baru.

### Apa yang baru

- **Tidak perlu lagi Python / uv**: Dibangun ulang di atas Node.js — tanpa lingkungan Python, instalasi lebih sederhana
- **Biner native, langsung berfungsi**: Startup lebih cepat, jejak lebih ringan
- **Antarmuka terminal yang dirancang ulang**: Pengalaman yang lebih mulus dan responsif
- **Migrasi data lengkap**: Konfigurasi, server MCP, dan riwayat sesi semuanya berpindah secara mulus

### Cara bermigrasi

Ada dua cara untuk bermigrasi.

**Saat pertama kali menjalankan `kimi`** setelah menginstal kimi-code, ia secara otomatis memeriksa apakah ada data kimi-cli di bawah `~/.kimi/`. Jika menemukannya, prompt migrasi akan muncul, dan Anda dapat memilih untuk bermigrasi sekarang, melakukannya nanti, atau tidak ditanya lagi.

Anda juga dapat **menjalankannya secara manual kapan saja**:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi migrate",
    },
  ]}
/>

Anda dapat memilih apakah ingin memigrasikan sesi obrolan juga. Jika belum membutuhkan riwayatnya, pilih **Config only**; jika tidak, pilih **Config + N sessions** untuk memindahkan semuanya sekaligus. Ringkasan akan ditampilkan di akhir.

### Apa yang terjadi selama migrasi

**Yang dimigrasikan**: konfigurasi (`config.toml`), konfigurasi server MCP, riwayat input, dan sesi obrolan apa pun yang Anda pilih untuk dimigrasikan.

**Yang tidak dimigrasikan**: kredensial login OAuth dan otorisasi layanan MCP tidak disalin, jadi Anda perlu menjalankan `/login` lagi dan mengotorisasi ulang server MCP setelah bermigrasi. Plugin kimi-cli juga tidak termasuk.

<Callout type="tip">
Migrasi **tidak pernah mengubah atau menghapus** data lama mana pun di bawah `~/.kimi/`. kimi-cli tetap berfungsi seperti sebelumnya, dan keduanya tidak saling mengganggu. Migrasi juga dapat dijalankan berulang kali — sesi yang sudah dimigrasikan tidak akan diimpor lagi.
</Callout>

Setelah migrasi, sesi yang diimpor dari kimi-cli ditandai dengan `[imported]` di pemilih sesi sehingga Anda dapat membedakannya dari yang baru.

## Instalasi & autentikasi

### Tidak ada model yang tersedia saat menjalankan `/login`

Jika Anda melihat "No models available for the selected platform" saat menjalankan `/login`, hal ini mungkin disebabkan oleh:

- **API key tidak valid atau kedaluwarsa**: Periksa apakah API key yang Anda masukkan sudah benar dan masih berlaku.
- **Masalah koneksi jaringan**: Pastikan Anda dapat mengakses alamat layanan API (seperti `api.kimi.com` atau `api.moonshot.cn`).

**Perhatikan perbedaan platform**

Manfaat keanggotaan Kimi Code dan [Kimi Open Platform](https://platform.kimi.com) memiliki Base URL yang berbeda. Pastikan Base URL sesuai dengan API Key saat melakukan konfigurasi.

| Platform | Base URL | Penagihan | Pembuatan key |
|------|---------|---------|-------------|
| **Kimi Code** | Kompatibel dengan Anthropic: `https://api.kimi.com/coding/` | Langganan keanggotaan Kimi (termasuk quota) | [Konsol Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Bayar sesuai pemakaian | [Kimi Open Platform](https://platform.kimi.com) |

### API key tidak valid

Kemungkinan penyebab API key tidak valid:

- **Key dimasukkan secara keliru**: Periksa apakah ada spasi tambahan atau karakter yang hilang.
- **Key kedaluwarsa atau dicabut**: Konfirmasikan status key di konsol platform.

### Keanggotaan kedaluwarsa atau quota habis

Jika Anda menggunakan platform Kimi Code, Anda dapat memeriksa quota saat ini dan status keanggotaan melalui perintah `/usage`. Jika quota Anda habis atau keanggotaan Anda kedaluwarsa, Anda perlu memperbarui atau meningkatkan di [Kimi Code](https://kimi.com/code).

## Langganan

### Bagaimana cara meminta faktur atau meningkatkan keanggotaan saya?

Kunjungi [halaman Keanggotaan Kimi](https://www.kimi.com/membership/pricing?from=kfc_docs_faq#pricing-faq) dan ikuti petunjuk untuk mengajukan permintaan faktur atau meningkatkan paket Anda.

## Masalah interaksi

### Gagal menempel gambar

Saat menempel gambar dengan `Ctrl-V`, jika Anda melihat "Current model does not support image input", artinya model saat ini tidak mendukung input gambar.

Solusi:

- **Beralih ke model yang mendukung gambar**: Gunakan model dengan kemampuan `image_in`.
- **Periksa isi clipboard**: Pastikan clipboard benar-benar berisi data gambar, bukan jalur ke file gambar.

## Pembaruan & peningkatan

### Peluncuran pertama di macOS lambat

Gatekeeper macOS melakukan pemeriksaan keamanan saat program baru dijalankan untuk pertama kalinya, sehingga startup menjadi lebih lambat. Solusi:

- **Tunggu hingga pemeriksaan selesai**: Bersabarlah pada peluncuran pertama; peluncuran berikutnya akan kembali ke kecepatan normal.
- **Tambahkan ke Developer Tools**: Tambahkan aplikasi terminal Anda di **System Settings → Privacy & Security → Developer Tools**.

### Cara memperbarui Kimi Code CLI

Jalankan `kimi upgrade` untuk memeriksa versi terbaru dan menampilkan opsi pembaruan. Pilih `Install update now` untuk memperbarui. Anda juga dapat memperbarui langsung melalui pengelola paket:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

## FAQ ekstensi VS Code

Berikut adalah pertanyaan yang sering diajukan tentang Ekstensi VS Code Kimi Code.

### VS Code menyatakan tidak ada workspace yang terbuka

Silakan buka sebuah folder di VS Code. Ekstensi VS Code Kimi Code memerlukan workspace agar dapat berfungsi dengan baik.

### VS Code menyatakan CLI tidak dapat ditemukan

Silakan instal Kimi Code CLI secara manual dan konfigurasikan `kimi.executablePath` di pengaturan VS Code, atau pastikan CLI bawaan tersedia.

### Login VS Code gagal

Coba lewati login dan gunakan mode API key sebagai gantinya, periksa koneksi jaringan Anda, atau coba lagi nanti melalui menu aksi ekstensi Kimi Code.

### VS Code mengirim pesan tanpa respons

Silakan pastikan Kimi Code CLI tersedia, model sudah dikonfigurasi, dan ada folder workspace yang terbuka di VS Code. Periksa log error melalui "Kimi Code: Show Logs".

### Koneksi VS Code habis waktu

Jika tidak ada respons dalam 30 detik, koneksi akan habis waktu. Silakan periksa jaringan Anda dan coba lagi.

### Error VS Code sebelum mengirim pesan

Error tertentu mencegah pengiriman pesan di VS Code, seperti Kimi Code CLI tidak ditemukan, versi terlalu rendah, belum login, atau sesi sedang sibuk. Error akan ditampilkan sebagai notifikasi toast, dan input Anda akan dipertahankan untuk dicoba lagi.

## Masukan & kontak

### Dokumentasi tidak menyelesaikan masalah saya

Jika hal-hal di atas tidak menyelesaikan masalah Anda, jangan ragu untuk menghubungi kami melalui email: [code@moonshot.ai](mailto:code@moonshot.ai). Mohon jelaskan masalah yang Anda alami, langkah-langkah yang telah Anda lakukan, dan informasi log yang relevan dalam email tersebut, dan kami akan merespons sesegera mungkin.

Jika Anda memiliki masalah atau saran, Anda juga dapat memberikan masukan di [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).
