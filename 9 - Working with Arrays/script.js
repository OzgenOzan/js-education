"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Minimalist Banking (ATM)

// Accounts
const account1 = {
  owner: "Ozan Özgen",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Sevgi Borazan",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Emir Güzel",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Ferhat Kayran",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Labels => Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Functions
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outgoings = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outgoings)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// Usernames are the lower case initials of the account owner's names
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Event handler - Login Process
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    // Assignment operators work from right to left !!
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentAccount.balance &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputClosePin.value = inputCloseUsername.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE PART

// Test Data for functions
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*

let arr = ["a", "b", "c", "d", "e"];
// Slice -> doesn't mutate the original array
// first letter included, last one is excluded
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
// -1 is the last item of an array
console.log(arr.slice(1, -2));
// slice and spread operator give the same outcome
console.log(arr.slice());
console.log([...arr]);

// Splice -> mutates the original array and second parameter states the delete count
console.log(arr.splice(2));
// arr.splice(-1) -> deletes the last item in an array
console.log(arr);

// Reverse -> mutates the array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// Concat
const first10Letters = arr.concat(arr2);
console.log(first10Letters);
console.log([...arr, ...arr2]);

// Join creates string

// at method... Also works on strings
const arr = [23, 45, 67];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// for of vs. forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// break won't work on forEach loop
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// First coding challenge for working with arrays lecture
const dataJulia1 = [3, 5, 2, 12, 7];
const dataKate1 = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia = dogsJulia.slice(1, -2);
  // console.log(correctedDogsJulia);
  const concatDogs = correctedDogsJulia.concat(dogsKate);

  concatDogs.forEach(function (dogs, i) {
    const type = dogs < 3 ? "a puppy 🐣" : "an adult 🐕‍🦺";

    console.log(`Dog number ${i + 1} is ${type} and it is ${dogs} years old`);
  });
};
checkDogs(dataJulia1, dataKate1);

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => Math.trunc(mov * eurToUsd));
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(Math.trunc(mov * eurToUsd));
}
console.log(movementsUSDfor);

const movementsDesc = movements.map(
  (mov, i) =>
    `Transaction ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementsDesc);


const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter((mov) => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);

// const globalBalance = movements.reduce(function (acc, mov) {
//   return acc + mov;
// }, 0);
const globalBalance = movements.reduce((acc, mov) => acc + mov, 0);

console.log(globalBalance);

// Maximum value

const movMax = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(movMax);

// 2nd coding challenge
const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((humanAge) => humanAge > 18);
  const filter = humanAges.reduce(
    (acc, humanAge, i, arr) => acc + humanAge / arr.length,
    0
  );

  console.log(humanAges, adults, filter);

  return filter;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);


const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

// Coding challenge 3
const calcAverageHumanAge = function (ages) {
  const humanAges = ages
    .map((age, i, arr) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


// find method returns the first element (not array)

console.log(accounts);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);

let arr = [];

for (const account of accounts) {
  if (account.owner === "Jessica Davis") {
    arr = account;
    break;
  }
}

console.log(arr);


// Looks for Equal value
console.log(movements);
console.log(movements.includes(-130));

// looks for a condition
console.log(movements.findIndex((mov) => mov === -130));
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
console.log(movements.every((mov) => mov !== 0));


// flat & flatMap
const arr = [[1, 2, 3], [4, 5], 6, 7];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5]], 6, 7];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map((acc) => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();

const allMovements = accounts.flatMap((acc) => acc.movements);
console.log(allMovements);
console.log(allMovements.reduce((acc, mov) => acc + mov, 0));

// String sorting (mutates)
const owners = ["Ozan", "Emir", "Sevgi", "Devrim"];
console.log(owners.sort());
// Numbers
// return < 0, A, B
// return > 0, B, A
console.log(movements);
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     }
//     if (b > a) {
//       return -1;
//     }
//   })
// );
console.log(movements.sort((a, b) => a - b));


// Fill
const x = new Array(9);
x.fill(1, 3);
console.log(x);

x.fill(99, 7, 9);
console.log(x);

// Array.from
const y = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
console.log(y);

const z = Array.from({ length: 13 }, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => el.textContent.replace("€", "")
  );

  console.log(movementsUI);
});

// Practice
const bankDepositsum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositsum);

// const depositMoreThan1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov >= 1000).length;
const depositMoreThan1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(depositMoreThan1000);

const sumOfEverything = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, mov) => {
      // mov > 0 ? (sums.deposits += mov) : (sums.withdrawals += mov);
      sums[mov > 0 ? "deposits" : "withdrawals"] += mov;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(sumOfEverything);


const convertTitleCase = function (title) {
  const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with", "at"];

  const titleCase = title
    .toLocaleLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");
  return titleCase;
};
console.log(convertTitleCase("this is a nice title or not"));
console.log(convertTitleCase("We arE participating In a programMinG cOurse"));

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const calcPortion = function (dogs) {
  dogs.forEach(function (dog) {
    dog.portion = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
calcPortion(dogs);
console.log(dogs);
/*
// const howMuchEats = function (dogs) {
//   const sarahDog = dogs.find((el, i, arr) => el.owners.includes("Sarah"));
//   sarahDog.portion > sarahDog.curFood
//     ? console.log("Sarah's dog eats too little")
//     : console.log("Sarah's dog eats too much");
// };
// howMuchEats(dogs);

const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

const howMuchEats = function (dogs) {
  const curDog = dogs.map((cur) =>
    cur.portion > cur.curFood
      ? ownersEatTooLittle.push(cur)
      : ownersEatTooMuch.push(cur)
  );
};
howMuchEats(dogs);
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

console.log(
  ownersEatTooLittle.flatMap((acc) => acc.owners).join(", ") +
    "'s dogs are eating too little!",
  ownersEatTooMuch.flatMap((acc) => acc.owners).join(", ") +
    "'s dogs are eating too much!"
);

console.log(dogs.some((dog) => dog.curFood === dog.portion));

const checkEatOkay = (dog) =>
  dog.curFood > dog.portion * 0.9 && dog.curFood < dog.portion * 1.1;

console.log(dogs.some(checkEatOkay));

console.log(dogs.filter(checkEatOkay));
*/

const dogsCopy = dogs.slice().sort((a, b) => a.portion - b.portion);
console.log(dogsCopy);
