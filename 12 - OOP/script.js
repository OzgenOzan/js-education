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

const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ali = Object.create(PersonProto);
console.log(ali);

ali.name = "ali";
ali.birthYear = "1971";
ali.calcAge();
console.log(ali.__proto__ === PersonProto);

// 2nd coding challange

// get speedUS() {
//   console.log(`${this.speed / 1.6} mi/h`);
// }

// set speedUS(speedInMiles) {
//   this.speed = speedInMiles * 1.6;
// }
class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  set accelerate(acc) {
    this.acc = acc;
  }

  get accelerate() {
    this.acc ? (this.speed += this.acc) : (this.speed += 10);
    console.log(`${this.brand} is going at ${this.speed} km/h`);
    return this.speed;
  }

  set brake(dec) {
    this.dec = dec;
  }

  get brake() {
    this.dec ? (this.speed += this.dec) : (this.speed -= 5);
    console.log(`${this.brand} is going at ${this.speed} km/h`);
    return this.speed;
  }
}

const ford = new CarCl("Ford", 120);
ford.accelerate;
ford.accelerate = 30;
ford.accelerate;
console.log(ford);

// ford.speedUS;
// ford.speedUS = 100;
// console.log(ford.speed);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(Number(`${new Date().getFullYear() - this.birthYear}`));
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} and studying ${this.course} currently`);
};

const emir = new Student("Emir", 1996, "Pharmacy");
console.log(emir);
emir.introduce();
emir.calcAge();

Student.prototype.constructor = Student;

console.log(emir.__proto__);

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.brand} is going at ${this.speed} km/h, and with ${this.charge}% of charge`
  );
};

EV.prototype.constructor = EV; // Only works in firefox

console.dir(EV);

const tesla = new EV("Tesla", 100, 24);
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
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

  static hey() {
    console.log("Hey there!");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Mandatory first action
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `I am ${this.fullName} and i am studying ${this.course} currently`
    );
  }
}

const fatma = new StudentCl("Fatma Zeybek", 2000, "Computer Science");
fatma.introduce();

class ElemCl extends StudentCl {
  constructor(fullName, birthYear, course, grade) {
    super(fullName, birthYear, course);
    this.grade = grade;
  }
}

const ali = new ElemCl("Ali Zeybek", 2015, "Math", "Elementary School");

const PersonProto = {
  calcAge() {
    console.log(Number(`${new Date().getFullYear() - this.birthYear}`));
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ali = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `I am ${this.firstName} and i am studying ${this.course} currently`
  );
};

const veli = Object.create(StudentProto);
// console.dir(veli.__proto__);
veli.init("Veli Zeybek", 2000, "Computer Science");
veli.introduce();
veli.calcAge();

// MDN Doc for private class features
class ClassWithPrivateField {
  #privateField;

  constructor(name) {
    this.#privateField = 42;
    this.name = name;
  }

  init() {
    console.log(this.#privateField);
  }
}

class SubClass extends ClassWithPrivateField {
  #subPrivateField;

  constructor(name) {
    super(name);
    this.#subPrivateField = 23;
  }
}

const test = new SubClass("ozan");
console.log(test.name);
console.log(test.#subPrivateField);
// console.log(test);


class Account {
  // Public fields (in all instances)
  locale = navigator.language;

  // Private fields (in all instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    // console.log("Inside constructor");
  }

  // Public methods
  getMovs() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // to enable chaining
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    this.#approveLoan(val)
      ? this.deposit(val)
      : console.log("No loans for you");
    return this;
  }

  // Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Ozan", "TL", 1111);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

acc1.deposit(250).withdraw(140).requestLoan(1000);
console.log(acc1);
*/
