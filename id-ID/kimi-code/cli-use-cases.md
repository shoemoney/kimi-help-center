---
title: "Kasus penggunaan umum"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Kasus penggunaan umum - Pusat Bantuan Kimi"
  description="Berikut beberapa skenario umum penggunaan Kimi Code CLI dalam pengembangan sehari-hari, masing-masing dilengkapi contoh prompt sebagai referensi."
/>

# Kasus penggunaan umum

Berikut beberapa skenario umum penggunaan Kimi Code CLI dalam pengembangan sehari-hari, masing-masing dilengkapi contoh prompt sebagai referensi.

## Membangun fitur baru

Jelaskan kebutuhan Anda dalam bahasa sehari-hari — AI akan otomatis membaca kode terkait, menulis kode baru, dan memverifikasi hasilnya.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tambahkan fitur urutkan berdasarkan tanggal pendaftaran ke halaman daftar pengguna — bagian frontend dan backend sama-sama perlu diubah",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Buat middleware rate limiter menggunakan algoritme token bucket, batasi setiap IP hingga 60 permintaan per menit",
    },
  ]}
/>

## Memperbaiki bug

Tempelkan saja pesan error langsung ke AI — ia akan otomatis menemukan akar masalah dan memberikan solusinya.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Setelah menjalankan npm test, saya mendapat error ini, tolong perbaiki:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Pipeline CI gagal pada tahap lint. Ini lognya: ... Tolong perbaiki",
    },
  ]}
/>

## Memahami sebuah proyek

Saat Anda baru bergabung ke proyek baru atau perlu memahami sepotong kode tertentu, cukup tanyakan.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bagaimana arsitektur proyek ini secara keseluruhan? Apa saja modul utamanya?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Apa fungsi src/auth/middleware.ts? Bagaimana alur autentikasinya bekerja?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Jelaskan bagaimana migrasi basis data dikelola dalam proyek ini",
    },
  ]}
/>

## Mengotomatiskan tugas-tugas kecil

Ideal untuk modifikasi kode secara massal, menambahkan dokumentasi, membuat pengujian, dan pekerjaan repetitif lainnya.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Tambahkan komentar JSDoc ke semua fungsi yang diekspor di direktori src/utils/",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Buat pengujian unit untuk semua metode publik dari class UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ganti semua deklarasi var di proyek ini dengan const atau let",
    },
  ]}
/>

## Tugas-tugas umum

Kimi Code CLI tidak terbatas pada coding — ia juga bisa menangani riset, analisis data, operasi file massal, dan banyak lagi.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Teliti pustaka ORM Node.js arus utama saat ini dan bandingkan kelebihan serta kekurangannya",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analisis log akses 7 hari terakhir di direktori logs/ dan tampilkan 10 jalur permintaan teratas",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Gabungkan semua file CSV di direktori data/ menjadi satu dan hapus baris yang duplikat",
    },
  ]}
/>
