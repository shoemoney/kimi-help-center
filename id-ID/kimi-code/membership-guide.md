---
title: "Panduan keanggotaan Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Panduan keanggotaan Kimi Code - Kimi Help Center"
  description="Kimi Code adalah benefit yang dirancang untuk developer dalam paket keanggotaan Kimi, menghadirkan kemampuan coding AI berperforma tinggi. Anda dapat memanfaatkan benefit ini melalui..."
/>

# Panduan keanggotaan Kimi Code

<Callout type="info">
Kimi Code adalah benefit yang dirancang untuk developer dalam paket keanggotaan Kimi, menghadirkan kemampuan coding AI berperforma tinggi. Anda dapat memanfaatkan benefit ini melalui Kimi Code CLI, Claude Code, Roo Code, dan berbagai tool lain yang didukung.
</Callout>

## Keunggulan utama

| Keunggulan | Deskripsi |
|-----------|-------------|
| **Kompatibilitas Luas** | Bekerja dengan Kimi Code CLI, Claude Code, Roo Code, dan coding agent mainstream lainnya |
| **Respons Sangat Cepat** | Kecepatan generasi hingga 100 token/s, meningkatkan efisiensi coding secara signifikan |
| **Concurrency Frekuensi Tinggi** | Sekitar 300–1.200 permintaan per jendela 5 jam (tergantung paket Anda), dengan hingga 30 stream bersamaan |

## Mulai cepat

Pilih jalur yang sesuai dengan kondisi Anda:

- **Pengguna Baru**: Buka [kimi.com/code](https://kimi.com/code), masuk, lalu berlangganan Coding Plan.
- **Pelanggan Lama**: Akses konsol untuk mengelola API Key dan mulai menggunakan Kimi Code.

## Memperoleh API key

1. Masuk ke [Kimi Console](https://kimi.com/code).
2. Buka halaman **API Keys**.
3. Klik **Create New API Key**.
4. Salin dan simpan API Key Anda dengan aman (key hanya ditampilkan satu kali saat dibuat).

<Callout type="warning">
Jangan bagikan API Key Anda kepada orang lain atau menaruhnya di repositori kode publik.
</Callout>

## Login sekali klik

Di Kimi Code CLI, Anda dapat menggunakan perintah `/login` untuk otorisasi cepat tanpa perlu menyalin API Key secara manual:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

Sistem akan otomatis menyelesaikan otorisasi perangkat dan pengikatan akun — seluruh prosesnya hanya berlangsung beberapa detik.

## Pengelolaan perangkat

- Setiap akun dapat digunakan di beberapa perangkat sekaligus.
- Otorisasi perangkat yang **tidak aktif selama 30 hari** akan otomatis kedaluwarsa; Anda perlu menjalankan `/login` lagi untuk melakukan otorisasi ulang.
- Anda dapat melihat dan mengelola perangkat yang diotorisasi melalui konsol.
