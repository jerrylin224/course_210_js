function crunch(string) {
  var result = '';
  for (i = 0; i < string.length; i++){
    if (string[i] !== string[i + 1]) {
      result += string[i];
    }
  }

  return result;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));                  // '4abcabcba'
console.log(crunch('ggggggggggggggg'));                // 'g'
console.log(crunch('a'));                              // 'a'
console.log(crunch(''));                               // '' 