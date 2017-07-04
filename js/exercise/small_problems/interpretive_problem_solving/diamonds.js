// input: odd integer
// output: '*' as diamonds sign

// Model
// an odd integer an argument (n = 5)
// the number of star sign. 1, 3, 5, 3, 1
// the number of empty space. 2, 1, 0, 1, 2
// 

// Algorithm
// First part
//  make an array(upper) and push star sign and space, iterate based on the index
//  - var middlePoint = (5 - 1 / 2) // 2 (for var i = 0; i <= 3; i++)
//  - the number of the space will be middlePoint - i
//  - the number of the star sign (i * 2 + 1)
//  - push each character into the array
// ['  *', ' **', '***']
// Second Part
//  slice the array starting from index 1. var lower = upper.slice(0,2).reverse();
// 
// ['  *', ' **'] // upper.slice(0, 2)
// [' **', '  *'] // upper.slice(0, 2).reverse()
// Combined two part
// ['  *', ' **', '***'].concat([' **', '  *'])
// ['  *', ' **', '***', ' **', '  *']
// result = (upper + lower).join('\n')
// console.log(result)

// Example
// diamond(5)
//   *
//  ***
// *****
//  ***
//   *

function diamond(n) {
  var upperPart = []
  var lowerPart;
  var middlePoint = (n - 1) / 2
  var space = ' ';
  var star = '*';

  for (var i = 0; i <= middlePoint; i++) {
    upperPart.push((space.repeat(middlePoint - i) + star.repeat(i * 2 + 1)))
  }

  lowerPart = upperPart.slice(0, -1).reverse();
  result = upperPart.concat(lowerPart).join('\n')

  console.log(result)
}


diamond(3);
diamond(9); 