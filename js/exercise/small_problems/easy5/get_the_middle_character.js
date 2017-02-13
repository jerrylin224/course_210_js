function centerOf(string) {
  var half = Math.floor((string.length - 1) / 2);
  var length = string.length % 2 === 0 ? 2 : 1;

  return string.substr(half, length);
}

