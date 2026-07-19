---
title: "Projekte"
slug: "project"
order: 4
extract_headings: true
preview: true
preview_content: "Ein Projekt ist ein dauerhafter Arbeitsbereich, in dem Referenzdateien, Chats und Projektanweisungen für eine länger laufende Aufgabe zusammenbleiben, sodass du den Hintergrund nicht in jedem neuen Chat erneut erklären musst."
---

<SeoMeta
  title="Was ist ein Kimi-Projekt? So erstellst und nutzt du es - Kimi-Hilfecenter"
  description="Erfahre mehr über Kimi-Projekte: dauerhafte Arbeitsbereiche, die Referenzdateien, Chats und Projektanweisungen bündeln — ideal für das Schreiben einer Dokumentreihe, laufende Recherchen oder die Pflege einer Codebasis. Behandelt werden das Erstellen und Verwalten von Projekten, Projektanweisungen, Projektdateien und Kontingente je Tarif."
/>

# Projekte

Ein Projekt ist ein dauerhafter Arbeitsbereich. Du kannst die Referenzdateien, Chats und Projektanweisungen für eine länger laufende Aufgabe in einem einzigen Projekt bündeln. Jeder Chat, den du innerhalb des Projekts startest, übernimmt diesen Kontext automatisch — so musst du dieselben Dateien nicht immer wieder hochladen und den Projekthintergrund nicht jedes Mal neu erklären.

**Wann ein Projekt sinnvoll ist**: Erstelle ein Projekt, wenn sich die Arbeit über längere Zeit erstreckt, mehr als ein Ergebnis entstehen soll oder dieselben Dateien wiederholt benötigt werden — zum Beispiel beim Schreiben einer Dokumentreihe, bei laufenden Recherchen oder bei der Pflege einer Codebasis. Ist die Aufgabe in sich abgeschlossen und braucht keinen gemeinsamen Kontext, genügt ein normaler Chat.

<Callout type="info">
Die Desktop-App Kimi Work hat ebenfalls „Projekte“. Diese sind jedoch von den hier beschriebenen Kimi-(Chat-)Projekten getrennt — beide Bereiche sind nicht miteinander verbunden und teilen keine Daten.
</Callout>

## Projekte erstellen und verwalten

**Einstiegspunkte**:
- die Schaltfläche „+“ rechts neben dem Abschnitt „Projekte“ in der Seitenleiste;
- der Eintrag „+ Neues Projekt“ oben in der Projektauswahl auf der Startseite.

**Erstellen**: Gib einen Projektnamen ein (erforderlich, 1–50 Zeichen) und optional Projektanweisungen; klicke auf „Erstellen“, um die Projektstartseite zu öffnen.

**Bearbeiten / Löschen**:
- Fahre in der Seitenleiste mit der Maus über einen Projektnamen oder klicke ihn mit der rechten Maustaste an, um „Titel bearbeiten“ oder „Anheften“ auszuwählen;
- das Löschen eines Projekts muss bestätigt werden. **Nach dem Löschen werden die Chats, Dateien und Projektanweisungen des Projekts dauerhaft entfernt und können nicht wiederhergestellt werden** — gehe daher bitte sorgfältig vor.

**Seitenleiste**: Der Abschnitt „Projekte“ befindet sich unter dem Eintrag Kimi Claw und über dem Chatverlauf. Deine Projekte werden nach dem neuesten Erstellungsdatum sortiert angezeigt; klappe ein Projekt auf, um seine Chats zu sehen.

## Projektstartseite

Die Projektstartseite ist dreispaltig aufgebaut:
- **Links**: die normale Seitenleiste;
- **Mitte**: ein Bereich zum Starten von Chats und die Chatliste des Projekts. Im Eingabefeld steht „Chat in ‚{project name}‘ starten …“; wenn du hier eine Nachricht sendest, wird ein Chat erstellt, der automatisch zum aktuellen Projekt gehört;
- **Rechter Bereich**: zwei Blöcke — Anweisungen und Dateien (einklappbar).

## Was du in einem Projektchat tun kannst

Chats in einem Projekt haben dieselben Funktionen wie normale Kimi-Chats und übernehmen zugleich automatisch den Projektkontext. Du kannst:
- **Projektdateien** verwenden (werden vom Modell bei Bedarf gelesen) und **Projektanweisungen** nutzen;
- **Plugins, Skills und Ziel** verwenden;
- **das Modell auswählen**.

