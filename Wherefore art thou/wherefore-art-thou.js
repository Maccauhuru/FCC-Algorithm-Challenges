function whatIsInAName(collection, source) {
  // What's in a name?
  //compare the larger selection to the smaller one i.e source
  var arr = collection.filter(function(item){
      //use a filter to return true values
    for(var i in source){
        //check value in source and compare with item
        if(source[i]!=item[i]){
            return false;
        }
    }
    return true;
  });
 
  return arr;
}
