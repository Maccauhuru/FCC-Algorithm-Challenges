function convertToRoman(num) {
    //create an empty string
  var romanNumeral="";
  //create an array of possible Roman Numerals up to 1000
  var romanNumeralArr =["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  //create an array of possible number values
  var regularNumbersArr =[1000,900,500,400,100,90,50,40,10,9,5,4,1];
  //iterate for length of our regular numbers
  for(var i=0;i<regularNumbersArr.length;i++){
      //while regular number is larger than input number
      while(num >= regularNumbersArr[i]){
          //add equivalent Roman Numeral to our empty string
       romanNumeral += romanNumeralArr[i];
       //subtract the value from number to end the while loop
       num -= regularNumbersArr[i];
      }
  }
  return romanNumeral;
}

convertToRoman(36);
