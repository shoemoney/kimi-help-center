---
title: "Memulai"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Panduan instalasi, login, dan langkah awal Kimi Code CLI."
---

<SeoMeta
  title="Instalasi & Mulai Cepat Kimi Code CLI - Pusat Bantuan Kimi"
  description="Mulai dengan Kimi Code CLI: perintah instalasi, penggunaan terminal dan browser, login pertama kali, serta membuat AGENTS.md dengan /init."
/>

# Memulai dengan Kimi Code CLI

Kimi Code CLI adalah agen AI yang berjalan di terminal, membantu Anda menjalankan tugas pengembangan perangkat lunak dan operasi terminal sehari-hari — membaca dan mengubah kode, menjalankan perintah shell, mencari file, mengambil halaman web, serta merencanakan dan menyesuaikan langkah berikutnya secara otonom berdasarkan umpan balik selama bekerja.

Ini cocok untuk skenario seperti:

- **Menulis dan mengubah kode**: mengimplementasikan fitur baru, memperbaiki bug, menuntaskan refactor
- **Memahami sebuah proyek**: menjelajahi basis kode yang belum dikenal dan menjawab pertanyaan seputar arsitektur dan implementasi
- **Mengotomatiskan tugas**: memproses file secara massal, menjalankan build dan pengujian, merangkai beberapa skrip menjadi satu

CLI ini ditulis dengan TypeScript, didistribusikan melalui npm, dan berjalan di Node.js.

## Sebelum mulai

- **Sistem operasi**: macOS, Linux, atau Windows (melalui PowerShell)
- **Akun Kimi**: langganan keanggotaan Kimi yang aktif, atau API key yang dapat dipanggil

