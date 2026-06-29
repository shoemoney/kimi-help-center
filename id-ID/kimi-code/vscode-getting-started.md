---
title: "Panduan cepat Kimi Code untuk VS Code"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="Panduan cepat Kimi Code untuk VS Code - Kimi Help Center"
  description="Kimi Code untuk VS Code adalah ekstensi yang terintegrasi ke dalam Visual Studio Code. Setelah dipasang, Anda dapat mengajukan pertanyaan, meninjau perbedaan kode, dan dengan cepat melakukan commit perubahan..."
/>

# Panduan cepat Kimi Code untuk VS Code

<Callout type="warning">
**Pemberitahuan Kompatibilitas Ekstensi VS Code**

Saat ini Kimi Code untuk VS Code hanya tersedia untuk pemasangan baru bagi pengguna CLI Python versi lama. Pengguna lama yang sudah memasang plugin ini dapat terus menggunakannya setelah memutakhirkan ke CLI baru. Pengguna CLI versi TS belum dapat melakukan pemasangan untuk saat ini.
</Callout>

Kimi Code untuk VS Code adalah ekstensi yang terintegrasi ke dalam Visual Studio Code. Setelah dipasang, Anda dapat mengajukan pertanyaan langsung di dalam editor, meninjau perbedaan kode, dan dengan cepat melakukan commit perubahan. 

Ekstensi ini dapat membaca isi file yang Anda rujuk serta menampilkan saran perubahan melalui antarmuka visual, lalu menjalankannya setelah Anda konfirmasi. Seluruh alur kerja sepenuhnya berada dalam kendali Anda sekaligus meningkatkan efisiensi pengembangan secara signifikan.

Ekstensi ini menyediakan panel chat native di VS Code, dengan dukungan untuk:
- Merujuk file atau folder melalui simbol `@`.
- Menjalankan pemindaian proyek dan pengelolaan konteks melalui perintah `/`.
- Tampilan diff yang menunjukkan perubahan file dengan dukungan rollback.
- Mengintegrasikan server MCP untuk memanggil alat eksternal.

---

## Pemasangan

1.  **Prasyarat**: Anda memerlukan langganan akun Kimi atau kunci API Kimi.
2.  **Marketplace**: Pasang melalui [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code).

<Callout type="tip">
Jika ekstensi tidak muncul setelah pemasangan, silakan mulai ulang VS Code atau jalankan **Developer: Reload Window** di command palette (Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## Autentikasi

Kimi Code mendukung dua mode autentikasi. Anda dapat beralih mode kapan saja melalui **ikon roda gigi**.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="Pengaturan autentikasi"
  width={800}
  height={450}
/>

- **Mode Akun Kimi**: Klik tombol login untuk mengautorisasi melalui browser Anda.
- **Mode Kunci API**: Klik untuk melewati login jika Anda sudah mengonfigurasi kunci API.

---

## Alur Kerja Umum

Membaca Kode: Ketik `@` untuk memilih file atau folder, minta penjelasan tentang alur kode, lalu lanjutkan dengan pertanyaan susulan.

Refactoring: Rujuk kode target seperti `@src/feature/`, minta rencana refactoring, tinjau diff dan setujui secara selektif, serta gunakan rollback bila diperlukan.

Debugging: Tempelkan pesan kesalahan atau stack trace, rujuk file terkait, minta diagnosis dan perbaikan, lalu setujui perubahan yang diusulkan.

Ikhtisar Proyek: Rujuk sebuah folder seperti `@src/services/`, minta peta modul atau ringkasan arsitektur, lalu lanjutkan dengan pertanyaan tentang dependensi atau titik lemah.

---

## Perintah dan Pintasan

Gunakan `CodePreview` untuk menguji perintah dengan cepat atau merujuk pintasan penting:

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| Pintasan | Fungsi |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Memfokuskan kotak input Kimi |
| `Alt+K` | Menyisipkan rujukan file saat ini |
| `Ctrl+N` / `Cmd+N` | Percakapan baru |
| `↑` / `↓` | Menelusuri riwayat input |

<Callout type="info">
Ketik **Kimi Code** di command palette untuk mengakses lebih banyak perintah: buka di tab baru, buka di sidebar, atau kelola sesi.
</Callout>
