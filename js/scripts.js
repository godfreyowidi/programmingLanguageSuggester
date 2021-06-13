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


  // to handle question-1
  function questionOne(q1Input){
    if (q1Input === "Different place, different problems") {
      return 1;
    }
    else if (q1Input === "Research"){
      return 2;
    }
    else if (q1Input === "Practice coding"){
      return 3;
    }
  }

  // to handle question-2
  function questionTwo(q2Input){
    if (q2Input === "I wouldn't be here"){
      return 1;
    }
    else if (q2Input === "I wouldn't be talking to you"){
      return 2;
    }
    else if (q2Input === "Why Sarcasm?"){
      return 3;
    }
  }

  // handle question-3
  function questionThree(q3Input){
    if (q3Input === "Round can't fall"){
      return 1;
    }
    else if (q3Input === "Squares can't fit"){
      return 2;
    }
    else if (q3Input === "Aren't they circular") {
      return 3;
    }    
  }

  // handle question-4
  function questionFour(q4Input){
    if (q4Input === "Ride it"){
      return 1;
    }
    else if (q4Input === "Take it to the Zoo"){
      return 2;
    }
    else if (q4Input === "Take it to Madagascar") {
      return 3;
    }
  }

  // handle question-5
  function questionFive(q5Input){
    if (q5Input === "Probably Fir"){
      return 1;
    }
    else if (q5Input === "Maybe Cedar"){
      return 2;
    }
    else if (q5Input === "Definately Oak") {
      return 3;
    }    
  }
});