---
title: "Kimi Browsererweiterung: Demo-Anwendungsfälle"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Browsererweiterung: Demo-Anwendungsfälle – Kimi Help Center"
  description="Entdecken Sie typische Anwendungsfälle für Kimi Browsererweiterung: Reiseplanung, Wohnungssuche, Literaturrecherche, Preisvergleich und mehr – mit Prompt-Beispielen zum direkten Kopieren."
  ogType="article"
/>

# Kimi Browsererweiterung: Demo-Anwendungsfälle

Alle unten stehenden Aufgaben können Sie direkt an Kimi übergeben: Chatten Sie in der Seitenleiste oder lassen Sie sie von einem lokalen Agenten ausführen.

## Informationen finden und strukturieren

Wenn Sie mehrere Websites durchsuchen müssen, kann Kimi Browsererweiterung den Agent Zielseiten automatisch öffnen, zentrale Inhalte extrahieren und in strukturierter Form aufbereiten lassen. So sparen Sie sich das mühsame Öffnen einzelner Seiten sowie manuelles Kopieren und Einfügen.

### Reiseplanung

Wechseln Sie zwischen Flugplattformen, Hotelbuchungsseiten und Reisecommunities, um Preise und Zeiten zu vergleichen, und lassen Sie anschließend Reisepläne, Budgettabellen und Unterkunftsvorschläge erstellen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ich plane im November eine 5-tägige Reise mit 4 Übernachtungen nach Kyoto für zwei Personen, mit einem Budget von etwa RMB 8.000. Bitte prüfe Flüge, Hotels und Öffnungszeiten von Sehenswürdigkeiten und bereite die Ergebnisse als Reiseplan Tag für Tag sowie als Budgettabelle auf.",
    },
  ]}
/>

### Mietangebote prüfen

Durchsuchen Sie mehrere Mietplattformen gleichzeitig, filtern Sie Angebote nach Miete, Pendelzeit, Wohnungstyp und weiteren Kriterien, führen Sie die Informationen zusammen und lassen Sie Empfehlungen priorisieren.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bitte hilf mir, eine Mietwohnung in der Nähe der Station Zhangjiang Hi-Tech Park in Shanghai zu finden. Mein Budget liegt bei maximal RMB 4.500, die Pendelzeit sollte unter 40 Minuten liegen, und bevorzugt wird eine ganze Einzimmerwohnung. Öffne mehrere Plattformen, strukturiere Angebotslinks, Preise, Wohnflächen und Pendelzeiten und erstelle eine priorisierte Kontaktliste.",
    },
  ]}
/>

## Inhalte recherchieren und analysieren

Kimi Browsererweiterung kann den Agent Suchergebnisse automatisch durchsuchen, Detailseiten öffnen, Titel, Daten, Kommentare und weitere Informationen extrahieren und sie anschließend analysieren und zusammenfassen lassen. Das eignet sich besonders für Rechercheaufgaben, bei denen viele Webseiten gesichtet werden müssen.

### Literaturrecherche

Suchen Sie wissenschaftliche Literatur, extrahieren Sie Abstracts, zentrale Methoden, experimentelle Schlussfolgerungen und Zitationsbeziehungen und geben Sie eine strukturierte Übersicht aus.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bitte recherchiere repräsentative Arbeiten der letzten zwei Jahre zum Thema AI Agent memory, strukturiere Titel, Autoren, Abstracts, zentrale Methoden und Open-Source-Links und fasse die Entwicklung der Forschung zusammen.",
    },
  ]}
/>

### Vertiefende Themensuche

Möchten Sie ein unbekanntes Thema verstehen? Lassen Sie Kimi automatisch suchen, die Ergebnisse einzeln lesen und alles zu einer Zusammenfassung zusammenführen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Suche nach lokalen AI-Modellen, deren Nutzung sich 2025 lohnt, und rufe den Volltext der Top-10-Ergebnisse ab.",
    },
  ]}
/>

## Unterstützung im Büroalltag

Nutzen Sie die Automatisierungsfunktionen von Kimi Browsererweiterung, um wiederkehrende Webabläufe zu erledigen und effizienter zu arbeiten.

### Preisvergleich im E-Commerce

Suchen Sie dasselbe Produkt auf mehreren E-Commerce-Plattformen, vergleichen Sie Preise, Spezifikationen und Nutzerbewertungen und lassen Sie die besten Kaufoptionen zusammenstellen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ich möchte einen 27-Zoll-4K-Monitor mit einem Budget von etwa RMB 2.000 kaufen. Bitte suche und vergleiche Optionen auf gängigen E-Commerce-Plattformen, strukturiere Preise, Marken und Nutzerbewertungen und empfehle die Angebote mit dem besten Preis-Leistungs-Verhältnis.",
    },
  ]}
/>

### Webdaten extrahieren

Extrahieren Sie strukturierte Daten wie Tabellen und Listen aus Webseiten und lassen Sie sie automatisch im angegebenen Format aufbereiten – ohne lästiges manuelles Kopieren und Einfügen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Bitte öffne diese Webseite, extrahiere die Produktpreistabelle auf der Seite und gib sie als übersichtliche Liste aus.",
    },
  ]}
/>

## Wiederkehrende Abläufe in Skills verwandeln

Muss derselbe Ablauf immer wieder ausgeführt werden, müssen Sie die Anweisung nicht jedes Mal neu eingeben. Kimi kann den Vorgang lernen und als Skill speichern – danach rufen Sie ihn jederzeit mit `/` auf.

### Vorgänge als Skill aufzeichnen

Ideal für Webroutinen mit festen Schritten, etwa wenn Sie täglich ein Dashboard öffnen, um Daten zu exportieren, oder immer dasselbe Formular ausfüllen.

1. Geben Sie `/` in der Seitenleiste ein und wählen Sie „Vorgänge als Skill aufzeichnen“
2. Führen Sie die Schritte einmal wie gewohnt aus – Kimi zeichnet jede Aktion auf
3. Klicken Sie auf „Stoppen und generieren“, und Kimi wandelt den Durchlauf in einen Skill um
4. Prüfen Sie Name, Schritte und Parameter des Skills und speichern Sie ihn (sensible Informationen wie Passwörter können als vertrauliche Parameter markiert und erst bei der Wiedergabe eingetragen werden)

Danach wählen Sie den Skill über `/` aus, und Kimi führt den Vorgang für Sie erneut aus. Die Schritte und Inhalte des Skills können Sie jederzeit anpassen.

### Eine Website in einen Skill verwandeln

Ideal für Websites, die Sie ständig nutzen, etwa ein festes Daten-Dashboard oder ein internes System.

Geben Sie `/` in der Seitenleiste ein und wählen Sie „Eine Website in einen Skill verwandeln“. Kimi analysiert automatisch Aufbau und Funktionsweise der Website, verpackt sie als einsatzbereiten Skill, und nach dem Speichern können Sie ihn jederzeit mit `/` aufrufen.

### Diese Sitzung als Skill speichern

Wenn Kimi in der aktuellen Unterhaltung bereits einen gelungenen Durchlauf abgeschlossen hat, können Sie ihn direkt zur Wiederverwendung speichern: Geben Sie `/` ein und wählen Sie „Diese Sitzung als Skill speichern“.

Weitere Anwendungsfälle finden Sie auf der [offiziellen Website von Kimi Browsererweiterung](https://www.kimi.com/zh-cn/features/webbridge).
