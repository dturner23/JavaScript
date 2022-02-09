'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log('I can drive!');


function logger() {
    console.log('My name is Jonas');  //function body
}

// calling / running / or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) { // function name is fruitProcessor // parameters are apples, oranges
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;  //string, template literal
    return juice;  //return any value from the function
}

// result of calling fruitProcessor function below is the ingrediants of appleJuice
const appleJuice = fruitProcessor(5, 0);  // 5, 0 are the inputs for the fruit processor function
console.log(appleJuice); // prints Juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // prints Juice with 2 apples and 4 oranges