---
title: "Anwendungsfälle für Kimi Sheets & Prompt-Bibliothek"
slug: "sheets-cases"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="Anwendungsfälle für Kimi Sheets \u0026 Prompt-Bibliothek - Kimi Help Center"
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
      content: "Perform a DCF valuation of XX Healthcare. Put the entire valuation process and data\ninto an Excel spreadsheet, cite data sources, provide the reasoning behind estimated\nfigures such as market size, growth rates, and market share, and incorporate macro\nenvironment analysis.",
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
      content: "Create a storyboard script in Excel for a 3D promotional video about Kimi AI's new\nupgrade — OK Computer — which supports generating and editing Office documents\n(e.g., long-form thesis formatting in Word, data modeling and analysis in Excel,\nautomatic slide generation).\n\nThe Excel should include:\nColumn A: Sequence number (1-20)\nColumn B: Cumulative duration (seconds)\nColumn C: Shot duration (seconds)\nColumn D: Shot description (3D / camera movement)\nColumn E: Narration/text (use different background colors to distinguish narration\nfrom on-screen text)\nColumn F: Sound effects/BGM (use different font colors to distinguish)\nColumn G: Storyboard frames (generate an image for each shot — maintain visual\nconsistency using the classic black-and-white line sketch style)\n\nPlease design the creative outline, script, and storyboards independently, then\ngenerate frames to complete this script, presented in a polished Excel format.",
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
