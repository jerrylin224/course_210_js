function featured(num) {
  while (true) {
    num++;
    if (isValid(num)) {
      return num;
    }
  }
}

function isValid(num) {
  if (num % 7 === 0 && num % 2 !== 0 && isUnique(num)) {
    return true;
  }
}

function isUnique(num) {
  var string = String(num);
  var splitedArr = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (string.indexOf(splitedArr[i]) !== string.lastIndexOf(splitedArr[i])) {
      return false;
    }
  }

  return true;
}

// rule
// a multiple of 7
// odd number
// every digit only apperar once(133 is not (the digit 3 appears twice).

// Algorithm
// num % 7 === 0
// num % 2 !=== 0
// turn the number to string and split the string as array
// ierate through the string check the indexof an lastindexof for each element is the same
// give the next and valid number