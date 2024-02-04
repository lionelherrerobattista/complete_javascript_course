'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-01-30T18:49:59.371Z',
    '2024-02-03T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2024-01-03T18:49:59.371Z',
    '2024-02-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); // in days. Abs to avoid negative numbers

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  else if (daysPassed === 1) return 'Yesterday';
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // in each call, print the remaning time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      // Display UI and message
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }

    time--;
  };
  // set time to 5 minutes
  let time = 120;

  tick(); // call first

  // call timer every second
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// faked always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// day/month/year

// experimienting api
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = `${now.getMinutes()}`.padStart(2, '0');

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);

    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(23 === 23.0); // true

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23'); // 23 - type coercion

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// console.log(parseFloat('2.5rem')); // 2.5

// isNaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23/0)); // false - Infinity

// isFinite
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23/0)); // false

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.2)); // false
console.log(Number.isFinite('20')); // false

// Math

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2 cubic root

// Max
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// Min
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// PI
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// Random
console.log(Math.trunc(Math.random() * 6) + 1); // value between 1 and 6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));


// Rounding
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.9)); // -24

// Rounding decimals
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35

// remainder operator

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3); // 1
console.log(8 / 3); // 8 = 2 * 3 + 2

// even
console.log(6 % 2); // 0
console.log(6 / 2);

// odd
console.log(7 % 2); // 1
console.log(7 / 2);

// function
const isEven = n => n % 2 === 0;

console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

labelBalance.addEventListener('click', function() {
  [...document.querySelectorAll('.movements__row')].forEach(function(row, i) {
    // 0, 2, 4, 6
    if(i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if(i % 3 === 0) row.style.backgroundColor = 'blue';
  });
})

// numeric sepearator
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //287460000000

const priceCents = 345_99;
console.log(priceCents); //34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

// BigInt

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(454564545446546545646546545646545n);
console.log(BigInt(45456));

// Operations
console.log(10000n + 10000n); //20000n

// Mixing bigint and numbers
const huge = 21215454812312123444n
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == '20'); // true

// divisions
console.log(10n / 3n);
console.log(10 / 3);

// Dates
//constructor
const now = new Date();
console.log(now); // Sun Feb 04 2024 13:01:37 GMT-0300 (Argentina Standard Time)

// parse date from a string
// not so reliable, ok if it is JS
console.log(new Date('Feb 04 2024 13:01:37')); // Sun Feb 04 2024 13:01:37 GMT-0300 (Argentina Standard Time)
console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT-0300 (Argentina Standard Time)
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 18:31:17 GMT-0300 (Argentina Standard Time)

// parse date from array
console.log(new Date(2037, 10, 19, 15, 23, 5)); // date is 0 based,  Thu Nov 19 2037 15:23:05 GMT-0300 (Argentina Standard Time)
// js will also autocorrect the date
console.log(new Date(2037, 10, 31)); //Tue Dec 01 2037 00:00:00 GMT-0300 (Argentina Standard Time)

// from unix time - pass number
console.log(new Date(0)); // Wed Dec 31 1969 21:00:00 GMT-0300 (Argentina Standard Time)
// convert from day to milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sat Jan 03 1970 21:00:00 GMT-0300 (Argentina Standard Time)

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 - number of day
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T18:23:00.000Z
console.log(future.getTime()); // unix timestamp: 2142267780000

future.setFullYear(2040);
console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // 2142267780000

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // in days. Abs to avoid negative numbers

const days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days);

// numbers intl
const option = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false
};

const num = 3884764.23;
console.log('US: ', new Intl.NumberFormat('en-US', option).format(num)); //  3,884,764.23 mph
console.log('Germany: ', new Intl.NumberFormat('de-DE', option).format(num)); // 3.884.764,23 mi/h
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, option).format(num)
); //  3,884,764.23 mi/h

// setTimeout
const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...'); // executes first

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);
*/
