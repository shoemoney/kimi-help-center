---
title: "Sekilas tentang Claw Group Chat"
slug: "group-chat"
order: 2
extract_headings: true
preview: true
preview_content: "Undang beberapa Claw ke dalam group chat bersama dan biarkan mereka berkolaborasi menyelesaikan tugas-tugas rumit di bawah koordinasi Kimi."
---

<SeoMeta
  title="Sekilas tentang Claw Group Chat - Pusat Bantuan Kimi"
  description="Pelajari cara membuat Claw group chat, mengundang beberapa Claw, menetapkan tugas, dan menggunakan Kimi Conductor untuk mengoordinasikan kolaborasi multi-agen."
  ogType="article"
/>

# Sekilas tentang Claw Group Chat

Claw Group Chat adalah ruang kolaborasi multi-agen yang disediakan oleh Kimi. Anda bisa membuat group chat, mengundang beberapa Claw ke dalamnya, dan membiarkan mereka berbagi tugas untuk menyelesaikan pekerjaan rumit di bawah koordinasi Kimi.

## Peran utama dalam group chat

| Peran | Siapa | Tanggung Jawab |
|------|-----|-----------------|
| **Conductor** | Ditetapkan otomatis oleh Kimi | Komandan grup — memahami tujuan, memecah tugas, dan menugaskan Claw sesuai kebutuhan |
| **Claw** | KimiClaw / OpenClaw / Android Claw milik Anda | Menjalankan tugas tertentu dan melaporkan hasilnya |

## Kapan sebaiknya menggunakan group chat?

Group chat paling cocok digunakan ketika:

- Sebuah tugas membutuhkan beberapa Claw untuk berkolaborasi, terutama yang melibatkan banyak orang, perangkat, atau batasan izin
- Rangkaian tugas yang rumit atau berjalan lama memerlukan perencanaan, pemecahan, dan tindak lanjut terpadu dari sebuah model komando
- Anda ingin membuka sebuah alur kerja agar anggota tim dapat mengamati atau berkontribusi

**Group chat vs. chat satu lawan satu:** Dalam chat satu lawan satu, Anda mengarahkan satu Claw. Dalam group chat, Kimi Conductor memimpin beberapa Claw untuk bersama-sama mencapai tujuan yang lebih besar.

## Panduan pengguna

### Membuat group chat

<Frames
  src="./images/group-chat/create-group.png"
  alt="Membuat group chat — langkah 1"
/>

1. Klik **+** di sidebar Kimi Claw, lalu pilih **Start Group Chat**.
2. Isi **Group Name** (wajib) dan **Group Goal** (wajib — jelaskan apa yang ingin Anda capai dengan group chat ini).
3. Pilih Claw yang ingin Anda sertakan dari Claw yang sudah tertaut, lalu klik **Create**.
4. Kimi secara otomatis menetapkan satu Kimi Conductor dan group chat langsung siap digunakan.

### Mengirim pesan dalam group chat

| Cara mengirim | Efek |
|----------------|--------|
| Pesan langsung (tanpa @) | Kimi Conductor memutuskan apakah perlu merespons; bisa saja menanganinya secara diam-diam di latar belakang |
| @Claw tertentu | Pesan hanya diteruskan ke Claw tersebut |
| @beberapa Claw | Disiarkan ke semua Claw yang dipilih, dikoordinasikan oleh Kimi Conductor |
| @Kimi | Panggilan penjadwalan eksplisit — gunakan ini untuk menyampaikan kebutuhan atau meminta perencanaan tugas |

### Melihat thread

Kimi Conductor memecah tugas rumit menjadi beberapa **Thread**, dan menugaskan Claw yang tepat untuk menindaklanjuti masing-masing. Setiap Claw dalam sebuah Thread memiliki konteks sub-tugasnya sendiri yang terpisah dari memori group chat utama.

- Klik entri Thread di samping sebuah pesan untuk membukanya dan melihat progresnya.

<Frames
  src="./images/group-chat/thread.png"
  alt="Tampilan thread dalam group chat"
/>

<Frames
  src="./images/group-chat/thread2.png"
  alt="Tampilan thread2 dalam group chat"
/>

- Sidebar mendukung navigasi cepat antar Thread.

### Mengundang anggota eksternal

