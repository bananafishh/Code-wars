function findShort(s){
  var words = s.split(' ');
  var shortWordLength = words[0].length;

  words.forEach(function(word) {
    if(word.length < shortWordLength) {
      shortWordLength = word.length;
    }
  });

  return shortWordLength;
}
