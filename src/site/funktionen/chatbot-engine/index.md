---
layout: feature
title: Chatbot Engine
excerpt: Die Chatbot Engine ist das Herzstück jedes Chatbots. Sie empfängt, verarbeitet und sendet Nachrichten an die jeweiligen Chat Clients.
order: 1
masterTag: Chatbot Engine
tags:
  - MasterTag
---

# Chatbot Engine

Die Chatbot-Engine ist das Herzstück eines Chatbots. Die Chatbot-Engine hat folgende Aufgaben:

- **Nachrichten senden und empfangen**<br>Die Engine empfängt von und schickt Nachrichten an den Chat Client. Eine gute Engine ist dabei in der Lage, mit unterschiedlichen Clients (gleichzeitig) zu kommunizieren.

- **Nachrichten verarbeiten**<br>In der Engine wird entschieden, was mit einer Nachricht geschehen soll und wie auf die Nachricht geantwortet werden soll. Dafür wird eine Engine häufig auch andere Komponenten anfragen, wie z.B. eine Sprachverarbeitung. TODO: Schnittstellen zu anderen Systemen (z.B. CRM)

- **Sitzungen verwalten**<br>Die Engine muss schauen, dass die richtigen Anwender die richtigen Antworten erhalten oder die gewünschten Aktionen ausgeführt werden. Teilweise muss die Engine auch die Anwender identifizieren, um korrekt zu reagieren oder ev. gewisse Aktionen gar nicht zu erlauben.

- **Kontext merken**<br>Ein guter Chatbot antwortet je nach Kontext nicht immer gleich. Wenn der Chatbot im Verlauf des Gesprächs beispielsweise bereits einmal erfahren hat, dass der Anwender an der Informatiker-Lehre interessiert ist, so kann er bei der späteren Frage "Was sind die Anforderungen?" gleich vom Kontext Informatiker-Lehre ausgehen und entsprechend antworten. Teilweise werden solche Aufgaben auch von einer NLP-Komponenten übernommen (siehe unten).

- **Live-Chat vermitteln**<br>Soll eine Person das Antworten für den Chatbot übernehmen (Live-Chat), so muss die Chatbot-Engine dies koordinieren. Einerseits muss die Engine das Handover (Übergabe) von der Maschine an den Menschen und somit die Kommunikation zwischen den Clients zu sicherstellen. Andererseits muss sich die Engine den Zustand des Live-Chats für jeden Anwender merken, um die Nachrichten korrekt zu verarbeiten.
