var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("h2 span")
var scoreSetter = document.querySelector("input");
var gameOver = false;
winningScore = 5;


p1Score = 0;
p2Score = 0;

function resetScore() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;

    }
    p1Display.textContent = p1Score;
  }

});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }

});

reset.addEventListener("click", function() {
  resetScore()
});

scoreSetter.addEventListener("change", function() {

  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  resetScore()
})
