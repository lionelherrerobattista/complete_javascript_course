"use strict";
/*
// strict mode
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true; // wrong name, set new variable
if(hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
const private = 534;


// functions 

function logger() {
    console.log("My name is Jonas");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) { // parameters
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // Juice with 5 apples and 0 oranges.

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration vs function expressions
// function declaration
const age1 = calcAge1(1991); // call first

function calcAge1(birthYear) { // define later
    return 2037 - birthYear;
}


// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// functions calling other functions
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	// parameters
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));


// functions review
const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

// Introduction to arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas"
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Basic Array Operations
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last
console.log(popped); // Jay
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false

if(friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}


// Dot vs bracket notation  

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"]
}

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// example
const interestedIn = prompt("What do you want to know about Jonas? "+
    "Choose between firstName, lastName, age, job and friends.");

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request!" + 
        "Choose between firstName, lastName, age, job and friends.");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// write "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and ` +
    `his best friend is called ${jonas.friends[0]}.`);

// Object Methods
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"],
    hasDriverLicense: true,
    // calcAge: function() {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, ` + 
            `and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
    }
}
console.log(jonas.calcAge());


console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
// console.log(jonas["calcAge"](1991));


// Iteration: The for loop

for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}


// looping arrays
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];
const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== "string") continue; // exit the iteration

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === "number") break; // exit the loop

    console.log(jonasArray[i], typeof jonasArray[i]);
}


// looping backwards and loops in loops
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

// 4, 3, ..., 0

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------- Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}
*/

// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
    rep++;
}


// roll a dice until we get a 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end...");
}