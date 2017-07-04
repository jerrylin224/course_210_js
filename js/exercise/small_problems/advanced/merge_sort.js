// input: an array (before being sorted)
// output:  an sorted array

// Rule/Model
// Recursive sorting algorithm
// The argiment will be an array with all numbers or all strings as elments
// The array will be break into nested sub-array
// [9, 5, 7, 1] ->
// [[9, 5], [7, 1]] -> every 2 elements will be in the same sub-array
// [[[9], [5]], [[7], [1]]] -> every element will be in one sub-array
// [[5, 9], [1, 7]] -> merge each sub-array and sort the array
// [1, 5, 7, 9] -> merge the array and sort the array

// Algorithm 
// Use an empty to collect the subarray
// and use the collected subarray to be break into a new subarray
// funciton recusiveArray(array) {
//    var newArray = [];
//    var count = 0;
//    var subArray = [];
// 
//    for (var i = 0; i < array.length; i++ {
//         subArray.push(array[i]);
//         count++;
//         if (count === 2) {
//           newArray.push(subArray)   
//           count = 0; 
//           subArray = [];
//         }
//         if (i = array.length - 1) newArray.push(subArray)
//    }) 
// }
// merge the subarray and sort it(make a funciton here)
// repeat again
// 