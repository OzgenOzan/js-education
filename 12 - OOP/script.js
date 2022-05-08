"use strict";
/*
const Person = function (first, birth) {
  this.first = first;
  this.birth = birth;
};

const ozan = new Person("Ozan", 1995);

console.log(ozan);

// 1. A new and empty object is created
// 2. function is called, and this = {}
// 3. {} linked to the prototype
// 4. function automatically returns {}

const emir = new Person("Emir", 1996);
const sevgi = new Person("Sevgi", 1993);

console.log(emir, sevgi);

// const gizem = Person("Gizem", 1995);
// console.log(gizem); // this keyword is undefined error!!!

// Prototypes
// console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birth);
};

ozan.calcAge();

console.log(ozan.__proto__ === Person.prototype); // .prototype = .prototypeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(ozan.species);

console.log(ozan.hasOwnProperty("first"));
console.log(ozan.hasOwnProperty("species")); // F
console.log(ozan.__proto__.hasOwnProperty("species")); // T

console.log(Person.prototype.__proto__);

// 1st coding challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 110);
const mercedes = new Car("Mercedes", 100);
console.log(bmw, mercedes);

bmw.accelerate();
mercedes.brake();
*/
