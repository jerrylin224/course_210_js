function halvsies(array) {
  var half = Math.ceil(array.length / 2);
  var leftPart = array.slice(0, half);
  var rightPart = array.slice(half);

  return [leftPart, rightPart];
}