function letterCaseCount(str) {
  var obj = {lowercase: 0, uppercase: 0, neither: 0};
  str.split('').forEach(function(char) {
    if (char.match(/[a-z]/)) {
      obj.lowercase += 1;
        } else if (char.match(/[A-Z]/)) {
      obj.uppercase += 1;
        } else {
      obj.neither += 1
        } 
    });

  return obj;
}