var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = randomPick();
var correctColor = false;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1Background = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function() {
  reset();
});

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function reset() {
  h1Background.style.backgroundColor = "steelblue";
  messageDisplay.textContent = ""
  resetButton.textContent = "New Colors?"
  //Generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick a new reando color from colorArray
  pickedColor = randomPick();
  colorDisplay.textContent = pickedColor;
  //change color of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

function changeColors(color) {
  //Loop  through all squares and change their color to match given
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  //Change h1 to have the same color
}

function randomPick() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function generateRandomColors(number) {
  //Make array
  var colorArray = []
  //Add num random colors to array
  for (var i = 0; i < number; i++) {
    //push random color into array
    colorArray.push(randomColor())
  }
  //return array
  return colorArray;
}

function randomColor() {
  //need to pick a r/g/b from 0 to 255
  var redColor = Math.floor(Math.random() * 256);
  var greenColor = Math.floor(Math.random() * 256);
  var blueColor = Math.floor(Math.random() * 256);
  var colorName = "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
  return colorName;
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //How many squares to show
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; //Turniary operator
      reset();
    })
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //Add listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color
      var clickedColor = this.style.backgroundColor
      //compare colors
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1Background.style.backgroundColor = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again!";
      }
    })
  }
}
