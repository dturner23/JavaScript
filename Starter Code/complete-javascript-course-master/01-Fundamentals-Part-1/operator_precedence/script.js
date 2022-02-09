const now = 2037;
const ageJonas = now - 1991;  // minus operator
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // why does this work?

//JS has a well defined order of precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10, y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);