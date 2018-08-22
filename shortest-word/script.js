function findShort(s) {
  var words = s.split(' ');
  var arr = [];

  for (var i = 0, wordsLength = words.length; i < wordsLength; i++) {
    arr.push(words[i].length);
  }

  return Math.min.apply(Math, arr);
}
