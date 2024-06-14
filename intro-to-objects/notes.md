# Objects

Коллекция ключей их значений и они нужны для хранения информации.

### Как создать объекты
Как создать пустой объекты
```javascript
let user = {};
let user = new Object();
```
Создать объект и потом присвоить свойства
```js
let person = {};
person.firstName = 'Bruce';
person.lastName = 'Wayne';
person.age = 45;

console.log(person);
```
Создаем с литералами объекта
```js
let person2 = {
firstName: 'Bruce',
lastName: 'Wayne',
age: 35,
}
console.log(person2);
```

Массивы тоже объекты, как и функции. 
У объектов есть свойства.
```js
console.log(typeof [1, 2, 3]);
function sum(a, b) {
return a + b;
}
console.log(typeof sum==='function');
```
В примере ниже мы создали объект person, который имеет четыре свойства: name, age, hobbies и sayHello.
```js
const person = {
name: 'Hernandez',
age: 25,
hobbies: ['reading', 'dancing'],

    sayHello: function() {
        console.log(`Hello, ${person.name}!`);
    },
}
console.log(person["age"]);
console.log(person.hobbies[1]);

// Свойства можно удалять изменять и добавлять
person.age = 23;
person.height = 123;
console.log(person);
delete person.sayHello();
console.log(person);
```


```javascript
for (const personKey in person) {
    console.log(`Key is ${personKey}, my value of key is ${person[personKey]}`);
}

// Key is name, my value of key is Hernandez
// Key is age, my value of key is 25
// Key is hobbies, my value of key is reading,dancing
// Key is sayHello, my value of key is function() { console.log(`Hello, ${person.name}!`);}

```

Свойства объекта выводятся в порядке:
1. индекса в возрастающем порядке
2. а потом свойства в порядке их создания
```js
const obj = {};

obj[2]= 'two';
obj[1]= 'one';
obj['name'] = 'Bruce';
obj['age'] = 23;
obj[3]= 'three';
obj[4]= 'four';


for (const key in obj) {
console.log(key + ' ' + obj[key]);
}
```
В JavaScript есть встроенные типы объектов, такие как Array, Date, Function, Math и другие. 
Также пользовательские типы объектов, которые мы можем создавать с помощью функций конструкторов или метода Object.create.
```js
const arr = [1, 2, 3];

console.log(arr.length);
console.log(arr.push(4));

// Array
// Date
// Function
// Math
const date = new Date();
console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
```