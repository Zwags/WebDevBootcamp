//var buttonClicked = document.querySelector("button");

//var bodyClick = document.getElementsByTagName("body");
// 
// function buttonClicked() {
//   //if not green, make it green
//   if(document.body.style.backgroundColor !== "green") {
//       document.body.style.backgroundColor = "green";
//   }
//   //else make it orange
//   else {
//     document.body.style.backgroundColor = "Orange";
//   }
// }

//Cleaner way
var button = document.querySelector("button");
button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
