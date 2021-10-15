document
  .getElementById("chat-with-chatbot")
  ?.addEventListener("click", onChatWithChatbot);

function onChatWithChatbot() {
  chatbot.openChatWindow();

  setTimeout(() => {
    chatbot.triggerStory("6169c66cf8ed690023903e89"); // website.contact-chatbot
  }, 500);
}
