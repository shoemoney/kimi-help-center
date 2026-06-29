---
title: "Mencopot plugin Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Mencopot plugin Kimi - Pusat Bantuan Kimi"
  description="Ini hanya berlaku untuk perangkat OpenClaw yang Anda kelola sendiri dan tautkan ke Kimi. Pastikan Anda menjalankannya di mesin milik Anda sendiri."
/>

# Mencopot plugin Kimi

<Callout type="warning">
**Ini hanya berlaku untuk perangkat OpenClaw yang Anda kelola sendiri** dan tautkan ke Kimi. Pastikan Anda menjalankannya di mesin milik Anda sendiri.
</Callout>

## Perintah pencopotan

Jalankan perintah berikut di perangkat tempat OpenClaw terpasang:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Peringatan penting

<Callout type="warning">
**Jangan pernah menjalankan perintah ini pada instance Kimi Claw yang di-deploy dengan sekali klik.**
Menjalankan skrip pencopotan pada Kimi Claw yang di-deploy di cloud akan **memutus koneksi secara permanen** tanpa cara untuk memulihkannya. Perintah ini khusus untuk menghapus plugin Kimi dari perangkat OpenClaw yang Anda kelola sendiri.
</Callout>
