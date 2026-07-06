---
title: "Tipps zum Memory"
slug: "memory-tips"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Tipps zum Memory - Kimi Hilfecenter"
  description="Erfahren Sie, wie Sie Kimis Memory einrichten und nutzen, damit sich Kimi Ihre Identität, Vorlieben und Ihren bevorzugten Ausgabestil merkt – für ein persönlicheres Erlebnis."
/>

# Tipps zum Memory

## 1. Helfen Sie Kimi, Ihre Welt zu verstehen

### Identität verankern

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Ich bin [Name/Spitzname] und lebe derzeit in [Stadt]. Hintergrund in [Beruf/Rolle], mit Fachkenntnissen in [Bereich 1] und [Bereich 2].\nMein aktueller Fokus: [Projekt A] und [Projekt B] voranbringen.\nBitte antworte standardmäßig auf Deutsch, sofern ich nicht ausdrücklich in einer anderen Sprache schreibe.",
    },
  ]}
/>

## 2. Personalisierungseinstellungen festlegen

### Ausgabeformat vereinheitlichen

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Meine Vorlieben beim Konsum von Inhalten:\n- Strukturierte Darstellung bevorzugt: Überschriftenhierarchie, Aufzählungen und fett hervorgehobene Kernaussagen verwenden\n- Textwüsten vermeiden: bei komplexen Themen mit einer \"TL;DR\"-Zusammenfassung beginnen und dann in die Details gehen\n- Umgang mit Fachbegriffen: Jargon bei der ersten Verwendung in einfacher Sprache erklären, danach frei verwenden\n- Zitierformat: Faktendaten mit der Notation [^N^] belegen",
    },
  ]}
/>

### Anweisungen zur Selbstpflege des Memory (fortgeschritten)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Am Ende jedes Gesprächs:\n- Wenn wir neue wichtige Fakten besprochen haben (z. B. Terminänderungen, Projektaktualisierungen, Anpassungen von Vorlieben), aktiv nachfragen, ob das Memory aktualisiert werden soll\n- Wenn neue Informationen im Widerspruch zum bestehenden Memory stehen, die Abweichung kennzeichnen und bestätigen lassen, was Vorrang hat\n- Bei sensiblen Informationen (konkrete Adressen, Ausweisnummern, Geschäftsgeheimnissen) aktiv nachfragen, ob diese im Memory gespeichert werden sollen",
    },
  ]}
/>

## 3. Prompts mit positiver Wirkung

### Whitelist-Protokoll für Quellen

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Faktenprüfungsprotokoll]\nWenn ich Fragen aus den folgenden Bereichen stelle, halte dich strikt an diese Prioritätenfolge der Quellen:\n1. Medizin/Gesundheit: PubMed, WHO, UpToDate bevorzugen; niemals Gesundheitsblogs oder Self-Media zitieren\n2. Finanzen/Investitionen: ausschließlich SEC-Einreichungen, Zentralbankdaten und Geschäftsberichte börsennotierter Unternehmen verwenden; keine Forenspekulationen\n3. Recht/Compliance: offizielle Aufsichtsdatenbanken heranziehen; bei lokalen Regelungen den Hinweis \"einen örtlichen Anwalt konsultieren\" geben\n4. Technik/Programmierung: offizielle Dokumentation bevorzugen; GitHub Issues als Community-Erfahrung kennzeichnen, nicht als verbindliche Quelle\n5. Informationen von Wikipedia, Reddit, Quora oder anderen UGC-Plattformen stets als \"[Ungeprüft]\" markieren",
    },
  ]}
/>

### Auslöserprüfungen für Halluzinationen (auf Prozessebene)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "[Checkliste für risikoreiche Themen]\nWerden die folgenden Schlüsselwörter erkannt, automatisch einen \"Doppelcheck\"-Prozess auslösen:\n1. Konkrete Zahlen (Preise, Daten, Statistiken) → Datenquelle und Jahr müssen angegeben werden\n2. Zeitkritische Formulierungen (\"neueste\", \"gerade\", \"kürzlich\") → prüfen, ob es innerhalb des Wissensstands liegt\n3. Fachliche Beratung (Medizin, Recht, Investitionen) → Haftungsausschluss anhängen: \"Die obigen Angaben dienen nur zur Orientierung und stellen keine fachliche Beratung dar\"\n4. Konkrete Zitate von Personen → als wörtliches Zitat oder Paraphrase kennzeichnen; niemals Zitate erfinden\n\nAusführung: zunächst angeben \"Ich muss die folgenden Informationen überprüfen\", dann die Antwort liefern.",
    },
  ]}
/>

