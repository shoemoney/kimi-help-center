---
title: "Menggunakan Skills di Kimi Code"
slug: "use-skills-in-code"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Menggunakan Skills di Kimi Code - Pusat Bantuan Kimi"
  description="Pelajari cara membuat dan memanggil Skills di Kimi Code CLI untuk menstandarkan konvensi coding tim dan mengotomatiskan alur kerja pengembangan."
  ogType="article"
/>

# Menggunakan Skills di Kimi Code

Kimi Code adalah asisten pemrograman AI yang dirancang khusus untuk para developer, berjalan langsung di terminal atau editor untuk membantu menulis kode, memperbaiki bug, dan membuat dokumentasi. Kimi Code mendukung pemberian panduan berbasis pengetahuan melalui file `SKILL.md`. Setelah membacanya, AI akan mengikuti standar yang didefinisikan di dalamnya. Cocok untuk mendefinisikan gaya kode, alur kerja, dan praktik terbaik.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Memanggil skills menggunakan slash command"
/>

## Memanggil Skills

Kimi Code CLI memungkinkan Anda memanggil Skills menggunakan slash command:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Misalnya, dengan mengetik `/skill:git-commits`, Kimi Code akan membaca konten `SKILL.md` yang sesuai dan mengirimkannya sebagai instruksi ke Agent.

Anda juga dapat menambahkan deskripsi tambahan setelah slash command, yang akan ditambahkan di akhir instruksi Skill:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Untuk percakapan biasa, pemanggilan manual tidak diperlukan—Agent akan secara otomatis menentukan berdasarkan konteks apakah perlu membaca konten Skill.

## Membuat Skill Pertama Anda

Membuat Skill hanya memerlukan dua langkah: Buat subdirektori di dalam direktori Skills, lalu buat file `SKILL.md` di dalamnya.

Lokasi penyimpanan yang disarankan (berlaku untuk semua proyek):

<CodePreview
  files={[
    {
      name: "Struktur Direktori",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md` menggunakan YAML Frontmatter untuk mendefinisikan metadata, diikuti dengan Markdown untuk spesifikasi intinya:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Baik `name` maupun `description` di dalam Frontmatter merupakan field opsional. Jika dihilangkan, nama direktori akan digunakan secara default.

### Contoh

Tim Anda mewajibkan pesan commit mengikuti format Conventional Commits, tetapi menjelaskannya berulang kali tentu merepotkan. Dengan menuliskannya sebagai Skill, ke depannya Anda cukup menggunakan satu perintah untuk memanggilnya.

**Langkah 1: Buat File Skill**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**Langkah 2: Setelah menyelesaikan perubahan kode, panggil Skill**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code akan membaca standar Anda, menggabungkannya dengan deskripsi tugas, dan langsung menghasilkan pesan commit dengan format yang tepat tanpa Anda perlu mengulang persyaratan format apa pun.

## Flow Skills: Mendefinisikan Alur Kerja Multi-Langkah

Jika Skill biasa menyediakan standar statis, **Flow Skills** dapat mendefinisikan proses otomatis dengan banyak langkah.

Atur `type: flow` di dalam Frontmatter dan sematkan diagram alur dalam format Mermaid atau D2 untuk membuat Flow Skill.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

Jalankan dengan perintah `/flow:<name>`. Agent akan mulai dari node `BEGIN` dan secara otomatis menyelesaikan setiap langkah secara berurutan hingga mencapai `END`.

## Mekanisme Pemuatan Skill

Kimi Code CLI mencari dan memuat Skills berdasarkan prioritas berikut (yang pertama cocok lebih diutamakan):

1. **Skills Bawaan**: Terpasang bersama paket perangkat lunak, menyediakan kemampuan dasar.
2. **Skills Tingkat Pengguna**: Tersimpan di direktori home, berlaku untuk semua proyek.
3. **Skills Tingkat Proyek**: Tersimpan di direktori proyek, hanya berlaku untuk proyek tersebut.

Anda juga dapat menentukan direktori Skills tambahan secara manual menggunakan parameter `--skills-dir`:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Kimi Code CLI menyertakan dua Skills bawaan yang berguna: `kimi-cli-help` (menjawab pertanyaan penggunaan CLI) dan `skill-creator` (memandu Anda membuat Skills baru). Ketik `/skill:skill-creator` untuk memulai.
</Callout>

Untuk opsi konfigurasi lengkap dan penjelasan parameter, silakan merujuk ke [Dokumentasi Skills Kimi Code CLI](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html).
