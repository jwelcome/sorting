'use strict';

function bubbleSort(arr) {
  var sorted = false;

  // looping through the array
  for (var end = arr.length; end > 0 && !sorted; end--) {
    sorted = true;
    // bubbling
    for (var j = 0; j < end; j++) {
      if (!compare(arr, j)) {
        swap(arr, j);
        sorted = false;
      }
    }
  }

  return arr;
}

function compare(arr, index) {
  if (index === arr.length - 1) return true;
  return arr[index] < arr[index + 1];
}

function swap(arr, index) {
  var swappedItem = arr[index];
  arr[index] = arr[index+1];
  arr[index+1] = swappedItem;
}

// let counter = 0;

// function swap(arr) {
//   if (arr.length === counter) {
//     return arr;
//   } else {
//     //compare two elements
//     compare(arr)
//     }
//     counter++;
//     //console.log('number is', counter);
//     //recurse
//     return swap(arr);
//   }

// function bubbleSort(arr) {
//   return swap(arr);
// }

// function compare(arr) {
//   for (var i = 0; i < arr.length - counter; i++) {
//     // console.log(arr[i]);
//     if (arr[i] > arr[i+1]) {
//       let swappedItem = arr[i+1];
//       arr[i+1] = arr[i];
//       arr[i] = swappedItem;
//       // console.log(arr);
//     }
//   }
// }
