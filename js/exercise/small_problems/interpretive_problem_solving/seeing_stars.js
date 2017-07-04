// input: odd integer(smallest argument will be 7)
// output:  an 8-pointed star in an nxn grid

// Model
// n = 9
// number of space before first star 0, 1, 2, 3, 0, 3, 2, 1, 0 
// number of space between each star 3, 2, 1, 0, 0, 0, 1, 2, 3
// number of star 3, 3, 3, 3, 9, 3, 3, 3, 3

// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

// Rule
// argument is the width and height
// minimum size is 7
// output to console

// Algorithm 
// upperpart based on the middle point (n - 1) / 2
// for (var i = 0; i < middlePoint; i++)
// grid = space.repeat(i) + star + space.repeat(middlePoint - 1 - i) + star + space.repeat(middlePoint -1 - i) + star
// upperPart.push(grid)
// copyUpperPart = upperPart.slice()
// middle part
// - star.repeat(n)
// - upperPart.push(star.repeat(n))
// lowerpart
// - upperPart.push(copyUpperPart.reverse())
// result = upperPart.join('\n')

function star(n) {
  var middlePoint = (n - 1) / 2;
  var upperPart = [];
  var star = '*';
  var space = ' ';
  var result, grid, spaneSpace, middlePart, lowerPart;

  for (var i = 0; i < middlePoint; i++) {
    spaneSpace = space.repeat(middlePoint - 1 - i);
    grid = space.repeat(i) + star + spaneSpace + star + spaneSpace + star
    upperPart.push(grid)
  }

  lowerPart = upperPart.slice().reverse();

  middlePart = star.repeat(n)
  upperPart.push(middlePart);


  result = upperPart.concat(lowerPart).join('\n')

  console.log(result);
}

star(9)
star(7)