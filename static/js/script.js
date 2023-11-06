/* chalenge 1: Your age in days 
age in days = current year - birth year * 365
*/
const now = new Date()
function ageInDays(){
    let birthYear = prompt(`what's your birth year?`);
    let currentAgeInDays = (now.getFullYear() - birthYear) * 365
    console.log(currentAgeInDays)
};
