function isInteger(number) {
    // return Number.isSafeInteger(number);
    return number % 1 === 0
}
isInteger(5);