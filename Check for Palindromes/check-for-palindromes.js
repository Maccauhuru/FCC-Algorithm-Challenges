function palindrome(str) {
    //use regular experessions to filter out unwanted chars
  var re = /[\W_]/g;
  //convert to lowercase and remove spaces using the Regex created above
  var lowRegStr = str.toLowerCase().replace(re, "");
  //Split the provided string,reverse it and then join it again to make it a palindrome
  var reverseStr = lowRegStr.split("").reverse().join("");
  
  return reverseStr === lowRegStr;
}
