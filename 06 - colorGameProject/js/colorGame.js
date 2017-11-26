var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


var pickedColor = randomPick();

var correctColor = false;

//Prints out rbg (x, x, x)
colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
  //Sets color of the squares
  squares[i].style.backgroundColor = colors[i];
  //Add listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color
    var clickedColor = this.style.backgroundColor
    //compare colors
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  })
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
  var redColor =  Math.floor(Math.random() * 256);
  var greenColor = Math.floor(Math.random() * 256);
  var blueColor = Math.floor(Math.random() * 256);
  var colorName = "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")";
    return colorName;
}
