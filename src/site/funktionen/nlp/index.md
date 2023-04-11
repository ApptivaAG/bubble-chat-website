---
layout: feature
title: Sprachverständnis
excerpt: Bubble Chat nutzt Künstliche Intelligenz um die Benutzer zu verstehen. Diese können ihre Anliegen via Freitexteingabe oder auch via Sprache äussern und Sie erhalten einen besseren Einblick über das, was Ihre Kunden wirklich wollen.
image: /img/funktionen/nlp-card.png
order: 5
eleventyNavigation:
  key: NLP
  parent: Funktionen
rootTag: NLP
tags:
  - RootTag
contactPerson: Markus Tanner
---

Natürliches Sprachverständnis (NLP) ermöglicht es, dass Chatbots die menschliche Sprache verstehen können. Konkret bedeutet das, dass Benutzer ihre Anliegen via Freitexteingabe oder auch via Sprache äussern können.
Bubble Chat analysiert danach mittels NLP-Technologie die Benutzeräusserung und versucht diese der passenden Absicht zuzuordnen.

<div class="border-box">

**Beispiel**

Der Benutzer möchte wissen, wie viel eine Tasse Kaffee kostet:

<div class="guest-bubble">Wie viel kostet eine Tasse Kaffee?</div>

Der Chatbot erkennt die Absicht «Kaffeepreis» und antwortet mit der definierten Antwort:

<div class="bot-bubble">Eine Tasse Kaffee kostet CHF 4.20</div>

</div>

Damit dies Funktioniert, müssen Sie im [Bubble Chat CMS](/funktionen/cms) für jede Absicht, die Ihr Chatbot verstehen soll, einige Beispielformulierungen der Benutzer hinterlegen.
Dank Künstlicher Intelligenz (KI) und maschinellen Lernens ist Bubble Chat in der Lage, auch Äusserungen einer Absicht zuzuordnen, die nicht 1:1 als Beispielformulierung erfasst sind.

## Training

Änderungen, die Sie an der Konfiguration Ihres Chatbots vornehmen, werden zunächst auf einer Testumgebung angewendet. Auf diese Weise können Sie Ihre Änderungen testen, bevor sie veröffentlicht werden. Zusätzlich wird der Inhalt durch Bubble Chat automatisch getestet. Anschliessend können Sie entscheiden, ob Sie die Änderungen auf der Produktivumgebung publizieren möchten.

## Fallback Absicht

Auch wenn Ihr Chatbot noch so gut trainiert ist, gibt es immer Situationen bei denen er nicht versteht, was der Benutzer genau meint. Für diese Fälle gibt es die sogenannte "Fallback Absicht". Bubble Chat verwendet diese, sobald die Absicht des Benuzters nicht verstanden wird. Hier können Sie dem Benutzer nochmals mitteilen, in welchen Bereichen der Chatbot Fragen
beantworten kann und alternative Kontaktmöglichkeiten bieten (z.B. via [Live-Chat](/funktionen/live-chat)).

## Schwellenwert für die Klassifizierung

Bei der Analyse der Benutzeräusserung werden die infrage kommenden Absichten bewertet. Die Bewertung reicht dabei von 0 (absolut unsicher) bis 1 (absolut sicher).
Bubble Chat verwendet dann die am höchsten bewertete Absicht und prüft, ob deren Bewertung über einem definierten Schwellwert liegt. Ist dies der Fall, so wird diese Absicht ausgeführt. In allen anderen Fällen wird die "Fallback Absicht" verwendet.

## Geführte Dialoge

Bubble Chat erlaubt geführte Dialoge. Dabei werden dem Benutzer mögliche Antworten als Buttons angeboten (sogenannte Quick Replies). Dies können z.B. Themenvorschläge oder auch nur ein "Ja" oder "Nein" sein. Basierend auf dem, was Benutzer auswählt, erhält er eine Antwort vom Chatbot. Da bei einem geführten Dialog eine klare Struktur vorgegeben ist, muss Bubble Chat das NLP Modul nicht nutzen um die passende Antwort zu geben.

Bei geführten Dialogen wird die Freiheit des Benutzers zwar limitiert, jedoch kann die Absicht präziser interpretiert werden. In der Regel empfehlen wir eine Kombination
von freitextbasierten und geführten Dialogen, um ein möglichst gutes Benutzererlebnis zu erreichen.

## Unterstützte NLP Systeme

Bubble Chat nutzt standardmässig Dialogflow als NLP System. Damit kann mit einem überschaubaren Aufwand ein sehr gutes Ergebnis erzielt werden.

Unsere [Chatbot Engine](/funktionen/chatbot-engine) erlaubt es grundsätzlich, ein beliebiges NLP System zu integrieren. So ist es z.B. möglich, bei schützenswerten Daten vollkommen auf OpenSource zu setzen und sämtliche Komponenten in Ihrem Rechenzentrum laufen zu lassen.
