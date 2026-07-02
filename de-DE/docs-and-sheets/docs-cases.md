---
title: "Anwendungsfälle für Kimi Docs & Prompt-Bibliothek"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Anwendungsfälle für Kimi Docs & Prompt-Bibliothek - Kimi Hilfecenter"
  description="Beispielhafte Anwendungsfälle und Prompts für Kimi Docs – vom Manuskriptlektorat über professionelle Übersetzungen bis hin zum PDF-Design."
/>

# Anwendungsfälle für Kimi Docs & Prompt-Bibliothek

<Callout type="info">
Beispielhafte Anwendungsfälle und Prompts für Kimi Docs – vom Manuskriptlektorat über professionelle Übersetzungen bis hin zum PDF-Design.
</Callout>

## Lektorat-Experte

Wie ein sorgfältiger Lektor zerlegt Kimi Ihr Korrektur-Feedback, findet die passenden Stellen in Ihrem Dokument und fügt automatisch ausführliche Kommentare und Vorschläge ein.

**Beispiel-Prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Du bist ein erfahrener Manuskriptgutachter mit Spezialisierung auf Smart Cities und Regionalplanung.\nNachfolgend findest du eine Reihe konkreter Überarbeitungskommentare. Analysiere diese Punkte sorgfältig,\nfinde die entsprechenden Absätze oder Abbildungen im angehängten Word-Dokument und\nfüge die Punkte zusammen mit detaillierten Überarbeitungsvorschlägen als Kommentare ein. Hinweis: Die\nKommentare sollen sich lesen, als wären sie von einem Menschen geschrieben, nicht von einer KI — vermeide eine Formatierung mit Aufzählungspunkten.\n\nGib das Originalmanuskript mit den detaillierten Kommentaren aus.",
    },
  ]}
/>

## Professionelle Übersetzung

Wie ein unermüdlicher Übersetzer überträgt Kimi ein 50-seitiges englisches PDF Seite für Seite ins Französische und behält dabei alle Formeln und Codeabschnitte bei.

**Beispiel-Prompt**:

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Finde das PDF der ersten Aufgabe von Stanfords Kurs CS336 auf Englisch und\nkonvertiere es dann in ein französisches PDF. Bewahre den gesamten Code und alle mathematischen Formeln in der französischen Version.\nDie Übersetzung soll flüssig sein — lasse nichts weg und füge nichts hinzu.",
    },
  ]}
/>

<Frames
  src="./images/docs-cases/translate.png"
  alt="Übersetzung"
/>

## PDF-Design & Veröffentlichungsservice

Wie ein Layout-Designer hilft Ihnen Kimi bei der Planung visueller Elemente, ordnet Text und Bilder automatisch an und erstellt PDF-Portfolios in Druckqualität.

<CodePreview
  files={[
    {
      name: "prompt.md",
      language: "markdown",
      content: "Du bist eine KI für kuratorisches Publizieren, spezialisiert auf moderne Kunst, insbesondere auf Picasso-Studien.\nDeine Aufgabe: umfangreiches Bildmaterial nutzen, um dem Publikum verständlich zu machen, warum Picasso\nimmer wieder neu betrachtet werden muss.\n\nGib das Ergebnis direkt als PDF aus.\n\nI. Grundlegende Anforderungen\nUmfangreiches Bildmaterial\nJede Epoche, jeder Künstlerbezug und jede Strömung muss mit unterstützenden Bildern versehen sein\nBevorzuge Bilder mit belegter Quelle\nVerwende KI-generierte Bilder in hoher Wiedergabetreue nur, wenn keine quellenbelegten Bilder verfügbar sind\n\nII. Visuelles System\nMAP-Logo als seitenfüllendes Wasserzeichen\nAsymmetrisches Layout\nKlares Raster mit kontrollierten lokalen Brüchen\nKontrastreiches Schwarz-Weiß + primärfarbige Akzente\n\nIII. Inhaltsstruktur (alle Abschnitte erzeugen)\n1. Titelseite\nPicasso\nAusstellungsuntertitel (English & Chinese)\nMAP-Logo-Wasserzeichen\n\n2. Warum Picasso (mit Bildern)\nPicasso-Porträts aus verschiedenen Epochen\nWerke aus verschiedenen Epochen gegenübergestellt\n\n3. Epochen und Strömungen (bildzentriert)\nJede Epoche muss 8 bis 12 Bilder enthalten:\nBlaue Periode\nRosa Periode\nKubismus (analytisch / synthetisch)\nKrieg und Politik\nSpäte Experimente\n\nBildtypen:\nGesamtes Werk\nDetailausschnitte\nStrukturelle Dekonstruktionsdiagramme (bei Bedarf KI-generiert)\n\n4. Schlüsselwerke\nNicht weniger als 25 Werke\nEinzelne Werke dürfen ganze Seiten einnehmen\nSchwerpunkt auf Struktur, Perspektive und Dekonstruktion\n\n5. Wie man Picasso betrachtet\nBildbasierte vergleichende Erläuterungen\nNebeneinanderstellungen desselben Motivs\n\n6. Ausstellungssaal und Rhythmus\nBereiche mit hoher Betrachtungsdichte\nReflexive Pufferzonen\n\n7. MAPs zeitgenössische Position\nWarum Shanghai Picasso braucht\nWarum dieser Moment wichtig ist",
    },
  ]}
/>

## Weitere Szenarien & Beispiel-Prompts

| Szenario | Beispiel-Prompt |
|------|-----------|
| **Fachbericht** | Erstelle in Word ein „Whitepaper zur chinesischen Low-Altitude-Economy-Branche 2026“ im McKinsey-Stil mit Marktgröße, Wettbewerbslandschaft, politischem Kontext und Investitionsempfehlungen |
| **Vertragsprüfung** | [Vertrag.docx hochladen] Prüfe diesen Vertrag aus Sicht eines Anwalts, identifiziere Risikoklauseln und füge Kommentare ein |
| **Finanzmodellierung** | Erstelle in Word ein dreijähriges SaaS-Finanzprognosemodell mit Umsatzprognosen, Kostenstruktur und Cashflow |
| **Verdichtung langer Texte** | Verdichte diese 30.000 Wörter umfassende wissenschaftliche Arbeit zu einer 5.000 Wörter langen Management-Zusammenfassung im Word-Format |
| **Mehrversionen-Vergleich** | [Vertrag V1 und V2 hochladen] Vergleiche die Versionen, liste alle Änderungen samt Auswirkungsbeschreibung auf und gib das Ergebnis als Word aus |
