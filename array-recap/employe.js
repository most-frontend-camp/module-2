const employees = [
    {name: 'Mary', department: 'IT', salary: 75_000},
    {name: 'Ivan', department: 'Sales', salary: 55_000},
    {name: 'Nick', department: 'IT', salary: 92_000},
    {name: 'Mary', department: 'Marketing', salary: 35_000},
]

// find a Mary from IT
// find
const task1 = employees.find((employee) =>
    employee.name === 'Mary' && employee.department === 'IT'
)

const task1b = employees.filter((employee) =>
    employee.name === 'Mary' && employee.department === 'IT'
)
console.log(task1);
// console.log(task1b);

// find someone whose salary more than 90K
const task2 = employees.find((employee) =>
    employee.salary > 90000
)
console.log(task2);

// check whether someone receives 50K+

const task3 = employees.every((employee) =>
    employee.salary > 10000
)
console.log(task3);

// Hint: find, some, every



// find a Mary from IT
// find someone whose salary more than 90K
// check whether someone receives 50K+

// Hint: find, some, every

