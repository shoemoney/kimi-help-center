---
title: "FAQ pembuatan skill"
slug: "create-custom-skills-faq"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ pembuatan skill - Pusat Bantuan Kimi"
  description="Pertanyaan umum seputar pembuatan Kimi Skills, termasuk unggah dokumen, penggunaan token, batas frekuensi, penamaan skill, dan penanganan kegagalan pembuatan."
/>

# Pertanyaan yang sering diajukan (FAQ) tentang skill

## Mengapa tombol "Buat Skill" dinonaktifkan?

Hal ini dapat terjadi karena beberapa alasan berikut:
1. File yang diunggah atau deskripsi skill belum lengkap.
2. Format atau jumlah file tidak memenuhi persyaratan.
3. Sistem mendeteksi bahwa kredit akun Anda telah habis.

## Bagaimana pembuatan Skills menghabiskan kredit?

Pembuatan skill menghabiskan **token** Anda, yang dapat berasal dari pencarian hadiah atau kredit keanggotaan resmi Anda.

**Urutan Pengurangan**:
1. Pencarian hadiah diprioritaskan.
2. Jika pencarian hadiah tidak tersedia, kredit keanggotaan digunakan.

<Callout type="info">
Jika proses pembuatan gagal, tidak ada token yang dikurangi. Token hanya terpakai saat pembuatan berhasil.
</Callout>

## Apakah ada batasan jumlah atau frekuensi pembuatan?

Ya, demi menjaga kestabilan sistem dan penggunaan yang adil, berlaku batasan berikut:

1. **Batas Concurrency**: Maksimal **3 tugas** (Sedang Dibuat + Gagal) dapat berjalan secara paralel. Jika Anda mencapai batas ini, Anda akan menerima petunjuk untuk mencoba lagi setelah beberapa saat.
2. **Batas Harian**: Setiap pengguna dapat melakukan maksimal **10 konversi "Dokumen Office ke Skill"** per hari (termasuk percobaan ulang). Melampaui batas ini akan memunculkan notifikasi toast.

## Apa yang harus saya lakukan jika pembuatan skill gagal?

* Anda dapat memilih untuk **Coba Lagi** atau **Hapus** kartu skill yang gagal.
* Percobaan yang gagal tidak menghabiskan kredit.
* Deskripsi skill awal akan ditampilkan pada kartu yang gagal untuk membantu Anda membedakan tugas yang berbeda.

## Persyaratan penamaan apa yang berlaku untuk skill baru?

Nama skill baru harus mematuhi aturan berikut:
1. **Tidak boleh sama dengan skill yang sudah ada**: Termasuk skill resmi dan skill apa pun yang sudah Anda tambahkan.
   - Misalnya, jika Anda memiliki skill A, B, dan C, membuat skill baru bernama A mengharuskan penggantian nama untuk menghindari konflik.
2. **Panjang karakter**: Maksimal 25 karakter.
3. **Karakter yang diizinkan**: Hanya huruf Latin kecil, tanda hubung `-`, dan garis bawah `_`.

<Callout type="info">
Mematuhi aturan ini memastikan skill Anda berhasil ditambahkan dan menghindari kerancuan dengan skill yang sudah ada.
</Callout>

## Apa yang terjadi jika nama skill dilaporkan "sudah digunakan"?

Saat membuat skill baru, sistem memeriksa apakah nama yang dimasukkan bertabrakan dengan skill yang sudah ada, termasuk skill resmi maupun skill yang sudah Anda tambahkan.
Jika konflik terdeteksi, akan muncul pop-up yang berbunyi:
> Nama skill `/skill-name` sudah digunakan. Silakan ganti nama untuk menghindari kerancuan.

Pada titik ini, Anda dapat memasukkan nama skill baru lalu klik **Ganti Nama dan Tambahkan**, atau klik **Batal** untuk membatalkan pembuatan.

## Bagaimana jika saya tidak menyelesaikan konflik penamaan?

Sistem tidak mengizinkan penambahan skill dengan nama yang sama. Jika Anda tidak menyelesaikan konflik penamaan, Anda tidak dapat menyelesaikan pembuatan skill.
