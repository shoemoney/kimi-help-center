---
title: "Integrasi alat"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Integrasi alat - Pusat Bantuan Kimi"
  description="Selain integrasi IDE, Kimi Code CLI dapat diintegrasikan ke alat lain untuk menyempurnakan alur kerja terminal Anda."
/>

# Integrasi alat

<Callout type="info">
Selain integrasi IDE, Kimi Code CLI dapat diintegrasikan ke alat lain untuk menyempurnakan alur kerja terminal Anda.
</Callout>

## Plugin Zsh

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli) adalah plugin Zsh yang memungkinkan Anda beralih dengan cepat ke Kimi Code CLI langsung dari shell.

### Pemasangan dengan Oh My Zsh

Jika Anda menggunakan Oh My Zsh, ikuti langkah-langkah berikut untuk memasangnya:

1. Klon repositori ke dalam direktori plugin kustom Oh My Zsh:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. Tambahkan `kimi-cli` ke daftar plugin di `~/.zshrc`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Muat ulang konfigurasi:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Penggunaan

Setelah terpasang, tekan **Ctrl-X** di terminal Anda untuk beralih dengan cepat ke Kimi Code CLI tanpa perlu mengetik perintah `kimi` secara manual.
