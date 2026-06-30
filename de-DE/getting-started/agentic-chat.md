---
title: "Erste Schritte mit Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Erste Schritte mit Kimi - Kimi Hilfecenter"
  description="Im Chatfenster kannst du Fragen stellen, Dateien hochladen oder je nach Bedarf zwischen Modellen wechseln."
/>

# Erste Schritte mit Kimi

Im Chatfenster kannst du Fragen stellen, Dateien hochladen oder je nach Bedarf zwischen Modellen wechseln.
Öffne [kimi.com](https://www.kimi.com) und schick eine erste Nachricht – sag Hallo zu Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hi, Kimi!",
    },
  ]}
/>

## Angetrieben von K2.6
Kimi K2.6 ist ein Open-Source-Modell, das auf K2.5 aufbaut und deutliche Verbesserungen bietet, mit Fokus auf erstklassiges Coding, langfristige Ausführung und Agent-Swarm-Fähigkeiten. Es erreicht Spitzenleistungen bei Agent-Aufgaben, Coding, Bildverständnis, Videoverständnis und Benchmarks zur allgemeinen Intelligenz. K2.6 ist außerdem Kimis **vielseitigstes** Modell – seine native multimodale Architektur unterstützt sowohl visuelle als auch textuelle Eingaben, den Thinking- und Non-Thinking-Modus sowie konversationelle und agentische Aufgaben.
Damit überzeugt Kimi nicht nur bei Frage-Antwort-Gesprächen, sondern auch bei eigenständiger Aufgabenplanung, dem Aufruf von Tools und mehrstufigem Schließen – und unterstützt tiefes Denken und die Ausführung komplexer Aufgaben.
### Integrierte Tools
Sofort einsatzbereit, ohne Konfiguration:
| Tool | Beschreibung |
|------|------------|
| **Web Search** | Echtzeit-Websuche für aktuelle Nachrichten und Informationen |
| **Fetch Tool** | Direkter Zugriff auf bestimmte URLs (Webseiten, Dokumente, Bilder und andere Online-Ressourcen) |
| **Data Source** | Verbindung zu professionellen Datenbanken; Abfrage von Datenbankverzeichnissen und Datenabruf |
| **Image Search** | Text-zu-Bild- und Bild-zu-Bild-Suche zum schnellen Auffinden visueller Inhalte |
| **IPython** | Ausführung von Python-Code für Datenanalyse und Visualisierung |
| **Memory** | Intelligentes Gedächtnis, das deine persönlichen Vorlieben und Gewohnheiten erfasst |

## Visuelle und multimodale Fähigkeiten
K2.6 unterstützt das umfassende Verständnis von Bildern, Videos und Office-Dokumenten (PDF/Word/Excel) und nutzt dabei eine **native multimodale Architektur** (kein nachträglich angehängtes OCR). Es kann Dokumentinhalte direkt analysieren und mittlere bis fortgeschrittene Office-Aufgaben erledigen (etwa Excel-Formeln schreiben oder PPT-Gliederungen/VBA-Code erzeugen).
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

<Callout type="warning">
1. **Einschränkung bei der Bildgenerierung**: Der Standard-Chatmodus unterstützt nur die *Suche* nach Bildern, nicht das *Erzeugen* von Bildern (für die Bildgenerierung ist der K2.6-Agent-Modus erforderlich).
2. **Einschränkung bei der Dateiausgabe**: Als Ausgabe werden nur Textinhalte unterstützt (z. B. PPT-Gliederungen, Word-Fließtext, Code). Die direkte Ausgabe von Binärdateien (`.pptx`, `.docx`, `.xlsx`, `.pdf`) wird nicht unterstützt.
3. Für die Bildgenerierung oder die Ausgabe komplexer, bearbeitbarer Dokumente verwende [K2.6 Agent](https://www.kimi.com/agent) oder das Tool zur Codeausführung.
</Callout>

## Sitzungen und Gesprächsrunden
Wenn du auf „Neuer Chat“ klickst, beginnt damit gewissermaßen ein langes Gespräch mit Kimi.
| Begriff | Analogie | Technische Definition |
|---------|---------|---------------------|
| **Sitzung** | Ein ganzes Meeting (von Anfang bis Ende) | Ein vollständiger Chat-Verlauf mit klarem Anfang und Ende |
| **Runde** | Ein Austausch (du sprichst, Kimi antwortet) | Deine Eingabe und Kimis Antwort bilden zusammen eine Runde |

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
Innerhalb einer einzelnen Sitzung wird jede neue Frage oder Anweisung, die du sendest, unter Berücksichtigung aller vorherigen Runden beantwortet. Je mehr Runden sich ansammeln und je länger der Inhalt wird, desto stärker kann die Antwortqualität allmählich nachlassen.

### Häufige Szenarien
**Szenario 1: Themenwechsel**
- Falsch: In einer Sitzung, in der du an einem 30.000 Wörter langen Roman geschrieben hast, „Hilf mir, meine Steuern zu berechnen“ fragen
- Richtig: Für die Steuerfrage eine neue Sitzung starten – so vermeidest du, dass Kimi Romanfiguren mit Steuerbegriffen verwechselt
**Szenario 2: Verarbeitung langer Dokumente**
- Nach Dutzenden von Runden kann Kimi Regeln oder Dateizusammenfassungen „vergessen“, die zu Beginn festgelegt wurden
- Lösung: Mitten in der Aufgabe von dir aus zusammenfassen lassen („Fasse unseren bisherigen Plan zusammen“) oder eine neue Sitzung starten
**Szenario 3: Produktgrenzen verstehen**
- Die Grenzen der Kontextlänge werden in Token gemessen, im Alltag kannst du sie dir aber als „Runden“ vorstellen
- Wenn du den Hinweis „Starte einen neuen Chat“ siehst, bedeutet das, dass die aktuelle Sitzung zu viele Runden umfasst
## Bewährte Vorgehensweisen

<Callout type="tip">
1. **Für jede Aufgabe eine neue Sitzung starten**: Eigenständige Aufgaben – Texte schreiben, Recherche, Debugging – sollten jeweils ihre eigene Sitzung erhalten, um eine Vermischung des Kontexts zu vermeiden.
2. **In langen Sitzungen regelmäßig zusammenfassen**: Bitte Kimi nach mehr als 20 Runden von dir aus, die wichtigsten Informationen zusammenzufassen, um Datenverlust vorzubeugen.
3. **Sensible Informationen zeitnah entfernen**: Der Chatverlauf bleibt erhalten; lösche die gesamte Sitzung, nachdem du private Inhalte bearbeitet hast.
</Callout>
