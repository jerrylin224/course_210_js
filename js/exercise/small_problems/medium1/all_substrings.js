function substringsAtStart(string) {
  var newArray = []
  for (var i = 1; i < string.length + 1; i++) {
    newArray.push(string.substr(0, i))
  }
}

function substrings(string) {
  var newArray = []
  for (var i = 0; i < string.length; i++) {
    newArray = newArray.concat(substringsAtStart(string.slice(i)))
  };
  
  return newArray;
}