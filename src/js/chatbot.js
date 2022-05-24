const chatWithChatbotElements = document.querySelectorAll(".chat-with-chatbot");
chatWithChatbotElements.forEach((el) =>
  el.addEventListener("click", onChatWithChatbot)
);

function onChatWithChatbot(event) {
  const intent =
    event.target.getAttribute("data-bubble-intent") ||
    "6169c66cf8ed690023903e89"; // Intent: website.contact-chatbot

  if (chatbot?.isChatbotLoaded()) {
    callChatWithChatbot(intent);
  } else {
    setTimeout(() => callChatWithChatbot(intent), 3000);
  }
}

function callChatWithChatbot(intent) {
  chatbot.openChatWindow();

  setTimeout(() => {
    chatbot.triggerStory(intent);
  }, 500);
}
