---
title: "Agent Swarm"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent Swarm - Pusat Bantuan Kimi"
  description="Agent Swarm adalah arsitektur &quot;penskalaan horizontal&quot; yang mengoordinasikan hingga 300 sub-agen yang bekerja secara paralel — tanpa peran yang ditentukan sebelumnya atau alur kerja buatan..."
/>

# Agent Swarm

<Callout type="info">
**Agent Swarm** adalah arsitektur "penskalaan horizontal" yang mengoordinasikan hingga 300 sub-agen yang bekerja secara paralel — tanpa perlu peran yang ditentukan sebelumnya atau alur kerja buatan tangan. Arsitektur ini menyelesaikan tugas sekitar **4,5× lebih cepat** dibandingkan eksekusi satu agen.
</Callout>

Pada 27 Januari 2026, Moonshot AI merilis Kimi K2.5 dan memperkenalkan Agent Swarm. Pada 20 April 2026, Moonshot AI merilis sekaligus membuka kode sumber Kimi K2.6, menghadirkan peningkatan besar pada arsitektur Agent Swarm:
- Hingga **300 sub-agen** bekerja bersamaan
- Lebih dari **4.000 pemanggilan tool** per tugas
- **4,5× lebih cepat** daripada eksekusi berurutan satu agen

Agent Swarm kini ditenagai oleh Kimi K3 (K3 Swarm), yang semakin meningkatkan pencarian paralel skala besar dan pemrosesan batch.

## Kisah di baliknya

Pada 2025, narasi dominan di industri AI berfokus pada penskalaan vertikal — model yang lebih besar, parameter yang lebih banyak. Namun pendekatan ini menemui batas struktural: kemacetan eksekusi berurutan satu agen.

Agent Swarm lahir dari situasi nyata: ketika seorang anggota tim mencoba mengotomatiskan pengumpulan informasi saham harian dan menemukan dirinya menulis 100 baris kode if-else, ia menyadari, "Aku sedang menulis sistem multi-agen dengan tangan." Jika model bisa menggunakan tool, mengapa mereka tidak bisa menyusun arsitekturnya sendiri?

Agent Swarm adalah struktur organisasi yang dirancang sendiri — dirancang oleh AI, bukan manusia. Agent utama (orchestrator) secara mandiri mengarahkan hingga 300 sub-agen, menjalankan hingga 4.000 langkah alur kerja secara paralel.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

Agent Swarm menggunakan metode pelatihan PARL (Parallel-Agent Reinforcement Learning). Dibandingkan pendekatan satu agen, metode ini memangkas langkah-langkah kritis sebanyak 3×–4,5× dalam skenario pencarian skala besar.

## Cara menggunakan?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Titik Akses:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Seluler**: buka aplikasi Kimi dan pilih model K3 Swarm pada tombol beralih model

<Callout type="info">
Tentang tag [Beta]: [Beta] menandakan penanda uji coba untuk produk yang pada awalnya hanya dibuka bagi sejumlah kecil pengguna untuk validasi dan penyempurnaan berskala kecil; seiring fitur matang, tag ini secara bertahap dihapus dan produk diluncurkan untuk semua orang.
</Callout>

Agent Swarm tersedia untuk anggota Moderato, Allegretto, Allegro, dan Vivace. Tugas-tugasnya menghabiskan kredit jauh lebih banyak daripada tugas Agent standar.

**Langkah-langkah:**
1. Jelaskan tugas Anda lalu kirim (mis. "Kumpulkan 200+ artikel Paul Graham")
2. Pantau kemajuan secara langsung: pembuatan daftar tugas, pemunculan sub-agen, eksekusi paralel
3. Terima hasil kerja: proyek kode, folder berkas, analisis data, dokumen Office
4. Pratinjau, unduh, atau bagikan hasilnya
5. Pada giliran berikutnya, Kimi secara otomatis menjadwalkan antara obrolan dan Agent berdasarkan tugas — tanpa perlu beralih secara manual

## Kasus penggunaan

### Penemuan berskala besar

**Kasus 1: 3 Kreator Teratas di 100 Niche YouTube**

