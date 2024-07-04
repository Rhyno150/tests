
console.log(isWeekday('Tuesday')),



describe('test my isWeekday function', function () {
    it('... should return ("true") if the parameter passed in is a day of the week', function () {

        assert.equal(isWeekday('Monday'), true);

    });

    it('... should return ("false") if the parameter passed is not a day of the week', function () {

        assert.equal(isWeekday('Sunday'), false);
      
    });

});