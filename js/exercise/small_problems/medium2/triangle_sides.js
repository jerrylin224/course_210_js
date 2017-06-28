function triangle(side1, side2, side3) {
  var sortedArg = [side1, side2, side3].sort();

  if (sortedArg[0] <= 0 || sortedArg[2] >= sortedArg[0] + sortedArg[1]) {
    return 'invalid';
    }

  if (sortedArg[0] === sortedArg[1] && sortedArg[1] === sortedArg[2]) {
    return 'equilateral';
    } else if (sortedArg[0] === sortedArg[1] || sortedArg[1] === sortedArg[2]) {
    return 'Isosceles';
    } else {
    return 'Scalene';
    }
}

// Rule
// if triangle is invalid(side <= 0, 1 side greater than the sum of the other 2) return invalid
// Equilateral: All 3 sides are of equal length
// Isosceles: 2 sides are of equal length, while the 3rd is different
// Scalene: All 3 sides are of different length

// Algorithm
// get the sorted argument by length
// if (side <= 0 || sortedArgument[0] > sortedArgument[1] + sortedArgument[1]) return invalid
// if All 3 sides are of equal length return Equilateral:
// if 2 sides are of equal length, while the 3rd is different return Isosceles
// if All 3 sides are of different length return Scalene:
