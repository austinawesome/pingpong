var firstTime = true;

var pingPonged = function(inputFromUser) {
  var input1 = parseInt(inputFromUser);
  console.log(input1);
  if (firstTime) {
    score = input1;
    firstTime = false;
    console.log("first");
    feedback=score;
  } else {
  score = score+input1;
  console.log(score);
  }

//including both variations!!!
    if (score % 3 === 0 || score % 5 === 0) {
        if (score % 15 === 0) {
          feedback ="ping-pong";
        } else if (score % 3 === 0) {
          feedback = "ping";
        } else if (score % 5 === 0) {
          feedback = "pong";
        } else {
          feedback = score;
        }



}
console.log("input1 " +input1);
console.log("score "+score);
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
    var outPut= pingPonged(inputFromUser);
    // var output = cleanSentence(inputFromUser);
$("#result").prepend("<P>" +outPut+ "</p>");



  });
});
