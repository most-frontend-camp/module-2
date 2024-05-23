let person = {
    name: "Bruce",
    age: 32,
    isAdmin: true
};

for(let key in person) {
    console.log(key);
    console.log(person[key]);
}
