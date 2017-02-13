function interleave(arr1, arr2) {
  var newArray = [];
  for (i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }

  return newArray;
}