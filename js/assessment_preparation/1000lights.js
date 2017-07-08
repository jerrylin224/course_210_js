// You have a bank of switches before you, numbered from 1 to n. Each switch 
// is connected to exactly one light that is initially off. You walk down 
// the row of switches, and toggle every one of them. You go back to the 
// beginning, and on this second pass you toggle switches 2, 4, 6, and so on. 
// On the third pass, you go back again to the beginning and toggle switches
// 3, 6, 9, and so on. You repeat this process and keep going until you have
//  been through n repetitions.

// Write a program that takes one argument, total number of switches, 
// and returns an array of lights that are on after n repetitions.

// Model
// lightsOn(5) a (random as argument)
// [1, 4]        (on light remained)

// Requirment
// all light are off(total n lights)
// iterate from 1 to argument
// toggle the light based on the multiple of the index
// get the on light after iteration (from 1 to given argument)


// Example
// lightsOn(5);   // [1, 4];
// lightsOn(6)    // [1, 4];
// lightsOn(100);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];


// Data
// input: number positive
// output: array (collection of switched on light)

// Edge case

// Algorithm
// how to set the state of the each light?
// set the collection of the light as object?
// - {1: true, 2: false, 3: false}
// - iterate through from 1 to argument, set all the state as false (var lights;)
// iterate from 1 to zero based on the multiple of the "index", toggle the state
// - state of chosen lights will be reversed (state = !state)
// collect the on lights 
// iterate throgh the lights, check the value of each property
// - if (lights[n] === true) push to an collection array
// return or log the array

function lightsOn(n) {
  var lights = {};
  var collectionInNum = [];
  for (var i = 1; i <= n; i++) {
    lights[i] = false;
  }

  var lightArr = Object.keys(lights);

  lightArr.forEach(function(el) {
    for (var i = 1; i <= lightArr.length; i++) {
      if (i % el === 0) {
        lights[i] = !lights[i];
      }
    }
  });

  var collection = Object.keys(lights).filter(function(el, idx) {
    if (lights[idx + 1]) {
      return lights[idx + 1]
    }
  });

  collection.forEach(function(el) {
    collectionInNum.push(Number(el));
  });

  return collectionInNum;
}


console.log(lightsOn(5));   // [1, 4];

console.log(lightsOn(100));  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];