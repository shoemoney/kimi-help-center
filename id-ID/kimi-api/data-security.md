---
title: "Pemrosesan data & keamanan"
slug: "api-data-security"
order: 13
extract_headings: true
preview: false
---

<SeoMeta
  title="Pemrosesan data & keamanan - Pusat Bantuan Kimi"
  description="FAQ keamanan data pengguna dan perlindungan privasi untuk Kimi API."
/>

# Pemrosesan data & keamanan

<Callout type="info">
FAQ keamanan data pengguna dan perlindungan privasi untuk Kimi API.
</Callout>

Kimi API sangat serius dalam menjaga keamanan data dan perlindungan privasi pengguna.
## Apakah data pengguna digunakan untuk melatih model?

<Callout type="warning">
**Tidak.** Data pengguna yang dikirim melalui API (termasuk konten masukan dan keluaran model) **tidak digunakan untuk melatih atau menyempurnakan model Kimi**. Data Anda hanya digunakan untuk memenuhi permintaan API saat ini dan tidak disimpan secara permanen untuk keperluan pelatihan.
</Callout>

## Bagaimana keamanan data pribadi dijaga?
Kimi API menerapkan berbagai langkah untuk melindungi data pribadi Anda:
| Langkah | Deskripsi |
| --- | --- |
| **Enkripsi saat Transmisi** | Semua komunikasi API menggunakan HTTPS/TLS |
| **Isolasi Data** | Data dari pengguna yang berbeda diisolasi secara ketat |
| **Tidak Digunakan untuk Pelatihan** | Data API tidak digunakan untuk melatih model |
| **Kontrol Akses** | Autentikasi API Key hanya untuk akses yang berwenang |
| **Sertifikasi Kepatuhan** | Platform telah memperoleh sertifikasi keamanan terkait |

<Callout type="tip">
Untuk kebutuhan keamanan yang lebih tinggi, hubungi tim penjualan guna mengetahui solusi keamanan tingkat enterprise.
</Callout>

## Peninjauan keamanan konten
Kimi API dilengkapi mekanisme peninjauan keamanan konten bawaan:
- Sistem secara otomatis mendeteksi dan menyaring konten terlarang (aktivitas ilegal, kekerasan, materi eksplisit, dll.)
- Saat terpicu, API mengembalikan respons kesalahan yang sesuai
- Peninjauan konten tidak menyimpan atau mengekspos data asli Anda
- Jika Anda merasa peninjauan terpicu secara keliru, hubungi dukungan dengan menyertakan `request_id`
## Cara menghapus berkas yang diunggah?
Berkas yang diunggah melalui API berkas dapat dihapus kapan saja:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "DELETE https://api.moonshot.ai/v1/files/{file_id}",
    },
  ]}
/>

Sertakan API Key Anda pada header permintaan dan masukkan ID berkas untuk menghapusnya. Setelah dihapus, berkas tidak dapat lagi direferensikan dan datanya akan dihilangkan dari server.

<Callout type="info">
Anda juga dapat melihat dan menghapus berkas yang diunggah melalui halaman manajemen berkas di konsol.
</Callout>
