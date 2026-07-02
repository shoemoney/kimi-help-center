---
title: "Anwendungsfälle für Kimi Sheets & Prompt-Bibliothek"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Anwendungsfälle für Kimi Sheets & Prompt-Bibliothek - Kimi Hilfecenter"
  description="Beispielhafte Anwendungsfälle und Prompts für Kimi Sheets – von der Finanzbewertung bis zur Storyboard-Erstellung."
/>

# Anwendungsfälle für Kimi Sheets

<Callout type="info">
Beispielhafte Anwendungsfälle und Prompts für Kimi Sheets – von der Finanzbewertung bis zur Storyboard-Erstellung.
</Callout>

## Finanzbewertung

Wie ein Finanzanalyst sammelt Kimi reale Finanzdaten, erstellt ein DCF-Bewertungsmodell und führt eine simulierte Unternehmensbewertung durch.

<Frames
  src="./images/sheets-cases/dcf.png"
  alt="DCF"
/>

**Beispiel-Prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Führe eine DCF-Bewertung von XX Healthcare durch. Übertrage den gesamten Bewertungsprozess und die Daten\nin eine Excel-Tabelle, gib die Datenquellen an, erläutere die Begründung hinter den geschätzten\nKennzahlen wie Marktgröße, Wachstumsraten und Marktanteil und beziehe eine Analyse des makroökonomischen Umfelds ein.",
    },
  ]}
/>

## Storyboard-Erstellung

Wie ein Storyboard-Künstler erstellt Kimi Video-Storyboard-Skripte im Excel-Format – mit Dauer, Einstellungsbeschreibungen, Voiceover, Soundeffekten und Referenzbildern.

<Frames
  src="./images/sheets-cases/transcript.png"
  alt="Transcript"
/>

**Beispiel-Prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Erstelle ein Storyboard-Skript in Excel für ein 3D-Werbevideo über das neue\nUpgrade von Kimi AI — OK Computer —, das die Erstellung und Bearbeitung von Office-Dokumenten unterstützt\n(z. B. Formatierung langer Abschlussarbeiten in Word, Datenmodellierung und -analyse in Excel,\nautomatische Foliengenerierung).\n\nDie Excel-Datei soll Folgendes enthalten:\nSpalte A: Sequenznummer (1-20)\nSpalte B: kumulierte Dauer (Sekunden)\nSpalte C: Einstellungsdauer (Sekunden)\nSpalte D: Einstellungsbeschreibung (3D / Kamerabewegung)\nSpalte E: Erzählung/Text (verwende unterschiedliche Hintergrundfarben, um die Erzählung\nvom Bildschirmtext zu unterscheiden)\nSpalte F: Soundeffekte/Hintergrundmusik (verwende unterschiedliche Schriftfarben zur Unterscheidung)\nSpalte G: Storyboard-Frames (erzeuge ein Bild für jede Einstellung — wahre die visuelle Konsistenz\ndurch den klassischen Stil einer Strichskizze in Schwarz-Weiß)\n\nEntwirf eigenständig das kreative Konzept, das Skript und die Storyboards und\nerzeuge dann die Frames, um dieses Skript zu vervollständigen, präsentiert in einem gepflegten Excel-Format.",
    },
  ]}
/>

## Weitere Szenarien & Beispiel-Prompts

| Szenario | Beispiel-Prompt |
|------|-----------|
| Finanzmodellierung | Erstelle eine DCF-Bewertung von Firma XX – überführe den gesamten Prozess und die Daten in Excel, gib Quellen an und erläutere die Begründung hinter zentralen Annahmen wie Wachstumsraten |
| Branchendatenvergleich | Recherchiere die 20 größten inländischen NEV-Unternehmen – liste Marktkapitalisierung, Absatzzahlen für 2025, Flaggschiff-Modelle und aktuelle Nachrichten in einer Vergleichstabelle auf |
| Literaturkatalogisierung | Suche nach Veröffentlichungen zur LLM-Inferenzoptimierung aus den letzten drei Monaten – ordne sie in Excel nach Titel, Autoren, Kernmethodik und wichtigsten Beiträgen |
| Zusammenführen mehrerer Tabellenblätter | [12 monatliche Verkaufs-Excel-Dateien hochladen] Füge diese 12 Tabellenblätter zu einer Jahresübersicht zusammen, berechne die Wachstumsraten gegenüber dem Vormonat und verknüpfe die Blätter mit Formeln |
| Extraktion von Vertriebskontakten | [Messe-PDF/-Bilder hochladen] Extrahiere alle Ausstellerinformationen und ordne sie in einer Excel-Datei mit 1.000 Zeilen für Vertriebskontakte nach Firmenname, Kontaktdaten und Produktkategorie |
| Projektmanagement | Erstelle ein PMO-Projektmanagement-Excel mit Aufgabenliste, Verantwortlichen, Fortschrittsstatus, Gantt-Diagramm und blattübergreifender Verknüpfung |
| Datenvisualisierung | Verwandle dieses Verkaufsdaten-Excel in ein visuelles Dashboard mit Trendliniendiagrammen, regionalen Verteilungsdiagrammen und Ring-Diagrammen zur Abschlussquote |
