function createQuestion() {
  $("p").foreach(
    (immediateQuestion, questionIndex) => {
      const answers = [];
      for (answerLetter in immediateQuestion.answers)
    }
  )
}

$(document).ready(function() {
  $("form#container").submit(function(event) {
    event.preventDefault();
    const Q1 = toString($("#q1").val());
    const Q2 = toString($("#q2").val());
    const Q3 = toString($("#q3").val());
    const Q4 = toString($("#q4").val());
    const Q5 = toString($("#q5").val());
    
    if (result === csharp) {
      $("#Csharp").show();
    } else if (result === java) {
      $("#java").show();
    } else if (result === python) {
      $("#python").show();
    }
    $("#output").text(result);
  }) 
})