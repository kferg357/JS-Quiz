var start_btn = document.querySelector(".start_btn_button");
var info_area = document.querySelector(".info_area");
var timerInterval = document.querySelector(".timer");
var info_box = document.querySelector("info_box");
var question_box = document.getElementById('#question_box')
var question = document.querySelector("question")
var answer = document.querySelector("answer")
 var numb = document.querySelector("number")

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

start_btn.addEventListener('click', function()){
  console.log(start_btn);
  document.querySelector(".start_btn_button").hidden=true;
}



// When start quiz button is clicked
start_btn.onclick = ()=>{
    info_box.classList.remove("activateInfo_area"); //hide info box
    question.classList.add("activateQuestion_box"); //show question box
}


numb: 1,
question:
answer:
choices:[

]

// if(secondsLeft === 0) {
//     // Stops execution of action at set interval
//     clearInterval(timerInterval);
//     // Calls function to create and append image
//     sendMessage();
//   }
