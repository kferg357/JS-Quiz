var skip = document.getElementById('skip');
var scpre = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var countdown = document.getElementById('countdown');
var username = document.getElementById('username');
var submitBtn = document.getElementById('submit');
var count = 0;
var scoreCount = 0;
var duration = 0;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// This is a JS Object
console.log(highScores);  // --> [ { score: 90, user: "Tim"} ]




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

        // call a function to save our data
       // getUserData();
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


submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const score = {
        score: scoreCount,
        name: username.value
    }

    console.log(score);

    // Added new Data
    highScores.push(score);

    // Sorting the data (High Scores)
    
    // Add all data to our List of High Scores Container (<div>)

    // 1) Clear The container out

    // 2) Loop through the ARRAY

    // 3) Create a new HTML ELEMENT
        //   - Add any classes for styling
        //   - Add CONTENT (innerContext, innerHTML - Data)
        //   - ADD all the new ELEMENTS to the DOM


    // Update the Local Storage Object
    localStorage.setItem('highScores', JSON.stringify(highScores));
});

// function getUserData() {

//     // Grab the Users Score And Username and create a data object
//     const score = {
//         score: scoreCount,
//         name: username.value
//     }

//     console.log(score);
//     // Added new Data
//     highScores.push(score);

//     // Sorting the data (High Scores)
    
//     // Add all data to our List of High Scores Container (<div>)


//     // Update the Local Storage Object
//     localStorage.setItem('highScores', JSON.stringify(highScores));

// }
// savedHighScore = e => {
//     console.log("clicked the save button")
//     e.preventDefault();
// };

// function storeHighScore(event) {
//     event.preventDefault();

//     if ()
// }