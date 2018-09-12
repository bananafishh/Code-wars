'use strict';

function comp(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }

  array1.sort(compare);
  array2.sort(compare);

  return array1.every((el, i) => el * el === array2[i]);
}

function compare(a, b) {
  return a - b;
}
