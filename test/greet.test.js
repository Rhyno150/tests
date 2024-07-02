console.log(greet("Rhyno"));
console.log(greet("Tsego"));
console.log(greet("bheki"));


describe('test my greet function', function () {
    it('... should return ("Hello rhyno") when called with rhyno', function () {

        assert.equal(greet("rhyno"), greet("rhyno"), "this should not be true");

    });

    it('... should return ("Hello tsego") when called with tsego', function () {

        assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
    });

});

