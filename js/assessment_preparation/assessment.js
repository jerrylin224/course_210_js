// A garland word is one that starts and ends with the same N letters in 
// the same order, for some N greater than 0, but less than the length 
// of the word. I'll call the maximum N for which this works the garland word's 
// degree. For instance, "onion" is a garland word of degree 2, because its first 2 
// letters "on" are the same as its last 2 letters.

// Write a function that takes one argument of a word, and return its garland 
// word degree.

// Requirement
// input: string
// output: number (positive integer)
// rule: 
// a string starts and ends with the same N letters
// get the words of degrees by N 
// case doesn' matter

// Model
// a string as argument
// check the start N letter and end N letter
// if the both letters have same letters(case doesn' matter) and order return the legnth of the letters

// Example
// garland('onion') // 2  // 'on' and 'on'
// garland('apple') // 0
// garland('applea') // 1
// garland('abcplabc') // 3 'abc'  and 'abc'
// garland('abcplABC') // 3 'abc'  and 'ABC'
// garland('abcaABC')  // 

// Data
// input: split as 2 strings
// rule: a var to count duplicate


// Algorithm
// iterate from both starts and end
// slice from begin and ends
// set the middle as the end of the loop
// compare the 2 string
// - if the 2 string are the same, stop and record the inddx
// - else keep looping
// break if exceed the middle
// record the index that stop, return the index

// if 4 middle is 1
// if 5 middle is 2

function garland(string) {
  var string = string.toLowerCase();
  var length = string.length;
  var first = '';
  var second = '';
  var degree;
  var repeatLetter = bothEnd(string);

  if (repeatLetter !== 0) {
    return repeatLetter;
  }
  
  for (var i  = 0; i <= length; i++) {

    first = string.slice(0, i + 1);
    second = string.slice(length - 1 - i, length)
    if (first.length === length) return 0;

    if (first === second) {
      return degree = i + 1; 
    } 
  } 
}


function bothEnd(string) {
  var length = string.length;
  string = string.toLowerCase();
  var first;
  var second;
  if (string[0] === string[length - 1]) {
    for (var i = 0; i < length; i++) {
      if (string[i] !== string[i + 1]) {
        first = i;
        break
      }
    }

    for (var j = 0; j < length; j++) {
      if (string[length - 1] !== string[length - 2 - j]) {
        second = j;
        break
      }
    } 

    if (first === second) {
      return first === length - 1 ? length - 1 : first + 1
    } else {
      return Math.max(first, second)  
    }
  }
  return 0;
}



console.log(garland('aaBAaa')); // 2
console.log(garland('abcplABC')); // 3
console.log(garland('onion')) // 2
console.log(garland('abcplabc')) // 3
console.log(garland('12341234')) // 4
console.log(garland('acx')) // 0
console.log(garland('aaaaa')) // 4
console.log(garland('aaCaa')); //2

