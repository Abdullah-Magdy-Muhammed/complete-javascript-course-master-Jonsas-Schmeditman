'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('i can drive');

function logger () {
    console.log('This is me Abdullah');
}
// invoke - running - calling 
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges}oranges`;
    return juice;
}
let fresh = fruitProcessor(5,55);
console.log(fresh);

function calAge1 (birthYear) {
    return 2037 - birthYear;
}
const age1 = calAge1(2015);
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(2018);
console.log(age2);

const calcAge3 = birthYear => 2037 - birthYear;
let age3 = calcAge3(2019);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `age is ${retirement} and name is ${firstName}`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(fruitProcessor(2, 3));

// Challenge #1 :
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinners = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphines Winners! ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koals Winners! ${avgKoalas} vs ${avgDolphins}`);
    } else{
        console.log(`No Team is being a winner!`);
    }
}
checkWinners(scoreDolphins, scoreKoalas);



const names = ['Ahmed','Ali','Ayman'];
console.log(names.length);
names[0] = 'eman';
console.log(names);

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1976, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);
console.log(age3);

const ages = [age1, age2, age3];
console.log(ages);

const names = ['micheal','steven','peter'];
names.push('dodo');
console.log(names);
names.unshift("emy");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);

console.log(names.includes('micheal'));
console.log(names.indexOf('steven'));
console.log(typeof(10-'10'));

// Challenge #2 :

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// Arrow Function:
//const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const bills =[125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length - 1])];

console.log(bills,tips);
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);


const abdullahInfo = {
    firstName: "Abdullah",
    lastName: "Magdy",
    age: 2037 - 2000,
    job: "Developer",
    friends: ['amr','khaled','youssef','ahmed']
};
console.log(abdullahInfo.age);
console.log(abdullahInfo['job']);


abdullahInfo.location = "Egypt";
abdullahInfo["twitter"] = "abdullahmagdii@twitter.com";
const interestedIn = prompt('What do you want about abdullahInfo bruh !?choose between firstName, lastName, age, job, friends');
if (abdullahInfo[interestedIn]) {
    console.log(abdullahInfo[interestedIn]);
}else {
    console.log('Wrong Request choose between firstName, lastName, age, job, friends');
}
// Challenge :
console.log(`abdullah has ${abdullahInfo.friends.length} friends and his friends name are ${abdullahInfo.friends}`);


const abdullahInfo = {
    firstName: "Abdullah",
    lastName: "Magdy",
    birthYear: 2000,
    job: "Developer",
    friends: ['amr','khaled','youssef','ahmed'],
    hasDriverLicense : true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
};
console.log(abdullahInfo.calcAge());


const abdullahInfo = {
    firstName: "Abdullah",
    lastName: "Magdy",
    birthYear: 2000,
    job: "Developer",
    friends: ['amr','khaled','youssef','ahmed'],
    hasDriverLicense : true,
    summary: function() {
        this.all = `this is me ${this.firstName} and birthYear is ${this.birthYear} my friend are ${this.friends} and my job is ${this.job}`;
        return this.all;
    }
};

console.log(abdullahInfo.summary());

const mark = {
    name: 'mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
const john = {
    name: 'john',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
mark.calcBMI();
john.calcBMI();
if (mark.BMI > john.BMI) {
    console.log(`mark's BMI is ${mark.BMI} heigher than john's BMI ${john.BMI}`);
} else if (john.BMI > mark.BMI) {
    console.log(`john's BMI is ${john.BMI} heigher than mark's BMI ${mark.BMI}`);
} else {
    console.log(' the two IBM is equal bruhh! ');
}

// for loop keeps running  while condition is TRUE;
for (let rep = 1; rep <= 10 ; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
const types = [];
const johnasArry = [
    'Johnas',
    'Schmedtmann',
    2037 - 1990,
    'teacher',
    ['micheal','peter','steven'],
    true
];

for (let i=0; i<johnasArry.length; i++) {
    console.log(johnasArry[i]);
    types[i] = typeof johnasArry[i]; 
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
    // second way to push data into array
    //ages.push(2037-years[i]);
};

console.log(ages);


// continue && break
const johnasArry = [
    'Johnas',
    'Schmedtmann',
    2037 - 1990,
    'teacher',
    ['micheal','peter','steven'],
    true
];

for (let i=0; i<johnasArry.length; i++) {
    if (typeof(johnasArry[i]) !== 'string') break;
    console.log(johnasArry[i], typeof johnasArry[i]);
}

const johnasArry = [
    'Johnas',
    'Schmedtmann',
    2037 - 1990,
    'teacher',
    ['micheal','peter','steven'],
    true
];

for (let i = johnasArry.length - 1; i >= 0; i--) {
    console.log(johnasArry[i]);
}
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum /arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));