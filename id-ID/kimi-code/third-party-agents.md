---
title: "Menggunakan agen coding pihak ketiga"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Menggunakan agen coding pihak ketiga - Pusat Bantuan Kimi"
  description="Benefit Kimi Code dapat digunakan bersama Claude Code dan Roo Code, sehingga Anda bisa menikmati kemampuan AI Kimi langsung di tool coding favorit Anda."
/>

# Menggunakan agen coding pihak ketiga

Benefit Kimi Code dapat digunakan bersama Claude Code dan Roo Code, sehingga Anda bisa menikmati kemampuan AI Kimi langsung di tool coding favorit Anda.

## Prasyarat

- Keanggotaan Kimi yang aktif dengan benefit Kimi Code yang sudah diaktifkan.
- Sebuah API Key (dibuat di [Kimi Console](https://www.kimi.com/code)).

## Menggunakan bersama Claude Code

[Claude Code](https://code.claude.com/docs/en/overview) adalah asisten coding berbasis command-line dari Anthropic.

### Langkah konfigurasi

1. Atur variabel environment:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Jalankan Claude Code dengan model `kimi-k2.5`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-k2.5",
    },
  ]}
/>

> Di Claude Code, Anda dapat menekan **Tab** untuk beralih ke model Kimi K2 Thinking.

> Jika Anda mengalami error 400 yang disebabkan oleh pemanggilan `tool_search`, Anda bisa mengatasinya sementara dengan menetapkan variabel environment `ENABLE_TOOL_SEARCH=false`.

## Menggunakan bersama Roo Code

[Roo Code](https://github.com/RooCodeInc/Roo-Code) adalah ekstensi coding AI untuk VS Code.

### Instal Roo Code

1. Cari **Roo Code** di VS Code Extensions Marketplace lalu instal.
2. Setelah terinstal, ikon Roo Code akan muncul di activity bar; jika tidak muncul, mulai ulang VS Code.

### Konfigurasi model Kimi Code

1. Buka panel Roo Code lalu masuk ke halaman **Settings**.
2. Di bagian **Providers**, pilih **OpenAI Compatible** dan isi data berikut:

   | Pengaturan | Nilai |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | API Key Anda |
   | Model | `kimi-k2.5` |

3. Simpan konfigurasi dan Anda siap menggunakannya.

## Catatan penting

- Benefit Kimi Code hanya didukung di **Kimi Code CLI**, **Claude Code**, dan **Roo Code**.
- Menggunakan API Key Anda di platform atau tool yang tidak resmi dapat dianggap sebagai pelanggaran dan berpotensi mengakibatkan akses Anda dibatasi.
- Jika ada pertanyaan, lihat halaman [Benefit](/kimi-code/benefits) atau hubungi dukungan Kimi.
