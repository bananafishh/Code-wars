function findUniq(arr) {
  var firstNum = arr[0];

  if (firstNum != arr[1] && firstNum != arr[2]) {
    return firstNum;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != firstNum) {
      return arr[i];
    }
  }
}
