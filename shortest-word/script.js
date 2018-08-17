function findShort(s){
  var shortestWordLength = 1000;
  var arr = s.split(' ');

  arr.forEach(function(word) {
    if(word.length < shortestWordLength) {
      shortestWordLength = word.length;
    }
  });

  return shortestWordLength;
}