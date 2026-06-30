---
title: "Agentic Search"
slug: "search"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Agentic Search für Anleitungen und Antworten｜Kimi Hilfecenter"
  description="Kimis Agentic Search basiert auf einer durchgängigen agentischen Reinforcement-Learning-Architektur. Anders als herkömmliche Tool-Orchestrierungsansätze lässt es die KI..."
/>

# Agentic Search

<Callout type="info">
Kimis Agentic Search basiert auf einer durchgängigen agentischen Reinforcement-Learning-Architektur. Anders als herkömmliche Tool-Orchestrierungsansätze entscheidet die KI hier selbst, wann sie sucht, welche Tools sie aufruft und wie sie ihre Strategie anpasst – und meistert so komplexe Aufgaben beim Sammeln und Verarbeiten von Informationen.
</Callout>

Im Vergleich zur klassischen schlagwortbasierten Suche hat Kimis Suchfunktion zwei große Entwicklungsschritte durchlaufen:
- **Explorer Search** (Oktober 2024) verband das semantische Verständnis großer Sprachmodelle mit dem Abruf von Echtzeitinformationen, zerlegte komplexe Fragen automatisch und führte Quellen nach.
- **Agentic Search** geht mit eigenständiger Planung und Tool-Aufrufen noch weiter und unterstützt Finanzdatenabfragen, die Recherche wissenschaftlicher Literatur, die Bildersuche und weitere multimodale Aufgaben.

## Einstellungen zur Web Search

<Frames
  src="./images/search/web-search.png"
  alt="Web search"
/>

Die Web Search (Auto/Aus) durchbricht die Grenzen der Wissensaktualität und liefert Informationen in Echtzeit – verlässlich und nachvollziehbar.

Klicken Sie auf den Schalter „Web search“ unter dem Chat-Eingabefeld. Ist er aktiviert, entscheidet Kimi selbst, ob die aktuelle Frage Echtzeitdaten erfordert, und ruft gezielt Suchmaschinen und Fachdatenbanken auf, um Informationen abzurufen und zusammenzuführen.

## Kernfunktionen

### 1. Aktualität trifft Autorität
Echtzeit-Webabruf aus über 100 geprüften, vertrauenswürdigen Quellen (führende Nachrichtenmedien, behördliche Mitteilungen, Finanzdatenplattformen, akademische Fachzeitschriften-Datenbanken) – so sind Informationen gleichermaßen aktuell und fundiert.

### 2. Quellenangaben
Alle auf Suche basierenden Antworten enthalten Links zu den Referenzquellen. Klicken Sie sie an, um die Originalseite aufzurufen und Richtigkeit sowie Kontext vollständig zu überprüfen.

### 3. Weltweiter Informationszugang
Unterstützt natürlichsprachliche Gespräche in mehreren Sprachen. Kimi kann gezielt nicht-englische Quellen durchsuchen (etwa japanische technische Dokumentationen oder französische Nachrichten) und mehrsprachige Informationen automatisch zusammenführen.

## Empfohlene Anwendungsfälle

- Aktuelle Nachrichten und Entwicklungen (Eilmeldungen, Börsendaten, politische Änderungen)
- Faktenprüfung (Online-Gerüchte, historische Daten, statistische Methoden)
- Fachrecherche (Wettbewerbsanalysen, wissenschaftliche Trends, Branchenstandards)

## Abzeichen für autoritative Quellen

Kimis Web Search filtert Quellen nach drei Kriterien – Relevanz, Autorität und Aktualität – und schließt riskante Websites, mehrfach verbreitete Inhalte, minderwertige Webinhalte und halluzinierte Informationen automatisch aus, um zuverlässige Ergebnisse zu gewährleisten.

Hochwertige Quellen, die Kimis strenge Prüfung bestehen, werden in den Antworten mit Autoritätsabzeichen gekennzeichnet (etwa Symbole für offizielle Website-Zertifizierung, akademische oder mediale Zertifizierung) und helfen Ihnen, besonders vertrauenswürdige Informationen schnell zu erkennen.

