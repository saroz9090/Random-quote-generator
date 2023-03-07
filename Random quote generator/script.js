// Get DOM elements
const quoteText = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote");

// Function to generate a random quote from an API
async function generateQuote() {
  // Call the Quotes API to get a random quote
  const response = await fetch("https://api.quotable.io/random");
  const quoteData = await response.json();

  // Update the quote text with the API response
  quoteText.textContent = `${quoteData.content} - ${quoteData.author}`;
}

// Event listener for the new quote button
newQuoteButton.addEventListener("click", generateQuote);

// Generate a quote when the page loads
generateQuote();
