var start_btn = document.querySelector(".start_btn button");
var info_area = document.querySelector(".info_area");
var timerInterval = document.querySelector(".timer");
var info_box = document.querySelector("info_box");
var question_box = document.getElementById('#question_box')
var question = document.querySelector("question")

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";




// When start quiz button is clicked
start_btn.onclick = ()=>{
    info.box.classList.remove("activateInfo"): //hide info box
    info.
}





if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to create and append image
    sendMessage();
  }
