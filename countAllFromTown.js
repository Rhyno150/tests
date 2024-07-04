var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
console.log(fromStellies, 3);


function countAllFromTown(registrationString, town) {
    const registrations = registrationString.split(',');
    
    let townRegistrationCount = 0;

    registrations.forEach(registration => { 
      if (registration.trim().startsWith(town)) {
        townRegistrationCount++;
      }
    });

    return townRegistrationCount; // Return the count
}

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies); // Output the result