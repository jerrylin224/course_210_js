function staggeredCase(str) {
  return str.toLowerCase().split('').map(function(char, index) {
    return index % 2 === 0 ? char.toUpperCase() : char;
  }).join('');
}