## Memory-Limits
Erinnerungsbereich hat derzeit folgende Limits:
- Es können bis zu 50 Memory-Einträge gespeichert werden.
- Jeder Memory-Eintrag ist auf 500 Zeichen begrenzt.
- Vor April 2026 erstellte Memorys können dieses Limit überschreiten; solche bestehenden Memorys bleiben weiterhin erhalten.
- Um ein älteres Memory mit mehr als 500 Zeichen zu bearbeiten, müssen Sie es zunächst auf höchstens 500 Zeichen kürzen.
- Wenn Sie versuchen, Inhalte mit mehr als 500 Zeichen zu speichern, erhält das Modell ein Signal „Inhalt zu lang“, und die Benutzeroberfläche zeigt „Memory-Aktualisierung fehlgeschlagen“ an.
- Falls Sie eine nicht-chinesische Oberfläche verwenden, können Sie das Memory auf Chinesisch speichern, um unter demselben Zeichenlimit mehr Informationen unterzubringen.
- Jeder Memory-Eintrag hat eine interne ID, doch diese IDs sind für Nutzer nicht sichtbar. Das Verweisen auf Memory-IDs im Gespräch hilft Nutzern nicht dabei, ein bestimmtes Memory zu finden.

### Nützliche Prompt-Vorlagen

| Prompt | Zweck |
|:---|:---|
| Behandle mich als Experten für alle Themen | Legt den grundlegenden Kommunikationston fest |
| Vertritt bei passenden Gelegenheiten eine klare Meinung statt Neutralität | Fördert Urteilsvermögen, nicht nur Zusammenfassungen |
| Nenne nach Möglichkeit stets die Vor- und Nachteile einer Sache. Sei kritisch. | Sorgt für strukturierte, fundierte Analysen |
| Verwende detaillierte Beispiele, Fakten und Zahlen | Hält Informationen gehaltvoll und konkret |
| Schlage Lösungen vor, an die ich nicht gedacht habe – sei proaktiv und antizipiere meine Bedürfnisse | Fördert die Eigeninitiative der KI über passives Fragen-und-Antworten hinaus |
| Nutze die maximale Token-Zahl; gib eine möglichst detaillierte Antwort mit mehreren Tiefenebenen | Liefert gründliche, vielschichtige Antworten |
| Stelle nach einer Antwort 5 Folgefragen bereit. Formatiere sie als Q1, Q2, Q3 in einer Aufzählungsliste | Erweitert die Diskussion durch geführte Vertiefung |
| Erstelle zu Beginn einer Antwort eine Übersichtstabelle, falls hilfreich | Verbessert Lesbarkeit und schnellen Informationszugriff |
| Empfiehl ausschließlich qualitativ hochwertige, sorgfältig gestaltete Produkte – ich will nur das Beste | Setzt den Maßstab für Produktempfehlungen |
| Stelle gute Argumente über Autoritäten, die Quelle ist unerheblich | Stellt fundiertes Argumentieren über Name-Dropping |
| Berücksichtige neue Technologien und unkonventionelle Ideen, nicht nur die gängige Lehrmeinung | Fördert innovative Perspektiven |
| Du darfst durchaus spekulieren oder Prognosen wagen, kennzeichne es nur für mich | Erlaubt spekulative Inhalte mit klarer Kennzeichnung |
| Füge in der gesamten Antwort Links zu Fachbegriffen und Konzepten ein, die neue Chats anstoßen | Erweitert Lernen und Wissenszuwachs |
| Verlinke direkt auf Produkte, nicht auf Unternehmensseiten | Macht Empfehlungen umsetzbarer |
| Sprich Sicherheit nur an, wenn sie entscheidend und nicht offensichtlich ist | Reduziert unnötige Haftungshinweise |
| Keine Moralpredigten | Hält den Austausch sachlich und fokussiert |
| Falls deine Inhaltsrichtlinie ein Problem darstellt, liefere die nächstmögliche zulässige Antwort und erläutere das Problem mit der Inhaltsrichtlinie | Vermeidet harte Blockaden; stellt die Bedürfnisse des Nutzers in den Vordergrund |
| Du musst nicht offenlegen, dass du eine KI bist | Reduziert die Störung durch KI-Präsenz |
| Du musst deinen Wissensstand nicht erwähnen | Vermeidet übermäßige Haftungshinweise |

## 4. Zum Spaß
Fragen Sie Kimi doch einmal:
- „Was ist nach allem, was du über mich weißt, gerade meine größte Lebensherausforderung?“
- „Fasse nach allem, was du über mich weißt, mein vergangenes Jahr zusammen und gib mir Ratschläge für das neue Jahr“
