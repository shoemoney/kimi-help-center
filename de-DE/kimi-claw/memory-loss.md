---
title: "Gedächtnisverlust & Kontext"
slug: "memory-loss"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Gedächtnisverlust \u0026 Kontext - Kimi Hilfecenter"
  description="OpenClaw setzt die Konversation täglich um 4:00 Uhr morgens automatisch zurück. So wird verhindert, dass übermäßig lange Kontexte zu Halluzinationen oder einer verschlechterten Antwortqualität führen."
/>

# Gedächtnisverlust & Kontext

## Warum ist die gestrige Konversation verschwunden?

OpenClaw setzt die Konversation **täglich um 4:00 Uhr morgens** automatisch zurück. So wird verhindert, dass übermäßig lange Kontexte zu Halluzinationen oder einer verschlechterten Antwortqualität führen.

Wenn Sie anpassen möchten, wann das Zurücksetzen erfolgt, können Sie den Zeitplan in `config.yaml` ändern.

**Bewährte Vorgehensweise:** Bitten Sie Kimi Claw bei allem Wichtigen – Präferenzen, Projektdetails, wiederkehrenden Anweisungen – ausdrücklich darum, es zu speichern: _„Merke dir das in Memory.“_ In Memory gespeicherte Informationen bleiben über das Zurücksetzen der Konversation hinaus erhalten.

## Hat Kimi Claw sein Gedächtnis verloren?

Das tägliche Zurücksetzen um 4 Uhr morgens leert den aktiven Konversationskontext. Wurde etwas nicht in **Memory** gespeichert, ist es verloren.

**So beheben Sie das:**
- Sagen Sie während einer Konversation _„Merke dir X in Memory“_, und Kimi Claw schreibt es in den Langzeitspeicher.
- Sehen Sie gespeicherte Erinnerungen über **Workspace → AGENTS.md → #MEMORY** ein.

<Frames
  src="./images/memory-loss/claw-memory.png"
  alt="Claw Memory"
/>

- Verwenden Sie jederzeit den Befehl `/memory`, um gespeicherte Erinnerungen anzuzeigen und zu verwalten.

## Wie lange bleibt das Gedächtnis nach dem Ende des Abonnements erhalten?

Gedächtnisdateien befinden sich in Ihrem Workspace, und Sie können sie jederzeit einsehen oder herunterladen.

- Nach Ablauf Ihrer Mitgliedschaft wird die Cloud-Instanz **7 Tage lang aufbewahrt**.
- Verlängern Sie innerhalb von 7 Tagen, werden alle Daten – Gedächtnis, Konfiguration, Skills – vollständig wiederhergestellt.
- Nach 7 Tagen kann die Instanz freigegeben und die Daten dauerhaft gelöscht werden.
- Eine Funktion zum Exportieren bzw. Sichern des Gedächtnisses für eine einfachere Migration befindet sich in Entwicklung.