Agent Swarm membuat 300 sub-agen untuk pencarian paralel, menghasilkan tabel terstruktur berisi nama channel, jumlah subscriber, dan deskripsi.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Lihat hasil" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Kasus 2: Mengumpulkan 200+ Artikel Paul Graham**

Agent Swarm mengerahkan sub-agen untuk mencari, mengunduh, mengategorikan, dan merangkum 200+ artikel ke dalam folder tematik.

<Chat title="Lihat hasil" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Keluaran berskala besar

**Kasus: Tinjauan Pustaka 100 Halaman dari 40 PDF**

Agent Swarm mengerahkan beberapa sub-agen yang berfokus pada penulisan, masing-masing bertanggung jawab atas satu bab. Hasil akhirnya: dokumen akademis 100 halaman lengkap dengan kutipan, bagan metodologi, dan analisis jejaring sitasi.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Sudut pandang berskala besar

**Kasus: Tinjauan Pakar atas Strategi Peluncuran Produk**
Agent Swarm mengerahkan sub-agen pakar dengan sudut pandang berbeda (Product Manager, Investor, Customer Success) untuk meninjau sebuah strategi peluncuran.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Lihat hasil" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Kasus: *The Three-Body Problem* Ditulis Ulang dalam 20 Gaya Sastra**
20 sub-agen "penulis" menggubah secara independen dengan gaya yang khas — dari Virginia Woolf, Borges, hingga Kafka.

<Chat title="Lihat hasil" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Pendalaman teknis

**Arsitektur Inti: Komandan + Spesialis**

- **Orchestrator** = Pelatih/Komandan: Melihat gambaran besar, menetapkan strategi
- **Sub-agen** = Pemain: Masing-masing berfokus pada peran tertentu

**Desain Kunci: Bekukan Pemain, Latih Hanya Pelatih**

Semua sub-agen mempertahankan kemampuan yang sudah ada; hanya orchestrator yang ditingkatkan melalui reinforcement learning. Pendekatan ini memberikan akuntabilitas yang jelas serta stabilitas pelatihan.

**Mencegah "Kemalasan":**
- **Kemunduran serial**: Orchestrator menyerahkan semuanya ke satu sub-agen
- **Paralelisme palsu**: Sub-tugas tak bermakna demi mengakali metrik

**Solusi: Mekanisme Reward Tiga Dimensi**
1. Kualitas hasil akhir
2. Paralelisme nyata yang dicapai
3. Tingkat penyelesaian sub-tugas

**Metrik Langkah Kritis**

Agent Swarm menghitung waktu sub-agen paling lambat di setiap tahap. Hal ini memaksa optimalisasi proses yang sungguh-sungguh, bukan sekadar pemecahan tugas secara membabi buta.

**Context Sharding**

Setiap sub-agen berfokus pada "buku catatannya" sendiri, mencatat detail relevan secara independen. Hanya kesimpulan utama yang dilaporkan ke orchestrator — mempertahankan penalaran tanpa membebani memori.

**Hasil Dunia Nyata**

Pada benchmark BrowseComp:
- Akurasi: 15,9% (satu agen) → 33,3%
- Langkah kritis berkurang ~40%

## Skenario penerapan

Agent Swarm sangat cocok untuk:
1. **Pengambilan informasi skala besar**: Pengumpulan data internet dalam jumlah masif
2. **Unduhan massal**: Pengumpulan berkas dan sumber daya skala besar
3. **Pembacaan berlingkup luas**: Memproses 100+ dokumen
4. **Penulisan panjang**: Konten lebih dari 100.000 kata
5. **Pemrograman kompleks**: Pengembangan frontend, code review, refactoring
6. **Otomatisasi perkantoran**: Dokumen profesional, spreadsheet, presentasi

**Bacaan Lanjutan:**
- [Kimi Agent Swarm: 100 Sub-Agen dalam Skala Besar](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Visual Agentic Intelligence​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: Advancing Open-Source Coding](https://www.kimi.com/blog/kimi-k2-6)
- [Kimi K3](https://www.kimi.com/blog/kimi-k3)
