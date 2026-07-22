import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  console.log('THIS FUNCTION WAS JUST CALLED');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}
// generateBtn.addEventListener();
// generateRandomQuote();

generateBtn.addEventListener('click', generateRandomQuote);
