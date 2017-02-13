function alphabeticNumberSort(array) {
  var NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
                       "nine", "ten", "evelen", "twelve", "thirteen", "fourteen",
                       "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  return array.map(function(number){
    return NUMBER_WORDS.indexOf(number).sort()
  })
}                     