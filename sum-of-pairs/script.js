var sum_pairs = function(ints, s){
  var result = [];
  var first;
  var second = ints.length;

  for (var i = 0; i < ints.length; i++) {
    for (var j = i + 1; j < ints.length; j++) {

      if(ints[i] + ints[j] == s && j < second) {
        first = i;
        second = j;
      }
    }
  }

  if(first === undefined) {
    return;
  } else {
    result.push(ints[first], ints[second]);
    return result;
  }
}
