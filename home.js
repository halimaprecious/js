// Functions and arrays


let fruits = ['banana', 'apple', 'orange','strawberry']

for( let i = 0; i < fruits.length; i++){  //looping through the arrray
    console.log(fruits[i]);
}

// Array common methods.
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);  //removes last item
console.log(fruits.push('mangoes'),fruits); // appends

fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits)
console.log(fruits.shift()); //removes first element from an array
fruits.unshift('kiwi');   //add first element to an array
console.log(fruits); 

// combine two arrays
let vegetables = ['tomato','carrots','broccoli'];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.reverse());  //inverts an array..
console.log(allGroceries.sort()); // sorts array items in alphabetical order

// adding into an empty array
let emptyArray = [];
for(let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray)
