function repeater(string) {
  return string.split('').map(function(letter){
    return letter + letter;
  }).join('');
}

function repeater(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) {
    newArray.push(string[i] +  string[i]);
  }

  return newArray.join('');
}

function repeater(str) {
  return str.split('').map(function(char) {
    return char.repeat(2);
  }).join('');
}


// input: string
// output: string (double every character

// Rule
// Every character is aceeptable, double the character
// if string is empty, return empty string

// Algorithm
// split the string
// use map to collect doubled character
// join the array