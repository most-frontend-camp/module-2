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
console.log(player.hobbies[1]);
player.age = 30;
