// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", quoteAndColorChange, false);

// calling the function to refresh the quote automatically every 20 seconds
window.setInterval(quoteAndColorChange, 20000);

// Quotes array
var quotes = [
	{
		tags: "endurance, perseverance, courage",
		text: "So comes snow after fire, and even dragons have their endings.",
		source: "J.R.R. Tolkien",
		citation: "The Hobbit",
		year: "1937"
	},

	{
		tags: "motivation, reality, life, wish",
		text: "Face reality as it is, not as it was or as you wish it to be.",
		source: "Jack Welch"
	},

	{
		tags: "wisdom, intelligence, knowledge, flexibility, competence",
		text: "We cannot change the cards we are dealt, just how we play the hand.",
		source: "Randy Pausch",
		citation: "The Last Lecture",
		year: "2007"
	},

	{
		tags: "inspiration, motivation",
		text: "Dreams are only dreams until you wake up and make them real.",
		source: "Ned Vizzini",
		citation: "It's Kind of a Funny Story",
		year: "2006"
	},

	{
		tags: "adversity, hard-times, inspiration ",
		text: "No matter how bad things are, you can always make things worse.",
		source: "Randy Pausch",
		citation: "The Last Lecture", 
		year: "2007"
	},

	{
		tags: "soul-seeking, confidence",
		text: "Everything you need to know you have learned through your journey.",
		source: "Paulo Coelho",
		citation: "The Alchemist",
		year: "1988"
	}

];

var viewedQuotes = [];

// Create a function name "getRandomQuote" that selects a random quote object from the quotes array and returns the randomly selected quote object

function getRandomQuote () {
	var randomQuote = Math.floor(Math.random() * quotes.length);

	// 	removing the quote that was displayed once from the quote array by using the splice method and store it in a variable 
	var splicedQuote = quotes.splice(randomQuote, 1)[0];

	// push the spliced quote into the viewQuotes array.
	viewedQuotes.push(splicedQuote);

	// Create an "if" statement to check if first array is now empty(all quotes have been used/displayed). If first array is empty, change it back to original state, and set viewQuotes back to an empty array
	if (quotes.length == 0) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	} 

	return splicedQuote;
}

// Create a function name "printQuote" that calls the getRandomQuote function and stores the returned quote object in a variable
// printQuote constructs a string using the different properties of the quote object u

function printQuote () {
	var random;
	var output = '';
	random = getRandomQuote();
	output += '<p class="quote">' + random.text + '</p>';
	output += '<p class="source">' + random.source;

	if (random.citation && random.year) {
		output += '<span class="citation">' + random.citation + '</span>';
		output += '<span class="year">' + random.year + '</span></p>';
	} else if (random.hasOwnProperty('citation')) {
		output += '<span class="citation">' + random.citation + '</span></p>';
	} else if (random.hasOwnProperty('year')) {
		output += '<span class="year">' + random.year + '</span></p>';
	} else {
		output += '</p>';
	}
	output += '<p class="tags">' + random.tags + '</p>';
	
	document.getElementById('quote-box').innerHTML = output;
}

// Change the ßbackground color
function getRandomColor() { 
    var color = ''; 
    var colors = ['#666699','#ff5c33','#ff9933','#','#009999','#cc6699','#336699']; 
    color += colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = color; // Setting the random color on body element.
}

// Change both background color and quote
function quoteAndColorChange () {
	printQuote();
	getRandomColor();
}


