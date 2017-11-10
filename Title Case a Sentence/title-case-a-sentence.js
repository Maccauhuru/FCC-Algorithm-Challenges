
function titleCase(str) {
  //1.convert all the letters to lower case
  str = str.toLowerCase();

  //2.split all the words in str by an empty space
  str = str.split(" ");

  //3.loop through the string and capitalize the first character of each word
  for (var i = 0; i < str.length; i++) {
    //join the first character that you capitalize with the rest of the word
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  
  //return the joined strings after capitalization of their first characters
  return str.join(" ");
}



