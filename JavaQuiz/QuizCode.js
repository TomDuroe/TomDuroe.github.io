/**
 * hides intro and show question 1
 */
 function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
  }
  
  /**
   * hides question 1 shows question2
   */
  function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
  }
  
  /**
   * hides question 2 shows question3
   */
  function question3() {
    calculateResults()
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
  }

    /**
   * hides question 3 shows question4
   */
     function question4() {
      calculateResults()
      document.getElementById("question3").style.display = "none";
      document.getElementById("question4").style.display = "inline-block";
    }
  
        /**
   * hides question 4 shows results
   */
      function results() {
        calculateResults()
        document.getElementById("question4").style.display = "none";
        document.getElementById("results").style.display = "inline-block";
    }
  
  /**
   * calculates and displays the results
   */
  function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }
    
    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }

    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }

    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
  
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value);
    result = total / 4;
    
    if (result > 6) {
      msg = " Congrantulations you answered mostly F, which makes you an Elephant";
    } else if (result >= 5) {
      msg = "Congratulations you answered mostly E, which makes you a Dog";
    } else if (result >= 4) {
      msg = "Congratulations you answered mostly D, which makes you a Cow";
    } else if (result >= 3) {
      msg = "Congratulations you answered mostly C, which makes you a Monkey";
    } else if (result >= 2) {
      msg = "Congratulations you answered mostly B, which makes you a Shark";
    } else {
      msg = "You answered mostly A, which makes you a Lion";
    }
  
    document.getElementById("result").innerHTML = msg
  
  }