// Falsy Values
// 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 0;

if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job");
}

let height = 0; 
if(height) {
    console.log('Yay, height is defined');
} else {
    console.log('Height is not defined');
}