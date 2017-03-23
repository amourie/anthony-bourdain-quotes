

var quotes = [];
quotes = initArray();

function initArray(){
  var quotes = [
  {
    quote: "Skills can be taught. Character you either have or you don't have.",
    source: "Anthony Bourdain",
    citation: "The Times",//If there is no known publication, do not include this property on the object.
    year: "2016" //If there is no known date, then do not include this property on the object.
    },
  {
    quote: "Without experimentation, a willingness to ask questions and try new things, we shall surely become static, repetitive, and moribund.",
    source: "Anthony Bourdain",
    citation: "A sign of the Times",//If there is no known publication, do not include this property on the object.
    year: "2015" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "Don't lie about it. You made a mistake. Admit it and move on. Just don't do it again. Ever.",
    source: "Anthony Bourdain",
    citation: "Time Magazine",//If there is no known publication, do not include this property on the object.
    year: "2014" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "Without new ideas success can become stale.",
    source: "Anthony Bourdain",
    citation: "A sign of the Times",//If there is no known publication, do not include this property on the object.

    year: "100AD" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "I'm very type-A, and many things in my life are about control and domination, but eating should be a submissive experience, where you let down your guard and enjoy the ride.",
    source: "Anthony Bourdain",
    citation: "Time Magazine",//If there is no known publication, do not include this property on the object.
    year: "10BC" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "Assume the worst. About everybody. But don't let this poisoned outlook affect your job performance. Let it all roll off your back. Ignore it. Be amused by what you see and suspect. Just because someone you work with is a miserable, treacherous, self-serving, capricious and corrupt asshole shouldn't prevent you from enjoying their company, working with them or finding them entertaining.",
    source: "Anthony Bourdain",
    citation: "The Times",//If there is no known publication, do not include this property on the object.
    year: "2016" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "I'm a big believer in winging it. I'm a big believer that you're never going to find perfect city travel experience or the perfect meal without a constant willingness to experience a bad one. Letting the happy accident happen is what a lot of vacation itineraries miss, I think, and I'm always trying to push people to allow those things to happen rather than stick to some rigid itinerary.",
    source: "Anthony Bourdain",
    citation: "A sign of the Times",//If there is no known publication, do not include this property on the object.
    year: "2015" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "Your body is not a temple, it's an amusement park. Enjoy the ride.",
    citation: "Times India",
    source: "Anthony Bourdain",
    year: "2016"

  },
  {
    quote: "I always entertain the notion that I'm wrong, or that I'll have to revise my opinion. Most of the time that feels good; sometimes it really hurts and is embarrassing.",
    source: "Anthony Bourdain",
    citation: "A sign of the Times",//If there is no known publication, do not include this property on the object.
    year: "100AD" //If there is no known date, then do not include this property on the object.
  },
  {
    quote: "If I'm an advocate for anything, it's to move. As far as you can, as much as you can. Across the ocean, or simply across the river. Walk in someone else's shoes or at least eat their food. It's a plus for everybody.",
    source: "Anthony Bourdain",
    citation: "",//If there is no known publication, do not include this property on the object.
    year: "" //If there is no known date, then do not include this property on the object.
    },
  {
    quote: "I wanted kicks - the kind of melodramatic thrills and chills I'd yearned for since childhood, the kind of adventure I'd found as a little boy in the pages of my Tintin comic books.",
    source: "Anthony Bourdain",
    citation: "",//If there is no known publication, do not include this property on the object.
    year: "" //If there is no known date, then do not include this property on the object.
  }
  ];//end of quotes objArray

  return quotes;
}//end function initArray

printQuote();
document.getElementById('loadQuoteButton').addEventListener("click", printQuote, false);

function printQuote() {
  //printQuote calls the getRandomQuote function and stores the returned quote object in a variable
  var currentQuoteObj = randomQuote();
  console.log("quote is: " + currentQuoteObj.quote);
  console.log("citation: is " + currentQuoteObj.citation);
  console.log("year is: " + currentQuoteObj.year);
  $('#quote-box p.quoteCopy').text(currentQuoteObj.quote);
  $('#quote-box p.quoteSource').text(" - " + currentQuoteObj.source);
}//end function printQuote

/*randomQuote Function generates a random number to select a valid array slot from the quotes [] array. It returns the selected quote object in the quotes [] array.
It removes the used / returned item from the quotes array and adjusts the random number range. Resets the array by calling init Array if the quotes []  array is empty*/
function randomQuote()
{
  var arrLength = quotes.length - 1;
  var selectedQuoteObj = "";
  var randomNumber = Math.floor((Math.random() * arrLength));
  var prevRandomNumber = randomNumber;
  console.log("randomNumber: " + randomNumber);
  selectedQuoteObj = quotes[randomNumber];
  console.log(selectedQuoteObj);//logs selected Object
  if (arrLength > 0) {
    console.log("arrLength: " + arrLength);
    quotes.splice(randomNumber, 1);
    arrLength--;
  }
  else {
        quotes = initArray();
  }
  return selectedQuoteObj;
}//end function randomQuote
$('#quoteSubmissionForm').submit(function () {
 formThanks();
 return false;
});

function formThanks() {

 $( "#quoteSubmissionForm" ).fadeOut( "slow", function() {
    // Animation complete.
  });
 //$("#quoteSubmissionForm").css("visibility","hidden");
 $("#successMessage").text("Thank you for your quote submission! We'll review and get back to you as soon as we can.").fadeIn("slow", function() {});
}
//print copyright date in footer
$('#footer-date').text("Copyright " + new Date().getFullYear());
