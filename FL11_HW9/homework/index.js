function getNumbers(value) {
    const returns = [];
    for (let key of value) {
        if (!isNaN(parseInt(key))) {
            returns.push(Math.floor(key));
        }
    }
    return returns;
}

getNumbers('n1um3ber95');

function findTypes() {
    let result = {};
    for (let argument of arguments) {
        let argumentType = typeof argument;
        if (result[argumentType]) {
            result[argumentType]++
        } else {
            result[argumentType] = 1;
        }
    }
    return result;
}

findTypes('number', 7, null);

function executeforEach() {

        for (let element of arguments[0]){
            arguments[1](element);
        }
}

executeforEach([1, 2, 3], function (el) {console.log(el)});