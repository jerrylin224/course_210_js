function wordToDigit(sentence) {
  var NUMBER = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  }

  Object.keys(NUMBER).forEach(function(word) {
    var regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUMBER[word]);
  });

  return sentence;
}

function wordToDigit(sentence) {
  var numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  var regExp = new RegExp(/(zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/, 'g');
  sentence = sentence.replace(regExp, function(match) {
    return numWords.indexOf(match);
  });
  return sentence;
}


wordToDigit('Please call me at five five five one two three four. Thanks.');



//'Please call me at 5 5 5 1 2 3 4. Thanks.'

// input: string(with number in letter)
// output: string(convert the letter in integer)

// Rule
// convert all the letter to integer


// Algorithm
// Iterate through the keys of the obj
// Use regex obj to select each letter
// Use replace to convert the letter to integer
// return the final converted sentence

