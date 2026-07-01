---
title: "Desinstalar o plugin do Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Desinstalar o plugin do Kimi - Central de Ajuda Kimi"
  description="Isto se aplica apenas a dispositivos OpenClaw auto-hospedados que você vinculou ao Kimi. Certifique-se de executar isto na sua própria máquina."
/>

# Desinstalar o plugin do Kimi

<Callout type="warning">
**Isto se aplica apenas a dispositivos OpenClaw auto-hospedados** que você vinculou ao Kimi. Certifique-se de executar isto na sua própria máquina.
</Callout>

## Comando de desinstalação

Execute o seguinte no dispositivo onde o OpenClaw está instalado:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Aviso importante

<Callout type="warning">
**Nunca execute este comando em uma instância do Kimi Claw implantada com um clique.**
Executar o script de desinstalação em um Kimi Claw implantado na nuvem irá **romper a conexão de forma permanente**, sem possibilidade de recuperação. Este comando serve estritamente para remover o plugin do Kimi de dispositivos OpenClaw auto-hospedados.
</Callout>
