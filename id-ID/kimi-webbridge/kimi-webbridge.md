---
title: "Pengenalan Kimi WebBridge"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Pengenalan Kimi WebBridge - Pusat Bantuan Kimi"
  description="Kimi WebBridge adalah ekstensi peramban yang dirancang untuk AI Agent. Ekstensi ini berjalan langsung di peramban Chrome atau Edge Anda, memanfaatkan sesi login yang sudah ada agar Agent dapat berinteraksi dengan halaman web layaknya manusia."
  ogType="article"
/>

# Pengenalan Kimi WebBridge

Kimi WebBridge adalah ekstensi peramban yang dirancang untuk AI Agent. Berbeda dengan solusi otomatisasi peramban berbasis cloud, Kimi WebBridge berjalan langsung di peramban Chrome atau Edge Anda, secara otomatis memanfaatkan sesi login yang sudah ada agar Agent dapat berinteraksi dengan halaman web layaknya manusia.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Tutorial Kimi WebBridge",
    },
  ]}
/>

<Callout type="tip">
Kami menyarankan untuk memasang Kimi WebBridge di komputer kerja utama Anda demi pengalaman otomatisasi peramban yang terbaik.
</Callout>

<Callout type="info">
WebBridge bekerja melalui layanan bridge lokal dan ekstensi peramban. Semua eksekusi berlangsung secara lokal di perangkat Anda—status login dan konten halaman web tidak pernah meninggalkan komputer Anda.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## Langkah 1: unduh ekstensi Kimi WebBridge

Anda dapat mengunduhnya melalui cara berikut:

**Cara 1: pasang dari toko web**

- Untuk pengguna Chrome: Buka [Chrome Web Store](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)
- Untuk pengguna Edge: Buka [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)

**Cara 2: pemasangan manual**

Jika Anda tidak dapat mengakses toko web, gunakan cara pemasangan manual.

Kemudian ikuti langkah-langkah sesuai peramban Anda:

**Chrome:**

1. Unduh paket ekstensi dari [situs resmi Kimi WebBridge](https://www.kimi.com/features/webbridge).
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

1. Unduh paket ekstensi dari [situs resmi Kimi WebBridge](https://www.kimi.com/features/webbridge).
2. Ekstrak file yang sudah diunduh
3. Buka `edge://extensions/` di bilah alamat
4. Aktifkan "Developer mode" di pojok kiri bawah
5. Klik "Load unpacked"
6. Di pemilih file, pilih folder WebBridge yang sudah diekstrak

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

Setelah pemasangan, WebBridge akan muncul di daftar ekstensi peramban Anda. Agar lebih mudah diakses, kami menyarankan untuk menyematkannya ke bilah alat peramban.

## Langkah 2: Pilih metode penyiapan dan selesaikan konfigurasi

### Cara 1: Menggunakan dengan Kimi Work Desktop

1. Unduh Kimi Work dari [situs resmi](https://www.kimi.com/zh-cn/products/kimi-work)

2. Setelah terpasang, Anda dapat mengirim instruksi di Kimi Work, misalnya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gunakan Kimi Webbridge dan buka Xiaohongshu, cari postingan tentang rilis Kimi K2.6",
    },
  ]}
/>

### Cara 2: Pasangkan dengan Local Agent

Mendukung Claude Code, Codex, Cursor, Kimi Code, Hermers Claw, dan lainnya.

1. Kirim perintah berikut langsung di Agent untuk memasang WebBridge secara otomatis. Agent akan menjalankan penyiapan yang sesuai dengan sistem operasi Anda.

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
      content: "Gunakan Kimi WebBridge buka X.com dan cari postingan tentang rilis Kimi K2.6",
    },
  ]}
/>
