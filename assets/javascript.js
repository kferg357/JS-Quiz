var start_btn = document.querySelector(".start_btn button");
var info_area = document.querySelector(".info_box");

unction setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";




start_btn.onclick = ()=>{
    info.box.classList.add("activateInfo"): //show info area
}





if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to create and append image
    sendMessage();
  }
