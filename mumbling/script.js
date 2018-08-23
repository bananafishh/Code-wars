function accum(s) {
  var arr = s.toLowerCase().split('');
  var bigArr = [];
  var joinedArr = [];

  arr.forEach(function(item, i) {
    bigArr.push(arr.slice(i, i + 1));
  });

  bigArr.forEach(function(item, i) {
    item[0] = item[0].toUpperCase();

    var n = 0;
    while (n < i) {
      item.push(arr[i]);
      n++;
    }

    joinedArr.push(item.join(''));
  });

  var result = joinedArr.join('-');
  return result;
}
