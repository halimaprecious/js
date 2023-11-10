/* chalenge 1: Your age in days 
age in days = current year - birth year * 365
*/
const now = new Date()
function ageInDays(){
    let birthYear = prompt(`what's your birth year?`);
    let currentAgeInDays = (now.getFullYear() - birthYear) * 365
    let h1 = document.createElement('h1');
    let result = document.createTextNode(`You are ${currentAgeInDays} days old`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(result);
    document.getElementById('flex-box-result').appendChild(h1);
};
 
function reset(){
    document.getElementById('ageInDays').remove();
}

// challenge 2: Cat Generator
function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');
    image.src = "https://placekitten.com/g/200/300";
    div.appendChild(image);

}

// challeng 3: Rock Paper Scissors
function rpsGame(yourChoice){
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    console.log("Your choice:", humanChoice);

    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer choice:", botChoice);

    results = decideWinner(humanChoice, botChoice);  // [0, 1] human lost | bot won
    console.log(results);

    message = finalMessage(results); // {message: 'you won!', 'color': 'green'} 
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// generate random number btwn o and 2
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

// pick random number and return choice

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

// possible choices and results.[0, 1] human lost | bot won
function decideWinner(yourChoice, compChoice){
    var rspData = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0},
    };
    var yourScore = rspData[yourChoice][compChoice];
    var compScore = rspData[compChoice][yourChoice];

    return [yourScore, compScore];
};

// final message display.{message: 'you won!', 'color': 'green'} 
function finalMessage([yourScore, compScore]){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}; 
    } else {
        return {'message': 'You Won!', 'color': 'green'}; 
    }
};

// frontend logic
function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
    let imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    
    // remove all images when one is clicked
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // create divs for each item
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 11);'>"
    messageDiv.innerHTML ="<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageData[botImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 30, 24, 11);'>"

    // append to inner html
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: change button colors.
let allButtons = document.getElementsByTagName('button') //access all buttons on the page
console.log(allButtons);

let copyAllButtons = [];  // a copy of buttons
for (let i=0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i]);
}
console.log(copyAllButtons)

// 
function buttonColorChange(buttonText){
    if (buttonText.value === 'red'){
        buttonsRed();
    } else if(buttonText.value === 'green'){
        buttonsGreen();
    } else if(buttonText.value === 'reset'){
        buttonColorReset();
    }else if (buttonText.value === 'random')
    randomColors();
}

// change all buttons to red
function buttonsRed(){
    for (let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

// reset all buttons to initial colors
function buttonColorReset(){
    for (let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

// random colors
function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for(let i=0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber])
    }
}