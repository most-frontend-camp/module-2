# Lecture2

## Arrays


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