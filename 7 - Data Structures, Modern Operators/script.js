"use strict";

// // Destructuring arrays
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replace(/_/g, " ").trim()} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (starterIndex, mainIndex, time, address) {
    console.log(starterIndex, mainIndex, time, address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your pasta with these ingredients; ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};

// const guestsFirst = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guestsFirst);

// const guestsSecond = restaurant.numGuests || 15;
// console.log(guestsSecond);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// Functions with rest operator

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// const x = [23, 7, 4];
// add(...x);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching places of variables in an array old style

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// ... new style
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

*/
// Coding Challenge #1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// let counter = 0;
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");

//   for (const row of rows) {
//     counter++;
//     const [first, second] = row.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output, "✅".repeat(counter));
//   }
// });

// const scorers = {};

// for (let x of game.scored) {
//   scorers[x]++ || (scorers[x] = 1);
// }

// console.log(scorers);

// Coding Challenge 3

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const arrTemp = [...gameEvents];
// console.log(arrTemp);

// let arrSet = new Set();

// for (const [key, value] of arrTemp) {
//   arrSet.add(value);
// }
// console.log(arrSet);

// const events = [...new Set(arrSet)];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`Every ${90 / gameEvents.size} minutes an event happened`);

// for (const [min, event] of gameEvents) {
//   console.log(
//     `${min < 45 ? "First Half" : "Second Half"} / ${min}th minute: ${event}`
//   );
// }

// Coding Challenge 2
// for (const [i, scorer] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1} is scored by ${scorer}`);
// }

// console.log(`Odd of victory for ${game.team1}: ${Object.values(game.odds)[0]}
// Odd of victory for draw: ${Object.values(game.odds)[1]}
// Odd of victory for ${game.team2}: ${Object.values(game.odds)[2]}`);

// // with classic usage of for loop
// let sum = 0;

// for (let it = 0; it < Object.values(game.odds).length; it++) {
//   sum += Object.values(game.odds)[it];
// }

// console.log(Number(sum / Object.values(game.odds).length));

/*
console.log("---1st Task---");

const players1 = game.players[0];
const players2 = game.players[1];
// or...
// const [players1, players2] = game.players

console.log(players1);
console.log(players2);

console.log("---2nd Task---");

const gk1 = game.players[0][0];
const fieldPlayers1 = [];

for (let i = 1; i < players1.length; i++) {
  fieldPlayers1[i - 1] = players1[i];
}
// or...
// const [gk, ...fieldPlayers] = players1;

console.log(gk1);
console.log(fieldPlayers1);

console.log("---3rd Task---");

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

console.log("---4th Task---");

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

console.log("---5th Task---");

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;
// or...
// const {
//   odds: {team1, x: draw, team2},
// } = game;

console.log(team1, draw, team2);

console.log("---6th Task---");

const printGoals = function (...players) {
  console.log(`${players} has scored a goal!`);
  console.log(`${players.length} goals has been scored...`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

console.log("---7th Task---");

team1 < team2 && console.log("First team is likely to win");
team1 > team2 && console.log("Second team is likely to win");

// console.log(...game.players[0]);
// console.log(game.players.length);
*/
