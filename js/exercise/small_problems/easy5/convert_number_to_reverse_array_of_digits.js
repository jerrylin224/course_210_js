function reversedNumber(number) {
  var numberString = number.toString().split('').reverse().join('');
  return parseInt(numberString, 10);
}
function reversedNumber(number) {
  var numberString = number.toString().split('').reverse().join('');
  return parseInt(numberString, 10);
}


// input:  number
// output: number(reverse)

// Rule
// reverse the number
// if the reversed number start with zero, dropped the zeroes


// Alogorithm
// convert the number to string
// split the string to array
// reverse the array
// drop the first few zeroes
// - use indexOf and use slice to slice the rest part
// join the array to string

// Note that Number will drop the zero directly
// Number('0012') // 12