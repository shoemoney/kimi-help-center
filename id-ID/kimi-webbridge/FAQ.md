---
title: "FAQ"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ Ekstensi Browser Kimi - Pusat Bantuan Kimi"
  description="Pertanyaan yang sering diajukan tentang instalasi, koneksi, dan penggunaan Ekstensi Browser Kimi dengan berbagai browser dan Local Agent."
  ogType="article"
/>

# FAQ

## Versi produk

### Apa hubungan antara Kimi WebBridge dan Ekstensi Browser Kimi?

Kimi WebBridge telah berganti nama menjadi Ekstensi Browser Kimi, dengan fitur baru termasuk entri sidebar browser, perekaman aksi web, dan kemampuan memecah halaman web menjadi instruksi. Cara Local Agent memanggil ekstensi tetap sama dan dapat terus digunakan; entri sidebar baru mengharuskan Anda masuk dengan akun keanggotaan Kimi.

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

Pastikan Ekstensi Browser Kimi sudah berhasil dipasang, lalu ikuti langkah sesuai metode pengaturan Anda:

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

### Di Windows, saat memasang Ekstensi Browser Kimi muncul error: Installation failed

Ekstensi Browser Kimi mendukung sistem operasi Windows, dan perintah instalasinya dapat dijalankan di lingkungan Linux:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### Ekstensi Browser Kimi menampilkan peringatan kompatibilitas Chrome setelah instalasi. Apa artinya?

Jika Ekstensi Browser Kimi bisa membuka halaman dengan normal, tetapi tindakan seperti `snapshot`, `evaluate`, `screenshot`, atau `click` terus gagal, penyebab yang lebih umum adalah **konflik dengan ekstensi browser lain**.

Hal ini terutama sering terjadi pada alat scraping, ekstensi pembantu situs web, ekstensi perekam layar, dan ekstensi asisten AI.

Kami menyarankan langkah-langkah berikut untuk mengatasinya:

1. Buka halaman pengelolaan ekstensi browser Anda
2. Nonaktifkan sementara ekstensi lain
3. Biarkan hanya Ekstensi Browser Kimi yang aktif
4. Mulai ulang browser dan coba lagi
5. Jika Ekstensi Browser Kimi berjalan normal, aktifkan kembali ekstensi lain satu per satu untuk menemukan ekstensi yang menyebabkan konflik


### Apakah Ekstensi Browser Kimi akan membocorkan informasi login saya?

Tidak. Semua eksekusi berlangsung secara lokal di perangkat Anda—status login dan konten halaman web tidak pernah keluar dari komputer Anda. Agent hanya dapat mengakses hasil operasi yang Anda izinkan.

### Mengapa operasi gagal?

Struktur halaman yang kompleks atau pemuatan dinamis dapat menyebabkan operasi gagal. Coba sederhanakan instruksi Anda, atau minta Agent mengambil tangkapan layar terlebih dahulu untuk memastikan kondisi halaman sebelum menjalankan operasi.

### Browser apa saja yang didukung?

Saat ini mendukung Chrome dan Edge. Kami menyarankan penggunaan versi terbaru untuk pengalaman terbaik.

## Bekerja dengan agent lain

### Agent lain apa saja yang didukung?

Ekstensi Browser Kimi mendukung semua Local Agent, termasuk Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, dan lainnya.

### Apakah konfigurasinya sama untuk Agent yang berbeda?

Perintah pengaturannya sama untuk semua—jalankan satu perintah curl untuk memasang. Lihat konfigurasi Skill masing-masing Agent untuk detailnya.
