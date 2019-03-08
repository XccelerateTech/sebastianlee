/*
Write a loop that logs every number from 1 to 30.

If the number is divisible through 3 it should log Hong instead. 
If the number is divisible by 5 it should log Kong instead. 
If the number is divisible by 3 and 5 it should log Hong Kong.

So the output should look something like this:


*/


// if (number%3 = 0)

// if (number%5) = 0

// return Hong

function loop () {
for (var i = 1; i < 31; i ++)

if (((i%3) == 0) && ((i%5) == 0)) console.log ('hong kong');
    else if((i%3) == 0){
         console.log('hong');
    } else if ((i%5) == 0) {
        console.log ('kong');
    } else {
        console.log (i);
    }
}   
 
loop ()
