function myForEach(arr, func) {
  //loops through Arrays
  for(var i = 0; i < arr.length; i++ ){
      //call func for each item in Arrays
      func(arr[i]);
  }
}

Array.prototype.myForEach = function(func) {
    for(var i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

var friends = ["charlie", "dave", "kate", "orange"]

friends.myForEach(function(name){
    console.log("I love + " +name);
})
