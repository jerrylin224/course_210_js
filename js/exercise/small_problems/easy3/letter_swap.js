function swap(text) {
  text.split(' ').map(function(word) {
    if (word.length === 1) {
      return word;
    }

    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }).join(' ');
}