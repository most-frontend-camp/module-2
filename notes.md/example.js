// Arrays

let soccerTeams = [
    'Manchester City', // 0
    'Arsenal', // 1
    'Liverpool', // 2
    'Aston Villa' // 3
];

// index
/*
console.log(soccerTeams);
console.log(soccerTeams[0]);
console.log(soccerTeams[1]);*/

let dummyArray = [
    1, 2, 'three', 'four', true, false
];

// console.log(dummyArray);

dummyArray[2] = 3; // изменили элемент массива по индексу
// console.log(dummyArray);
// console.log(dummyArray.length);

// nested arrays

let hello = ['Good morning', 'Good afternoon', 'Good evening'];
console.log(hello);

let salem = [1, 2, 3];

salem[3] = hello;

console.log(salem);
console.log(salem[3][1]);

// Arrays methods
let digits = [1, 2, 3, 8, 7, 7, 9, 10, 11, 2, 13, 14, 15, 16];

console.log(digits.indexOf(1001));


