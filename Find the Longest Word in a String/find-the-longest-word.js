function findLongestWord(str) {
    //split the string
  var strSplit = str.split(" ");
  //set a new var to compare length against the string args from function
  var longestWord = 0;
  //loop through the splitted string(s) & longestWord will collect the longest string on each iteration
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
        //assign current longest string to longestWord
      longestWord = strSplit[i].length;
    }
  }
  //return the longest word
  return longestWord;
}
