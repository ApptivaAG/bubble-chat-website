const chatWithChatbotElements = document.querySelectorAll(".chat-with-chatbot");
chatWithChatbotElements.forEach((el) =>
  el.addEventListener("click", onChatWithChatbot)
);

function onChatWithChatbot() {
  if (chatbot?.isChatbotLoaded()) {
    callChatWithChatbot();
  } else {
    setTimeout(callChatWithChatbot, 3000);
  }
}

function callChatWithChatbot() {
  chatbot.openChatWindow();

  setTimeout(() => {
    chatbot.triggerStory("6169c66cf8ed690023903e89"); // Intent: website.contact-chatbot
  }, 500);
}
