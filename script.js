var startButton = document.getElementById("start-button");


var questionElements = document.getElementById('question-container');
var topScores = document.getElementById('btn-scores');
var timeLeft = document.getElementById('timer');

startButton.addEventListener("click", function(){
    startQuiz();

});

function startQuiz() {
    console.log("start");
    questionElements.addEventListener('click', function() {
    })
};