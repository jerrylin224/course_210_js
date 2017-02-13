var DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};


function StringToInteger(string){ 
  var value = 0;
  var numbers = StringToNumber(string);
  for (var i = 0; i < numbers.length; i++) {
    value = value * 10 + numbers[i];
  }

  return value;
}

function StringToNumber(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result.push(DIGITS[string[i]]);
  }

  return result;
}

function stringToSignedInteger(string)
  switch(string[0]) {
    case '+': return StringToInteger(string.slice(1));
    case '-': return -StringToInteger(string.slice(1));
    default: return StringToInteger(s
  };
}
