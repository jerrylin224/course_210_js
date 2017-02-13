function repeater(string) {
  return string.split('').map(function(letter){
    return letter + letter;
  }).join;
}

function repeater(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++) {
    newArray.push(string[i] +  string[i]);
  }

  return newArray.join('');
}