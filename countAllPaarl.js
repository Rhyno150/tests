

function countAllPaarl(registrationNumbers) {
  
    var numbersArray = registrationNumbers.split(',');
    
    var count = 0;
    
    for(var i = 0; i < numbersArray.length; i++) {
      
      if(numbersArray[i].trim().startsWith('CJ')) {
        
        count++;
      }
    }}