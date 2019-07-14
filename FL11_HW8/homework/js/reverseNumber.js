function reverseNumber(number) {
    let reversed = '';
    let multiplier = 1;

    if (number < 0) {
      number = -number;
      multiplier = -1;
    }

    while (number > 0) {
        reversed += number % 10;
        number = Math.floor(number / 10);
    }

    return multiplier * reversed;
}
reverseNumber(-456);