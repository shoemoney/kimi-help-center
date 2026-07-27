---
title: "Was kann Kimi?"
slug: "capability"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Was kann Kimi? - Kimi Help Center"
  description="Häufige Fragen zu Kimis Fähigkeiten: Online-Suche und Browserbedienung, Steuerung eines Computer-Desktops (Kimi Computer Use), Erzeugung von Bildern/Videos/Stimme, Code schreiben, Websites erstellen, PPTs und Tabellen erstellen, Dateiverarbeitung, Memory, Mehrsprachigkeit und Kontextlänge."
/>

# Was kann Kimi?

## Kann Kimi im Internet suchen und Webseiten durchsuchen?

Ja. Kimi entscheidet automatisch, ob für eine Frage ein Online-Zugriff nötig ist, und nutzt integrierte Suchwerkzeuge, um Informationen abzurufen. In **Kimi Code** und **Kimi Work** kann Kimi mit **WebBridge** außerdem einen Browser wie ein Mensch bedienen – Seiten aufrufen, klicken, scrollen, Daten extrahieren und mehrstufige Webaufgaben erledigen.

## Kann Kimi meinen Computer-Desktop bedienen?

In normalen Chats und Agent-Aufgaben hat Kimi **keine Berechtigung**, deinen Computer zu bedienen. **In Kimi Work kannst du diese Funktion selbst aktivieren**.

In Kimi Work kann Kimi mit **Kimi Computer Use** für dich klicken, tippen, scrollen, ziehen und Oberflächeninhalte oder Screenshots von Apps auf deinem Desktop auslesen. Zum Beispiel: „Klick für mich auf X“, „Gib … in Y ein“, „Prüfe den aktuellen Status der App Z“ oder „Liste die derzeit geöffneten Apps auf“. Alle Vorgänge laufen im Hintergrund, Kimi übernimmt also weder deine Maus noch wechselt es das Fenster im Vordergrund.

**Installation**: Klicke in Kimi Work auf „Plugins“, wähle „Kimi Computer Use“ aus und klicke auf „Installieren“. Du kannst zur Installation auch im Modus „Work“ die folgende Anweisung senden:

<CodePreview
  files={[
    {
      name: "install.txt",
      language: "text",
      content: "Bitte installiere kimi computer-use für mich: curl -fsSL https://cdn.kimi.com/kimi-computer-use/latest/setup_macos.sh | bash",
    },
  ]}
/>

## Kann Kimi Bilder, Videos und Stimme erzeugen?

Ja. Kimi kann über Kreativdesign-Plugins Bilder, Videos und Audio erzeugen. Installiere vor der Nutzung das entsprechende Plugin aus dem Plugin-Marktplatz:

- **Bilderzeugung**: Erstellt hochwertige Bilder aus Textbeschreibungen. Unterstützt 1K/2K/4K-Auflösungen, verschiedene Seitenverhältnisse, wahlweise deckende oder transparente Hintergründe sowie die Ausgabe als JPG / PNG.
- **Videoerzeugung**: Erstellt hochwertige Videos aus Textbeschreibungen, optional mit Referenzbildern. Unterstützt Seitenverhältnisse wie 16:9, 4:3, 1:1, 3:4, 9:16 und 21:9 bei einer Dauer von 4–12 Sekunden.
- **Audioerzeugung**: Unterstützt Text-to-Speech mit mehreren Mandarin-Stimmen oder die Erzeugung von Soundeffekten aus englischen Beschreibungen bei einer Dauer von 0,5–22 Sekunden.

## Kann Kimi Code schreiben, Websites bauen sowie PPTs und Tabellen erstellen?

Ja. Als AI Agent, der Aufgaben eigenständig ausführen kann, unterstützt Kimi unter anderem das Erstellen von Websites und PPTs, die Verarbeitung von Dokumenten und Tabellen sowie Deep Research.

## Welche Dateien kann Kimi verarbeiten?

Kimi unterstützt gängige Formate wie PDF, Word, Excel, PPT, Bilder, TXT und Video. **Jede Datei darf höchstens 100 MB groß sein; du kannst bis zu 50 Dateien gleichzeitig hochladen**.

## Hat Kimi ein Memory?

Ja. [Memory](/features/memory-space) speichert wichtige Informationen automatisch, damit Kimi dich besser versteht. Wenn du Memory und Materialien nach Projekten getrennt halten möchtest, nutze die Funktion [Projekt](/features/project).

## Unterstützt Kimi mehrere Sprachen?

Ja. Du kannst die Sprache der Oberfläche unter **„Einstellungen“ → „Allgemein“ → „Sprache“** ändern. Derzeit werden Deutsch, Russisch, Französisch, Traditionelles Chinesisch, Koreanisch, Portugiesisch, Thai, Türkisch, Spanisch, Italienisch, Indonesisch, Englisch und Vietnamesisch unterstützt. K2.6 und K3 unterstützen beide mehrsprachige Gespräche, Recherche und Erstellung.

## Wie viele Inhalte kann Kimi auf einmal verarbeiten?

K2.6 verfügt über einen Single-Turn-Kontext von etwa **128K Tokens (rund 50.000–60.000 chinesische Zeichen)**. Für extrem lange Dokumente bietet **K3 einen Kontext von 1 Million Tokens** (erfordert die höchste Mitgliedschaftsstufe). Weitere Informationen findest du unter [Was soll ich tun, wenn ein Chat 200.000 chinesische Zeichen überschreitet?](/others/chat-issues).
