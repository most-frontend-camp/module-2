const divider = (a, b) => {
    if(b !== 0) {
        throw new Error("Divide error");
    }
    return a + b;
};

console.log(divider(2, 3));
console.log(divider(2, 1));