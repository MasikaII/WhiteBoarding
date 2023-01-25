// importing icons from assets
import bot from './assets/bot.svg';
import user from './assets/user.svg';

// targeting our html elements
const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

// function that loads our messages
function loader(element) {
  element.textContent = '';

  loadInterval = setInterval(() => {
    element.textContent += '.';

    if (element.textContent === '...') {
      element.textContent = '';
    }
  }, 300)
}

// function that implement typing functionality
function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index); // gets the character under a specific index in the txt AI returns
      index++;
    }
    else { // if we've reached the end of the text
      clearInterval(interval);
    }
  }, 20)
}

// function that generates a unique id for every message to be able to map over them
function generateUniqueId() {
  // creating unique id using current date and time and a random number
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

// function that implements chat stripe
function chatStripe(isAI, value, uniqueId) {
  return (
    `
    <div class="wrapper ${isAI && 'AI'}">
      <div class="chat">
        <div className="profile">
          <img
            src="${isAI ? bot : user}"
            alt="${isAI ? 'bot' : 'user'}"
          />
        </div>
        <div class="message" id=${uniqueId}>${value}</div>
      </div>
    </div>
    `
  )
}

// function that acts as trigger to obtain the AI generated response