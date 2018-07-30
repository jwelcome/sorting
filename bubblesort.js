let counter = 0;

function swap(arr) {
  if (arr.length === counter) {
    return arr;
  } else {
    //compare two elements
    for (var i = 0; i < arr.length - counter; i++) {
      console.log(arr[i]);
      if (arr[i] > arr[i+1]) {
        let swappedItem = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = swappedItem;
        console.log(arr);
      }
    }

    counter++;
    console.log('number is', counter);

    //recurse
    return swap(arr);
  }
}

function bubbleSort(arr) {
  return swap(arr);
}
