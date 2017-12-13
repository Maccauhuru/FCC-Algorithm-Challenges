function spinalCase(str) {
  var dash = "-";
  var newStr = "";
  //split whenever string encounters :space,underscore or capital letters
  str = str.split(/\s|_|(?=[A-Z])/);
  //iterate through the string & replace spaces and underscores with dash(es)
  for (var i = 0; i < str.length; i++) {
    newStr += str[i].replace(/_/g, dash).replace(/\s/g, "") + dash;
    sliceLen = newStr.length - 1;
  }
  //convert to lowercase and remove the last dash character
  return newStr.toLowerCase().slice(0, sliceLen);
}

spinalCase("this_Is-SpinalCase iI");
