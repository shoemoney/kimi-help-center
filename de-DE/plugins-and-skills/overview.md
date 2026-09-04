---
title: "Was sind Kimi-Plugins?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Binden Sie externe Tools in Kimi ein, damit es Apps und Dienste zum Erledigen von Aufgaben nutzen kann. Nach der Installation eines Plugins kann Kimi Drittanbieter-Funktionen aufrufen – etwa Finanzdaten, Office-Software und Design-Tools –, um Ihnen bei der Arbeit zu helfen."
---

<SeoMeta
  title="Was sind Kimi-Plugins? Installation und Nutzung - Kimi Hilfecenter"
  description="Erfahren Sie mehr über Kimi-Plugins: Binden Sie externe Dienste wie Finanzdaten, Office-Software und Design-Tools in Kimi ein und rufen Sie sie direkt während der Aufgabenerledigung auf. Behandelt werden Verfügbarkeit, Installation und Autorisierung, Aufruf, Plugin-Kategorien und Credit-Verbrauch."
/>

# Was sind Kimi-Plugins?

Plugins binden externe Tools in Kimi ein, damit es Apps und Dienste zum Erledigen von Aufgaben nutzen kann. Nachdem Sie ein Plugin installiert haben, kann Kimi die entsprechende Drittanbieter-Funktion direkt während der Aufgabenerledigung aufrufen – etwa Finanzdaten abfragen, Office-Software bedienen oder Design-Tools nutzen. Sie können ausdrücklich die Nutzung eines bestimmten Plugins anfordern, und Kimi ruft bei Bedarf auch automatisch eines auf.

## Was ist ein Kimi-Plugin?

Ein Kimi-Plugin folgt der [Kimi Code-Plugin-Definition](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest) und kann eine oder mehrere der folgenden Komponenten enthalten:

| Komponente | Zweck |
| --- | --- |
| Skills | Liefern das Wissen, die Schritte und die Nutzungsanleitung, die zum Erledigen von Aufgaben nötig sind |
| MCP | Binden externe Software, Dienste, Datenbanken oder APIs an |
| Agents | Delegieren komplexe Aufgaben an spezialisierte Sub-Agenten |
| Hooks | Führen bei bestimmten Ereignissen automatisch vordefinierte Aktionen aus |
| Commands | Bieten klare, wiederverwendbare Einstiegspunkte per Befehl |
| System Prompt | Ergänzen den Haupt-Agent um Systemanweisungen, solange das Plugin aktiviert ist |

Das Kimi-Web-Erlebnis unterstützt derzeit MCP und Skills in Plugins. Kimi Work und Kimi Code folgen der oben beschriebenen vollständigen Plugin-Definition und unterstützen umfassendere Kombinationen von Plugin-Komponenten.

**Beispiele:**

- **Notion-Plugin** = Notion-MCP + Skill mit Nutzungsanleitung
- **Finanzrecherche-Plugin** = mehrere Finanz-MCPs + mehrere Analyse-Skills + ein benutzerdefinierter Agent

## Wo Sie Plugins nutzen können

Sie können Plugins nutzen, wenn Sie das Modell auf **K3** oder **K3 Swarm** umstellen, sowie in den Szenarien **Deep Research, Websites und PPT**.

Plugins lassen sich auch in der **Kimi Work-Desktop-App** nutzen; die integrierte Plugin-Liste auf dem Desktop finden Sie im [Kimi Work Plugin-Center](/kimi-work/plugin-center).

<Callout type="info">
Plugins werden in Kimi Claw- und Kimi Plus-Unterhaltungen noch nicht unterstützt.
</Callout>

## Plugins installieren

