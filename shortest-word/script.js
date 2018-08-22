function findShort(s) {
  var words = s.split(' ').map(function(word) {
    return word.length;
  });
  
  return Math.min.apply(Math, words);
}
