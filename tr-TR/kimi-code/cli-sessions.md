---
title: "Oturumlar ve bağlam"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="Oturumlar & bağlam - Kimi Yardım Merkezi"
  description="Kimi Code CLI, çoklu oturum yönetimini ve bağlam kalıcılığını destekleyerek çalışmanızı dilediğiniz zaman duraklatıp kaldığınız yerden sürdürmenize olanak tanır."
/>

# Oturumlar ve bağlam

Kimi Code CLI, çoklu oturum yönetimini ve bağlam kalıcılığını destekleyerek çalışmanızı dilediğiniz zaman duraklatıp kaldığınız yerden sürdürmenize olanak tanır.

## Oturuma kaldığınız yerden devam etme

Önceki bir oturumu birkaç farklı şekilde sürdürebilirsiniz:

### En son oturuma devam etme

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

Son konuşmaya devam etmek için `--continue` (veya `-c`) bayrağını kullanın.
### Oturum kimliği belirtme

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session <session-id>",
    },
  ]}
/>

Belirli bir oturumu geri yüklemek için `--session` bayrağını kullanın.

### Göz atma ve geçiş yapma

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

Oturum listesini görüntülemek ve geri yüklenecek bir oturum seçmek için `/sessions` (veya `/resume`) komutunu çalıştırın.
## Başlangıçta yeniden oynatma

Bir oturumu sürdürdüğünüzde, Kimi Code CLI konuşma geçmişini otomatik olarak yeniden oynatır ve önceki bağlamı ve ilerlemeyi hızla hatırlamanıza yardımcı olur.

## Durum kalıcılığı

Aşağıdaki durum bilgileri oturumlar arasında otomatik olarak kaydedilir ve geri yüklenir:

- **Onay kararları**: "Bu oturum için izin ver" gibi kararlar hatırlanır.
- **Dinamik alt ajanlar**: Bir oturum sırasında oluşturulan alt ajan yapılandırmaları korunur.
- **Ek dizinler**: Komutlar aracılığıyla eklenen ek çalışma dizinleri de kalıcı olarak saklanır.

Bu sayede bir oturumu sürdürdüğünüzde önceki çalışmanıza kesintisiz olarak devam edebilirsiniz.

## Temizleme ve sıkıştırma

Kimi Code CLI, konuşmanın sürebilmesini sağlamak için gerektiğinde bağlamı otomatik olarak sıkıştırır. Ayrıca bağlamı eğik çizgi komutlarıyla elle de yönetebilirsiniz:

### Bağlamı temizleme

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

Geçerli oturumdaki tüm bağlamı temizlemek ve yepyeni bir konuşma başlatmak için `/clear` (veya `/reset`) yazın:

### Bağlamı sıkıştırma

Bağlamı sıkıştırmak için `/compact` yazın — önemli bilgileri korurken token kullanımını azaltır:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

Sıkıştırma sırasında yapay zekâya hangi bilgilere öncelik vermesi gerektiğini bildirmek için talimatlar da ekleyebilirsiniz:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### Bağlam durumu

CLI'nin altındaki durum çubuğu, geçerli bağlam kullanımını gerçek zamanlı olarak gösterir ve bağlam tüketimini izlemenize yardımcı olur. Kullanım oranı yükseldiğinde, bağlamı sıkıştırmak ve önemli bilgileri kaybetmemek için `/compact` komutunu kullanın.
