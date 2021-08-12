var skip = document.getElementById('skip');
var scpre = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var count = 0;
var scoreCount = 0;
var duration = 0;

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);
// // finsalScore.innerText = mostRecentScore;

// username.addEventListener("keyup", () => {
//     saveScoreBtn.disabled = !username.value;
// });

// savedHighScore = e => {
//     console.log("clicked the save button")
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     };
//     highScores.push(score);
//     console.log(highScores);
// };


var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click', function () {
    console.log('step!!!')
    step();
    duration =10
})

qaAnsRow.forEach(function (qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function () {
        setTimeout(function () {
            step();
            duration =10
        }, 500)

        var valid = this.getAttribute("valid");
        if (valid == "valid") {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;

        }
    })
});


function step() {
    count += 1;
    for (var i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'qa_set';
    }
    qaSet[count].className = 'qa_set active';
    if (count == 10) {
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(function () {
    if (duration == 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == "10") {
        step()
    }
}, 1000);

// savedHighScore = e => {
//     console.log("clicked the save button")
//     e.preventDefault();
// };

// function storeHighScore(event) {
//     event.preventDefault();

//     if ()
// }