Starte für jedes eigenständige Ergebnis einen eigenen Chat, damit Nachrichten und Resultate klar fokussiert bleiben; das Projekt hält diese zusammengehörigen Chats gebündelt.

## Projektanweisungen

- Projektanweisungen sind projektspezifische benutzerdefinierte Anweisungen (reiner Text), die Kimi in jedem Chat innerhalb des Projekts befolgt;
- Zum Beispiel: „Du bist ein erfahrener Produktmanager. Antworte auf Chinesisch und gib die Ausgabe in Markdown aus.“;
- Sie gelten ab deiner nächsten Nachricht oder in einem neuen Chat nach dem Speichern.

## Projektdateien

- Lade Referenzdateien in ein Projekt hoch, damit alle Chats des Projekts sie verwenden können;
- Die unterstützten Formate entsprechen den Uploads in Kimi Agent: PDF, DOCX, XLSX, CSV, TXT, MD, gängige Codedateien und gängige Bildformate;
- **Jede Datei darf höchstens 100 MB groß sein, und du kannst bis zu 50 Dateien hochladen**;
- Projektdateien werden **vom Modell bei Bedarf gelesen** — statt bei jedem Schritt den vollständigen Text jeder Datei vorab zu laden, entscheidet das Modell anhand deiner Frage, welche Dateien es braucht;
- Der Dateiblock zeigt unten eine Kapazitätsleiste an. Wenn sie nahe am Limit ist oder das Limit erreicht, wirst du aufgefordert, Dateien zu löschen oder deinen Tarif zu upgraden.

## So funktioniert der Kontext in einem Projekt

Wenn du in einem Projekt einen Chat startest, umfasst der in das Modell eingespeiste Kontext: **System-Prompt + globales Hauptgedächtnis + Projektanweisungen + bei Bedarf gelesene Projektdateien**.

Normale Chats (außerhalb von Projekten) fügen keine Projektanweisungen oder Projektdateien ein; die Anweisungen und Dateien eines Projekts wirken nur innerhalb dieses Projekts und haben keinen Einfluss auf andere Projekte oder normale Chats.

## Kontingente und Tarife

Die Anzahl der Projekte und der Projektspeicher richten sich nach deinem Mitgliedschaftstarif:

| Tarif | Free | Go | Pro | Max | Ultra |
|---|---|---|---|---|---|
| Projekte | 2 | 20 | 20 | 100 | 100 |
| Projektspeicher | 500MB | 20GB | 20GB | 50GB | 50GB |

Auch andere Limits (etwa Chats pro Projekt und die Zeichenbegrenzung für Projektanweisungen) richten sich nach deinem Tarif; die aktuellen Werte findest du auf der [Seite mit den Mitgliedschaftstarifen](/membership/membership-pricing).

## FAQ

### Werden Projektdateien bei jedem Schritt eines Chats vollständig gelesen?
Nein. Projektdateien werden bei Bedarf gelesen — das Modell entscheidet anhand deiner Frage, welche Dateien es benötigt, und liest nur diese, statt bei jedem Schritt alle Dateien vorab zu laden.

### Wie viele Dateien kann ein Projekt enthalten?
Jede Datei darf höchstens 100 MB groß sein, und du kannst bis zu 50 Dateien hochladen. Der gesamte Projektspeicher richtet sich nach deinem Tarif; siehe die [Seite mit den Mitgliedschaftstarifen](/membership/membership-pricing).

### Was passiert, wenn ich ein Projekt lösche?
Beim Löschen eines Projekts werden seine Chats, Dateien und Projektanweisungen **dauerhaft entfernt**; dieser Vorgang kann nicht rückgängig gemacht werden. Bitte bestätige das Löschen erst, wenn du sicher bist.

### Was kann ich tun, wenn ich die maximale Projektanzahl oder das Speicherlimit erreiche?
Lösche Projekte oder Dateien, die du nicht mehr benötigst, um Speicherplatz freizugeben, oder upgrade deinen Tarif für ein höheres quota. Weitere Informationen findest du auf der [Seite mit den Mitgliedschaftstarifen](/membership/membership-pricing).
