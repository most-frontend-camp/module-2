function sumValues(obj){
    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

// sum = 0
// sum = 0 + 100 + 160 + 130

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480