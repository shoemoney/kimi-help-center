---
title: "Mode Kerja"
slug: "cli-work-modes"
order: 9
extract_headings: false
preview: true
preview_content: "Cara menggunakan mode Plan dan Thinking mode di Kimi Code CLI, serta kapan sebaiknya memakainya."
---

<SeoMeta
  title="Mode Kerja Kimi Code CLI - Pusat Bantuan Kimi"
  description="Pelajari cara menggunakan mode Plan dan Thinking mode di Kimi Code CLI, serta kapan sebaiknya memakainya."
/>

# Mode Kerja

## Mode Plan

Mode Plan adalah mode perencanaan baca-saja yang memungkinkan AI menyusun rencana implementasi sebelum mulai menulis kode, sehingga membantu menghindari upaya yang terbuang karena arah pengerjaan yang keliru.

Dalam mode Plan, AI hanya dapat menggunakan alat baca-saja (`Glob`, `Grep`, `ReadFile`) untuk menelusuri codebase. AI tidak dapat mengubah file apa pun atau menjalankan perintah. AI menuliskan rencana ke file rencana khusus, lalu mengirimkannya untuk Anda setujui. Anda dapat menyetujuinya, menolaknya, atau memberikan komentar revisi.

### Masuk ke mode Plan

Ada empat cara untuk masuk ke mode Plan:

- **Opsi saat memulai**: Gunakan `kimi --plan` untuk memulai sesi baru langsung dalam mode Plan
- **Pintasan keyboard**: Tekan `Shift-Tab` untuk mengaktifkan atau menonaktifkan mode Plan
- **Perintah slash**: Masukkan `/plan` atau `/plan on`
- **Diprakarsai AI**: Untuk tugas yang kompleks, AI dapat meminta masuk ke mode Plan melalui alat `EnterPlanMode`. Anda dapat menerima atau menolaknya

Anda juga dapat mengatur `default_plan_mode = true` di file konfigurasi agar setiap sesi baru dimulai dalam mode Plan secara default.

Setelah masuk ke mode Plan, prompt berubah menjadi `📋`, dan bilah status bawah menampilkan indikator `plan` berwarna biru.

### Tinjau dan setujui rencana

Saat AI selesai menyusun rencana, AI mengirimkannya untuk disetujui melalui `ExitPlanMode`. Panel persetujuan menampilkan rencana lengkap. Anda dapat:

- **Setujui eksekusi**: Jika rencana mencakup beberapa jalur implementasi, AI akan menampilkan 2–3 opsi berlabel (seperti "Rencana A" atau "Rencana B (Disarankan)") untuk Anda pilih. Setelah Anda memilih salah satu, AI keluar dari mode Plan dan mengeksekusi jalur tersebut. Jika hanya ada satu jalur, tombol **Setujui** akan ditampilkan
- **Tolak**: Tolak rencana dan tetap berada dalam mode Plan. Anda dapat memberikan masukan dalam percakapan
- **Tolak dan Keluar**: Tolak rencana dan keluar dari mode Plan dalam satu langkah
- **Revisi**: Masukkan komentar revisi. AI akan memperbarui rencana sesuai komentar tersebut dan mengirimkannya kembali

Tekan `Ctrl-E` untuk melihat rencana lengkap di pager layar penuh.

### Kelola mode Plan

Gunakan perintah `/plan` untuk mengelola mode Plan:

- `/plan`: Aktifkan atau nonaktifkan mode Plan
- `/plan on`: Aktifkan mode Plan
- `/plan off`: Nonaktifkan mode Plan
- `/plan view`: Lihat rencana saat ini
- `/plan clear`: Hapus file rencana saat ini

## Thinking mode

Thinking mode memungkinkan AI berpikir lebih mendalam sebelum merespons, sehingga cocok untuk masalah yang kompleks.

Anda dapat menggunakan perintah `/model` untuk mengganti model dan Thinking mode. Setelah Anda memilih model, jika model tersebut mendukung Thinking mode, sistem akan menanyakan apakah Anda ingin mengaktifkannya. Anda juga dapat mengaktifkannya saat memulai dengan opsi `--thinking`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --thinking",
    },
  ]}
/>

> Kiat: Thinking mode harus didukung oleh model saat ini. Beberapa model, seperti `kimi-k2-thinking-turbo`, selalu menggunakan Thinking mode dan tidak dapat menonaktifkannya.