<Callout type="tip">
Kimi Code CLI adalah aplikasi TUI yang sepenuhnya interaktif. Untuk pengalaman visual terbaik, jalankan di terminal yang mendukung true-color dan ligatur, seperti [Kitty](https://sw.kovidgoyal.net/kitty/) atau [Ghostty](https://ghostty.org/).
</Callout>

## Instalasi

Tersedia dua opsi instalasi: skrip instalasi resmi (disarankan, tanpa perlu Node.js terpasang lebih dulu) dan instalasi global via npm.

### Skrip instalasi (disarankan)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Memasang Kimi Code CLI"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows (PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

Skrip ini otomatis mengunduh rilis terbaru, memverifikasi checksum, dan menempatkan executable `kimi` pada `PATH` Anda.

<Callout type="tip">
Di Windows, pasang [Git for Windows](https://gitforwindows.org/) sebelum peluncuran pertama. Kimi Code CLI menggunakan Git Bash bawaan sebagai lingkungan shell-nya; jika Git Bash dipasang di lokasi khusus, atur `KIMI_SHELL_PATH` ke path absolut `bash.exe`.
</Callout>

### Instalasi via npm

Jika Node.js 22.19.0 atau yang lebih baru sudah terpasang, Anda dapat memasang langsung melalui npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

Atau dengan pnpm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### Verifikasi instalasi

Setelah instalasi, pastikan executable sudah siap:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
Jika perintah `kimi` tidak ditemukan, coba buka ulang terminal Anda atau jalankan `source ~/.bashrc` (atau `~/.zshrc`).
</Callout>

> Karena Gatekeeper macOS, peluncuran pertama `kimi` mungkin terasa jauh lebih lama. Anda bisa mempercepat peluncuran berikutnya dengan menambahkan aplikasi terminal Anda ke **System Settings → Privacy & Security → Developer Tools**.

## Pembaruan dan penghapusan

**Pembaruan**: jalankan `kimi upgrade` — CLI akan memeriksa versi terbaru dan menampilkan opsi pembaruan. Pilih `Install update now` untuk memperbarui berdasarkan sumber instalasi Anda saat ini. Anda juga dapat memperbarui langsung melalui package manager:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**Penghapusan**: jika Anda memasang melalui skrip, hapus executable `kimi`. Jika Anda memasang melalui npm:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## Peluncuran pertama

### Terminal interaktif

Masuk ke direktori proyek Anda dan jalankan `kimi` untuk memulai antarmuka interaktif:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### Instruksi tunggal

Untuk menjalankan satu instruksi tanpa masuk ke antarmuka interaktif, gunakan `-p`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### Lanjutkan sesi

Untuk melanjutkan sesi sebelumnya, tambahkan `-C`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### Login pertama

Pada peluncuran pertama, Anda perlu mengonfigurasi sumber API. Di antarmuka interaktif, ketik `/login` untuk memulai alur login:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login` membuka pemilih platform yang mendukung dua opsi:

- **Kimi Code (OAuth)** — alur device-code; buka tautan di perangkat mana pun, masuk, lalu masukkan kode untuk memberi otorisasi
- **API key Kimi Platform** — masukkan API key dari `platform.kimi.com` atau `platform.kimi.ai`

Untuk keluar, ketik `/logout` guna menghapus kredensial saat ini.

<Callout type="tip">
Jika Anda ingin menghubungkan Anthropic, OpenAI, Google, atau penyedia lain, edit langsung `~/.kimi-code/config.toml` untuk mengonfigurasi API key. Untuk referensi lengkap seluruh opsi konfigurasi, lihat dokumentasi variabel lingkungan dan penggantian konfigurasi.
</Callout>

## Membuat AGENTS.md

Jalankan perintah `/init` di direktori proyek Anda. Kimi Code CLI akan otomatis memindai struktur proyek dan membuat file `AGENTS.md`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md` digunakan untuk memberi AI informasi latar belakang proyek, langkah build, konvensi kode, dan konteks lain agar AI dapat memahami proyek Anda dengan lebih akurat.

## Percakapan pertama Anda

Setelah login, jelaskan sebuah tugas dengan bahasa alami. Titik awal yang baik adalah membiarkan Kimi Code CLI mengenal proyek terlebih dahulu:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

Kimi Code CLI otomatis memanggil alat pembacaan file, pencarian, dan lainnya untuk menelusuri konten yang relevan sebelum merespons. Secara default, operasi baca-saja dijalankan otomatis tanpa memerlukan konfirmasi. Untuk operasi yang mengubah file atau menjalankan perintah shell, CLI akan meminta konfirmasi Anda sebelum melanjutkan.

Anda juga dapat langsung menjelaskan tugas yang lebih konkret:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

Kimi Code CLI merencanakan langkah-langkahnya, mengubah kode, menjalankan pengujian, dan memberi tahu Anda apa yang dilakukan pada setiap langkah.

<Callout type="tip">
Bingung harus mulai dari mana? Ketik `/help` kapan saja untuk membuka panel perintah bawaan dan pintasan keyboard. Gunakan `↑`/`↓` untuk menjelajah dan `Esc` untuk menutup. Untuk keluar, ketik `/exit`, tekan `Ctrl-C` dua kali, atau tekan `Ctrl-D` saat kotak input kosong.
</Callout>

## Perintah dan pintasan keyboard umum

### Perintah sesi

| Perintah | Deskripsi |
| --- | --- |
| `/new` | Memulai sesi baru, membersihkan konteks saat ini |
| `/sessions` | Menelusuri riwayat sesi dan memilih salah satu untuk dilanjutkan |
| `/model` | Mengganti model saat ini |
| `/compact` | Mengompresi konteks secara manual untuk membebaskan token |
| `/fork` | Mem-fork sesi saat ini, mempertahankan riwayat namun berlanjut secara independen |

### Pintasan keyboard yang paling sering dipakai

| Pintasan | Deskripsi |
| --- | --- |
| `Esc` | Menghentikan output streaming / menutup popup |
| `Ctrl-C` | Menghentikan output; tekan dua kali saat idle untuk keluar |
| `Shift-Tab` | Mengalihkan mode Plan |
| `Ctrl-S` | Menyisipkan pesan di tengah aliran tanpa menunggu respons saat ini selesai |
| `Ctrl-O` | Menciutkan / membuka output alat |

Untuk daftar lengkap, ketik `/help` atau kunjungi [Interaksi & input](/kimi-code/cli-interaction).

## Tempat data disimpan

Kimi Code CLI menyimpan data lokalnya secara default di `~/.kimi-code/` — file konfigurasi, catatan sesi, log, dan cache pembaruan. Untuk memindahkannya ke tempat lain, arahkan ke path baru melalui variabel lingkungan `KIMI_CODE_HOME`. Untuk tata letak direktori lengkap, lihat dokumentasi variabel lingkungan.

## FAQ

**Saya sudah memasukkan API Key, tetapi muncul pesan autentikasi gagal.**

Pertama, pastikan Key dan Base URL Anda berasal dari platform yang sama. `api.kimi.com` dan `api.moonshot.cn` adalah dua sistem akun yang sepenuhnya independen, dan API Key keduanya tidak dapat dipertukarkan:

| Platform | Base URL | Penagihan | Pembuatan Key |
|------|---------|---------|-------------|
| **Kimi Code** | Kompatibel OpenAI: `https://api.kimi.com/coding/v1`<br> Kompatibel Anthropic: `https://api.kimi.com/coding/` | Langganan keanggotaan Kimi (termasuk kredit) | [Konsol Kimi Code](https://www.kimi.com/code/console) |
| **Kimi Open Platform** | `https://api.moonshot.cn/v1` | Bayar sesuai pemakaian | [Kimi Open Platform](https://platform.kimi.com) |

**Perintah `kimi` tidak ditemukan setelah instalasi.**

Skrip instalasi menambahkan `kimi` ke PATH Anda, tetapi Anda perlu memulai ulang terminal atau menjalankan `source ~/.bashrc` (atau `source ~/.zshrc`) agar berlaku. Jika masih tidak ditemukan, periksa apakah `~/.local/bin` ada di PATH Anda.

**Browser tidak muncul setelah menjalankan `/login`.**

Pada lingkungan server jarak jauh atau headless, `/login` akan menampilkan sebuah URL. Salin secara manual ke browser Anda untuk menyelesaikan otorisasi.

Jika Anda mengalami masalah atau punya saran, sampaikan umpan balik di [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues).

## Langkah berikutnya

- [Interaksi & input](/kimi-code/cli-interaction) — penjelasan operasi kotak input, alur persetujuan, mode Plan, dan mode YOLO
- [Sesi & konteks](/kimi-code/cli-sessions) — melanjutkan sesi, mengompresi konteks, mengekspor sesi
- [Kasus penggunaan umum](/kimi-code/cli-use-cases) — contoh prompt untuk tugas-tugas khas
