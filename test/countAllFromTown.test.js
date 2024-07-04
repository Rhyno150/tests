



describe('test my countAllFromTown function', function () {
    it('...return the number of registration numbers in the string that is for that town', function () {

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)

    });

   // it('... should return ("Hello tsego") when called with tsego', function () {

      //  assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
  //  });

});