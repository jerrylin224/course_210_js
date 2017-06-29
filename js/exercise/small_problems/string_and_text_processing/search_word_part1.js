function searchWord(searchWord, text) {
  var regex = new RegExp('\\b' + word + '\\b', 'gi');
  var matchArr = text.match(regex);
  return (matchArr || []).length;
}