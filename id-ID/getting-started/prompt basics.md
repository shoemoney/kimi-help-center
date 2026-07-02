---
title: "Dasar-dasar prompt"
slug: "what-is-prompt"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Dasar-dasar prompt - Pusat Bantuan Kimi"
  description="Prompt adalah instruksi teks yang Anda kirimkan ke Kimi — bisa berupa pertanyaan, deskripsi, sekumpulan persyaratan, atau bahkan ringkasan tugas yang lengkap. Kimi menggunakan..."
/>

# Dasar-dasar prompt

<Callout type="info">
Prompt adalah instruksi teks yang Anda kirimkan ke Kimi — bisa berupa pertanyaan, deskripsi, sekumpulan persyaratan, atau bahkan ringkasan tugas yang lengkap. Kimi menggunakan prompt Anda untuk memahami maksud, menyusun jawaban, dan menjalankan tugas.

Singkatnya: **cara Anda bertanya menentukan cara Kimi menjawab.** Prompt yang jelas dan spesifik hampir selalu menghasilkan jawaban yang lebih akurat dan bernilai.
</Callout>

## Empat unsur inti prompt yang baik

### 1. Tentukan peran dan konteks

Dengan memberi tahu Kimi siapa Anda dan dalam situasi apa Anda berada, Kimi dapat menyesuaikan kedalaman dan nada yang tepat.

| Prompt Samar | Prompt Lebih Baik |
|-------------|--------------|
| Tulis artikel tentang AI | Saya seorang editor media teknologi. Saya butuh artikel penjelasan tentang AI sepanjang 2.000 kata untuk pembaca umum, ditulis dengan gaya yang mudah dipahami dan menarik |
| Bantu saya menganalisis data | Saya seorang analis pasar. Tolong analisis tingkat konversi per saluran dalam file Excel ini, dengan fokus pada perubahan dari bulan ke bulan |

### 2. Jelaskan tugas secara spesifik

Semakin spesifik deskripsi Anda, semakin sedikit putaran revisi yang Anda butuhkan. Deskripsi tugas yang baik biasanya mencakup:

- **Apa yang harus dilakukan**: Tindakan yang jelas (menganalisis, meringkas, menerjemahkan, membuat, membandingkan…)
- **Format keluaran**: Tabel, daftar, paragraf, kode, Markdown…
- **Cakupan dan batasan**: Jumlah kata, jumlah item, rentang waktu, cakupan geografis…
- **Persyaratan kualitas**: Nada akademis, percakapan santai, ringkas, mendetail…

<ComparisonBlock
  wrong={"Ringkas artikel ini"}
  correct={"Ringkas artikel ini dalam 3 poin, masing-masing tidak lebih dari 50 kata, dalam bahasa Inggris"}
/>

### 3. Berikan contoh atau referensi

Ketika Anda memiliki ekspektasi format tertentu, memberi Kimi sebuah contoh (few-shot) sangatlah efektif:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tolong susun catatan rapat dalam format ini:\n\nTopik Rapat: xxx\nPeserta: xxx\nKeputusan Penting:\nxxx\nxxxItem Tindakan:\n[ ] xxx (Penanggung Jawab: xxx, Tenggat: xxx)",
    },
  ]}
/>

### 4. Pecah tugas kompleks menjadi langkah-langkah
Untuk tugas yang rumit, bagi pekerjaan menjadi langkah-langkah kecil dan pandu Kimi melaluinya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Saya memerlukan laporan analisis kompetitif. Ikuti langkah-langkah berikut:\nSebutkan 3 pesaing domestik teratas dan fitur inti mereka\nBandingkan strategi penetapan harga mereka\nAnalisis kelebihan dan kekurangan setiap produk\nBerikan rekomendasi diferensiasi untuk produk kami",
    },
  ]}
/>

