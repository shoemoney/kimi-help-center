---
title: "Sekilas tentang Kimi Claw"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Terapkan dan kelola asisten AI Kimi Claw Anda sendiri di cloud hanya dengan satu kali klik."
---

<SeoMeta
  title="Sekilas tentang Kimi Claw - Pusat Bantuan Kimi"
  description="Terapkan dan kelola asisten AI Kimi Claw Anda sendiri di cloud hanya dengan satu kali klik."
/>

# Sekilas tentang produk

<Callout type="info">
**Kimi Claw** adalah asisten AI dengan kepribadian unik dan memori jangka panjang yang tetap tersimpan. Melalui Kimi Claw, Anda dapat membuat, menerapkan, dan mengobrol dengan instance OpenClaw Anda sendiri langsung dari Kimi.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Deploy ke cloud dengan satu klik

Belum punya OpenClaw? Kunjungi [kimi.com/bot](https://kimi.com/bot) untuk membuatnya. Kimi akan menerapkannya ke cloud untuk Anda — tanpa perlu membeli server, tanpa pengaturan command-line.

<Callout type="warning">

- Deploy satu klik memerlukan paket **Allegretto atau yang lebih tinggi**. [Paket Keanggotaan](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi akan mengonfigurasi model **Kimi K2.6** secara otomatis dan menautkan ke **hak serta kredit keanggotaan Kimi**, tanpa perlu mengonfigurasi API tambahan. Kimi juga akan mengonfigurasi layanan Kimi Web Search secara otomatis untuk memberikan kemampuan pencarian internet kepada AI.
- Jika ingin beralih ke model **Kimi K3**, Anda dapat menyesuaikan konfigurasi model di pengaturan Kimi Claw.
- Kimi Claw dapat langsung diterapkan ke Telegram dan platform obrolan lainnya.

## Memulai

1. Masuk di [kimi.com/bot](https://kimi.com/bot)
2. Klik **Buat** untuk meluncurkan Kimi Claw baru
3. Tunggu hingga pengaturan otomatis selesai (biasanya beberapa menit)
4. Sesuaikan nama dan persona Kimi Claw Anda
5. Di **Pengaturan → Saluran Obrolan**, hubungkan platform yang ingin Anda gunakan (misalnya, Telegram)

## Hubungkan OpenClaw yang sudah ada

Jika Anda sudah meng-hosting sendiri instance OpenClaw, Anda dapat menghubungkannya ke Kimi dengan memasang plugin Kimi:

1. Buka [kimi.com/bot](https://kimi.com/bot) dan pilih **Hubungkan OpenClaw yang Ada**
2. Ikuti petunjuk untuk memasang plugin pada perangkat OpenClaw Anda
3. Setelah terhubung, Anda dapat mengobrol dengan OpenClaw Anda melalui Kimi

<a id="switch-to-k3"></a>
## Beralih ke model Kimi K3

Kimi Claw secara default menggunakan model Kimi K2.6. Jika Anda ingin menggunakan Kimi K3, jalankan perintah berikut untuk mengubah konfigurasi OpenClaw lokal secara otomatis.

```bash
# 1. 备份当前配置
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. 新增 k3 模型并切换默认模型（示例使用 jq）
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. 重启 OpenClaw
openclaw gateway restart

# 4. 验证
session_status
```

Setelah menjalankan perintah, pastikan output `session_status` menampilkan `model` sebagai `kimi-coding/k3` dan batas `context` adalah `1.0m`.

<Callout type="warning">
Jalur file konfigurasi dapat berbeda tergantung metode instalasi. Sesuaikan `/root/.openclaw/openclaw.json` sesuai kondisi Anda. Pastikan untuk membuat cadangan terlebih dahulu sebelum mengubah konfigurasi.
</Callout>
