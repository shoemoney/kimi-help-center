---
title: "Cara Membuat Plugin Pribadi"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Gunakan skill Plugin Builder bawaan di Kimi Work untuk mengubah ide satu kalimat, repositori plugin eksternal, atau halaman web apa pun menjadi plugin milik Anda sendiri."
---

<SeoMeta
  title="Cara Membuat Plugin Pribadi - Pusat Bantuan Kimi"
  description="Buat plugin pribadi di Kimi Work dengan skill Plugin Builder bawaan: buat dari ide satu kalimat, impor repositori plugin eksternal, atau ubah halaman web apa pun menjadi plugin. Setelah terdaftar di marketplace plugin pribadi Anda, instal dan langsung gunakan dalam percakapan."
/>

# Cara Membuat Plugin Pribadi

Di Kimi Work, Anda dapat menggunakan skill **Plugin Builder** bawaan untuk mengubah ide satu kalimat, repositori plugin eksternal, atau halaman web apa pun menjadi plugin milik Anda sendiri. Metode apa pun yang Anda pilih, plugin sampai kepada Anda melalui jalur yang sama: **buat / konversi → daftarkan di marketplace plugin pribadi Anda (tab “Personal”) → klik + untuk menginstal → gunakan dalam percakapan**. Setelah terinstal, plugin langsung tersedia di percakapan saat ini — tanpa perlu memulai ulang.

Sebelum memulai, pastikan Anda telah menginstal aplikasi desktop [Kimi Work](https://www.kimi.ai/products/kimi-work) versi terbaru. Plugin Builder adalah skill bawaan dan tidak memerlukan instalasi tambahan: ketik “/” dalam percakapan untuk memanggilnya, atau klik “Custom plugin” di marketplace plugin untuk mulai membuat di percakapan utama.

## Buat Plugin Baru dengan Satu Kalimat

Ideal untuk kasus “punya ide tetapi belum ada kode”. Anda hanya perlu mendeskripsikan kemampuan yang Anda inginkan; Plugin Builder secara otomatis menangani scaffolding, pengisian field, validasi lokal, dan pendaftaran — Anda tidak perlu menulis satu file pun secara manual.

1. **Jelaskan kebutuhan Anda.** Panggil Plugin Builder dalam percakapan dan jelaskan dalam satu kalimat apa yang harus dilakukan plugin — misalnya, “buatkan saya plugin yang mencari info registrasi perusahaan”. Field yang dapat disimpulkan, seperti nama, deskripsi, dan kategori, diisi secara otomatis; hanya informasi yang tidak dapat disimpulkan, seperti URL server MCP atau ikon, yang akan dikonfirmasikan kepada Anda.
2. **Tunggu hingga proses build selesai.** Plugin Builder menghasilkan file plugin secara lokal, otomatis lolos validasi struktur dan spesifikasi, lalu mendaftarkan plugin di marketplace plugin pribadi Anda.
3. **Instal dan gunakan.** Buka **Plugins → Personal**, temukan plugin yang baru Anda buat, lalu klik + untuk menginstal. Setelah terinstal, plugin langsung tersedia di percakapan saat ini dan dapat Anda panggil kapan saja dengan “/”.

**Prompt satu paragraf:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nBuatkan saya plugin pencarian literatur yang mencakup:\n1. Pencarian literatur: cari paper berdasarkan topik / penulis / jurnal, dengan hasil berupa entri bibliografi, abstrak, dan tautan teks lengkap\n2. Ekspor hasil: ekspor hasil pencarian sebagai CSV agar mudah diimpor ke manajer referensi\n3. Bantuan review: susun draf tinjauan literatur berdasarkan hasil pencarian",
    },
  ]}
/>

## Impor Plugin dari Marketplace atau Repositori

Kirim tautan repositori plugin ke Plugin Builder, dan ia akan otomatis mengenalinya, mengonversi formatnya, dan menginstalnya ke tab “Personal” Anda. Plugin hasil impor tidak mengganggu marketplace resmi dan dapat dicopot kapan saja.

1. **Format plugin yang didukung:** Plugin Builder mengenali manifes plugin dari sumber berikut dan mengonversi semuanya ke format native Kimi `kimi.plugin.json`:

| Format | Catatan |
| --- | --- |
| `kimi.plugin.json` | Format native Kimi: field wajib akan dikoreksi |
| Manifes plugin dari platform agen lain | Seperti file `plugin.json` di direktori seperti `.codex-plugin/plugin.json` atau `.claude-plugin/plugin.json`, serta file indeks marketplace yang disertakan platform tersebut |
| `server.json` | Format registry resmi MCP: dikonversi menjadi plugin yang hanya berisi layanan MCP |
| `plugin.json` generik | Manifes generik yang berada di direktori root plugin |

2. **Cara mengimpor:** kirim tautan repositori ke Plugin Builder. Ia otomatis mengenali bentuk repositori berikut:

- **Repositori plugin tunggal**: seluruh repositori dikonversi menjadi satu plugin;
- **Repositori multi-plugin (monorepo)**: setiap subdirektori dikonversi menjadi plugin tersendiri;
- **Repositori marketplace / indeks plugin** (repositori dengan indeks plugins.json atau marketplace.json): setiap entri dalam indeks diperluas dan dikonversi secara massal;
- **Repositori khusus Skills**: repositori tanpa manifes plugin, hanya berisi file skill, dikemas sebagai plugin bertipe skill.

