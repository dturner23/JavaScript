'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log('I can drive!');


// function logger() {
//     console.log('My name is Jonas');  //function body
// }

// // calling / running / or invoking the function
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) { // function name is fruitProcessor // parameters are apples, oranges
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;  //string, template literal
//     return juice;  //return any value from the function
// }

// // result of calling fruitProcessor function below is the ingrediants of appleJuice
// const appleJuice = fruitProcessor(5, 0);  // 5, 0 are the inputs for the fruit processor function
// console.log(appleJuice); // prints Juice with 5 apples and 0 oranges

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice); // prints Juice with 2 apples and 4 oranges

// const num = Number('23'); // 23


//function declaration  -- can access outside of function and before function is called
// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }  // generic function for any birth year we give it

// const age1 = calcAge1(1991); // calling the function with a birth year
// console.log(age1); // prints age1


// function expression  -- can only access inside of function and after function is called
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

//arrow function

// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) { 
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;  
//     return juice; 
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//         }    else {
//             console.log(`${firstName} is already retired`);
//             return `-1`;
//         }

//     return retirement;
//     // return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


// Array - big container that we can throw variables in for later use
// const friends = ['Michael', 'Steven', 'Peter'];  // literal sytax array
// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay'
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];


//Add elements

const newLength = friends.push('Jay');  // push is a function to call on the array
console.log(friends);
console.log(newLength);

friends.unshift('John'); 
console.log(friends);

//Remove elements
friends.pop();  // removes from the end of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  // removes from the beginning of the array
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.');
}