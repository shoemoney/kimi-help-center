---
title: "Kimi Websites"
slug: "websites-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Erstellen und veröffentlichen Sie Websites aus natürlichsprachlichen Beschreibungen, Design-Mockups oder Vorlagen."
---

<SeoMeta
  title="Kimi Websites im Überblick - Kimi Hilfecenter"
  description="Erstellen und veröffentlichen Sie Websites aus natürlichsprachlichen Beschreibungen, Design-Mockups oder Vorlagen."
/>

# Kimi Websites

<Callout type="info">
**Kimi Websites** ist eine Funktion des Kimi Agent, die auf dem neuesten multimodalen visuellen KI-Modell Kimi K2.6 basiert. Ihre Kernfähigkeit ist **Vibe Coding** – das Erzeugen von Websites aus natürlicher Sprache und deren Veröffentlichung im Web.
</Callout>

Kimi versteht visuelle Eingaben (UI-Mockups, Screenshots, Interaktionsvideos) sowie natürlichsprachliche Anweisungen und übersetzt sie in vollständigen, lauffähigen Frontend-Code – nicht nur statische Oberflächen, sondern auch dynamisches, interaktives Verhalten.

## Funktionsüberblick

| Funktion | Beschreibung |
|---------|------------|
| **Dialogbasierter Website-Aufbau** | Beschreiben Sie Ihre Anforderungen in natürlicher Sprache; die KI erstellt die Website automatisch |
| **Bild-/Videoverständnis** | Laden Sie Design-Mockups, Screenshots oder Bildschirmaufnahmen hoch; die KI analysiert sie und erzeugt HTML-Seiten |
| **Automatische Bereitstellung** | Veröffentlichung per Klick in Sekundenschnelle |
| **Mehrstufige Bearbeitung** | Iterative Überarbeitung mit Versionsvergleich |
| **Teilen per Klick** | Erzeugen zugänglicher Links zum einfachen Teilen |
| **Vorlagenauswahl** | Mehrere vorgefertigte Vorlagen für einen schnellen Start |
| **Code-Export** | Laden Sie gepackte HTML-/CSS-/JS-Dateien zum eigenen Hosten herunter |

## Wie verwendet man Kimi Websites?

### Methode 1: Die Kimi-Websites-Seite aufrufen

<Frames
  src="./images/overview/kimi-websites-homepage.png"
  alt="Kimi websites homepage"
/>

1. **Browser öffnen**: Nutzen Sie Chrome, Safari, Edge, Firefox oder einen anderen gängigen Browser
2. **Aufrufen**: [kimi.com/websites](https://www.kimi.com/zh/websites) (unterstützt Chinesisch und Englisch)
3. **Anmelden**: Mit Ihrem Kimi-Konto (Telefonnummer oder E-Mail)
4. **Aufgabe eingeben**:

| Vorgehen | Beschreibung |
|----------|-------------|
| **Texteingabe** | Geben Sie Ihre Anfrage in natürlicher Sprache ein |
| **Bild-/Website-Klonen** | Laden Sie ein Design-Mockup oder einen Screenshot hoch |
| **Vorlagenbasiert** | Wählen Sie eine vorgefertigte Vorlage und passen Sie den Inhalt an |

5. **Aufbau starten**: Wählen Sie eine Vorlage oder beginnen Sie im Dialog

<Frames
  src="./images/overview/screenshot-27.png"
  alt="screenshot 27"
/>

### Methode 2: Mobile App

Für iOS, Android und HarmonyOS gibt es die offizielle Kimi-App. Tippen Sie im Eingabebereich auf die **Taskleiste** → wechseln Sie in den **Websites-Agent-Modus**, der multimodale Generierungswerkzeuge und Agent-Funktionen umfasst.

### Methode 3: K2.6-Agent-Modus verwenden

Wechseln Sie in den K2.6-Agent-Modus und geben Sie eine Aufgabe zum Website-Aufbau ein. Kimi nutzt dann seine visuellen Coding-Fähigkeiten und Werkzeuge zur Codeausführung.

## Wie funktioniert Kimi Websites?

### Schritt 1: Eine Website im Dialog erstellen

Beschreiben Sie Ihre Anforderungen in natürlicher Sprache. Es werden drei Erstellungsmethoden unterstützt:

| Methode | Beschreibung |
|--------|------------|
| **Textbeschreibung** | Geben Sie die Website-Anforderungen direkt ein; die KI erzeugt sie automatisch |
| **Design-Mockup-Analyse** | Laden Sie eine Designdatei hoch; die KI erkennt sie und bildet sie als Webseite nach |
| **Schneller Vorlagenaufbau** | Wählen Sie eine vorgefertigte Vorlage und passen Sie den Inhalt an |

**Beispiel-Prompt**:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Build a website for West Highland Terrier dogs with a black-and-white color scheme. Include three sections:\nA studio-quality photo calendar with AI-generated image display\nA \"Curly Lab\" care and grooming encyclopedia\nA merchandise store selling Westie-print hoodies and limited-edition silver-foil posters. The checkout page should include a charity module — donate $1 per item sold to stray dog rescue.",
    },
  ]}
/>

### Schritt 2: Aufbauprozess

<Frames
  src="./images/overview/screenshot-26.png"
  alt="screenshot 26"
/>