3. **Instal dari tab Personal:** setelah pemrosesan selesai, Plugin Builder memberi tahu Anda plugin mana yang dapat digunakan. Buka **Plugins → Personal** dan klik “Install” pada kartu yang sesuai untuk mulai menggunakannya dalam percakapan.

**Prompt satu paragraf:**

Impor satu repositori:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImpor plugin di repositori https://github.com/owner/example sebagai plugin pribadi. Setelah konversi, periksa dulu apakah struktur dan dependensinya dapat digunakan; setelah dikonfirmasi, daftarkan di marketplace plugin pribadi saya. Jika konversi gagal, beri tahu saya alasannya.",
    },
  ]}
/>

Impor massal marketplace plugin:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nKonversi massal koleksi plugin di https://github.com/hashgraph-online/awesome-ai-plugins menjadi plugin pribadi. Konversi hanya 5 pertama untuk saya tinjau; setelah saya konfirmasi, konversi semua sisanya, daftarkan satu per satu di marketplace plugin pribadi saya, dan terakhir berikan laporan lengkap yang dikelompokkan menurut “dapat digunakan / dependensi tidak tersedia / gagal”.",
    },
  ]}
/>

Konversi hanya subdirektori tertentu:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nKonversi hanya plugin di bawah direktori https://github.com/owner/repo/tree/main/plugins/example. Setelah konversi dan pemeriksaan lolos, daftarkan di marketplace plugin pribadi saya.",
    },
  ]}
/>

**Mengelola plugin hasil impor:**

- **Memperbarui plugin**: jika repositori sumber mendapat pembaruan, atau Anda ingin mengubah nama atau deskripsinya, cukup beri tahu Plugin Builder — ia akan mengonversi ulang atau memodifikasinya dan mendaftarkannya kembali.
- **Copot / hapus**: copot instalasi dari tab “Personal” untuk menonaktifkan plugin; entri tetap ada di tab setelah dicopot — hapus entri tersebut jika Anda ingin menghilangkannya sepenuhnya.
- **Direktori sumber**: hasil konversi disimpan di direktori plugins/ di workspace lokal Anda. Ini adalah “file sumber” plugin, dan Plugin Builder mendasarkan pembaruan berikutnya padanya — jangan dihapus secara manual.

## Ubah Halaman Web Menjadi Plugin

Ideal untuk kasus “situs yang sering saya gunakan tidak punya API publik, tetapi saya ingin Kimi mengambil data dan mengoperasikannya untuk saya”. Kirim URL ke Plugin Builder dan jelaskan kebutuhan Anda — misalnya, “ubah situs XX menjadi plugin; saya ingin mencari XX”. Ada dua opsi browser untuk menganalisis situs dan menjalankan plugin:

| Metode | Paling cocok untuk | Yang Anda butuhkan |
| --- | --- | --- |
| **Browser bawaan (default)** | Sebagian besar situs web; menggunakan browser bawaan Kimi Work untuk menganalisis situs dan menjalankan plugin | Tidak perlu menginstal apa pun; saat login diperlukan, login sekali di browser bawaan |
| **WebBridge (wb)** | Menggunakan kembali akun yang sudah Anda login di Chrome | Instal WebBridge terlebih dahulu dan gunakan untuk mengendalikan Chrome Anda |

1. **Analisis situs.** Plugin Builder membuka URL di browser pilihan Anda. Jika halaman memerlukan login, ia akan meminta Anda login sekali di browser — ia tidak pernah meminta kata sandi, cookie, atau kredensial apa pun.
2. **Rekayasa balik API dan hasilkan plugin.** Ia benar-benar mengoperasikan fitur inti di halaman, menangkap permintaan jaringan, memetakan API data internal situs, lalu menghasilkan plugin bertipe skill dengan skrip kueri bawaan.
3. **Validasi, daftar, instal.** Sama seperti metode sebelumnya: setelah plugin lolos validasi, ia didaftarkan di tab “Personal”; klik + untuk menginstal dan mulai menggunakannya.

Mulai saat itu, cukup katakan “carikan XX untuk saya”, dan Kimi menggunakan plugin untuk mengambil data langsung di browser dan merapikan hasilnya. Jika API situs berubah dan plugin berhenti berfungsi, minta Plugin Builder untuk menganalisis ulang situs dan memperbarui plugin.

**Prompt satu paragraf:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nUbah Hacker News (https://news.ycombinator.com) menjadi plugin yang mencakup:\n1. Pencarian postingan: masukkan kata kunci dan kembalikan judul postingan, tautan, skor, dan jumlah komentar\n2. Halaman depan: ambil 30 postingan teratas saat ini di halaman utama\n3. Baca komentar: buka postingan tertentu dan rangkum poin-poin utama dari komentar teratas",
    },
  ]}
/>

<Callout type="warning">
Metode browser bawaan bergantung pada kemampuan browser bawaan Kimi Work — jika Anda diminta melakukan upgrade, perbarui aplikasi desktop ke versi terbaru. Metode WebBridge mengharuskan WebBridge terinstal di komputer Anda dan di Chrome terlebih dahulu.
</Callout>
