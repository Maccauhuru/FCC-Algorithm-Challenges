function fearNotLetter(str) {
//iterate to find the code of the current character
for(var i=0;i < str.length;i++){
    var code = str.charCodeAt(i); //e.g 65 for "A"
//if code of current char is not equal to charAt(0) + iteration char (i),it means char has been escaped
if(code !== str.charCodeAt(0) + i){
    //if current character has escaped one character,return the previous char that we escaped
    return String.fromCharCode(code -1);
}
}
return undefined;

}