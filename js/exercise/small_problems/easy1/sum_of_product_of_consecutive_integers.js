function computeSum(number) {
  var sum = 0;
  for (i = 1; i < number + 1; i++) {
    sum += i;
  }

  return sum;
}

console.log(computeSum(5))

function multiSum(number) {
  var sum = 1;
  for (i = 1; i < number + 1; i++) {
    sum *= i;
  }

  return sum;
}

console.log(multiSum(6))

var number = parseInt(prompt('Please enter an integer greater than 0'), 10);
var operation = prompt('Enter "s" to compute the sum, "p" to compute the product. ');

if (operation === 's') {
  var sum = computeSum(number);
  console.log('The sum of the integers between 1 and ' + number + ' is ' + sum + '.');
} else if (operation === 'p') {
  console.log('The product of the integers between 1 and' + number + ' is ' + product + '.');
} else {
  console.log('Opps. Unknown opertation.');
}