---
title: "Sesi & konteks"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Sesi \u0026 konteks - Pusat Bantuan Kimi"
  description="Kimi Code CLI mendukung pengelolaan multi-sesi dan persistensi konteks, sehingga Anda dapat menjeda dan melanjutkan pekerjaan kapan saja."
/>

# Sesi & konteks

Kimi Code CLI mendukung pengelolaan multi-sesi dan persistensi konteks, sehingga Anda dapat menjeda dan melanjutkan pekerjaan kapan saja.

## Melanjutkan sesi

Ada beberapa cara untuk melanjutkan sesi sebelumnya:

### Lanjutkan sesi terbaru

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Gunakan flag `--continue` (atau `-c`) untuk melanjutkan percakapan terakhir.
### Tentukan ID sesi

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

Gunakan flag `--session` untuk memulihkan sesi tertentu.

### Telusuri dan beralih

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Jalankan `/sessions` (atau `/resume`) untuk melihat daftar sesi dan memilih salah satu untuk dipulihkan.
## Replay saat memulai

Saat melanjutkan sesi, Kimi Code CLI otomatis memutar ulang riwayat percakapan, sehingga Anda dapat dengan cepat mengingat kembali konteks dan progres sebelumnya.

## Persistensi status

Status berikut otomatis disimpan dan dipulihkan di seluruh sesi:

- **Keputusan persetujuan**: Keputusan seperti "Izinkan untuk Sesi" akan diingat.
- **Sub-agent dinamis**: Konfigurasi sub-agent yang dibuat selama sesi tetap dipertahankan.
- **Direktori tambahan**: Direktori kerja tambahan yang ditambahkan melalui perintah juga ikut dipertahankan.

Dengan demikian, Anda dapat melanjutkan pekerjaan sebelumnya secara mulus setelah memulihkan sesi.

## Bersihkan & ringkas

Kimi Code CLI otomatis memampatkan konteks saat diperlukan agar percakapan tetap dapat berlanjut. Anda juga dapat mengelola konteks secara manual dengan perintah slash:

### Bersihkan konteks

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Masukkan `/clear` (atau `/reset`) untuk membersihkan seluruh konteks pada sesi saat ini dan memulai percakapan baru:

### Ringkas konteks

Masukkan `/compact` untuk memampatkan konteks — mempertahankan informasi penting sekaligus mengurangi penggunaan token:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Anda juga dapat menyertakan instruksi saat memampatkan untuk memberi tahu AI informasi mana yang harus diprioritaskan:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Status konteks

Bilah status di bagian bawah CLI menampilkan pemakaian konteks saat ini secara real-time, sehingga Anda dapat memantau konsumsi konteks. Ketika pemakaian sudah tinggi, gunakan `/compact` untuk memampatkan konteks dan menghindari hilangnya informasi penting.
