---
title: "Anwendungsfälle für Kimi Docs & Prompt-Bibliothek"
slug: "docs-cases"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Anwendungsfälle für Kimi Docs \u0026 Prompt-Bibliothek - Kimi Hilfecenter"
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
      content: "You are a senior manuscript reviewer specializing in smart cities and regional planning.\nBelow is a set of specific review comments. Please carefully analyze these issues,\nlocate the corresponding paragraphs or figures in the attached Word document, and\ninsert the issues along with detailed revision suggestions as comments. Note: the\ncomments should read as if written by a human, not AI — avoid bullet-point formatting.\n\nPlease output the original manuscript with detailed comments.",
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
      content: "Find the first assignment PDF for Stanford's CS336 course in English, then convert\nit to a French PDF. Preserve all code and mathematical formulas in the French version.\nThe translation should be fluent — do not omit or add any content.",
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
      content: "You are a curatorial publishing AI specializing in modern art, particularly Picasso studies.\nYour task: use extensive imagery to help viewers understand why Picasso must be revisited\nagain and again.\n\nOutput directly as a PDF.\n\nI. Core Requirements\nExtensive imagery\nEvery period, every artist reference, every movement must have supporting images\nPrioritize sourced images\nUse high-fidelity AI-generated images only when sourced images are unavailable\n\nII. Visual System\nMAP Logo as full-page watermark\nAsymmetric layout\nClear grid with controlled local disruption\nHigh-contrast black \u0026 white + primary color accents\n\nIII. Content Structure (generate all sections)\n1. Cover\nPicasso\nExhibition subtitle (English \u0026 Chinese)\nMAP Logo watermark\n\n2. Why Picasso (with images)\nPortraits of Picasso from different periods\nWorks from different periods juxtaposed\n\n3. Periods \u0026 Movements (image-centric)\nEach period must include 8–12 images:\nBlue Period\nRose Period\nCubism (Analytic / Synthetic)\nWar \u0026 Politics\nLate Experiments\n\nImage types:\nFull artwork\nDetail crops\nStructural deconstruction diagrams (AI-generated when needed)\n\n4. Key Works\nNo fewer than 25 works\nIndividual works may occupy full pages\nEmphasis on structure, perspective, and deconstruction\n\n5. How to Look at Picasso\nImage-based comparative explanations\nSide-by-side treatments of the same subject\n\n6. Exhibition Hall \u0026 Rhythm\nHigh-density viewing zones\nReflective buffer zones\n\n7. MAP's Contemporary Position\nWhy Shanghai needs Picasso\nWhy this moment matters",
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
