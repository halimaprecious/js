// day 4 exercise
// 1. Age checker

document.querySelector("#ageForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user input
  var age = document.getElementById("age").value;

  // Check if the input is a valid number
  if (isNaN(age)) {
    document.getElementById("results").innerText = "Please enter a valid age.";
  } else {
    // Check if the user is 18 or older
    if (age >= 18) {
      document.getElementById("results").innerText =
        "You are old enough to drive.";
    } else {
      var yearsToWait = 18 - age;
      document.getElementById("results").innerText =
        "Sorry, you are not old enough to drive.\n Please wait for " +
        yearsToWait +
        " more year(s).";
    }
  }
});

// ternary operator

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// even numbers
document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let number = document.getElementById("even-num").value;

  if (isNaN(number)) {
    document.getElementById("output").innerHTML = "Please enter a valid number";
  } else {
    if (number % 2 === 0) {
      document.getElementById(
        "output"
      ).innerHTML = `${number} is an even number `;
    } else {
      document.getElementById(
        "output"
      ).innerHTML = `${number} is an odd number `;
    }
  }
});

// Grading scheme
document.querySelector("#grades").addEventListener("click", checkGrade);
function checkGrade() {
  // user input(score)
  let score = document.getElementById("score").value;

  if ((score === '')) {
    document.getElementById("gradeResults").innerHTML = `<p style='color:red;'> You must enter a valid score!! </p>`;
  } else {
    if (score >= 80 && score <= 100) {
    document.getElementById("gradeResults").innerHTML = "Your score is: A";

    } else if (score >= 70  && score < 80) {
        document.getElementById("gradeResults").innerHTML = "Your score is: B";
    } else if (score >= 60 && score < 70) {
        document.getElementById("gradeResults").innerHTML = "Your score is: C";

    } else if (score >= 50 && score < 60) {
        document.getElementById("gradeResults").innerHTML = "Your score is: D";

    } else if (score >= 0 && score < 50) {
        document.getElementById("gradeResults").innerHTML = "Your score is: F";

    }else{
        console.log('Invalid score. Score ,must be between 0 and 100')
    }
  }
}

// seasons
function checkSeason() {
  var userInput = document.getElementById('seasons').value.trim();
  var season = getSeason(userInput);

  if (season !== "Invalid month") {
      document.getElementById('seasonResult').innerText = "The season in " + userInput + " is " + season + ".";
  } else {
      document.getElementById('seasonResult').innerText = "Invalid input. Please enter a valid month.";
  }
}

function getSeason(month) {
  switch (month.toLowerCase()) {
      case "september":
      case "october":
      case "november":
          return "Autumn";
      case "december":
      case "january":
      case "february":
          return "Winter";
      case "march":
      case "april":
      case "may":
          return "Spring";
      case "june":
      case "july":
      case "august":
          return "Summer";
      default:
          return "Invalid month";
  }
}