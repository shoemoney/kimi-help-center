---
title: "Allgemeine Fehlerbehebung"
slug: "troubleshooting"
order: 12
extract_headings: false
preview: false
---

<SeoMeta
  title="Allgemeine Fehlerbehebung - Kimi Hilfecenter"
  description="Diese Seite behandelt häufige Fehlercodes und Optionen zur Selbstreparatur für Kimi Claw."
/>

# Allgemeine Fehlerbehebung

Diese Seite behandelt häufige Fehlercodes und Optionen zur Selbstreparatur für Kimi Claw.

## Häufige Fehlercodes

| Code | Bedeutung | Was zu tun ist |
|------|---------|------------|
| **400** | Bad Request – Fehlerhafte Eingabe oder ungültige Parameter | Prüfen Sie Ihre Nachricht auf nicht unterstützte Inhalte und versuchen Sie es erneut. |
| **401** | Unauthorized – Authentifizierung fehlgeschlagen | Melden Sie sich bei Kimi ab und wieder an. Bleibt das Problem bestehen, überprüfen Sie Ihre API-Zugangsdaten in den Einstellungen von Kimi Claw. |
| **403** | Forbidden – Unzureichende Berechtigungen | Vergewissern Sie sich, dass Ihre Mitgliedschaftsstufe die genutzte Funktion unterstützt. Stellen Sie sicher, dass Ihr Konto nicht eingeschränkt ist. |
| **429** | Too Many Requests – rate limit überschritten | Warten Sie einige Minuten und versuchen Sie es erneut. Einzelheiten zur Überprüfung Ihrer quota finden Sie unter [Conversation Limits](/kimi-claw/conversation-limits). |
| **500** | Internal Server Error – Auf dem Server ist etwas schiefgelaufen | Versuchen Sie es nach kurzer Wartezeit erneut. Tritt der Fehler wiederholt auf, nutzen Sie die Optionen zur Selbstreparatur unten oder wenden Sie sich an den Support. |

## Optionen zur Selbstreparatur

Kimi Claw bietet integrierte Reparaturwerkzeuge, die im Web über die **Einstellungen** erreichbar sind:

| Option | Funktion |
|--------|--------------|
| **Kimi Claw neu starten** | Stellt die Gateway-Verbindung neu her. Behebt die meisten vorübergehenden Probleme (getrennte Brückenverbindungen, kurzzeitige Aussetzer). |
| **Kimi Claw reparieren** | Führt eine automatische Diagnose durch, die Konfigurationsprobleme erkennt und behebt. Verwenden Sie dies, wenn ein einfacher Neustart nicht hilft. |
| **Ausgangseinstellungen wiederherstellen** | Setzt Kimi Claw auf den Standardzustand zurück. Arbeitsbereichsdateien und Memory bleiben erhalten, doch Verbindungen zu Chat-Plattformen (Telegram usw.) müssen neu eingerichtet werden. Nutzen Sie dies als letztes Mittel. |

## Eskalationsweg

Wenn die Optionen zur Selbstreparatur das Problem nicht lösen:

1. Führen Sie `/logs` im Terminal aus, um die jüngste Fehlerausgabe zu erfassen.
2. Führen Sie `/debug` aus, um eine ausführliche Diagnose zu aktivieren.
3. Wenden Sie sich an **support@moonshot.ai** und übermitteln Sie die Fehlerdetails sowie alle relevanten Logs.
