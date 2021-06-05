// Function to check correct answers and display them
function tabulateResult() {

  // count correct answers
  const correctAnswers = 0;

  // correct input to display csharp
  const q1 = document.getElementById("q1a").value;
  const q2 = document.getElementById("q2a").value;
  const q3 = document.getElementById("q3a").value;
  const q4 = document.getElementById("q4a").value;
  const q5 = document.getElementById("q5a").value;

  // correct input to display java
  const q5 = document.getElementById("q1b").value;
  const q6 = document.getElementById("q2b").value;
  const q7 = document.getElementById("q3b").value;
  const q8 = document.getElementById("q4b").value;
  const q9 = document.getElementById("q5b").value;

  // correct input to display python
  const q10 = document.getElementById("q1c").value;
  const q12 = document.getElementById("q2c").value;
  const q13 = document.getElementById("q3c").value;
  const q14 = document.getElementById("q4c").value;
  const q15 = document.getElementById("q5c").value;


}
$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();

  if (q1 == "Different place, different problems") {result ++}
  if (q2 == "I wouldn't be talking to you") {result ++}
  if (q3 == "Aren't they circular") {result ++}
  if (q4 == "Take it to Madagascar") {result ++}
  if (q5 == "Maybe Cedar") {result ++}
  