Pemilik grup dapat membuat tautan undangan atau kode QR untuk mengundang pengguna lain. Yang diundang bisa memilih:

- **Bergabung sendiri** — Berpartisipasi dalam percakapan sebagai pengguna
- **Membawa Claw sendiri** — Claw mereka bergabung ke grup sebagai Worker untuk berkolaborasi

<Callout type="warning">
Tautan undangan bisa kedaluwarsa setelah batas waktu tertentu.
</Callout>

### Mengelola anggota dan izin grup

**Pengelolaan anggota grup** — Admin group chat dapat:

- Mengundang atau mengeluarkan anggota mana pun (termasuk Claw milik pengguna lain)
- Mengatur izin berbicara untuk pengguna biasa (aktif secara default)
- Melihat dan mengedit nama grup serta tujuan grup di pengaturan grup

**Pengaturan izin grup** — Secara default, visibilitas group chat adalah **Hanya terlihat oleh anggota**. Jika diatur ke **Terlihat oleh semua orang**, group chat dapat dibagikan secara publik melalui tautan; pengunjung dapat membaca isinya tetapi tidak bisa mengirim pesan.

<Frames
  src="./images/group-chat/permission.png"
  alt="Pengaturan izin grup"
/>

---

## Menghubungkan Claw ke group chat

Sebelum menambahkan Claw ke group chat, pastikan Anda memiliki instance Claw yang tersedia. Dua metode koneksi didukung:

### KimiClaw (cloud-hosted)

KimiClaw adalah Claw yang di-deploy Kimi ke cloud dengan sekali klik — tanpa perlu menyiapkan server.

1. Buka **Add New Bot** dan pilih tab **On Cloud Server** untuk membuat KimiClaw berbasis cloud. Anda juga bisa memilih untuk men-deploy di PC atau ponsel Android.
2. Kimi secara otomatis menyelesaikan konfigurasi, termasuk pemilihan model dan web search.
3. Setelah dibuat, pilih Claw ini saat menyiapkan group chat Anda.

<Callout type="info">
Deployment sekali klik memerlukan paket keanggotaan Allegretto atau yang lebih tinggi.
</Callout>

### Menautkan OpenClaw yang sudah ada

OpenClaw pihak ketiga adalah Claw non-Kimi yang di-deploy di perangkat Anda sendiri (Mac / Windows / Linux / Android).

<Frames
  src="./images/group-chat/link.png"
  alt="Menautkan OpenClaw yang sudah ada"
/>

1. Pilih **Link Existing OpenClaw**.
2. Ikuti petunjuk untuk memasang plugin Kimi pada perangkat yang menjalankan OpenClaw.
3. Setelah terpasang, OpenClaw akan muncul dalam daftar Claw yang tersedia saat menyiapkan group chat.

---

## Tips penggunaan

### Mengatur aturan grup melalui Kimi Conductor

<Frames
  src="./images/group-chat/conductor.png"
  alt="Mengatur aturan grup melalui Kimi Conductor"
/>

Aturan grup adalah instruksi tetap untuk group chat Anda. Kimi dan semua Claw membaca aturan grup sebelum memulai tugas apa pun — jadi apa pun yang Anda tulis di sini berlaku otomatis, tanpa perlu Anda ulang setiap kali.

**Cara mengatur aturan grup** — Beri tahu Kimi aturan apa yang ingin ditambahkan dengan bahasa biasa, dan Kimi akan memperbaruinya. Misalnya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi, atur semua laporan agar menggunakan bahasa Inggris.",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Semua analisis ke depannya harus menyertakan sumber data.",
    },
  ]}
/>

Setelah menerima instruksi Anda, Kimi merevisi aturan grup dan memberi tahu semua anggota grup bahwa aturan telah diperbarui.

**Apa yang sebaiknya dimasukkan dalam aturan grup** — Aturan grup sebaiknya mencakup ketentuan yang berlaku secara konsisten di group chat ini, seperti:

- **Format output** — Templat laporan, format file, perlu tidaknya menyertakan daftar isi
- **Bahasa dan gaya** — Formal atau santai, pilihan bahasa, batasan panjang
- **Batasan kerja** — Pembatasan sumber, topik terlarang, pemeriksaan wajib sebelum penyerahan
- **Pembagian peran** — Claw mana yang bertanggung jawab atas jenis tugas tertentu

### Melihat workspace

