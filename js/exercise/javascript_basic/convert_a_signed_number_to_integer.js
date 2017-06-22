
function signedIntegerToString(num) {
  var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var result = "";
  var digit;
  var sign = '';
  
  if (num === 0) {
    result = DIGITS[num]
  }
  if (num > 0) {
  sign = '+';
  } else if (num < 0) {
  sign = '-';
  }

  if (num < 0) {
    num *= -1;
  }

  while (num > 0) {
    digit = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[digit] + result;
    }

  return sign + result;
}


function signedIntegerToString(num) {
  var sign = '';
  var result;
  if (num > 0) {
      sign = '+';
    } else if (num < 0) {
      sign = '-';
    }
  num = Math.abs(num)

  result = integerToString(num);
  return sign + result;
}