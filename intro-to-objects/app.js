let user = {
    name: 'Batman',
    isHappy: true,
    owner: {
        name: 'Bruce',
        isHappy: true,
    },
};

console.log(user.name);
console.log(user.owner.name);
delete user.name;
console.log(user);
delete user.isHappy;
console.log(user);
