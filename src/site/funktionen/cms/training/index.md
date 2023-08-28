---
layout: feature
title: Training
excerpt: 'Kontinuierliches Training des Chatbots ist sehr wichtig. Denn auch hier gilt: Übung macht den Meister. Bubble Chat bietet dafür praktische Unterstützung an.'
image: /img/funktionen/cms-training-card.png
order: 1
redirectFrom: /funktionen/cms-training/
eleventyNavigation:
  key: Training
  parent: Content Management
tags:
  - CMS
contactPerson: Markus Tanner
---

Bubble Chat setzt Künstliche Intelligenz (KI) und maschinelles Lernen ein, damit Ihr Chatbot ständig besser wird. Im Bubble Chat CMS haben Sie die volle Kontrolle darüber, was Ihr Chatbot lernen soll. Dadurch können Sie sicherstellen, dass sich der Chatbot stets so wie von Ihnen erwartet verhält.

Kontinuierliches Training des Chatbots ist sehr wichtig. Denn auch hier gilt: Übung macht den Meister. Bubble Chat bietet dafür praktische Unterstützung an. Sie können das Training Ihres Chatbots im CMS unter dem Menüpunkt “Training” durchführen. Dabei stehen Ihnen die folgenden Optionen zur Verfügung.

### Nicht verstandene Benutzeräusserungen

Im Untermenü “Keine Absicht” können Sie sehen, welche Benutzereingaben Ihr Chatbot nicht verstanden hat, sprich keine passende Absicht dahinter erkennen konnte. Wählen Sie nun eine oder mehrere Benutzeräusserungen aus, welche dieselbe Absicht beinhalten. Auf der rechten Seite sehen Sie eine Liste aller Absichten, die Ihr Chatbot behandeln kann. Weisen Sie den selektierten Benutzeräusserungen ganz einfach der korrekten Absicht zu.

<br>
{% browserScreenshot "/site/funktionen/cms/training/nicht-verstandene-benutzeraeusserungen.png", "Nicht verstandene Benutzeräusserungen", {"class":"image image--expandable"} %}
<br>

#### Äusserungen für später merken

Wenn es Benutzeräusserungen gibt, zu denen es noch keine passenden Absichten existieren, können Sie diese sammeln und zu einem späteren Zeitpunkt verarbeiten. Dazu weisen Sie einfach der Benutzeräusserung einen thematisch passenden Bereich zu. Dies können Sie entweder über das Symbol <img src="appstore.svg" alt="Symbol fürs Zuweisen von Äusserungen zu Bereichen" style="height:1rem; vertical-align: baseline;"/> oder über das Menü neben dem Suchfeld machen.

In der Liste der nicht verstandenen Benutzeräusserungen werden standardmässig nur jene Äusserungen angezeigt, die keinem Bereich zugewiesen sind. Nutzen Sie den Filter, um auch die anderen Äusserungen anzuzeigen.

#### Äusserungen ignorieren

Manchmal werden auch Eingaben durch die Benutzer gemacht, die nicht durch Ihren Chatbot behandelt werden sollen. Diese können Sie ganz einfach löschen und somit ignorieren.

### Gemeldete Probleme

Bubble Chat stellt Ihnen zusätzlich zum produktiven Chatbot einen Chatbot zum Testen zur Verfügung. Diesen können Sie im CMS jeweils unten rechts über das Chatbot-Symbol aufrufen. In diesem Chat-Fenster haben Sie die Möglichkeit, fehlerhafte Aussagen fürs weitere Training zu markieren. Die markierten Aussagen erscheinen danach im Training im Untermenü “Probleme”.

<br>
{% browserScreenshot "/site/funktionen/cms/training/gemeldete-probleme.png", "Gemeldete Probleme", {"class":"image image--expandable"} %}
<br>

Wählen Sie eine fehlerhafte Aussage aus und bestimmen Sie anschliessend, ob Sie diese anpassen wollen (z.B. bei für die Korrektur eines Schreibfehlers), oder ob der Chatbot eine andere Antwort hätte geben sollen.

### Szenario-basiertes Testing

Unter dem Menüpunkt “Testing” können Sie das Szenario-basierte Testing aufrufen. Dieses ermöglicht das Testen verschiedener Dialog-Szenarien, die ein Benutzer mit Ihrem Chatbot erleben kann. Dabei werden verschiedene mögliche Benutzereingaben simuliert, um zu sehen, ob der Chatbot die richtigen Antworten und Aktionen ausführt. Zum Beispiel kann mit Szenarien getestet werden, wie der Chatbot auf verschiedene Fragen antwortet, wie er auf bestimmte Befehle reagiert und wie er mit unerwarteten oder unerwünschten Eingaben umgeht.

Der Bubble Chat Assistent kann anhand eines Szenarios unterschiedliche Benutzereingaben generieren. Sie können diese dann Ihrem Chatbot zur Simulation einspielen und beobachten, wie er darauf reagiert.

<br>
{% browserScreenshot "/site/funktionen/cms/training/szenario-basiertes-testing.png", "Szenario-basiertes Testing", {"class":"image image--expandable"} %}
<br>

Eingaben, die der Chatbot nicht versteht, werden gesammelt und stehen fürs weitere Training zur Verfügung. Falsche oder fehlerhafte Texte des Chatbots können so markiert werden, dass diese im Anschluss ans Testing angepasst werden können.
