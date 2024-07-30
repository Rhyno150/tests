
// console.log(yearsAgo(1990));
// console.log(yearsAgo(1965));


// describe('test my yearsAgo function', function () {
//     it('... should return  return how many years ago that year is from the current year', function () {

//         assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

//     });

//    // it('... should return ("Hello tsego") when called with tsego', function () {

//      //   assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
//   //  });

// });


//describe('test my yearsAgo function', function () {
  //it('... should return  return how many years ago that year is from the current year', function () {

   //   assert.equal((new Date().getFullYear() - 1965), yearsAgo(1965))

//})
//});

describe('Test my yearsAgo function' , function(){
  it("It should return 47 years if the number of years passed is 1976." , function(){
      assert.equal(48, yearsAgo(1976), "This should be true");
  });

  it("It should return 23 years if the number of years passed is 2000." , function(){
      assert.equal(24, yearsAgo(2000), "This should be true");
  });
});
