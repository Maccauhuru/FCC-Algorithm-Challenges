
function titleCase(str) {
  //1.covert all the letters to lower case
  str = str.toLowerCase();

  //2.split all of the letters
  str = str.split(" ");

  //3.loop through the provided string and capitalize the first character
  for (var i = 0; i < str.length; i++) {
    //join the first character that you capitalize with the rest of the sliced string
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  
  //return the joined strings after capitalization of thier first chars
  return str.join(" ");
}