## Tips praktis
### Manfaatkan tindak lanjut dan iterasi
Tidak puas dengan jawaban pertama? Cukup tindak lanjuti — tidak perlu menyampaikan ulang seluruh konteks:
- "Tolong uraikan lebih lanjut poin ke-2"
- "Buat nadanya lebih formal"
- "Tambahkan sumber data"
- "Analisis ulang dari sudut pandang yang berbeda"
### Manfaatkan file dan tautan
Kimi mendukung unggahan PDF, dokumen Word, file Excel, gambar, dan banyak lagi. Anda juga bisa langsung menempelkan URL. Menggabungkan file dengan prompt Anda meningkatkan efisiensi secara drastis:
| Tugas | Contoh Prompt |
|------|---------------|
| Ringkas PDF | "Ringkas poin-poin penting dari PDF ini" |
| Analisis data | "Analisis tren penjualan berdasarkan data Excel ini" |
| Ekstrak dari URL | "Baca artikel di tautan ini dan ekstrak poin-poin utamanya" |

### Tentukan format keluaran
Beri tahu Kimi persis format yang Anda inginkan:
| Kebutuhan | Contoh Prompt |
|------|---------------|
| Tabel perbandingan | "Bandingkan kelebihan dan kekurangan A dan B dalam tabel" |
| Keluaran kode | "Implementasikan ini dalam Python dengan komentar" |
| Daftar terstruktur | "Susun sebagai daftar bernomor, setiap item di bawah 20 kata" |
| Markdown | "Keluarkan dalam format Markdown dengan hierarki heading" |

### Gunakan memori untuk preferensi yang menetap
Jika Anda memiliki preferensi dan persyaratan yang berulang, gunakan fitur **Memory** Kimi untuk mengingatnya dalam jangka panjang:
- "Ingat bahwa saya seorang frontend engineer yang lebih suka stack React"
- "Selalu balas dalam bahasa Inggris menggunakan format Markdown"
- "Sertakan contoh kode saat menjawab pertanyaan teknis"

<Callout type="tip">
Dengan begini Anda tidak perlu mengulang-ulang — Kimi akan otomatis menerapkan preferensi ini dalam percakapan berikutnya.
</Callout>

## Kesalahan umum
| Kesalahan | Pendekatan Lebih Baik |
|---------|----------------|
| Menjejalkan beberapa tugas yang tidak berkaitan dalam satu pesan | Mulai sesi baru untuk setiap tugas mandiri agar konteks tetap rapi |
| Prompt yang terlalu samar (mis. "tulis sesuatu untuk saya") | Tentukan apa yang ditulis, untuk siapa, dengan gaya apa, dan sepanjang apa |
| Mengharapkan keluaran sempurna pada percobaan pertama | Buat draf terlebih dahulu, lalu sempurnakan lewat tindak lanjut |
| Tidak memeriksa fakta dari keluaran AI | Selalu verifikasi tanggal, data, dan klaim faktual |

## Templat untuk memulai cepat
Berikut beberapa templat prompt siap pakai — salin, sesuaikan, dan jalankan:
**Penulisan**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tulis sebuah [article type] tentang [topic] untuk [target audience], sekitar [xxx] kata.\nPersyaratan: [style/format/focus areas]",
    },
  ]}
/>

**Analisis**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analisis [subject], dengan fokus pada [key dimensions].\nFormat keluaran: [table/chart/report]\nSertakan kesimpulan dan rekomendasi.",
    },
  ]}
/>

**Terjemahan**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Terjemahkan teks berikut ke [target language], dengan mempertahankan nada [academic/conversational/business].\nUntuk terminologi khusus bidang, sertakan istilah aslinya dalam tanda kurung.",
    },
  ]}
/>

<Callout type="info">
Kuasai konsep inti dan teknik ini, maka Anda akan berkolaborasi dengan Kimi jauh lebih efektif — menjadikan AI sebagai alat produktivitas yang sesungguhnya.
</Callout>
