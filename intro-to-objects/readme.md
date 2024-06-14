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

