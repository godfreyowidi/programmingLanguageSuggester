$(document).ready(function() {
  $("button").click(function() {
    event.preventDefault();
    let name = $("#name").val();
    let q1Input = $("#question1").val();
    let q2Input = $("#question2").val();
    let q3Input = $("#question3").val();
    let q4Input = $("#question4").val();
    let q5Input = $("#question5").val();
    let totalScore = questionOne(q1Input) + questionTwo(q2Input) + questionThree(q3Input) + questionFour(q4Input) + questionFive(q5Input);
    $(".result").text(outcome(totalScore));
  });
});