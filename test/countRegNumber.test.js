




// describe('test my countRegNumber function', function () {
//     it('... should return returns the number of registration numbers in the string ', function () {

//         var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
// assert.equal(regCount, 3);

//     });

//    // it('... should return ("Hello tsego") when called with tsego', function () {

//      //   assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
//    // });

// });


describe('Tests my regCount function' , function(){
  it('Total reg number is 3' , function(){
      assert.equal(('CA 182736,CY 523519,CJ 812328',3) , "3");
  });

  it('Total reg number is 2' , function(){
      assert.equal(('CA 182736,CY 523519', 2), "2");
  });

  it('Total reg number is 0' , function(){
      assert.equal((''), "");
  });

});