---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Widgets Kimi Work - Pusat Bantuan Kimi"
  description="Kenali Widgets Kimi Work: halaman interaktif yang dihasilkan model langsung di dalam chat. Ikat widget task untuk membuat live widget yang terus diperbarui, dan simpan widget ke Dashboard Anda."
/>

# Widgets

Widget adalah halaman interaktif yang dihasilkan oleh model dan langsung ditampilkan di dalam chat. Anda tidak perlu memberikan instruksi hasil akhir secara eksplisit — model akan membuat widget saat sesuai dengan skenario (misalnya menampilkan peta, menyusun draf email, menata resep, atau memvisualisasikan data), membantu Anda memahami jawaban dengan lebih cepat dan intuitif.

Widget dapat terhubung ke data lokal atau plugin eksternal untuk pembaruan berkelanjutan, dan dapat disimpan ke [Dashboard](/kimi-work/dashboard) untuk dilihat dan dikelola dalam jangka panjang.

## Membuat Widget

1. Jelaskan kebutuhan Anda dalam bahasa alami di chat, misalnya:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Buatkan saya widget rangkuman berita teknologi AS harian, diperbarui setiap hari pukul 9 pagi",
    },
  ]}
/>

2. Selama proses pembuatan, Anda dapat menyaksikan halaman widget terbentuk selangkah demi selangkah;
3. Setelah selesai dibuat, widget langsung siap digunakan di dalam chat.

## Widget Task dan Live Widget

- **Widget Task**: tugas yang berjalan otomatis saat kondisi tertentu terpenuhi — dapat dipicu sesuai jadwal atau oleh suatu peristiwa.
- **Live Widget**: widget yang terikat pada widget task, yang kontennya diperbarui otomatis setiap kali tugas dijalankan. Misalnya, setelah widget "Rangkuman Berita Teknologi AS Harian" diikat ke tugas yang berjalan setiap pagi, kontennya akan diperbarui otomatis setiap hari.

<Callout type="info">
Ada batas jumlah widget task yang dapat berjalan bersamaan, dan batasnya berbeda-beda tergantung paket. Saat mencapai batas, jeda beberapa tugas dari halaman Dashboard sebelum membuat yang baru.
</Callout>

## Menyimpan ke Dashboard

Setelah widget dibuat, arahkan kursor ke widget lalu pilih "Save to Dashboard" untuk menyimpannya ke dashboard. Satu widget dapat berada di beberapa dashboard sekaligus.

Di Dashboard, Anda juga dapat melihat tugas yang terikat pada live widget, mengaktifkan atau menonaktifkannya, dan memeriksa 10 run terakhirnya. Lihat [Dashboard](/kimi-work/dashboard).
