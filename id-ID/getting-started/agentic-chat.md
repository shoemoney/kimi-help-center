---
title: "Memulai dengan Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Memulai dengan Kimi - Pusat Bantuan Kimi"
  description="Pelajari tiga model Kimi (K2.6, K3, K3 Swarm), alat bawaan, dan kemampuan multimodalnya agar Anda cepat mulai mengobrol dan menjalankan tugas."
/>

# Memulai dengan Kimi

Anda bisa mengetik pertanyaan di kotak chat, mengunggah file, atau berganti model sesuai kebutuhan.
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

## Pilih model

Kimi menyediakan beberapa model. Klik tombol pengalih model di atas kotak input untuk menggantinya.

| Model | Kekuatan berpikir | Paling cocok untuk |
|-------|-------------------|----------|
| **K2.6** | Standar / Tinggi | Percakapan cepat dan tanya jawab dengan respons lebih singkat |
| **K3** | Rendah / Tinggi / Maks | Chat dan tugas Agent; kemampuan keseluruhan paling unggul |
| **K3 Swarm** | Rendah / Tinggi / Maks | Pencarian skala besar dan pemrosesan batch, selesai dalam satu kali jalan |

<Callout type="tip">
K2.6 tidak memakai credit di Chat (saat digunakan sebagai K2.6 Agent di dalam Kimi Work, tetap memakai credit keanggotaan); K3 dan K3 Swarm ditagih dengan credit. Lihat [manfaat keanggotaan](https://www.kimi.com/help/membership/membership-overview) untuk detailnya.
</Callout>

### Tentang Kimi K3

Kimi K3 saat ini adalah model Kimi yang paling kuat, dengan 2,8 triliun parameter, dibangun di atas Kimi Delta Attention (KDA) dan Attention Residuals, serta memiliki **visi native** dan **jendela konteks 1 juta token**. Sebagai model terbuka kelas 3T pertama di dunia, K3 dirancang untuk kecerdasan terdepan dalam pemrograman jangka panjang, kerja pengetahuan, dan penalaran, dengan performa unggulan dalam coding, eksekusi jangka panjang, serta beragam tugas kecerdasan umum.

### Alat bawaan

Tersedia langsung, tanpa perlu konfigurasi:

| Alat | Deskripsi |
|------|------------|
| **Web Search** | Pencarian web waktu nyata untuk berita dan informasi terbaru |
| **Fetch Tool** | Akses langsung ke URL tertentu (halaman web, dokumen, gambar, dan sumber daya online lainnya) |
| **Image Search** | Pencarian teks-ke-gambar dan gambar-ke-gambar untuk menemukan konten visual dengan cepat |
| **IPython** | Menjalankan kode Python untuk analisis dan visualisasi data |
| **Memori** | Memori cerdas yang mencatat preferensi dan kebiasaan pribadi Anda |

## Kemampuan visual & multimodal
Kimi K3 mendukung pemahaman menyeluruh atas gambar, video, dan dokumen perkantoran (PDF/Word/Excel) dalam berbagai skenario, menggunakan **arsitektur multimodal native** (bukan OCR tempelan). Kimi dapat langsung mengurai isi dokumen dan menjalankan tugas perkantoran tingkat menengah hingga lanjut (seperti menulis formula Excel atau membuat kerangka PPT/kode VBA). Dipadukan dengan visi native dan jendela konteks 1 juta token, Kimi mampu menangani materi multimodal yang lebih panjang dan kompleks.
### Dukungan input multimodal
- **Gambar**: PNG, JPEG, WebP, GIF, dll. (melalui URL, Base64, atau unggahan file lokal)
- **Video**: MP4, dll. (melalui video_url atau rangkaian frame gambar + parameter fps)
- **Dokumen**: PDF, Word, Excel, TXT, Markdown, dll.
- **Sumber daya online**: URL, tautan artikel
- **Pencarian gambar**: Unggah gambar untuk mencari gambar terkait atau serupa
- **Pemahaman video**: Mendukung pemahaman video — dapat menganalisis rekaman layar dan meniru logika interaksi
- **Visual coding**: Unggah tangkapan layar atau rekaman layar untuk menghasilkan kode frontend (HTML/Vue/React, dll.); dapat mereproduksi halaman web secara otomatis dari mockup desain

### Format output
- Teks biasa / campuran teks-dan-gambar: Balasan percakapan standar
- Markdown: Teks kaya dengan heading, daftar, tabel, dan tautan
- Blok kode: HTML/Vue/React/Python/JSON/Mermaid, dll. (dengan penanda bahasa)
- Data terstruktur JSON: Output mode JSON wajib
- Diagram Mermaid: Flowchart, diagram urutan, mind map, dll.
- Rumus matematika LaTeX: Ekspresi matematika inline dan tingkat blok
- Output mode ganda (Thinking): Mengembalikan `reasoning_content` (proses berpikir) sekaligus `content` (jawaban akhir)
- Format pemanggilan alat: Format standar Function Calling (untuk pengembang)

### Catatan penting

1. **Output file**: K3 dapat menghasilkan dokumen yang bisa diedit secara end-to-end (seperti `.pptx`, `.docx`, `.xlsx`, `.pdf`) dan deliverable kompleks lainnya; K2.6 berfokus pada tanya jawab cepat dan hanya menghasilkan teks (seperti kerangka PPT, isi dokumen Word, atau kode).

<Callout type="tip">
Tips: Untuk membuat gambar, audio, atau video, klik "+" → Plugin, pilih fitur yang sesuai, lalu gunakan bersama **K3**. Untuk membuat dokumen kompleks yang bisa diedit atau menjalankan tugas multi-langkah, sebaiknya pilih **K3** atau **K3 Swarm** agar mendapat pengalaman penuh.
</Callout>

## Sesi vs. giliran percakapan
Saat Anda mengklik "Obrolan Baru", anggap saja Anda sedang memulai percakapan panjang dengan Kimi.
| Konsep | Analogi | Definisi Teknis |
|---------|---------|---------------------|
| **Sesi** | Satu rapat utuh (dari awal sampai akhir) | Proses chat lengkap dengan awal dan akhir yang jelas |
| **Giliran** | Satu pertukaran (Anda berbicara, Kimi membalas) | Input Anda dan respons Kimi membentuk satu putaran bolak-balik |

### Perbedaan utama
**Sesi**
- **Memori berkelanjutan**: Kimi mengingat semua konteks dalam chat saat ini
- **Konteks lintas-giliran**: Setiap balasan merujuk isi percakapan sebelumnya sebagai konteks untuk giliran berikutnya
- **Batas yang jelas**: Mengklik "Obrolan Baru" = mulai dari awal; konteks sebelumnya dihapus
**Giliran**
- **Hitungan kumulatif**: Giliran 1, Giliran 2, … bertambah secara bertahap
- **Memori terbatas**: Terlalu banyak giliran (misalnya 50+) dapat membuat Kimi "melupakan" konten awal, terutama untuk penulisan panjang atau tugas dengan persyaratan ketat
- **Batas panjang konteks**: Dibatasi oleh jumlah token; ketika giliran menumpuk, konten paling awal dapat dipadatkan

<Callout type="tip">
**Kasus khusus**: Jika satu tanya jawab sudah menutup percakapan, maka 1 giliran = 1 sesi.
</Callout>

## Mengapa pembedaan ini penting
Dalam satu sesi, setiap pertanyaan atau instruksi baru yang Anda kirim akan dijawab dengan mengacu pada semua giliran sebelumnya. Ketika giliran bertambah dan konten makin panjang, kualitas respons dapat menurun secara bertahap.

### Skenario umum
**Skenario 1: Berganti topik**
- Salah: Menanyakan "bantu saya menghitung pajak" dalam sesi tempat Anda sedang menulis novel 30.000 kata
- Benar: Mulai sesi baru untuk pertanyaan pajak — agar Kimi tidak mencampuradukkan tokoh novel dengan konsep pajak
**Skenario 2: Memproses dokumen panjang**
- Setelah puluhan giliran, Kimi mungkin "melupakan" aturan atau ringkasan file yang ditetapkan di awal
- Solusi: Ringkas secara proaktif di tengah tugas ("Ringkas rencana kita sejauh ini"), atau mulai sesi baru
**Skenario 3: Memahami batas produk**
- Batas panjang konteks diukur dalam token, tetapi dalam penggunaan sehari-hari, anggap saja sebagai "giliran"
- Jika Anda melihat prompt "Mulai obrolan baru", berarti sesi saat ini sudah memiliki terlalu banyak giliran
## Praktik terbaik

<Callout type="tip">
**Mulai sesi baru untuk setiap tugas**: Tugas yang berdiri sendiri — menulis esai, riset, debugging — sebaiknya masing-masing memiliki sesi sendiri agar konteks tidak saling mengganggu.
</Callout>

<Callout type="tip">
**Ringkas secara berkala dalam sesi panjang**: Setelah 20+ giliran, minta Kimi secara proaktif untuk merangkum informasi penting agar data tidak hilang.
</Callout>

<Callout type="tip">
**Segera bersihkan informasi sensitif**: Riwayat chat disimpan; hapus seluruh sesi setelah menangani konten pribadi.
</Callout>
