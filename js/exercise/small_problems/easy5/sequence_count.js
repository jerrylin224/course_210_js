function sequence(num, times) {
  var newArray = [];
  for (i = 1; i < times + 1; i++) {
    newArray.push(num * i);
  }

  return newArray;
}