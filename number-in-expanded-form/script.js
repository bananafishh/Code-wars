function expandedForm(num) {
  var arr = num.toString().split('').reverse();
  var arrLength = arr.length;
  var result = [];
  var multiplier = 1;
  var expandedNum;

  for (var i = 0; i < arrLength; i++) {
    expandedNum = arr[i] * multiplier;

    if(expandedNum) {
      result.push(expandedNum);
    }

    multiplier *= 10;
  }

  return result.reverse().join(' + ');
}
