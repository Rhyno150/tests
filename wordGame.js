function longestWord(str) {
    const words = str.split(' ');
    if (!words.length) return "Please Enter sentence";
  
    return 'The longest word is: ' + words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
  }
  
  function shortestWord(str) {
    const words = str.split(' ');
    if (!words.length) return "Please Enter sentence";
  
    return 'The shortest word is: ' + words.reduce((shortest, word) => word.length < shortest.length ? word : shortest);
  }
  
  function wordLengths(str) {
    const words = str.split(' ');
    if (!words.length) return "Please Enter sentence";
  
    return 'Sum of the alphabets is: ' + words.reduce((sum, word) => sum + word.length, 0);
  }
  

// function  longestWord(str){
//     let newList = str.split(' ');
//       var longstr = " " ;
//       var len = 0;
//         for(let item of newList){
  
//             if(item.length>=len){
//               len=item.length;
//               longstr = item;
//               // console.log(longstr);
//             } 
//         }
//       return longstr;
//     } 
  
//     function  shortestWord(str){
//     let newList = str.split(' ');
//       let shortstr = newList[0];
//         for(let item of newList){
//             if(item.length !==0 && item.length<=shortstr.length ){
//                 shortstr = item;
//               //console.log(shortstr);
//               } 
//           }
//       return shortstr;
//     }
  
//     function wordLengths(str){
//       let newList = str.split(' ').join().replaceAll(',', '');
//       //let newList = str.join().replaceAll(',', '');
//       var count = 0;
//           for(let item of newList){
              
//               count++;
//            // console.log(newList);
            
//           }
//       return count
//     }
   
  
  