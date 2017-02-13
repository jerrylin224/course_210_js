
function runningTotal(array) {
  var result = [];
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    result.push(sum += array[i]);
  }

  return result;
}