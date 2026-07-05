---
title: "Goal"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "Gunakan goal agar Kimi Code terus mengupayakan hasil yang sudah ditetapkan di sepanjang giliran percakapan."
---

<SeoMeta
  title="Goal - Pusat Bantuan Kimi"
  description="Gunakan /goal agar Kimi Code terus mengupayakan hasil yang sudah ditetapkan di sepanjang giliran percakapan. Pelajari kapan menggunakan goal, cara mengelola siklus hidupnya, dan cara mengantrekan goal berikutnya."
/>

# Goal

Goal membuat Kimi Code terus mengupayakan hasil yang sudah ditetapkan di sepanjang giliran percakapan. Berbeda dengan prompt biasa yang menyebutkan apa yang harus dilakukan berikutnya, goal menyebutkan kondisi apa yang harus terpenuhi. Gunakan `/goal` ketika tugas memiliki garis akhir yang jelas, tetapi langkah berikutnya yang berguna bergantung pada apa yang dipelajari agen saat mengerjakannya — misalnya, memperbaiki sekumpulan pengujian yang gagal atau menelusuri akar penyebab build yang rusak.

## Memulai sebuah goal

Tuliskan tujuan setelah `/goal`:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Perbaiki bug yang tercantum di issue tracker.",
    },
  ]}
/>

Kimi Code menyimpan tujuan tersebut, mengirimkannya sebagai pesan pengguna berikutnya, lalu memulai mode goal. Setelah setiap giliran, Kimi Code memeriksa apakah goal sudah selesai, terhambat, dijeda, atau masih berjalan.

Goal bekerja paling baik ketika tujuannya menyebutkan garis akhir sekaligus bukti yang membuktikannya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Perbaiki setiap bug berlabel checkout-regression, tambahkan atau perbarui tes untuk setiap perbaikan, lalu jalankan checkout test suite",
    },
  ]}
/>

Hindari goal yang hanya menyebutkan arah yang terlalu luas:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Temukan semua bug di codebase ini.",
    },
  ]}
/>

Goal itu tidak menyebutkan apa yang dianggap berhasil, apa yang harus diperiksa, atau kapan harus berhenti. Agen mungkin langsung terhambat, atau terus bekerja jauh lebih lama dari yang Anda perkirakan.

### Kapan menggunakan goal

Gunakan goal untuk pekerjaan dengan garis akhir yang jelas dan bukti yang dapat diverifikasi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Perbaiki setiap checkout test yang gagal dan jalankan checkout test suite hingga berhasil.",
    },
  ]}
/>

Kimi Code dapat memeriksa keluaran pengujian, mengubah file, menjalankan ulang pemeriksaan, dan memutuskan kapan goal sudah selesai.

Gunakan goal ketika tugas mungkin membutuhkan beberapa giliran investigasi dan perbaikan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Cari tahu mengapa release build gagal, perbaiki akar penyebabnya, dan pastikan build-nya lolos.",
    },
  ]}
/>

Goal menjelaskan hasilnya, sehingga agen dapat menyesuaikan diri ketika petunjuk pertama ternyata bukan akar penyebabnya.

Gunakan goal untuk pekerjaan berurutan yang sebaiknya berlanjut tanpa prompt tambahan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Perbarui implementasi fitur, tambahkan dokumentasi, jalankan tes, dan rangkum file yang berubah.",
    },
  ]}
/>

Ini berguna ketika Anda sudah tahu pemeriksaan atau artefak apa yang harus ada sebelum pekerjaan dianggap selesai.

### Kapan tidak menggunakan goal

Jangan gunakan goal untuk topik yang luas atau diskusi terbuka.

**Contoh keliru:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Halo!",
    },
  ]}
/>

<Callout type="warning">
Untuk hal yang bukan goal, agen akan langsung menandai goal sebagai selesai.
</Callout>

Jangan gunakan goal untuk tugas yang diketahui mustahil atau tidak dapat diselesaikan.

**Contoh keliru:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Buktikan 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
Agen akan menandai goal sebagai terhambat jika goal tersebut tampak mustahil atau tidak dapat diselesaikan.
</Callout>

Jangan gunakan goal dengan tujuan yang ambigu atau rumit.

**Contoh keliru:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Buat sebuah video game dalam satu file HTML.",
    },
  ]}
/>

<Callout type="warning">
Agen mungkin menyelesaikan goal, tetapi juga bisa menghasilkan keluaran yang tak terduga atau mengejutkan setelah waktu yang lama.
</Callout>

