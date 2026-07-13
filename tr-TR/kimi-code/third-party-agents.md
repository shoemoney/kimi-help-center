---
title: "Üçüncü taraf kodlama araçlarıyla kullanım"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Üçüncü taraf kodlama araçlarıyla kullanım - Kimi Yardım Merkezi"
  description="Kimi Code avantajları Claude Code ve Roo Code ile kullanılabilir; böylece tercih ettiğiniz kodlama araçlarında Kimi'nin yapay zeka yeteneklerinden yararlanabilirsiniz."
/>

# Üçüncü taraf kodlama araçlarıyla kullanım

Kimi Code avantajları Claude Code ve Roo Code ile kullanılabilir; böylece tercih ettiğiniz kodlama araçlarında Kimi'nin yapay zeka yeteneklerinden yararlanabilirsiniz.

## Ön koşullar

- Kimi Code avantajları etkinleştirilmiş, aktif bir Kimi üyeliği.
- Bir API Anahtarı ([Kimi Console](https://www.kimi.com/code) üzerinden oluşturulur).

## Claude Code ile kullanım

[Claude Code](https://code.claude.com/docs/en/overview), Anthropic tarafından geliştirilen komut satırı tabanlı bir kodlama asistanıdır.

### Yapılandırma adımları

1. Ortam değişkenlerini ayarlayın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. Claude Code'u `kimi-for-coding` modeliyle başlatın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Claude Code'da **Tab** tuşuna basarak Kimi K2 Thinking modeline geçebilirsiniz.

> `tool_search` çağrılarından kaynaklanan bir 400 hatasıyla karşılaşırsanız, `ENABLE_TOOL_SEARCH=false` ortam değişkenini ayarlayarak sorunu geçici olarak çözebilirsiniz.

### HighSpeed'e geçiş

HighSpeed, Standard'ın yaklaşık 5–6 katı çıktı hızını **yaklaşık 3 kat kredi tüketimiyle** sunar ve [Allegretto](https://www.kimi.com/membership/pricing) veya üzeri plan gerektirir. Claude Code'da etkinleştirmenin iki yolu vardır:

- **Seçenek 1: `/fast on` komutu** — Claude Code'u başlattıktan sonra `/fast on` yazın; `⚡ Fast mode ON` çıktısı etkinleştirmeyi doğrular.
- **Seçenek 2: `/config` komutu** — yapılandırma panelini açmak için `/config` yazın, ardından **Config** sekmesinde **Fast mode**'u (ve **Thinking mode**'u) etkinleştirin.

## Roo Code ile kullanım

[Roo Code](https://github.com/RooCodeInc/Roo-Code), VS Code için bir yapay zeka kodlama eklentisidir.

### Roo Code'u yükleyin

1. VS Code Eklenti Mağazası'nda **Roo Code** araması yapıp eklentiyi yükleyin.
2. Kurulumun ardından Roo Code simgesi etkinlik çubuğunda görünür; görünmezse VS Code'u yeniden başlatın.

### Kimi Code modelini yapılandırın

1. Roo Code panelini açın ve **Settings** sayfasına gidin.
2. **Providers** bölümünde **OpenAI Compatible** seçeneğini seçin ve aşağıdakileri doldurun:

   | Ayar | Değer |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Anahtarı | API Anahtarınız |
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. Yapılandırmayı kaydedin; kullanıma hazırsınız.

## Önemli notlar

- Kimi Code avantajları yalnızca **Kimi Code CLI**, **Claude Code** ve **Roo Code** ile desteklenir.
- API Anahtarınızı yetkisiz platformlarda veya araçlarda kullanmak ihlal sayılabilir ve erişiminizin kısıtlanmasına yol açabilir.
- Sorularınız için [Avantajlar](/kimi-code/benefits) sayfasına bakın veya Kimi destek ekibiyle iletişime geçin.
