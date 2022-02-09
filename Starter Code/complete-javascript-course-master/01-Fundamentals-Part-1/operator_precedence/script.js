const now = 2037;
const ageJonas = now - 1991;  // minus operator
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // why does this work?

//JS has a well defined order of precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence