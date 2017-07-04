// input: 2 argument(first for the string to be encrypted, how many asc2 value to shirt)
// ouput: encrypted string

// Rule
// Case will be remained as it is
// Other character than letter will be remained as it is.
// shifted more than z will start over from a
// reference the asc2 value

// Modle
// a string and number to shift as argument
// caesarEncrypt('a . A', 47); 
// ['a', ' ', '.', ' ', 'y']
// shift the string base on the asc2 value
// - case remain the same
// - non-letter character reamin the same
// - if letter shift exceed z, start over from a
// non-shifted [' ', '.', ' ']
// shifted     []
// result => 'v . d'

// Algorithm
// deal with the shifted number shifted = (shift % 26) 21
// split string as each character
// use map to get the shifted and non-shifted character
// - non-shifted
//   - if (char.match(/[^a-z]/i)) return char
// - shifted
//   - var charCode = char.charCodeAt()
//   - shiftedCharCode = charCode + shifted
//   - if (charCode >= 97 && charCode <= 122) {
//     if (shiftedCharCode > 122)  shiftedCharCode = shiftedCharCode - 26
//   } else if (charCode >= 65 && charCode <= 90) {
//     if (shiftedCharCode > 90)  shiftedCharCode = shiftedCharCode - 26
//   }
//   return String.fromCharCode(shiftedCharCode)
// join the array to get the result

function caesarEncrypt(string, shiftNum) {
  var converedShift = shiftNum % 26;
  var shiftedCharCode;
  var charCode;

  var result = string.split('').map(function(char) {
    charCode = char.charCodeAt();
    shiftedCharCode = charCode + converedShift;

    if (char.match(/[^a-z]/i)) return char;

    if (charCode >= 97 && charCode <= 122) {
      shiftedCharCode = shiftedCharCode > 122 ? shiftedCharCode - 26 : shiftedCharCode;
    } else if (charCode >= 65 && charCode <= 90) {
      shiftedCharCode = shiftedCharCode > 90 ? shiftedCharCode - 26 : shiftedCharCode;
    }

    return String.fromCharCode(shiftedCharCode);
  }).join('');

  return result;
}
caesarEncrypt('', 47);
caesarEncrypt('a', 47);  
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);