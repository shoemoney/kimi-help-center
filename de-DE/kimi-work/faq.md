---
title: "FAQ"
slug: "kimi-work-faq"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="FAQ zu Kimi Work - Kimi Hilfecenter"
  description="FAQ zu Kimi Work: worin es sich von der Webversion unterscheidet, wie die Berechtigungssteuerung beim Zugriff auf lokale Dateien funktioniert, was die Browserautomatisierung mit WebBridge leisten kann und wie geplante Aufgaben ausgeführt werden."
/>

# FAQ zu Kimi Work

## Worin unterscheidet sich Kimi Work von der Webversion?

Die Kimi-Web-App eignet sich ideal für schnelle Chats und kurze Abfragen. Kimi Work hingegen ist ein lokaler Agent für anspruchsvolle Workflows. Es liest und verarbeitet deine lokalen Ordner, navigiert über WebBridge eigenständig im Web, führt Python-Code im Hintergrund aus und erledigt geplante Aufgaben. Im Grunde ist es ein digitaler Mitarbeiter auf Systemebene.

## Wie schützt Kimi Work meine Privatsphäre beim Zugriff auf lokale Dateien?

Du behältst die volle Kontrolle über deine Dateien. Kimi Work bietet eine Berechtigungssteuerung, bei der du selbst festlegst, wie die Autorisierung erfolgen soll:

- **Berechtigung anfordern**: Vor jeder Aktion wird eine Autorisierung eingeholt — Kimi fragt dich ausdrücklich um Erlaubnis, bevor es lokale Dateien ändert, überschreibt oder darin Code ausführt;
- **Alles erlauben**: Aktionen werden direkt ausgeführt, ohne vorher nach Autorisierung zu fragen.

Wenn du „Berechtigung anfordern“ auswählst, geschieht nichts ohne deine Zustimmung.

## Was genau kann WebBridge (Browserautomatisierung) für mich tun?

Mit WebBridge kann Kimi einen Browser ähnlich wie ein Mensch bedienen. Du kannst Kimi zum Beispiel bitten, die neuesten Nachrichten auf einer Website zu prüfen und zusammenzufassen oder historische Börsendaten in deine lokale Excel-Datei zu übertragen. Kimi klickt, scrollt und extrahiert Daten selbstständig – und spart dir so stundenlange Handarbeit.

## Was kann ich mit geplanten Aufgaben tun? Werden sie auch ausgeführt, wenn mein Computer im Ruhezustand ist?

Der integrierte Cron-Scheduler unterstützt LLM Agent-Aufrufe, Python-/Shell-Ausführungen und mehr. Du kannst Aufgaben täglich, stündlich oder unter bestimmten Bedingungen auslösen. Damit sie auch über Nacht zuverlässig laufen, aktiviere in den Einstellungen einfach die Option „Computer wach halten“.
