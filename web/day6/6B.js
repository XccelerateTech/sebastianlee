// B 

// Write a function that receives a number and returns it in an array with the digits in reverse order.

// reverse(12345) // [5,4,3,2,1]
 HINT: Consider converting the number into a string then use a for loop to manipulate each letter. Useful method - toString() and Number().
 //
//   * 
//  Write a function that takes one input - the input is a number, maybe use toString()
//  then you will need to make a loop or use the split() method which makes a new array
//  reverse() method for arrays
//  then return the array 
//  */


 function reverse (number)

 let stringNumber = number.toString ();

 let numberArray = [];

 for (let i = 0; i < stringNumber.length; i ++ ){
     numberArray.push (stringNumber.charAt(i))


 }

 var reverse = numberArray.reverse ();
 return reversed

 reverse (12345)