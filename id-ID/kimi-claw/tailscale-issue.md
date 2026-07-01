---
title: "Tailscale terputus"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale terputus - Pusat Bantuan Kimi"
  description="Jika Kimi Claw kehilangan koneksi setelah Anda menyiapkan Tailscale, penyebabnya hampir selalu penggantian DNS — Tailscale mengubah pengaturan DNS sistem, yang m..."
/>

# Tailscale terputus

Jika Kimi Claw kehilangan koneksi setelah Anda menyiapkan Tailscale, penyebabnya hampir selalu penggantian DNS — Tailscale mengganti pengaturan DNS sistem sehingga Kimi Claw tidak bisa lagi me-resolve nama host.

## Cara memperbaikinya?

1. Buka [halaman pengaturan DNS Tailscale](https://login.tailscale.com/admin/dns).
2. Pada **Nameservers → Global nameservers**, klik **Add nameserver**.
3. Tambahkan server DNS publik berikut:
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. Aktifkan tombol **Override DNS Servers** di pojok kanan atas.
5. Tunggu sekitar **30 detik** hingga koneksi pulih.

## Cara mencegahnya?

Jika Anda baru akan menyiapkan Tailscale, atur pengaturan DNS di atas **sebelum** mengaktifkan Tailscale. Dengan begitu, koneksi tidak akan terganggu.
