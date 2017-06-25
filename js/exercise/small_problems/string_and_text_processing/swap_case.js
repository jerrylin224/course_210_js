function swapcase(words) {
  return words.split('').map(function(char) {
    if (char.match(/[a-z]/)) return char.toUpperCase();
    if (char.match(/[A-Z]/)) return char.toLowerCase();
    return char;
  }).join('');
}

function swapcase(words) {
  return words.split('').map(function(char) {
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
  });
}