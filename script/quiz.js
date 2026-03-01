// set up question and matching answer arrays
var quest = ['What color is a banana?',
                 'What color is the sky?', 
                 'what color is a stop sign?'];
var ans = ['yellow',
                 'blue', 
                 'red'];

// math quiz function displays math questions and gives the user 2 attempts to get it right - then returns a score
function Quiz() {
  // initialize points
  var points = 0;
  //use a for loop to loop through each math question
  for (i = 0; i <= 3; i++) {
    //set attempts to 3
    var attempts = 3;
    // use a while loop to give the user 3 attempts to answer
    while (attempts > 0) {
      // prompt user with math question
      ans = prompt("What is " + quest[i]);
      // see if the answer matches the answer array
      if (ans == ans[i]) {
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
  return points;
} // end mathQuiz function