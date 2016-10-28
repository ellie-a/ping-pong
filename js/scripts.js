var game = function((number) {  //check if right
  if (number % 3 === 0){
   return "Ping";
 };
 if (number % 5 === 0) {
   return "Pong"
 };
 if (number % 15 ===0) {
   return "Ping-Pong"
 }
});


$(document).ready(function(){
  $("form#value").submit (function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = game(number);
    $("#result").text(result);
  });
});
