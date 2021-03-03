alert("Assalm o alaikum " + "," + "My name is Ammar, press enter & type your name")
var a = prompt("Enter your name")
alert("Dont sumit quiz without select answer " + "," + "Ak quiz leave ya galt answer karna pr 10 marks nh milngy")
alert("Best of luck " + ": " + a)

function submit() {
    var score = 0
        // 1st question
    var q1a1 = document.getElementById("q1-a1")
    var q1a2 = document.getElementById("q1-a2")
    var q1a3 = document.getElementById("q1-a3")
    var q1a4 = document.getElementById("q1-a4")
    if (q1a4.checked == true) {
        score = score + 10
        alert("Q1 is correct")
    } else {
        alert("Q1 is wrong" + "," + "right answer is d")
    }
    // 2nd question 
    var q2a1 = document.getElementById("q2-a1")
    var q2a2 = document.getElementById("q2-a2")
    var q2a3 = document.getElementById("q2-a3")
    var q2a4 = document.getElementById("q2-a4")
    if (q2a4.checked == true) {
        score = score + 10
        alert("Q2 is correct")
    } else {
        alert("Q2 is wrong" + "," + "right answer is d")
    }
    // 3rd question
    var q3a1 = document.getElementById("q3-a1")
    var q3a2 = document.getElementById("q3-a2")
    var q3a3 = document.getElementById("q3-a3")
    var q3a4 = document.getElementById("q3-a4")
    if (q3a3.checked == true) {
        score = score + 10
        alert("Q3 is correct")
    } else {
        alert("Q3 is wrong" + "," + "right answer is c")
    }
    // 4rd question
    var q4a1 = document.getElementById("q4-a1")
    var q4a2 = document.getElementById("q4-a2")
    var q4a3 = document.getElementById("q4-a3")
    var q4a4 = document.getElementById("q4-a4")
    if (q4a2.checked == true) {
        score = score + 10
        alert("Q4 is correct")
    } else {
        alert("Q4 is wrong" + "," + "right answer is b")
    }
    // 5rd question
    var q5a1 = document.getElementById("q5-a1")
    var q5a2 = document.getElementById("q5-a2")
    var q5a3 = document.getElementById("q5-a3")
    var q5a4 = document.getElementById("q5-a4")
    if (q5a4.checked == true) {
        score = score + 10
        alert("Q5 is correct")
    } else {
        alert("Q5 is wrong" + "," + "right answer is d")
    }
    alert(a + "," + " Your score is" + " :" + " " + score)
}