function reverseNumber(num) {
    let result = '';
    let minus = 1;
    if (num < 0) {
        minus = -1;
        num = -num;
    }
    while (num>0) {
        result = result + (num % 10);
        num = Math.floor(num / 10);
    }
    return result * minus;
}
reverseNumber(-456);