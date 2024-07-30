// console.log(fromWhere('CY 567489'));


// describe('test my fromWhere function', function () {
//     it('... should return the town the car is from', function () {

//         assert.equal(fromWhere('CY 567489'), 'Bellville');

//     });

//     //it('... should return ("Hello tsego") when called with tsego', function () {

//       //  assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
//   //  });

// });


describe('Test my fromWhere function' , function(){
  it("It should return 'Bellville' if the car registration number start with 'CY'. " , function(){
      assert.equal("Bellville", fromWhere('CY 58792'), "This should be true");
  });

  it("It should return 'Paarl' if the car registration number start with 'CJ'. " , function(){
      assert.equal("Paarl", fromWhere('CJ 789621'), "This should be true");
  });

  it("It should return 'Cape Town' if the car registration number start with 'CA'." , function(){
      assert.equal("Cape Town", fromWhere('CA 963015'), "This should be true");
  });

  it("It should return 'Some other place!' if the car registration number start with 'ZN'. " , function(){
      assert.equal("Some other place!", fromWhere('ZN 874120'), "This should be true");
  });
});