---
title: "Désinstaller le plugin Kimi"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Désinstaller le plugin Kimi - Centre d'aide Kimi"
  description="Ceci s'applique uniquement aux appareils OpenClaw auto-hébergés que vous avez liés à Kimi. Assurez-vous d'exécuter cette commande sur votre propre machine."
/>

# Désinstaller le plugin Kimi

<Callout type="warning">
**Ceci s'applique uniquement aux appareils OpenClaw auto-hébergés** que vous avez liés à Kimi. Assurez-vous d'exécuter cette commande sur votre propre machine.
</Callout>

## Commande de désinstallation

Exécutez la commande suivante sur l'appareil où OpenClaw est installé :

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Avertissement crucial

<Callout type="warning">
**N'exécutez jamais cette commande sur une instance Kimi Claw déployée en un clic.**
Exécuter le script de désinstallation sur un Kimi Claw déployé dans le cloud **rompra définitivement la connexion**, sans aucune possibilité de récupération. Cette commande sert exclusivement à supprimer le plugin Kimi des appareils OpenClaw auto-hébergés.
</Callout>
