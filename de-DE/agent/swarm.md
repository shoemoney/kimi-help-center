---
title: "K2.6 Agent Swarm [Beta]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [Beta] - Kimi Hilfecenter"
  description="K2.6 Agent Swarm Beta ist eine Architektur zur „horizontalen Skalierung“, die bis zu 300 Sub-Agents koordiniert, die parallel arbeiten — ohne vordefinierte Rollen oder handgefertigte..."
/>

# K2.6 Agent Swarm [Beta]

<Callout type="info">
**K2.6 Agent Swarm [Beta]** ist eine Architektur zur „horizontalen Skalierung“, die bis zu 300 Sub-Agents koordiniert, die parallel arbeiten — ganz ohne vordefinierte Rollen oder handgefertigte Workflows. Sie erledigt Aufgaben rund **4,5-mal schneller** als die Ausführung mit einem einzelnen Agent.
</Callout>

Am 27. Januar 2026 veröffentlichte Moonshot AI Kimi K2.5 und führte damit Agent Swarm [Beta] ein. Am 20. April 2026 veröffentlichte Moonshot AI Kimi K2.6 als Open Source und brachte umfassende Verbesserungen für die Agent-Swarm-Architektur:
- Bis zu **300 Sub-Agents**, die gleichzeitig arbeiten
- Über **4.000 Tool-Aufrufe** pro Aufgabe
- **4,5-mal schneller** als die sequenzielle Ausführung mit einem einzelnen Agent

## Die Geschichte dahinter

Im Jahr 2025 drehte sich das beherrschende Narrativ der KI-Branche um vertikale Skalierung — größere Modelle, mehr Parameter. Doch das stößt an eine strukturelle Grenze: den Engpass der einzelnen sequenziellen Ausführung.

Agent Swarm entstand aus einem realen Szenario: Als ein Teammitglied versuchte, die tägliche Sammlung von Aktieninformationen zu automatisieren und bei 100 Zeilen if-else-Code landete, wurde ihr klar: „Ich schreibe gerade von Hand ein Multi-Agenten-System.“ Wenn Modelle Tools nutzen können, warum sollten sie sich dann nicht selbst eine Architektur entwerfen?

Agent Swarm ist eine selbst entworfene Organisationsstruktur — gestaltet von der KI, nicht von Menschen. Der Haupt-Agent (Orchestrator) steuert eigenständig bis zu 300 Sub-Agents und führt bis zu 4.000 parallele Workflow-Schritte aus.

<Frames
  src="./images/swarm/swarm.png"
  alt="swarm"
/>

K2.6 Agent Swarm [Beta] nutzt die Trainingsmethode PARL (Parallel-Agent Reinforcement Learning). Im Vergleich zu Ansätzen mit einem einzelnen Agent reduziert sie die kritischen Schritte in großangelegten Suchszenarien um das 3- bis 4,5-Fache.

## Wie verwendet man es?

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="screenshot 8"
/>

**Zugangspunkte:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobil**: Kimi-App → Modus wechseln → K2.6 Agent Swarm [Beta] auswählen

<Callout type="warning">
**Beta-Zugang**: K2.6 Agent Swarm [Beta] steht derzeit Mitgliedern der Tarife Moderato, Allegretto, Allegro und Vivace zur Verfügung. Aufgaben verbrauchen deutlich mehr Credits als reguläre Agent-Aufgaben.
</Callout>

**Schritte:**
1. Beschreibe deine Aufgabe und schicke sie ab (z. B. „Sammle über 200 Artikel von Paul Graham“)
2. Verfolge den Fortschritt in Echtzeit: Erstellung der Aufgabenliste, Erzeugung der Sub-Agents, parallele Ausführung
3. Erhalte Ergebnisse: Code-Projekte, Dateiordner, Datenanalysen, Office-Dokumente
4. Ergebnisse ansehen, herunterladen oder teilen
5. Wechsle in den folgenden Runden zum einzelnen K2.6 Agent, um fortzufahren

## Anwendungsfälle

### Entdeckung im großen Maßstab

**Fall 1: Top 3 Creator in 100 YouTube-Nischen**

K2.6 Agent Swarm [Beta] erzeugte 300 Sub-Agents für die parallele Suche und erstellte strukturierte Tabellen mit Kanalnamen, Abonnentenzahlen und Beschreibungen.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="Ergebnis ansehen" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**Fall 2: Sammlung von über 200 Artikeln von Paul Graham**

