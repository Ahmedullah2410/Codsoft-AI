const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


const rules = {
  "hello": "Hi there! How can I assist you?",
  "hi": "Hello! Hope you're having a great day!",
  "how are you": "I'm just a bot, but I'm functioning as expected. How about you?",
  "bye": "Goodbye! Have a great day!",
  "help": "Sure! Let me know what you need help with.",
  "what is your name": "I'm your creation. What's your name?",
  "my name is ahmedullah": "Nice to meet you, Ahmedullah! How can I assist you today?",
  "time": `The current time is ${new Date().toLocaleTimeString()}.`,
  "date": `Today's date is ${new Date().toLocaleDateString()}.`,
  "what is your hobby": "I enjoy chatting with people and helping them out! What's your hobby?",
  "what can you do": "I can answer your questions, chat with you, and keep you company!",
  "thanks": "You're welcome! Let me know if there's anything else I can do for you.",
  "thank you": "Happy to help! Let me know if you have more questions.",
  "good morning": "Good morning! I hope you have a fantastic day ahead.",
  "good night": "Good night! Sleep well and take care.",
  "who made you": "I was created by a talented developer to assist you!",
  "tell me a joke": "Why don't programmers like nature? It has too many bugs!",
  "how old are you": "I was created recently, so I'm pretty young!",
  "where are you from": "I exist in the virtual world, so I'm from everywhere!",
  "what is love": "Love is a beautiful feeling of care, affection, and connection!",
  "how can i contact you": "You can always type here, and I'll respond instantly!",
  "what is the weather": "I can't check the weather right now, but try using a weather app!",
  "who is your creator": "I was created by an college student",
  "it is funny":"Ha, The joke is yours!"
};

function handleChat() {
  const userMessage = userInput.value.trim().toLowerCase();

  if (userMessage) {

    addMessage(userMessage, 'user');

    const botResponse = rules[userMessage] || "I'm sorry, I didn't understand that. Can you rephrase?";

    addMessage(botResponse, 'bot');

    userInput.value = '';
  }
}

function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}`;
  messageElement.textContent = message;
  chatOutput.appendChild(messageElement);
  chatOutput.scrollTop = chatOutput.scrollHeight; 
}

sendBtn.addEventListener('click', handleChat);
userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    handleChat();
  }
});
