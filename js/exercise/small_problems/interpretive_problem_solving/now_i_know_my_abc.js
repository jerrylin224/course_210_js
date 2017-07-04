// input: string(a series letter)
// output: true/false

// Rule
// Every letter can only appear once
// Every block can only be used once
// Case insensitive

// Model
// input a string
// calcaulate the appearance of the letter in each block
// if no any block appear twice, return true. Otherwise, return false


// Algorithm
// separate each block as string in an array
// ['BO', 'XK', 'DQ', 'CP', 'NA', 'CP', 'NA','GT',
//  'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
//  
// create an array call appearedBlock to collect appeared block
// convert the string into uppercase
// create two loop to iterate through the string and the block
// - iterate through the string as outer loop
// - iterate through the array as inner loop
// if any block contain the letter of the character, push the block into an array
// use indexOf to check wheter any block appear twice
//   - if the index is not -1, return false
//   - if no any block appear twice, return true.

// Test
console.log(isBlockWord('BATCH'));
// true
//    ['BH', 'NA', 'GT', 'CP', 'HU']
console.log(isBlockWord('BUTCH')); // false
//    ['BO', 'HU', 'GT', 'CP', 'HU']
console.log(isBlockWord('jest'));  // true
// isBlockWord('JEST');
//    ['JW', 'RE', 'FS', 'GT']

function isBlockWord(string) {
  var letterBlock = ['BO', 'XK', 'DQ', 'CP', 'NA','GT',
    'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  var appearedBlock = []
  var upperString = string.toUpperCase()
  var result;
  
  for (var i = 0; i < upperString.length; i++) {
    if (appearedBlock.indexOf(upperString[i]) !== -1) return false;

    letterBlock.forEach(function(block) {
      if (block.includes(upperString[i])) appearedBlock.push(block); 
    });
  }
  // debugger
  return true;
}