var game = function (number)   //check if right













$(document).ready(function(){
  $("form#value").submit (function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = game(number);
    $("#result").text(result);
  });
});
