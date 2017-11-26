function truncateString(str, num) {
  newStr = "";
  if (num <= 3) {
    return str.slice(0, num) + "...";
  }
  //will return the entire string
  if (num >= str.length) {
    return str;
  }
  newStr = str.slice(0, num - 3) + "...";
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 5);
