"use strict";

/*

// Pay attention to constant's names

const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 249 * numPass) {
  // Old way to declaring default values
  // numPass = numPass || 1;

  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("ZB1003");
console.log(bookings);

createBooking("ZB1003", 2, 498);
createBooking("ZB1003", 5);
createBooking("TK 4055", undefined, 999);

--

const flight = "ZB1003";
const ozan = {
  name: "Ozan Ozgen",
  passport: 123654789,
};

const checkIn = function (flightNum, passenger) {
  // you can't change a primitive data type in a function / method like this:
  // flightNum = "TK4045";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 123654789) {
    alert("Successfully Checked in");
  } else {
    alert("Wrong Passport! 😠");
  }
};

// checkIn(flight, ozan);
console.log(flight);
console.log(ozan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(ozan);
checkIn(flight, ozan);

--

const removeSpaces = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const wordTransformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

wordTransformer("js is the best!", upperFirstWord);
wordTransformer("js is the best!", removeSpaces);

const high5 = function () {
  console.log("👋");
};

// JS callback functions
document.body.addEventListener("click", high5);
["Ozan", "Sevgi", "Emir"].forEach(high5);

--


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Ozan");
greeterHey("Sevgi");

greet("Merhaba")("Ozan");

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Selam")("Ozan");

*/

const airAlbania = {
  airline: "Air Albania",
  iataCode: "ZB",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airAlbania.book(1003, "Ozan Ozgen");
airAlbania.book(1005, "Sevgi Borazan");
console.log(airAlbania.bookings);

const thy = {
  name: "Türk Havayolları",
  iataCode: "TK",
  bookings: [],
};

// Older study, continued from the begining at the top

/*
const bookings = [];

const createBooking = function (flightNum, numPass = 1, price = 199 * numPass) {
  // Old way for default values
  // numPass = numPass || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

createBooking("Deneme123");
createBooking("Deneme123", 3);
createBooking("Deneme123", 5, 300);
createBooking("Deneme123", undefined, 400);

const flight = "Deneme456";
const ozan = {
  name: "Ozan",
  passport: 987456123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "Deneme789";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 987456123) {
    alert("Checked In");
  } else {
    alert("Wrong Passport!");
  }
};

// checkIn(flight, ozan);

// console.log(flight);
// console.log(ozan);

// Manipulating primitives vs objects
// const flightNum = flight;
// const passenger = ozan;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(ozan);
checkIn(flight, ozan);

// JS doesn't have passing by reference, has passing by value


const removeSpaces = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function
const wordTransformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

wordTransformer("JavaScript is the best!", upperFirstWord);

wordTransformer("JavaScript is the best!", removeSpaces);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

greet("Selam")("abi");

const greetHello = greet("Hello there");
greetHello("Ozan");
greetHello("General Kenobi");


// Do the same with arrow functions
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Hello")("Ozan");


const thy = {
  airline: "thy",
  iataCode: "TK",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

thy.book(123, "Ozan Özgen");
thy.book(456, "Emir Güzel");
console.log(thy);

const anadoluJet = {
  airline: "Anadolu Jet",
  iataCode: "AJ",
  bookings: [],
};

const book = thy.book;

// Call method + spread operator
book.call(anadoluJet, 23, "Sevgi Borazan");

// Apply method
const flightData = [789, "Ahmet Karabulut"];
book.apply(anadoluJet, flightData);
console.log(anadoluJet);

book.call(anadoluJet, ...flightData);

// Bind method
const bookAJ = book.bind(anadoluJet);

bookAJ(321, "Ahmet Ozan");
console.log(anadoluJet);

// + preset with bind method
const bookAJ21 = book.bind(anadoluJet, 21);
bookAJ21("Ozan Özgen");

// + with event listeners
thy.planes = 300;
thy.buyPlane = function () {
  // console.log(this);

  this.planes++;
  console.log(this.planes);
};

// Doesn't work, becuase this keyword will always point to the attached element (in this case, the buy button)
document
  .querySelector(".buy")
  .addEventListener("click", thy.buyPlane.bind(thy));

// Partial application
const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

// addVAT = value => value + value * 0.23;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(500));
console.log(addVAT(100));

const addTax = (rate) => (value) => console.log(`${rate * value + value}`);

addTax(0.18)(100);


// Coding Challenge 1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write the number)`
    );
    console.log(answer);
    (typeof answer === "0" || "1" || "2" || "3") &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 4, 3] }, "string");

// poll.registerNewAnswer = function () {
//   let input = prompt(
//     `${this.question}\n${this.options.join("\n")}\n(Write the number)`
//   );

//   if (!isNaN(input) & (input <= 3) & (input != "") & (input != undefined)) {
//     this.answers[Math.trunc(input)]++;
//   } else if (Array.isArray(input)) {
//     console.log(input);
//   } else {
//     console.log("Not a proper answer");
//   }

//   poll.displayResults();
// };


// single shot function - Immediately Invoked Function Expressions (IIFE)

(function () {
  console.log("You recieve only one opportunity");
  const isPrivate = 23;
})();

console.log(isPrivate);

{
  const isPrivate = 23;
}

console.log(isPrivate);
*/