- **Einstiegspunkte**: Nutzen Sie das **+** im Eingabefeld oder geben Sie „/“ ein; auf dem Mobilgerät nutzen Sie das **+** im Eingabefeld oder „/“.
- Suchen oder stöbern Sie im Plugin-Marktplatz, öffnen Sie die Details eines Plugins und klicken Sie auf „Installieren“.
- Manche Plugins erfordern eine **OAuth-Autorisierung** (Sie werden zur Anmeldung beim Drittanbieter weitergeleitet; nach der Autorisierung können Sie das Plugin nutzen); manche Plugins sind **vorinstalliert** und brauchen keine manuelle Installation.
- **Plugins nur für Unternehmen**: Nutzer ohne Unternehmenskonto können sie sehen, aber die Schaltfläche „Installieren“ ist ausgegraut.
- Im abgemeldeten Zustand können Sie Plugins weder installieren noch nutzen.

## Plugins verwenden

- Geben Sie nach der Installation „/“ im Eingabefeld ein oder klicken Sie auf **+** → „Plugins“ und wählen Sie dann das Plugin aus, um es aufzurufen; Sie können **auch mehrere Plugins gleichzeitig aufrufen**.
- Sie können auch einfach beschreiben, was Sie brauchen (zum Beispiel „such dieses Unternehmen auf Tianyancha“), und Kimi wählt automatisch das passende Plugin aus.
- Wenn Kimi die Tools eines Plugins aufruft, zeigt es in seiner Antwort „Plugin xx wird verwendet“ an.

## Plugin-Kategorien und -Liste

Der Plugin-Marktplatz ist in die folgenden Kategorien gegliedert. Welche Plugins Sie tatsächlich sehen, hängt von **Region (Inland / Ausland)** und **Plattform** ab, und manche Plugins erscheinen in mehreren Kategorien.

- **Finanzen**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF (International Monetary Fund) Database, Stripe, Tianyancha
- **Produktivität**: Notion, Baidu Netdisk
- **Entwicklung**: GitHub, Supabase, Neon, Cloudflare
- **Kreativität**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **Allgemein**: Vivify

## Daten und Berechtigungen

- Wenn Sie ein Plugin auswählen oder ausdrücklich seine Nutzung anfordern, priorisiert Kimi die Tools, die dieses Plugin bereitstellt, und erstellt seine Antwort auf Basis der Ergebnisse dieser Tools; nach dem Verbinden eines Plugins greift Kimi innerhalb des von Ihnen autorisierten Umfangs auf relevante Inhalte zu.
- Wird ein Plugin von einem Drittanbieter bereitgestellt, legt dieses Unternehmen seine Regeln zur Datenverarbeitung selbst fest, und die Daten unterliegen dessen Nutzungsbedingungen und Datenschutzrichtlinie – wir empfehlen, diese vor der Autorisierung zu lesen.
- Sie können **ein Plugin jederzeit deinstallieren oder die Autorisierung widerrufen**. Nach der Deinstallation wird die zugehörige OAuth-Autorisierung widerrufen; um das Plugin erneut zu nutzen, müssen Sie es neu installieren und erneut autorisieren.

## FAQ

### Verbrauchen Plugins meine Mitgliedschafts-Credits?
Einige ja. Wenn Kimi die Tools oder Dienste eines Plugins aufruft, um eine Aufgabe zu erledigen, werden Credits nach tatsächlicher Nutzung verbraucht; Plugins ohne Aufrufkosten verursachen keine zusätzlichen Gebühren.

### Kann ich mehrere Plugins gleichzeitig nutzen?
Ja. Sie können über „/“ oder **+** mehrere Plugins gleichzeitig aufrufen.

### Warum sehe ich ein bestimmtes Plugin nicht?
Die verfügbaren Plugins variieren je nach Region (Inland / Ausland) und Plattform; außerdem sind manche Plugins nur für Privat- oder Unternehmensnutzer verfügbar.

### Kann ich Plugins von ChatGPT, Claude oder anderen Plattformen nutzen?
Ja. Siehe [Ein persönliches Plugin erstellen](/plugins-and-skills/create): Übergeben Sie dem Plugin Builder die vorhandenen Plugin-Dateien oder den Projektlink von der anderen Plattform und folgen Sie den Anweisungen, um sie in ein Kimi-Plugin umzuwandeln.
