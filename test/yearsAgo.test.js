
console.log(yearsAgo(1990));
console.log(yearsAgo(1965));


describe('test my yearsAgo function', function () {
    it('... should return  return how many years ago that year is from the current year', function () {

        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    });

   // it('... should return ("Hello tsego") when called with tsego', function () {

     //   assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
  //  });

});


//describe('test my yearsAgo function', function () {
  //it('... should return  return how many years ago that year is from the current year', function () {

   //   assert.equal((new Date().getFullYear() - 1965), yearsAgo(1965))

//})
//});
