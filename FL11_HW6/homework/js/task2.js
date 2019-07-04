const labels = 'a, b, c'.split(',');
const num = [];
let userInput;

do {
    userInput = prompt(`Enter ${labels[num.length]}: `);

    if (userInput === '' || isNaN(userInput)) {
        alert('It was not a number')
    } else if (userInput <= 0) {
        alert('Number must be greater than 0')
    } else {
        num.push(Number(userInput));
    }

} while (num.length <= 2 && userInput !== null);

let itsTriangle = num[0] + num[1] > num[2]
    && num[1] + num[2] > num[0]
    && num[2] + num[1] > num[0];

if (itsTriangle) {
    if (num[0] === num[1] && num[1] === num[2] ) {
        console.log('Equivalent triangle');
    } else if (num[0] !== num[1] && num[1] !== num[2] && num[2] !== num[0]) {
        console.log('Normal triangle');
    } else {
        console.log('Isosceles triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}