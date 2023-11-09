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
    results = decideWinner(humanChoice, botChoice);  // [0, 1] human lost | bot won
    message = finalMessage(results); // {message: 'you won!', 'color': 'green'} 
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

// generate random number btwn o and 2

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

// pick random number and reeturn choice

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

// possible choices and results.[0, 1] human lost | bot won

function decideWinner(yourChoice, botChoice){
    let rspObject = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors':0.5, 'rock': 0},
    };
    let yourScore = rspObject[yourChoice][botChoice];
    let botScore = rspObject[botChoice][youChoice];

    return [yourScore, botScore];
};

// final message display.{message: 'you won!', 'color': 'green'} 

function finalMessage([yourScore, botScore]){
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'}; 
    } else {
        return {'message': 'You Won!', 'color': 'green'}; 
    }
};

// frontend logic
// function rpsFrontEnd(humanImgChoice, botImgChoice, finalMessage){
//     let imageData ={
//         'rock': document.getElementById('rock').src,
//         'paper': document.getElementById('paper').src,
//         'scissors': document.getElementById('scissors').src,
//     }
    
    // remove all images
    // document.getElementById('rock').remove();
    // document.getElementById('paper').remove();
    // document.getElementById('scissors').remove();

    // create divs
     
// }