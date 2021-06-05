

$(document).ready(function() {
  $("form#container").submit(function(event) {
    event.preventDefault();
    const questions = $("p").each(function() {
      for (const i = 0; i < questions.length; i += 1) {
        questions[i].style.display = "none"
    
    const Q1 = toString($("#q1").val());
        
    if (result === csharp) {
      $("#Csharp").show();
    } else if (result === java) {
      $("#java").show();
    } else if (result === python) {
      $("#python").show();
    }
  }) 
})