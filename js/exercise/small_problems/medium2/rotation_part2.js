function rotateRightmostDigits(number, index) {
  var numberToString = String(number);
  var part1 = numberToString.slice(0, numberToString.length - index)
  var part2 = rotateArray(numberToString.split('').slice(numberToString.length - index)).join('');
  return part1 + part2;
}