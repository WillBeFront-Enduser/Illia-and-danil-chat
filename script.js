// Get the input and messages elements
const input = document.getElementById('chat-input');
const messages = document.getElementById('chat-messages');

// Add the send message event listener
document.getElementById('chat-send').addEventListener('click', () => {
  // Create a new message element
  const message = document.createElement('div');
  message.innerText = input.value;
  message.classList.add("message");

  // Add the message to the messages container
  messages.appendChild(message);

  // Clear the input field
  input.value = '';

  // Scroll to the bottom of the messages container
  messages.scrollTop = messages.scrollHeight;
});
