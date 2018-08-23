function accum(s) {
  var arr = s.toUpperCase().split('');
  var repeated = '';
  var newArr = [];

  arr.forEach(function(item, i) {
    var n = 0;
    while (n <= i) {
      n === 0 ? repeated += item : repeated += item.toLowerCase();
      n++;
    }

    newArr.push(repeated);
    repeated = '';
  });

  return newArr.join('-');
}
