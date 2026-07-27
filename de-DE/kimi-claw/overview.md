---
title: "Kimi Claw – Überblick"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Stellen Sie Ihren eigenen Kimi Claw KI-Assistenten mit einem Klick in der Cloud bereit und verwalten Sie ihn."
---

<SeoMeta
  title="Kimi Claw – Überblick - Kimi Hilfecenter"
  description="Stellen Sie Ihren eigenen Kimi Claw KI-Assistenten mit einem Klick in der Cloud bereit und verwalten Sie ihn."
/>

# Produktüberblick

<Callout type="info">
**Kimi Claw** ist ein KI-Assistent mit einer eigenen Persönlichkeit und einem dauerhaften Langzeitgedächtnis. Mit Kimi Claw können Sie Ihre eigene OpenClaw-Instanz direkt aus Kimi heraus erstellen, bereitstellen und mit ihr chatten.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## Cloud-Bereitstellung mit einem Klick

Sie haben noch keinen OpenClaw? Erstellen Sie einen unter [kimi.com/bot](https://kimi.com/bot). Kimi stellt ihn für Sie in der Cloud bereit – ohne Serverkauf, ohne Einrichtung über die Kommandozeile.

<Callout type="warning">

- Für die Bereitstellung mit einem Klick ist ein Tarif **Allegretto oder höher** erforderlich. [Mitgliedschaftstarife](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi richtet automatisch das **Kimi K2.6-Modell** ein und verknüpft es mit Ihren **Kimi-Mitgliedschafts-Credits** – eine separate API-Konfiguration ist nicht nötig. Außerdem wird automatisch Kimi Web Search aktiviert, damit die KI im Internet suchen kann.
- Kimi Claw lässt sich direkt auf Telegram und anderen Chat-Plattformen bereitstellen.

## Erste Schritte

1. Melden Sie sich unter [kimi.com/bot](https://kimi.com/bot) an
2. Klicken Sie auf **Erstellen**, um einen neuen Kimi Claw zu starten
3. Warten Sie, bis die automatische Einrichtung abgeschlossen ist (in der Regel wenige Minuten)
4. Passen Sie Namen und Persona Ihres Kimi Claw an
5. Verbinden Sie unter **Einstellungen → Chat-Kanäle** die gewünschten Plattformen (z. B. Telegram)

## Bestehenden OpenClaw verbinden

Wenn Sie bereits eine OpenClaw-Instanz selbst gehostet haben, können Sie sie mit Kimi verbinden, indem Sie das Kimi-Plugin installieren:

1. Gehen Sie zu [kimi.com/bot](https://kimi.com/bot) und wählen Sie **Bestehenden OpenClaw verbinden**
2. Folgen Sie der Anleitung, um das Plugin auf Ihrem OpenClaw-Gerät zu installieren
3. Sobald die Verbindung steht, können Sie über Kimi mit Ihrem OpenClaw chatten

<a id="switch-to-k3"></a>
## Zu Kimi K3 wechseln

Kimi Claw verwendet standardmäßig das Kimi K2.6-Modell. Wenn Sie stattdessen Kimi K3 nutzen möchten, können Sie die lokale OpenClaw-Konfiguration mit dem folgenden Befehl automatisch anpassen.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

Überprüfen Sie nach der Ausführung, dass in der Ausgabe von `session_status` der Wert `model` auf `kimi-coding/k3` und das `context`-Limit auf `1.0m` steht.

<Callout type="warning">
Der Pfad zur Konfigurationsdatei kann je nach Installationsart variieren. Ersetzen Sie `/root/.openclaw/openclaw.json` entsprechend Ihrer tatsächlichen Umgebung. Sichern Sie die Datei unbedingt vor der Bearbeitung.
</Callout>
