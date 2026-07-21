---
title: "Cara memilih: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent"
slug: "model-mode-selection"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Cara memilih model dan mode Kimi: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent - Pusat Bantuan Kimi"
  description="Pahami tiga opsi model Kimi (K2.6 / K3 / K3 Cluster), level intensitas berpikir (Standard / Advanced / Extreme), serta perbedaan antara Agent dan Agent Cluster, agar Anda dapat memilih mode terbaik untuk setiap skenario."
/>

# Cara memilih: K2.6 / K3 / K3 Cluster, intensitas berpikir, dan Agent

Kimi akan menentukan sendiri apakah perlu menggunakan internet berdasarkan pertanyaan Anda, jadi Anda tidak perlu mengaktifkannya secara manual. Yang perlu Anda pilih adalah **model** dan **intensitas berpikir**; untuk tugas yang kompleks, Anda juga dapat menggunakan **Agent** dan **Agent Cluster**.

## Tiga opsi model

Gunakan pemilih model di atas kotak input untuk memilih:

| Model | Intensitas berpikir | Paling cocok untuk | Credit |
|---|---|---|---|
| **K2.6** | Standard / Advanced | Percakapan dan tanya jawab cepat, dengan respons yang lebih singkat | **Tidak menggunakan credit keanggotaan** |
| **K3** | Standard / Advanced / Extreme | Percakapan dan tugas Agent, dengan kemampuan keseluruhan paling kuat | Dibebankan ke credit |
| **K3 Cluster** | Standard / Advanced / Extreme | Pencarian skala besar, pemrosesan batch, dan penyelesaian tugas bervolume tinggi dalam satu kali jalan | Dibebankan ke credit |

- **K3** dapat menghasilkan dokumen yang dapat diedit dari awal hingga akhir, seperti `.pptx`, `.docx`, `.xlsx`, dan `.pdf`; **K2.6** dioptimalkan untuk tanya jawab cepat dan hanya menghasilkan teks, seperti kerangka PPT, isi dokumen Word, kode, dan lainnya.
- Untuk **pembuatan gambar / video / audio**, klik “+” → Plugins, lalu pilih fitur yang relevan dan gunakan bersama **K3**.

## Intensitas berpikir: Standard / Advanced / Extreme

Semakin tinggi intensitas berpikir, semakin menyeluruh penalaran model dan, secara umum, semakin cerdas hasilnya—tetapi ini juga **menggunakan lebih banyak token**.

- Jika Anda menginginkan **kecepatan dan penggunaan credit yang lebih rendah** → pilih **Standard**;
- Jika Anda memerlukan **penalaran yang lebih kuat** untuk analisis kompleks atau masalah sulit → pilih **Advanced** atau **Extreme** (Extreme didukung oleh K3 / K3 Cluster).

## Agent dan Agent Cluster

- **Agent serbaguna**: Secara otomatis merencanakan dan menyelesaikan tugas, termasuk pembuatan situs web, pembuatan PPT, Deep Research (riset mendalam), serta pemrosesan dokumen dan spreadsheet.
- **Agent Cluster**: Mendukung lebih dari 4.000 panggilan tool secara paralel dan dapat mengoordinasikan hingga 300 sub-agent (Sub-agents) secara mandiri dalam waktu bersamaan. Ideal untuk tugas skala besar seperti **pencarian skala besar, penulisan panjang, dan pemrosesan batch**.

## Pilihan berdasarkan skenario

- **Tanya jawab cepat dan percakapan sehari-hari** → K2.6 (tidak menggunakan credit).
- **Percakapan kompleks, penulisan dokumen / pembuatan PPT dan spreadsheet / tugas multi-langkah** → K3.
- **Pencarian skala besar, pemrosesan batch, dan penulisan sangat panjang** → K3 Cluster.
- **Untuk menghemat credit** → gunakan K2.6, atau atur intensitas berpikir ke “Standard”.

## FAQ

### Apakah “Thinking Mode” tidak tersedia lagi?
Kimi telah menggabungkan “percakapan” dan “Agent” ke dalam satu pengalaman, sehingga keduanya tidak lagi menjadi mode terpisah. “Berpikir” kini dikendalikan dengan **memilih model dan intensitas berpikir**—misalnya, menggunakan K3 dengan intensitas berpikir yang lebih tinggi akan memberi Anda penalaran yang lebih menyeluruh.

### Apa perbedaan antara K2.6 dan K3?
K2.6 dioptimalkan untuk tanya jawab cepat, merespons lebih cepat, dan tidak menggunakan credit keanggotaan. K3 memiliki kemampuan keseluruhan paling kuat, unggul dalam percakapan kompleks dan tugas Agent, dapat menghasilkan dokumen yang dapat diedit dari awal hingga akhir, dan dibebankan ke credit.

### Apa perbedaan antara K3 dan K3 Cluster?
K3 cocok untuk percakapan reguler dan tugas Agent. K3 Cluster menggunakan paralelisme skala besar—ribuan panggilan tool dan ratusan sub-agent—untuk menangani tugas bervolume tinggi seperti **pencarian skala besar, pemrosesan batch, dan penulisan sangat panjang**.

### Berapa banyak konten yang dapat diproses dalam satu giliran?
K2.6 mendukung sekitar 128K token untuk konteks satu giliran (kurang lebih 50.000–60.000 karakter Mandarin); K3 menyediakan jendela konteks 1 juta token (memerlukan manfaat keanggotaan tingkat tertinggi). Lihat [Apa yang harus saya lakukan jika percakapan melebihi 200.000 karakter Mandarin?](/others/chat-issues) untuk detailnya.
