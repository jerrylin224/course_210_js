function concat(arr1, argument) {
  var newArray = arr1.slice();
  if (Array.isArray(argument)) {
    for (var i = 0; i < argument.length; i++) {
      newArray.push(argument[i]);
        }
    } else {
    newArray.push(argument);
    }

  return newArray;
}