function tabulate() {
  const result = 0;
  const q1 = document.survey.question1.value;
  const q2 = document.survey.question2.value;
  const q3 = document.survey.question3.value;
  const q4 = document.survey.question4.value;
  const q5 = document.survey.question5.value;

  const outcome = $(document).("#outcome");
  const survey = document.$("#survey");

  if (q1 == "Different place, different problems") {result ++}
  if (q2 == "I wouldn't be talking to you") {result ++}
  if (q3 == "Aren't they circular") {result ++}
  if (q4 == "Take it to Madagascar") {result ++}
  if (q5 == "Maybe Cedar") {result ++}
  
  $("#survey").hide();
  if (result <= 3) {
    result.text("Your result is ${result}. Please try again.");
  } else {
    result.text("Your result is ${result}. Good work.");
  }
}
