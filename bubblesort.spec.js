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

describe('A spy', function() {
  var arr = null;

  beforeAll(function () {
    arr = [];
    spyOn(window, 'swap');
  });

  it ('tracks the number of times it was called', function() {
    expect(window.swap.calls.count()).toEqual(0);

    window.swap(arr);
    window.swap(arr);
    window.swap(arr);

    expect(window.swap.calls.count()).toEqual(3);
  });
})

describe('A spy', function () {
  var arr = null;

  beforeAll(function () {
    arr = [];
    spyOn(window, 'compare');
  });

  it ('tracks the number of comparisons made', function () {
    expect(window.compare.calls.count()).toEqual(0);

    window.compare(arr);
    window.compare(arr);
    window.compare(arr);

    expect(window.compare.calls.count()).toEqual(3);
  })
})
