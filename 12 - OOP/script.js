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

// ES6 Classes

// Class Expressions
// const PersonCl = class {};

// Class Decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    name.includes(" ")
      ? (this._fullName = name)
      : alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

// PersonCl.prototype.greet = function () {
//   console.log(`Welcome back ${this.fullName}`);
// };

const sevgi = new PersonCl("Sevgi Borazan", 1993);
console.log(sevgi.fullName);
console.log(sevgi);
sevgi.calcAge();
// sevgi.greet();
console.log(sevgi.age);

// Classes are not hoisted, classes are some kind of special functions, classes are executed in strict mode

const account = {
  owner: "ozan",
  movs: [300, 400, 100, 15],

  get latest() {
    return this.movs.slice(-1).pop();
  },

  set latest(mov) {
    this.movs.push(mov);
  },
};

console.log(account.latest);

account.latest = 90;
console.log(account.movs);
*/
