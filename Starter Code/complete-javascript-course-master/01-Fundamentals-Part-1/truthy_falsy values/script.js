// Falsy Values
// 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job");
// }

// let height = 0; 
// if(height) {
//     console.log('Yay, height is defined');
// } else {
//     console.log('Height is not defined');
// }


// const age = 18;
// if(age === 18) console.log('You just became an adult'); // === returns a boolean value

// === is a strict equality operator.
// == is a loose equality operator. 

// if(age == 18) console.log('You just became an adult'); // == returns a value

// const favorite = prompt("What's your favorite number?");
// console.log(favorite);

// if (favorite === 23) {
//     console.log('Cool, 23 is an amazing number');
// } else if (favorite === 24) {
//     console.log('24 is a good number');
// } else {
//     console.log('That number is not 23 or 24');
// }

// if (favorite !== 23) console.log('Why not 23?');



const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive')
}

const isTired = false; // variable C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
} else {
    console.log('Someone else should drive')
}