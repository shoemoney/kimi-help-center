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

## 3.2.12 (2026-09-22)

**Neu**

- Vorschau und Bearbeitung von Office-Dateien: PPT / XLSX im Vorschaubereich ansehen und bearbeiten — Änderungen werden sofort gespeichert
- Auswählen und fragen: Wählen Sie Inhalte in einem Dokument aus, um Kimi direkt zu fragen oder Änderungen anzufordern
- Seite für archivierte Aufgaben überarbeitet: Suche, Sortierung, Filter und endgültiges Löschen werden unterstützt

**Änderungen**

- Die Größenbeschränkung für Anhänge im Eingabefeld wurde entfernt

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem das Windows-Installationsprogramm den Autostart-Anmeldeeintrag fälschlich gelöscht hat
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.11 (2026-09-18)

**Änderungen**

- Das Detail-Panel unterstützt jetzt die Anzeige des Sub-Agent-Ausführungsprozesses

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem die Startmenü-Verknüpfung nach einem In-App-Update unter Windows ins Leere zeigte
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.10 (2026-09-16)

**Fehlerbehebungen**

- Das Windows-Share-Target-Begleitpaket wurde kurzfristig entfernt, um einen Absturz beim Start zu beheben; die Teilen-Funktion kehrte in 3.2.11 nach der Behebung zurück
- Anzeigenamen und Beschreibungen integrierter Skills werden jetzt an die Sprache der Benutzeroberfläche angepasst: Das „/“-Menü filtert nach lokalisierten Namen, bei nicht ausgelieferten Sprachen wird auf Englisch zurückgegriffen
- Durch Klicken auf eine Ordner-Anhangskarte wird das entsprechende Verzeichnis im Workspace-Dateibaum lokalisiert
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.9 (2026-09-14)

**Neu**

- Teilen und Öffnen mit Kimi wird jetzt für ausgewählte Dateiformate unterstützt:
  - An Kimi teilen: Senden Sie Dateien und Inhalte direkt aus dem Teilen-Menü von Apps wie WeChat an Kimi
  - Mit Kimi öffnen: Klicken Sie unterstützte Dateien mit der rechten Maustaste an und wählen Sie „Mit Kimi öffnen“
- Desktop-Pet-Upgrade: Komplett erneuerte UI mit Schnellantworten direkt in der Konversationsblase — chatten Sie weiter, ohne das Hauptfenster zu öffnen
- PDF-Viewer mit neuem Indexbereich aktualisiert, einschließlich Inhaltsverzeichnis und Seitenzahl-Sprung
- Neue Energiemodus-Option „Nach Bildschirm-Aus wach halten“: Der Bildschirm kann sich ausschalten, während das System weiterläuft, sodass Fernsteuerung und Hintergrundaufgaben nicht unterbrochen werden

**Änderungen**

- Hochgeladene Dateien und über „@“ verknüpfte Dateien im Eingabefeld können jetzt angeklickt werden, um eine Vorschau im rechten Workspace zu öffnen
- Bildvorschau unterstützt jetzt Kopieren / Speichern

**Fehlerbehebungen**

- Mehrere Race Conditions wurden behoben, darunter Wiederherstellung der Warteschlangen-Bearbeitung und Navigation-Freigabe nach Browser-Abstürzen
- Darstellungsprobleme im Dark Mode für App-Funktionen wurden behoben
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.8 (2026-09-12)

**Änderungen**

- Ruhemodus-Schutz bietet jetzt drei Optionen: Bei ausgeschaltetem Bildschirm weiterlaufen, Bildschirm eingeschaltet lassen, Aus

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem das Einstellungsfenster nach dem Wiederherstellen weiß blieb
- Optimierte Lang-Screenshot-Miniaturen zur Reduzierung des Vorschau-Speicherverbrauchs
- Eine Race Condition bei der Anmeldeaktualisierung wurde behoben, damit veraltete Anfragen den Anmeldestatus nicht mehr fälschlich löschen oder neue Anmeldedaten überschreiben
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.7 (2026-09-11)

**Neu**

- Screenshot-Upgrade: Scrollbare Lang-Screenshots im Launcher; OCR-Textextraktion per Klick im Screenshot-Editor; Screenshots als Always-on-top-Fenster an den Desktop anheften
- Konversationseinstellungen-Injektion: Neue Work-Konversationen übernehmen automatisch Ihre Konversationseinstellungen
- Ziehen Sie Dateien an beliebige Stelle im Fenster, um Anhänge hinzuzufügen — einschließlich Ordnern
- Neues Website-Deployment-Plugin: Nach der Installation lassen sich lokale Website-Projekte mit einem Schritt in der Cloud bereitstellen

