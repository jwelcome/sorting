function swap(arr) {
  if (!arr.length) {
    return arr;
  } else {
    //compare two elements
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (arr[i] > arr[i+1]) {
        let swappedItem = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = swappedItem;
        console.log(arr);
      }
    }
    //recurse
    return swap(arr.slice(0, arr.length - 1));
  }
}





function bubbleSort(arr) {
  return swap(arr);
}
