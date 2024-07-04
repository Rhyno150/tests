console.log(regCheck("RG 45 HN GP", 'GP'));
console.log(regCheck("LKG 679 EC", "EC"));
console.log(regCheck("GHT 456 MP", "MP"));
console.log(regCheck("FGT 491 L", "L"));
console.log(regCheck("ND 123-456", "ND"));
console.log(regCheck("CY 678-453", "CY"));
console.log(regCheck("CA 1234-123", "CA"));


describe('test my regCheck function', function () {
    it('... should return ("true") if registration number is like this RG 45 HN GP ', function () {
   // it('... should return ("true") if a registration number is like this ', function () {

        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
//assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

    });

    it('... should return ("false") if registration numbers like this ND 123-456', function () {

        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

      
    });

});
