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

const markHeightFirst = 1.69
const markWeightFirst = 78
const johnHeightFirst = 1.95
const johnWeightFirst = 92

const markBmiFirst = markWeightFirst / (markHeightFirst * 2) 
console.log(markBmiFirst);
const johnBmiFirst = johnWeightFirst / (johnHeightFirst * 2)
console.log(johnBmiFirst);

const markHigherBmiFirst = markBmiFirst > johnBmiFirst;
console.log(markHigherBmiFirst);

const markHeightSecond = 1.88
const markWeightSecond = 95
const johnHeightSecond = 1.76
const johnWeightSecond = 85

const markBmiSecond = markWeightSecond / (markHeightSecond * 2) 
console.log(markBmiSecond);
const johnBmiSecond = johnWeightSecond / (johnHeightSecond * 2)
console.log(johnBmiSecond);

const markHigherBmiSecond = markBmiSecond > johnBmiSecond;
console.log(markHigherBmiSecond);