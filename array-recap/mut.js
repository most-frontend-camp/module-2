let fruits = ["Apple", "Orange", "Pear"];
let otherFruits = fruits;

fruits[0] = "Banana";

console.log(fruits); // ["Banana", "Orange", "Pear"]
console.log(otherFruits); // ["Banana", "Orange", "Pear"]
console.log(fruits === otherFruits);

let copiedFruits = [];

for (let i = 0; i < fruits.length; i++) {
    copiedFruits[i] = fruits[i];
}

fruits[1] = "Peach";

console.log(fruits); // ["Banana", "Peach", "Pear"]
console.log(copiedFruits); // ["Banana", "Orange", "Pear"]