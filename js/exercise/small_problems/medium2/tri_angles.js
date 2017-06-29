function triangle(angle1, angle2, angle3) {
  if (Math.min(angle1, angle2, angle3) <= 0 || sumAngles(angle1, angle2, angle3) !== 180) { 
    return 'invalid'
    }

  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (Math.max(angle1, angle2, angle3) > 90) {
    return 'obtuse';
  } else if (Math.max(angle1, angle2, angle3) < 90) {
    return 'acute';
  }
}

function sumAngles(angle1, angle2, angle3) {
    return [angle1, angle2, angle3].reduce((acc, val) => acc + val); 
}

// Rule
// if any angle smaller than 0 return invalid
// if sum of all angles not equals to 180, return invalid
// based on the comparasion of each angle, return specific answer
// Right: One angle of the triangle is a right angle (90 degrees)
// Acute: All 3 angles of the triangle are less than 90 degrees
// Obtuse: One angle is greater than 90 degrees.

// Algorithm
// if Math.min(angle1, angle2, angle3) <= 0 || [angle1, angle2, angle3].reduce((acc, val) => acc + val) !== 180 return invalid
// - if angle1 === 90 || angle2 === 90 || angle 3 === 90, return right
// - if Math.max(angle1, angle2, angle3) > 90 retrun obtuse
// - if Math.max(angle1, angle2, angle3) < 90 return acute