Write a function that takes a two dimensional array as the argument, 
turn it into a flat array and with all the duplicated elements removed. 
Treat numbers and number strings, for example, 1 and '1' as duplicates, 
and keep the one that comes first in the flattened array.

// input: array (two subarray as argument)
// output: array (flatten array, duplicated element removed)

// Rule
// two subarray as argument
// duplicated element will be removed 
// - 1 and '1' will be seemed as the same
function flatten(array) {
  var notDuplicatedIdx = [];
  var duplicatedElement = [];
  var firstIdxOfDuplicated = [];
  var result = [];
  var concatenated = array[0].concat(array[1]);
  var converted = concatenated.slice().map(element => String(element));

  separateDuplicatedEl(converted, notDuplicatedIdx, duplicatedElement)

  getfirstIdxOfDuplicatedOfDuplicated(firstIdxOfDuplicated, duplicatedElement, converted);

  return getResult(firstIdxOfDuplicated, notDuplicatedIdx, concatenated, result);
}


function separateDuplicatedEl(converted, notDuplicatedIdx, duplicatedElement) {
  converted.forEach(function(element) {
    if (converted.indexOf(element) === converted.lastIndexOf(element)) {
      notDuplicatedIdx.push(converted.indexOf(element))
    } else {
      duplicatedElement.push(element)
    }
  });
}

function getfirstIdxOfDuplicatedOfDuplicated(firstIdxOfDuplicated, duplicatedElement, convertedArr) {
  duplicatedElement.forEach(function(element) {
    if (!firstIdxOfDuplicated.includes(convertedArr.indexOf(element))) {
      firstIdxOfDuplicated.push(convertedArr.indexOf(element))
      }
  })
}

function getResult(firstIdxOfDuplicated, notDuplicatedIdx, concatenated, result) {
  firstIdxOfDuplicated.forEach(function(idx) {
    result[idx] = concatenated[idx];
  });

  notDuplicatedIdx.forEach(function(idx) {
    result[idx] = concatenated[idx];
  });

  result = result.filter(element => element);

  return result
}


// Algorithm 
// concatantate two array first
// convert all of the as string(use slice to make a cupy first) 
// use the indexOf and lastIndexOf to check if the number of any character doesn't match
// remove the later one
// separate the array into two part
// - not duplicate with idx
// - idx of duplicated element, but which comes first

// Edge case
// 2 or more characters are duplicated
// object as element

// [['1', 1, 1, 2], [2, 2, 3]]  //
// ['1', 1, 1, 2, 2, 2, 3] //  ['1', 2, 3]

// Test
// flatten([[1, 2, 3], ['2', 4, 5]]) // [1, 2, 3, 4, 5]
// flatten([[1, 2, 3], ['2', 5]]) // [1, 2, 3, 5]
// flatten([[], []]) // []
// flatten([[], [1, 3]]) // [1, 3]