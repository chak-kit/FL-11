//0
function getNumbers(str) {
    const result = [];
    for (let char of str) {
        let number = parseInt(char);

        if (!isNaN(number)) {
            result.push(number);
        }
    }
    return result;
}

getNumbers('n1um3ber95');

//1
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
    for (let el of arr) {
        func(el);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el)
});


//3
function mapArray(arr, func) {
    const result = [];

    executeforEach(arr, function (el) {
        result.push(func(el));
    });

    return result;
}

let res = mapArray([2, 5, 8], function (el) {
    return el + 3
});
console.log(res);

//4
function filterArray(arr, func) {
    const filtered = [];

    executeforEach(arr, function (el) {
        filtered.push(func(el));
    });

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

// 5
function showFormattedDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let monthNumber = date.getMonth();
    let year = date.getFullYear();

    return `Date: ${months[monthNumber]} ${day} ${year}`;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

//6
function canConvertToDate(dateString) {
    return !isNaN(Date.parse(dateString));
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));

//7
const dayInMilliseconds = 1000 * 60 * 60 * 24;

function daysBetween(date1, date2) {
    return Math.round((date2.getTime() - date1.getTime()) / dayInMilliseconds);
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

//8
const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(data) {

    let adults = filterArray(data, function (el) {
        let data2 = new Date();
        let data1 = new Date(el[' birthday ']);
        let yearsBetween = daysBetween(data1, data2);
        let peopleYears = Math.floor(yearsBetween / 31 / 12);
        return peopleYears > 18;
    });
    return adults.length;
}

console.log(getAmountOfAdultPeople(data));