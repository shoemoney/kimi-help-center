---
title: "Ein persönliches Plugin erstellen"
slug: "create"
order: 2
extract_headings: true
preview: true
preview_content: "Verwandeln Sie mit dem integrierten Plugin Builder-Skill in Kimi Work eine Idee in einem Satz, ein externes Plugin-Repository oder eine beliebige Webseite in ein eigenes Plugin."
---

<SeoMeta
  title="Ein persönliches Plugin erstellen - Kimi Hilfecenter"
  description="Erstellen Sie in Kimi Work mit dem integrierten Plugin Builder-Skill ein persönliches Plugin: aus einer Idee in einem Satz, durch Import eines externen Plugin-Repositorys oder indem Sie eine beliebige Webseite in ein Plugin verwandeln. Nach der Registrierung in Ihrem persönlichen Plugin-Marktplatz installieren Sie es und nutzen es sofort in Unterhaltungen."
/>

# Ein persönliches Plugin erstellen

In Kimi Work können Sie den integrierten **Plugin Builder**-Skill nutzen, um eine Idee in einem Satz, ein externes Plugin-Repository oder eine beliebige Webseite in ein eigenes Plugin zu verwandeln. Welche Methode Sie auch wählen, das Plugin erreicht Sie immer auf demselben Pfad: **erstellen / konvertieren → in Ihrem persönlichen Plugin-Marktplatz registrieren (der Tab „Persönlich“) → per Klick auf + installieren → in einer Unterhaltung nutzen**. Nach der Installation steht es sofort in der aktuellen Unterhaltung zur Verfügung – kein Neustart nötig.

Stellen Sie vor dem Start sicher, dass die neueste [Kimi Work](https://www.kimi.ai/products/kimi-work)-Desktop-App installiert ist. Plugin Builder ist ein integrierter Skill und braucht keine zusätzliche Installation: Geben Sie „/“ in einer Unterhaltung ein, um ihn aufzurufen, oder klicken Sie im Plugin-Marktplatz auf „Benutzerdefiniertes Plugin“, um in der Hauptunterhaltung mit dem Erstellen zu beginnen.

## Mit einem Satz ein neues Plugin erstellen

Ideal, wenn Sie eine Idee haben, aber noch keinen Code. Sie müssen nur beschreiben, welche Fähigkeit Sie sich wünschen; Plugin Builder übernimmt automatisch Scaffolding, das Ausfüllen der Felder, die lokale Validierung und die Registrierung – Sie schreiben keine einzige Datei von Hand.

1. **Beschreiben Sie, was Sie brauchen.** Rufen Sie Plugin Builder in einer Unterhaltung auf und erklären Sie in einem Satz, was das Plugin können soll – zum Beispiel „erstell mir ein Plugin, das Unternehmensregisterdaten nachschlägt“. Felder, die sich ableiten lassen, wie Name, Beschreibung und Kategorie, werden automatisch ausgefüllt; nur Angaben, die sich nicht ableiten lassen, etwa eine MCP-Server-URL oder ein Icon, werden mit Ihnen abgestimmt.
2. **Warten Sie, bis der Build abgeschlossen ist.** Plugin Builder erzeugt die Plugin-Dateien lokal, besteht automatisch die Struktur- und Spezifikationsvalidierung und registriert das Plugin anschließend in Ihrem persönlichen Plugin-Marktplatz.
3. **Installieren und nutzen.** Öffnen Sie **Plugins → Persönlich**, suchen Sie das soeben erstellte Plugin und klicken Sie zum Installieren auf +. Nach der Installation ist es sofort in der aktuellen Unterhaltung verfügbar, und Sie können es jederzeit mit „/“ aufrufen.

**Prompt in einem Absatz:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nErstelle mir ein Plugin für die Literaturrecherche, das Folgendes abdeckt:\n1. Literatursuche: Papers nach Thema / Autor / Fachzeitschrift finden und bibliografische Angaben, Abstracts und Volltext-Links zurückgeben\n2. Ergebnisexport: Suchergebnisse als CSV exportieren, damit sie sich einfach in Literaturverwaltungsprogramme importieren lassen\n3. Unterstützung beim Review: einen Literaturüberblick auf Basis der Suchergebnisse entwerfen",
    },
  ]}
