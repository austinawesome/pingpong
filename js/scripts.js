























$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    // var output = cleanSentence(inputFromUser);
$("#result").prepend("<P>" +inputFromUser+ "</p>");



  });
});
