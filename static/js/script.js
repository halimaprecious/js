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
 