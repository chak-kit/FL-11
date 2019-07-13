function getMin() {
    let min = Number.MAX_VALUE;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
getMin(3, 0, -3);