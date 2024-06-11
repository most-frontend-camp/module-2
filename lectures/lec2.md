# Lecture2

## Arrays, Loops, Objects

```javascript
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 'four', false, true];
let array3 = ['first', 'second', 'three'];
let array4 = [];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
```

можно получить массив, один из элементов которого является другой массив
также можно обращаться к элементу вложенного массива
```javascript
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 'four', false, true];
let array3 = ['first', 'second', 'three'];

console.log(array1[0]);
console.log(array1.length);

array1[5] = array2;
console.log(array1);
console.log(array1[5][5]);
```

### Array methods
push - добавляет элемент(ы) в конец массива, возвращает текущую длину массива
pop - удаляет элемент с конца массива, возвращает этот самый элемент:
shift - удаляет элемент из начала массива, возвращает этот самый элемент:
unshift - Добавляет элемент(ы) в начало массива
```javascript
let array1 = [1, 2, false, 4, 5, false];
// console.log(array1.indexOf(false));
let arr = [];

arr.push(1, 2, 3);
arr.push(111);
// arr.pop(111);
console.log(arr);
// arr.shift();
arr.unshift(111);
console.log(arr);
```
### `Splice`
```javascript
let array =['abc', 'def', 'xyz'];
console.log(array);

array.splice(1,1);
console.log(array);
```
## Loops

1. for
2. while

iteration

как выглядит цикл while?
```javascript
let i  = 0;

while (i < 5) {
    console.log(i);
    i++;
    // i = i + 1
    // it is called an increment
}
```

как выглядит цикл for?

```javascript
for (начало; условие; шаг) {
// ... тело цикла ...
}
```
Example
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## Loops in arrays

```javascript
let teamsUCL = ['Real', 'Borussia', 'City', 'PSG'];
for (let i = 0; i < teamsUCL.length; i++) {
    console.log(teamsUCL[i]);
}
```


```javascript
let array = [];
for (let i = 1; i <= 4; i++) {
    array.push(i);
}
console.log(array);
```

### Array another methods

Other methods:
1. splice - добавляет и удаляет элементы из массива в произвольном месте - `start`, `deleteCount`, `item1`, `item2`
2. slice - вырезает часть массива и возрв-т новый массив с этими элементами

```javascript
const fruits = ['apple', 'banana', 'orange', 'pear', 'pineapple'];

const removed = fruits.splice(
1, // начинать с индекса банан
2 // удалять элементы banana, orange
);

console.log(removed);
console.log(fruits);

fruits.splice(
2, // начинать с индекса 2 где есть pineapple
0, // ничего не удаляем
'kiwi', 'selderey' // вставляем 2 элемента - киви, сельдерей
);

console.log(fruits);
```

### slice

```javascript
const fruits = ['apple', 'pear', 'orange', 'banana', 'pineapple'];
console.log(fruits);

const firstTwo = fruits.slice(
0, // start, индекс с которого мы режем элементы
2 // end, на котором заканчивается вырезание элементов
);
console.log(firstTwo);

const citrus = fruits.slice(2,3);
console.log(citrus);

const tropical = fruits.slice(2);
console.log(tropical);

```

* splice, slice - похожи
* splice changes current array
* slice return new array without changing beginning array
### `Concat`, `...spread` operator

```javascript
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
```

### Arrays advanced or Objects

Объекты для хранения коллекций значений в отличии от использования вложенных массивов.
```javascript
let books = [
'b1', 'Abay Zholy', 'Mukhtar Auezov', 4, 16893,
'b2', 'Моя жизнь', 'Джон Зойберг', 2, 8992,
];

for (let i = 1; i < books.length; i++) {
console.log('ID: ', books[i]);
console.log(books[i+1]);
console.log('Price: ', books[i+3]);
}

let bookIDs= ['b1', 'b2'];
let bookAuthors= ['Mukhtar Auezov', 'Джон Зойберг'];
let bookTitles= ['Abay Zholy', 'Моя жизнь'];
```

key-value
`
let user = new Object();
let user = {};
`

let person = {
name: "Bruce",
age: 32,
};

console.log(person['age']);
console.log(person['name']);
console.log(person.friends);
// в случае обращения к несуществующим полям JS возвращает нам undefined

Для перебора всех свойств объекта используется цикл for..in. Этот цикл отличается от изученного ранее цикла for(;;).
```javascript
let person = {
name: "Bruce",
age: 32,
isAdmin: true
};

for(let key in person) {
console.log(key);
console.log(person[key]);
}
```
