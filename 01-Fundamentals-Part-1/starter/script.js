/*
let js = "amazing";
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

//Variable name conventions
let firstName = "Matilda";
let first = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthyear = 1991;
// birthyear = 1990; 
// const job

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators:
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; 
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageJonas >= 18;

console.log(now - 1991 > now - 2018); // first math then comparison
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // first math then comparison

let x, y;
x = y = 25-10-5;
console.log(x, y); // output 10 10

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old '
+ job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

const age = 15;

if(age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18); // output: 199118

console.log(Number('Jonas')); // output: NaN
console.log(typeof NaN); // output: number

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1; // 11 - 1
console.log(n); // 10

// Truthy and falsy values
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 0;

if(money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height; 
if(height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

const age = '18';
if(age === 18) console.log("You just became an adult :D (strict)");
if(age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { // 23 === 23
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9){
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");


// Logical operators
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision) {
//     console.log("Sarah is able to drive.");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
	console.log("Sarah is able to drive.");
} else {
	console.log("Someone else should drive...");
}

// The switch statement
const day = "thursday";

switch(day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Preapre theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}
*/
// the conditional (ternary) operator

const age = 23;
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);