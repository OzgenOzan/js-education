'use strict';

/*

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital is ${capitalCity}`;
}

let infoTurkey = describeCountry('Turkey', 80, 'Ankara');

console.log(infoTurkey);


function percentageOfPopFirst(country, population) {
    return `${country}'s population is ${population} million so it's about ${Number(population / 7900 * 100).toFixed(2)}% of the world population`;
}

let trInfo = percentageOfPopFirst('Turkey', 80);
let chinaInfo = percentageOfPopFirst('China', 1441);
let finlandInfo = percentageOfPopFirst('Finland', 11);


console.log(`${trInfo},
${chinaInfo},
${finlandInfo}.`);


let percentageOfPopSecond = function (country, population) {
    return `${country}'s population is ${population} million so it's about ${Number(population / 7900 * 100).toFixed(2)}% of the world population`
}

let trInfo = percentageOfPopSecond('Turkey', 80);
let chinaInfo = percentageOfPopSecond('China', 1441);
let finlandInfo = percentageOfPopSecond('Finland', 11);

console.log(`${trInfo},
${chinaInfo},
${finlandInfo}.`);

const percentageOfPopThird = (country, population) => `${country}'s population is ${population} million so it's about ${Number(population / 7900 * 100).toFixed(2)}% of the world population`

const trInfo = percentageOfPopThird('Turkey', 80);
const chinaInfo = percentageOfPopThird('China', 1441);
const finlandInfo = percentageOfPopThird('Finland', 11);

console.log(`${trInfo},
${chinaInfo},
${finlandInfo}.`);


const percentageOfWorld = function (population) {
    return Number(population / 7900 * 100).toFixed(2)
}

const describePopulation = function (country, population) {
    const per = percentageOfWorld(population)
    return `${country}'s population is ${population} million so it's about ${per}% of the world population`
}

console.log(describePopulation("Turkey", 80))



const calcAverage = (firstGameScore, secondGameScore, thirdGameScore) => Number((firstGameScore + secondGameScore + thirdGameScore) / 3).toFixed(2);

const averageDolphins = calcAverage(84, 94, 71)
const averageKoalas = calcAverage(10, 20, 49)

const checkWinner = function (averageDolphins, averageKoalas) {
    return (averageDolphins / averageKoalas) >= 2 || (averageKoalas / averageDolphins) >= 2 ? console.log(`${averageDolphins > averageKoalas ? "The team Dolphins" : "The team Koalas"} wins with ${averageDolphins} vs. ${averageKoalas}`) : console.log("There is no winner 😿");
}

checkWinner(averageDolphins, averageKoalas)

const percentageOfPop = function (population) {
    return Number(population / 7900 * 100).toFixed(2)
}

const countryPopsInMıllions = [11, 20, 1441, 80]
console.log(countryPopsInMıllions)
console.log(countryPopsInMıllions.length === 4)

const percentages = [percentageOfPop(countryPopsInMıllions[0]), percentageOfPop(countryPopsInMıllions[1]), percentageOfPop(countryPopsInMıllions[2]), percentageOfPop(countryPopsInMıllions[3])]

console.log(percentages)



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);



const myCountry = {
    countryName: "Turkey",
    capital: "Ankara",
    language: "Turkish",
    populationInMillions: 80,
    neighbours: ["Bulgaria", "Greece", "Georgia", "Iraq", "Syria", "Iran"],

    describe: function () {
        return `${this.countryName} has ${this.neighbours.length} neighbouring countries, ${this.populationInMillions} millions of people and gets along quite well with ${this.neighbours[0]}`
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length != 0 ? false : true;
        return this.isIsland;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

console.log(myCountry);


// console.log(`${myCountry.countryName} has ${myCountry.neighbours.length} neighbouring countries, ${myCountry.populationInMillions + 2} millions of people and gets along quite well with ${myCountry.neighbours[0]}`);


const markDesc = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.valueBMI = this.weight / (this.height ** 2);
        return this.valueBMI
    }
};

const johnDesc = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.valueBMI = this.weight / (this.height ** 2);
        return this.valueBMI
    }
};

console.log(`${johnDesc.firstName} ${johnDesc.lastName}'s BMI is ${Number(johnDesc.calcBMI()).toFixed(2)} and it's ${markDesc.calcBMI() < johnDesc.calcBMI() ? "higher" : "lower"} than ${markDesc.firstName}'s BMI which is ${Number(markDesc.valueBMI).toFixed(2)}`);


for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting 💌`)
};

const countryPopsInMıllions = [11, 20, 1441, 80];
const percentageOfPop2 = []

const percentageOfPop = function (population) {
    return Number(population / 7900 * 100).toFixed(2)
};

for (let i = 0; i < countryPopsInMıllions.length; i++) {
    percentageOfPop2.push(percentageOfPop(countryPopsInMıllions[i]))
}

console.log(percentageOfPop2)

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// console.log(listOfNeighbours);
// console.log((listOfNeighbours[0])[0]);

for (let i = 0; i < listOfNeighbours.length; i++) {
    console.log(listOfNeighbours[i]);
    if (listOfNeighbours[i].length > 1) {
        for (let rep = 0; rep < listOfNeighbours[i].length; rep++) {
            console.log(`Neighbour: ${(listOfNeighbours[i])[rep]}`)
        }
    }
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [35, 45, 11, 110, 450, 250, 234, 653, 155, 405];
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(Number(bills[i]) + Number(tips[i]));
};

console.log(tips)
console.log(totals)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
let res;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

res = Number(sum) / Number(arr.length);

console.log(res);

*/
