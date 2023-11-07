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