/>

## Plugins aus einem Marktplatz oder Repository importieren

Geben Sie Plugin Builder einen Plugin-Repository-Link, und es erkennt ihn automatisch, konvertiert das Format und installiert das Plugin auf Ihrem Tab „Persönlich“. Importierte Plugins beeinträchtigen den offiziellen Marktplatz nicht und lassen sich jederzeit deinstallieren.

1. **Unterstützte Plugin-Formate:** Plugin Builder erkennt Plugin-Manifeste aus den folgenden Quellen und konvertiert sie alle in Kimis natives `kimi.plugin.json`-Format:

| Format | Hinweise |
| --- | --- |
| `kimi.plugin.json` | Kimis natives Format: Pflichtfelder werden korrigiert |
| Plugin-Manifeste anderer Agent-Plattformen | Etwa `plugin.json`-Dateien in Verzeichnissen wie `.codex-plugin/plugin.json` oder `.claude-plugin/plugin.json` sowie die Marketplace-Indexdateien dieser Plattformen |
| `server.json` | Das offizielle MCP-Registry-Format: wird in ein Plugin konvertiert, das nur einen MCP-Dienst enthält |
| Generisches `plugin.json` | Ein generisches Manifest im Plugin-Stammverzeichnis |

2. **So importieren Sie:** Senden Sie den Repository-Link an Plugin Builder. Es erkennt automatisch die folgenden Repository-Formen:

- **Einzelnes Plugin-Repository**: Das gesamte Repository wird in ein Plugin konvertiert;
- **Multi-Plugin-Repository (Monorepo)**: Jedes Unterverzeichnis wird in ein eigenes Plugin konvertiert;
- **Plugin-Marktplatz- / Index-Repository** (ein Repository mit einem plugins.json- oder marketplace.json-Index): Jeder Eintrag im Index wird aufgelöst und gesammelt konvertiert;
- **Repository nur mit Skills**: Ein Repository ohne Plugin-Manifest, nur mit Skill-Dateien, wird als Plugin vom Typ „Skill“ paketiert.

3. **Über den Tab „Persönlich“ installieren:** Nach der Verarbeitung teilt Ihnen Plugin Builder mit, welche Plugins nutzbar sind. Gehen Sie zu **Plugins → Persönlich** und klicken Sie auf der entsprechenden Karte auf „Installieren“, um das Plugin in Unterhaltungen zu verwenden.

**Prompts in einem Absatz:**

Ein einzelnes Repository importieren:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nImportiere das Plugin im Repository https://github.com/owner/example als persönliches Plugin. Prüfe nach der Konvertierung zuerst, ob Struktur und Abhängigkeiten nutzbar sind; registriere es nach Bestätigung in meinem persönlichen Plugin-Marktplatz. Wenn die Konvertierung fehlschlägt, sag mir warum.",
    },
  ]}
/>

Einen Plugin-Marktplatz gesammelt importieren:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nKonvertiere die Plugin-Sammlung unter https://github.com/hashgraph-online/awesome-ai-plugins gesammelt in persönliche Plugins. Konvertiere zunächst nur die ersten 5, damit ich sie prüfen kann; konvertiere nach meiner Bestätigung alle übrigen, registriere sie nacheinander in meinem persönlichen Plugin-Marktplatz und gib mir abschließend einen vollständigen Bericht, gruppiert nach „nutzbar / Abhängigkeiten nicht verfügbar / fehlgeschlagen“.",
    },
  ]}
/>

Nur ein bestimmtes Unterverzeichnis konvertieren:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nKonvertiere nur das Plugin im Verzeichnis https://github.com/owner/repo/tree/main/plugins/example. Sobald Konvertierung und Prüfungen erfolgreich sind, registriere es in meinem persönlichen Plugin-Marktplatz.",
    },
  ]}
/>

**Importierte Plugins verwalten:**

