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