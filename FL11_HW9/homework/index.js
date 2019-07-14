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

showFormattedDate(new Date('2019-01-27T01:10:00'));

//6
function canConvertToDate(dateString) {
  return !isNaN(Date.parse(dateString));
}

console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));