- **Ein Plugin aktualisieren**: Wenn das Quell-Repository Aktualisierungen erhält oder Sie Name bzw. Beschreibung ändern möchten, teilen Sie es Plugin Builder einfach mit – es konvertiert bzw. ändert das Plugin erneut und registriert es wieder.
- **Deinstallieren / Entfernen**: Deinstallieren Sie über den Tab „Persönlich“, um ein Plugin zu deaktivieren; der Eintrag bleibt nach der Deinstallation im Tab – löschen Sie den Eintrag, wenn er vollständig entfernt werden soll.
- **Quellverzeichnis**: Die konvertierte Ausgabe liegt im plugins/-Verzeichnis Ihres lokalen Workspace. Sie ist die „Quelldatei“ des Plugins, und Plugin Builder stützt künftige Aktualisierungen darauf – bitte löschen Sie sie nicht manuell.

## Eine Webseite in ein Plugin verwandeln

Ideal, wenn eine häufig genutzte Website keine öffentliche API hat, Sie aber möchten, dass Kimi dort Daten abruft und sie für Sie bedient. Senden Sie die URL an Plugin Builder und beschreiben Sie, was Sie brauchen – zum Beispiel „verwandle die Website XX in ein Plugin; ich möchte XX suchen“. Es gibt zwei Browser-Optionen, um die Website zu analysieren und das Plugin auszuführen:

| Methode | Am besten geeignet für | Was Sie brauchen |
| --- | --- | --- |
| **Integrierter Browser (Standard)** | Die meisten Websites; nutzt den integrierten Browser von Kimi Work, um die Website zu analysieren und das Plugin auszuführen | Nichts zu installieren; wenn eine Anmeldung nötig ist, melden Sie sich einmal im integrierten Browser an |
| **WebBridge (wb)** | Konten wiederverwenden, mit denen Sie bereits in Chrome angemeldet sind | Installieren Sie zuerst WebBridge und steuern Sie damit Ihr Chrome |

1. **Die Website analysieren.** Plugin Builder öffnet die URL im gewählten Browser. Erfordert die Seite eine Anmeldung, werden Sie gebeten, sich einmal im Browser anzumelden – es fragt niemals nach Ihrem Passwort, Cookies oder anderen Zugangsdaten.
2. **Die APIs zurückentwickeln und das Plugin erzeugen.** Es bedient die Kernfunktionen auf der Seite tatsächlich, zeichnet die Netzwerkanfragen auf, erschließt die internen Daten-APIs der Website und erzeugt anschließend ein Plugin vom Typ „Skill“ mit integrierten Abfrageskripten.
3. **Validieren, registrieren, installieren.** Wie bei den vorherigen Methoden: Sobald das Plugin die Validierung besteht, wird es auf dem Tab „Persönlich“ registriert; klicken Sie zum Installieren auf + und beginnen Sie mit der Nutzung.

Danach sagen Sie einfach „such mir XX“, und Kimi nutzt das Plugin, um die Daten direkt im Browser abzurufen und die Ergebnisse aufzubereiten. Wenn sich die APIs der Website ändern und das Plugin nicht mehr funktioniert, bitten Sie Plugin Builder, die Website erneut zu analysieren und das Plugin zu aktualisieren.

**Prompt in einem Absatz:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/plugin-builder\nVerwandle Hacker News (https://news.ycombinator.com) in ein Plugin, das Folgendes abdeckt:\n1. Beiträge suchen: ein Stichwort eingeben und Beitragstitel, Links, Bewertungen und Kommentarzahlen zurückgeben\n2. Startseite: die aktuellen Top-30-Beiträge der Startseite abrufen\n3. Kommentare lesen: einen bestimmten Beitrag öffnen und die Kernaussagen der Top-Kommentare zusammenfassen",
    },
  ]}
/>

<Callout type="warning">
Die Methode mit dem integrierten Browser setzt die Browser-Fähigkeit von Kimi Work voraus – wenn Sie zum Upgrade aufgefordert werden, aktualisieren Sie die Desktop-App auf die neueste Version. Die WebBridge-Methode setzt voraus, dass WebBridge zuerst auf Ihrem Computer und in Chrome installiert wird.
</Callout>
