function searchWord(searchWord, text) {
  var splitedText = text.split(' ');

  if (searchWord === '') return text;

  return splitedText.map(function (word) {
    var regex = new RegExp(searchWord, 'i');
  
    if (word.match(regex)) {
      return '**' + word.toUpperCase() + '**';
      } else {
      return word;
      }
  }).join(' ');
};

function searchWord(searchWord, text) {
  var regex = new RegExp(searchWord, 'i');
  if (searchWord === '') return text;
  return text.replace(regex, '**' + searchWord.toUpperCase() + '**');
};