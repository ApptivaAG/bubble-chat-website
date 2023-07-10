---
layout: feature
title: Content Management
excerpt: Ähnlich wie bei Webseiten ist es sinnvoll, die Chatbot-Inhalte in einem CMS zu verwalten. Das CMS enthält dabei alle Absichten und Antworten.
image: /img/funktionen/cms-card.png
order: 2
eleventyNavigation:
  key: Content Management
  parent: Funktionen
rootTag: CMS
tags:
  - RootTag
contactPerson: Markus Tanner
---

Analog zu Webseiten ist es sinnvoll, Chatbot-Inhalte in einem Content Management System (CMS) zu verwalten. Die Datenmenge kann schnell unübersichtlich werden, daher ist ein strukturiertes Vorgehen wichtig. Die Inhalte werden als **Absichten** (Intents) erfasst, welche grundsätzlich aus folgenden Teilen bestehen:

- **Trainingssätze**
  Dies sind Äusserungen für das, was Benutzer im Kontext einer bestimmten Absicht eingeben könnten. So passen die Trainingssätze «Was kostet ein Fahrrad?», «Wie teuer ist ein Fahrrad?» und «Preise für Fahrräder» beispielsweise zur Absicht «Fahrradpreise».

- **Bot-Antworten**
  Wenn der Chatbot die richtige Absicht des Benutzers erkannt hat, kann er mit einer passenden Antwort darauf reagieren. In Bubble Chat kann man bei den Absichten beliebige Text-Antworten sowie formatierte Karten mit Bildern definieren.

{% browserScreenshot "./img/cms/inhalte-verwalten.png", "Analytics", {"class":"image image--expandable"} %}
<br>

### Suche

Sehr wichtig ist eine gute Suche nach Absichten, die man erfasst hat. Normalerweise kann man sich nicht alle Namen der Absichten merken. Man erinnert sich aber oft an einen Trainingssatz oder eine Antwort, die bereits erfasst wurde. In Bubble Chat können sämtliche erfassten Inhalte performant durchsucht werden. Dadurch kann auch das Risiko gemindert werden, dass gleiche Inhalte mehrfach erfasst werden.

### Status

Nicht alle Absichten sollen von Anfang an veröffentlicht werden. Oft befindet sich ein Intent zuerst in einem Draft-Status. Bubble Chat kann mit unterschiedlichen Status umgehen, um diesen Anforderungen gerecht zu werden. In den gängigen Content Management Systemen für Webseiten ist diese Handhabung sehr ähnlich.

### Bereiche

In Bubble Chat können Bereiche erfasst werden, um Absichten zu gruppieren. Dies hilft dabei, einen guten Überblick über die Absichten zu behalten. Teilweise arbeiten auch unterschiedliche Leute an den Absichten aus den einzelnen Bereichen. Daher ist es wichtig, dass einfach nach Bereichen gefiltert werden kann.

Die Absichten aus einzelnen Bereichen können auch unabhängig voneinander veröffentlicht werden. So ist sichergestellt, dass gleichzeitig an unterschiedlichen Inhalten gearbeitet werden kann, ohne sich gegenseitig zu beeinflussen.

### Hierarchie

Es liegt in der Natur von Konversationen, dass nach einer Antwort eine Konversation meistens noch nicht beendet ist. Auf eine Antwort folgen meistens weitere Fragen. Mit Bubble Chat können solche Hierarchien von Konversationen abgebildet werden. Möchte der Besucher bei einer Antwort noch mehr in die Tiefe gehen, oder muss der Chatbot noch mehr wissen, um eine gute Antwort geben zu können, kann der Chatbot dafür trainiert werden.

### Texteingabe und Buttons

Bubble Chat setzt Technologien fürs Verstehen von natürlicher Sprache ein (siehe [NLP](/funktionen/nlp/)). Nicht alle Leute tippen allerdings gerne Texte ein. Daher können in Bubble Chat auch Antworten in der Form von Buttons definiert werden. So können Besucher ggf. auch schneller an ihr Ziel geleitet werden.

In Bubble Chat können Buttons zusätzlich zur Texteingabe angezeigt werden. Es ist aber auch möglich, einen sogenannten Klickbot zu konfigurieren. Dabei kann der Besucher nur auf Buttons klicken und keine eigenen Texte eingeben. Dies ist oft zu Beginn von Chatbot-Projekten eine Vorgehensweise, um festzustellen, was die Kundschaft am meisten interessiert. Mit den Erkenntnissen kann man den Chatbot trainieren und anschliessend die Texteingabe aktivieren.
