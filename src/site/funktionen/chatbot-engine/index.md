---
layout: feature
title: Chatbot Engine
excerpt: Die Chatbot Engine ist das Herzstück von Bubble Chat. Sie empfängt, verarbeitet und sendet Nachrichten an die jeweiligen Chat Clients.
image: /img/funktionen/chatbot-engine-card.png
order: 1
rootTag: Chatbot Engine
tags:
  - RootTag
---

Die Chatbot Engine ist das Herzstück von Bubble Chat. Hier laufen sämtliche Nachrichten durch, welche der Chatbot erhält und versendet. Der Erweiterbarkeit zuliebe ist die Chatbot Engine modular aufgebaut. Das heisst, neue Funktionalitäten können laufend hinzugefügt werden, ohne bestehende zu beeinträchtigen.

Die folgende Auflistung gibt einen Einblick über die Aufgaben der Chatbot Engine:

- **Nachrichten senden und empfangen**
  Die Engine empfängt und schickt Nachrichten an die [Chat Clients](/funktionen/channels). Unser Chatbot Engine ist dabei in der Lage, mit unterschiedlichen Clients (gleichzeitig) zu kommunizieren.

- **Nachrichten verarbeiten**
  In der Engine wird entschieden, was mit einer Nachricht geschehen soll und wie auf die Nachricht geantwortet werden soll. Dafür werden in der Regel auch andere Bubble Chat Komponenten angefragt (wie z.B. die [Sprachverarbeitung](/funktionen/nlp)). Via Schnittstellen können auch Systeme der Kunden aufgerufen (z.B. CRM) werden. Dank dem Zugriff auf solche Systeme ist der Chatbot in der Lage, noch bessere Antworten zu liefern.

- **Sitzungen verwalten**
  Die Engine sorgt dafür, dass Antworten den korrekten Adressaten finden. Sie muss auch sicherstellen, dass gewünschte Aktionen ausgeführt werden. Das ist teilweise nur möglich, wenn die Anwender identifiziert werden. Um dies zu ermöglichen, kann Bubble Chat Sitzungen verwalten. Falls gewünscht, kann die Chatbot Engine auch Benutzer identifizieren, um korrekt reagieren und Aktionen autorisieren zu können.

- **Kontext merken**
  Ein guter Chatbot antwortet je nach Kontext nicht immer gleich. Wenn der Chatbot im Verlauf des Gesprächs beispielsweise bereits einmal erfahren hat, dass der Anwender an der Informatiker-Lehre interessiert ist, so kann er bei der späteren Frage "Was sind die Anforderungen?" gleich vom Kontext Informatiker-Lehre ausgehen und entsprechend antworten.

- **Live-Chat vermitteln**
  Soll eine echte Person das Antworten für den Chatbot übernehmen ([Live-Chat](/funktionen/live-chat)), muss die Chatbot-Engine dies koordinieren. Einerseits muss die Engine den Handover von der Maschine an den Menschen und somit die Kommunikation zwischen den Clients zu sicherstellen. Andererseits muss sich die Engine den Zustand des [Live-Chat](/funktionen/live-chat) für jeden Anwender merken, um die Nachrichten korrekt zu verarbeiten.
