function convertHTML(str) {
    //split the string 
  strSplit = str.split("");
  //iterate the string and where case matches do a switch
  for (var i = 0; i < strSplit.length; i++) {
    switch (strSplit[i]) {
      case '&':
        strSplit[i] = '&amp;';
        break;
       case '<':
       strSplit[i] = '&lt;';
       break;
       case '>' :
       strSplit[i] = '&gt;';
       break;
        case '"':
       strSplit[i] = '&quot;';
       break;
       case "'" :
       strSplit[i] = '&apos;';
       break;
    }
  }
  //join the splitted string and return
  strSplit.join('');
  return strSplit;
}
