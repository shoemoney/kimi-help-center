---
title: "Häufige Anwendungsfälle"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Häufige Anwendungsfälle - Kimi Help Center"
  description="Hier finden Sie einige typische Szenarien für den Einsatz der Kimi Code CLI im Entwickleralltag – jeweils mit Beispiel-Prompts zur Orientierung."
/>

# Häufige Anwendungsfälle

Hier finden Sie einige typische Szenarien für den Einsatz der Kimi Code CLI im Entwickleralltag – jeweils mit Beispiel-Prompts zur Orientierung.

## Neue Funktionen umsetzen

Beschreiben Sie Ihre Anforderungen in natürlicher Sprache – die KI liest automatisch den relevanten Code, schreibt neuen Code und überprüft die Ergebnisse.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Füge der Benutzerlisten-Seite eine Funktion zum Sortieren nach Registrierungsdatum hinzu – sowohl Frontend als auch Backend müssen angepasst werden",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Implementiere eine Rate-Limiter-Middleware mit dem Token-Bucket-Algorithmus, die jede IP auf 60 Anfragen pro Minute begrenzt",
    },
  ]}
/>

## Fehler beheben

Fügen Sie die Fehlermeldung einfach direkt in die KI ein – sie ermittelt automatisch die Ursache und liefert eine Lösung.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Nach dem Ausführen von npm test erhalte ich diesen Fehler, bitte behebe ihn:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Die CI-Pipeline ist in der Lint-Phase fehlgeschlagen. Hier ist das Log: ... Bitte behebe das",
    },
  ]}
/>

## Ein Projekt verstehen

Wenn Sie sich in ein neues Projekt einarbeiten oder ein bestimmtes Stück Code verstehen müssen, fragen Sie einfach nach.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Wie ist die Gesamtarchitektur dieses Projekts? Welche sind die wichtigsten Module?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Was macht src/auth/middleware.ts? Wie funktioniert der Authentifizierungsablauf?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Erkläre, wie Datenbankmigrationen in diesem Projekt verwaltet werden",
    },
  ]}
/>

## Kleine Aufgaben automatisieren

Ideal für Code-Änderungen im Batch, das Hinzufügen von Dokumentation, das Generieren von Tests und andere wiederkehrende Arbeiten.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Füge JSDoc-Kommentare zu allen exportierten Funktionen im Verzeichnis src/utils/ hinzu",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Generiere Unit-Tests für alle öffentlichen Methoden der Klasse UserService",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ersetze alle var-Deklarationen im Projekt durch const oder let",
    },
  ]}
/>

## Allgemeine Aufgaben

Die Kimi Code CLI beschränkt sich nicht auf das Programmieren – sie kann auch Recherchen, Datenanalysen, Massendateioperationen und vieles mehr übernehmen.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Recherchiere die derzeit gängigen Node.js-ORM-Bibliotheken und vergleiche ihre Vor- und Nachteile",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Analysiere die Zugriffsprotokolle der letzten 7 Tage im Verzeichnis logs/ und liste die 10 häufigsten Anfragepfade auf",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Führe alle CSV-Dateien im Verzeichnis data/ zu einer einzigen zusammen und entferne doppelte Zeilen",
    },
  ]}
/>
