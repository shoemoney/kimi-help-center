---
title: "Apa itu Skills?"
slug: "what-are-skills"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Apa itu Skills? - Pusat Bantuan Kimi"
  description="Pelajari cara kerja, jenis, dan penggunaan Kimi Skills. Skills adalah paket pengetahuan yang dapat digunakan kembali untuk memperluas kemampuan Agent dalam tugas tertentu, berisi instruksi, praktik terbaik, skrip, dan sumber daya."
  ogType="article"
/>

# Apa itu Skills?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Skills adalah paket pengetahuan yang dapat digunakan kembali untuk memperluas batas kemampuan agen AI. Setiap skill mencakup:

- **Pendekatan kerja & panduan operasional** — Metodologi yang disesuaikan dengan jenis tugas tertentu.
- **Praktik terbaik & standar** — Standar industri dan protokol internal yang harus diikuti.
- **Skrip, alat & sumber daya rujukan** — Alat dan materi opsional untuk membantu pelaksanaan.

## Cara menggunakannya?

Di awal percakapan, Agent akan melihat daftar skill yang tersedia beserta nama dan deskripsi singkatnya. Jika sebuah skill relevan dengan tugas saat ini, Agent akan memuat instruksi lengkapnya dan menjalankannya sesuai kebutuhan.

## Perjalanan Pengguna

Dari menemukan skill hingga membuat skill sendiri, alur lengkapnya adalah sebagai berikut:

1. **Temukan skill** — Jelajahi skill resmi dan rekomendasi di panel Skills untuk menemukan yang sesuai dengan skenario Anda.
2. **Instal skill** — Klik tombol "+" untuk menambahkan skill secara instan.
3. **Panggil skill** — Ketik `/` di kotak obrolan untuk memilih skill, atau biarkan Kimi memicunya secara otomatis berdasarkan pertanyaan Anda.
4. **Buat skill sendiri** — Jika skill yang ada belum memenuhi kebutuhan Anda, unggah dokumen atau jelaskan kebutuhan Anda untuk membuat skill khusus, atau gunakan `/skill-creator` untuk membangunnya melalui dialog.

## Bagaimana Cara Kerja Skills?

Ketika Anda mengirim permintaan, Kimi Agent menilai apakah tugas saat ini melibatkan skill tertentu. Jika ya, Kimi secara otomatis memuat skill yang sesuai dan mengikuti instruksinya untuk menyelesaikan tugas.

Skill hanya dimuat ketika relevan dengan tugas, sehingga tidak mengganggu konteks percakapan lainnya.

## Skills vs. prompt langsung: Apa bedanya?

Dengan contoh penulisan laporan mingguan:
- **Prompt Langsung**: Minta langsung ke Kimi Agent, lalu Kimi menulis berdasarkan pemahamannya sendiri tentang formatnya.
- **Menggunakan Skills**: Setelah memasang skill laporan mingguan, setiap hasil mengikuti struktur, nada, dan panjang yang sudah Anda tetapkan tanpa perlu mengulang instruksi.

| | Prompt langsung | Menggunakan skills |
|---|---|---|
| **Perlu menjelaskan kebutuhan setiap kali?** | Ya | Tidak, diterapkan otomatis |
| **Kestabilan format hasil** | Bervariasi | Konsisten sesuai definisi |
| **Skenario terbaik** | Tugas sekali pakai dan sementara | Alur kerja berulang dan tetap |
| **Perlu penyiapan?** | Tidak | Perlu dibuat atau diinstal |

## Jenis Skill

### (1) Skill resmi & skill rekomendasi

**Skill resmi**: Dibuat dan dikelola oleh Moonshot AI, tersedia untuk semua pengguna. Kimi memicunya secara otomatis dalam skenario yang relevan.

Skill resmi yang umum meliputi:
- `docx` — Membuat dan mengedit dokumen Word, cocok untuk segala tugas .docx termasuk pembuatan dokumen, pengeditan, komentar, revisi, catatan kaki, daftar isi, dan konversi Markdown ke Word.
- `deep-research` — Melakukan riset mendalam dan menyusun laporan panjang menggunakan perangkat alat, memerlukan setidaknya 10 siklus pencarian iteratif, refleksi rekursif, dan visualisasi IPython yang wajib.

**Skill rekomendasi**: Skill berbasis skenario terkurasi yang dapat ditambahkan dengan satu klik, mencakup kasus penggunaan umum seperti riset investasi dan pemformatan dokumen.

Skill rekomendasi yang umum meliputi:
- `sop-writer` — Mengubah proses bisnis menjadi dokumen Standard Operating Procedure (SOP) yang lengkap, termasuk diagram alur proses, matriks RACI, langkah operasional terperinci, dan penanganan pengecualian.
- `event-etf-study` — Berawal dari sebuah konsep atau peristiwa, mengidentifikasi saham terkait, membangun indeks ETF berbobot kapitalisasi pasar, menganalisis perubahan nilai pasar selama jendela peristiwa, dan menghasilkan dasbor HTML interaktif. Digunakan saat pengguna menanyakan saham konsep, ETF konsep, analisis berbasis peristiwa, atau riset peristiwa.

**Dokumen office menjadi skill**: Unggah dokumen untuk menghasilkan skill dan mereplikasi tema gaya dengan mudah.

### (2) Skill open-source

Unduh atau instal Skills yang sesuai dari komunitas open-source, dipadukan dengan Local Agents (seperti Kimi Code) atau Cloud Agents (seperti Kimi Claw).

**Platform AI Skill Hub yang Umum**

| Platform | URL | Deskripsi |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Marketplace skill agen AI yang mengambil paket SKILL.md dari GitHub, kompatibel dengan Claude Code dan OpenAI Codex CLI |
| SkillsLLM | https://skillsllm.com | Marketplace skill agen AI open-source dengan 1.600+ skill yang telah lolos uji keamanan untuk Claude Code, Codex CLI, dan ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | Jelajahi dan distribusikan paket SKILL.md yang kompatibel dengan Claude Code, Codex CLI, dan ChatGPT |

### (3) Skill kustom

Skill kustom yang Anda buat untuk alur kerja pribadi dan tugas domain tertentu, seperti:
- Menerapkan panduan gaya tertentu pada dokumen atau presentasi.
- Membuat email atau konten komunikasi berdasarkan templat tetap.
- Menyusun notula rapat dalam format tertentu.
- Menjalankan alur kerja analisis data tertentu.
