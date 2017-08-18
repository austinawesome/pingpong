var firstTime = true;
var pingPonged = function(inputFromUser) {
  var input1 = parseInt(inputFromUser);
  if (firstTime) {
    score = input1;
    firstTime = false;
    feedback=score;
  } else {
    score = score+input1;
  }
    }
return feedback;
}








// dont cross this line
// dont cross this line
// dont cross this line
// dont cross this line
// dont cross this line






$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    var output= pingPonged(inputFromUser);
    $(".pictures img").addClass("hidden");
    $("#result").prepend("<P>" +output+ "</p>");
    console.log(output);
    if (output === 'ping' ||output === 'pong'||output === 'ping-pong'){
    $("#"+output).removeClass("hidden");
    var pictoshow=$("#"+output).removeClass("hidden");
    console.log(pictoshow)
  }
  });
});
