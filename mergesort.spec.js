describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    var evenArr = [1,2,3,4];
    var oddArr = [1,2,3,4,5];

    expect(split(evenArr)).toEqual([[1,2], [3,4]]);
    expect(split(oddArr)).toEqual([[1,2], [3,4,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    var arr1 = [1,3,5,8];
    var arr2 = [2,4,6,7];

    expect(merge(arr1, arr2)).toEqual([1,2,3,4,5,6,7,8]);
  });
});
