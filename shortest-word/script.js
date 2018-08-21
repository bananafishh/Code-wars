function findShort(s) {
  var words = s.split(' ');
  var shortWordLength = words[0].length;

  for (var i = 0, wordsLength = words.length; i < wordsLength; i++) {
  	if(words[i].length < shortWordLength) {
      shortWordLength = words[i].length;
    }
  }

  return shortWordLength;
}
