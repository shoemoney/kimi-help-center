---
title: "FAQ"
slug: "kimi-work-faq"
order: 7
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Work FAQ – Kimi-Hilfecenter"
  description="Kimi Work FAQ: Worin es sich von der Web-Version unterscheidet, wie Berechtigungen beim Zugriff auf lokale Dateien gesteuert werden, was die Browser-Automatisierung mit WebBridge leisten kann und wie geplante Aufgaben ausgeführt werden."
/>

# Kimi Work FAQ

## Worin unterscheidet sich Kimi Work von der Web-Version?

Die Kimi Web-App ist ideal für kurze Chats und schnelle Anfragen. Kimi Work dagegen ist ein lokaler Agent für anspruchsvolle Workflows. Er liest und verarbeitet lokale Ordner, navigiert über WebBridge selbstständig im Web, führt Python-Code im Hintergrund aus und erledigt geplante Aufgaben. Kurz: ein digitaler Mitarbeiter auf Systemebene.

## Wie schützt Kimi Work meine Privatsphäre beim Zugriff auf lokale Dateien?

Sie behalten die volle Kontrolle über Ihre Dateien. Kimi Work bietet eine Berechtigungssteuerung mit drei Stufen, und Sie entscheiden, wie Sie Zugriffe autorisieren:

- **Standard**: Routinemäßige Vorgänge laufen automatisch — Kimi fordert Ihre ausdrückliche Zustimmung an, bevor es lokale Dateien ändert, überschreibt oder darin Code ausführt;
- **Manuell erlauben**: vor dem Ausführen um Freigabe bitten;
- **Alle**: direkt ausführen, ohne zuvor nach einer Freigabe zu fragen.

Wenn Sie „Manuell erlauben“ wählen, geschieht nichts ohne Ihre Zustimmung.

<Callout type="exclamation">
Wenn die Berechtigung „Alle“ (vollautomatisch) aktiviert ist, liest und schreibt die KI direkt Dateien, führt Code aus und ändert Systemkonfigurationen und erledigt automatisch Schritte, die sonst Ihre Entscheidung erfordern würden. Dies kann zu Folgendem führen:

- Dateien werden überschrieben, versehentlich gelöscht oder beschädigt;
- Systemkonfigurationen werden geändert, was zu Softwarefehlern führt;
- Änderungen an Festplattenverschlüsselung, Partitionen oder Firmware machen das Gerät eingeschränkt oder unbootbar.

Einige Vorgänge sind unwiderruflich, und Daten können dauerhaft verloren gehen und nicht wiederhergestellt werden. Bitte beachten Sie die Risiken dieses Modus, verwenden Sie ihn mit Vorsicht und sichern Sie Ihre Daten.

Mit dem Aktivieren der Berechtigung „Alle“ (vollautomatisch) erklären Sie, dass Sie die oben genannten Risiken kennen und akzeptieren und die KI zur autonomen Ausführung der entsprechenden Vorgänge autorisieren. Die Ergebnisse der aufgrund Ihrer Autorisierung ausgeführten Vorgänge tragen Sie selbst.
</Callout>

## Was genau kann WebBridge (Browser-Automatisierung) für mich tun?

WebBridge gibt Kimi die Fähigkeit, einen Browser wie ein Mensch zu bedienen. Sie können Kimi etwa bitten, die neuesten Nachrichten auf einer Website zu prüfen und zusammenzufassen oder historische Aktienkurse in Ihre lokale Excel-Datei zu übernehmen. WebBridge klickt, scrollt und extrahiert Daten selbstständig – und spart Ihnen so stundenlange Handarbeit.

## Was kann ich mit geplanten Aufgaben tun? Werden sie ausgeführt, wenn mein Computer im Ruhezustand ist?

Mit geplanten Aufgaben kann Kimi eine feste Aufgabe automatisch zu einem bestimmten Zeitpunkt ausführen — täglich, wöchentlich, monatlich oder einmalig (ohne Wiederholung). Das eignet sich ideal für tägliche Briefings, wöchentliche Überwachung und regelmäßige Aufräumarbeiten.

In der Desktop-Version von Kimi Work werden geplante Aufgaben **lokal** ausgeführt und laufen nur, solange die **App geöffnet** ist. Auslöser, die verpasst werden, während Ihr Computer im Ruhezustand oder ausgeschaltet ist oder die App geschlossen wurde, werden beim nächsten Öffnen **nicht nachträglich ausgeführt**. Wenn eine Aufgabe also über Nacht laufen soll, lassen Sie Ihren Computer und die Kimi Work App eingeschaltet. (Im Unterschied dazu laufen in Kimi erstellte Aufgaben in der Cloud und erfordern nicht, dass der Client geöffnet bleibt.)

Weitere Informationen finden Sie unter [Geplante Aufgaben](/features/scheduled-tasks).
