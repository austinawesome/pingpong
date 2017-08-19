var pingPonged = function(inputFromUser) {
  var input1 = parseInt(inputFromUser);
    for (score =1; score<=userInput; score++) {
      if (score % 3 === 0 || score % 5 === 0) {
        if (score % 15 === 0) {
          feedback = "ping-pong";
        } else if (score % 3 === 0) {
          feedback = "ping";
        } else if (score % 5 === 0) {
          feedback = "pong";
        }
        revealIt = true;
      } else {
        feedback = score;
        revealIt = false;
    }
  }
  return feedback;
}


$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    var output = pingPonged(inputFromUser);
    $(".pictures img").addClass("hidden");
    $("#result").prepend("<P>" + output + "</p>");
    console.log(output);
    if (output === 'ping' || output === 'pong' || output === 'ping-pong') {
      $("#" + output).removeClass("hidden");
      var pictoshow = $("#" + output).removeClass("hidden");
    }
  });
});
