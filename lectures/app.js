// map
// filter
// sort
// reverse
// split join

const numbers = [2, 121323, 12, 110, 20];
// 4, 9, 36, 100, 400
const squares = [];

// map
const solutionMap = numbers.map(number => number*number);
console.log(solutionMap);

const fruits = ['apple', 'banana', 'orange', 'pear', 'pineapple'];
// let array to begin like Apple, Banana, ...

function capitalize(string) {
    const firstLetter = string[0];

    const rest = string.slice(1);

    return firstLetter.toUpperCase() + rest;
}

const solution =fruits.map(capitalize);
console.log(solution);
console.log(solution.reverse());
console.log(solution.sort());
console.log(numbers.sort());

const string = 'apple, banana, orange';
const answerString = string.split(',');
console.log(answerString);
const fruitsJoin = ['apple', 'banana', 'orange', 'pear', 'pineapple'];
console.log(fruitsJoin.join(','));



// Solution with `for-of`
/*
for (const number of numbers) {
    squares.push(number*number);
}
*/

// console.log(squares);

