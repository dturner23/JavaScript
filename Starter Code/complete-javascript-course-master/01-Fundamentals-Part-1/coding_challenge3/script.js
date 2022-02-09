// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

const dolphinsOne = 96
const dolphinsTwo = 108
const dolphinsThree = 89

const koalasOne = 88
const koalasTwo = 91
const koalasThree = 110

const dolphinsAvg = (dolphinsOne + dolphinsTwo + dolphinsThree) / 3
console.log(dolphinsAvg);

const koalasAvg = (koalasOne + koalasTwo + koalasThree) / 3
console.log(koalasAvg);

if (dolphinsAvg > koalasAvg) {
    console.log('The Dolphins win!');
}   else if (koalasAvg > dolphinsAvg) {
    console.log('The Koalas win!')
}   else if (dolphinsAvg === koalasAvg) {
    console.log("It's a draw!")
}

//The Doplphins win!

// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

const dolphOne = 97
const dolphTwo = 112
const dolphThree = 101

const koaOne = 109
const koaTwo = 95
const koaThree = 123

const dolphAvg = (dolphOne + dolphTwo + dolphThree) / 3
console.log(dolphAvg);

const koaAvg = (koaOne + koaTwo + koaThree) / 3
console.log(koaAvg);

if (dolphAvg > koaAvg && dolphAvg >= 100) {
    console.log('The Dolphins win!');
}   else if (koaAvg > dolphAvg && koaAvg >= 100) {
    console.log('The Koalas win!')
}   else if (dolphAvg === koaAvg) {
    console.log("It's a draw!")
}

// The Koalas win!

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (97 + 112 + 101) / 3
const scoreKoalas = (109 + 95 + 106) / 3
console.log (scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('The Dolphins win!');
}   else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('The Koalas win!')
}   else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100  && scoreKoalas >= 100) {
    console.log("It's a draw!")
}