function isInRange(number, range){
    if(number >= range.min && number <= range.max) {
        return true;
    } else {
        return false;
    }
}


// 4 - number
// 5 - range

console.log(isInRange(4, {min: 0, max: 5})) // true

console.log(isInRange(4, {min: 4, max: 5})) // true

console.log(isInRange(4, {min: 6, max: 10})) // false

console.log(isInRange(5, {min: 5, max: 5})) // true