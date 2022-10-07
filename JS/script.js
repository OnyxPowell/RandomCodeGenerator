/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//An array that stores the quotes
var quotes = [
  {
    quote:
      "When you undervalue what you do, the world will undervalue who you are.",
    source: "Oprah Winfrey",
    category: "#influencer",
    date: 2012,
  },
  {
    quote:
      "I think that you always want to gravitate towards people who absolutely are great at what they do and go for authenticity.",
    source: "Viola Davis",
    category: "#influencer",
  },
  {
    quote: "Go for it. The world is waiting for you!",
    source: "Marian Croak",
    category: "#developer",
  },
  {
    quote:
      "Faith is taking the first step even when you don't see the whole staircase.",
    source: "Martin Luther King, Jr.",
    category: "#activist",
  },
  {
    quote:
      "There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time",
    source: "Malcolm X",
    category: "#activist",
  },
];

const colors = [
  "#23e26c",
  "#ff5b5b",
  "#ffb758",
  "#fcff58",
  "#58ffd5",
  "#58d8ff",
  "#ff58e9",
];

let timer;

// This function generates a random number then assigns to variable and returns object from quotes array

function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

// generates a random number, assigns it to a variable, then uses it to return a random object from the colors array
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

// assigns a setInterval method to the variable so that the printQuote function will automatically run after 10 seconds
function startTimer() {
  timer = setInterval(printQuote, 10000);
}

// clears the setInterval method from the timer variable
function clearTimer() {
  clearInterval(timer);
}

function printQuote() {
  // creates the currentQuoute variable and sets the value to the random object that is returned when the getRandomQuote function is called
  // creates the currentColor variable and sets the value to the random object that is returned when the getRandomColor function is called
  // creates the html variable and uses the currentQuote variable along with key values to build a string
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = '<p class="quote">' + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;
  // tests to see if the citation property is present in the currentQuote and if so, adds it to the string
  if ("citation" in currentQuote) {
    html += '<span class="citation">' + currentQuote.citation + "</span>";
  }
  // tests to see if the date property is present in the currentQuote and if so, adds it to the string
  if ("date" in currentQuote) {
    html += '<span class="year"> ' + currentQuote.date + "</span>";
  }
  html += '<span class="category"> ' + currentQuote.category + "</span>";

  // writes the info from the html variable to the div with the quote-box id
  // uses the currentColor variable to change the background color
  // uses the currentColor variable to change the button color
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor;

  // clears any previous timers that might be running and starts a new one
  clearTimer();
  startTimer();
}

// runs the printQuote function upon initial page load
printQuote();

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
