---
title: "Kimi Code'da Skills Kullanımı"
slug: "use-skills-in-code"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code'da Skills Kullanımı - Kimi Yardım Merkezi"
  description="Ekip kodlama kurallarını standartlaştırmak ve geliştirme iş akışlarını otomatikleştirmek için Kimi Code CLI'da Skills oluşturmayı ve çağırmayı öğrenin."
  ogType="article"
/>

# Kimi Code'da Skills Kullanımı

Kimi Code, geliştiriciler için özel olarak tasarlanmış, doğrudan terminallerde veya editörlerde çalışarak kod yazmaya, hataları gidermeye ve dokümantasyon oluşturmaya yardımcı olan bir yapay zekâ programlama asistanıdır. Kimi Code, `SKILL.md` dosyaları aracılığıyla bilgiye dayalı yönlendirme sunmayı destekler. Yapay zekâ bu dosyaları okuduktan sonra içlerinde tanımlanan standartlara uyar. Kod stillerini, iş akışlarını ve en iyi uygulamaları tanımlamak için idealdir.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="Eğik çizgi komutuyla skills çağırma"
/>

## Skills Çağırma

Kimi Code CLI, eğik çizgi komutlarını kullanarak Skills çağırmanıza olanak tanır:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

Örneğin `/skill:git-commits` girdiğinizde Kimi Code, ilgili `SKILL.md` içeriğini okur ve bunu Agent'a bir talimat olarak gönderir.

Eğik çizgi komutunun ardına ek açıklamalar da ekleyebilirsiniz; bunlar Skill talimatının sonuna eklenir:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fix user login issue",
    },
  ]}
/>

Normal konuşmalarda elle çağırma gerekmez; Agent, Skill içeriğini okuyup okumamaya bağlama göre otomatik karar verir.

## İlk Skill'inizi Oluşturma

Bir Skill oluşturmak yalnızca iki adım gerektirir: Skills dizininde bir alt dizin oluşturun, ardından içine bir `SKILL.md` dosyası ekleyin.

Önerilen saklama konumu (tüm projeler için geçerlidir):

<CodePreview
  files={[
    {
      name: "Directory Structure",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md`, meta verileri tanımlamak için YAML Frontmatter, ardından temel belirtimler için Markdown kullanır:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: My project code style standards\n---\n\n## Code Style\n\n- Use 4-space indentation\n- Use camelCase for variable names\n- Use snake_case for function names\n- Every function requires a docstring\n- Single lines not exceeding 100 characters",
    },
  ]}
/>

Frontmatter içindeki `name` ve `description` alanlarının ikisi de isteğe bağlıdır. Belirtilmediğinde dizin adı varsayılan olarak kullanılır.

### Örnek

Ekibiniz commit mesajlarının Conventional Commits biçimine uymasını istiyor, ancak bunu her seferinde yeniden açıklamak yorucu. Bunu bir Skill olarak yazdığınızda, gelecekte tek bir komutla çağırmanız yeterli olur.

**1. Adım: Skill Dosyasını Oluşturun**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Git commit message standards using Conventional Commits format\n---\n\n## Git Commit Standards\n\nUse Conventional Commits format: type(scope): description\n\nAllowed types: feat, fix, docs, style, refactor, test, chore\n\nExamples:\n- feat(auth): Add OAuth login support\n- fix(api): Fix user query returning empty value issue",
    },
  ]}
/>

**2. Adım: Kod değişikliklerini tamamladıktan sonra Skill'i çağırın**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits fixed login page layout shift in Safari",
    },
  ]}
/>

Kimi Code, standartlarınızı okur, bunları görev açıklamalarıyla birleştirir ve herhangi bir biçim gereksinimini tekrarlamanıza gerek kalmadan doğru biçimlendirilmiş bir commit mesajını doğrudan üretir.

## Flow Skills: Çok Adımlı İş Akışlarını Tanımlama

Normal Skills statik standartlar sunarken, **Flow Skills** otomatik çok adımlı süreçleri tanımlayabilir.

Frontmatter içinde `type: flow` ayarlayın ve Mermaid veya D2 biçiminde bir akış şeması ekleyerek bir Flow Skill oluşturun.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: Code review workflow\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[Analyze code changes, list all modified files and functionality]\nB --> C{Code quality meets standards?}\nC -->|Yes| D[Generate code review report]\nC -->|No| E[List issues and suggest improvements]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

`/flow:<name>` komutuyla yürütün. Agent, `BEGIN` düğümünden başlar ve `END` düğümüne ulaşana kadar her adımı sırayla otomatik olarak tamamlar.

## Skill Yükleme Mekanizması

Kimi Code CLI, Skills'i aşağıdaki önceliğe göre arar ve yükler (ilk eşleşen önceliklidir):

1. **Yerleşik Skills**: Yazılım paketiyle birlikte kurulur ve temel yetenekler sunar.
2. **Kullanıcı düzeyindeki Skills**: Ana dizinde saklanır ve tüm projeler için geçerlidir.
3. **Proje düzeyindeki Skills**: Proje dizininde saklanır ve yalnızca o proje için geçerlidir.

Ayrıca `--skills-dir` parametresini kullanarak ek Skills dizinlerini elle belirtebilirsiniz:

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
Kimi Code CLI, kullanışlı iki yerleşik Skill içerir: `kimi-cli-help` (CLI kullanım sorularını yanıtlar) ve `skill-creator` (yeni Skills oluşturmanızda size yol gösterir). Başlamak için `/skill:skill-creator` yazın.
</Callout>

Eksiksiz yapılandırma seçenekleri ve parametre açıklamaları için lütfen [Kimi Code CLI Skills Dokümantasyonu](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)'na başvurun.
