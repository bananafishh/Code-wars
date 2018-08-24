function comp(array1, array2){
  if(array1 === null || array2 === null || array1 === undefined || array2 === undefined) {
    return false;
  }

  var arrayLength = array1.length;
  array1.sort(compare);
  array2.sort(compare);

  for(var i = 0; i < arrayLength; i++) {
    if(Math.sqrt(array2[i]) !== array1[i]) {
      return false;
    }
  }

  return true;
}

function compare(a, b) {
 return a - b;
}
