function substringsAtStart(string) {
  var newArray = []
  for (var i = 1; i < string.length + 1; i++) {
    newArray.push(string.substr(0, i))
  }
}
