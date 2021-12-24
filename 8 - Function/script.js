"use strict";

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
