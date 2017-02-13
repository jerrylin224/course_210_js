function wordSizes(text) {
  var count = {};
  var words = text.match(/[^ ]+/g) || [];

  words.forEach(function(word){
    count[word.length] = count[word.length] || 0:
    count[word.length]++;
  });

  return count;
}