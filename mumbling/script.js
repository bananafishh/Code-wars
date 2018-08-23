function accum(s) {
  var arr = s.toUpperCase().split('');
  var newArr = [];

  arr.forEach(function(item, i) {
    var repeated = '';
    var n = 0;

    while (n <= i) {
      n === 0 ? repeated += item : repeated += item.toLowerCase();
      n++;
    }

    newArr.push(repeated);
  });

  return newArr.join('-');
}
