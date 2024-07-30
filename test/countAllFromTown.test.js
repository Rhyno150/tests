



// describe('test my countAllFromTown function', function () {
//     it('...return the number of registration numbers in the string that is for that town', function () {

//         var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//         //fromStellies should contains
//         assert.equal(fromStellies, 3)

//     });

//    // it('... should return ("Hello tsego") when called with tsego', function () {

//       //  assert.equal(greet("tsego"), greet("tsego"), "this should not be true");

      
//   //  });

// });


describe('Test my countAllFromTown function' , function(){
    it("It should return 3 registration numbers if counting regNums for Stellies town." , function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), "This should be true");
    });


    it("It should return 2 registration number if counting regNums for Kuilsriver town." , function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), "This should be true");
    });

    it("It should return 1 registration number if counting regNums for Kuilsriver town." , function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), "This should be true");
    });
});