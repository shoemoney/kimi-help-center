---
title: "Erste Schritte mit Kimi"
slug: "agentic-chat"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Erste Schritte mit Kimi - Kimi Help Center"
  description="Lerne die drei Modelle von Kimi (K2.6, K3, K3 Swarm), die integrierten Tools und die multimodalen Funktionen kennen, damit du schnell mit Chat und Aufgabenbearbeitung starten kannst."
/>

# Erste Schritte mit Kimi

Du kannst Fragen in das Chatfeld eingeben, Dateien hochladen oder je nach Bedarf zwischen Modellen wechseln.
Öffne [kimi.com](https://www.kimi.com) und sende testweise eine Nachricht — begrüße Kimi:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Hallo, Kimi!",
    },
  ]}
/>

## Modell auswählen

Kimi bietet mehrere Modelle. Klicke oberhalb des Eingabefelds auf die Modellauswahl, um zu wechseln.

| Modell | Denkstärke | Am besten geeignet für |
|-------|-------------------|----------|
| **K2.6** | Standard / Hoch | Schnelle Gespräche und Fragen/Antworten mit kürzeren Reaktionszeiten |
| **K3** | Niedrig / Hoch / Max | Chat und Agent-Aufgaben; insgesamt das leistungsstärkste Modell |
| **K3 Swarm** | Niedrig / Hoch / Max | Großangelegte Suche und Batch-Verarbeitung, alles in einem Durchlauf |

