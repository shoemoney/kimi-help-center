---
title: "Erste Schritte mit Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Erste Schritte mit Kimi - Kimi Hilfecenter"
  description="Lernen Sie Kimis drei Modelle (K2.6, K3, K3 Swarm), die integrierten Tools und die multimodalen Fähigkeiten kennen, um schnell mit Chat und Aufgabenausführung zu starten."
/>

# Erste Schritte mit Kimi

Im Chatfenster können Sie Fragen stellen, Dateien hochladen oder je nach Bedarf zwischen Modellen wechseln.
Öffnen Sie [kimi.com](https://www.kimi.com) und schicken Sie eine erste Nachricht – sagen Sie Hallo zu Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hallo, Kimi!",
    },
  ]}
/>

## Ein Modell wählen

Kimi bietet mehrere Modelle. Klicken Sie auf die Modellauswahl-Schaltfläche über dem Eingabefeld, um zu wechseln.

| Modell | Denkstärke | Am besten geeignet für |
|--------|------------|------------------------|
| **K2.6** | Standard / High | Schnelle Unterhaltungen und Fragen mit zügigen Antworten |
| **K3** | Low / High / Max | Chat- und Agent-Aufgaben; insgesamt am leistungsfähigsten |
| **K3 Swarm** | Low / High / Max | Umfangreiche Suchen und Stapelverarbeitung, in einem Durchgang erledigt |

