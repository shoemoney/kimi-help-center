---
title: "Desinstalar el plugin de Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Desinstalar el plugin de Kimi - Centro de ayuda de Kimi"
  description="Esto solo aplica a dispositivos OpenClaw autoalojados que vinculaste a Kimi. Asegúrate de ejecutar esto en tu propia máquina."
/>

# Desinstalar el plugin de Kimi

<Callout type="warning">
**Esto solo aplica a dispositivos OpenClaw autoalojados** que vinculaste a Kimi. Asegúrate de ejecutar esto en tu propia máquina.
</Callout>

## Comando de desinstalación

Ejecuta lo siguiente en el dispositivo donde está instalado OpenClaw:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Advertencia importante

<Callout type="warning">
**Nunca ejecutes este comando en una instancia de Kimi Claw desplegada con un solo clic.**
Ejecutar el script de desinstalación en un Kimi Claw desplegado en la nube **cortará la conexión de forma permanente** y no habrá manera de recuperarla. Este comando sirve exclusivamente para eliminar el plugin de Kimi de dispositivos OpenClaw autoalojados.
</Callout>
