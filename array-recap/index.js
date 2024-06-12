const names = ['Ann', 'Helen', 'Fox'];

/*
arr.push('Richard');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('Oleg');
console.log(arr);
*/

// console.log(typeof []); // массив - объект
// console.log(Array.isArray(names));
const ages =[1, 2, 3, 24, 25, 6, 7];

function checkChildren(age) {
    return age > 18;
}

// const adult = ages.findIndex(checkChildren);
// console.log(adult);

// const ages =[1, 2, 3, 24, 25, 6, 7];
// indxe =     [0, 1, 2, 3, 4, 5, 6]


const triple = [127, 141, 454, 296, 489];

function findEvenNumber(item) {
    return item % 2 === 0;
}

const evenNumber = triple.findIndex(findEvenNumber);
console.log(evenNumber);
console.log(triple[evenNumber]);
// find even number, save the number, exit from loop

let index = -1;

for (let i in triple) {
    const number = triple[i];
    if(number % 2 === 0) {
        index = i;
        break
    }
}

console.log(index);
// console.log(triple[index]);

