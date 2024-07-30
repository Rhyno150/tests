

// describe('test my totalPhoneBill function', function () {
//     it('... should calculate the total bill for the data provided.', function () {
//       // Call the function and store the return value in a variable
//       const totalBill = totalPhoneBill('call, sms, call, sms, sms');
  
//       // Assertion: compare the returned value with the expected value
//       assert.equal(totalBill, 'R2.75'); // Replace 'R2.75' with the expected output
//     });
//   });
  




describe('Test my total Phone Bill function' , function(){
   
  it("It should return 'R3.40' if string calls made and sms's sent is equal to 'call, sms'. " , function(){
      assert.equal("R3.40", totalPhoneBill('call, sms'), "This should be true");
  });
  it("It should return 'R7.45' if string calls made and sms's sent is equal to 'call, sms, call, sms, sms'. " , function(){
      assert.equal("R7.45", totalPhoneBill('call, sms, call, sms, sms'), "This should be true");
  });

  it("It should return 'R1.30' if string calls made and sms's sent is equal to 'sms, sms'. " , function(){
      assert.equal("R1.30", totalPhoneBill('sms, sms'), "This should be true");
  });
});
