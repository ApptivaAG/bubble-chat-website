---
layout: feature
title: Analytics
excerpt: Bubble Chat gibt einen sehr guten Einblick darüber, wie Chatbots von den Anwendern benutzt werden. Mit diesen Daten kann der Chatbot laufend verbessert werden.
order: 7
rootTag: Analytics
image: /img/funktionen/analytics-card.png
eleventyNavigation:
  key: Analytics
  parent: Funktionen
tags:
  - RootTag
contactPerson: Linus Hüsler
---

Chatbot Metriken erlauben es, die Leistung eines Chatbots über eine bestimmte Zeit zu überwachen. Damit kann zum Beispiel der Effekt einer Änderung am Chatbot (z.B. eine Einführung einer neuen Absicht) beobachtet werden, oder es kann Hinweise darüber geben, wie der Chatbot optimiert werden soll.

Metriken werden in der Regel über einen bestimmten Zeitraum betrachtet (z.B. die letzten 30 Tage) und einige stehen in Korrelation zu anderen, teils nicht Chatbot-spezifischen Metriken (z.B. "Anzahl Bot Nachrichten" vs "Anzahl Erreichung spezifischer Zielvorhaben"). Bei einem neu erstellten Chatbot schwanken Metriken in der Regel noch stark. Mit der Zeit erhält man allerdings ein immer klareres Bild darüber, wie die Besucher mit dem Chatbot interagieren.

<br>
{% browserScreenshot "./img/cms/analytics.png", "Analytics", {"class":"image image--expandable"} %}
<br>

### Allgemeine Metriken

Untenstehende Chatbot Metriken können im [Bubble Chat CMS](/funktionen/cms/) unter "Analytics" gefunden werden:

- **Anzahl aktive Benutzer**
  Als Benutzer zählt, wer dem Chatbot mindestens eine Nachricht sendet und ihn somit aktiv nutzt. Eine Vielzahl aktiver Benutzer hilft, diese besser zu verstehen und das Angebot passender zu gestalten.

- **Anzahl neue Benutzer**
  Neue Benutzer sind notwendig, um eine aktive Benutzerzahl zu behalten. Attraktive Einstiegspunkte (z.B. auf unterschiedlichen Orten der Webseite) oder gezielte Marketingaktivitäten haben positiven Einfluss auf diese Metrik.

- **Anzahl wiederkehrende Benutzer**
  Wiederkehrende Benutzer sind ein Zeichen dafür, dass ihnen der Chatbot einen konkreten Nutzen gebracht hat und sie ihn wohl auch weiterempfehlen würden.

- **Engagement der Benutzer**
  Hier können Sie ablesen, wie viel Prozent aller Benutzer, die den Chatbot angeboten bekommen, ihn auch tatsächlich nutzen.

- **Anzahl Chats**
  Es ist wichtig, viele Chats und somit eine grosse Datenbasis für verschiedenste Auswertungen zu haben. Die Anzahl Chats kann wichtige Informationen über die Berechnungen der Marktgrösse und möglicherweise die Auswirkungen des Chatbots liefern.

- **Anzahl Benutzereingaben**
  Führen die Anwender eher lange Konversationen oder kann Ihr Chatbot direkt helfen?

- **Anzahl nicht verstandener Benutzerfragen**
  Ein Chatbot wird nie auf jede Frage eine passende Antwort haben. Die nicht verstandenen Benutzerfragen helfen uns, den Chatbot besser zu trainieren; zum Beispiel durch das Hinzufügen einer neuen Absicht oder durch das Optimieren der Trainingssätze einer Absicht. Über die Zeit sollte diese Anzahl also eher runter gehen. Ist dies nicht der Fall, kann dies ein Zeichen dafür sein, dass sich die Chatbot Benutzer für andere Themen interessieren (z.B. infolge einer Marketingaktion).

- **Anzahl Übergaben an einen Live-Agenten vom Kundendienst**
  Die Anzahl Übergaben an einen Live-Agenten kann verwendet werden, um die _First Contact Resolution (FCR)_ zu ermitteln - ein prozentuales Mass für die Erfolgsquote bei der Beantwortung von Kundenanfragen bei der ersten Kontaktaufnahme über den Chatbot.

- **Benutzerzufriedenheit**
  Der Grad der Benutzerzufriedenheit können Sie nutzen, um den Chatbot stetig zu verbessern. Indem Sie Ihre Kunden mit einer einfachen Frage wie z.B. "Wie zufrieden sind Sie mit diesem Chat?" konfrontieren, erhalten Sie ein ungefiltertes und ehrliches Feedback.

- **Top Absichten**
  Bei Absichten, die am meisten aufgerufen werden, kann es Sinn machen, die Antworten des Chatbots besonderes zu optimieren. Anstatt dass der Chatbot z.B. einen Link zu einem Online-Dienst liefert (und damit einen Absprung des Besuchers in Kauf nimmt), könnte er den Online-Dienst via API integrieren und direkt die passende Antwort liefern.

- **Top Absprungabsichten**
  Ein Absprung eines Benutzers hat in der Regel zwei mögliche Ursachen: Entweder der Benutzer hat sein Ziel erreicht (positiv, Chatbot konnte helfen) oder nicht (negativ, Chatbot konnte nicht helfen). In beiden Fällen kann Handlungsbedarf bestehen. Im positiven Fall könnte man zusätzliche Leistungen anbieten (Up-selling) und im negativen Fall lohnt es sich, die Konversationen zu analysieren und den Chatbot besser zu trainieren.

### Chatbot-spezifische Metriken

Da jeder Chatbot einzigartig ist, braucht es oft Chatbot-spezifische Metriken. Diese können via [Chatbot Engine](/funktionen/chatbot-tasks/) gesammelt und mit dem Tool Ihrer Wahl geteilt werden. Dies können z.B. sein: Google Tag Manager, Tableu oder Qlik Sense.