**Mechanismus der Quellenprüfung**:
- **Herausgefiltert**: minderwertige Aggregator-Seiten, ungeprüfte Eigenmedien, abgelaufene zwischengespeicherte Seiten
- **Bevorzugt**: Websites von Behörden, autoritative Medien, akademische Fachzeitschriften, offizielle Kanäle der Finanzberichterstattung

## Finanz- und akademische Datenquellen

<Frames
  src="./images/search/screenshot-5.png"
  alt="screenshot 5"
/>

In professionellen Szenarien kann Kimi Fachdatenbanken abfragen und so strukturierte, nachvollziehbare Fachdaten liefern.

<Frames
  src="./images/search/screenshot-6.png"
  alt="screenshot 6"
/>

Formulieren Sie Ihr Anliegen einfach im Gespräch, und Kimi wählt automatisch die passende Datenquelle aus.

### Beispielabfragen

- „Zeig mir Apples Umsatzdaten der letzten fünf Jahre“
- „Suche die neuesten Arbeiten zur Inferenzoptimierung großer Sprachmodelle“
- „Vergleiche BIP, Pro-Kopf-BIP und Arbeitslosenquoten der drei größten Volkswirtschaften der Welt“

### Unterstützte Datenquellen

| Quelle | Beschreibung |
|--------|-------------|
| **Global Finance Data** | Weltweite Finanzdaten zu Aktien, Futures, Indizes und mehr |
| **Academic data** | Fachzeitschriften, Aufsätze, Preprints, Dissertationen, Patente und mehr |
| **Stock Finance data** | Chinesische und weltweite Finanzdaten zu Aktien, Futures, Indizes und mehr |
| **World Bank Data** | BIP, Bevölkerung, Beschäftigung, Handel einzelner Länder und mehr |

## Intelligente Suche

### Bildersuche

Kimi unterstützt die bildbasierte Suche und das Bildverständnis. Nach dem Hochladen eines Bildes kann Kimi automatisch Werkzeuge zur Bildersuche aufrufen, den Inhalt erkennen und zugehörige Informationen abrufen.

**Beispielabfragen**:
- „Wo ist dieser Ort?“
- „Worum geht es bei diesem Meme / was sagt diese Person?“
- „Finde das echte McDonald's“

**So funktioniert es**:
- Laden Sie ein Bild direkt hoch (unterstützt JPG, PNG und weitere Formate)
- Beschreiben Sie den Bildinhalt oder stellen Sie bildbezogene Fragen in Ihrer Eingabe
- Kimi verbindet Bilderkennung mit Web Search und liefert Bildherkunft, ähnliche Bilder und zugehörige Informationen

**Typische Szenarien**:
- Unbekannte Objekte, Wahrzeichen oder Produktmodelle erkennen
- Quelle oder Herkunft eines Bildes ermitteln
- Daten in Diagrammen oder Screenshots analysieren und passende Hintergrundinformationen abrufen

### Direkter URL-Zugriff

Kimi Search unterstützt den direkten URL-Zugriff, um Internetressourcen abzurufen.

<Frames
  src="./images/search/screenshot-22.png"
  alt="screenshot 22"
/>

**Fügen Sie eine URL direkt in das Gespräch ein**, und Kimi ruft den Seiteninhalt automatisch ab und analysiert ihn.

**Beispielhafte Anwendungsfälle**:
- Fasse die wichtigsten Punkte dieses Artikels zusammen
- Extrahiere die wichtigsten Daten aus diesem Quartalsbericht-PDF
- Suche nach Bildinformationen aus der URL

## Tipps

<Callout type="warning">
- Bevorzugen Sie **öffentlich zugängliche** Links (z. B. Nachrichtenseiten, öffentliche PDF-Dokumente)
- Manche **passwortgeschützten** oder für Crawler gesperrten Seiten sind möglicherweise nicht erreichbar
- Bei **dynamisch geladenen** Seiten kann Kimi unter Umständen nur den anfänglichen HTML-Inhalt abrufen
- Kimi **kann geteilte Gesprächslinks nicht erneut lesen** (also Links zu anderen Kimi-Chats)
</Callout>
