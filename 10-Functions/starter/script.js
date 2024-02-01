'use strict';
/*
// Default parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // default parameters - before es6
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 5); // {flightNum: 'LH123', numPassengers: 1, price: 5}

// parameters: value vs. reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 12345674894561
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 12345674894561) {
        alert('Check in');
    } else {
        alert('Wrong passport!');
    }
}   

// checkIn(flight, jonas);
// console.log(flight); // LH234
// console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 12345674894561}

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(jonas);
checkIn(flight, jonas); // wrong passport

// Functions Accepting Callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // property gets name of function
};

transformer('JavaScript is the best!', upperFirstWord); // Transformed string: JAVASCRIPT is the best!
transformer('JavaScript is the best!', oneWord); //Transformed string: javascriptisthebest!

// callbacks examples in JS
const high5 = function () {
  console.log('🖐️');
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

// functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey'); // returns the inner function
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven

greet('Hello')('Jonas'); // Hello Jonas

// as arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

// Call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Sarah Williams'); // Cannot read property 'airline' of undefined.

// Using call()
book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings);

book.call(lufthansa, 23, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH23
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); // Mary Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss);

const flightData = [583, 'George Cooper']; // George Cooper booked a seat on Swiss Air Lines flight LX583
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

const bookEW23 = book.bind(eurowings, 23); // set this and flightNum
bookEW23('Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Eurowings flight EW23
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this); // <button class="buy">Buy new plane 🛩</button>
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate; // the order of the argument is important
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // VAT 23 %

console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// const addTax3 = (value) => (rate) => valsue + value * rate;
const addTaxRate = function(rate) {
  return function (value) {
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// IIFE

(function(){
  console.log('This will never run again');
  const isPrivate = 23;
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
}


// Closure
const secureBooking = function(){
  let passengerCount = 0; // private

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers

console.dir(booker);
*/

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f); // closure: a = 23

// Re-assigning f function
h();
f(); // 1554
console.dir(f); // Closure b = 777

// Example 2
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

// const perGroup = 1000;
boardPassengers(180, 3);
