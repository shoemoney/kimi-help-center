---
title: "Cara memilih: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent"
slug: "model-mode-selection"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Cara memilih model dan mode Kimi: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent - Pusat Bantuan Kimi"
  description="Pahami tiga pilihan model Kimi (K2.6 / K3 / K3 Cluster), tingkat intensitas berpikir (Standar / Lanjutan / Ekstrem), serta perbedaan antara Agent dan Agent Cluster, agar Anda dapat memilih mode terbaik untuk setiap skenario."
/>

# Cara memilih: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent

Kimi akan menentukan sendiri apakah perlu menggunakan internet berdasarkan pertanyaan Anda, jadi Anda tidak perlu mengaktifkannya secara manual. Yang perlu Anda pilih adalah **model** dan **intensitas berpikir**; untuk tugas yang kompleks, Anda juga dapat menggunakan **Agent** dan **Agent Cluster**.

## Tiga pilihan model

Gunakan pemilih model di atas kotak input untuk memilih:

| Model | Intensitas berpikir | Paling cocok untuk | Credit |
|---|---|---|---|
| **K2.6** | Standar / Lanjutan | Percakapan cepat dan tanya jawab, dengan respons yang lebih cepat | **Tidak memakai credit keanggotaan di Chat** |
| **K3** | Standar / Lanjutan / Ekstrem | Percakapan dan tugas Agent, dengan kemampuan keseluruhan paling kuat | Ditagihkan ke credit |
| **K3 Cluster** | Standar / Lanjutan / Ekstrem | Pencarian skala besar, pemrosesan batch, dan penyelesaian tugas bervolume tinggi sekaligus | Ditagihkan ke credit |

- **K3** dapat menghasilkan dokumen yang dapat diedit secara end-to-end, seperti `.pptx`, `.docx`, `.xlsx`, dan `.pdf`; **K2.6** dioptimalkan untuk tanya jawab cepat dan hanya menghasilkan teks, seperti kerangka PPT, isi teks Word, kode, dan lainnya.
- Untuk **pembuatan gambar / video / audio**, klik “+” → Plugins, lalu pilih fitur yang relevan dan gunakan bersama **K3**.

<Callout type="info">
K2.6 yang gratis dan tidak memakai credit hanya berlaku di Chat (pemilih model di atas kotak input). Saat digunakan sebagai K2.6 Agent di dalam Kimi Work, credit keanggotaan tetap dipakai.
</Callout>

## Intensitas berpikir: Standar / Lanjutan / Ekstrem

Semakin tinggi intensitas berpikir, semakin menyeluruh penalaran model dan, secara umum, semakin cerdas hasilnya—tetapi juga **menggunakan lebih banyak token**.

- Jika Anda mengutamakan **kecepatan dan penggunaan credit yang lebih rendah** → pilih **Standar**;
- Jika Anda memerlukan **penalaran yang lebih kuat** untuk analisis kompleks atau masalah sulit → pilih **Lanjutan** atau **Ekstrem** (Ekstrem didukung oleh K3 / K3 Cluster).

## Agent dan Agent Cluster

- **Agent serbaguna**: Secara otomatis merencanakan dan menyelesaikan tugas, termasuk pembuatan situs web, pembuatan PPT, Deep Research (riset mendalam), serta pemrosesan dokumen dan spreadsheet.
- **Agent Cluster**: Mendukung lebih dari 4.000 pemanggilan tool secara paralel dan dapat mengoordinasikan hingga 300 sub-agent (Sub-agents) secara mandiri dalam paralel. Ideal untuk tugas berskala besar seperti **pencarian skala besar, penulisan panjang, dan pemrosesan batch**.

## Pilihan sesuai skenario

- **Tanya jawab cepat dan percakapan sehari-hari** → K2.6 (tidak memakai credit di Chat).
- **Percakapan kompleks, penulisan dokumen / pembuatan PPT dan spreadsheet / tugas multi-langkah** → K3.
- **Pencarian skala besar, pemrosesan batch, dan penulisan yang sangat panjang** → K3 Cluster.
- **Untuk menghemat credit** → gunakan K2.6, atau atur intensitas berpikir ke “Standar”.

## FAQ

### Apakah “Thinking Mode” tidak tersedia lagi?
Kimi telah menggabungkan “percakapan” dan “Agent” ke dalam satu pengalaman, sehingga keduanya tidak lagi menjadi mode terpisah. “Berpikir” kini dikendalikan dengan **memilih model dan intensitas berpikir**—misalnya, menggunakan K3 dengan intensitas berpikir yang lebih tinggi akan memberi Anda penalaran yang lebih mendalam.

### Apa perbedaan antara K2.6 dan K3?
K2.6 dioptimalkan untuk tanya jawab cepat, merespons lebih cepat, dan tidak memakai credit keanggotaan di Chat. K3 memiliki kemampuan keseluruhan paling kuat, unggul dalam percakapan kompleks dan tugas Agent, dapat menghasilkan dokumen yang dapat diedit secara end-to-end, dan ditagihkan ke credit.

### Apa perbedaan antara K3 dan K3 Cluster?
K3 cocok untuk percakapan reguler dan tugas Agent. K3 Cluster menggunakan paralelisme skala besar—ribuan pemanggilan tool dan ratusan sub-agent—untuk menangani tugas bervolume tinggi seperti **pencarian skala besar, pemrosesan batch, dan penulisan yang sangat panjang**.

### Berapa banyak konten yang dapat diproses dalam satu giliran?
K2.6 mendukung sekitar 128K token konteks satu giliran (kira-kira 50.000–60.000 karakter Mandarin); K3 menyediakan jendela konteks 1 juta token (memerlukan manfaat keanggotaan tingkat tertinggi). Lihat [Apa yang harus saya lakukan jika percakapan melebihi 200.000 karakter Mandarin?](/others/chat-issues) untuk detailnya.
