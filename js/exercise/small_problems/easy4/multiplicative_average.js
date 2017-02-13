function showMultiplicativeAverage(array) {
  var product = 1;
  for (i = 0; i < array.length; i++) {
    product *= array[i];
  }

  return (product / array.length ).toFixed(3);
}