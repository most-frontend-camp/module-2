// for Each
const fruits = ['apple', 'banana', 'orange', 'pine', 'pineapple'];

// some
const hasFruitWithP = fruits.some(fruit => fruit[0] === 'p');
const hasFruitWithC = fruits.some(fruit => fruit[0] === 'c');
console.log(hasFruitWithP);
console.log(hasFruitWithC);

// every
const pruits = ['papple', 'panana', 'pange', 'pine', 'pineapple'];

const hasPruitWithP = pruits.every((pruit) => pruit[0] === 'p');
console.log(hasPruitWithP);
// const hasFruitWithP = pruits.some(pruit => pruit[0] === 'p');

