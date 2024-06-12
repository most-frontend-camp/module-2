const number = 0;

if (number > 0) {
    console.log('Enter the number');
    console.log(`${number} is positive`);
} else if(number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`${number} is zero`);
}

const role = 'Administrator2';

if (role === 'Administrator') {
    console.log(`${role} is administrator`);
    console.log(`You are signed in`);
} else {
    console.log(`${role} is not administrator`);
}

const isGuest = false;
const isAdmin = true;

if (isAdmin) {
    console.log(`Role is validating`);
    console.log(`You are signed in`);
} else if(isGuest){
    console.log(`${role} is guest`);
} else {
    console.log(`${role} is not administrator`);
}


const ten = 3; // from  0 to 9
const message = (ten < 9) ? "It is a digit" : "It is not a digit";
console.log(message);

// several `?` operators
const month = 7;

const season =
    month === 12 || month < 3 ? 'Winter'
        : month < 6 ? 'Spring'
            : month < 9 ? 'Summer'
                : 'Fall';

console.log(season);

s