"use strict";
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
*/

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
