var firstTime = true;

var pingPonged = function(inputFromUser) {
  var input1 = parseInt(inputFromUser);
  if (firstTime){
    score = input1;
    firstTime = false;
    alert("first");
  }
//including both variations!!!
    if (score % 3 === 0 || score % 5 === 0) {
        if(score % 15===0) {
alert("ping-pong!!!");
        }

    }
    else {
      alert("alert no");
    }


    alert(score);
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
    var outPut= pingPonged(inputFromUser);
    // var output = cleanSentence(inputFromUser);
$("#result").prepend("<P>" +outPut+ "</p>");



  });
});