Agent Swarm setzte Sub-Agents ein, um über 200 Artikel zu suchen, herunterzuladen, zu kategorisieren und in thematische Ordner zusammenzufassen.

<Chat title="Ergebnis ansehen" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### Ergebnisse im großen Maßstab

**Fall: 100-seitige Literaturübersicht aus 40 PDFs**

K2.6 Agent Swarm [Beta] setzte mehrere auf das Schreiben spezialisierte Sub-Agents ein, von denen jeder für ein Kapitel zuständig war. Endergebnis: ein 100-seitiges wissenschaftliches Dokument mit Quellenangaben, Methodik-Diagrammen und einer Analyse des Zitationsnetzwerks.

<Frames
  src="./images/swarm/literature-review.png"
  alt="literature review"
/>

### Perspektiven im großen Maßstab

**Fall: Expertenbewertung einer Produkteinführungsstrategie**
Agent Swarm setzte Experten-Sub-Agents mit unterschiedlichen Perspektiven ein (Product Manager, Investor, Customer Success), um eine Markteinführungsstrategie zu bewerten.

<Frames
  src="./images/swarm/expert-review.png"
  alt="expert review"
/>

<Chat title="Ergebnis ansehen" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**Fall: *Die drei Sonnen* in 20 literarischen Stilen neu geschrieben**
20 „Autoren“-Sub-Agents verfassten unabhängig voneinander Texte in unverwechselbaren Stilen — von Virginia Woolf über Borges bis Kafka.

<Chat title="Ergebnis ansehen" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## Technischer Tiefblick

**Kernarchitektur: Commander + Spezialisten**

- **Orchestrator** = Coach/Commander: behält den Überblick, legt die Strategie fest
- **Sub-Agents** = Spieler: jeder auf eine bestimmte Rolle fokussiert

**Zentraler Entwurf: Die Spieler einfrieren, nur den Coach trainieren**

Alle Sub-Agents behalten ihre vorhandenen Fähigkeiten; nur der Orchestrator verbessert sich durch Reinforcement Learning. Das sorgt für klare Verantwortlichkeit und Trainingsstabilität.

**„Faulheit“ verhindern:**
- **Serieller Kollaps**: Der Orchestrator übergibt alles an einen einzigen Sub-Agent
- **Schein-Parallelität**: bedeutungslose Teilaufgaben, um Kennzahlen zu manipulieren

**Lösung: Dreidimensionaler Belohnungsmechanismus**
1. Qualität des Endergebnisses
2. tatsächlich erreichte Parallelität
3. Abschlussrate der Teilaufgaben

**Kennzahl „kritische Schritte“**

Agent Swarm berechnet in jeder Phase die Zeit des langsamsten Sub-Agents. Das erzwingt eine echte Prozessoptimierung statt eines blinden Aufteilens von Aufgaben.

**Context Sharding**

Jeder Sub-Agent konzentriert sich auf sein eigenes „Notizbuch“ und hält relevante Details unabhängig fest. Nur die wesentlichen Schlussfolgerungen werden an den Orchestrator gemeldet — so bleibt die Argumentation erhalten, ohne den Speicher zu überlasten.

**Ergebnisse aus der Praxis**

Im BrowseComp-Benchmark:
- Genauigkeit: 15,9 % (einzelner Agent) → 33,3 %
- Kritische Schritte um ca. 40 % reduziert

## Einsatzszenarien

K2.6 Agent Swarm [Beta] eignet sich besonders für:
1. **Großangelegte Informationsbeschaffung**: massive Sammlung von Internetdaten
2. **Batch-Downloads**: großangelegte Sammlung von Dateien und Ressourcen
3. **Umfassendes Lesen**: Verarbeitung von über 100 Dokumenten
4. **Langform-Texte**: Inhalte mit mehr als 100.000 Wörtern
5. **Komplexe Programmierung**: Frontend-Entwicklung, Code-Review, Refactoring
6. **Office-Automatisierung**: professionelle Dokumente, Tabellen, Präsentationen

**Weiterführende Lektüre:**
- [Kimi Agent Swarm: 100 Sub-Agents im großen Maßstab](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Visual Agentic Intelligence​](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: Open-Source-Coding vorangetrieben](https://www.kimi.com/blog/kimi-k2-6)
