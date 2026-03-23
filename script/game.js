var count = 0;

var questions = [
    ["What color is a banana?", 0, "Yellow", "Blue", "Red"],
    ["What color is the sky?", 1, "Green", "Blue", "Orange"],
    ["What color is a stop sign?", 2, "Yellow", "Green", "Red"]
];

//load game button
function init() {
    document.getElementById("prompt").innerHTML =
        "<button onclick='playGame()'>Play Game</button>";
}

//game function
function playGame() {

    
    var q = questions.shift();   
    var correctIndex = q[1];     
    q.splice(1, 1);              



    // Display question
    document.getElementById("question").innerHTML = q[0];

    //answer list
    var answerList = "<ul>";
    for (var i = 1; i < q.length; i++) {
        answerList +=
            "<li><a href='#' onclick='checkAnswer(" + (i - 1) + ", " + correctIndex + ")'>" +
            q[i] +
            "</a></li>";
    }
    answerList += "</ul>";

    document.getElementById("answers").innerHTML = answerList;


    document.getElementById("prompt").innerHTML = "Choose the best answer.";

    count++;
}

//check answer
function checkAnswer(chosenIndex, correctIndex) {

    if (chosenIndex === correctIndex) {
        document.getElementById("question").innerHTML = "Correct!";
    } else {
        document.getElementById("question").innerHTML = "Incorrect!";
    }

    //restart
    if (count >= 3) {
        document.getElementById("prompt").innerHTML =
            "<button onclick='location.reload()'>Restart Game</button>";
        document.getElementById("answers").innerHTML = "";
    } else {
        document.getElementById("prompt").innerHTML =
            "<button onclick='playGame()'>Next Question</button>";
        document.getElementById("answers").innerHTML = "";
    }
}
//load game button
window.onload = init;