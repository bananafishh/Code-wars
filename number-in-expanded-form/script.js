function expandedForm(num) {
  var str = num.toString();
  var strLength = str.length;
  var strArr = str.split('');
  var arr = [];
  var res = [];
  var mp = 1;

  for (var i = 0; i < strLength; i++) {
    arr.push(mp);
    mp *= 10;
  }

  var newArr = arr.reverse();

  for (var i = 0; i < strLength; i++) {
    var num = strArr[i] * newArr[i];
    if(num) {
      res.push(num);
    }
  }

  return res.join(' + ');
}
