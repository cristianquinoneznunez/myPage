// set up question and matching answer arrays
var quest = ["What color is a banana?",
                 "What color is the sky?", 
                 "What color is a stop sign?"];
var answer = ["yellow",
                 "blue", 
                 "red"];

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function Quiz() {
  // initialize points
  var points = 0;
  totalPoints = 9;
  //use a for loop to loop through each math question
  for (i = 0; i < quest.length; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt(quest[i]);
      // see if the answer matches the answer array
      if (ans.toLowerCase() == answer[i].toLowerCase()) {
        // if correct, add 1 to points, alert user and set attempts to 0
        points = points + attempts;
        alert("Correct!");
        attempts = 0;
      } else {
        // if answer doesn't match, alert user and subtract 1 from attempts
        alert("Incorrect");
        attempts = attempts - 1;
      } // end if
    } // end while
  } // end for
  // return the points variable
  var percentage = ((points / totalPoints) * 100).toFixed(2);
  alert("Your score is " + points + " out of " + totalPoints + " (" + percentage + "%)");
  document.write("Your score is " + points + " out of " + totalPoints + " (" + percentage + "%)");
  return points;
} // end mathQuiz function
function displayDate() {
  var monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date();
  var month = monthsArray[date.getMonth()];
  // var date = new Date();
  // var month = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  var hour = date.getHours();
  var ampm = hour >= 12 ? "pm" : "am"; 
  hour = hour % 12; 
  if (hour === 0) hour = 12;
  var minute = date.getMinutes().toString().padStart(2, '0');
  alert("The current date and time is: " + month + " " + day + ", " + year + ". It's " + hour + ":" + minute + " " + ampm);
}
function greeting() {
  var date = new Date();
  var time = date.getHours();
  var name = prompt("What is your name?");
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); 
  
  switch (true) {
    case (time < 12):
      alert("Good morning, " + name + "!");
      break;
    case (time < 18):
      alert("Good afternoon, " + name + "!");
      break;
    default:
      alert("Good evening, " + name + "!");
  }
}
function emailValidation() {
  var email = prompt("Please enter your email address:");
  var emailPattern = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;

  if (emailPattern.test(email)) {
    alert("Email is valid!");
  } else {
    alert("Email is invalid!");
  }
  var emailParts = email.split("@");
  var username = emailParts[0];
  var domain = emailParts[1];
  alert("Username: " + username + "\nDomain: " + domain);
}
function quoteOfTheDay() {
  var quotes = [
      "I love deadlines. I love the whooshing noise they make as they go by. -Douglas Adams",
		  "Instant gratification takes too long. -Carrie Fisher",
		  "If I'm not back in five minutes, just wait longer. -Ace Ventura",
		  "I'm gonna come at you like a spider monkey. — Talladega Nights",
		  "Life is like a box of chocolates. — Forrest Gump"
		  ]
      var quoteIndex = Math.floor(Math.random() * 5);
      alert("Quote of the day: " + quotes[quoteIndex]);
    }