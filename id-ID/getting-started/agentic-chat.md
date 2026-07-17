---
title: "Memulai dengan Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Memulai dengan Kimi - Pusat Bantuan Kimi"
  description="Pelajari tiga model Kimi (K2.6, K3, K3 Swarm), alat bawaan, dan kemampuan multimodal untuk memulai obrolan dan eksekusi tugas dengan cepat."
/>

# Memulai dengan Kimi

Anda dapat mengetik pertanyaan di kotak obrolan, mengunggah berkas, atau beralih antarmodel sesuai kebutuhan.
Buka [kimi.com](https://www.kimi.com) dan coba kirim pesan — sapa Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hai, Kimi!",
    },
  ]}
/>

## Memilih model

Kimi menyediakan beberapa model. Klik tombol beralih model di atas kotak input untuk berpindah.

| Model | Kekuatan thinking | Paling cocok untuk |
|-------|-------------------|--------------------|
| **K2.6** | Standar / Tinggi | Percakapan dan tanya jawab cepat dengan respons lebih gesit |
| **K3** | Rendah / Tinggi / Maks | Tugas obrolan dan Agent; paling andal secara keseluruhan |
| **K3 Swarm** | Rendah / Tinggi / Maks | Pencarian skala besar dan pemrosesan batch, dituntaskan sekaligus |

