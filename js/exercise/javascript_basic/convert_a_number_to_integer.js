function integerToString(num) {
  var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var result = "";
  var digit;
  if (num === 0) {
    result = DIGITS[num]
  }
  while (num > 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[digit] + result;
    }

  return result;
}
