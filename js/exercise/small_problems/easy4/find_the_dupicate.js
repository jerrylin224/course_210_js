function findDup(array) {
  array.sort();

  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return array[i]
    }
  }
}