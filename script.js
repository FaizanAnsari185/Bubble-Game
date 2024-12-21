var startTime = 3;
var startInterval = setInterval(function(){
  document.querySelector("#pbtm").innerHTML = `<h1>Game Start in ${startTime}</h1>`;
  if(startTime > 0){
    startTime--;
  }
  else{
    clearInterval(startInterval)
    startGame();
  }
},1000)


function startGame(){

  var timer = 5;
  var score = 0;
  var hitRn = 0;
  
  function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
  }

  function decreaseScore(){
    if(score > 0){
      score -= 10;
      document.querySelector("#scoreval").textContent = score;
    }
  }
  
  function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitRn;
  }
  
  function makeBubble() {
    var bubblePanel = "";
    for (var i = 1; i < 148; i++) {
      var randomNum = Math.floor(Math.random() * 10);
      bubblePanel += `<div class="bubble">${randomNum}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubblePanel;
  }
  
  function runTimer() {
    var stopTimer = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerValue").textContent = timer;
      } else {
        clearInterval(stopTimer);
        document.querySelector("#hitval").textContent = 0;
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> <h1>Final Score is ${score}</h1> <button class="plyBtn">Play Again</button>`;
        document.querySelector(".plyBtn").addEventListener("click", function () {
            makeBubble();
            runTimer();
            getNewHit();
            document.querySelector("#scoreval").textContent = 0;
            score = 0;
            timer = 5;
          });
        }
      }, 1000);
    }
    
    document.querySelector("#pbtm").addEventListener("click", function (e) {
      var clickedNum = Number(e.target.textContent);
      if (clickedNum === hitRn) {
        increaseScore();
        makeBubble();
        getNewHit();
      } else{
        decreaseScore();
      }
    });
    
    makeBubble();
    runTimer();
    getNewHit();
  };