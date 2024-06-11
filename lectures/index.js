const fruits = ['apple', 'banana'];
const vegetables = ['potato', 'tomato'];
/*
const allBasket = fruits + vegetables;
console.log(allBasket);
const allBasketConcat = fruits.concat(vegetables);
console.log(allBasketConcat);
*/
const spreadBasket = [...fruits, ...vegetables];
console.log(spreadBasket);

const PotatoFruits = ['potato',...fruits];
console.log(PotatoFruits);

const fruitsBerries = [...fruits,'blueberry'];
console.log(fruitsBerries);
console.log(fruits);