function split(wholeArray) {
  let firstHalf = [];
  let secondHalf = [];
  const midpoint = Math.floor(wholeArray.length / 2);
  firstHalf = wholeArray.slice(0, midpoint);
  secondHalf = wholeArray.slice(midpoint);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArr = [];
  let smaller = arr1[0] <= arr2[0] ? arr1 : arr2;
  let larger = smaller === arr1 ? arr2 : arr1;
  mergedArr.push(smaller[0]);
  return merge(smaller.slice(1), larger);
}
