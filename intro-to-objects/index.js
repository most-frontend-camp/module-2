const obj = {};
obj.number = 477;
// console.log(obj);

obj[''] = 'empty';
// console.log(obj);
obj['1'] = 'one';
obj['salem alem'] = 'greeting';
// console.log(obj);


// получить доступ к свойствам объекта с индексами и здесь мы применяем квадратные скобки
/*console.log(obj['']);
console.log(obj['1']);
console.log(obj['salem alem']);*/


// in - помогает определить существует ли свойство в объекте
const person ={
    name: 'Arman',
    age: 30,
    isHappy: true,
    city: 'Almaty',
};

// console.log('name' in person);
// console.log('age' in person);
// console.log('height' in person);

for (let key in person) {
    // console.log(key + ': ' + person[key]);
}

// for in - применяем когда хотим перебрать свойства объекта


// свойства не имеют порядка
// digit numbered indexes, then the way objects are created

const objIndetex = {};
objIndetex[2] = 'two';
objIndetex[1] = 'one';
objIndetex['name'] = 'Dasha';
objIndetex[3] = 'three';
objIndetex['age'] = 23;

for (let key in objIndetex) {
    console.log((key) + ': ' + objIndetex[key]);
}


