# Objects

Зачем объекты нужны?

Для хранить значения
Создавать более сложные структуры данных
Создаются при помощи списка свойства

```js
let user = new Object();

let user  = {}; // literal
```


### Object example


```js
let player = {
    name: 'Erling', // name - key / ключ, value - Erling
    age: 23, // age - key, value - 23
    hobbies: ['reading', 'dancing'],
    
    sayHello: function () {
            console.log('Hello World!' + this.name);
        }
    };
```

`name`, `age`, `hobbies` - свойства объекта
`sayHello` - метод объекта

const player ={
name: 'Erling', // name - key / ключ, value - Erling
age: 23, // age - key, value - 23
hobbies: ['reading', 'dancing'],

    sayHello: function () {
        console.log('Hello World! ' + this.name);
    },
};

console.log(player.name);
console.log(player["age"]);
console.log(player.hobbies[0]);
// console.log(player.sayHello());

player.height = 190;

player.age = 33;
console.log(player);
delete player.hobbies;
console.log(player);