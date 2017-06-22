function push(array) {
  for (var i = 1, length = arguments.length; i < length; i++) {
    array[array.length] = arguments[i];
  }

  return array.length;
}
