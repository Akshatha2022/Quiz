var startButton = document.getElementById("start-button");


var questionElements = document.getElementById('quiz');
var topScores = document.getElementById('btn-scores');
var timeLeft = document.getElementById('timer');
var seconds = 60;
var highScore = 0;

var index = 0;
var questions = [
    {
        question: '1.HTML stands for -',
        choices:['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','none of the above'],
        answer: 'HyperText Markup Language'
    }, 
    {
        question: '2.Which of the following element is responsible for making the text bold in HTML?',
        choices:['<pre>','<a>','<b>','<br>'],
        answer: '<b>'
    }, 
    {
        question: '3.Which character is used to represent the closing of a tag in HTML?',
        choices:['@','!','/','.'],
        answer: '/'
    }, 
    {
        question: '4. How to insert an image in HTML?',
        choices:['<img href = "jtp.png" />','<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],
        answer: '<img src = "jtp.png" />'
    }, 
    {
        question: '5. <input> is -',
        choices:['a format tag','an empty tag.','Both A and B','none of the above'],
        answer: 'an empty tag'
    }, 
    {
        question: '6. The <hr> tag in HTML is used for -',
        choices:['new line','vertical ruler','new paragraph','horizontal ruler'],
        answer: 'horizontal ruler'
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