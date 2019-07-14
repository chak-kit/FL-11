//0
function getNumbers(value) {
    const returns = [];
    for (let key of value) {
        if (!isNaN(parseInt(key))) {
            returns.push(Math.floor(key));
        }
    }
    return returns;
}

//1
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

//2
function executeforEach(arr, func) {
    let result = [];

    for (let element of arr) {
        result.push(func(element));
    }

    return result;
}

executeforEach([1, 2, 3], function (el) {
    console.log(el)
});


//3
function mapArray(arr, func) {
    return executeforEach(arr, func);
}

let res = mapArray([2, 5, 8], function (el) {
    return el + 3
});
console.log(res);

//4
function filterArray(arr, func) {
    let filtered = executeforEach(arr, func);
    let result = [];
    for (let i = 0; i < filtered.length; i++) {
        if (filtered[i]) {
            result.push(arr[i]);
        }
    }

    return result;

}

console.log(filterArray([2, 5, 8], function (el) {
    return el > 3
}));