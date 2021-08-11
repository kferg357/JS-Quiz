var skip = document.getElementById('skip');
var scpre = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;

var qaSet = document.getElementById('.qa_set');
var qaAnsRow = document.getElementById('.qa_set .qa_ans_row input');

skip.addEventListener('click', function() {
    step()
})

function step() {
    count =+ 1;
    for(var i = 0; i < qaSet.length; i++) {
        qaSet[i].className= 'qa_set';
    }
qaSet[count].className= 'qa_set acive';
if(count == 10){
    skip.style.display = 'none'
}
}