<Callout type="tip">
K2.6 verbraucht im Chat keine credits (bei Verwendung als K2.6 Agent innerhalb von Kimi Work werden jedoch weiterhin Mitgliedschafts-credits verbraucht); K3 und K3 Swarm werden mit credits abgerechnet. Details findest du in den [Mitgliedschaftsvorteilen](https://www.kimi.com/help/membership/membership-overview).
</Callout>

### Über Kimi K3

Kimi K3 ist derzeit das leistungsstärkste Modell von Kimi: Es besitzt 2,8 Billionen Parameter, basiert auf Kimi Delta Attention (KDA) und Attention Residuals und bietet **native Bildverarbeitung** sowie ein **Kontextfenster mit 1 Million token**. Als weltweit erstes offenes Modell der 3T-Klasse ist K3 für Spitzenleistung in langlaufendem Coding, Wissensarbeit und Reasoning ausgelegt und erzielt führende Ergebnisse bei Coding, langfristiger Ausführung und einer breiten Palette allgemeiner Intelligenzaufgaben.

### Integrierte Tools

Sofort einsatzbereit, keine Konfiguration erforderlich:

| Tool | Beschreibung |
|------|------------|
| **Web Search** | Websuche in Echtzeit für aktuelle Nachrichten und Informationen |
| **Abruf-Tool** | Direkter Zugriff auf bestimmte URLs (Webseiten, Dokumente, Bilder und andere Online-Ressourcen) |
| **Bildersuche** | Text-zu-Bild- und Bild-zu-Bild-Suche zum schnellen Auffinden visueller Inhalte |
| **IPython** | Python-Code für Datenanalyse und Visualisierung ausführen |
| **Gedächtnis** | Intelligentes Gedächtnis, das deine persönlichen Vorlieben und Gewohnheiten festhält |

## Visuelle und multimodale Funktionen
Kimi K3 versteht Bilder, Videos und Office-Dokumente (PDF/Word/Excel) in unterschiedlichsten Nutzungsszenarien und nutzt dafür eine **native multimodale Architektur** (keine bloß nachgelagerte OCR). Es kann Dokumentinhalte direkt auslesen und Office-Aufgaben mittleren bis hohen Anspruchs erledigen (etwa Excel-Formeln schreiben oder PPT-Gliederungen/VBA-Code erzeugen). Zusammen mit nativer Bildverarbeitung und einem Kontextfenster mit 1 Million token kann es längere und komplexere multimodale Materialien verarbeiten.
### Unterstützte multimodale Eingaben
- **Bilder**: PNG, JPEG, WebP, GIF usw. (per URL, Base64 oder lokalem Datei-Upload)
- **Video**: MP4 usw. (per video_url oder Bildsequenzen + fps-Parameter)
- **Dokumente**: PDF, Word, Excel, TXT, Markdown usw.
- **Online-Ressourcen**: URLs, Artikellinks
- **Bildersuche**: Lade ein Bild hoch, um nach verwandten oder ähnlichen Bildern zu suchen
- **Videoverständnis**: Unterstützt Videoverständnis — kann Bildschirmaufzeichnungen analysieren und Interaktionslogik nachbilden
- **Visuelles Coding**: Lade Screenshots oder Bildschirmaufzeichnungen hoch, um Frontend-Code zu erzeugen (HTML/Vue/React usw.); kann Webseiten aus Design-Mockups automatisch rekonstruieren

### Ausgabeformate
- Reiner Text / gemischter Text und Bilder: Standardantworten im Gespräch
- Markdown: Rich Text mit Überschriften, Listen, Tabellen und Links
- Codeblöcke: HTML/Vue/React/Python/JSON/Mermaid usw. (mit Sprachkennungen)
- Strukturierte JSON-Daten: Ausgabe im erzwungenen JSON-Modus
- Mermaid-Diagramme: Flussdiagramme, Sequenzdiagramme, Mindmaps usw.
- LaTeX-Formeln: Mathematische Ausdrücke inline und als Block
- Dual-Mode-Ausgabe (Thinking): Gibt sowohl `reasoning_content` (Denkprozess) als auch `content` (abschließende Antwort) zurück
- Format für Tool-Aufrufe: Standardformat für Function Calling (für Entwickler)

### Wichtige Hinweise

1. **Dateiausgabe**: K3 kann bearbeitbare Dokumente durchgängig erstellen (etwa `.pptx`, `.docx`, `.xlsx`, `.pdf`) sowie andere komplexe Arbeitsergebnisse liefern; K2.6 ist auf schnelle Fragen/Antworten ausgelegt und gibt nur Text aus (etwa PPT-Gliederungen, Word-Fließtext oder Code).

<Callout type="tip">
Tipp: Um Bilder, Audio oder Videos zu erzeugen, klicke auf "+" → Plugin, wähle die entsprechende Funktion und nutze sie mit **K3**. Für komplexe bearbeitbare Dokumente oder mehrstufige Aufgaben empfehlen wir **K3** oder **K3 Swarm**, damit du den vollen Funktionsumfang nutzen kannst.
</Callout>

## Sitzungen und Gesprächsrunden
Wenn du auf "Neuer Chat" klickst, ist das so, als würdest du ein längeres Gespräch mit Kimi beginnen.
| Begriff | Vergleich | Technische Definition |
|---------|---------|---------------------|
| **Sitzung** | Eine ganze Besprechung (vom Anfang bis zum Ende) | Ein vollständiger Chatprozess mit klarem Beginn und Ende |
| **Runde** | Ein Austausch (du schreibst, Kimi antwortet) | Deine Eingabe und Kimis Antwort bilden einen Roundtrip |

### Wichtige Unterschiede
**Sitzung**
- **Durchgehendes Gedächtnis**: Kimi behält den gesamten Kontext innerhalb des aktuellen Chats
- **Rundenübergreifender Kontext**: Jede Antwort bezieht frühere Gesprächsinhalte als Kontext für die nächste Runde ein
- **Klare Grenzen**: Klick auf "Neuer Chat" = frischer Start; der vorherige Kontext wird gelöscht
**Runde**
- **Fortlaufende Zählung**: Runde 1, Runde 2, … werden nacheinander ergänzt
- **Begrenztes Gedächtnis**: Zu viele Runden (z. B. 50+) können dazu führen, dass Kimi frühere Inhalte "vergisst", besonders bei langen Texten oder Aufgaben mit strengen Anforderungen
- **Begrenzte Kontextlänge**: Sie ist durch die Anzahl der token begrenzt; wenn sich viele Runden ansammeln, können die frühesten Inhalte komprimiert werden

<Callout type="tip">
**Grenzfall**: Wenn eine einzelne Frage und Antwort das Gespräch abschließt, gilt: 1 Runde = 1 Sitzung.
</Callout>

## Warum dieser Unterschied wichtig ist
Innerhalb einer einzelnen Sitzung beantwortet Kimi jede neue Frage oder Anweisung unter Bezug auf alle bisherigen Runden. Wenn sich Runden ansammeln und die Inhalte länger werden, kann die Antwortqualität allmählich nachlassen.

### Häufige Szenarien
**Szenario 1: Themenwechsel**
- Falsch: In einer Sitzung, in der du gerade einen Roman mit 30.000 Wörtern schreibst, fragst du: "Hilf mir, meine Steuern zu berechnen"
- Richtig: Starte für die Steuerfrage eine neue Sitzung — so vermeidest du, dass Kimi Romanfiguren mit Steuerbegriffen vermischt
**Szenario 2: Verarbeitung langer Dokumente**
- Nach Dutzenden von Runden kann Kimi Regeln oder Dateizusammenfassungen "vergessen", die am Anfang festgelegt wurden
- Lösung: Fasse während der Aufgabe proaktiv zusammen ("Fasse unseren bisherigen Plan zusammen") oder starte eine neue Sitzung
**Szenario 3: Produktlimits verstehen**
- Grenzen der Kontextlänge werden in tokens gemessen; im Alltag kannst du sie dir aber als "Runden" vorstellen
- Wenn du eine Aufforderung wie "Neuen Chat starten" siehst, bedeutet das, dass die aktuelle Sitzung zu viele Runden hat
## Empfehlungen

<Callout type="tip">
**Für jede Aufgabe eine neue Sitzung starten**: Eigenständige Aufgaben — Aufsatz schreiben, recherchieren, debuggen — sollten jeweils eine eigene Sitzung erhalten, damit sich Kontexte nicht gegenseitig stören.
</Callout>

<Callout type="tip">
**Lange Sitzungen regelmäßig zusammenfassen**: Bitte Kimi nach 20+ Runden aktiv, die wichtigsten Informationen zusammenzufassen, um Datenverlust zu vermeiden.
</Callout>

<Callout type="tip">
**Sensible Informationen zeitnah bereinigen**: Der Chatverlauf bleibt erhalten; lösche nach der Bearbeitung privater Inhalte die gesamte Sitzung.
</Callout>
