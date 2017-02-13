function substringsAtStart(string) {
  var newArray = []
  for (var i = 1; i < string.length + 1; i++) {
    newArray.push(string.substr(0, i))
  }
}

function substrings(string) {
  var newArray = []
  for (var i = 0; i < string.length; i++) {
    newArray = newArray.concat(substringsAtStart(string.slice(i)))
  };
  
  return newArray;
}

// function palindromes(string) {
//   return substrings(string).filter(function(word){
//     return isPalidrome(word);
//   });
// }

// function isPalindrome(word) {
//   return word.length > 1 && word === word.splitt('').reverse().join;
// }

function palindromes(string) {
  return substrings(string).filter(word  => isPalindrome(word));
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}