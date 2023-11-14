// day 4 exercise
// level 1:


// document.querySelector('submit').addEventListener('click',checkAge)
// function checkAge(){
// // get user input
// let yourAge = document.getElementById('age').value;

// let yearsLeft = (18 - yourAge);


// if (yourAge >= 18){
//     document.getElementById('results').innerHTML = 'You are old enough to drive.';
// }else {
//     document.getElementById('results').innerHTML = 'You are not old enough to drive. Please wait for '+ yearsLeft + 'more year(s).';
// }
// }


document.querySelector('#ageForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input
    var age = document.getElementById("age").value;

    // Check if the input is a valid number
    if (isNaN(age)) {
        document.getElementById("results").innerText = "Please enter a valid age.";
    } else {
        // Check if the user is 18 or older
        if (age >= 18) {
            document.getElementById("results").innerText = "You are old enough to drive.";
        } else {
            var yearsToWait = 18 - age;
            document.getElementById("results").innerText = "Sorry, you are not old enough to drive. Please wait for " + yearsToWait + " more year(s).";
        }
    }
});
