function accum(s) {
  var arr = s.toUpperCase().split('');

  var newArr = arr.map(function(el, i) {
    var repeated = '';
    var n = 0;

    while (n <= i) {
      n === 0 ? repeated += el : repeated += el.toLowerCase();
      n++;
    }

    return repeated;
  });

  return newArr.join('-');
}
