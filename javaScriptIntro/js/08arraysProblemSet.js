var numArray = [1, 2, 3, 4, 5];

function printReverse(arr) {
  console.log("Here's all the numbers in numArray reversed!")
  for (var i = arr.length - 1; i >= 0; i++) {
    console.log(arr[i]);

  }
}

var uniformArray = [1, 1, 1, 1]
//using a for loop, as a foreeach loop will still return true without big work around
function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
    return true;
  }
}

var numberArray = [1, 1, 1, 1]
//using a for loop, as a foreeach loop will still return true without big work around
function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(element) {
    sum += element;
  });
  return sum;
}

var maxNumbers = [10, 4, 59, 92, 2, 8, 9];

function max(arr) {
  var compare = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > compare){
      compare = arr[i];
    }
  }
  return compare;
}