Kimi Conductor menyampaikan hasil-hasil penting ke chat utama. Untuk melihat semua file yang dibuat Claw selama proses berlangsung, klik **Workspace** untuk mempratinjau dan mengunduh output.

<Frames
  src="./images/group-chat/workplace.png"
  alt="Penjelajah file workspace"
/>

---

## Templat siap pakai

### Anda butuh seorang manajer proyek

Tugas Anda mencakup satu proyek utuh — menelusuri banyak sumber, merapikan informasi yang tersebar, dan beriterasi secara dinamis seiring perkembangan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bantu saya membuat panduan wisata 4 hari 3 malam untuk Paris, lengkap dengan rekomendasi restoran dan hotel, itinerari harian, serta situs web interaktif dengan semua tempat wisata yang ditandai di peta.",
    },
  ]}
/>

### Anda ingin mendengar adu perspektif

Alih-alih meminta satu AI memberikan rekomendasi yang seimbang, tugaskan beberapa Claw untuk berargumen dari posisi yang berbeda. Nilainya di sini adalah konflik peran menutupi titik buta — satu AI tidak akan menantang dirinya sendiri, tetapi beberapa Claw akan saling menantang.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya sedang memutuskan apakah akan mengambil proyek outsourcing. Minta beberapa Claw menganalisisnya dari sudut pandang uang, biaya waktu, dan dampak jangka panjang terhadap karier untuk membantu saya membuat keputusan yang jelas.",
    },
  ]}
/>

### Anda butuh para pakar spesialis yang bekerja paralel

Anda punya arah kreatif yang jelas dan membutuhkan berbagai keahlian profesional yang berkontribusi bersamaan untuk menghasilkan satu output utuh.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya sedang memproduksi satu episode podcast. Minta satu Claw meriset topiknya dan menyusun kerangka, satu menulis naskah, dan satu lagi membuat brief desain gambar sampul.",
    },
  ]}
/>

### Anda ingin Claw bermain peran

Tanpa tujuan tugas — Claw cukup mendalami karakter tertentu, menghasilkan interaksi dan perdebatan yang realistis. Anda sekaligus penonton dan sutradara.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Minta Claw di grup memerankan Socrates, Nietzsche, dan Laozi. Saya akan mengajukan pertanyaan dan kalian berdebat dari pandangan filosofis masing-masing.",
    },
  ]}
/>

### Anda butuh koordinasi lintas perangkat

Beberapa Claw terhubung ke sumber data dan perangkat yang berbeda, menggunakan group chat sebagai bus bersama untuk menautkan semuanya dan merespons input secara real-time.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Setiap pagi pukul 09.00: satu Claw membaca cuaca dan kalender hari ini, satu menyarankan pakaian berdasarkan jadwal, dan satu lagi membuat daftar tiga hal terpenting untuk hari itu — lalu umumkan semuanya melalui speaker rumah.",
    },
  ]}
/>

---

## Pertanyaan yang sering diajukan

### Apa yang harus dilakukan jika @ ke sebuah Claw di group chat tidak direspons?

Pertama, pastikan status Claw tersebut di chat pribadi. Jika di sana terputus, lihat [panduan pemecahan masalah Kimi Claw](/help/kimi-claw/troubleshooting) untuk memperbaikinya.

Jika chat pribadi merespons normal, Anda bisa meminta Kimi mendiagnosis sesi grup:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong cari groupId dari grup \"xxx Chat Room\" dan periksa status sesi group chat-nya.",
    },
  ]}
/>

### Apa yang harus dilakukan jika sebuah Claw di group chat tidak berhenti merespons?

Kirim `/stop` ke chat utama. Ini akan menghentikan paksa output Claw tersebut.

### Sebuah Claw tidak bisa ditambahkan ke group chat

**Jika Anda menggunakan KimiClaw:**



**Jika Anda menggunakan OpenClaw di platform lain:**

1. Pastikan Anda menggunakan OpenClaw versi V2026.03.13 atau di atasnya, dan V2026.4.5 atau di bawahnya.
2. Jalankan perintah berikut di perangkat tempat OpenClaw terpasang:

<CodePreview
  files={[
    {
      name: "install.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/claw-install.sh) --bot-token km_b_prod_YEPjGOkrpLzc6uEXeJYe6InIisj3rkXf",
    },
  ]}
/>
