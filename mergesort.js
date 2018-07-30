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
  // let smaller = arr1[0] <= arr2[0] ? arr1 : arr2;
  // let larger = smaller === arr1 ? arr2 : arr1;

  // console.log('smaller', smaller);
  // console.log('larger', larger);
  // console.log('empty arr??', mergedArr);

  // if (smaller.length === 1) {
  //   mergedArr.push(smaller[0]);
  //   mergedArr.push(larger[0]);
  //   return mergedArr;
  // }

  // mergedArr.push(smaller[0]);
  // console.log('merged arr', mergedArr);
  // return merge(smaller.slice(1), larger);

  let smaller = arr1.length < arr2.length ? arr1 : arr2;

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else {
      mergedArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }

  console.log('arr1', arr1);
  console.log('arr2', arr2);
  console.log('merged array', mergedArr);

  console.log('merged array + arr1', mergedArr.concat(arr1));

  mergedArr.concat(arr1);
  mergedArr.concat(arr2);
  return mergedArr.concat(arr1, arr2);

  // let arr1Start = arr1.shift();
  // let arr2Start = arr2.shift();

  // mergedArr.push(Math.min(arr1Start, arr2Start);
}
