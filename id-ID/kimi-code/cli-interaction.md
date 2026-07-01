---
title: "Interaksi & masukan"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Interaksi & masukan - Pusat Bantuan Kimi"
  description="Kimi Code CLI menyediakan beragam metode interaksi untuk membantu Anda berkolaborasi dengan AI secara efisien."
/>

# Interaksi & masukan

Kimi Code CLI menyediakan beragam metode interaksi untuk membantu Anda berkolaborasi dengan AI secara efisien.

## Thinking mode

Thinking Mode memungkinkan AI melakukan penalaran yang lebih mendalam sebelum merespons — ideal untuk masalah yang rumit.

- Gunakan perintah `/model` untuk berganti model dan mengaktifkan Thinking Mode.
- Anda juga dapat mengaktifkan Thinking Mode saat peluncuran dengan flag `--thinking`.

## Masukan multi-baris

Tekan **Ctrl-J** untuk menyisipkan baris baru pada masukan multi-baris. Ini berguna untuk prompt yang lebih panjang atau saat menempel cuplikan kode multi-baris.

## Tempel dari papan klip

Tekan **Ctrl-V** untuk menempel konten dari papan klip — mendukung teks maupun gambar. Saat menempel gambar, AI dapat langsung menafsirkan isi gambar tersebut (misalnya tangkapan layar, mockup desain, atau tangkapan layar error).

## Slash command

Perintah yang diawali dengan `/` digunakan untuk mengendalikan sesi, konfigurasi, dan debugging. Beberapa perintah umum meliputi:

| Perintah | Deskripsi |
| --- | --- |
| `/help` | Menampilkan informasi bantuan |
| `/login` | Masuk dan otorisasi |
| `/model` | Berganti model dan Thinking Mode |
| `/sessions` | Mendaftar dan berpindah sesi |
| `/clear` | Menghapus konteks saat ini |
| `/compact` | Memampatkan konteks |
| `/init` | Membuat AGENTS.md |
| `/exit` | Keluar dari CLI |

Mengetik `/` pada kolom masukan akan otomatis menampilkan daftar perintah yang tersedia.

## Pelengkapan path dengan @

Gunakan simbol `@` pada masukan Anda untuk merujuk ke path berkas atau direktori — sistem akan melengkapinya secara otomatis:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

AI akan otomatis membaca isi berkas yang dirujuk sebagai konteks.

## Tanya jawab terstruktur

Dalam skenario tertentu, AI akan menyajikan opsi terstruktur untuk masukan Anda. Gunakan **tombol panah** untuk memilih opsi lalu tekan **Enter** untuk mengonfirmasi.

## Konfirmasi persetujuan

Ketika AI perlu melakukan modifikasi berkas, perintah shell, atau operasi lainnya, ia akan meminta konfirmasi Anda. Anda dapat memilih:

| Opsi | Deskripsi |
| --- | --- |
| **Allow** | Mengizinkan operasi ini |
| **Allow for Session** | Mengizinkan operasi serupa selama sisa sesi saat ini tanpa permintaan konfirmasi lagi |
| **Deny** | Menolak operasi ini |

### Mode YOLO

Jika Anda memercayai operasi yang dilakukan AI, Anda dapat menggunakan Mode YOLO untuk melewati semua konfirmasi:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> Dalam Mode YOLO, AI akan otomatis menjalankan semua operasi — gunakan dengan hati-hati. Disarankan hanya pada lingkungan pengembangan yang terkendali.
