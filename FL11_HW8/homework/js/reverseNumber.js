const ten = 10;

function reverseNumber(number) {
    let reversed = '';
    let multiplier = 1;

    if (number < 0) {
      number = -number;
      multiplier = -1;
    }

    while (number > 0) {
        reversed += number % ten;
        number = Math.floor(number / ten);
    }

    return multiplier * reversed;
}
reverseNumber(-456);