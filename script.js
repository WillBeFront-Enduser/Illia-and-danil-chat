const input = document.getElementById('chat-input');
const messages = document.getElementById('chat-messages');

document.getElementById('chat-send').addEventListener('click', () => {
  const message = document.createElement('div');
  message.innerText = input.value;
  message.classList.add("message");

  messages.appendChild(message);

  input.value = '';

  messages.scrollTop = messages.scrollHeight;
});
