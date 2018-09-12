'use strict';

var sumPairs = function (ints, s) {
  var result = [];
  var firstIndex;
  var secondIndex = ints.length;

  for (var i = 0; i < ints.length - 1; i++) {
    for (var j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s && j < secondIndex) {
        firstIndex = i;
        secondIndex = j;
      }
    }
  }

  if (firstIndex === undefined) {
    return undefined;
  } else {
    result.push(ints[firstIndex], ints[secondIndex]);
    return result;
  }
};
