'use strict';

function findUniq(arr) {
  const firstNum = arr[0];

  if (firstNum !== arr[1] && firstNum !== arr[2]) {
    return firstNum;
  }

  for (let i of arr) {
    if (i !== firstNum) {
      var uniqueNumber = i;
      break;
    }
  }

  return uniqueNumber;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