<Callout type="tip">
K2.6 verbraucht keine Credits; K3 und K3 Swarm werden nach Credits abgerechnet. Weitere Einzelheiten finden Sie unter [Mitgliedschaftsvorteile](https://www.kimi.com/help/membership/membership-overview).
</Callout>

### Über Kimi K3

Kimi K3 ist derzeit Kimis leistungsstärkstes Modell mit 2,8 Billionen Parametern, basierend auf Kimi Delta Attention (KDA) und Attention Residuals, mit **nativer Bildverarbeitung** und einem **Kontextfenster von 1 Million Token**. Als weltweit erstes offenes Modell der 3T-Klasse ist K3 auf Spitzenintelligenz bei langfristigem Coding, Wissensarbeit und Reasoning ausgelegt und erreicht führende Leistungen bei Coding, langfristiger Ausführung und einem breiten Spektrum an Aufgaben allgemeiner Intelligenz.

### Integrierte Tools

Sofort einsatzbereit, ohne Konfiguration:

| Tool | Beschreibung |
|------|------------|
| **Web Search** | Echtzeit-Websuche für aktuelle Nachrichten und Informationen |
| **Fetch Tool** | Direkter Zugriff auf bestimmte URLs (Webseiten, Dokumente, Bilder und andere Online-Ressourcen) |
| **Image Search** | Text-zu-Bild- und Bild-zu-Bild-Suche zum schnellen Auffinden visueller Inhalte |
| **IPython** | Ausführung von Python-Code für Datenanalyse und Visualisierung |
| **Memory** | Intelligentes Gedächtnis, das Ihre persönlichen Vorlieben und Gewohnheiten erfasst |

## Visuelle und multimodale Fähigkeiten
Kimi K3 unterstützt das umfassende Verständnis von Bildern, Videos und Office-Dokumenten (PDF/Word/Excel) und nutzt dabei eine **native multimodale Architektur** (kein nachträglich angehängtes OCR). Es kann Dokumentinhalte direkt analysieren und mittlere bis fortgeschrittene Office-Aufgaben erledigen (etwa Excel-Formeln schreiben oder PPT-Gliederungen/VBA-Code erzeugen). In Kombination mit nativer Bildverarbeitung und einem Kontextfenster von 1 Million Token kann es längere und komplexere multimodale Materialien verarbeiten.
### Unterstützte multimodale Eingaben
- **Bilder**: PNG, JPEG, WebP, GIF usw. (per URL, Base64 oder lokalem Datei-Upload)
- **Video**: MP4 usw. (per video_url oder Bildfolge + fps-Parameter)
- **Dokumente**: PDF, Word, Excel, TXT, Markdown usw.
- **Online-Ressourcen**: URLs, Artikel-Links
- **Bildsuche**: Lade ein Bild hoch, um verwandte oder ähnliche Bilder zu finden
- **Videoverständnis**: Unterstützt Videoverständnis – es kann Bildschirmaufnahmen analysieren und Interaktionslogik nachbilden
- **Visuelles Coding**: Lade Screenshots oder Bildschirmaufnahmen hoch, um Frontend-Code zu erzeugen (HTML/Vue/React usw.); kann Webseiten automatisch aus Design-Mockups nachbauen

### Ausgabeformate
- Reiner Text / kombinierter Text mit Bildern: Standardmäßige Chat-Antworten
- Markdown: Rich-Text mit Überschriften, Listen, Tabellen und Links
- Codeblöcke: HTML/Vue/React/Python/JSON/Mermaid usw. (mit Sprachkennzeichnung)
- Strukturierte JSON-Daten: Ausgabe im erzwungenen JSON-Modus
- Mermaid-Diagramme: Flussdiagramme, Sequenzdiagramme, Mindmaps usw.
- LaTeX-Mathematikformeln: Inline- und blockweise mathematische Ausdrücke
- Zweimodusausgabe (Thinking): Liefert sowohl `reasoning_content` (Denkprozess) als auch `content` (endgültige Antwort)
- Tool-Aufruf-Format: Standardformat für Function Calling (für Entwickler)

### Wichtige Hinweise

1. **Dateiausgabe**: K3 kann bearbeitbare Dokumente durchgängig erzeugen (etwa `.pptx`, `.docx`, `.xlsx`, `.pdf`) sowie weitere komplexe Ergebnisse; K2.6 konzentriert sich auf schnelle Fragen und Antworten und gibt nur Text aus (etwa PPT-Gliederungen, Word-Fließtext oder Code).

<Callout type="tip">
Tipp: Um Bilder, Audio oder Video zu erzeugen, klicken Sie auf „+“ → Plugin, wählen Sie die entsprechende Funktion und nutzen Sie sie mit **K3**. Um komplexe, bearbeitbare Dokumente zu erstellen oder mehrstufige Aufgaben auszuführen, empfehlen wir **K3** oder **K3 Swarm** für das volle Erlebnis.
</Callout>

## Sitzungen und Gesprächsrunden
Wenn Sie auf „Neuer Chat“ klicken, beginnt damit gewissermaßen ein langes Gespräch mit Kimi.
| Begriff | Analogie | Technische Definition |
|---------|---------|---------------------|
| **Sitzung** | Ein ganzes Meeting (von Anfang bis Ende) | Ein vollständiger Chat-Verlauf mit klarem Anfang und Ende |
| **Runde** | Ein Austausch (Sie sprechen, Kimi antwortet) | Ihre Eingabe und Kimis Antwort bilden zusammen eine Runde |

### Wesentliche Unterschiede
**Sitzung**
- **Durchgehendes Gedächtnis**: Kimi merkt sich den gesamten Kontext innerhalb des aktuellen Chats
- **Runden­übergreifender Kontext**: Jede Antwort bezieht sich auf den bisherigen Gesprächsinhalt als Kontext für die nächste Runde
- **Klare Grenzen**: Auf „Neuer Chat“ klicken = Neustart; der bisherige Kontext wird gelöscht
**Runde**
- **Fortlaufende Zählung**: Runde 1, Runde 2, … werden nacheinander hinzugefügt
- **Begrenztes Gedächtnis**: Zu viele Runden (z. B. mehr als 50) können dazu führen, dass Kimi frühere Inhalte „vergisst“, besonders beim Verfassen längerer Texte oder bei Aufgaben mit strengen Vorgaben
- **Begrenzung der Kontextlänge**: Durch die Anzahl der Token beschränkt; wenn sich Runden ansammeln, werden womöglich die ältesten Inhalte komprimiert

<Callout type="tip">
**Sonderfall**: Wenn eine einzige Frage-Antwort-Folge das Gespräch abschließt, gilt: 1 Runde = 1 Sitzung.
</Callout>

## Warum diese Unterscheidung wichtig ist
Innerhalb einer einzelnen Sitzung wird jede neue Frage oder Anweisung, die Sie senden, unter Berücksichtigung aller vorherigen Runden beantwortet. Je mehr Runden sich ansammeln und je länger der Inhalt wird, desto stärker kann die Antwortqualität allmählich nachlassen.

### Häufige Szenarien
**Szenario 1: Themenwechsel**
- Falsch: In einer Sitzung, in der Sie an einem 30.000 Wörter langen Roman geschrieben haben, „Hilf mir, meine Steuern zu berechnen“ fragen
- Richtig: Für die Steuerfrage eine neue Sitzung starten – so vermeiden Sie, dass Kimi Romanfiguren mit Steuerbegriffen verwechselt
**Szenario 2: Verarbeitung langer Dokumente**
- Nach Dutzenden von Runden kann Kimi Regeln oder Dateizusammenfassungen „vergessen“, die zu Beginn festgelegt wurden
- Lösung: Kimi mitten in der Aufgabe zusammenfassen lassen („Fasse unseren bisherigen Plan zusammen“) oder eine neue Sitzung starten
**Szenario 3: Produktgrenzen verstehen**
- Die Grenzen der Kontextlänge werden in Token gemessen, im Alltag können Sie sie sich aber als „Runden“ vorstellen
- Wenn Sie den Hinweis „Starte einen neuen Chat“ sehen, bedeutet das, dass die aktuelle Sitzung zu viele Runden umfasst
## Bewährte Vorgehensweisen

<Callout type="tip">
**Für jede Aufgabe eine neue Sitzung starten**: Eigenständige Aufgaben – Texte schreiben, Recherche, Debugging – sollten jeweils ihre eigene Sitzung erhalten, um eine Vermischung des Kontexts zu vermeiden.
</Callout>

<Callout type="tip">
**In langen Sitzungen regelmäßig zusammenfassen**: Bitten Sie Kimi nach mehr als 20 Runden von sich aus, die wichtigsten Informationen zusammenzufassen, um Datenverlust vorzubeugen.
</Callout>

<Callout type="tip">
**Sensible Informationen zeitnah entfernen**: Der Chatverlauf bleibt erhalten; löschen Sie die gesamte Sitzung, nachdem Sie private Inhalte bearbeitet haben.
</Callout>