<Callout type="tip">
K2.6 tidak mengonsumsi credit; K3 dan K3 Swarm ditagih berdasarkan credit. Lihat [manfaat keanggotaan](https://www.kimi.com/help/membership/membership-overview) untuk detailnya.
</Callout>

### Tentang Kimi K3

Kimi K3 saat ini adalah model paling andal dari Kimi, dengan 2,8 triliun parameter, dibangun di atas Kimi Delta Attention (KDA) dan Attention Residuals, menghadirkan **visi natif** dan **jendela konteks 1 juta token**. Sebagai model kelas 3T terbuka pertama di dunia, K3 dirancang untuk kecerdasan mutakhir di seluruh coding berjangka panjang, pekerjaan berbasis pengetahuan, dan penalaran, mencapai performa terdepan dalam coding, eksekusi berjangka panjang, serta beragam tugas kecerdasan umum.

### Alat bawaan

Langsung tersedia tanpa perlu konfigurasi:

| Alat | Deskripsi |
|------|------------|
| **Web Search** | Pencarian web waktu nyata untuk berita dan informasi terbaru |
| **Fetch Tool** | Akses langsung ke URL tertentu (halaman web, dokumen, gambar, dan sumber daya daring lainnya) |
| **Image Search** | Pencarian teks-ke-gambar dan gambar-ke-gambar untuk menemukan konten visual dengan cepat |
| **IPython** | Menjalankan kode Python untuk analisis dan visualisasi data |
| **Memory** | Memori cerdas yang mencatat preferensi dan kebiasaan pribadi Anda |

## Kemampuan visual & multimodal
Kimi K3 mendukung pemahaman menyeluruh atas gambar, video, dan dokumen perkantoran (PDF/Word/Excel) menggunakan **arsitektur multimodal natif** (bukan OCR yang ditambahkan belakangan). Model ini dapat langsung mengurai isi dokumen dan menjalankan tugas perkantoran tingkat menengah hingga lanjutan (seperti menulis rumus Excel atau membuat kerangka PPT/kode VBA). Dipadukan dengan visi natif dan jendela konteks 1 juta token, model ini dapat menangani materi multimodal yang lebih panjang dan lebih kompleks.
### Dukungan input multimodal
- **Gambar**: PNG, JPEG, WebP, GIF, dll. (melalui URL, Base64, atau unggahan berkas lokal)
- **Video**: MP4, dll. (melalui video_url atau urutan bingkai gambar + parameter fps)
- **Dokumen**: PDF, Word, Excel, TXT, Markdown, dll.
- **Sumber daya daring**: URL, tautan artikel
- **Pencarian gambar**: Unggah gambar untuk mencari gambar yang terkait atau serupa
- **Pemahaman video**: Mendukung pemahaman video — dapat menganalisis rekaman layar dan mereplikasi logika interaksi
- **Visual coding**: Unggah tangkapan layar atau rekaman layar untuk menghasilkan kode frontend (HTML/Vue/React, dll.); dapat secara otomatis mereproduksi halaman web dari mockup desain

### Format keluaran
- Teks polos / campuran teks-dan-gambar: Balasan percakapan standar
- Markdown: Teks kaya dengan judul, daftar, tabel, dan tautan
- Blok kode: HTML/Vue/React/Python/JSON/Mermaid, dll. (dengan penanda bahasa)
- Data terstruktur JSON: Keluaran mode JSON terkunci
- Diagram Mermaid: Diagram alir, diagram urutan, peta pikiran, dll.
- Rumus matematika LaTeX: Ekspresi matematika inline maupun tingkat blok
- Keluaran dua mode (Thinking): Mengembalikan `reasoning_content` (proses berpikir) dan `content` (jawaban akhir)
- Format pemanggilan alat: Format standar Function Calling (untuk pengembang)

### Catatan penting

1. **Keluaran berkas**: K3 dapat menghasilkan dokumen yang dapat diedit secara end-to-end (seperti `.pptx`, `.docx`, `.xlsx`, `.pdf`) serta hasil kerja kompleks lainnya; K2.6 berfokus pada tanya jawab cepat dan hanya menghasilkan teks (seperti kerangka PPT, isi teks Word, atau kode).

<Callout type="tip">
Tips: Untuk menghasilkan gambar, audio, atau video, klik "+" → Plugin, pilih fitur yang sesuai, dan gunakan bersama **K3**. Untuk membuat dokumen kompleks yang dapat diedit atau menjalankan tugas multilangkah, kami sarankan memilih **K3** atau **K3 Swarm** demi pengalaman penuh.
</Callout>

## Sesi vs. giliran percakapan
Saat Anda mengeklik "Obrolan Baru", anggaplah itu sebagai memulai percakapan panjang dengan Kimi.
| Konsep | Analogi | Definisi Teknis |
|---------|---------|---------------------|
| **Sesi** | Seluruh rapat (dari awal hingga akhir) | Proses obrolan lengkap dengan awal dan akhir yang jelas |
| **Giliran** | Satu pertukaran (Anda berbicara, Kimi membalas) | Input Anda dan respons Kimi membentuk satu putaran |

### Perbedaan utama
**Sesi**
- **Memori berkelanjutan**: Kimi mengingat seluruh konteks dalam obrolan saat ini
- **Konteks lintas giliran**: Setiap balasan merujuk pada isi percakapan sebelumnya sebagai konteks untuk giliran berikutnya
- **Batas yang jelas**: Mengeklik "Obrolan Baru" = mulai dari awal; konteks sebelumnya dihapus
**Giliran**
- **Penghitungan kumulatif**: Giliran 1, Giliran 2, … bertambah secara bertahap
- **Memori terbatas**: Terlalu banyak giliran (mis. 50+) dapat membuat Kimi "lupa" isi sebelumnya, terutama untuk penulisan panjang atau tugas dengan persyaratan ketat
- **Batasan panjang konteks**: Dibatasi oleh jumlah token; saat giliran menumpuk, konten paling awal dapat dipadatkan

<Callout type="tip">
**Kasus khusus**: Jika satu tanya jawab tunggal sudah mengakhiri percakapan, maka 1 giliran = 1 sesi.
</Callout>

## Mengapa perbedaan ini penting
Dalam satu sesi, setiap pertanyaan atau instruksi baru yang Anda kirim dijawab dengan merujuk pada seluruh giliran sebelumnya. Seiring giliran menumpuk dan konten makin panjang, kualitas respons mungkin perlahan menurun.

### Skenario umum
**Skenario 1: Beralih topik**
- Salah: Bertanya "bantu saya menghitung pajak" di sesi tempat Anda sedang menulis novel 30.000 kata
- Benar: Mulai sesi baru untuk pertanyaan pajak — agar Kimi tidak mengacaukan tokoh novel dengan konsep pajak
**Skenario 2: Pemrosesan dokumen panjang**
- Setelah puluhan giliran, Kimi mungkin "lupa" aturan atau ringkasan berkas yang ditetapkan di awal
- Solusi: Secara proaktif buat ringkasan di tengah tugas ("Ringkas rencana kita sejauh ini"), atau mulai sesi baru
**Skenario 3: Memahami batasan produk**
- Batas panjang konteks diukur dalam token, tetapi dalam istilah sehari-hari, anggaplah sebagai "giliran"
- Jika Anda melihat ajakan "Mulai obrolan baru", itu berarti sesi saat ini sudah memiliki terlalu banyak giliran
## Praktik terbaik

<Callout type="tip">
**Mulai sesi baru untuk setiap tugas**: Tugas-tugas independen — menulis esai, riset, debugging — sebaiknya masing-masing memiliki sesi tersendiri agar tidak terjadi gangguan konteks.
</Callout>

<Callout type="tip">
**Buat ringkasan berkala dalam sesi panjang**: Setelah 20+ giliran, minta Kimi secara proaktif untuk meringkas informasi penting demi mencegah kehilangan data.
</Callout>

<Callout type="tip">
**Bersihkan informasi sensitif dengan segera**: Riwayat obrolan tersimpan; hapus seluruh sesi setelah menangani konten pribadi.
</Callout>
