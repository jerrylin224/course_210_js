function doubleConsonants(string) {
  return string.split('').map(function(char){
    return (isLetter(char)) ? (char + char) : char
  }).join('');
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || ( char >= 'A' && char <= 'Z')
}