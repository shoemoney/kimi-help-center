---
title: "So funktioniert Kimi Browsererweiterung"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: true
preview: false
---

<SeoMeta
  title="So funktioniert Kimi Browsererweiterung - Kimi Hilfecenter"
  description="Erfahren Sie, wie Kimi Browsererweiterung Ihren Browser lokal mit KI-Agenten verbindet und so sichere Web-Navigation, Klicks, Screenshots und mehr ermöglicht."
  ogType="article"
/>

# So funktioniert Kimi Browsererweiterung

## Ablauf

Kimi Browsererweiterung unterstützt zwei Nutzungsarten – **Seitenleisten-Chat** und **Fernsteuerung durch einen lokalen Agenten** – und arbeitet folgendermaßen:

1. **Browser-Seitenleiste**: Klicken Sie auf das Kimi-Symbol in der Symbolleiste, um die Seitenleiste zu öffnen, und melden Sie sich mit Ihrem Kimi-Konto an, um direkt zu chatten
2. **Lokaler Bridge-Dienst**: Ein lokaler Dienst läuft auf Ihrem Computer und empfängt Anweisungen vom Agenten
3. **Browser-Erweiterung**: Führt bestimmte Aktionen im Browser auf Basis des Chrome DevTools Protocol aus
4. **Sicherheitsisolierung**: Die gesamte Ausführung erfolgt lokal – Anmeldestatus und Webseiteninhalte verlassen niemals Ihr Gerät

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## Oberfläche der Erweiterung

Klicken Sie auf das Symbol der Kimi Browsererweiterung in der Browser-Symbolleiste, um die Seitenleiste zu öffnen und eine Aufgabe zu senden.

<Frames
  src="./images/sidebar.png"
  alt="Kimi Browser Extension sidebar"
/>

## Funktionen

| Funktion | Beschreibung |
|---------|-------------|
| Web-Navigation | Automatisches Öffnen angegebener URLs |
| Elemente anklicken | Simuliert Klicks auf Schaltflächen, Links und andere Seitenelemente |
| Formulare ausfüllen | Gibt automatisch Text ein und wählt Optionen aus |
| Seiten-Screenshots | Erfasst die aktuelle Seite oder einen bestimmten Bereich |
| Inhaltsextraktion | Liest Seitentext, Tabellen und andere strukturierte Daten aus |
| Beibehaltung der Anmeldesitzung | Nutzt vorhandene, im Browser gespeicherte Anmeldestatus |

Anwendungsfälle:

- E-Commerce-Preisvergleich: Automatisch nach Produkten suchen und Preise plattformübergreifend vergleichen
- Informationsrecherche: Webseiten gründlich durchsuchen und strukturierte Informationen extrahieren
- Formularausfüllung: Verschiedene Online-Formulare automatisch ausfüllen
- Dateneingabe: Webdaten automatisch aufbereiten und in einem festgelegten Format eingeben

Weitere Anwendungsfälle finden Sie auf der [offiziellen Website von Kimi Browsererweiterung](https://www.kimi.com/features/webbridge).
