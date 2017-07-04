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
//  - var middlePoint = (5 - 1 / 2) // 2 (for var i = 0; i <= 2; i++)
//  - the number of the space will be middlePoint - i
//  - the number of the star sign (i * 2 + 1)
//  - push each character into the array
// ['  *', ' **', '***']
// Second Part
// - var middlePoint = (5 - 1 / 2) // 2 (for var i = 1; i >= 0; i--)
//  - the number of the space will be middlePoint - i
//  - the number of the star sign (i * 2 + 1)

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
  var result = []
  var middlePoint = (n - 1) / 2
  var space = ' ';
  var star = '*';

  for (var i = 0; i <= middlePoint; i++) {
    result.push((space.repeat(middlePoint - i) + star.repeat(i * 2 + 1)))
  }

  for (var i = middlePoint - 1; i >= 0; i--) {
    result.push((space.repeat(middlePoint - i) + star.repeat(i * 2 + 1)))
  }



  console.log(result.join('\n'))
}


diamond(3);
diamond(9); 