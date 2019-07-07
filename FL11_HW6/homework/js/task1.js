const totalNumbers = 6;
const labels = 'a1,a2,b1,b2,c1,c2'.split(',');
const a1 = 0, a2 = 1, b1 = 2, b2 = 3, c1 = 4, c2 = 5;
const two = 2;
const numbers = [];

do {
  let userInput = prompt(`Enter ${labels[numbers.length]}: `);

  if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
    console.log('Input is not valid !');
    break;
  }
  numbers.push(Number(userInput));

} while (numbers.length < totalNumbers);

if (numbers.length === totalNumbers) {
  console.log((numbers[a1] + numbers[b1]) / two === numbers[c1] &&
              (numbers[a2] + numbers[b2]) / two === numbers[c2]);
}