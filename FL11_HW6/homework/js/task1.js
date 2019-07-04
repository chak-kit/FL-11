const labels = 'a1,a2,b1,b2,c1,c2'.split(',');
const numbers = [];
let userInput;

do {
    userInput = prompt(`Enter ${labels[numbers.length]}: `);

    if (userInput === '' || isNaN(userInput)) {
        alert('It was not a number. Try again!')
    } else {
        numbers.push(Number(userInput));
    }

} while (numbers.length <= 5 && userInput !== null);

let result = (numbers[0] + numbers[2]) / 2 === numbers[4] && (numbers[1] + numbers[3]) / 2 === numbers[5];
console.log(result);

