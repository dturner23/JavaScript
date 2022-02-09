// operators

//math operators

const now = 2037;
const ageJonas = now - 1991;  // minus operator
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 - 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// assignment operators

let x = 10 + 5; // two operators, the equals and the plus sign
x += 10; // same as x = x + 10 = 25
x *= 4; // same as x = x * 4 = 100
x ++; // same as x = x + 1 = 101
x--; // same as x = x - 1 = 100
console.log(x);


// comparison operators
// used to create boolean values
console.log(ageJonas > ageSarah);  // >, < , >= , <= , == , === , != , !==
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); //


