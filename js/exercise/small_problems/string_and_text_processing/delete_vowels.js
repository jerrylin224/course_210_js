function removeVowels(arr) {
  return arr.map(function(n) {
    return n.split('').filter(function(char) {
      return !char.match(/[aeiou]/gi)
    }).join('');
  });
}


function removeVowels(arr) {
  return arr.map(function(n) {
    return n.replace(/[aeiou]/gi, '');
  });
}