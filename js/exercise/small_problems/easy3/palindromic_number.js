function isPalindrome(string){
  return string === string.split('').reverse().join('');
}


function isPalindromicNumber(number) {
  return isPalindrome(number.toString());
}