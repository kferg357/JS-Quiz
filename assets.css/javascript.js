//elements
var start_btn = document.getElementById('start_btn');
var info_box = document.getElementById('info_box');
var continue_btn = document.getElementById('continue_btn');
var leave_btn = document.getElementById('leave_btn');
var text_box = document.getElementById('test_box');
var option_list = document.querySelector('.option_list');
var time_line = document.querySelector('header .time_line');
var timeText = document.querySelector('.timer .time_left_txt');
var timeCount = document.querySelector('.timer .timer_min');
var next_btn = document.querySelector('#next_btn');
var test_quest = document.getElementById('test_quest');
var currentQuestion = 0;
var timerInterval = document.querySelector('time_start');
var high_score_page = document.getElementById('high_score_page');
continue_btn.onclick = continue_game;
function continue_game() {
  info_box.style.display = 'none';
  console.log('continue_btn');
}
leave_btn.onclick = leave_game;
function leave_game() {
  info_box.style.display = '';
  console.log('leave_btn');
}
start_btn.onclick = start_game;
function start_game() {
  start_btn.style.display = 'none';
  console.log('start_btn');
}
next_btn.onclick = quiz;

function quiz() {
  console.log(currentQuestion, questions.length);
  if (currentQuestion < questions.length) {
    document.querySelector('#target').innerHTML = '';
    console.log(questions[currentQuestion]);
    var container = document.createElement('div');
    var question = document.createElement('h1');
    question.textContent = questions[currentQuestion].question;
    container.appendChild(question);
    console.log('answered');
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      var button = document.createElement('button');
      button.textContent = questions[currentQuestion].options[i];
      container.appendChild(button);
      button.addEventListener('click', function () {
        var userAnswer = this.textContent;
        var correctAnswer = questions[currentQuestion].answer;
        console.log('userAnswer:', userAnswer);
        console.log('correctAnswer:', correctAnswer);
        // compare useranswer to correct answer
        
        currentQuestion++;
        quiz();

        
      })
    }
    console.log('bye');
    document.querySelector('#target').appendChild(container);
  } else {
    //save you intialts
    console.log('finished');
  }
}
function correctAns(answers) {}
//function for creating a text for correct and wrong answer's
// function createText(answer) {
//     if (answer === "true") {
//         correctEl.innerHTML = "Correct!"
//     } else {
//         correctEl.innerHTML = "Wrong!";
//         timer -=10;
//     }
// }
//  timer function starts at 300 seconds
// function startTimer() {
//     countdownEl.innerHTML = "Time:" + timer;
//     if (timer <= 0) {
//         gameOver();
//     } else {
//         timer -= 1;
//         runningTimer = setTimeout(startTimer, 1000);
//     }
// }
//array for questions, options and answers
let questions = [
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