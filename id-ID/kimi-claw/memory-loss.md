---
title: "Hilangnya memori & konteks"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Hilangnya memori & konteks - Pusat Bantuan Kimi"
  description="OpenClaw secara otomatis mereset percakapan setiap hari pukul 04.00. Ini mencegah konteks yang terlalu panjang menyebabkan halusinasi atau menurunnya kualitas respons."
/>

# Hilangnya memori & konteks

## Mengapa percakapan kemarin hilang?

OpenClaw secara otomatis mereset percakapan setiap hari **pukul 04.00**. Ini mencegah konteks yang terlalu panjang menyebabkan halusinasi atau menurunnya kualitas respons.

Jika Anda perlu menyesuaikan waktu reset, Anda dapat mengubah jadwalnya di `config.yaml`.

**Praktik terbaik:** Untuk hal-hal penting — preferensi, detail proyek, instruksi yang berulang — mintalah secara eksplisit kepada Kimi Claw untuk menyimpannya: _"Ingat ini ke Memory."_ Informasi yang tersimpan di Memory akan bertahan meski percakapan direset.

## Kimi Claw kehilangan memorinya?

Reset harian pukul 04.00 menghapus konteks percakapan yang aktif. Jika sesuatu tidak tersimpan ke **Memory**, maka informasi itu hilang.

**Cara mengatasinya:**
- Selama percakapan, katakan _"Ingat X ke Memory"_ dan Kimi Claw akan menulisnya ke penyimpanan jangka panjang.
- Tinjau memori yang tersimpan melalui **Workspace → AGENTS.md → #MEMORY**.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Gunakan perintah `/memory` kapan saja untuk melihat dan mengelola memori yang tersimpan.

## Berapa lama memori disimpan setelah langganan berakhir?

File memori tersimpan di Workspace Anda, dan Anda dapat melihat atau mengunduhnya kapan saja.

- Setelah keanggotaan Anda berakhir, instance cloud **dipertahankan selama 7 hari**.
- Perpanjang dalam 7 hari dan semua data — memori, konfigurasi, skill — akan dipulihkan sepenuhnya.
- Setelah 7 hari, instance dapat ditarik kembali dan data dihapus secara permanen.
- Fitur ekspor/cadangan memori sedang dikembangkan untuk mempermudah migrasi.
