---
title: "Das Kimi-Plug-in deinstallieren"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Das Kimi-Plug-in deinstallieren - Kimi Hilfecenter"
  description="Dies gilt ausschließlich für selbst gehostete OpenClaw-Geräte, die Sie mit Kimi verknüpft haben. Stellen Sie sicher, dass Sie dies auf Ihrem eigenen Gerät ausführen."
/>

# Das Kimi-Plug-in deinstallieren

<Callout type="warning">
**Dies gilt ausschließlich für selbst gehostete OpenClaw-Geräte**, die Sie mit Kimi verknüpft haben. Stellen Sie sicher, dass Sie dies auf Ihrem eigenen Gerät ausführen.
</Callout>

## Deinstallationsbefehl

Führen Sie Folgendes auf dem Gerät aus, auf dem OpenClaw installiert ist:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## Wichtiger Warnhinweis

<Callout type="warning">
**Führen Sie diesen Befehl niemals auf einer per Ein-Klick bereitgestellten Kimi-Claw-Instanz aus.**
Wenn Sie das Deinstallationsskript auf einer in der Cloud bereitgestellten Kimi Claw ausführen, wird die Verbindung **dauerhaft getrennt** und lässt sich nicht wiederherstellen. Dieser Befehl dient ausschließlich dazu, das Kimi-Plug-in von selbst gehosteten OpenClaw-Geräten zu entfernen.
</Callout>
