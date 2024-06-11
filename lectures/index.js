// перебор элементов

const player = {
    name: 'Harry',
    age: 31,
    teams: ['Bavaria', 'Tottenham'],
};

for (let key in player) {
    console.log(player[key]);
}