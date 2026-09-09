---
title: "Pengenalan Ekstensi Browser Kimi"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Pengenalan Ekstensi Browser Kimi - Pusat Bantuan Kimi"
  description="Ekstensi Browser Kimi (sebelumnya Kimi WebBridge) adalah plugin browser untuk AI Agent yang dapat membuka halaman, mengklik tombol, mengisi formulir, dan mengekstrak informasi."
  ogType="article"
/>

# Pengenalan Ekstensi Browser Kimi

Ekstensi Browser Kimi (sebelumnya Kimi WebBridge) adalah plugin browser untuk AI Agent. Ekstensi ini dapat membuka halaman, mengklik tombol, mengisi formulir, dan mengekstrak informasi, sehingga Agent dapat menyelesaikan tugas web yang membosankan secara otomatis seperti manusia. Anda juga dapat memecah halaman web yang sering digunakan menjadi CLI dan mengubah rekaman operasi web menjadi Skill yang dapat digunakan kembali oleh Agent kapan saja.

## Dua cara penggunaan

Ekstensi Browser Kimi menawarkan dua cara penggunaan:

- **Sidebar browser**: Klik ikon Kimi di bilah alat untuk membuka sidebar, lalu masuk dengan akun keanggotaan Kimi untuk langsung mengobrol dan biarkan Kimi mengoperasikan halaman saat ini untuk Anda.
- **Kontrol jarak jauh oleh Agent lokal**: Biarkan AI Agent seperti Kimi Work atau Claude Code mengendalikan ekstensi dari jarak jauh untuk mengotomatiskan tugas web.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial Ekstensi Browser Kimi",
    },
  ]}
/>

## Unduh dan pasang

### Langkah 1: unduh Ekstensi Browser Kimi

Anda dapat mengunduhnya melalui cara berikut:

**Cara 1: pasang dari toko web**

- Untuk pengguna Chrome: Buka [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Untuk pengguna Edge: Buka [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Cara 2: pemasangan manual**

Jika Anda tidak dapat mengakses toko web, gunakan cara pemasangan manual.

Kemudian ikuti langkah-langkah sesuai peramban Anda:

**Chrome:**

1. Unduh paket ekstensi dari [situs resmi Ekstensi Browser Kimi](https://www.kimi.com/features/webbridge).
2. Ekstrak file yang sudah diunduh
3. Buka `chrome://extensions/` di bilah alamat
4. Aktifkan "Developer mode" di pojok kanan atas
5. Klik "Load unpacked"
6. Di pemilih file, pilih folder WebBridge yang sudah diekstrak

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. Unduh paket ekstensi dari [situs resmi Ekstensi Browser Kimi](https://www.kimi.com/features/webbridge).
2. Ekstrak file yang sudah diunduh
3. Buka `edge://extensions/` di bilah alamat
4. Aktifkan "Developer mode" di pojok kiri bawah
5. Klik "Load unpacked"
6. Di pemilih file, pilih folder WebBridge yang sudah diekstrak

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Setelah pemasangan, Ekstensi Browser Kimi akan muncul di daftar ekstensi peramban Anda. Agar lebih mudah diakses, kami menyarankan untuk menyematkannya ke bilah alat peramban.

### Langkah 2: Pilih metode penyiapan dan selesaikan konfigurasi

#### Cara 1: Menggunakan dengan Kimi Work Desktop

1. Unduh Kimi Work dari [situs resmi](https://www.kimi.com/products/kimi-work)

2. Setelah terpasang, Anda dapat membuka bilah samping ekstensi dan mengirim instruksi, misalnya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gunakan Ekstensi Browser Kimi dan buka Xiaohongshu, cari postingan tentang rilis Kimi K3",
    },
  ]}
/>

#### Cara 2: Pasangkan dengan Local Agent

Mendukung Claude Code, Codex, Cursor, Kimi Code, Hermes Claw, dan lainnya.

1. Kirim perintah berikut langsung di Agent untuk memasang Ekstensi Browser Kimi secara otomatis. Agent akan menjalankan penyiapan yang sesuai dengan sistem operasi Anda.

Jika Anda pengguna macOS, gunakan perintah berikut:

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Jika Anda pengguna Windows, gunakan perintah berikut:

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. Mulai Menggunakan

Setelah ekstensi terhubung, Anda dapat mengirim instruksi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gunakan Ekstensi Browser Kimi buka X.com dan cari postingan tentang rilis Kimi K3",
    },
  ]}
/>
