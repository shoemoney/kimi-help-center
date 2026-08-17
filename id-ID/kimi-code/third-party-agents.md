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

Setelah instalasi, jangan langsung memulai Claude. Jalankan dulu skrip berikut di terminal untuk melewati alur login default Anthropic:

<CodePreview
  files={[
    {
      name: "skip-onboarding.sh",
      content: "node --eval \"\n// enable third party model support and fast mode\nconst claudeJsonFilePath = path.join(os.homedir(), '.claude.json');\nif (fs.existsSync(claudeJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeJsonFilePath, 'utf-8'));\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ ...content, penguinModeOrgEnabled: true, hasCompletedOnboarding: true }, null, 2), 'utf-8');\n} else {\n    fs.writeFileSync(claudeJsonFilePath, JSON.stringify({ penguinModeOrgEnabled: true, hasCompletedOnboarding: true }), 'utf-8');\n}\n\n// delete old model id\nconst claudeSettingsJsonFilePath = path.join(os.homedir(), '.claude', 'settings.json');\nif (fs.existsSync(claudeSettingsJsonFilePath)) {\n    const content = JSON.parse(fs.readFileSync(claudeSettingsJsonFilePath, 'utf-8'));\n    if (typeof content === 'object' && typeof content.env === 'object') {\n        for (const element of [\n            'ANTHROPIC_MODEL',\n            'ANTHROPIC_SMALL_FAST_MODEL',\n            'CLAUDE_CODE_SUBAGENT_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL',\n            'ANTHROPIC_DEFAULT_FABLE_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL',\n            'ANTHROPIC_DEFAULT_OPUS_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL',\n            'ANTHROPIC_DEFAULT_SONNET_MODEL_NAME',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL',\n            'ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME',\n        ]) {\n            delete content.env[element];\n        }\n        fs.writeFileSync(claudeSettingsJsonFilePath, JSON.stringify(content, null, 2), 'utf-8');\n    }\n}\n\"",
    },
  ]}
/>

Setelah itu, atur variabel environment dan jalankan:

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

2. Jalankan Claude Code dengan model `kimi-for-coding`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Di Claude Code, Anda dapat menekan **Tab** untuk beralih ke model Kimi K2 Thinking.

> Jika Anda mengalami error 400 yang disebabkan oleh pemanggilan `tool_search`, Anda bisa mengatasinya sementara dengan menetapkan variabel environment `ENABLE_TOOL_SEARCH=false`.

### Beralih ke HighSpeed

HighSpeed memberikan kecepatan keluaran sekitar 5–6× Standard dengan **konsumsi kredit sekitar 3×**, dan memerlukan paket [Allegretto](https://www.kimi.com/membership/pricing) atau lebih tinggi. Ada dua cara mengaktifkannya di Claude Code:

- **Opsi 1: perintah `/fast on`** — setelah memulai Claude Code, ketik `/fast on`; keluaran `⚡ Fast mode ON` mengonfirmasi bahwa mode aktif.
- **Opsi 2: perintah `/config`** — ketik `/config` untuk membuka panel konfigurasi, lalu aktifkan **Fast mode** (dan **Thinking mode**) di tab **Config**.

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
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Simpan konfigurasi dan Anda siap menggunakannya.

## Catatan penting

- Saat menggunakan tool, harap pertahankan identitas asli tool tersebut; memalsukan identifier klien (User-Agent) akan dianggap sebagai pelanggaran dan dapat menyebabkan benefit keanggotaan Anda ditangguhkan.
- Jika ada pertanyaan, lihat halaman [Benefit](/kimi-code/benefits) atau hubungi dukungan Kimi.