**Änderungen**

- Windows-Autostart bleibt jetzt nur noch im System-Tray, das Hauptfenster öffnet sich nicht mehr
- Markdown-Tabellen neu gestaltet, mit horizontalem Scrollen für breite Tabellen
- Mitteilungszentrale unterstützt jetzt „Alle als gelesen markieren“ per Klick
- Remote-Control-Nachrichten werden jetzt segmentiert angezeigt; Sub-Agent-Karten und Ergebniskarten entsprechen der Desktop-Darstellung

**Fehlerbehebungen**

- Spracheingabe wird auf Geräten ohne Mikrofon automatisch deaktiviert; Diktat stoppt beim Abziehen des Mikrofons
- Ein Problem wurde behoben, bei dem die Plugin-Upload-Funktion fehlte
- E-Mail- und Telefon-Links zeigen jetzt eine klare Meldung, wenn sie nicht geöffnet werden können — kein stilles Fehlschlagen mehr
- Ein Problem wurde behoben, bei dem die Seite für geplante Aufgaben einfror, wenn die Credits aufgebraucht waren
- Leistung und Drag-and-Drop des Desktop-Pets verbessert
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.6 (2026-09-07)

**Neu**

- Neue Plugin-Empfehlung und -Installation im Stream: Empfiehlt automatisch passende Plugins für Ihre Aufgabe und bittet Sie, sie zu installieren
- Plugins können jetzt über GitHub-Links installiert werden, was die Einbindung geteilter Plugins erleichtert

**Änderungen**

- Die Plugin-Detailseite zeigt jetzt den MCP-Verbindungsstatus und unterstützt die Verbindungsverwaltung
- Vor dem Beenden der App werden Sie nun um Bestätigung gebeten, wenn noch geplante Aufgaben laufen

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem “Zurück” nach dem Öffnen bestimmter Seiten in den Einstellungen nicht reagierte
- Ein Problem wurde behoben, bei dem die Installation über eine bestehende Installation unter macOS fälschlich blockiert wurde und CAD-Dateien unter Windows fälschlich mit Notepad geöffnet wurden
- Probleme mit einigen Seitenfarben im Dark Mode, doppelte Launcher-Nachrichten und die DOCX-Vorschaubreite wurden behoben
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.5 (2026-09-04)

**Neu**

- Neue Fernsteuerung: Steuern Sie Kimi Work auf Ihrem Desktop von Ihrem Telefon aus
- Neue Apps-Funktion: Verbessert die Web-Bedienfähigkeit des Agents und die Sichtbarkeit der Ergebnisse
- Neue Suche innerhalb von Konversationen: Finden Sie Einträge schnell innerhalb einer Konversation

**Änderungen**

- Plugin- und Skill-Marktplatz aktualisiert: Optimierte Darstellungslogik, mit Unterstützung für Plugin- und Skill-Suche
- Einstellungszentrale überarbeitet, jetzt kompatibel zwischen Chat- und Work-Modus

**Fehlerbehebungen**

- Ein Problem wurde behoben, bei dem einige Benutzer eine fehlerhafte Anzeige des Anmeldestatus sahen
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.4 (2026-08-31)

**Änderungen**

- Optimierte Darstellung von Quellen wie Websuche und lokalen Dateien in Nachrichtenantworten
- Optimierte Schriftgröße und Zeilenabstände in Nachrichtenantworten

**Fehlerbehebungen**

- Einige Darstellungsprobleme im Dark Mode wurden behoben
- Optimierte Prozessüberwachung unter Windows
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.3 (2026-08-28)

**Neu**

- Neuer Einstieg “Plugin erstellen” im Plugin-Marktplatz: Erstellen Sie Plugins direkt im Marktplatz

**Fehlerbehebungen**

- Desktop-Pet-Feinschliff: Verbessertes Fensterverhalten; die Sprache folgt jetzt App-Wechseln in Echtzeit
- Ein Problem wurde behoben, bei dem die Konsistenz des Konversationszustands beim Bearbeiten und erneuten Senden einer Nachricht nach einem Fehler verloren ging
- Optimierter Energieverbrauch der Always-on-Funktionen
- Einige Fehler wurden behoben und einige Interaktionen sowie die Stabilität verbessert

## 3.2.2 (2026-08-26)

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
