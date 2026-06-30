---
title: "Integrasi IDE"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "Integrasikan Kimi Code CLI ke dalam IDE Anda melalui ACP."
---

<SeoMeta
  title="Integrasi IDE - Pusat Bantuan Kimi"
  description="Integrasikan Kimi Code CLI ke dalam IDE Anda melalui Agent Client Protocol (ACP). Panduan penyiapan untuk Zed, IDE JetBrains, dan Paseo, lengkap dengan pemecahan masalah."
/>

# Menggunakan Kimi Code CLI di IDE

<Callout type="info">
Kimi Code CLI mendukung integrasi ke dalam IDE melalui [Agent Client Protocol (ACP)](https://agentclientprotocol.com/), sehingga Anda dapat memanfaatkan pemrograman berbantuan AI langsung di dalam editor Anda.
</Callout>

## Prasyarat

Sebelum mengonfigurasi IDE Anda, pastikan Kimi Code CLI sudah terpasang dan Anda telah menyelesaikan proses login.

Adapter ACP tersedia melalui subperintah `kimi acp`. IDE menjalankannya sebagai proses anak dan berkomunikasi melalui stdin/stdout menggunakan JSON-RPC. Setiap kali IDE membuat sesi, CLI akan memakai kembali status autentikasi yang ada — Anda tidak perlu login lagi.

<Callout type="tip">
Proses anak yang dijalankan dari GUI IDE pada macOS umumnya **tidak** mewarisi `PATH` dari shell terminal. Jika `kimi` tidak berada di direktori sistem seperti `/usr/local/bin`, gunakan jalur absolut dalam konfigurasi IDE Anda. Jalankan `which kimi` di terminal untuk menemukan jalur yang aktif.
</Callout>

## Menggunakan Kimi Code CLI di Zed

[Zed](https://zed.dev/) adalah editor modern dengan dukungan ACP bawaan.

Tambahkan baris berikut ke berkas konfigurasi Zed di `~/.config/zed/settings.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

Kolom konfigurasi:

- `type`: nilai tetap `"custom"`
- `command`: jalur ke berkas eksekusi Kimi Code CLI. Jika `kimi` tidak ada di `PATH`, gunakan jalur lengkap (mis. `/Users/you/.local/bin/kimi`).
- `args`: argumen startup. Subperintah `acp` mengalihkan CLI ke mode ACP.
- `env`: variabel lingkungan tambahan; biasanya biarkan kosong. Zed menyuntikkan lingkungan default secara otomatis.

Setelah disimpan, buka percakapan baru di panel Agent Zed dan ia akan menjalankan subproses ACP `Kimi Code CLI` menggunakan konfigurasi di atas. Server MCP yang dideklarasikan di bagian `agent_servers` Zed juga diteruskan ke sisi kimi melalui protokol ACP.

## Menggunakan Kimi Code CLI di IDE JetBrains

IDE JetBrains (IntelliJ IDEA, PyCharm, WebStorm, dll.) mendukung ACP melalui plugin AI chat.

Jika Anda tidak memiliki langganan JetBrains AI, Anda dapat mengaktifkan `llm.enable.mock.response` di Registry untuk mengakses panel AI chat pada skenario khusus ACP. Tekan Shift dua kali dan cari "Registry" untuk membukanya.

Di menu panel AI chat, klik **Configure ACP agents** dan tambahkan konfigurasi berikut:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains cukup ketat soal kolom `command` — selalu gunakan **jalur absolut**, yang bisa Anda peroleh dengan menjalankan `which kimi` di terminal. Setelah disimpan, `Kimi Code CLI` akan muncul di pemilih agent pada AI chat.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Menggunakan Kimi Code CLI di Paseo

[Paseo](https://paseo.sh/) adalah orkestrator yang dihosting sendiri (self-hosted) yang menjalankan dan mengawasi agent CLI dari desktop, web, dan perangkat seluler Anda. Ia terhubung ke Kimi Code CLI melalui ACP, sama seperti yang dilakukan IDE.

Pilih **Kimi Code CLI** dari katalog penyedia ACP bawaan Paseo, atau tambahkan penyedia kustom di `~/.paseo/config.json`:

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Adapter ACP generik milik Paseo tidak menjalankan alur login, jadi selesaikan login terminal terlebih dahulu (lihat [Prasyarat](#prasyarat)) — jika tidak, pembuatan sesi akan gagal dengan `Authentication required`.

## Pemecahan Masalah

- **Sesi langsung terputus / IDE menampilkan "agent exited"**: biasanya disebabkan oleh jalur `command` yang salah atau login yang belum dilakukan. Jalankan `kimi acp` di terminal terlebih dahulu untuk memverifikasi — jika ia menunggu input stdin, berarti CLI itu sendiri baik-baik saja dan masalahnya ada di konfigurasi IDE; jika ia langsung keluar dengan kesalahan, ikuti pesan kesalahannya (yang paling umum, Anda perlu menjalankan `/login`).
- **IDE menampilkan "auth required"**: CLI tidak memiliki token autentikasi yang dapat dipakai. Keluar dari IDE, jalankan `kimi` di terminal untuk menyelesaikan login, lalu mulai ulang IDE.
- **Alat MCP tidak terlihat**: periksa tabel kapabilitas `kimi acp` untuk memastikan jenis transport MCP yang dikonfigurasi di IDE Anda didukung. Adapter ACP Kimi Code CLI saat ini mendukung transport `http` dan `stdio`; jenis `sse` dan `acp` diabaikan secara diam-diam dan sebuah peringatan akan dicatat ke log.
