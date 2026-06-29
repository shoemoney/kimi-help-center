---
title: "Batas percakapan"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Batas percakapan - Kimi Help Center"
  description="Ketika konteks percakapan menjadi terlalu panjang dan melampaui batas token model, Kimi Claw bisa berhenti merespons atau menampilkan pesan error."
/>

# Batas percakapan

Ketika konteks percakapan menjadi terlalu panjang dan melampaui batas token model, Kimi Claw bisa berhenti merespons atau menampilkan pesan error.

**Cara mengatasinya：**

- Kirim `/new` untuk memulai percakapan baru dan membersihkan konteks saat ini.
- Jika error tetap muncul setelah `/new`, kemungkinan terlalu banyak Skills yang dimuat ke memori. Coba:
  - `/skills` — tinjau skill yang terpasang dan hapus yang tidak Anda perlukan.
  - `/compact` — padatkan konteks saat ini untuk mengosongkan ruang.
  - `/reset` — reset Kimi Claw sepenuhnya sebagai langkah terakhir.

## Mencapai rate limit API?

Ini berarti Anda telah mencapai batas frekuensi permintaan. Tunggu sebentar lalu coba lagi.

**Untuk memeriksa quota dan rate limit Anda:**

1. Buka [kimi.com/code](https://kimi.com/code).
2. Buka **Console**.
3. Klik **View Quota & Rate Limits** untuk melihat penggunaan dan batas Anda saat ini.

Jika Anda sering mencapai rate limit, pertimbangkan untuk merentangkan jeda antar-tugas atau meningkatkan ke tingkat keanggotaan yang lebih tinggi demi throughput yang lebih besar.
