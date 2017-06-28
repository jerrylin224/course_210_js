function centerOf(string) {
  var half = Math.floor((string.length - 1) / 2);
  var length = string.length % 2 === 0 ? 2 : 1;

  return string.substr(half, length);
}

// input: string
// output: string (middle character

// Rule
// if the length is odd, return the middle char
// if the length is even, return the 2 middle chars


// Algorithm
// if the length is odd, return str[(length - 1) / 2]
// if the length is even, return the str.substr((length / 2) - 1, 2)