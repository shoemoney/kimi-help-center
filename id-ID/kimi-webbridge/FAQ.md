---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Kimi WebBridge - Pusat Bantuan Kimi"
  description="Pertanyaan yang sering diajukan tentang instalasi, koneksi, dan penggunaan Kimi WebBridge dengan berbagai browser dan Local Agent."
  ogType="article"
/>

# FAQ

## Instalasi dan konfigurasi

### Muncul pesan "Cannot add apps from this website" saat memasang ekstensi?

Pastikan Anda memasangnya dari toko web resmi (Chrome Web Store atau Edge Add-ons). Jika Anda tidak bisa mengakses toko web tersebut, gunakan metode instalasi manual yang tersedia di situs resmi.

### Tidak terjadi apa-apa setelah menjalankan perintah koneksi?

Periksa koneksi internet Anda. Jika masalah masih berlanjut, coba mulai ulang Kimi Claw Desktop lalu jalankan kembali perintahnya.

### Bisakah saya menggunakannya di beberapa komputer?

Bisa, tetapi setiap komputer perlu dipasang dan dikonfigurasi secara terpisah.

### Saya tidak menemukan Kimi Claw Desktop?

Kimi Claw Desktop adalah Kimi Claw yang diterapkan di komputer lokal Anda. Buka Kimi Desktop, temukan Kimi Claw di bilah samping kiri, buat Claw baru, lalu pilih "Deploy on my computer".

## Koneksi dan penggunaan

### Status ekstensi menampilkan "Disconnected"?

Pastikan ekstensi browser Kimi WebBridge sudah berhasil dipasang, lalu ikuti langkah sesuai metode pengaturan Anda:

- **Kimi Desktop**: Mulai ulang Kimi Desktop dan coba lagi

- **Local Agent lainnya**: Kirim ulang perintah berikut di Agent Anda, lalu mulai ulang Agent setelah perintah selesai dijalankan:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Di Windows, saat memasang WebBridge muncul error: Installation failed

Kimi WebBridge mendukung sistem operasi Windows, dan perintah instalasinya dapat dijalankan di lingkungan Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### WebBridge menampilkan peringatan kompatibilitas Chrome setelah instalasi. Apa artinya?

Jika WebBridge bisa membuka halaman dengan normal, tetapi tindakan seperti `snapshot`, `evaluate`, `screenshot`, atau `click` terus gagal, penyebab yang lebih umum adalah **konflik dengan ekstensi browser lain**.

Hal ini terutama sering terjadi pada alat scraping, ekstensi pembantu situs web, ekstensi perekam layar, dan ekstensi asisten AI.

Kami menyarankan langkah-langkah berikut untuk mengatasinya:

1. Buka halaman pengelolaan ekstensi browser Anda
2. Nonaktifkan sementara ekstensi lain
3. Biarkan hanya Kimi WebBridge yang aktif
4. Mulai ulang browser dan coba lagi
5. Jika WebBridge berjalan normal, aktifkan kembali ekstensi lain satu per satu untuk menemukan ekstensi yang menyebabkan konflik


### Apakah WebBridge akan membocorkan informasi login saya?

Tidak. Semua eksekusi berlangsung secara lokal di perangkat Anda—status login dan konten halaman web tidak pernah keluar dari komputer Anda. Agent hanya dapat mengakses hasil operasi yang Anda izinkan.

### Mengapa operasi gagal?

Struktur halaman yang kompleks atau pemuatan dinamis dapat menyebabkan operasi gagal. Coba sederhanakan instruksi Anda, atau minta Agent mengambil tangkapan layar terlebih dahulu untuk memastikan kondisi halaman sebelum menjalankan operasi.

### Browser apa saja yang didukung?

Saat ini mendukung Chrome dan Edge. Kami menyarankan penggunaan versi terbaru untuk pengalaman terbaik.

## Bekerja dengan agent lain

### Agent lain apa saja yang didukung?

WebBridge mendukung semua Local Agent, termasuk Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, dan lainnya.

### Apakah konfigurasinya sama untuk Agent yang berbeda?

Perintah pengaturannya sama untuk semua—jalankan satu perintah curl untuk memasang. Lihat konfigurasi Skill masing-masing Agent untuk detailnya.
