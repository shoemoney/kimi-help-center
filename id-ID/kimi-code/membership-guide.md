---
title: "Panduan keanggotaan Kimi Code"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Panduan keanggotaan Kimi Code - Pusat Bantuan Kimi"
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
| **Tingkat Standard / HighSpeed** | Model yang sama pada dua kecepatan — HighSpeed memberikan kecepatan keluaran sekitar 5–6× Standard dan beralih sesuai kebutuhan |
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

## Cara beralih model

**Model HighSpeed kini tersedia.** Kimi Code menawarkan dua tingkat — **Standard** dan **HighSpeed** — dibangun di atas model yang sama dengan kemampuan coding identik, serta berbagi Base URL, API Key, dan manfaat keanggotaan yang sama. HighSpeed memberikan kecepatan keluaran sekitar **5–6× Standard**, jadi saat Anda menginginkan respons instan dan iterasi cepat, satu klik memberi pengalaman coding yang lebih mulus. Perbedaan utama:

| Item | Standard | HighSpeed |
| --- | --- | --- |
| ID model | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| Kecepatan keluaran | Dasar | ~5–6× lebih cepat dari Standard |
| Konsumsi kredit | Dasar | ~3× dari Standard |
| Kemampuan coding | Penuh | Sama seperti Standard |
| Ideal untuk | Tugas coding sehari-hari | Respons instan, iterasi cepat |
| Keanggotaan | Tersedia untuk semua anggota Kimi Code | Memerlukan paket [Allegretto](https://www.kimi.com/membership/pricing) atau lebih tinggi |

Cara beralih ke model yang diinginkan:

- **CLI resmi Kimi Code**: ketik `/model` dalam sesi untuk beralih langsung antara Standard dan HighSpeed — tanpa perubahan konfigurasi.
- **Kimi Code untuk VS Code**: pilih model yang diinginkan dari menu dropdown di bilah input; jika HighSpeed belum muncul, mulai ulang VS Code atau instal ulang ekstensi.
- **Tool pihak ketiga**: atur Model ID tool ke model yang diinginkan; semua pengaturan lain tetap sama. Untuk lokasinya di tiap tool, lihat [Penggunaan di Coding Agent pihak ketiga](/kimi-code/third-party-agents).

<Callout type="info">
- **ID model stabil**: kedua ID adalah pengidentifikasi stabil; backend memperbarui model terkait seiring peningkatan, tanpa perubahan konfigurasi klien.
- **Masukkan dengan tepat**: ID HighSpeed harus `kimi-for-coding-highspeed`. Jika salah ketik atau diatur ke nilai lain, permintaan diam-diam kembali ke `kimi-for-coding` standar — tanpa error, tetapi juga tanpa percepatan.
- **401 tanpa akses**: jika paket Anda tidak mencakup akses HighSpeed, panggilan mengembalikan `401`; tingkatkan ke Allegretto atau lebih tinggi.
</Callout>

<Callout type="tip">
**Mengapa keseluruhan tugas tidak terasa 5–6× lebih cepat?** «5–6×» mengacu pada **kecepatan keluaran model** (seberapa cepat teks/kode dihasilkan). Total waktu tugas coding terdiri dari «keluaran model + panggilan tool (baca/tulis file, jalankan perintah, pencarian web, dll.) + eksekusi skrip»: lama panggilan tool dan eksekusi skrip bergantung pada proyek dan perintah Anda, dan HighSpeed tidak mengubah bagian ini. Jadi jika keseluruhan tidak terasa 5–6× lebih cepat, biasanya karena panggilan tool / eksekusi skrip memakan sebagian besar giliran itu, bukan karena generasi model melambat.
</Callout>
