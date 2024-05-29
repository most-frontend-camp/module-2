# Lecture2

## Functions, Scope
В JavaScript есть функции. Это вынесенные кусочки кода, которые можно использовать повторно.
Функции очень похожи на переменные. 
Функцию сначала объявляют, а потом вызывают.

Назвать функцию можно как угодно:
```javascript
function showMessage() {
    console.log("Hello World!");
}
showMessage();
```
В функцию можно передавать параметры
```javascript
function showMessage(name) {
    console.log("Hello " + name);
    // console.log(`Salem ${name}`); Alternative way to interpolate strings
}

showMessage("Caesar");
// Hello Caesar
```

```javascript
function sum(a, b) {
    return a + b;
}

let result = sum(222, 3123213);
console.log(result);
// 3123435
function isPrime(n){
    for (let i = 2; i < n; i++) {
        if(n % i == 0) return "entered number is not prime";
    }
    return "number is not prime";
}
console.log(isPrime(3));
console.log(isPrime(33));
console.log(isPrime(17));
```


### Области видимости:
У переменной есть область видимости. Это тот код, который видит переменную и может получить к ней доступ.
Определяется блоком кода вокруг объявления переменной. 
Блоки кода обозначаются фигурными скобками.

```javascript
function greet() {
    console.log('Здравствуйте, ' + firstName + ' ' + lastName);
    console.log('Используя сайт, вы соглашаетесь с договором-офертой');
}
function checkUsers() {
    let firstName = 'Elon';
    let lastName = 'Musk';
    greet();
    firstName = 'Иван';
    lastName = 'Кукушкин';
    greet();
}
checkUsers();
```

Мы получим `ReferenceError: firstName is not defined`. 
```javascript
function sayMyName() {
    let name = 'Heisenberg';
    console.log(name);
}
let age = 53;
if (age > 50) {
    let message = 'Okay';
    console.log(message);
    sayMyName();
}
console.log(name);
console.log(message);

// Okay
// Heisenberg
// console.log(name);
// ReferenceError: name is not defined
```

ОБЛАСТЬ ВИДИМОСТИ — КОД КОТОРЫЙ ИМЕЕТ ДОСТУП ДО ПЕРЕМЕННОЙ.

```javascript
let age = 25;

function birthday(){
    let age = 23;
    console.log(age);
}

birthday();
birthday();
birthday();
```

```javascript
// Глобальная область

function foo1(){
// Локальная область 1
function foo2(){
// Локальная область 2
}
}

// Глобальная область
function foo3(){
// Локальная область 3
}

    // Глобальная область

```

В JavaScript есть только одна глобальная область. 
Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.
Переменные, объявленные внутри функций, становятся локальными для функции и рассматриваются в соответствующей локальной области. 
Каждая функция имеет свою область видимости. 
Одна и та же переменная может использоваться в разных функциях, поскольку они связаны с соответствующими функциями и не являются взаимно видимыми.

Переменные уровня блока JavaScript
В JavaScript ES6 появилась область видимости на уровне блоков с помощью ключевых слов let и const.

Переменные уровня блока доступны только внутри блока {}, в котором они определены, который может быть меньше области действия функции. 

Например,
```javascript
function display_scopes() {
// declare variable in local scope
let message = "local";

    if (true) {

        // declare block-level variable
        let message = "block-level";

        console.log(`inner scope: ${message}`);
    }

    console.log(`outer scope: ${message}`);
}

display_scopes();
// Result will be
// inner scope: block-level
// outer scope: local
```


