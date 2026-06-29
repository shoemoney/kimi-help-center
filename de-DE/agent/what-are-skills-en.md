---
title: "Was sind Skills?"
slug: "what-are-skills"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="Was sind Skills? - Kimi Help Center"
  description="Erfahren Sie mehr über die Funktionsweise, Arten und Nutzung von Kimi Skills. Skills sind wiederverwendbare Wissenspakete, mit denen sich die Fähigkeiten des Agent für bestimmte Aufgaben erweitern lassen – sie enthalten Anweisungen, Best Practices, Skripte und Ressourcen."
  ogType="article"
/>

# Was sind Skills?

<Frames
  src="./images/skills/what_is_skill.png"
  alt="what_is_skill"
/>

Skills sind wiederverwendbare Wissenspakete, die die Fähigkeiten eines KI-Agenten gezielt erweitern. Jeder Skill umfasst:

- **Vorgehensweisen und Handlungsanleitungen** – Methoden, die auf bestimmte Aufgabentypen zugeschnitten sind.
- **Best Practices und Standards** – Branchenstandards und interne Vorgaben, die einzuhalten sind.
- **Skripte, Tools und Referenzressourcen** – Optionale Tools und Materialien zur Unterstützung bei der Ausführung.

## Wie wird er genutzt?

Zu Beginn einer Unterhaltung sieht der Agent eine Liste der verfügbaren Skills mit deren Namen und Kurzbeschreibungen. Ist ein Skill für die aktuelle Aufgabe relevant, lädt der Agent die vollständigen Anweisungen und führt sie entsprechend aus.

## Der Weg des Nutzers

Vom Entdecken von Skills bis zum Erstellen eigener Skills sieht der vollständige Weg so aus:

1. **Skills entdecken** – Durchstöbern Sie offizielle und empfohlene Skills im Skills-Bereich und finden Sie den passenden für Ihr Szenario.
2. **Skills installieren** – Klicken Sie auf die Schaltfläche „+“, um einen Skill sofort hinzuzufügen.
3. **Skills aufrufen** – Geben Sie `/` im Chatfeld ein, um einen Skill auszuwählen, oder lassen Sie Kimi anhand Ihrer Anfrage automatisch einen passenden auslösen.
4. **Eigene erstellen** – Wenn vorhandene Skills Ihre Anforderungen nicht erfüllen, laden Sie Dokumente hoch oder beschreiben Sie Ihre Anforderungen, um einen individuellen Skill zu erzeugen, oder erstellen Sie einen im Dialog mit `/skill-creator`.

## Wie funktionieren Skills?

Wenn Sie eine Anfrage senden, prüft Kimi Agent, ob die aktuelle Aufgabe einen bestimmten Skill betrifft. Ist dies der Fall, lädt er automatisch den entsprechenden Skill und folgt dessen Anweisungen, um die Aufgabe abzuschließen.

Skills werden nur dann geladen, wenn sie für die Aufgabe relevant sind, sodass sie den Kontext anderer Unterhaltungen nicht beeinträchtigen.

## Skills oder direkte Eingabeaufforderung: Wo liegt der Unterschied?

Am Beispiel des Schreibens von Wochenberichten:
- **Direkte Eingabeaufforderung**: Fragen Sie Kimi Agent direkt, und er schreibt anhand seines eigenen Verständnisses des Formats.
- **Mit Skills**: Nach der Installation eines Wochenbericht-Skills folgt jede Ausgabe Ihrer voreingestellten Struktur, Tonalität und Länge, ohne dass Sie die Anweisungen wiederholen müssen.

| | Direkte Eingabeaufforderung | Mit Skills |
|---|---|---|
| **Müssen die Anforderungen jedes Mal erklärt werden?** | Ja | Nein, automatisch angewendet |
| **Stabilität des Ausgabeformats** | Variabel | Durchgängig wie definiert |
| **Idealer Anwendungsfall** | Einmalige, temporäre Aufgaben | Wiederkehrende, feste Arbeitsabläufe |
| **Einrichtung erforderlich?** | Nein | Erstellung oder Installation erforderlich |

## Arten von Skills

### (1) Offizielle Skills und empfohlene Skills

**Offizielle Skills**: Von Moonshot AI erstellt und gepflegt, für alle Nutzer verfügbar. Kimi löst sie in relevanten Szenarien automatisch aus.

Gängige offizielle Skills sind unter anderem:
- `docx` – Word-Dokumente erstellen und bearbeiten, geeignet für jede .docx-Aufgabe, einschließlich Dokumenterstellung, Bearbeitung, Kommentaren, Überarbeitungen, Fußnoten, Inhaltsverzeichnissen und der Umwandlung von Markdown in Word.
- `deep-research` – Eingehende Recherchen durchführen und ausführliche Berichte mithilfe eines Toolkits erstellen, wobei mindestens 10 iterative Suchzyklen, rekursive Reflexion und eine verpflichtende IPython-Visualisierung erforderlich sind.

**Empfohlene Skills**: Sorgfältig zusammengestellte, szenariobasierte Skills, die sich mit einem Klick hinzufügen lassen und gängige Anwendungsfälle wie Investmentrecherche und Dokumentformatierung abdecken.

Gängige empfohlene Skills sind unter anderem:
- `sop-writer` – Geschäftsprozesse in vollständige Standard-Operating-Procedure-Dokumente (SOP) umwandeln, einschließlich Prozessflussdiagrammen, RACI-Matrizen, detaillierter Arbeitsschritte und Ausnahmebehandlung.
- `event-etf-study` – Ausgehend von einem Konzept oder Ereignis verwandte Aktien identifizieren, einen marktkapitalisierungsgewichteten ETF-Index aufbauen, Marktwertveränderungen innerhalb des Ereigniszeitraums analysieren und interaktive HTML-Dashboards erzeugen. Wird verwendet, wenn Nutzer nach Konzeptaktien, Konzept-ETFs, ereignisgesteuerter Analyse oder Ereignisrecherche fragen.

**Office-Dokument in Skill umwandeln**: Laden Sie Dokumente hoch, um Skills zu erzeugen und Stilvorlagen mühelos zu übernehmen.

### (2) Open-Source-Skills

Laden Sie passende Skills aus Open-Source-Communitys herunter oder installieren Sie sie – in Kombination mit Local Agents (wie Kimi Code) oder Cloud Agents (wie Kimi Claw).

**Gängige Plattformen für AI Skill Hubs**

| Plattform | URL | Beschreibung |
|----------|-----|-------------|
| SkillsMP | https://skillsmp.com | Ein Marktplatz für KI-Agenten-Skills, der SKILL.md-Pakete von GitHub bezieht und mit Claude Code und OpenAI Codex CLI kompatibel ist |
| SkillsLLM | https://skillsllm.com | Ein Open-Source-Marktplatz für KI-Agenten-Skills mit über 1.600 sicherheitsgeprüften Skills für Claude Code, Codex CLI und ChatGPT |
| LobeHub Skills | https://lobehub.com/skills | SKILL.md-Pakete durchsuchen und verteilen, kompatibel mit Claude Code, Codex CLI und ChatGPT |

### (3) Skills individuell anpassen

Individuelle Skills, die Sie selbst für persönliche Arbeitsabläufe und spezifische Fachaufgaben erstellen, zum Beispiel:
- Anwenden bestimmter Stilrichtlinien auf Dokumente oder Präsentationen.
- Erzeugen von E-Mails oder Kommunikationsinhalten auf Basis fester Vorlagen.
- Erstellen von Besprechungsprotokollen in einem bestimmten Format.
- Ausführen bestimmter Datenanalyse-Workflows.
