---
title: "Apa itu Plugin Kimi?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Hubungkan alat eksternal ke Kimi agar ia dapat menggunakan aplikasi dan layanan untuk menyelesaikan tugas. Setelah plugin terinstal, Kimi dapat memanggil kemampuan pihak ketiga — seperti data keuangan, perangkat lunak perkantoran, dan alat desain — untuk membantu Anda menyelesaikan pekerjaan."
---

<SeoMeta
  title="Apa itu Plugin Kimi? Cara Menginstal dan Menggunakannya - Pusat Bantuan Kimi"
  description="Pelajari plugin Kimi: hubungkan layanan eksternal seperti data keuangan, perangkat lunak perkantoran, dan alat desain ke Kimi, lalu panggil langsung saat menyelesaikan tugas. Mencakup di mana plugin dapat digunakan, cara menginstal dan memberi otorisasi, cara memanggilnya, kategori plugin, serta penggunaan credit."
/>

# Apa itu Plugin Kimi?

Plugin menghubungkan alat eksternal ke Kimi sehingga Kimi dapat menggunakan aplikasi dan layanan untuk menyelesaikan tugas. Setelah Anda menginstal plugin, Kimi dapat langsung memanggil kemampuan pihak ketiga yang sesuai saat menyelesaikan tugas — misalnya, mengkueri data keuangan, mengoperasikan perangkat lunak perkantoran, atau menggunakan alat desain. Anda dapat secara eksplisit meminta untuk menggunakan plugin tertentu, dan Kimi juga akan memanggilnya secara otomatis bila sesuai.

## Apa itu plugin Kimi?

Plugin Kimi mengikuti [definisi plugin Kimi Code](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) dan dapat mencakup satu atau beberapa komponen berikut:

| Komponen | Fungsi |
| --- | --- |
| Skills | Menyediakan pengetahuan, langkah, dan panduan penggunaan yang diperlukan untuk menyelesaikan tugas |
| MCP | Menghubungkan perangkat lunak, layanan, basis data, atau API eksternal |
| Agents | Mendelegasikan tugas kompleks ke sub-agen khusus |
| Hooks | Menjalankan tindakan yang telah ditentukan secara otomatis saat peristiwa tertentu terjadi |
| Commands | Menyediakan titik masuk berbasis perintah yang jelas dan dapat digunakan kembali |
| System Prompt | Menambahkan instruksi sistem ke Agent utama selama plugin aktif |

Pengalaman web Kimi saat ini mendukung MCP dan Skills dalam plugin. Kimi Work dan Kimi Code mengikuti definisi plugin lengkap di atas dan mendukung kombinasi komponen plugin yang lebih lengkap.

**Contoh:**

- **Plugin Notion** = MCP Notion + Skill panduan penggunaan
- **Plugin riset keuangan** = beberapa MCP keuangan + beberapa Skill analisis + satu Agent kustom

## Di mana Anda dapat menggunakan plugin

Anda dapat menggunakan plugin saat beralih ke model **K3** atau **K3 Swarm**, serta dalam skenario **Deep Research, Websites, dan PPT**.

Anda juga dapat menggunakan plugin di **aplikasi desktop Kimi Work**; untuk daftar plugin bawaan di desktop, lihat [Pusat Plugin Kimi Work](/kimi-work/plugin-center).

<Callout type="info">
Plugin belum didukung di percakapan Kimi Claw maupun Kimi Plus.
</Callout>

## Menginstal plugin

- **Titik masuk**: gunakan **+** di kotak input atau ketik “/”; di mobile, gunakan **+** di kotak input atau “/”.
- Cari atau jelajahi di marketplace plugin, buka detail plugin, lalu klik instal.
- Beberapa plugin memerlukan **otorisasi OAuth** (Anda akan diarahkan ke halaman masuk pihak ketiga; setelah diotorisasi, Anda dapat menggunakannya); beberapa plugin **terinstal secara bawaan** dan tidak perlu diinstal manual.
- **Plugin khusus enterprise**: pengguna non-enterprise dapat melihatnya, tetapi tombol “Install” berwarna abu-abu.
- Anda tidak dapat menginstal atau menggunakan plugin saat belum masuk.

## Menggunakan plugin

- Setelah terinstal, ketik “/” di kotak input atau klik **+** → Plugins, lalu pilih plugin untuk memanggilnya; Anda dapat **memanggil beberapa plugin sekaligus**.
- Anda juga dapat langsung menjelaskan kebutuhan Anda (misalnya, “cari perusahaan ini di Tianyancha”), dan Kimi akan memilih plugin yang tepat secara otomatis.
- Saat Kimi memanggil alat sebuah plugin, balasannya menampilkan “Sedang menggunakan plugin xx”.

## Kategori dan daftar plugin

Marketplace plugin dikelompokkan ke dalam kategori berikut. Plugin yang benar-benar Anda lihat bervariasi menurut **wilayah (domestik / luar negeri)** dan **platform**, dan beberapa plugin muncul di lebih dari satu kategori.

- **Keuangan**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Produktivitas**: Notion, Baidu Netdisk
- **Pengembangan**: GitHub, Supabase, Neon, Cloudflare
- **Kreatif**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Umum**: Vivify

## Data dan izin

- Saat Anda memilih atau secara eksplisit meminta untuk menggunakan plugin, Kimi memprioritaskan alat yang disediakan plugin tersebut dan menyusun jawabannya berdasarkan hasil yang dikembalikan alat tersebut; setelah plugin terhubung, Kimi mengakses konten relevan dalam cakupan yang Anda otorisasi.
- Jika plugin disediakan oleh pihak ketiga, aturan pemrosesan datanya ditetapkan secara independen oleh perusahaan tersebut, dan data tunduk pada ketentuan layanan serta kebijakan privasinya — sebaiknya tinjau keduanya sebelum memberi otorisasi.
- Anda dapat **mencopot plugin atau mencabut otorisasi kapan saja**. Setelah dicopot, otorisasi OAuth terkait akan dicabut; untuk menggunakan plugin itu lagi, Anda perlu menginstal ulang dan memberi otorisasi ulang.

## FAQ

### Apakah plugin menghabiskan credit keanggotaan saya?
Sebagian ya. Saat Kimi memanggil alat atau layanan plugin untuk menyelesaikan tugas, credit terpakai berdasarkan penggunaan aktual; plugin tanpa biaya pemanggilan tidak menimbulkan biaya tambahan.

### Bisakah saya menggunakan beberapa plugin sekaligus?
Bisa. Anda dapat memanggil beberapa plugin sekaligus melalui “/” atau **+**.

### Mengapa saya tidak melihat plugin tertentu?
Plugin yang tersedia bervariasi menurut wilayah (domestik / luar negeri) dan platform; selain itu, beberapa plugin hanya tersedia untuk pengguna pribadi atau enterprise.

### Bisakah saya menggunakan plugin dari ChatGPT, Claude, atau platform lain?
Bisa. Lihat [Cara Membuat Plugin Pribadi](/plugins-and-skills/create): berikan file plugin atau tautan proyek yang sudah ada dari platform lain ke Plugin Builder, lalu ikuti instruksinya untuk mengonversinya menjadi plugin Kimi.
