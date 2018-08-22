function isIsogram(str) {
  var letters = str.toLowerCase().split('').sort();

  return letters.every(function(el, index, arr) {
    return el !== arr[index + 1];
  });
}
