function getMin() {
  let min = Number.MAX_VALUE;

  for (let argument of arguments) {
    if (argument < min) {
      min = argument;
    }
  }

  return min;
}

getMin(3, 0, -3);