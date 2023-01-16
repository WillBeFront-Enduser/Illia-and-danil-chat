const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const sendButton = document.getElementById("chat-send");

sendButton.addEventListener("click", () => {
  if (!input.value.trim()) {
    return;
  }
  const message = document.createElement("div");
  message.innerHTML = input.value;
  message.classList.add("message");
  messages.appendChild(message);
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});
