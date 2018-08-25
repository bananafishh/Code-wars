function findUniq(arr) {
  arr.sort(compare);

  for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
    if(arr[i] != arr[i + 1] && i == 0) {
      return arr[i];
    } else if(arr[i] != arr[i + 1] && i > 0) {
      return arr[i + 1];
    }
  }
}

function compare(a, b) {
  return a - b;
}
