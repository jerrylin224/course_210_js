// input: number
// output: number

// Rule
// get the square of sum minus the sum of square 
// input > 0 
// if input = 1 return 0

// Algorithm
// use for loop to collect the sum the get the square
// use for loop to get the square and sum them
// minus the value

function sumSquareDifference(n) {
  var sum = 0;
  var squareSum = 0;

  if (n === 1) return 0;

  for (var i = 1; i <= n; i++) {
    sum += i;
    squareSum += Math.pow(i, 2);
  }
  
  return Math.pow(sum, 2)  - squareSum;
}

// function sumSquareDifference(n) {
//   if (n === 1) return 0;
//   return sumSquare(n) - squareSum(n);
// }

// function sumSquare(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//     }

//   return Math.pow(sum, 2);
// }

// function squareSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += Math.pow(i, 2);
//     } 

//   return sum;
// }