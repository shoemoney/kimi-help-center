---
title: "Kustomisasi & referensi"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Kustomisasi & referensi - Pusat Bantuan Kimi"
  description="Kimi Code CLI menyediakan beragam opsi kustomisasi yang memungkinkan Anda menyesuaikan perilaku dan alur kerja AI sesuai kebutuhan."
/>

# Kustomisasi & referensi

Kimi Code CLI menyediakan beragam opsi kustomisasi yang memungkinkan Anda menyesuaikan perilaku dan alur kerja AI sesuai kebutuhan.

## Berkas konfigurasi

Kimi Code CLI menggunakan `~/.kimi/config.toml` sebagai berkas konfigurasi global, yang mendukung format TOML maupun JSON. Anda dapat mengonfigurasi:

- **Penyedia API dan Model**: Atur berbagai penyedia model, endpoint API, dan kunci.
- **Model Default**: Tentukan model default yang akan digunakan.
- **Parameter Runtime**: Sesuaikan timeout, concurrency, format keluaran, dan pengaturan runtime lainnya.

> Gunakan perintah `/config` untuk membuka berkas konfigurasi dengan cepat dan menyuntingnya.

## Konfigurasi proyek AGENTS.md

Tempatkan berkas `AGENTS.md` di root proyek Anda untuk memberi AI konteks tingkat proyek:

- **Latar Belakang Proyek**: Jelaskan fungsi, arsitektur, dan tech stack proyek.
- **Langkah Build**: Cara memasang dependensi, melakukan build proyek, dan menjalankan pengujian.
- **Konvensi Kode**: Aturan penamaan, struktur direktori, dan preferensi gaya kode.
- **Catatan Khusus**: Pembatasan keamanan, persyaratan performa, dan hal penting lainnya yang perlu diperhatikan.

Gunakan perintah `/init` agar AI secara otomatis memindai proyek Anda dan menghasilkan `AGENTS.md` awal. Anda juga dapat menyunting berkas tersebut secara manual untuk menambahkan informasi khusus proyek. Berkas `AGENTS.md` bisa ditempatkan di subdirektori mana pun — AI akan memuat konfigurasi yang relevan secara otomatis.

## Prompt sistem kustom

Anda dapat menyesuaikan prompt sistem AI dengan beberapa cara:

- **Prompt sistem global**: Tuliskan di `~/.kimi/AGENTS.md` — berlaku untuk semua proyek.
- **Prompt sistem tingkat proyek**: Tuliskan di `AGENTS.md` pada root proyek — hanya berlaku untuk proyek saat ini.
- **Parameter peluncuran**: Gunakan flag `--system-prompt` untuk menentukannya saat startup.

Konfigurasi tingkat proyek menggantikan konfigurasi global, dan parameter peluncuran memiliki prioritas tertinggi.

## Integrasi MCP

Kimi Code CLI mendukung Model Context Protocol (MCP), yang memungkinkan koneksi ke alat dan sumber data eksternal untuk memperluas kemampuan AI:

- **Konfigurasi Server MCP**: Tambahkan alamat server MCP dalam berkas konfigurasi agar AI dapat memanggil alat eksternal.
- **Dukungan MCP Bawaan**: Beberapa alat MCP yang umum digunakan sudah tertanam dan tidak memerlukan konfigurasi tambahan.
- **Server MCP Kustom**: Anda dapat mengembangkan server MCP sendiri untuk menyediakan kemampuan khusus domain.

Konfigurasi MCP dapat ditempatkan di `~/.kimi/config.toml` atau di berkas konfigurasi tingkat proyek.

## Variabel lingkungan

Kimi Code CLI mendukung konfigurasi melalui variabel lingkungan — berguna untuk pipeline CI/CD dan skrip:

| Variabel Lingkungan | Deskripsi |
| --- | --- |
| `KIMI_API_KEY` | Kunci API |
| `KIMI_BASE_URL` | Endpoint API kustom |
| `KIMI_MODEL` | Nama model default |
| `KIMI_MAX_TOKENS` | Jumlah maksimum token keluaran |

Variabel lingkungan memiliki prioritas lebih tinggi daripada pengaturan dalam berkas konfigurasi.

## Referensi lainnya

- **Referensi Slash Command**: Gunakan `/help` untuk melihat semua perintah yang tersedia.
- **Referensi Parameter CLI**: Jalankan `kimi --help` untuk melihat semua parameter peluncuran.
- **Dokumentasi Resmi**: Kunjungi [Kimi Code Docs](https://www.kimi.com/code/docs/en/) untuk dokumentasi lengkap terbaru.
