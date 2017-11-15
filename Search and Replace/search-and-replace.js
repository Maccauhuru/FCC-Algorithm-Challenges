function myReplace(str, before, after) {
    //1.check if the first letter of the searched word(i.e before) is uppercase or not
  if (before[0] === before[0].toUpperCase()) {
      //2.If searched word is uppercase the replacing word will also be uppercase, else it defaults to lowercase
    after = after.replace(after[0], after[0].toUpperCase());
  }
  //return the string after replacement
  return str.replace(before, after);
}
