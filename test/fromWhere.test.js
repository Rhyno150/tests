console.log(fromWhere('CY 567489'));


describe('test my fromWhere function', function () {
    it('... should return the town the car is from', function () {

        assert.equal(fromWhere('CY 567489'), 'Bellville');

    });

    //it('... should return ("Hello tsego") when called with tsego', function () {

      //  assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
  //  });

});
