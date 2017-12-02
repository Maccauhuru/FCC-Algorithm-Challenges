function mutation(arr) {
    //create two new variables to store our test and target array variables
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  //loop through the target and search if it matches elements in test(source)
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);

//str.indexOf(searchValue[, fromIndex])