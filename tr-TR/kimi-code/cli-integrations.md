---
title: "Araç entegrasyonları"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="Araç entegrasyonları - Kimi Yardım Merkezi"
  description="IDE entegrasyonunun yanı sıra Kimi Code CLI, terminal iş akışınızı güçlendirmek için başka araçlarla da entegre edilebilir."
/>

# Araç entegrasyonları

<Callout type="info">
IDE entegrasyonunun yanı sıra Kimi Code CLI, terminal iş akışınızı güçlendirmek için başka araçlarla da entegre edilebilir.
</Callout>

## Zsh eklentisi

[zsh-kimi-cli](https://github.com/MoonshotAI/zsh-kimi-cli), kabuğunuzdan hızlıca Kimi Code CLI'ye geçmenizi sağlayan bir Zsh eklentisidir.

### Oh My Zsh kurulumu

Oh My Zsh kullanıyorsanız kurmak için şu adımları izleyin:

1. Depoyu Oh My Zsh'in özel eklenti dizinine klonlayın:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. `~/.zshrc` dosyasındaki eklenti listesine `kimi-cli` ekleyin:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. Yapılandırmayı yeniden yükleyin:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### Kullanım

Kurulumdan sonra `kimi` komutunu elle yazmadan hızlıca Kimi Code CLI'ye geçmek için terminalinizde **Ctrl-X** tuşlarına basın.
