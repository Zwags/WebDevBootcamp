//Did everything in console
//
// $("button").click(function() {
//     alert("button clicked!");
// });
//
// $("button").click(function() {
// 	var text = $(text).text();
//     console.log("You clicked " + text);
// });
//
// $("button").click(function() {
//     $(this).css("background", "pink")
// });
// $("input").keypress(function() {
// 	console.log("you pressed key");
// });
//
//
//This is useful for getting witch, which is the code of the key pressed
// $("input").keypress(function(event) {
//     console.log(event);
// });
//13 is the enter key, throws alert
// $("input").keypress(function(event) {
// if(event.which === 13){
// alert("You hit enter");
// }
// console.log(event);
// });


//This method makes the three divs fade away then they are removed from the page
$('#fadeButton').on("click", function() {
  $('div').fadeOut(3000, function() {
    $(this).remove();
  });
})
//
// $('#fadeButton').on("click", function() {
//   $('div').fadeIn(1000); //Fades in
// })
//
// $('#fadeButton').on("click", function() {
//   $('div').fadeToggle(1000); //Similar to Adding a class to a class list
//   });
// })
