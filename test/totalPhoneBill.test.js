

describe('test my totalPhoneBill function', function () {
    it('... should calculate the total bill for the data provided.', function () {
      // Call the function and store the return value in a variable
      const totalBill = totalPhoneBill('call, sms, call, sms, sms');
  
      // Assertion: compare the returned value with the expected value
      assert.equal(totalBill, 'R2.75'); // Replace 'R2.75' with the expected output
    });
  });
  
