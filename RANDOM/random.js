const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Anonymous"
    },
    {
      quote: "Dream it. Wish it. Do it.",
      author: "Unknown"
    }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const currentQuote = quotes[randomIndex];
  
    document.getElementById("quote").textContent = `"${currentQuote.quote}"`;
    document.getElementById("author").textContent = `– ${currentQuote.author}`;
  }
  