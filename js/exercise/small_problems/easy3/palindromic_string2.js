function isPalindrome(string){
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  var string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

isRealPalindrome('madam')               // true
isRealPalindrome('Madam')               // true (case does not matter)
isRealPalindrome('Madam, I\'m Adam')    // true (only alphanumerics matter)
isRealPalindrome('356653')              // true
isRealPalindrome('356a653')             // true
isRealPalindrome('123ab321')            // false