Kimi Websites aktiviert das **webapp-building SKILL** – einen spezialisierten Agenten für mehrstufige Codegenerierung:
1. **Anforderungsanalyse**: Analysiert Website-Module, visuellen Stil und Interaktionslogik
2. **Aufgabenplanung**: Zerlegt die Aufgabe in Teilaufgaben für Design, Entwicklung und Asset-Vorbereitung
3. **Tech-Stack-Auswahl**: Wählt eine passende Architektur (z. B. React + Tailwind CSS)
4. **Asset-Generierung**: Erzeugt Bilder, Symbole und weitere visuelle Assets
5. **Code-Erstellung**: Schreibt Seitenstruktur, Styling und Interaktionscode
6. **Mehrstufige Optimierung**: Passt sich anhand der Vorschauergebnisse selbst an, bis alles fertig ist

### Schritt 3: Vorschau & Anpassung
- **Live-Vorschau**: Erzeugt eine HTML-Demo-URL zur sofortigen Ansicht im Browser
- **Dialogbasierte Bearbeitung**: Setzen Sie den Dialog fort, um Änderungen anzufordern, z. B. *„Mach die Navigationsleiste dunkel“*

<Callout type="tip">
**Beispiel**: *„Die Farben gefallen mir nicht – lass die Schwarz-Weiß-Vorgabe weg und mach eine ganz normal aussehende Website.“*
Kimi organisiert die To-do-Liste neu und arbeitet weiter.
</Callout>

<Frames
  src="./images/overview/web-case2.png"
  alt="web case2"
/>

### Schritt 4: Visuelle Online-Bearbeitung
- **Mehrstufige Optimierung**: Feinabstimmung der Details im laufenden Dialog
- **Bearbeitungsmodi**:
  - **Annotationsmodus**: Klicken Sie auf Bereiche, um natürlichsprachliche Anmerkungen hinzuzufügen
  - **Auswahlmodus**: Wählen Sie ein beliebiges Element aus und fügen Sie Anmerkungen hinzu
  - Nutzen Sie Rechtecke, Pfeile, Pinsel und Farbwechsel, um Änderungsvorschläge zu markieren
- Senden Sie alle Änderungsvorschläge auf einmal an Kimi
### Schritt 5: Bereitstellung & Veröffentlichung
| Bereitstellungsmethode | Beschreibung |
|-------------------|------------|
| **Automatische Bereitstellung** | Veröffentlichung per Klick mit generiertem Online-Link |
| **Herunterladen & selbst hosten** | Laden Sie die gepackten Code-Dateien herunter und stellen Sie sie auf Ihrem eigenen Server bereit |
| **Eigene Domain** | Verknüpfen Sie die generierte Website mit Ihrer eigenen Domain |

Nach der Generierung können Sie:
- Auf verschiedene Bereitstellungsversionen klicken, um die Versionsdateien herunterzuladen
- Auf die Teilen-Schaltfläche klicken, um einen öffentlich bereitgestellten Link zu erhalten (oder auf privat stellen)
- Auf die Bearbeiten-Schaltfläche klicken, um weiter zu überarbeiten
- Den vollständigen HTML-/CSS-/JS-Code zur direkten Bereitstellung oder weiteren Verfeinerung herunterladen

<Frames
  src="./images/overview/web-case1.png"
  alt="web case1"
/>

## Zielgruppe
| Zielgruppe | Anwendungsfall |
|----------|----------|
| **Entwickler** | Produktprototypen und Frontend-Demos entwerfen und dabei die Zeit für den Aufbau von Grund auf drastisch verkürzen |
| **Gründer** | Schnell Landingpages, Produktpräsentationen und Unternehmenswebsites mit begrenzten Ressourcen erstellen |
| **Produktmanager** | PRDs oder Design-Mockups rasch in vorführbare, interaktive Prototypen verwandeln |
| **Nutzer ohne technischen Hintergrund** | Kein Programmieren nötig – beschreiben Sie Ihre Idee oder laden Sie ein Referenzbild hoch, um vom Konzept zur funktionierenden Webseite zu gelangen |

## Referenzszenarien
| Szenario | Beispiel-Prompt |
|----------|---------------|
| **Landingpage von Grund auf** | Erstelle eine SaaS-Marketing-Landingpage mit modernem Tech-Look – mit Hero-Bereich, Funktionsüberblick, Preisgestaltung und CTA |
| **Video-zu-Website-Reproduktion** | [Bildschirmaufnahme hochladen] Reproduziere die im Video gezeigte Website und behalte die ursprünglichen Interaktionseffekte bei |
| **Screenshot-Reproduktion** | [Design-Mockup hochladen] Wandle dieses Design in lauffähigen Webseiten-Code um |
| **Persönliches Portfolio** | Erstelle eine Portfolio-Website für einen Fotografen – minimalistischer Schwarz-Weiß-Stil mit Bild-Masonry-Layout |
| **Datenvisualisierungsseite** | Erstelle eine Visualisierungsseite mit den Finanzierungsdaten von KI-Unternehmen 2025 inklusive Diagrammen und Filtern |
| **Markenwebsite** | Erstelle eine Website für eine Kaffeemarke in gedeckten Erdtönen – mit Startseite, Produkten und Filialfinder |
| **Werkzeug / Rechner** | Erstelle eine BMI-Rechner-Webseite – aufgeräumte Oberfläche, mit Einheitenumschaltung und Anzeige der Gesundheitsstufen |
