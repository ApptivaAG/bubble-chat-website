---
layout: feature
title: WhatsApp
excerpt: WhatsApp ist in der Schweiz mit einer Verbreitung von 83 % die meistgenutzte Messaging-App. Dieser Kanal eignet sich bestens, um mit Ihren Kunden in Kontakt zu bleiben.
order: 2
image: /img/funktionen/whatsapp-card.png
tags:
  - Channels
---

Dank Bubble Chat können Sie Ihren Chatbot sehr einfach in WhatsApp integrieren. Pro Sprache, die Ihr Chatbot unterstützt, stellen wir Ihnen eine Telefonnummer zur Verfügung. Ihre Kunden können Anfragen an diese Nummern schicken, so als ob sie mit Freunden chatten würden. Die Anfragen werden durch den Chatbot automatisiert beantwortet und bei Bedarf an den Kundendienst weitergeleitet für einen Live-Chat.

## Einstiegspunkte

Bei WhatsApp gibt es grundsätzlich zwei Möglichkeiten, wie ein Chat gestartet werden kann.

### Durch den Kunden gestartet

Ein Kunde kann einen WhatsApp Chat mit Ihnen starten, indem er Ihre Telefonnummer bei seinem WhatsApp Client eingibt. Dies ist identisch, wie wenn er einen Chat mit einer anderen Person starten würde.

Damit der Kunde Ihre Telefonnummer nicht eintippen muss, können Sie z.B. auf Ihrer Webseite einen speziellen WhatsApp-Link anbieten. Dieser Link enthält dabei Ihre Telefonnummer und optional eine vorgefertigte Nachricht, die automatisch im Textfeld des Chats angezeigt wird.

Beispiel:

[![WhatsApp](/img/WhatsAppButtonGreenSmall.png)](https://wa.me/41766011561?text=Ich%20möchte%20einen%20Demo-Account%20beantragen){target="_blank", style="height:30px"}

[https://wa.me/41766011561?text=Ich%20möchte%20einen%20Demo-Account%20beantragen](https://wa.me/41766011561?text=Ich%20möchte%20einen%20Demo-Account%20beantragen){target="_blank"}


### Durch den Chatbot gestartet

Wenn Sie im Besitz der Handy-Nummer Ihres Kunden sind, können Sie eine Konversation starten. In diesem Fall können Sie aber nicht irgendeine beliebige Nachricht senden, sondern müssen dazu eine für Sie von Meta freigegebene Vorlage nutzen (siehe unten). 

Bubble Chat bietet die Möglichkeit, dass Sie über eine geschützte Schnittstelle (REST-API) einen WhatsApp Chat starten können. Antworten des Kunden werden danach automatisch durch den Chatbot verarbeitet und nötigenfalls an den Kundendienst weitergeleitet.

## Arten von Nachrichten

Folgende Arten von Nachrichten werden von Bubble Chat im Zusammenspiel mit WhatsApp unterstützt:

- Text mit einfachen Formatierungen für Fett und Kursiv
- Bilder
- Dokumente
- Templates

### Nachrichtenvorlage (Templates)

Bei WhatsApp können Sie nur innerhalb von 24 Stunden auf eine erhaltene Anfrage antworten. Falls Nachrichten nach diesem 24-Stunden-Fenster verschickt werden sollen - z.B. für ein Status-Update - muss die Konversation mit einer Nachrichtenvorlage (Template) begonnen werden.

Nachrichtenvorlagen müssen bei Meta zur Review eingereicht und von ihnen genehmigt werden. Wir übernehmen die Verwaltung und die Begleitung des Review-Prozesses von Nachrichtenvorlagen für Sie. In Bubble Chat definieren Sie einfach, in welchen Situationen Sie welche Vorlage verwenden möchten.

Beispiele von Nachrichtenvorlagen:

- **Kundendienstmitarbeiter kann erst nach 24 Stunden auf eine Anfrage antworten (z.B. nach dem Wochenende)**
  _"Es tut mir leid, dass ich mich erst jetzt bei Ihnen melden kann. Wenn Ihr Anliegen noch immer offen ist, antworten Sie bitte mit 'ja'."_
  Dadurch, dass der Kunde auf diese Frage reagiert, öffnet sich das 24-Stunden-Fenster wieder und der Kundendienstmitarbeiter kann durch beliebige Freitexteingaben die Konversation weiterführen.
- **Kunde über den Versand einer Bestellung informieren**
  _"Ihre Bestellung hat das Lager verlassen und wird voraussichtlich {Liefertermin} bei Ihnen eintreffen. Über den nachfolgenden Link können Sie die Lieferung der Sendung verfolgen: {Link} Sollten Sie weitere Fragen haben, kontaktieren Sie uns bitte."_
- **Absprung Telefonielösung**
  Sie können in der Warteschleife Ihrer Telefonielösung einen Absprung nach WhatsApp anbieten. So können Sie Ihr Callcenter entlasten und Ihren Kunden mit Hilfe des Chatbots schneller helfen.
  _"Herzlich willkommen beim Chat der Muster AG. Es freut uns, dass Sie via WhatsApp mit uns kommunizieren wollen. Bitte stellen Sie uns Ihr Anliegen."_
  Da die Konversation von Ihnen gestartet wird, müssen Sie dazu eine Nachrichtenvorlage nutzen. Erst wenn der Kunde antwortet, können Sie innerhalb von 24 Stunden mit Freitext antworten.

## Übergabe vom Chatbot an den Kundendienstmitarbeiter

Sie können in Bubble Chat konfigurieren, wann Sie dem Nutzer die Möglichkeit einer Übergabe zum Kundendienst anbieten wollen (z.B. wenn der Chatbot eine Anfrage nicht versteht). Sobald diese erfolgt ist, erscheint die entsprechende Konversation in Bubble Chat im Bereich Contact Center (LINK) und kann dort von Ihren Kundendienstmitarbeitern bearbeitet werden.

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

## Darum ist WhatsApp so beliebt

WhatsApp ist in der Schweiz mit einer Verbreitung von 83 % die meistgenutzte Messaging-App und profitiert stark vom sogenannten Netzwerkeffekt. Potenzielle Neunutzer werden animiert WhatsApp zu nutzen, weil sie darüber die meisten ihrer Kontakte erreichen können. 

Eine [Studie der Bundesnetzagentur](https://www.messengerpeople.com/de/studie-messenger-nutzung-2020-deutschland/#Beruflich){target="_blank"} nennt zwei Hauptpunkte für die Beliebtheit von WhatsApp:

- Ich kann via WhatsApp einen Grossteil meiner Kommunikationspartner erreichen.
- WhatsApp ist für mich besonders einfach und intuitiv zu bedienen.

## Partnerschaft mit F24 Schweiz AG

Eine persönliche Kundenbetreuung und ein hohes Mass an Sensibilität im Umgang mit schützenswerten Daten sind für uns wichtige Bestandteile unserer täglichen Arbeit. Wir sind froh, dass wir mit [F24 Schweiz AG](https://f24.com/de/f24-schweiz-ag/){target="_blank"} einen Partner gefunden haben, der unsere Werte teilt und uns im Bereich WhatsApp Integration unterstützt. F24 ist Europas führender Software-as-a-Service (SaaS)-Anbieter für Ereignis- und Krisenmanagement, Notfallbenachrichtigung sowie für Business Messaging. 
