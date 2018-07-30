describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with a single element', function() {
    expect (bubbleSort([1])).toEqual([1]);
  });

  it ('handles an array with multiple elements and sorts them', function() {
    expect (bubbleSort([1,4,3,6,5,2])).toEqual([1,2,3,4,5,6]);
  });

});

describe('Swap', function() {

  beforeAll(function () {
    spyOn(arr, 'swap').and.callThrough();
  });

  it ('tracks the number of times it was called', function() {
    expect(arr.swap.calls.count()).toEqual(0);

    arr.swap();
    arr.swap();
    arr.swap();

    expect(arr.swap.calls.count()).toEqual(3);
  });
})
