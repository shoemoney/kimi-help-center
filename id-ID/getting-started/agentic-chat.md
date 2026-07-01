---
title: "Memulai dengan Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Memulai dengan Kimi - Pusat Bantuan Kimi"
  description="Anda dapat mengetik pertanyaan di kotak obrolan, mengunggah berkas, atau beralih antarmodel sesuai kebutuhan."
/>

# Memulai dengan Kimi

Anda dapat mengetik pertanyaan di kotak obrolan, mengunggah berkas, atau beralih antarmodel sesuai kebutuhan.
Buka [kimi.com](https://www.kimi.com) dan coba kirim pesan — sapa Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hi, Kimi!",
    },
  ]}
/>

## Ditenagai oleh K2.6
Kimi K2.6 adalah model sumber terbuka yang dibangun di atas K2.5 dengan peningkatan signifikan, berfokus pada coding mutakhir, eksekusi berjangka panjang, dan kemampuan agent swarm. Model ini meraih performa terdepan di berbagai tolok ukur tugas agen, coding, pemahaman gambar, pemahaman video, dan kecerdasan umum. K2.6 juga merupakan model **paling serbaguna** dari Kimi — arsitektur multimodal natifnya mendukung input visual maupun teks, mode thinking dan non-thinking, serta tugas percakapan dan agentik.
Hasilnya, Kimi tidak hanya unggul dalam percakapan tanya jawab, tetapi juga dalam perencanaan tugas otonom, pemanggilan alat, dan penalaran multilangkah — mendukung pemikiran mendalam dan eksekusi untuk tugas-tugas kompleks.
### Alat bawaan
Langsung tersedia tanpa perlu konfigurasi:
| Alat | Deskripsi |
|------|------------|
| **Web Search** | Pencarian web waktu nyata untuk berita dan informasi terbaru |
| **Fetch Tool** | Akses langsung ke URL tertentu (halaman web, dokumen, gambar, dan sumber daya daring lainnya) |
| **Data Source** | Terhubung ke basis data profesional; mencari daftar basis data dan mengambil data |
| **Image Search** | Pencarian teks-ke-gambar dan gambar-ke-gambar untuk menemukan konten visual dengan cepat |
| **IPython** | Menjalankan kode Python untuk analisis dan visualisasi data |
| **Memory** | Memori cerdas yang mencatat preferensi dan kebiasaan pribadi Anda |

## Kemampuan visual & multimodal
K2.6 mendukung pemahaman menyeluruh atas gambar, video, dan dokumen perkantoran (PDF/Word/Excel) menggunakan **arsitektur multimodal natif** (bukan OCR yang ditambahkan belakangan). Model ini dapat langsung mengurai isi dokumen dan menjalankan tugas perkantoran tingkat menengah hingga lanjutan (seperti menulis rumus Excel atau membuat kerangka PPT/kode VBA).
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

<Callout type="warning">
1. **Keterbatasan pembuatan gambar**: Mode obrolan standar hanya mendukung *pencarian* gambar, bukan *pembuatan* gambar (pembuatan gambar memerlukan mode K2.6 Agent).
2. **Keterbatasan keluaran berkas**: Hanya konten teks yang didukung sebagai keluaran (mis. kerangka PPT, isi teks Word, kode). Keluaran berkas biner langsung (`.pptx`, `.docx`, `.xlsx`, `.pdf`) tidak didukung.
3. Untuk pembuatan gambar atau keluaran dokumen kompleks yang dapat diedit, gunakan [K2.6 Agent](https://www.kimi.com/agent) atau alat eksekusi kode.
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
1. **Mulai sesi baru untuk setiap tugas**: Tugas-tugas independen — menulis esai, riset, debugging — sebaiknya masing-masing memiliki sesi tersendiri agar tidak terjadi gangguan konteks.
2. **Buat ringkasan berkala dalam sesi panjang**: Setelah 20+ giliran, minta Kimi secara proaktif untuk meringkas informasi penting demi mencegah kehilangan data.
3. **Bersihkan informasi sensitif dengan segera**: Riwayat obrolan tersimpan; hapus seluruh sesi setelah menangani konten pribadi.
</Callout>
