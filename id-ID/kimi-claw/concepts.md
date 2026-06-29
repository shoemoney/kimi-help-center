---
title: "Konsep inti & terminal"
slug: "concepts"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Konsep inti \u0026 terminal - Kimi Help Center"
  description="Image: 截图30"
/>

# Konsep inti & terminal

## Konsep utama

| Konsep | Deskripsi |
|---------|-------------|
| **Memory** | Sistem memori jangka panjang Kimi Claw. Menyimpan preferensi, kebiasaan, dan informasi penting Anda di seluruh percakapan. |
| **Skills** | Modul kemampuan yang dapat dipasang dari pustaka ClawHub untuk membekali Kimi Claw dengan keahlian khusus pada bidang tertentu. |
| **HEARTBEAT** | Tugas latar belakang terjadwal yang berjalan dengan pengatur waktu — berguna untuk pengingat berulang, pengambilan data, dan ringkasan. |
| **Identity** | Definisi peran Kimi Claw: nama, profesi, dan persona. Sepenuhnya dapat Anda sesuaikan. |
| **Soul** | Sifat kepribadian inti dan prinsip perilaku yang membentuk gaya interaksi Kimi Claw. |
| **Tools** | Kumpulan kemampuan yang dapat dipanggil Kimi Claw — pencarian web, pengelolaan file, eksekusi kode, dan banyak lagi. |
| **User** | Definisi hubungan antara Anda dan Kimi Claw, yang mengatur pola interaksi dan pembagian informasi. |

## Terminal

<Frames
  src="./images/concepts/screenshot-30.png"
  alt="screenshot 30"
/>

Anda dapat membuka antarmuka baris perintah melalui **Settings → Terminal** di web, lalu menjalankan perintah untuk mengendalikan Kimi Claw secara langsung.

Atau, cukup beri tahu Kimi Claw perintah apa yang ingin dijalankan dalam bahasa biasa — ia akan menjalankannya untuk Anda.

> Catatan: Terminal dan plugin menggunakan saluran koneksi yang sama. Memulai ulang gateway OpenClaw akan memutuskan koneksi Terminal.

## Referensi perintah

### Sistem

| Perintah | Deskripsi |
|---------|-------------|
| `/help` | Tampilkan informasi bantuan |
| `/status` | Lihat status sistem saat ini |
| `/ping` | Uji apakah koneksi masih aktif |
| `/cron` | Kelola tugas terjadwal |
| `/config` | Lihat atau ubah konfigurasi |
| `/new` | Mulai percakapan baru (menghapus konteks saat ini) |
| `/reset` | Setel ulang Kimi Claw |
| `/compact` | Padatkan konteks percakapan saat ini |
| `/stop` | Hentikan tugas yang sedang berjalan |

### Skills

| Perintah | Deskripsi |
|---------|-------------|
| `/skills` | Jelajahi, pasang, dan kelola skills |

### Tugas terjadwal

| Perintah | Deskripsi |
|---------|-------------|
| `/cron` | Lihat dan kelola jadwal tugas |

### Memory

| Perintah | Deskripsi |
|---------|-------------|
| `/memory` | Lihat dan kelola memori jangka panjang |

### Konfigurasi & debugging

| Perintah | Deskripsi |
|---------|-------------|
| `/config` | Lihat atau ubah konfigurasi sistem |
| `/logs` | Lihat log runtime |
| `/debug` | Aktifkan mode debug untuk diagnostik terperinci |
