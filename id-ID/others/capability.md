---
title: "Apa yang bisa Kimi lakukan?"
slug: "capability"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="Apa yang bisa Kimi lakukan? - Pusat Bantuan Kimi"
  description="FAQ tentang kemampuan Kimi: pencarian online dan pengoperasian browser, mengendalikan desktop komputer (Kimi Computer Use), membuat gambar/video/suara, menulis kode, membangun situs web, membuat PPT dan spreadsheet, memproses file, memori, dukungan multibahasa, dan panjang konteks."
/>

# Apa yang bisa Kimi lakukan?

## Bisakah Kimi mencari di internet dan menjelajahi halaman web?

Bisa. Kimi akan menentukan secara otomatis apakah sebuah pertanyaan memerlukan akses online, lalu memakai alat pencarian bawaan untuk mengambil informasi. Di **Kimi Code** dan **Kimi Work**, dengan **WebBridge**, Kimi juga dapat mengoperasikan browser seperti manusia—menjelajah, mengeklik, menggulir, mengekstrak data, dan menyelesaikan tugas web bertahap.

## Bisakah Kimi mengoperasikan desktop komputer saya?

Dalam chat biasa dan tugas Agent, Kimi **tidak memiliki izin** untuk mengoperasikan komputer Anda. **Di Kimi Work, Anda dapat memilih untuk mengaktifkannya sendiri**.

Di Kimi Work, dengan **Kimi Computer Use**, Kimi dapat mengeklik, mengetik, menggulir, menyeret, serta membaca isi antarmuka aplikasi atau tangkapan layar di desktop untuk Anda. Misalnya: “Klik X untuk saya,” “Masukkan … di Y,” “Periksa status aplikasi Z saat ini,” atau “Tampilkan daftar aplikasi yang sedang terbuka.” Semua operasi berjalan di latar belakang, jadi Kimi tidak akan mengambil alih mouse atau memindahkan jendela ke depan.

**Cara menginstal**: Di Kimi Work, klik “Plugin”, pilih “Kimi Computer Use”, lalu klik Instal. Anda juga dapat mengirim instruksi berikut dalam mode “Work” untuk menginstalnya:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Tolong instal kimi computer-use untuk saya: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Bisakah Kimi membuat gambar, video, dan suara?

Bisa. Kimi dapat membuat gambar, video, dan audio melalui plugin desain kreatif. Instal plugin yang sesuai dari marketplace plugin sebelum digunakan:

- **Pembuatan gambar**: Membuat gambar berkualitas tinggi dari deskripsi teks. Mendukung resolusi 1K/2K/4K, berbagai rasio aspek, latar belakang opak atau transparan opsional, serta keluaran JPG / PNG.
- **Pembuatan video**: Membuat video berkualitas tinggi dari deskripsi teks, dengan gambar referensi opsional. Mendukung rasio aspek seperti 16:9, 4:3, 1:1, 3:4, 9:16, dan 21:9, dengan durasi 4–12 detik.
- **Pembuatan audio**: Mendukung text-to-speech dengan beragam suara Mandarin, atau pembuatan efek suara dari deskripsi bahasa Inggris, dengan durasi 0,5–22 detik.

## Bisakah Kimi menulis kode, membangun situs web, serta membuat PPT dan spreadsheet?

Bisa. Sebagai AI Agent yang dapat menjalankan tugas secara otonom, Kimi mendukung pembuatan situs web, pembuatan PPT, pemrosesan dokumen dan spreadsheet, Deep Research, dan lainnya.

## File apa saja yang bisa diproses Kimi?

Kimi mendukung format umum seperti PDF, Word, Excel, PPT, gambar, TXT, dan video. **Setiap file tidak boleh lebih dari 100 MB, dan Anda dapat mengunggah hingga 50 file sekaligus**.

## Apakah Kimi memiliki memori?

Ya. [Memori](/features/memory-space) secara otomatis menyimpan informasi penting agar Kimi dapat memahami Anda dengan lebih baik. Jika Anda perlu memisahkan memori dan materi berdasarkan proyek, gunakan fitur [Proyek](/features/project).

## Apakah Kimi mendukung banyak bahasa?

Ya. Anda dapat mengubah bahasa antarmuka di **“Pengaturan” → “Umum” → “Bahasa”**. Bahasa yang saat ini didukung meliputi Jerman, Rusia, Prancis, Tionghoa Tradisional, Korea, Portugis, Thailand, Turki, Spanyol, Italia, Indonesia, Inggris, dan Vietnam. K2.6 dan K3 sama-sama mendukung percakapan, pengambilan informasi, dan pembuatan konten multibahasa.

## Berapa banyak konten yang dapat diproses Kimi sekaligus?

K2.6 memiliki konteks satu putaran sekitar **128K token (kira-kira 50.000–60.000 karakter Tionghoa)**. Untuk dokumen yang sangat panjang, **K3 menyediakan konteks 1 juta token** (memerlukan tingkat keanggotaan tertinggi). Untuk detailnya, lihat [Apa yang harus saya lakukan jika chat melebihi 200.000 karakter Tionghoa?](/others/chat-issues).
