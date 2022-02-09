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


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) { 
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;  
    return juice; 
}
console.log(fruitProcessor(2, 3));