const ten = 10;

function reverseNumber(number) {
  let reversed = 0;
  while (number) {
    reversed = reversed * ten + number % ten;
    number = Math.trunc(number / ten);
  }

  return reversed;
}

reverseNumber(-456);