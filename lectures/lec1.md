# Lecture1

Базовые понятия

## Как работает веб

Клиент посылает запросы, а сервер присылает ответы -> HTTP ответы сервера код ответа

### Что происходит когда мы переходим на страницу?

1. type url
2. запрос на сервер
3. на сервере обрабатывается скрипт и возвращает ответ
4. браузер получает html и js interprets the webpage
5. мы видим webpage и мы можем на сайте кнопки, делать действия


### Variables, data types
Переменные используются для хранения информации.
В JavaScript для создания переменной используется слово `let`.

```javascript
let number = 10;
console.log(number);
// number will result as 10
```

### Logical operators

```javascript
// declaration operator
let a = 10, b = 5;

// arithmetic operator
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
```

### Strings
В JavaScript текстовые данные называются строками.
```javascript
let helloKZ = 'Сәлем әлем';
let helloRu = 'Привет Мир';
let helloEng = 'Hello World';

console.log(helloKZ);
console.log(helloRu);
console.log(helloEng);
```
Мы можем подклеить значение переменной в конец строки с помощью оператора `+`. 

```
let almaSan = 10;
let text = "Алма саны: ";
console.log(text + almaSan);
console.log("Жинаған алма саны: " + almaSan);
```
ASCII таблица в которой есть символы.
Ниже код выведет `World` на новой строке
```
console.log('Hello\nWorld!')
```

### String methods
```javascript
let word = "Kazakhstan";
console.log(word.length);
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.substr(0,1));
console.log(word.substr(0,6));
console.log(word.substr(4,3));
console.log(word.substr(5,7));
console.log(word.includes("z"));
console.log(word.includes("x"));

let text = "tomatotomato";
console.log(text.includes("tomaz"));
console.log(text.includes("tomato"));
```

### Errors

ReferenceError
TypeError
SyntaxError
LogicalError

Неправильное имя или мы забыли определить переменную.
```javascript
let x = 1;
console.log(x + y);
// Uncaught ReferenceError: y is not defined
```

В примере ниже мы пытаемся вызвать метод includes у переменной. 
Значение переменной undefined , а у этого типа данных нет такого метода.
```javascript
let obj;
console.log(obj.includes());
// TypeError: Cannot read properties of undefined (reading 'includes')

```
Нарушение правил языка.
```javascript
let 1country = "Pandeya";
// SyntaxError: Invalid or unexpected token

```

Ошибка в нашей с вами логике.
```javascript
let x = "1";
let y = "2";
console.log(x+y);
```


