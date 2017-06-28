
// input: 
// - number to rotate
// - last n digit of the number to be rotated
// output: the rotated number

// rules:
// the last n digit of the original number are going to be rotated
// the first digits(not part of the last n digits) remain the same
// we'll apply the same rule for the rotation from the previous exercis
// slice off the first digit and append it to the end of the number
// we'll join together the first part of the number and the last digit after rotation and return it as number


// Test case
// rotateRightmostDigits(735291, 1) // 735291
// rotateRightmostDigits(735291, 2) // 735219
// rotateRightmostDigits(735291, 3) // 735912
// rotateRightmostDigits(735291, 4) // 732915
// rotateRightmostDigits(735291, 5) // 752913
// rotateRightmostDigits(735291, 6) // 352917

// Algorithm
// - convert the original number to string
// - split the string into two parts: the part to remain unchanged and the part to be rotated
// - rotate the second part
// - join bak the first part with the rotated second part
// - conver string to a number and return 