
const questions = [
  {
    numb: 1,
    question: 'What is the HTML tag under which one can write the JavaScript code?',
    answer: 'Script',
    options: ['Javascript', 'Scripted', 'Script', 'JS'],
    console,
  },
  {
    numb: 2,
    question: 'The external Javascript file must contatin a <script> tag. True or false?',
    answer: 'True',
    options: ['True', 'False'],
  },
  {
    numb: 3,
    question: 'Which of the following type of variable is visible everywhere in your JavaScript code?',
    answer: 'global variable',
    options: ['global variabl', 'local variable', 'both of the above', 'None of the above'],
  },
  {
    numb: 4,
    question: 'Which built-in method returns the length of the string?',
    answer: 'length()',
    options: ['lengh()', 'size()', 'index', 'None of the above'],
  },
  {
    numb: 5,
    question: 'What JavaScript keyword declares a variable?',
    answer: 'var',
    options: ['var', 'if', 'for', 'create'],
  },
  {
    numb: 6,
    question: '______ JavaScript is also called client-side JavaScript.',
    answer: 'Navigator',
    options: ['microsoft', 'Navigator', 'Livewirer', 'Native'],
  },
  {
    numb: 7,
    question: ' Which of the following is not a valid JavaScript variable name?',
    answer: '2names',
    options: ['2names', '_first_and_last_names', 'firstAndLast', 'None of the above'],
  },
  {
    numb: 8,
    question: 'Which is the correct way to write a JavaScript array?',
    answer: "var txt = new Array('ken','kenny', 'kenneth')",
    options: [
      "var txt = new Array(1: 'ken',2:' kenny' 3:'kenneth')",
      "var txt = new Array:1=('ken')2=('kenny')3=('kenneth')",
      "var txt = new Array('ken','kenny','kenneth')",
      'var txt = new Array=Ken,kenny,kenneth',
    ],
  },
  {
    numb: 9,
    question: 'Which of the following is not considered a JavaScript operator?',
    answer: 'this',
    options: ['new', 'this', 'delete', 'typeof'],
  },
  {
    numb: 10,
    question: ' Determine the result – String("Hello") === "Hello";',
    answer: 'true',
    options: ['true', 'false', 'SyntaxError', 'ReferenceError'],
  },
];

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timeUp = document.getElementById("timeUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initalInput = document.getElementById("initalInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("istOfHighScores");

var corretAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

var totalTime = 151;
function newQuiz() {
  questionIndex = 0;
  totalTime = 150;
  timeLeft = 150;
  timeLeft.textContent = totalTime;
  initalInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timeUp.style.display = "none";

  var startTimer = setInterval(function() {
    totalTime--;
    timeLeft,textContent = totalTime;
    if(totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
        gameOver();
      } 
    }
  },1000);
showQuiz();
};

