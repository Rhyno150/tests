console.log(isFromBellville('CY 123'));

console.log(isFromBellville('CK 123'));



//describe('this test' , function(){
  //  it('should return true if reg num is from bellville' , function(){
    //    assert.equal(2,2);

       // assert.deepEqual([2,2],[2,2]);
    //});

//});

// test.js

// const { isFromBellville } = require('./isFromBellville'); // Adjust path if needed

describe('test my bellville function', function () {
  it('... should return ("true") when reg number starts with (CY)', function () {

    assert.equal(isFromBellville('CY 123'), true);

  });

  it('... should return ("false") when reg number starts with (CJ 123)', function () {

    assert.equal(isFromBellville('CJ 123'), false);

    
  });

});


describe('test my bellville function', function () {
  it('... should return ("true") when reg number starts with (CY)', function () {

    assert.equal(isFromBellville('CY 123'), true);

  });

  it('... should return ("false") when reg number starts with (CJ 123)', function () {

    assert.equal(isFromBellville('CK 869'), false);

    
  });

});


