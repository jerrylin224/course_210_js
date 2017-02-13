function reverseWords(sentence) {
  return sentence.split(' ').map(function(word){
    return word.length >= 5 ? word.reverse() : word;
  }).join(' ')
}