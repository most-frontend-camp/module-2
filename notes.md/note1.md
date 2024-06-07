# Module 2
## Lesson 1: 1. Introduction to JS part1: variables, primitives and objects

### Strings
Строки создаются при помощи двойных или одинарных кавычек (также есть ES6 template string).
```
let text = "Обычная строка";
let anotherText = 'Тоже строка';
let str = "012345";

```

А еще строки могут содержать специальные символы. 
Они позволяют нам легко добавлять в вывод новые строки или, например, смайлики/иконки.


```javascript
console.log( 'Привет\nstring!' );
```

Конкатенацией (она же «склейка»/объединение) строк называется операция, в результате которой мы из нескольких строк получаем одну итоговую.

### Strings methods

1. length
2. toLowerCase()
3. toUpperCase()
4. substring(start, end)
5. includes(substr)

### Naming conventions


```

// camelCase

let firstName = 'Clark';

// PascalCase

let FirstName = 'Superman';

// UPPER_SNAKE_CASE

const COUNTRY_CODE = '01010010';

// snake_case

const id_name = 'toyota';

```

// kebab-case

```javascript
const hero = {
    name: 'Bruce',
    nick: 'Batman',
    surname: 'Wayne',
    wealth: 1_000_000_000,
    background_color: 'red'
}
```

### Syntax Errors
В JS существует четыре основных типа ошибок:
1. ReferenceError; 
2. TypeError;
3. SyntaxError;
4. Logical error .

### Управляющие конструкции

```javascript
let age = 18;
if (age >= 18) {
    console.log('Доступ разрешен');
} else if (age > 21) {
    console.log('Вам даже в штатах можно все!');
} else if (age > 60) {
    console.log('Пенсия... хотя может быть и нет :)');
} else {
    console.log('Маловат еще');
}
```

### Equality operators

Большинство операторов сравнения знакомы нам еще из школьной программы:
— Больше/меньше: `a > b`, `a < b`.
— Больше/меньше или равно: `a >= b` , `a <= b`.
— Равно `a == b`. Для сравнения используется два символа равенства `'='`. Один символ `a = b` означал бы присваивание.
— `«Не равно»`. В математике он пишется как `≠ `, в JavaScript – знак равенства с восклицательным знаком перед ним `!=` .


### Logical operators

1. И, он же `AND`, он же `&&`;
2. ИЛИ, он же `OR`,он же `||`;
3. НЕ, он же `NOT`,он же `!`.


### Logical comparison
В JS мы можем получить boolean тип не только при операциях сравнения, но и в логическом контексте, таком как `if (value)`.
Все значения, которые интуитивно «пусты», становятся `false`. 

Их несколько:
* 0;
* Пустая строка;
* null;
* undefined;
* NaN.

### Loops

Остальное, в том числе и любые объекты – `true`.

В JavaScript существуют следующие операторы цикла:
— for — используется когда вы заранее знаете, сколько раз вам нужно что-
то сделать;

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
— while — используется когда вы не знаете, сколько раз нужно что-то
сделать.

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

