---
title: "Versionshinweise"
slug: "release-notes"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work Versionshinweise - Kimi Hilfecenter"
  description="Versionshinweise zu Kimi Work: neue Funktionen, Änderungen und Fehlerbehebungen für Mac und Windows, laufend aktualisiert."
/>

# Versionshinweise

Diese Seite dokumentiert die Versionsupdates von Kimi Work, einschließlich neuer Funktionen, Änderungen und Fehlerbehebungen, und wird laufend aktualisiert. Neueste Version herunterladen: [kimi.com/products/kimi-work](https://www.kimi.com/products/kimi-work)

## 3.2.2 (2026-08-25)

**Neu**

- Neues Desktop-Pet: Kimi begleitet und interagiert mit Ihnen als Desktop-Pet
- Neue Slash-Befehle: Das Eingabefeld unterstützt jetzt die Befehle compact (Kontext komprimieren), fork (Konversation abzweigen) und goal (Ziel)
- Neue Option “Standard” für Ausführungsberechtigungen: Global stehen jetzt die drei Berechtigungsstufen “Standard”, “Manuell erlauben” und “Alle” zur Verfügung

**Änderungen**

- Die Agent-Steuerung des integrierten Browsers ist jetzt standardmäßig aktiviert
- Konversationen im Chat-Bereich teilen sich kein Stammverzeichnis mehr: Jede Konversation erhält jetzt ein eigenes Arbeitsverzeichnis

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem die erste Nachricht nach dem Senden kurz einen leeren Zustand anzeigte
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.1 (2026-08-21)

**Neu**

- Neuer globaler Launcher: Rufen Sie ein schwebendes Kapsel-Eingabefeld auf dem Desktop jederzeit und überall per globalem Tastenkürzel auf
  - Beim Aufrufen werden die aktuell im Finder / Datei-Explorer ausgewählten Dateien automatisch übernommen; das Einfügen von Bildern, das Hinzufügen von Anhängen und das Hineinziehen von Screenshots werden unterstützt
  - Geben Sie “/” ein, um das Plugin- und Skill-Menü zu öffnen (Pinyin-Suche wird unterstützt), und wählen Sie einen Workspace
  - Halten Sie das Tastenkürzel gedrückt, um zu diktieren; nach dem Absenden wird das Feld zu einer Mini-Kapsel eingeklappt, und Sie können mit einem Klick zur Haupt-App zurückkehren, um die Antwort anzusehen
- Neue Nachrichten-Warteschlange: Während der Agent antwortet, können Sie weiterhin Nachrichten senden; neue Nachrichten werden automatisch eingereiht, mit Unterstützung für Neuanordnen per Drag-and-Drop, Bearbeiten, Löschen und Detailvorschau
- Sprachdiktat im Work-Eingabefeld: Klicken Sie auf das Mikrofon oder halten Sie das Tastenkürzel gedrückt, um das Diktieren zu starten — mit gemischter Chinesisch-Englisch-Erkennung

**Änderungen**

- Logik für Nachrichtenbenachrichtigungen aktualisiert: Sie können die Benachrichtigungsregeln für Nachrichten in den Einstellungen wechseln

**Fehlerbehebungen**

- Optimierter Standby-Energieverbrauch, reduziert die Hintergrund-Ressourcennutzung im Leerlauf der App
- Ein Problem wurde behoben, bei dem das Dock-Symbol unter macOS verschwand
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.0 (2026-08-19)

**Neu**

- Neuer integrierter Agent-Browser: Browser-Tabs sind an Konversationen gebunden und liegen im Vorschaubereich; der Agent kann den Browser direkt bedienen — klicken, tippen und mehr; auf dem Mac können Sie außerdem Cookies aus Ihrem lokalen Chrome-Browser importieren, um bestehende Anmeldungen wiederzuverwenden (standardmäßig deaktiviert, kann in den Einstellungen aktiviert werden)
- Lokalisierung in 16 Sprachen: Der Client unterstützt jetzt 16 Sprachen statt bisher nur Chinesisch und Englisch

**Änderungen**

- Kimi WebBridge ist jetzt ein Plugin: Die Steuerung des echten Browsers wurde in ein Plugin ausgelagert, das standardmäßig deaktiviert ist und in den Einstellungen aktiviert werden kann
- Die Dashboard-Listenseite wurde entfernt; Dashboards werden jetzt über die obere Tab-Leiste gewechselt
- Dashboard ist jetzt ein Vorschaubereich-Typ: Dashboards können im Chat-Vorschaubereich geöffnet werden, und mehrere Dashboards können parallel geöffnet sein

**Fehlerbehebungen**

- Streaming-Rendering von Nachrichten verbessert: Lange Antworten werden jetzt flüssiger dargestellt
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.1.10 (2026-08-16)

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem die App bei einigen Windows-Nutzern während des Upgrades abstürzte

## 3.1.9 (2026-08-15)

**Neu**

- Persönlicher Plugin-Marktplatz ist live: Der Plugin-Marktplatz hat jetzt einen Bereich „Persönliche Plugins“, in dem Sie Plugins von Einzelentwicklern durchsuchen und installieren können

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem gestreamter Markdown-Inhalt gelegentlich nicht aktualisiert wurde
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.1.8 (2026-08-11)

**Neu**

- Navigation im Nachrichtenverlauf: Eine neue Navigationsleiste am rechten Rand langer Chats ermöglicht den schnellen Sprung zurück zu früheren Nachrichten
- Konversationsverzweigungen: Starten Sie von jedem Gesprächsabschnitt aus einen neuen Zweig, um weiterzuarbeiten — der bisherige Chatverlauf wird übernommen
- Bearbeiten und Zurücksetzen: Bearbeiten Sie Ihre letzte Nachricht und lassen Sie die Antwort neu generieren
- Projektordner: Verschieben Sie Konversationen in Projekte hinein oder heraus und heften Sie Projekte an den angehefteten Bereich der Seitenleiste
- Transparente Dateibearbeitung: Nachdem der Agent eine Datei geändert hat, wird eine Diff-Übersichtskarte erstellt — prüfen Sie Änderungen Zeile für Zeile und machen Sie sie mit einem Klick rückgängig; Workspace-Dateien werden automatisch aktualisiert, wenn sie sich auf der Festplatte ändern
- Skill-Erkennung und -Erstellung: Entdecken und erstellen Sie benutzerdefinierte Skills in Work, inklusive Skill-Suche
- An den Desktop angeheftete Dashboard-Komponenten verfügen jetzt über einen Immer-im-Vordergrund-Schalter

**Änderungen**

- Neue eigenständige Konversationsfenster unterstützen jetzt Chat
- Zu lange Nutzernachrichten im Eingabefeld werden jetzt eingeklappt

**Fehlerbehebungen**

- Die Linkvorschau von PDF-Dateien unter Windows wurde behoben; die Work-Einstellungen flackern im dunklen Modus nicht mehr weiß; beim Einfügen aus der Word-Zwischenablage wird jetzt Text statt eines Bildanhangs wiederhergestellt
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.1.7 (2026-08-05)

**Neu**

- Feedback auf Nachrichtenebene wird unterstützt: Einzelne Nachrichten in den Antworten des Assistenten können positiv oder negativ bewertet werden

**Änderungen**

- An den Desktop angeheftete Board-Komponenten werden nicht mehr zwangsweise im Vordergrund gehalten

**Fehlerbehebungen**

- Einige Fehler wurden behoben und einige Interaktionen verbessert

## 3.1.6 (2026-07-29)

**Neu**

- Der PPT-Folieneditor ist live: Folien direkt im Workspace öffnen und bearbeiten – Änderungen werden sofort wirksam
- Screenshot-Annotationen werden für Dateien im Vorschaubereich und im Browser unterstützt; fertige Annotationen können zur Überarbeitung direkt an den Agent gesendet werden
- Migration des Speicherlaufwerks unter Windows wird unterstützt: Work-Daten können auf ein anderes Laufwerk umgezogen werden
- Die Windows-Installation unterstützt jetzt die freie Wahl des Installationsorts

**Änderungen**

- Einige Probleme mit der token efficiency wurden verbessert

**Fehlerbehebungen**

- Einige Fehler wurden behoben und einige Interaktionen verbessert
