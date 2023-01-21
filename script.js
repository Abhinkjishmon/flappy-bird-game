let pipe = document.getElementById("pipe");
let pipe_gap = document.getElementById("pipe-gap");
let bird = document.getElementById("bird");
let score = document.getElementById("score");

let currentScore = 0;
pipe.addEventListener("animationiteration", function(){
    randomPipeGap();
    calculateScore();
});

setInterval(function(){
    addGravity();
    detectCollision();
}, 10);


function addGravity() {
    let currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (currentBirdTop) + 1 + "px";
}
function detectCollision(){
    let currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(currentBirdTop >= -50){
        alert("നിങ്ങൾ പരാജയപ്പെട്ടു")
    }

    let currentPipeLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
    let pipeGapTop = parseInt(window.getComputedStyle(pipe_gap).getPropertyValue("top"));
    let pipeGapBottom = pipeGapTop + 200;
    if(currentPipeLeft <= 50 && !((currentBirdTop+600 >= pipeGapTop) && (currentBirdTop+600 <= pipeGapBottom))){
        alert("നിങ്ങൾ പരാജയപ്പെട്ടു")
    }
}
function randomPipeGap() {
    let newTop = Math.random() * 350;
    pipe_gap.style.top = newTop + "px";
   
}
function calculateScore(){
    currentScore++;
    score.textContent = "Your score is: " + currentScore
}
function jump(){
    let currentBirdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    bird.style.top = (currentBirdTop) - 40 + "px";
}