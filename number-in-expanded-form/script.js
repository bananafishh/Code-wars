function expandedForm(num) {
  var arr = num.toString().split('').reverse();
  var arrLength = arr.length;
  var expandedNum;
  var result = [];

  for (var i = 0; i < arrLength; i++) {
    expandedNum = arr[i] * Math.pow(10, i);

    if(expandedNum) {
      result.unshift(expandedNum);
    }
  }

  return result.join(' + ');
}
