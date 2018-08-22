function isIsogram(str){
  var wordArr = str.toLowerCase().split('').sort();
  for(var i = 0; i < wordArr.length; i++) {
    if(wordArr[i] === wordArr[i + 1]) {
      return false;
    }
  }
  return true;
}
