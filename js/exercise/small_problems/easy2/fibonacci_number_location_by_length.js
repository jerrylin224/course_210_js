function findFibonacciIndexByLength(digits) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;
  do {
    fibonacci = first + second;
    index++;
    first = second;
    second = fibonacci;
  } while (fibonacci.toString().length < digits);

  return index;
}

console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(23))  