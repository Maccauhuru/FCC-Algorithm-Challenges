
function convertHTML(str) {
    //create an object with key / value pairs
  var arrChars ={
    '&':"&amp;",
    '<':"&lt;",
    '>':"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  };

 //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(i){
    return arrChars[i] || i;
  }).join('');

}