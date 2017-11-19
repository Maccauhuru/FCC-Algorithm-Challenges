function translatePigLatin(str) {
  // Create the variables to use
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character in string matches a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending "ay".
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}
