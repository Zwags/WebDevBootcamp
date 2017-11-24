console.log("01 - Is Even Function");

function isEven(num) {
  return num % 2 === 0;
}

console.log("02 - Factorial function");

function factorial(num) {
  //define result
  var results = 1;
  //calc Factorial
  for(var i = 2; i <= num; i++) {
    results *= i;
  }
  //return result

  return results;
}

console.log("03 - Kebab to snake case");

function kebabToSnake(kebab) {
  var snake = kebab.replace(/-/g, "_");
  return snake;
}
