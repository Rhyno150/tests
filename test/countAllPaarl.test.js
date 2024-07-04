console.log(countAllPaarl('CJ 345 123, CK 345, CJ 123'));


describe('test my countAllPaarl function', function () {
    it('...should return the number of registration numbers in the string for Paarl', function () {

        assert.equal( countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

    });

    //it('...  should return the number of registration numbers in the string for Paarl', function () {

      //  assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));

      
  //  });

});
