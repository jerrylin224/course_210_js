function concat(array1, secondArgument) {
  var newArray = []

  for(var i = 0; length = array1.length; i < length; i++) { 
    newArray[i] = array1[i];
  };

  if (Array.isArray(secondArgument)){
    for(var i = 0, length = secondArgument.length; i < length; i++){
      newArray[newArray.length] = secondArgument[i];
      }
    } else {
      newArray[newArray.length] = secondArgument;
    }

  return newArray;
}
