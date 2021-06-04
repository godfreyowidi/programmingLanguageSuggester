const csharp = ["different places, different problems", "i wouldn't be here", "round can't fall", "ride it", "probably fir"];
const java = ["research", "wouldn't be talking to you", "square wouldn't fit", "take to the zoo", "probably cedar"];
const python = ["practice coding", "why sarcasm", "are they circular?", "take to madagascar", "probably oak"];

$(document).ready(function() {
  $("form#container").submit(function(event) {
    event.preventDefault();
    const Q1 = toString($("#q1").val());
    const Q2 = toString($("#q2").val());
    const Q3 = toString($("#q3").val());
    const Q4 = toString($("#q4").val());
    const Q5 = toString($("#q5").val());
    
    const result = [Q1, Q2, Q3, Q4, Q5];

    function compare(csharp, result) {
      csharp.sort();
      result.sort();
        
      if(csharp.length != csharp.length)
          return false;
        
      for(var i = 0; i < csharp.length; i++) {
          if (csharp[i] != result[i])
              return false;
      }
      $("#Csharp").show();
      //return true;
    }
    function btn() {
      down.innerHTML = compare(csharp, result);
    } 
  })
})
    /*if (result === csharp) {
      $("#Csharp").show();
    } else if (result === java) {
      $("#java").show();
    } else if (result === python) {
      $("#python").show();
    }
    $("#output").text(result);
  }) 
})*/