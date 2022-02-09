// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement

// Data 1

const markHeightFirst = 1.69
const markWeightFirst = 78
const johnHeightFirst = 1.95
const johnWeightFirst = 92

const markBmiFirst = markWeightFirst / (markHeightFirst ** 2) 
const johnBmiFirst = johnWeightFirst / (johnHeightFirst ** 2)
console.log(johnBmiFirst, markBmiFirst);

const HigherBmiFirst = markBmiFirst > johnBmiFirst;
console.log(HigherBmiFirst);

if(markBmiFirst > johnBmiFirst){
    console.log(`Mark's BMI (${markBmiFirst}) is higher than John's (${johnBmiFirst})!`);
} else {
    console.log(`John's BMI (${johnBmiFirst}) is higher than Mark's! (${markBmiFirst})`);
}


// Data 2

const markHeightSecond = 1.88
const markWeightSecond = 95
const johnHeightSecond = 1.76
const johnWeightSecond = 85

const markBmiSecond = markWeightSecond / (markHeightSecond ** 2) 
const johnBmiSecond = johnWeightSecond / (johnHeightSecond ** 2)
console.log(johnBmiSecond, markBmiSecond);

const HigherBmiSecond = markBmiSecond > johnBmiSecond;
console.log(HigherBmiSecond);

if(markBmiSecond > johnBmiSecond){
    console.log(`Mark's BMI (${markBmiSecond}) is higher than John's (${johnBmiSecond})!`);
} else {
    console.log(`John's BMI (${johnBmiSecond}) is higher than Mark's (${markBmiSecond})!`);
}