const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const sendButton = document.getElementById("chat-send");

loginButton.addEventListener("click", handleLogin);
signupButton.addEventListener("click", handleSignup);
sendButton.addEventListener("click", handleSend);

function handleLogin() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  // logic for logging in
  // for example: check if the username and password match with the data in the database
  // if it matches, then show the chat container and hide the login container
  chatContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
}

function handleSignup() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  // logic for signing up
  // for example: add the new username and password to the database
  // then show the chat container and hide the login container
  chatContainer.classList.remove("hidden");
  loginContainer.classList.add("hidden");
}

function handleSend() {
  if (!input.value.trim()) {
    return;
  }
  const message = document.createElement("div");
  message.classList.add("message");

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.innerHTML = input.value;

  const messageTimestamp = document.createElement("div");
  messageTimestamp.classList.add("message-timestamp");
  messageTimestamp.innerHTML = new Date().toLocaleString();

  const messageDelete = document.createElement("div");
  messageDelete.classList.add("message-delete");
  messageDelete.innerHTML = "Delete";
  messageDelete.addEventListener("click", () => {
    messages.removeChild(message);
  });

  message.appendChild(messageText);
  message.appendChild(messageTimestamp);
  message.appendChild(messageDelete);

  messages.appendChild(message);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}