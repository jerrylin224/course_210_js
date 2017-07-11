// A collection of spelling blocks has two letters per block, as shown 
// in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to just those words 
// that do not use both letters from any given block. You can also only use 
// each block once.

// Write a function that takes a word as a string, and returns true if it 
// can spell the argument passed in from the set of blocks, false otherwise. 
// You can consider the letters to be case insensitive when you apply the rules.

// input: a string as argument(uppercase or lowercase accept?)
// output: boolean value (true if blocks are used only one time)

// Requirement
// each block can only be used one time
// if a letter appear th one block the another letter can not appear
// - if o is used, means the 'BO' block can't be used again, 

// Model
// a string as argument
// check each letter by the block
// return true if each letter pass set of block 
// return false otherwise


// Examples:
// isBlockWord('BATCH'); // true
// isBlockWord('BUTCH'); // false
// isBlockWord('jest');  // true

// Data
// input: splited string as array
// rules: 
//  - make each 2 letter as a string(block) and contained all blocks in an array)
//  - ['BO', 'XK', 'DQ'....]
//  - iterate through the array

// Algorithm
// declare a blocks variable, makes the each two letters in a string, and all strings in one array
// - var blocks = ['BO', 'XK', 'DQ'....]
// split the string as (var splitedArr) ['B', 'A', 'T', 'C', 'H']
// make a var situation and assign it as true var situation = true;
// have a empty collection string to collect the block var collection = '';
// iterate thorugh the splitedArr
// - iterate through the blocks
//  - if uppercase letter is included in certain blocks
//   - concat the collection string 
//   - if the colleciton already has the string, set situation flase colleciton.indexOf('BO') !== -1
//                                    situation = false
// return situation

function isBlockWord(string) {
  var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT','RE' ,'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
  var splitedArr = string.split('');
  var collection = '';
  var situation = true;

  splitedArr.forEach(function(letter) {

    blocks.forEach(function(block) {
      if (block.includes(letter.toUpperCase())) {
        if (collection.indexOf(block) !== -1) situation = false;
        collection += block;
      }
    });
  });

  return situation;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest'));  // true

