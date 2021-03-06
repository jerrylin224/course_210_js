function concat() {
  var newArray = [];
  var currentArg;

  for (var i = 0; i < arguments.length; i++) {
    currentArg = arguments[i];
    if (Array.isArray(currentArg)) {
      for (var j = 0; j < currentArg.length; j++) {
        newArray[newArray.length] = currentArg[j];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }

  return newArray;
}

concat([1, 2 ,3], [4, 5, 6], [7, 8, 9]);           // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
concat([1, 2], "a", ["one", "two"]);               // [ 1, 2, "a", "one", "two" ]
concat([1, 2], ["three"], 4);                      // [ 1, 2, "three", 4 ]
