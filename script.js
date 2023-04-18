var startButton = document.getElementById("start-button");


var questionElements = document.getElementById('quiz');
var topScores = document.getElementById('btn-scores');
var timeLeft = document.getElementById('timer');


var index = 0;
var questions = [
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 
    {
        question: '1.HTML stands for -',
        choices:['getElementById','getElementsByClassName','Both A and B','none of the above'],
        answer: 'getElementsByClassName'
    }, 

]

startButton.addEventListener("click", function(){
    startQuiz();

});

function startQuiz() {
    console.log("start");
    document.querySelector('.quiz-intro').classList.add('hide');
    questionElements.classList.remove('hide');

    askQuestion()

};  
// if stmt need after btn starts working
function askQuestion() {
    document.getElementById('question-text').textContent = questions[index].question;
    document.getElementById('answer-buttons').innerHTML = ''
    questions[index].choices.forEach(function(choice){
        var button = document.createElement('button')
        button.textContent = choice;
        button.setAttribute('value', choice);
        button.addEventListener("click", function(){
        if(this.value !== questions[index].answer){
            console.log('wrong')
        } else {console.log('right')}
        index++;
        askQuestion();
        });


        document.getElementById('answer-buttons').appendChild(button);
    })

};