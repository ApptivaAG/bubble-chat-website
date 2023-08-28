---
layout: feature
title: Chatbot Tasks
excerpt: Zu den wichtigsten Tasks eines Chatbots gehört das Verstehen von Benutzereingaben, die Erkennung von Absichten und die Generierung von Antworten.
image: /img/funktionen/chatbot-tasks-card.png
order: 1
redirectFrom: /funktionen/chatbot-engine/
eleventyNavigation:
  key: Chatbot Tasks
  parent: Funktionen
rootTag: Chatbot Tasks
tags:
  - RootTag
contactPerson: Markus Tanner
---

Bubble Chat ist ein Chatbot Management System, welches die wichtigsten Tasks eines Chatbots unterstützt. Dazu gehören die folgenden Aspekte.

### Verstehen von Benutzereingaben
Beim Verstehen von Benutzereingaben analysiert ein Bubble Chat den eingegebenen Text oder die gesprochene Sprache, um die Absicht des Benutzers zu identifizieren, indem es Muster, Schlüsselwörter und Kontext verwendet. Der Bubble Chat kann auch Entitäten extrahieren, um spezifische Informationen aus den Eingaben zu erfassen, die für die Generierung der passenden Antwort relevant sind.


### Erkennung von Absichten
Bei der Erkennung von Absichten analysiert Bubble Chat die Benutzereingaben, um die zugrunde liegende Absicht oder den Zweck der Kommunikation zu identifizieren, beispielsweise eine Frage stellen, eine Bestellung aufgeben oder Unterstützung anfordern. Bubble Chat kann verschiedene Techniken wie maschinelles Lernen, natürliche Sprachverarbeitung und Mustererkennung verwenden, um die Absicht des Benutzers zuverlässig zu erkennen und entsprechend darauf zu reagieren.


### Generierung von Antworten
Bei Bubble Chat gibt es verschiedene Arten der Generierung von Antworten:

  - Vordefinierte Antworten: Der Chatbot verwendet vorab festgelegte Antwortvorlagen oder Sätze, um auf häufig gestellte Fragen oder standardisierte Anfragen zu antworten.
  - Regelbasierte Antworten: Der Chatbot wendet spezifische Regeln oder Skripte an, um auf bestimmte Benutzereingaben zu reagieren. Diese Regeln können vordefinierte Muster oder Bedingungen enthalten, die das Verhalten des Chatbots steuern.
  - Generative Antworten: Der Chatbot nutzt maschinelles Lernen und Natural Language Processing (NLP), um benutzerdefinierte Antworten basierend auf dem Verständnis der Benutzerabsicht und dem Kontext der Konversation zu generieren. Dies kann auf vortrainierten Modellen wie GPT (Generative Pre-trained Transformer) basieren.

Diese Ansätze können natürlich auch kombiniert werden. Die Wahl der geeigneten Antwortgenerierungsmethode hängt von den Anforderungen des Chatbots, der Komplexität der Aufgaben und der gewünschten Benutzererfahrung ab.


### Chatbot Engine
Die **Chatbot Engine** ist das Herzstück von Bubble Chat. Sämtliche Chatbot Tasks werden von hier aus erledigt. Der Erweiterbarkeit zuliebe ist die Chatbot Engine modular aufgebaut. Das heisst, neue Funktionalitäten können laufend hinzugefügt werden, ohne bestehende zu beeinträchtigen.

Die folgende Auflistung gibt einen Einblick über die Aufgaben der Chatbot Engine:

- **Nachrichten senden und empfangen**
  Die Engine empfängt und schickt Nachrichten an die [Chat Clients](/funktionen/channels/). Unser Chatbot Engine ist dabei in der Lage, mit unterschiedlichen Clients (gleichzeitig) zu kommunizieren.

- **Nachrichten verarbeiten**
  In der Engine wird entschieden, was mit einer Nachricht geschehen soll und wie auf die Nachricht geantwortet werden soll. Dafür werden in der Regel auch andere Bubble Chat Komponenten angefragt (wie z.B. die [Sprachverarbeitung](/funktionen/nlp/)). Via Schnittstellen können auch Systeme der Kunden aufgerufen (z.B. CRM) werden. Dank dem Zugriff auf solche Systeme ist der Chatbot in der Lage, noch bessere Antworten zu liefern.

- **Sitzungen verwalten**
  Die Engine sorgt dafür, dass Antworten den korrekten Adressaten finden. Sie muss auch sicherstellen, dass gewünschte Aktionen ausgeführt werden. Das ist teilweise nur möglich, wenn die Anwender identifiziert werden. Um dies zu ermöglichen, kann Bubble Chat Sitzungen verwalten. Falls gewünscht, kann die Chatbot Engine auch Benutzer identifizieren, um korrekt reagieren und Aktionen autorisieren zu können.

- **Kontext merken**
  Ein guter Chatbot antwortet je nach Kontext nicht immer gleich. Wenn der Chatbot im Verlauf des Gesprächs beispielsweise bereits einmal erfahren hat, dass der Anwender an der Informatiker-Lehre interessiert ist, so kann er bei der späteren Frage "Was sind die Anforderungen?" gleich vom Kontext Informatiker-Lehre ausgehen und entsprechend antworten.

- **Live-Chat vermitteln**
  Soll eine echte Person das Antworten für den Chatbot übernehmen ([Live-Chat](/funktionen/live-chat/)), muss die Chatbot-Engine dies koordinieren. Einerseits muss die Engine den Handover von der Maschine an den Menschen und somit die Kommunikation zwischen den Clients zu sicherstellen. Andererseits muss sich die Engine den Zustand des [Live-Chat](/funktionen/live-chat/) für jeden Anwender merken, um die Nachrichten korrekt zu verarbeiten.
