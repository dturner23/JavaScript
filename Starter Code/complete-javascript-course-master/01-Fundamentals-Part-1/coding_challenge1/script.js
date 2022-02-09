// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:

//  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.


// Data 1

const markHeightFirst = 1.69
const markWeightFirst = 78
const johnHeightFirst = 1.95
const johnWeightFirst = 92

const markBmiFirst = markWeightFirst / (markHeightFirst ** 2) 
const johnBmiFirst = johnWeightFirst / (johnHeightFirst ** 2)
console.log(johnBmiFirst, markBmiFirst);

const markHigherBmiFirst = markBmiFirst > johnBmiFirst;
console.log(markHigherBmiFirst);


// Data 2

const markHeightSecond = 1.88
const markWeightSecond = 95
const johnHeightSecond = 1.76
const johnWeightSecond = 85

const markBmiSecond = markWeightSecond / (markHeightSecond ** 2) 
const johnBmiSecond = johnWeightSecond / (johnHeightSecond ** 2)
console.log(johnBmiSecond, markBmiSecond);

const markHigherBmiSecond = markBmiSecond > johnBmiSecond;
console.log(markHigherBmiSecond);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';  // type coercion

console.log(jonas);

//template literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String
multiple
lines`)


const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving!');
} else {
    const yearsLeft = 18 - age;
    console.log('Sarah is too young. Wait another ' + yearsLeft + ' years.');
}

// if else control structure. does not operate linearly.

const birthYear = 2010;

let century;

if (birthYear <= 2000) {  //example of condition because it returns a true/false
    century = 20;
} else {
    century = 21;
}

console.log(century);