debugger;

var game = function(number) {
  var pingPong = [];

  for (i = 1; i < number; i++) {

    if (i % 3 === 0 && i % 5 !== 0){
      pingPong.push("Ping");
    } else if (i % 5 === 0 && i & 3 !== 0) {
      pingPong.push("Pong");
    } else if (i % 15 === 0 & i !== 0) {
      pingPong.push("Ping-Pong");
    } else {
      pingPong.push(i);
    }
  };
  return pingPong;
};

$(document).ready(function() {

  $("form#value").submit(function(event) {

    event.preventDefault();

    $("#result ul").empty();

    var userInput = parseInt($("#userInput").val());
    var finals = game(userInput);

    finals.forEach(function(final) {
      $("#result ul").append("<li>" + final + "</li>")
    });

  });
});
