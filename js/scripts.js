// Function to check correct answers and display them
function tabulate() {

  // count correct answers
  const correctAnswer = [];

  // correct input to display csharp
  const q1 = document.getElementById("q1a").checked;
  const q2 = document.getElementById("q2a").checked;
  const q3 = document.getElementById("q3a").checked;
  const q4 = document.getElementById("q4a").checked;
  const q5 = document.getElementById("q5a").checked;

  // correct input to display java
  const q6 = document.getElementById("q1b").checked;
  const q7 = document.getElementById("q2b").checked;
  const q8 = document.getElementById("q3b").checked;
  const q9 = document.getElementById("q4b").checked;
  const q10 = document.getElementById("q5b").checked;

  // correct input to display python
  const q11 = document.getElementById("q1c").checked;
  const q12 = document.getElementById("q2c").checked;
  const q13 = document.getElementById("q3c").checked;
  const q14 = document.getElementById("q4c").checked;
  const q15 = document.getElementById("q5c").checked;

  // Print results (and statement) to document, dependant on outcome
  if (correctAnswer == q1 && q2 && q3 && q4 && q5) {
    document.getElementById("csharp").innerHTML;  
  } else if (correctAnswer == q6 && q7 && q8 && q9 && q10 ) {
    document.getElementById("java").innerHTML;  
  } else if (correctAnswer == q11 && q12 && q13 && q14 && q15) {
    document.getElementById("python").innerHTML;
  } else {
    document.getElementById("result").innerHTML = "Sign up at Epicodus for Introduction to Programming";  
  }  
}

