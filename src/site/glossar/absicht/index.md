---
layout: glossary
tags: glossary
title: Absicht
excerpt: Eine Absicht ist das, was ein Benutzer mit einer Anfrage an einen Chatbot erreichen will. Die Erkennung dieser Absicht durch den Chatbot wird Absichts-Klassifizierung genannt.
eleventyNavigation:
  key: Absicht
  parent: Glossar
---

# Was ist eine Absicht?

Um die Anfrage eines Benutzers zu verarbeiten, muss ein Chatbot zuerst erkennen, welche Absicht (englisch Intent) hinter der Anfrage steckt. Dieser Zuordnungsprozess wird als Absichts-Klassifizierung bezeichnet. Je nach Einsatzgebiet des Chatbots wird er unterschiedliche Absichten unterstützen.

Zum Beispiel könnte man einen Wetter-Chatbot erstellen, der in der Lage ist, Benutzeranfragen bezüglich des Wetters zu erkennen und darauf zu reagieren. In diesem Fall kann eine Absicht definiert werden, der auf Wettervorhersagefragen reagiert. Wenn ein Benutzer dann die Frage stellt: «Wie wird das Wetter?», würde der Chatbot die Aussage der Wettervorhersage-Absicht zuordnen. Es ist auch möglich, die Absicht so zu definieren, dass hilfreiche Informationen (sogenannte [Entitäten](/glossar/entitaet/)) aus der [Benutzeräusserung](/glossar/benutzeraeusserung/) extrahiert werden können, etwa eine spezifische Zeit oder einen Ort für die gewünschte Wettervorhersage. Diese extrahierten Informationen sind essenziell für das System, um eine Wetterabfrage für den Anwender durchzuführen.

## Eine Absicht besteht im Wesentlichen aus zwei Teilen:

- **Trainingssätze**<br/>Dies sind Äusserungen für das, was Benutzer im Kontext einer bestimmten Absicht eingeben könnten. So passen die Trainingssätze «Wie wird das Wetter?», «Scheint morgen die Sonne» und «Brauche ich morgen einen Regenschirm?» beispielsweise zur Absicht Wettervorhersage.
Dank [Künstlicher Intelligenz (KI)](/glossar/kuenstliche-intelligenz/) und [maschinellen Lernens](/glossar/maschinelles-lernen/) ist ein Chatbot in der Lage, auch Äusserungen einer Absicht zuzuordnen, die nicht 1:1 als Trainingssatz erfasst sind.

- **Bot-Antworten**<br/>Wenn der Chatbot die richtige Absicht des Benutzers erkannt hat, kann er mit einer passenden Antwort darauf reagieren. In Bubble Chat können dazu bei den Absichten beliebige Textantworten sowie formatierte Karten mit Bildern definiert werden.

## Beispiel:

Der Benutzer möchte wissen, wie das Wetter wird:

<div class="guest-bubble">Wie wird das Wetter morgen?</div>

Der Chatbot erkennt die Absicht «Wettervorhersage» und antwortet mit der definierten Antwort:

<div class="bot-bubble">Morgen scheint tagsüber die Sonne bei blauem Himmel und die Temperaturen liegen zwischen 20 und 34°C. Nachts gibt es keine Wolken und die Sterne sind klar zu erkennen bei Werten von 21°C. Böen können Geschwindigkeiten zwischen 9 und 16 km/h erreichen.</div>