## Mengelola siklus hidup

Gunakan rangkaian perintah yang sama untuk memeriksa atau mengendalikan goal saat ini:

| Perintah | Tindakan |
| --- | --- |
| `/goal` atau `/goal status` | Menampilkan goal saat ini beserta progresnya |
| `/goal pause` | Menjeda goal yang aktif tanpa menghapusnya |
| `/goal resume` | Melanjutkan goal yang dijeda atau terhambat |
| `/goal cancel` | Menghapus goal saat ini |
| `/goal replace <objective>` | Mengganti goal saat ini dengan tujuan baru |

Sebuah goal dapat berhenti dengan tiga cara:

- **complete**: tujuan telah tercapai, Kimi Code menghapus goal, dan agen merangkum bagaimana ia menyelesaikan pekerjaannya
- **paused**: Anda menjedanya, menyela giliran, melanjutkan sesi yang memiliki goal aktif, atau mengalami error pada model, penyedia, atau runtime
- **blocked**: Kimi Code membutuhkan masukan, tidak dapat menyelesaikan goal sebagaimana dinyatakan, atau mencapai batas anggaran. Saat agen menghambat sebuah goal, ia menulis pesan singkat yang menjelaskan alasannya.

Tuliskan kondisi berhenti ke dalam tujuan. `/goal` tidak memiliki flag batas berhenti tersendiri.

## Mengantrekan goal berikutnya

Agen terkadang menyelesaikan sebuah goal terlalu cepat. Pengguna bisa kecewa karena hanya dapat menetapkan satu goal dalam satu waktu. Banyak orang sebenarnya sudah tahu goal-goal berikutnya yang ingin mereka kejar. Mereka harus menunggu goal saat ini selesai, membuka TUI, lalu mengirimkan goal berikutnya secara manual.

Gunakan `/goal next` ketika Anda sudah punya pekerjaan lain yang siap tetapi tidak ingin menyela goal saat ini:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Perbarui release notes setelah tes lolos",
    },
  ]}
/>

Goal berikutnya tidak terlihat oleh agen selama goal saat ini masih berjalan. Ketika goal saat ini selesai, Kimi Code memulai goal berikutnya yang pertama dalam antrean, sama seperti saat pengguna memasukkan `/goal <objective>`.

Jika tidak ada goal yang aktif, `/goal next <objective>` langsung memulai tujuan tersebut. Perilakunya sama seperti `/goal <objective>` dan menampilkan pesan status sebelum goal dimulai.

Kelola goal berikutnya secara interaktif:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

Di dalam pengelola, gunakan <kbd>↑</kbd> / <kbd>↓</kbd> untuk menjelajah, <kbd>Space</kbd> untuk memilih goal yang akan dipindahkan, <kbd>↑</kbd> / <kbd>↓</kbd> untuk menyusun ulang, <kbd>E</kbd> untuk mengedit, <kbd>D</kbd> untuk menghapus, dan <kbd>Esc</kbd> untuk membatalkan. Saat mengedit, gunakan <kbd>Shift-Enter</kbd> atau <kbd>Ctrl-J</kbd> untuk menambah baris baru, dan <kbd>Enter</kbd> untuk menyimpan.

Jika goal saat ini dijeda, dibatalkan, atau terhambat, Kimi Code tidak akan memulai goal berikutnya. Ketika sebuah goal terhambat dan masih ada goal berikutnya dalam antrean, TUI mengingatkan Anda bahwa goal-goal itu menunggu hingga goal tersebut selesai.

## Gunakan mode goal dengan hati-hati

Mode goal berguna untuk pekerjaan yang dapat diperiksa melalui file, pengujian, keluaran perintah, artefak yang dihasilkan, atau laporan tertulis yang jelas. Mode ini kurang berguna untuk satu suntingan sekali jalan atau pertanyaan yang hanya butuh satu jawaban.

Dalam mode izin `manual`, pekerjaan goal mungkin berhenti sejenak untuk menunggu persetujuan pemanggilan tool. Untuk pekerjaan tanpa pengawasan, gunakan mode izin yang sesuai dengan tingkat risiko repositori dan perintah yang mungkin dijalankan agen.

Dalam mode prompt non-interaktif, hanya pembuatan goal yang didukung:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Perbaiki checkout test yang gagal\"",
    },
  ]}
/>

Mode prompt keluar dengan kode `0` ketika goal selesai, `3` ketika terhambat, dan `6` ketika dijeda. `/goal next` dan perintah pengelolaan lainnya merupakan kontrol TUI.
