//While Loops
//-10 and 19
var counterOne = -10;

while(counterOne <= 19) {
  console.log(counterOne)
  counterOne++
}

//All even between 10 and 40
var counterTwo = 10
while (counterTwo <= 40) {
  if (counterTwo % 2 === 0) {
    console.log(counterTwo)
  }
  counterTwo++;
}

//All odd between 300 and 333
var counterThree = 300
while (counterThree <= 333) {
  if ((counterThree % 2 !== 0)) {
    console.log(counterThree)
  }
  counterThree++;
}

//All divisable by 5 and 3 between 5 and 50
var counterFour = 5
while (counterFour <= 50) {
  if ((counterFour % 5 === 0) && (counterFour % 3 === 0)) {
    console.log(counterFour)
  }
  counterFour++;
}
