function uniteUnique(arr) {
  //Empty array to store our final array
  var finalArr = [];
  for (var i = 0; i < arguments.length; i++) {
    var primaryArr = arguments[i];

    //loop through the primary array created above
    for (var k = 0; k < primaryArr.length; k++) {
      var secondaryArr = primaryArr[k];

      //check if value already exists in primary array
      if (finalArr.indexOf(secondaryArr) < 0) {
        finalArr.push(secondaryArr);
      }
    }
  }
  return finalArr;
}

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
