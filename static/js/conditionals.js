// day 4 exercise
// 1. Age checker

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
            document.getElementById("results").innerText = "Sorry, you are not old enough to drive.\n Please wait for " + yearsToWait + " more year(s).";
        }
    }
});

// ternary operator

let a = 4;
let b = 3;

if (a > b){
    console.log( `${a} is greater than ${b}`)
}else{
    console.log(`${a} is less than ${b}`)
}

// even numbers
document.querySelector('#myForm').addEventListener('submit',function(event){
    event.preventDefault();

let number = document.getElementById('even-num').value;

if(isNaN(number)){
    document.getElementById('output').innerHTML = 'Please enter a valid number';
}else{
    if(number % 2 === 0){
        document.getElementById('output').innerHTML = `${number} is an even number `;   
    }else{
        document.getElementById('output').innerHTML = `${number} is an odd number `;  
    }
}
});