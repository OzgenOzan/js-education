'use strict';
/*
// JS - Fiil // CSS - sıfat // HTML - isim

// Assigment operatörleri

// x += 10// x = x + 10
// x *= 10 // x = x * 4
// x++ // x = x+1
// x-- // x = x-1

// x = 10 // tek değerli
// x = [10, 20, 30] // Array
// x = {
//     ilk: 10,
//     ikinci: 20,
//     üçüncü: 30,
// } // Object

let istek;
let gün = "salı";

// == / gevşek // 2 = "2"
// === / katı // 2 = 2, 2 != "2"

if (gün === "pzt") {
    istek = "kahve"
} else if (gün === "salı") {
    istek = "çay"
} else {
    istek = "su"
};

document.write(`Ozan ${istek} içmek istiyor`)


const country = "Turkey";
const continent = "Europe";
let population = "80";

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);

language = "Turkish";
console.log(language);

console.log(population / 2);
population++
console.log(population);

let populationFinland = '6';
let populationAvarage = '33';

console.log(population > populationFinland, population > populationAvarage)

let description = country + ' ' + 'is in' + ' ' + continent + ', ' + 'and its' + ' ' + population + ' ' + 'people speak Turkish'

console.log(description)

let descriptionNew = `${country} is in the ${continent}, and its ${population} million people speak Turkish`

console.log(descriptionNew)

/*

// ---------------------------------

let mass, height;

// for John

mass = 92;
height = 1.95;

let johnBMI = mass / height ** 2;

console.log(johnBMI);

// for Mark

mass = 78;
height = 1.69;

let markBMI = mass / height ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI is ${markBMI}, and it's higher than the John's which is ${johnBMI}`)
} else {
    console.log("John's BMI is higher than Mark's!")
}



// --------------------------

let numNeighbours;

numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

if (numNeighbours === 1) {
    console.log("You have 1 neighbour")
} else if (numNeighbours > 1) {
    console.log("You've more than 1 neighbour")
} else {
    console.log("You are living in an island")
}


// --------------------------

let countryPop;
let countryName;

countryPop = Number(prompt("What is your country's population in millions?"))
countryName = String(prompt("What is your country's name?"))

const isAboveAverage = countryPop < 33 ? "below average" : "above average"

console.log(`${countryName}'s population is ${countryPop} millions and it's ${isAboveAverage}`)


let bill = 100

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The total amount of your bill is ${bill} $, you should leave ${tip} $ as tip so just give ${bill + tip} $`)
*/
