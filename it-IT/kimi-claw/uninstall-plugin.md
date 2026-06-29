---
title: "Disinstallare il plugin Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Disinstallare il plugin Kimi - Centro assistenza Kimi"
  description="Questa procedura riguarda esclusivamente i dispositivi OpenClaw self-hosted che hai collegato a Kimi. Assicurati di eseguirla sulla tua macchina."
/>

# Disinstallare il plugin Kimi

<Callout type="warning">
**Questa procedura riguarda esclusivamente i dispositivi OpenClaw self-hosted** che hai collegato a Kimi. Assicurati di eseguirla sulla tua macchina.
</Callout>

## Comando di disinstallazione

Esegui quanto segue sul dispositivo in cui è installato OpenClaw:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Avviso importante

<Callout type="warning">
**Non eseguire mai questo comando su un'istanza Kimi Claw distribuita con un solo clic.**
Eseguire lo script di disinstallazione su una Kimi Claw distribuita nel cloud **interromperà la connessione in modo permanente**, senza alcuna possibilità di ripristino. Questo comando serve esclusivamente a rimuovere il plugin Kimi dai dispositivi OpenClaw self-hosted.
</Callout>
