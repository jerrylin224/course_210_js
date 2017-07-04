// input: plaintext
// output: converted string

// Rule
// string will be separated, each letter character will match with the separated keyword
// be converted by the value of each keyword character
// use the caeser cipher to help me convert

// Model
// vigenereCipher(plaintext, keyword)
// vigenereCipher('Pineapples don't go on pizzas!', 'meat')
// meat the value will be [12, 4, 0, 19]
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// shift value: 12 4 0 19 12 4 0 19 12 4 0 19 12 4 0 19 12 4 0 19
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal


// Algorithm
// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
//  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
// seaparte the keyword and convert the each key word to the shift value
// - when converted the keyword value, make all of char to be lowercase to convert
// also need to get the length of the word(var length = keyword.length)
// split the plaintext
// use map to iterate and get the return value
// - count the the converted char converted = 0
// - convert the character based on the number of converted character [12, 4, 0, 19][converted]
// - converted++
// - converted === keyword.length => converted = 0
// - when counverted use caesar cipher
// join the array

function vigenereCipher(plaintext, keyword) {
  var CONVERT = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',] 

  var converValue = keyword.toLowerCase().split('').map(char => CONVERT.indexOf(char));
  var length = keyword.length;
  var result;
  var convertedCount = -1;

  result = plaintext.split('').map(function(char) {
    if (char.match(/[^a-z]/i)) return char;
    if (convertedCount === length - 1) convertedCount = -1;
    convertedCount++;
    
    return caesarEncrypt(char, converValue[convertedCount]);
  }).join('');

  return result
}



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


console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat"))
