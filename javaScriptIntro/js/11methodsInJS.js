
//This is a method to add within this obj object
//This allows us to logically group things together
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "ross"],
    add: function(x,y) {
        return x+y;
    }
}

//http://underscorejs.org/ is a neat place to look at

//All about this
var comments = {};

comments.data = ["Good job", "Bye", "Have fun", "GG"];
comments.print = function print() { // no need for argument, can write this.data
  this.data.forEach(function(el) { //refers to the object of comments
    console.log(el);
  });
}
