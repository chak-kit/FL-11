const labels = 'a,b,c'.split(',');
const a = 0, b = 1, c = 2;
const minSideValue = 0;
const sideCount = 3;
const sideValues = [];

do {
  let userInput = prompt(`Enter ${labels[sideValues.length]}: `);

  if (userInput === null || userInput.trim()=== '' || isNaN(userInput)) {
    alert('It was not a number');
    break;
  }

  const sideValue = Number(userInput);
  if (sideValue <= minSideValue) {
    alert('Value of triangle side must be greater than 0');
    break;
  }

  sideValues.push(sideValue);
} while (sideValues.length < sideCount);

if (sideValues.length === sideCount) {
  let isTriangle = sideValues[a] + sideValues[b] > sideValues[c]
                && sideValues[a] + sideValues[c] > sideValues[b]
                && sideValues[b] + sideValues[c] > sideValues[a];

  if (isTriangle) {
    if (sideValues[a] === sideValues[b] && sideValues[b] === sideValues[c]) {
      console.log('Equivalent triangle');
    } else if (sideValues[a] !== sideValues[b] &&
                sideValues[a] !== sideValues[c] &&
                sideValues[b] !== sideValues[c]) {
      console.log('Normal triangle');
    } else {
      console.log('Isosceles triangle');
    }
  } else {
    console.log('Triangle doesn’t exist');
  }
}