---
layout: feature
title: Google Business Messages
excerpt: Business Messages von Google ermöglicht es Android-Nutzern, Ihr Unternehmen über verschiedene Google-Produkte (z.B. Google Maps und Search) zu kontaktieren.
order: 3
image: /img/funktionen/google-card.png
eleventyNavigation:
  key: Google Business Messages
  parent: Chat Channels
tags:
  - Channels
contactPerson: Linus Hüsler
---

Mit Business Messages können Sie Chat-Schaltflächen in den Google-Suchergebnissen sowie auf Google Maps platzieren. Wenn ein Nutzer auf eine Chat-Schaltfläche klickt, beginnt er eine Konversation mit Ihrem Chatbot.

## Einstiegspunkte

Einstiegspunkte sind Oberflächen, über die Nutzer Unterhaltungen mit Google Business Messages starten können. Jeder Einstiegspunkt hat eine individuelle Darstellung und wird an einer anderen Stelle angezeigt.

### Google Suche

Innerhalb der Google Suche gibt es verschiedene Einstiegspunkte, bei denen die Chat-Schaltfläche angezeigt werden kann. Die beiden wichtigsten Punkte sind Sitelinks und Google Ads. Sobald Sitelinks in der Suche angezeigt wird, erscheint automatisch eine Chat-Schaltfläche. Bei Ads können Sie die Chat-Schaltfläche über Google Ads verwalten.

{% image "/site/funktionen/channels/google-business-messages/google-search-sitelinks.jpg", "Integration in Google Suche", {class:'max-width-9'} %}

Diese Funktion steht allen Android Nutzer zur Verfügung.

### Telefon-App von Google

Wählt ein Nutzer in der Telefon-App von Google die Telefonnummer Ihres Unternehmens, so können Sie ihm als Alternative zum Telefonanruf einen Chat anbieten. So können Sie Ihren Kunden auch ausserhalb der Öffnungszeiten helfen und gleichzeitig Ihren Kundendienst entlasten.

### Standortbasierte Einstiegspunkte

Es gibt Einstiegspunkte, die auf Standorten basieren. So wird zum Beispiel die Chat-Schaltfläche zu Ihrem Chatbot angezeigt, wenn jemand in Google Maps Ihren Standort anschaut, oder wenn ein Nutzer den Standort in der Google Suche findet.

{% image "/site/funktionen/channels/google-business-messages/google-maps.jpg", "Integration in Google Maps", {class:'max-width-9'} %}

Sie können mehrere Standorte mit Ihrem Chatbot verbinden. Der Chatbot ist in der Lage, je nach Standort von welchem er aufgerufen wurde, unterschiedlich zu reagieren.

## Arten von Nachrichten

Nachrichten können unterschiedliche Inhaltstypen enthalten. Folgende werden von Bubble Chat im Zusammenspiel mit Google Business Messages unterstützt:

- Text
- Rich Text mit Markdown-Formatierung
- Antwortvorschläge (Quick Replies)
- Karten mit Bild, Überschrift, Text und Links

<div class="cta">
  <div class="cta-content">
    <div class="cta-title">Für Interaktionen mit Firmen nutzen Kunden Messaging-Apps</div>
    <div class="cta-body">
      <p>Jüngere Generationen bevorzugen die Interaktion mit einer Firma über digitale Kanäle (56%) im Vergleich zu traditionellen Kanälen (43%).</p>
      <p>Sie haben ein grösseres Interesse daran, sich über Messaging-Apps mit Firmen auszutauschen. Bereits 50% haben einen Kanal wie WhatsApp oder SMS dafür benutzt.</p>
    </div>
    <a class="button button-action" href="https://www.verint.com/resources/the-2022-state-of-digital-customer-experience-report/" target="_blank">Verint Research Report 2022</a>
  </div>
  <img class="cta-image" src="/img/funktionen/channels-card.png" alt="Chat-Kanäle"/>
</div>

## Übergabe vom Chatbot an den Kundendienstmitarbeiter

Bei Google Business Messages ist es vorgesehen, dass eine Konversation mit einem Chatbot an einen Kundendienstmitarbeiter übergeben werden kann. Sie können in Bubble Chat konfigurieren, wann Sie dem Nutzer diese Möglichkeit einer Übergabe zum Kundendienst anbieten wollen (z.B. wenn der Chatbot eine Anfrage nicht versteht). Darüber hinaus hat der Nutzer jedoch jederzeit auch die Möglichkeit, eine Übergabe vom Chatbot zum Kundendienstmitarbeiter zu forcieren. Dies kann er über einen Menüpunkt innerhalb des Google Business Messengers machen.

Sobald eine Übergabe vom Chatbot an den Kundendienst erfolgt ist, erscheint die entsprechende Konversation in Bubble Chat im Bereich [Contact Center](/funktionen/live-chat) und kann dort von Ihren Kundendienstmitarbeitern bearbeitet werden.

Damit ein Nutzer weiss, mit wem er nun genau am Chatten ist, werden ihm folgende Informationen in der Unterhaltung angezeigt:

- Wer ist der Absender einer Nachricht (Name des Chatbots oder Name des Kundendienstmitarbeiters)
- Information, dass ein Kundendienstmitarbeiter der Unterhaltung beigetreten ist
- Information, dass der Kundendienstmitarbeiter die Unterhaltung verlassen hat und der Chatbot jetzt wieder antworten wird

## Umfragen zur Nutzerzufriedenheit

Um zu überprüfen, ob das Chat-Erlebnis für die Nutzer zufriedenstellend war, versendet Google nach dem Ende des Chats eine Umfrage.

Der Zeitpunkt für die von Google ausgelösten Umfragen hängt davon ab, ob der Chatbot bei Bedarf durch einen Kundendienstmitarbeiter unterstützt wird oder nicht.

- Nur Chatbot: 30 Minuten nach der letzten Nachricht
- Chatbot mit Live-Chat: 12 Stunden nach der letzten Nachricht

Die Resultate der Umfrage werden im Bubble Chat CMS sowohl auf der jeweiligen Konversation als auch im [Analytics-Bereich](/funktionen/analytics) angezeigt.
